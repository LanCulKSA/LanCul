/* =============================================
   LanCul — supabase.js  v2
   Full Supabase integration
   Load AFTER lang.js, BEFORE shared.js
============================================= */

const SUPA_URL  = "https://kjfliablamasdxbzkmdu.supabase.co";
const SUPA_ANON = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtqZmxpYWJsYW1hc2R4YnprbWR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA1MDA0NjAsImV4cCI6MjA5NjA3NjQ2MH0.-bAq4GlKbeCgLfOOZeePSyPviFgiHyBe2Wmpz-L7PAk";

// ── Load Supabase SDK ──────────────────────────
(function loadSDK() {
  const s = document.createElement("script");
  s.src = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.js";
  s.onload = () => {
    window._sb = window.supabase.createClient(SUPA_URL, SUPA_ANON);
    window.dispatchEvent(new Event("sb_ready"));
    console.log("✅ Supabase ready");
  };
  s.onerror = () => console.warn("⚠️ Supabase SDK failed to load — using localStorage fallback");
  document.head.appendChild(s);
})();

// ── Helper: wait for SDK ───────────────────────
function sbReady(fn) {
  if (window._sb) return fn();
  window.addEventListener("sb_ready", fn, { once: true });
}

// ── Helper: API headers ────────────────────────
function sbHeaders(extra = {}) {
  return {
    "Content-Type":  "application/json",
    "apikey":         SUPA_ANON,
    "Authorization": "Bearer " + SUPA_ANON,
    "Prefer":         "return=representation",
    ...extra
  };
}

// ── Generic fetch wrapper ──────────────────────
async function sbFetch(path, opts = {}) {
  const r = await fetch(SUPA_URL + "/rest/v1/" + path, {
    headers: sbHeaders(opts.headers || {}),
    ...opts
  });
  if (!r.ok) {
    const err = await r.text();
    throw new Error(`Supabase ${r.status}: ${err}`);
  }
  return r.status === 204 ? null : r.json();
}

/* =============================================
   AUTH
============================================= */
async function supaSignUp(email, password, name, role = "client") {
  if (!window._sb) throw new Error("Supabase not loaded");
  const { data, error } = await window._sb.auth.signUp({
    email, password,
    options: { data: { name, role } }
  });
  if (error) throw error;
  return data;
}

async function supaSignIn(email, password) {
  if (!window._sb) throw new Error("Supabase not loaded");
  const { data, error } = await window._sb.auth.signInWithPassword({ email, password });
  if (error) throw error;
  // Cache user
  if (data.user) {
    const profile = await sbFetch(`profiles?id=eq.${data.user.id}&select=*`);
    const u = profile?.[0] || { id: data.user.id, email, name: name || email.split("@")[0], role: "client" };
    setUser({ ...u, supaId: data.user.id });
  }
  return data;
}

async function supaSignOut() {
  if (window._sb) await window._sb.auth.signOut();
  logout();
}

async function supaGetUser() {
  if (!window._sb) return null;
  const { data: { session } } = await window._sb.auth.getSession();
  if (!session) return null;
  const profile = await sbFetch(`profiles?id=eq.${session.user.id}&select=*`);
  const u = profile?.[0];
  return u ? { ...u, supaId: session.user.id } : {
    supaId: session.user.id,
    name:   session.user.email?.split("@")[0],
    email:  session.user.email,
    role:   "client"
  };
}

/* =============================================
   PROVIDERS
============================================= */
async function supaFetchProviders(filters = {}) {
  let q = "providers?select=*&status=eq.active";
  if (filters.city)  q += `&city=eq.${encodeURIComponent(filters.city)}`;
  if (filters.offer) q += `&offers=cs.{${filters.offer}}`;
  const sort = {
    rating:     "rating.desc",
    price_asc:  "price_hourly_no_car.asc",
    price_desc: "price_hourly_no_car.desc",
    jobs:       "jobs_count.desc",
  }[filters.sort || "rating"] || "rating.desc";
  q += `&order=${sort}`;

  const data = await sbFetch(q);
  return (data || []).map(mapProvider);
}

