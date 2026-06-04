/* =====================================================
   LanCul — supabase.js
   Replaces localStorage with real Supabase backend
   Import BEFORE shared.js in every HTML page
===================================================== */

const SUPA_URL = "https://kjfliablamasdxbzkmdu.supabase.co";
const SUPA_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtqZmxpYWJsYW1hc2R4YnprbWR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA1MDA0NjAsImV4cCI6MjA5NjA3NjQ2MH0.-bAq4GlKbeCgLfOOZeePSyPviFgiHyBe2Wmpz-L7PAk";

// Load Supabase SDK from CDN
const _supaScript = document.createElement("script");
_supaScript.src = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.js";
_supaScript.onload = () => {
  window._supa = window.supabase.createClient(SUPA_URL, SUPA_KEY);
  window.dispatchEvent(new Event("supabase_ready"));
};
document.head.appendChild(_supaScript);

// Helper: wait for supabase ready
function waitSupa(fn) {
  if (window._supa) return fn();
  window.addEventListener("supabase_ready", fn, { once: true });
}

/* =====================================================
   AUTH — replaces getUser() / setUser() / logout()
===================================================== */

// Get current session user
async function getSupaUser() {
  if (!window._supa) return null;
  const { data: { session } } = await window._supa.auth.getSession();
  if (!session) return null;
  // Also get profile
  const { data: profile } = await window._supa
    .from("profiles").select("*").eq("id", session.user.id).single();
  return profile ? { ...profile, supaId: session.user.id } : {
    supaId: session.user.id,
    name: session.user.email?.split("@")[0] || "مستخدم",
    email: session.user.email,
    role: "client"
  };
}

// Sign up
async function supaSignUp(email, password, name, role = "client") {
  const { data, error } = await window._supa.auth.signUp({
    email,
    password,
    options: { data: { name, role } }
  });
  if (error) throw error;
  return data;
}

// Sign in
async function supaSignIn(email, password) {
  const { data, error } = await window._supa.auth.signInWithPassword({ email, password });
  if (error) throw error;
  return data;
}

// Sign out
async function supaSignOut() {
  await window._supa?.auth.signOut();
}

// Auth state listener
function onAuthChange(callback) {
  waitSupa(() => {
    window._supa.auth.onAuthStateChange((event, session) => {
      callback(event, session);
    });
  });
}

/* =====================================================
   PROVIDERS
===================================================== */

async function fetchProviders(filters = {}) {
  let query = window._supa.from("providers").select("*").eq("status", "active");
  if (filters.city)  query = query.eq("city", filters.city);
  if (filters.lang)  query = query.contains("languages", [filters.lang]);
  if (filters.offer) query = query.contains("offers", [filters.offer]);
  if (filters.spec)  query = query.contains("specializations", [filters.spec]);

  const sortMap = {
    rating:     { col: "rating",              asc: false },
    price_asc:  { col: "price_hourly_no_car", asc: true  },
    price_desc: { col: "price_hourly_no_car", asc: false },
    jobs:       { col: "jobs_count",          asc: false },
  };
  const sort = sortMap[filters.sort || "rating"];
  query = query.order(sort.col, { ascending: sort.asc });

  const { data, error } = await query;
  if (error) { console.error("fetchProviders:", error); return []; }

  // Map DB columns to the format used by shared.js
  return data.map(p => ({
    id: p.id,
    name: p.name,
    nameEn: p.name_en,
    city: p.city,
    bio: p.bio,
    languages: p.languages || [],
    specializations: p.specializations || [],
    offers: p.offers || [],
    rating: parseFloat(p.rating),
    reviews: p.reviews_count,
    jobs: p.jobs_count,
    verified: p.verified,
    pricing: {
      hourly_no_car:   p.price_hourly_no_car,
      hourly_with_car: p.price_hourly_with_car,
      fullday_no_car:  p.price_fullday_no_car,
      fullday_with_car:p.price_fullday_with_car,
    }
  }));
}

/* =====================================================
   BOOKINGS
===================================================== */