async function supaFetchProvider(id) {
  const data = await sbFetch(`providers?id=eq.${id}&select=*`);
  return data?.[0] ? mapProvider(data[0]) : null;
}

async function supaSubmitProviderApp(appData) {
  return sbFetch("providers", {
    method: "POST",
    body: JSON.stringify({
      name:              appData.name,
      city:              appData.city,
      bio:               appData.bio,
      languages:         appData.langs?.split(",").map(l=>l.trim()).filter(Boolean) || [],
      specializations:   appData.specs?.split(",").map(s=>s.trim()).filter(Boolean) || [],
      offers:            appData.offers?.split(",").filter(Boolean) || [],
      price_hourly_no_car:    parseInt(appData.pricing?.hourly_no_car)    || 120,
      price_hourly_with_car:  parseInt(appData.pricing?.hourly_with_car)  || 160,
      price_fullday_no_car:   parseInt(appData.pricing?.fullday_no_car)   || 650,
      price_fullday_with_car: parseInt(appData.pricing?.fullday_with_car) || 800,
      status: "pending"
    })
  });
}

function mapProvider(p) {
  return {
    id:              p.id,
    name:            p.name,
    nameEn:          p.name_en,
    city:            p.city,
    bio:             p.bio,
    languages:       p.languages || [],
    specializations: p.specializations || [],
    offers:          p.offers || [],
    rating:          parseFloat(p.rating) || 5.0,
    reviews:         p.reviews_count || 0,
    jobs:            p.jobs_count || 0,
    verified:        p.verified || false,
    pricing: {
      hourly_no_car:    p.price_hourly_no_car   || 120,
      hourly_with_car:  p.price_hourly_with_car  || 160,
      fullday_no_car:   p.price_fullday_no_car   || 650,
      fullday_with_car: p.price_fullday_with_car || 800,
    }
  };
}

/* =============================================
   BOOKINGS
============================================= */
async function supaCreateBooking(bkData) {
  const user = await supaGetUser();
  if (!user) throw new Error("يجب تسجيل الدخول");

  const payload = {
    client_id:    user.supaId,
    provider_id:  bkData.providerId,
    service:      bkData.service,
    date:         bkData.date,
    time_from:    bkData.time,
    hours:        bkData.hours,
    with_car:     bkData.withCar,
    city:         bkData.city || "الرياض",
    notes:        bkData.notes || "",
    total:        bkData.total,
    client_name:  user.name,
    provider_name:bkData.providerName,
    status:       "pending",
    commission_pct: 15
  };

  const bk = await sbFetch("bookings", { method: "POST", body: JSON.stringify(payload) });
  const saved = Array.isArray(bk) ? bk[0] : bk;

  // Open chat channel
  if (saved) await supaEnsureChat(user.supaId, bkData.providerId, saved.id);

  return saved ? mapBooking(saved) : null;
}

async function supaFetchMyBookings() {
  const user = await supaGetUser();
  if (!user) return [];
  const data = await sbFetch(`bookings?client_id=eq.${user.supaId}&order=created_at.desc`);
  return (data || []).map(mapBooking);
}

async function supaFetchAllBookings() {
  const data = await sbFetch("bookings?order=created_at.desc&select=*,profiles!client_id(name,email),providers!provider_id(name,city)");
  return (data || []).map(mapBooking);
}

async function supaUpdateBooking(id, updates) {
  const payload = { ...updates };
  if (updates.status === "confirmed" && !updates.trip_code) {
    payload.trip_code    = Math.floor(100000 + Math.random()*900000).toString();
    payload.code_unlocked = false;
  }
  const data = await sbFetch(`bookings?id=eq.${id}`, { method: "PATCH", body: JSON.stringify(payload) });
  return data?.[0] ? mapBooking(data[0]) : null;
}

async function supaVerifyTripCode(bookingId, code) {
  const data = await sbFetch(`bookings?id=eq.${bookingId}&select=trip_code,status`);
  const bk = data?.[0];
  if (!bk || bk.trip_code !== code) return false;
  await supaUpdateBooking(bookingId, { status: "active", code_unlocked: true, trip_started_at: new Date().toISOString() });
  return true;
}

function mapBooking(b) {
  return {
    id:               b.id,
    providerId:       b.provider_id,
    providerName:     b.provider_name || b.providers?.name,
    clientName:       b.client_name   || b.profiles?.name,
    clientEmail:      b.profiles?.email,
    service:          b.service,
    date:             b.date,
    time:             b.time_from,
    hours:            parseFloat(b.hours),
    withCar:          b.with_car,
    city:             b.city,
    notes:            b.notes,
    total:            b.total,
    commissionAmount: b.commission_amount,
    providerAmount:   b.provider_amount,
    tripCode:         b.trip_code,
    codeUnlocked:     b.code_unlocked,
    status:           b.status,
    createdAt:        b.created_at,
  };
}

/* =============================================
   CHAT
============================================= */
async function supaEnsureChat(clientId, providerId, bookingId = null) {
  // Check if chat exists
  const existing = await sbFetch(`chats?client_id=eq.${clientId}&provider_id=eq.${providerId}&select=id`);
  if (existing?.[0]) return existing[0];
  // Create
  const data = await sbFetch("chats", {
    method: "POST",
    body: JSON.stringify({ client_id: clientId, provider_id: providerId, booking_id: bookingId })
  });
  return Array.isArray(data) ? data[0] : data;
}

async function supaFetchMessages(chatId) {
  return sbFetch(`messages?chat_id=eq.${chatId}&order=created_at.asc`);
}

async function supaSendMessage(chatId, text, type = "text", metadata = null) {
  const user = await supaGetUser();
  if (!user) throw new Error("يجب تسجيل الدخول");
  return sbFetch("messages", {
    method: "POST",
    body: JSON.stringify({ chat_id: chatId, sender_id: user.supaId, text, type, metadata })
  });
}

function supaSubscribeMessages(chatId, callback) {
  if (!window._sb) return null;
  return window._sb
    .channel(`chat_${chatId}`)
    .on("postgres_changes", {
      event: "INSERT", schema: "public", table: "messages",
      filter: `chat_id=eq.${chatId}`
    }, p => callback(p.new))
    .subscribe();
}

async function supaFetchUserChats() {
  const user = await supaGetUser();
  if (!user) return [];
  return sbFetch(`chats?client_id=eq.${user.supaId}&select=*,providers!provider_id(name,languages)&order=created_at.desc`);
}

/* =============================================
   RFQ
============================================= */
async function supaCreateRFQ(rfq) {
  return sbFetch("rfqs", {
    method: "POST",
    body: JSON.stringify({
      company:       rfq.company,
      event_type:    rfq.eventType,
      event_date:    rfq.eventDate || null,
      city:          rfq.city,
      langs:         rfq.langs,
      persons:       rfq.persons   ? parseInt(rfq.persons)   : null,
      duration_days: rfq.duration  ? parseInt(rfq.duration)  : null,
      budget:        rfq.budget    ? parseInt(rfq.budget)    : null,
      description:   rfq.desc,
      contact_email: rfq.contactEmail,
      contact_name:  rfq.contactName,
      contact_phone: rfq.contactPhone,
      status: "new"
    })
  });
}