async function createBooking(bookingData) {
  const user = await getSupaUser();
  if (!user) throw new Error("يجب تسجيل الدخول");

  const payload = {
    client_id:     user.supaId,
    provider_id:   bookingData.providerId,
    service:       bookingData.service,
    date:          bookingData.date,
    time_from:     bookingData.time,
    hours:         bookingData.hours,
    with_car:      bookingData.withCar,
    city:          bookingData.city || "الرياض",
    notes:         bookingData.notes,
    total:         bookingData.total,
    client_name:   user.name,
    provider_name: bookingData.providerName,
    status:        "pending",
    commission_pct: 15,
  };

  const { data, error } = await window._supa.from("bookings").insert(payload).select().single();
  if (error) throw error;

  // Open/ensure chat channel
  await ensureChat(user.supaId, bookingData.providerId, data.id);

  // Send booking card message to chat
  const chat = await getOrCreateChat(user.supaId, bookingData.providerId);
  if (chat) {
    await window._supa.from("messages").insert({
      chat_id: chat.id,
      sender_id: user.supaId,
      type: "booking",
      metadata: { booking: data }
    });
    // Auto-reply from provider side
    await window._supa.from("messages").insert({
      chat_id: chat.id,
      sender_id: user.supaId, // placeholder until provider auth exists
      type: "system",
      text: "تم استلام طلب الحجز 📋 سنؤكد خلال ساعة."
    });
  }

  return data;
}

async function fetchBookings() {
  const user = await getSupaUser();
  if (!user) return [];
  const { data, error } = await window._supa
    .from("bookings").select("*")
    .eq("client_id", user.supaId)
    .order("created_at", { ascending: false });
  if (error) { console.error("fetchBookings:", error); return []; }
  return data.map(mapBooking);
}

async function fetchAllBookings() { // admin
  const { data, error } = await window._supa
    .from("bookings_full").select("*")
    .order("created_at", { ascending: false });
  if (error) return [];
  return data.map(mapBooking);
}

async function updateBookingStatus(id, status, extra = {}) {
  const payload = { status, ...extra };
  if (status === "confirmed" && !extra.trip_code) {
    payload.trip_code = Math.floor(100000 + Math.random() * 900000).toString();
    payload.code_unlocked = false;
  }
  const { data, error } = await window._supa
    .from("bookings").update(payload).eq("id", id).select().single();
  if (error) throw error;

  // Notify via chat
  if (status === "confirmed") {
    const bk = data;
    const chat = await getChatByBooking(id);
    if (chat) {
      await window._supa.from("messages").insert({
        chat_id: chat.id,
        sender_id: bk.client_id,
        type: "system",
        text: `✅ تم تأكيد الحجز من الإدارة. كود الرحلة جاهز — الكود مقفل حتى وصول المُقدم.`
      });
    }
  }
  return data;
}

function mapBooking(b) {
  return {
    id: b.id,
    providerId: b.provider_id,
    providerName: b.provider_name || b.provider_full_name,
    clientName: b.client_name || b.profile_name,
    clientEmail: b.profile_email,
    service: b.service,
    date: b.date,
    time: b.time_from,
    hours: parseFloat(b.hours),
    withCar: b.with_car,
    city: b.city,
    notes: b.notes,
    total: b.total,
    commissionAmount: b.commission_amount,
    providerAmount: b.provider_amount,
    tripCode: b.trip_code,
    codeUnlocked: b.code_unlocked,
    status: b.status,
    createdAt: b.created_at,
  };
}

/* =====================================================
   CHAT & MESSAGES
===================================================== */

async function ensureChat(clientId, providerId, bookingId = null) {
  const existing = await window._supa
    .from("chats").select("id")
    .eq("client_id", clientId).eq("provider_id", providerId)
    .maybeSingle();
  if (existing.data) return existing.data;

  const { data } = await window._supa.from("chats").insert({
    client_id: clientId,
    provider_id: providerId,
    booking_id: bookingId
  }).select().single();
  return data;
}

async function getOrCreateChat(clientId, providerId) {
  return ensureChat(clientId, providerId);
}

async function getChatByBooking(bookingId) {
  const { data } = await window._supa
    .from("chats").select("*").eq("booking_id", bookingId).maybeSingle();
  return data;
}

async function fetchMessages(chatId) {
  const { data, error } = await window._supa
    .from("messages").select("*")
    .eq("chat_id", chatId)
    .order("created_at", { ascending: true });
  if (error) return [];
  return data;
}