async function supaFetchRFQs(status = null) {
  let q = "rfqs?select=*,rfq_bids(*)&order=created_at.desc";
  if (status) q += `&status=eq.${status}`;
  const data = await sbFetch(q);
  return (data || []).map(r => ({
    id:           r.id,
    company:      r.company,
    eventType:    r.event_type,
    eventDate:    r.event_date,
    city:         r.city,
    langs:        r.langs,
    persons:      r.persons,
    budget:       r.budget,
    desc:         r.description,
    contactEmail: r.contact_email,
    status:       r.status,
    finalPrice:   r.final_price,
    quotedAt:     r.quoted_at,
    bids: (r.rfq_bids || []).map(b => ({
      id: b.id, providerName: b.provider_name, rate: b.rate, desc: b.description
    })),
    createdAt: r.created_at
  }));
}

async function supaUpdateRFQ(id, updates) {
  const payload = {};
  if (updates.status)           payload.status            = updates.status;
  if (updates.selectedProvider) payload.selected_provider = updates.selectedProvider;
  if (updates.finalPrice)       payload.final_price       = updates.finalPrice;
  if (updates.adminMargin !== undefined) payload.admin_margin = updates.adminMargin;
  if (updates.status === "quoted") payload.quoted_at = new Date().toISOString();
  return sbFetch(`rfqs?id=eq.${id}`, { method: "PATCH", body: JSON.stringify(payload) });
}

/* =============================================
   MARKETPLACE & EXPERIENCES
============================================= */
async function supaFetchMarketplace() {
  const data = await sbFetch("marketplace?active=eq.true&order=featured.desc");
  return (data || []).map(m => ({
    id: m.id, name: m.name, nameEn: m.name_en,
    cat: m.category, city: m.city, desc: m.description,
    emoji: m.emoji, langs: m.langs || [], featured: m.featured
  }));
}

async function supaFetchExperiences() {
  const data = await sbFetch("experiences?active=eq.true");
  return (data || []).map(e => ({
    id: e.id, title: e.title, titleEn: e.title_en,
    city: e.city, cat: e.category, hours: parseFloat(e.hours),
    price: e.price_per_person, pax: e.max_participants,
    emoji: e.emoji, grad: e.gradient || "linear-gradient(135deg,#1a1a2e,#16213e)"
  }));
}

/* =============================================
   ADMIN
============================================= */
async function supaAdminSummary() {
  try {
    const data = await sbFetch("admin_summary?select=*");
    return data?.[0] || {};
  } catch { return {}; }
}

async function supaFetchPendingProviders() {
  return sbFetch("providers?status=eq.pending&order=created_at.desc");
}

async function supaApproveProvider(id) {
  return sbFetch(`providers?id=eq.${id}`, { method: "PATCH", body: JSON.stringify({ status: "active", verified: true }) });
}

async function supaRejectProvider(id) {
  return sbFetch(`providers?id=eq.${id}`, { method: "PATCH", body: JSON.stringify({ status: "rejected" }) });
}