async function sendMessage(chatId, text, type = "text", metadata = null) {
  const user = await getSupaUser();
  if (!user) throw new Error("يجب تسجيل الدخول");
  const { data, error } = await window._supa.from("messages").insert({
    chat_id: chatId,
    sender_id: user.supaId,
    text,
    type,
    metadata
  }).select().single();
  if (error) throw error;
  return data;
}

// Realtime messages subscription
function subscribeToMessages(chatId, callback) {
  return window._supa
    .channel(`messages_${chatId}`)
    .on("postgres_changes", {
      event: "INSERT", schema: "public",
      table: "messages", filter: `chat_id=eq.${chatId}`
    }, payload => callback(payload.new))
    .subscribe();
}

async function fetchUserChats() {
  const user = await getSupaUser();
  if (!user) return [];
  const { data, error } = await window._supa
    .from("chats").select(`
      *,
      providers:provider_id ( name, languages )
    `)
    .eq("client_id", user.supaId)
    .order("created_at", { ascending: false });
  if (error) return [];
  return data;
}

// Admin: all chats with messages
async function fetchAllChats() {
  const { data, error } = await window._supa
    .from("chats").select(`
      *,
      client:client_id ( name, email ),
      provider:provider_id ( name ),
      messages ( id, text, type, sender_id, created_at, metadata )
    `)
    .order("created_at", { ascending: false });
  if (error) return [];
  return data;
}

/* =====================================================
   RFQ
===================================================== */

async function createRFQ(rfqData) {
  const payload = {
    company:       rfqData.company,
    event_type:    rfqData.eventType,
    event_date:    rfqData.eventDate || null,
    city:          rfqData.city,
    langs:         rfqData.langs,
    persons:       rfqData.persons ? parseInt(rfqData.persons) : null,
    duration_days: rfqData.duration ? parseInt(rfqData.duration) : null,
    budget:        rfqData.budget ? parseInt(rfqData.budget) : null,
    description:   rfqData.desc,
    contact_name:  rfqData.contactName,
    contact_email: rfqData.contactEmail,
    contact_phone: rfqData.contactPhone,
    status:        "new",
  };
  const { data, error } = await window._supa.from("rfqs").insert(payload).select().single();
  if (error) throw error;
  return data;
}

async function fetchRFQs(status = null) {
  let query = window._supa.from("rfqs").select("*, rfq_bids(*)").order("created_at", { ascending: false });
  if (status) query = query.eq("status", status);
  const { data, error } = await query;
  if (error) return [];
  return data.map(r => ({
    id: r.id,
    company: r.company,
    eventType: r.event_type,
    eventDate: r.event_date,
    city: r.city,
    langs: r.langs,
    persons: r.persons,
    duration: r.duration_days,
    budget: r.budget,
    desc: r.description,
    contactName: r.contact_name,
    contactEmail: r.contact_email,
    contactPhone: r.contact_phone,
    status: r.status,
    selectedProvider: r.selected_provider,
    finalPrice: r.final_price,
    quotedAt: r.quoted_at,
    bids: (r.rfq_bids || []).map(b => ({
      id: b.id,
      providerName: b.provider_name,
      rate: b.rate,
      desc: b.description,
      time: b.created_at,
    })),
    createdAt: r.created_at,
  }));
}

async function submitRFQBid(rfqId, providerName, rate, description) {
  const { data, error } = await window._supa.from("rfq_bids").insert({
    rfq_id: rfqId,
    provider_name: providerName,
    rate: parseInt(rate),
    description,
  }).select().single();
  if (error) throw error;
  return data;
}

async function updateRFQStatus(id, status, extra = {}) {
  const payload = { status };
  if (extra.selectedProvider)  payload.selected_provider = extra.selectedProvider;
  if (extra.providerRate)       payload.provider_rate = extra.providerRate;
  if (extra.adminMargin !== undefined) payload.admin_margin = extra.adminMargin;
  if (extra.finalPrice)         payload.final_price = extra.finalPrice;
  if (status === "quoted")      payload.quoted_at = new Date().toISOString();
  const { error } = await window._supa.from("rfqs").update(payload).eq("id", id);
  if (error) throw error;
}