/* =============================================
   FALLBACK BRIDGE
   — if Supabase not ready, use localStorage
   — pages call window.db.* instead of direct fns
============================================= */
window.db = {
  // Auth
  signUp:  (e,p,n,r)  => window._sb ? supaSignUp(e,p,n,r)  : Promise.resolve(null),
  signIn:  (e,p)      => window._sb ? supaSignIn(e,p)       : Promise.reject(new Error("Supabase not ready")),
  signOut: ()         => window._sb ? supaSignOut()          : Promise.resolve(logout()),
  getUser: ()         => window._sb ? supaGetUser()          : Promise.resolve(getUser()),

  // Providers
  fetchProviders:    (f) => window._sb ? supaFetchProviders(f)    : Promise.resolve(PROVIDERS || []),
  fetchProvider:     (id)=> window._sb ? supaFetchProvider(id)    : Promise.resolve((PROVIDERS||[]).find(p=>p.id===id)),
  submitProviderApp: (d) => window._sb ? supaSubmitProviderApp(d) : Promise.resolve(null),

  // Bookings
  createBooking:   (d)    => window._sb ? supaCreateBooking(d)   : Promise.resolve(saveBooking(d)),
  fetchBookings:   ()     => window._sb ? supaFetchMyBookings()   : Promise.resolve(getBookings()),
  fetchAllBookings:()     => window._sb ? supaFetchAllBookings()  : Promise.resolve(getBookings()),
  updateBooking:   (id,u) => window._sb ? supaUpdateBooking(id,u) : Promise.resolve(null),
  verifyTripCode:  (id,c) => window._sb ? supaVerifyTripCode(id,c): Promise.resolve(verifyTripCode(id,c)),

  // Chat
  ensureChat:        (a,b,bk) => window._sb ? supaEnsureChat(a,b,bk)  : Promise.resolve(null),
  fetchMessages:     (cid)    => window._sb ? supaFetchMessages(cid)   : Promise.resolve([]),
  sendMessage:       (c,t,tp) => window._sb ? supaSendMessage(c,t,tp)  : Promise.resolve(null),
  subscribeMessages: (c,cb)   => window._sb ? supaSubscribeMessages(c,cb) : null,
  fetchUserChats:    ()       => window._sb ? supaFetchUserChats()      : Promise.resolve([]),

  // RFQ
  createRFQ:  (d)    => window._sb ? supaCreateRFQ(d)   : Promise.resolve(saveRFQ(d)),
  fetchRFQs:  (s)    => window._sb ? supaFetchRFQs(s)   : Promise.resolve(getRFQs()),
  updateRFQ:  (id,u) => window._sb ? supaUpdateRFQ(id,u): Promise.resolve(updateRFQ(id,u)),

  // Content
  fetchMarketplace: () => window._sb ? supaFetchMarketplace()  : Promise.resolve(MARKETPLACE||[]),
  fetchExperiences: () => window._sb ? supaFetchExperiences()  : Promise.resolve(EXPERIENCES||[]),

  // Admin
  adminSummary:          () => window._sb ? supaAdminSummary()            : Promise.resolve({}),
  fetchPendingProviders: () => window._sb ? supaFetchPendingProviders()   : Promise.resolve([]),
  approveProvider:       id => window._sb ? supaApproveProvider(id)       : Promise.resolve(null),
  rejectProvider:        id => window._sb ? supaRejectProvider(id)        : Promise.resolve(null),
};

// Override doAuth/doLogout in pages that use Supabase
window.addEventListener("sb_ready", async () => {
  // Restore session if exists
  const { data: { session } } = await window._sb.auth.getSession();
  if (session) {
    const u = await supaGetUser();
    if (u) setUser({ name: u.name, email: u.email, role: u.role, supaId: u.supaId });
  }
  // Override doAuth to use Supabase
  window.doAuth = async function(mode) {
    const email = document.getElementById("aEmail")?.value?.trim();
    const pass  = document.getElementById("aPass")?.value;
    if (!email || !pass) { toast("يرجى تعبئة جميع الحقول", "err"); return; }
    const btn = document.querySelector(".overlay .btn-p");
    if (btn) { btn.disabled = true; btn.textContent = "جاري..."; }
    try {
      if (mode === "signup") {
        const name = document.getElementById("aName")?.value || email.split("@")[0];
        await supaSignUp(email, pass, name, "client");
        toast("✅ تم إنشاء حسابك! تحقق من بريدك");
      } else {
        await supaSignIn(email, pass);
        toast("مرحباً! 🎉");
      }
      closeModal();
      setTimeout(() => { if(typeof initNav==="function")initNav(); if(typeof initDash==="function")initDash(); }, 400);
    } catch(err) {
      const msg = err.message?.includes("Invalid") ? "بريد أو كلمة مرور خاطئة" : (err.message || "حدث خطأ");
      toast(msg, "err");
      if (btn) { btn.disabled = false; btn.textContent = mode==="login"?"دخول":"إنشاء الحساب"; }
    }
  };
  window.doLogout = async function() {
    await supaSignOut();
    toast("تم تسجيل الخروج");
    setTimeout(() => { window.location.href = "index.html"; }, 500);
  };
});