/* =====================================================
   ADMIN
===================================================== */

async function fetchAdminSummary() {
  const { data, error } = await window._supa.from("admin_summary").select("*").single();
  if (error) return {};
  return data;
}

async function fetchProviderApplications() {
  const { data } = await window._supa
    .from("providers").select("*").eq("status", "pending").order("created_at", { ascending: false });
  return data || [];
}

async function approveProvider(id) {
  await window._supa.from("providers").update({ status: "active", verified: true }).eq("id", id);
}

async function rejectProvider(id) {
  await window._supa.from("providers").update({ status: "rejected" }).eq("id", id);
}

async function submitProviderApplication(data) {
  const user = await getSupaUser();
  const payload = {
    user_id: user?.supaId,
    name: data.name,
    city: data.city,
    bio: data.bio,
    languages: data.langs ? data.langs.split(",").map(l => l.trim()) : [],
    specializations: data.specs ? data.specs.split(",").map(s => s.trim()) : [],
    offers: data.offers ? data.offers.split(",") : [],
    price_hourly_no_car:   parseInt(data.pricing?.hourly_no_car)   || 120,
    price_hourly_with_car: parseInt(data.pricing?.hourly_with_car) || 160,
    price_fullday_no_car:  parseInt(data.pricing?.fullday_no_car)  || 650,
    price_fullday_with_car:parseInt(data.pricing?.fullday_with_car)|| 800,
    status: "pending",
  };
  const { error } = await window._supa.from("providers").insert(payload);
  if (error) throw error;
}

/* =====================================================
   MARKETPLACE & EXPERIENCES
===================================================== */

async function fetchMarketplace() {
  const { data } = await window._supa.from("marketplace").select("*").eq("active", true);
  return (data || []).map(m => ({
    id: m.id, name: m.name, nameEn: m.name_en,
    cat: m.category, city: m.city, desc: m.description,
    emoji: m.emoji, langs: m.langs || [], featured: m.featured
  }));
}

async function fetchExperiences() {
  const { data } = await window._supa.from("experiences").select("*").eq("active", true);
  return (data || []).map(e => ({
    id: e.id, title: e.title, titleEn: e.title_en,
    city: e.city, cat: e.category, hours: parseFloat(e.hours),
    price: e.price_per_person, pax: e.max_participants,
    emoji: e.emoji, grad: e.gradient || "linear-gradient(135deg,#1a1a2e,#16213e)"
  }));
}

/* =====================================================
   REVIEWS
===================================================== */

async function submitReview(bookingId, providerId, rating, comment) {
  const user = await getSupaUser();
  if (!user) throw new Error("يجب تسجيل الدخول");
  const { error } = await window._supa.from("reviews").insert({
    booking_id: bookingId,
    client_id: user.supaId,
    provider_id: providerId,
    rating: parseInt(rating),
    comment,
  });
  if (error) throw error;
  // Update booking status to completed
  await window._supa.from("bookings").update({ status: "completed" }).eq("id", bookingId);
}

/* =====================================================
   BACKWARD COMPAT — shared.js uses these names
   Override them to use Supabase instead of localStorage
===================================================== */

// These will be called by shared.js — we replace with async versions
// Pages that use Supabase will call the async versions directly

window.supaAPI = {
  // Auth
  signUp: supaSignUp,
  signIn: supaSignIn,
  signOut: supaSignOut,
  getUser: getSupaUser,
  onAuthChange,

  // Providers
  fetchProviders,

  // Bookings
  createBooking,
  fetchBookings,
  fetchAllBookings,
  updateBookingStatus,

  // Chat
  ensureChat,
  getOrCreateChat,
  fetchMessages,
  sendMessage,
  subscribeToMessages,
  fetchUserChats,
  fetchAllChats,

  // RFQ
  createRFQ,
  fetchRFQs,
  submitRFQBid,
  updateRFQStatus,

  // Admin
  fetchAdminSummary,
  fetchProviderApplications,
  approveProvider,
  rejectProvider,
  submitProviderApplication,

  // Content
  fetchMarketplace,
  fetchExperiences,
  submitReview,
};

console.log("✅ LanCul Supabase client initialized");
