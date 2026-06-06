
/* =============================================
   LanCul Platform — Shared JS  v3
   Trip Code System + Full Pricing
============================================= */

/* ── TRANSLATIONS (11 langs) ─────────────── */
const LANG_FLAGS = {
  'اليابانية':'🇯🇵','الصينية (الماندرين)':'🇨🇳','الفرنسية':'🇫🇷','الألمانية':'🇩🇪',
  'الإسبانية':'🇪🇸','البرتغالية':'🇧🇷','الروسية':'🇷🇺','الإنجليزية':'🇬🇧',
  'التايلاندية':'🇹🇭','الكورية':'🇰🇷','الإندونيسية':'🇮🇩','الماليزية':'🇲🇾',
  'الإيطالية':'🇮🇹','التركية':'🇹🇷','الأوردية':'🇵🇰','الهندية':'🇮🇳',
  'Japanese':'🇯🇵','Chinese':'🇨🇳','French':'🇫🇷','German':'🇩🇪','Spanish':'🇪🇸',
  'Portuguese':'🇧🇷','Russian':'🇷🇺','English':'🇬🇧','Korean':'🇰🇷','Indonesian':'🇮🇩',
  'Italian':'🇮🇹','Turkish':'🇹🇷',
};

/* ── PROVIDERS DATA (with 4-tier pricing) ──── */
const PROVIDERS = [
  {
    id:'p1', name:'م. سليمان الخطيب', nameEn:'Eng. Sulaiman Alkhateeb', city:'الرياض',
    languages:['اليابانية','البرتغالية','الإنجليزية'],
    specializations:['تقنية نانو','طاقة متجددة','علوم'],
    offers:['guiding','translation','experience'],
    rating:4.9, reviews:47, jobs:63, verified:true,
    bio:'مهندس نانو تكنولوجي، خبرة 12 عاماً في مرافقة الوفود الدولية',
    // ── التسعير الكامل (4 خيارات) ──
    pricing: {
      hourly_no_car:  120,   // ساعة بدون سيارة (1-4 ساعات)
      hourly_with_car: 160,  // ساعة مع سيارة (1-4 ساعات)
      fullday_no_car:  650,  // يوم كامل بدون سيارة (>4 ساعات)
      fullday_with_car: 800, // يوم كامل مع سيارة (>4 ساعات)
    }
  },
  {
    id:'p2', name:'أ. فهد الهويمل', nameEn:'Fahad AlHuwaimel', city:'الرياض',
    languages:['الصينية (الماندرين)','الإنجليزية'],
    specializations:['ثقافة','أعمال','دبلوماسية'],
    offers:['guiding','translation'],
    rating:4.8, reviews:31, jobs:44, verified:true,
    bio:'متخصص لغة صينية، خبرة مع الوفود التجارية الصينية',
    pricing:{ hourly_no_car:100, hourly_with_car:140, fullday_no_car:550, fullday_with_car:680 }
  },
  {
    id:'p3', name:'م. خديجة كنانة', nameEn:'Khadija Kinana', city:'جدة',
    languages:['اليابانية','الفرنسية','الإنجليزية'],
    specializations:['هندسة حيوية','طب','علوم'],
    offers:['translation','guiding'],
    rating:4.7, reviews:28, jobs:35, verified:true,
    bio:'ماجستير هندسة حيوية من اليابان، خبرة في المؤتمرات الطبية الدولية',
    pricing:{ hourly_no_car:110, hourly_with_car:150, fullday_no_car:600, fullday_with_car:720 }
  },
  {
    id:'p4', name:'أ. وليد التويجري', nameEn:'Walid AlTuwaijri', city:'الدمام',
    languages:['اليابانية','الإنجليزية'],
    specializations:['أغذية','أعمال'],
    offers:['guiding','translation','airport'],
    rating:4.6, reviews:19, jobs:22, verified:false,
    bio:'إدارة أعمال من اليابان، خبرة في الوفود التجارية',
    pricing:{ hourly_no_car:90, hourly_with_car:130, fullday_no_car:500, fullday_with_car:620 }
  },
  {
    id:'p5', name:'د. حسين آل سالم', nameEn:'Dr. Hussain AlSaalem', city:'الرياض',
    languages:['اليابانية','الإنجليزية'],
    specializations:['تقنية معلومات','براءات اختراع'],
    offers:['translation','guiding','experience'],
    rating:4.9, reviews:52, jobs:71, verified:true,
    bio:'دكتوراه نظم معلومات من اليابان، متخصص براءات الاختراع',
    pricing:{ hourly_no_car:140, hourly_with_car:180, fullday_no_car:750, fullday_with_car:900 }
  },
  {
    id:'p6', name:'ريم العنزي', nameEn:'Reem AlAnazi', city:'مكة المكرمة',
    languages:['الإندونيسية','الماليزية','الإنجليزية'],
    specializations:['إرشاد ديني','حج وعمرة'],
    offers:['guiding','airport','experience'],
    rating:5.0, reviews:89, jobs:120, verified:true,
    bio:'متخصصة مرافقة الحجاج والمعتمرين الجنوب آسيويين',
    pricing:{ hourly_no_car:80, hourly_with_car:110, fullday_no_car:450, fullday_with_car:560 }
  },
];

/* ── EXPERIENCES ────────────────────────── */
const EXPERIENCES = [
  {id:'e1',title:'حضور زفاف سعودي أصيل',titleEn:'Authentic Saudi Wedding',city:'الرياض',cat:'ثقافي',hours:4,price:350,emoji:'💍',grad:'linear-gradient(135deg,#2c1810,#8b4513)',pax:6},
  {id:'e2',title:'جلسة صيد الصقور',titleEn:'Falconry Experience',city:'الرياض',cat:'تراث',hours:3,price:280,emoji:'🦅',grad:'linear-gradient(135deg,#1a2a4a,#2d4a7a)',pax:8},
  {id:'e3',title:'طهي الكبسة مع عائلة سعودية',titleEn:'Cook Kabsa with a Family',city:'جدة',cat:'طعام',hours:2.5,price:200,emoji:'🍲',grad:'linear-gradient(135deg,#3d1a00,#8b4500)',pax:10},
  {id:'e4',title:'رحلة الدرعية التاريخية',titleEn:'Diriyah Night Tour',city:'الرياض',cat:'تاريخي',hours:3,price:180,emoji:'🏰',grad:'linear-gradient(135deg,#1a1a2e,#16213e)',pax:12},
  {id:'e5',title:'تجربة القهوة العربية',titleEn:'Arabic Coffee & Dates',city:'العُلا',cat:'ثقافي',hours:1.5,price:120,emoji:'☕',grad:'linear-gradient(135deg,#2e1a0e,#6b3a2a)',pax:15},
  {id:'e6',title:'زيارة منزل سعودي تقليدي',titleEn:'Traditional Saudi Home Visit',city:'أبها',cat:'ثقافي',hours:2,price:160,emoji:'🏡',grad:'linear-gradient(135deg,#0d2e1a,#1a5e3a)',pax:8},
];

/* ── MARKETPLACE ────────────────────────── */
const MARKETPLACE = [
  {id:'m1',name:'مطعم نجد القديم',nameEn:'Old Najd Restaurant',cat:'restaurant',city:'الرياض',desc:'أكلات نجدية أصيلة',emoji:'🍽️',range:'mid',langs:['EN','JA','ZH'],featured:true},
  {id:'m2',name:'مقهى الرياض الأصيل',nameEn:'Authentic Riyadh Cafe',cat:'cafe',city:'الرياض',desc:'قهوة عربية وأجواء هادئة',emoji:'☕',range:'budget',langs:['EN','FR'],featured:false},
  {id:'m3',name:'تجربة الرماية التقليدية',nameEn:'Traditional Archery',cat:'activity',city:'الرياض',desc:'تعلم فن الرماية بالقوس والنشاب',emoji:'🏹',range:'mid',langs:['EN','JA'],featured:true},
  {id:'m4',name:'ملحمة الشاوية',nameEn:'Al-Shawiya Grill',cat:'restaurant',city:'جدة',desc:'أشهى لحوم الضأن والإبل',emoji:'🥩',range:'mid',langs:['EN'],featured:false},
];

/* ═══════════════════════════════════════════
   PRICING CALCULATOR
═══════════════════════════════════════════ */
function calcPrice(provider, hours, withCar) {
  const pr = provider.pricing;
  const isFullDay = hours > 4;
  if (isFullDay) {
    return withCar ? pr.fullday_with_car : pr.fullday_no_car;
  } else {
    const rate = withCar ? pr.hourly_with_car : pr.hourly_no_car;
    return rate * hours;
  }
}

function getPriceLabel(provider, hours, withCar) {
  const pr = provider.pricing;
  const isFullDay = hours > 4;
  if (isFullDay) {
    const price = withCar ? pr.fullday_with_car : pr.fullday_no_car;
    return `يوم كامل ${withCar?"مع سيارة":"بدون سيارة"}: ${price} ر.س`;
  } else {
    const rate = withCar ? pr.hourly_with_car : pr.hourly_no_car;
    return `${rate} ر.س/ساعة ${withCar?"مع سيارة":"بدون سيارة"} × ${hours}س = ${rate*hours} ر.س`;
  }
}

/* ═══════════════════════════════════════════
   TRIP CODE SYSTEM
═══════════════════════════════════════════ */
function generateTripCode() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// Client gets code when booking is CONFIRMED
// Code is LOCKED — client can only share after provider physically arrives
// Provider enters code → trip starts → billing begins

function lockCode(bookingId) {
  // code exists but client can't share it
  const bks = getBookings();
  const bk = bks.find(b => b.id === bookingId);
  return bk?.tripCode || null;
}

function unlockCode(bookingId) {
  // called when provider marks "وصلت" — unlocks sharing for client
  const bks = getBookings();
  const bk = bks.find(b => b.id === bookingId);
  if (bk) {
    bk.codeUnlocked = true;
    bk.arrivalTime = new Date().toISOString();
    localStorage.setItem('lancul_bookings', JSON.stringify(bks));
  }
}

function verifyTripCode(bookingId, enteredCode) {
  const bks = getBookings();
  const bk = bks.find(b => b.id === bookingId);
  if (!bk || bk.tripCode !== enteredCode) return false;
  bk.status = 'active';
  bk.tripStarted = new Date().toISOString();
  localStorage.setItem('lancul_bookings', JSON.stringify(bks));
  return true;
}

/* ═══════════════════════════════════════════
   localStorage HELPERS
═══════════════════════════════════════════ */
function getBookings() {
  try { return JSON.parse(localStorage.getItem('lancul_bookings') || '[]'); } catch { return []; }
}
function saveBooking(b) {
  const all = getBookings();
  b.id = 'bk_' + Date.now();
  b.status = 'pending';
  b.createdAt = new Date().toISOString();
  all.unshift(b);
  localStorage.setItem('lancul_bookings', JSON.stringify(all));
  // Auto-open chat for this booking
  openChatForBooking(b.id, b.providerId);
  return b;
}

function openChatForBooking(bookingId, providerId) {
  // Initialize chat channel if doesn't exist
  const chats = JSON.parse(localStorage.getItem('lc_chats') || '{}');
  if (!chats[providerId]) {
    const p = PROVIDERS.find(x => x.id === providerId);
    chats[providerId] = [{
      id: Date.now(),
      mine: false,
      text: `مرحباً! وصلني طلب الحجز 📋 سأتواصل معك قريباً لتأكيد التفاصيل.`,
      time: new Date().toLocaleTimeString('ar', {hour:'2-digit', minute:'2-digit'}),
      bookingId: bookingId,
      read: false
    }];
    localStorage.setItem('lc_chats', JSON.stringify(chats));
  }
}

function getRFQs() {
  try { return JSON.parse(localStorage.getItem('lancul_rfqs') || '[]'); } catch { return []; }
}
function saveRFQ(rfq) {
  const all = getRFQs();
  rfq.id = 'rfq_' + Date.now();
  rfq.status = 'new';
  rfq.createdAt = new Date().toISOString();
  rfq.bids = [];
  all.unshift(rfq);
  localStorage.setItem('lancul_rfqs', JSON.stringify(all));
  return rfq;
}
function updateRFQ(id, updates) {
  const all = getRFQs();
  const idx = all.findIndex(r => r.id === id);
  if (idx > -1) { all[idx] = { ...all[idx], ...updates }; localStorage.setItem('lancul_rfqs', JSON.stringify(all)); }
}

function getUser() {
  try { return JSON.parse(localStorage.getItem('lancul_user') || 'null'); } catch { return null; }
}
function setUser(u) { localStorage.setItem('lancul_user', JSON.stringify(u)); }
function logout() { localStorage.removeItem('lancul_user'); }

// Admin password — STANDALONE (no dependency on shared load order)
const ADMIN_PASS_KEY = 'lc_admin_pass';
function getAdminPass() { return localStorage.getItem(ADMIN_PASS_KEY) || 'lancul2026'; }
function setAdminPass(p) { localStorage.setItem(ADMIN_PASS_KEY, p); }

/* ═══════════════════════════════════════════
   BOOKING MODAL — with 4-tier pricing
═══════════════════════════════════════════ */
let _bkCar = true;

function openBooking(providerId) {
  const p = PROVIDERS.find(x => x.id === providerId);
  if (!p) return;
  closeModal();
  const o = document.createElement('div');
  o.className = 'overlay';
  o.innerHTML = `
    <div class="modal">
      <div class="mhead">
        <h2>${t('book_now')||'Book with'} ${currentLang!=='ar'&&p.nameEn?p.nameEn:p.name}</h2>
        <button class="close-btn" onclick="closeModal()">×</button>
      </div>
      <!-- Provider summary -->
      <div style="background:linear-gradient(135deg,#0D1B3E,#162654);border-radius:12px;padding:14px;display:flex;gap:12px;align-items:center;margin-bottom:16px">
        <div style="width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,#E8506A,#F5863E);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:white;flex-shrink:0">${p.name.slice(0,2)}</div>
        <div style="flex:1"><div style="color:white;font-weight:700">${p.name}</div><div style="color:#C5C9D6;font-size:12px">${p.languages.join(' · ')}</div></div>
        <div style="background:rgba(245,200,66,.15);color:#F5C842;padding:3px 9px;border-radius:16px;font-size:13px;font-weight:700">★ ${p.rating}</div>
      </div>

      <!-- Service type -->
      <div style="margin-bottom:14px">
        <label style="font-size:12px;font-weight:700;color:#7B82A0;text-transform:uppercase;letter-spacing:.05em;display:block;margin-bottom:8px">نوع الخدمة</label>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
          ${p.offers.map(s => `
            <div class="svc-opt ${s==='guiding'?'on':''}" id="so_${s}" onclick="selectSvc_bk('${s}')"
              style="border:1.5px solid ${s==='guiding'?'#E8506A':'#EEF0F7'};background:${s==='guiding'?'rgba(232,80,106,.06)':'white'};border-radius:10px;padding:12px;cursor:pointer;text-align:center;transition:all .2s">
              <div style="font-size:22px;margin-bottom:5px">${{guiding:'🗺️',translation:'🌐',airport:'✈️',experience:'⭐'}[s]}</div>
              <div style="font-size:13px;font-weight:600;color:${s==='guiding'?'#E8506A':'#0D1B3E'}">${{guiding:'مرشد سياحي',translation:'ترجمة',airport:'مطار',experience:'تجربة'}[s]}</div>
            </div>`).join('')}
        </div>
      </div>

      <!-- Car toggle -->
      <div style="margin-bottom:14px">
        <label style="font-size:12px;font-weight:700;color:#7B82A0;text-transform:uppercase;letter-spacing:.05em;display:block;margin-bottom:8px">مع سيارة؟</label>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
          <div id="bk_car_yes" onclick="setBkCar(true)" style="border:1.5px solid #E8506A;background:rgba(232,80,106,.06);border-radius:10px;padding:10px;text-align:center;cursor:pointer;font-size:14px;font-weight:600;color:#E8506A">🚗 مع سيارة</div>
          <div id="bk_car_no" onclick="setBkCar(false)" style="border:1.5px solid #EEF0F7;background:white;border-radius:10px;padding:10px;text-align:center;cursor:pointer;font-size:14px;font-weight:600;color:#3D4466">🚶 بدون سيارة</div>
        </div>
      </div>

      <!-- Date/Time -->
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:14px">
        <div>
          <label style="font-size:12px;font-weight:700;color:#7B82A0;display:block;margin-bottom:5px">التاريخ</label>
          <input type="date" id="bkDate" min="${__import__builtins.get('datetime', lambda: None)() or ''}" style="width:100%;border:1.5px solid #EEF0F7;border-radius:10px;padding:9px 12px;font-family:'Tajawal',sans-serif;font-size:14px;outline:none">
        </div>
        <div>
          <label style="font-size:12px;font-weight:700;color:#7B82A0;display:block;margin-bottom:5px">الوقت</label>
          <input type="time" id="bkTime" style="width:100%;border:1.5px solid #EEF0F7;border-radius:10px;padding:9px 12px;font-family:'Tajawal',sans-serif;font-size:14px;outline:none">
        </div>
      </div>

      <!-- Duration slider -->
      <div style="margin-bottom:14px">
        <label style="font-size:12px;font-weight:700;color:#7B82A0;display:block;margin-bottom:5px">المدة: <span id="bkHrsLbl" style="color:#E8506A">2 ساعة</span></label>
        <input type="range" min="1" max="12" step="0.5" value="2" id="bkHrs"
          style="width:100%;accent-color:#E8506A"
          oninput="updateBkPrice('${p.id}')">
        <div id="bkFullDayNote" style="font-size:11px;color:#F5863E;margin-top:4px"></div>
      </div>

      <!-- Price breakdown -->
      <div id="bkPriceBox" style="background:#F8F9FC;border-radius:10px;padding:14px;margin-bottom:14px">
        <div style="display:flex;justify-content:space-between;font-size:13px;padding:3px 0;color:#7B82A0" id="bkRow1"></div>
        <div style="display:flex;justify-content:space-between;font-size:16px;font-weight:800;border-top:1px solid #EEF0F7;margin-top:8px;padding-top:10px">
          <span>الإجمالي</span><span style="color:#E8506A" id="bkTotal">—</span>
        </div>
      </div>

      <div style="margin-bottom:14px">
        <label style="font-size:12px;font-weight:700;color:#7B82A0;display:block;margin-bottom:5px">ملاحظات</label>
        <textarea id="bkNotes" style="width:100%;border:1.5px solid #EEF0F7;border-radius:10px;padding:9px 12px;font-family:'Tajawal',sans-serif;font-size:13px;resize:none;outline:none;min-height:60px" placeholder="أي متطلبات خاصة..."></textarea>
      </div>

      <button class="btn-p-full" onclick="confirmBooking_new('${p.id}')"
        style="width:100%;background:linear-gradient(135deg,#E8506A,#F5863E);color:white;border:none;border-radius:12px;padding:14px;font-family:'Tajawal',sans-serif;font-size:15px;font-weight:700;cursor:pointer">
        ✅ تأكيد الحجز وفتح قناة التواصل
      </button>
    </div>`;
  document.body.appendChild(o);
  o.addEventListener('click', e => { if (e.target === o) closeModal(); });
  _bkCar = true;
  _selectedSvc_bk = p.offers[0] || 'guiding';
  updateBkPrice(p.id);
}

let _selectedSvc_bk = 'guiding';
function selectSvc_bk(s) {
  _selectedSvc_bk = s;
  document.querySelectorAll('.svc-opt').forEach(el => {
    const id = el.id.replace('so_', '');
    el.style.borderColor = id === s ? '#E8506A' : '#EEF0F7';
    el.style.background = id === s ? 'rgba(232,80,106,.06)' : 'white';
    el.querySelector('div:last-child').style.color = id === s ? '#E8506A' : '#0D1B3E';
  });
}

function setBkCar(v) {
  _bkCar = v;
  const yes = document.getElementById('bk_car_yes');
  const no  = document.getElementById('bk_car_no');
  if (yes) { yes.style.borderColor = v ? '#E8506A' : '#EEF0F7'; yes.style.background = v ? 'rgba(232,80,106,.06)' : 'white'; yes.style.color = v ? '#E8506A' : '#3D4466'; }
  if (no)  { no.style.borderColor  = !v ? '#E8506A' : '#EEF0F7'; no.style.background  = !v ? 'rgba(232,80,106,.06)' : 'white'; no.style.color  = !v ? '#E8506A' : '#3D4466'; }
  const pid = document.querySelector('.modal h2')?.textContent?.split('مع ')[1] || '';
  // find provider by name
  const p = PROVIDERS.find(x => document.querySelector('.modal h2')?.textContent?.includes(x.name.split('.')[1]?.trim() || x.name));
  if (p) updateBkPrice(p.id);
}

function updateBkPrice(pid) {
  const p = PROVIDERS.find(x => x.id === pid);
  if (!p) return;
  const hrs = parseFloat(document.getElementById('bkHrs')?.value || 2);
  const isFullDay = hrs > 4;
  const price = calcPrice(p, hrs, _bkCar);
  const lbl = document.getElementById('bkHrsLbl');
  const note = document.getElementById('bkFullDayNote');
  const row1 = document.getElementById('bkRow1');
  const tot = document.getElementById('bkTotal');
  if (lbl) lbl.textContent = isFullDay ? 'يوم كامل' : hrs + ' ساعة';
  if (note) note.textContent = isFullDay ? '⚡ تجاوزت 4 ساعات — سيطبق سعر اليوم الكامل' : '';
  if (row1) {
    const pr = p.pricing;
    const rate = _bkCar ? (isFullDay ? pr.fullday_with_car : pr.hourly_with_car) : (isFullDay ? pr.fullday_no_car : pr.hourly_no_car);
    row1.innerHTML = `<span>${isFullDay ? 'يوم كامل' : hrs+'س × '+( _bkCar ? pr.hourly_with_car : pr.hourly_no_car)+' ر.س'}</span><span>${price} ر.س</span>`;
  }
  if (tot) tot.textContent = price + ' ر.س';
}

function confirmBooking_new(pid) {
  const user = getUser();
  if (!user) { closeModal(); openAuth('login'); return; }
  const date = document.getElementById('bkDate')?.value;
  const time = document.getElementById('bkTime')?.value;
  if (!date || !time) { toast('اختر التاريخ والوقت', 'err'); return; }
  const p = PROVIDERS.find(x => x.id === pid);
  const hrs = parseFloat(document.getElementById('bkHrs')?.value || 2);
  const total = calcPrice(p, hrs, _bkCar);
  const bk = {
    providerId: pid, providerName: p.name,
    service: _selectedSvc_bk, date, time, hours: hrs, withCar: _bkCar,
    notes: document.getElementById('bkNotes')?.value || '',
    total, clientName: user.name, clientEmail: user.email,
    city: 'الرياض', priceLabel: getPriceLabel(p, hrs, _bkCar)
  };
  const saved = saveBooking(bk);
  closeModal();
  toast('تم الحجز ✅ فُتحت قناة التواصل مع ' + p.name);
  // redirect to chat
  setTimeout(() => { window.location.href = 'chat.html?provider=' + pid + '&booking=' + saved.id; }, 1200);
}

/* ═══════════════════════════════════════════
   AUTH
═══════════════════════════════════════════ */
function openAuth(mode = 'login') {
  closeModal();
  const o = document.createElement('div');
  o.className = 'overlay';
  const title = mode==='login' ? (t('nav_login')||'Login') : (t('nav_signup')||'Sign Up');
  o.innerHTML = `<div class="modal" style="max-width:480px">
    <div class="mhead"><h2>${title}</h2><button class="close-btn" onclick="closeModal()">×</button></div>
    ${mode==='signup'?`
    <div style="margin-bottom:14px">
      <div style="font-size:12px;font-weight:700;color:#7B82A0;text-transform:uppercase;margin-bottom:8px">نوع الحساب</div>
      <div style="display:flex;gap:10px">
        <label class="cbchip on" id="roleClient" onclick="selRole('client')" style="flex:1;display:flex;align-items:center;gap:7px;padding:10px 14px;border:1.5px solid #E8506A;border-radius:10px;background:rgba(232,80,106,.06);cursor:pointer;font-size:13px;color:#E8506A">🌍 عميل / سائح</label>
        <label class="cbchip" id="roleProvider" onclick="selRole('provider')" style="flex:1;display:flex;align-items:center;gap:7px;padding:10px 14px;border:1.5px solid #EEF0F7;border-radius:10px;cursor:pointer;font-size:13px">🎯 مُقدم خدمة</label>
      </div>
    </div>
    <div style="margin-bottom:12px"><label style="font-size:13px;font-weight:600;color:#3D4466;display:block;margin-bottom:5px">الاسم الكامل</label><input style="width:100%;border:1.5px solid #EEF0F7;border-radius:10px;padding:10px 12px;font-family:'Tajawal',sans-serif;font-size:14px;outline:none" id="authName"></div>`:``}
    <div style="margin-bottom:12px"><label style="font-size:13px;font-weight:600;color:#3D4466;display:block;margin-bottom:5px">البريد الإلكتروني</label><input style="width:100%;border:1.5px solid #EEF0F7;border-radius:10px;padding:10px 12px;font-family:'Tajawal',sans-serif;font-size:14px;outline:none;direction:ltr" type="email" id="authEmail" placeholder="you@email.com"></div>
    <div style="margin-bottom:16px"><label style="font-size:13px;font-weight:600;color:#3D4466;display:block;margin-bottom:5px">كلمة المرور</label><input style="width:100%;border:1.5px solid #EEF0F7;border-radius:10px;padding:10px 12px;font-family:'Tajawal',sans-serif;font-size:14px;outline:none" type="password" id="authPass"></div>
    <button onclick="doAuth('${mode}')" style="width:100%;background:linear-gradient(135deg,#E8506A,#F5863E);color:white;border:none;border-radius:12px;padding:13px;font-family:'Tajawal',sans-serif;font-size:15px;font-weight:700;cursor:pointer">
      ${mode==='login'?'دخول':'إنشاء الحساب'}
    </button>
  </div>`;
  document.body.appendChild(o);
  o.addEventListener('click', e => { if (e.target === o) closeModal(); });
}

let _selectedRole = 'client';
function selRole(r) {
  _selectedRole = r;
  document.getElementById('roleClient')?.style && (document.getElementById('roleClient').style.borderColor = r==='client'?'#E8506A':'#EEF0F7');
  document.getElementById('roleProvider')?.style && (document.getElementById('roleProvider').style.borderColor = r==='provider'?'#E8506A':'#EEF0F7');
}

async function doAuth(mode) {
  const email = document.getElementById('authEmail')?.value?.trim();
  const pass  = document.getElementById('authPass')?.value;
  if (!email || !pass) { toast(t('err_wrong_creds')||'Please fill all fields', 'err'); return; }
  const name = document.getElementById('authName')?.value || email.split('@')[0];
  const btn = document.querySelector('.overlay button[onclick]');
  if (btn) { btn.disabled = true; btn.textContent = 'جاري...'; }
  try {
    if (window.db && window._sb) {
      // Supabase auth
      if (mode === 'signup') {
        await window.db.signUp(email, pass, name, _selectedRole || 'client');
        toast('✅ تم إنشاء حسابك! تحقق من بريدك');
      } else {
        await window.db.signIn(email, pass);
        toast('مرحباً! 🎉');
      }
    } else {
      // localStorage fallback
      setUser({ name, email, role: mode==='signup' ? (_selectedRole||'client') : 'client' });
      toast('Welcome ' + name + '! 🎉');
    }
    closeModal();
    setTimeout(() => {
      if (typeof initNav === 'function') initNav();
      if (typeof initDash === 'function') initDash();
      else location.reload();
    }, 500);
  } catch(err) {
    const msg = err.message?.includes('Invalid') ? 'بريد أو كلمة مرور خاطئة' : (err.message || 'حدث خطأ');
    toast(msg, 'err');
    if (btn) { btn.disabled = false; btn.textContent = mode==='login' ? 'دخول' : 'إنشاء الحساب'; }
  }
}

function doLogout() { logout(); toast('تم تسجيل الخروج'); setTimeout(() => location.reload(), 600); }

/* ═══════════════════════════════════════════
   LANGUAGE ENGINE
═══════════════════════════════════════════ */





/* ═══════════════════════════════════════════
   TOAST (shared)
═══════════════════════════════════════════ */
function toast(msg, type='ok') {
  let wrap = document.getElementById('toastWrap') || document.getElementById('tw');
  if (!wrap) { wrap = document.createElement('div'); wrap.id = 'tw'; wrap.style.cssText='position:fixed;bottom:20px;left:50%;transform:translateX(-50%);z-index:9999;display:flex;flex-direction:column;gap:7px;pointer-events:none;'; document.body.appendChild(wrap); }
  const el = document.createElement('div');
  el.style.cssText = `background:#0D1B3E;color:white;padding:11px 18px;border-radius:10px;font-size:14px;display:flex;align-items:center;gap:9px;min-width:240px;box-shadow:0 8px 32px rgba(0,0,0,.4);animation:none;border-right:4px solid ${type==='ok'?'#2ECC8E':'#E8506A'};font-family:'Tajawal',sans-serif;`;
  el.innerHTML = (type==='ok'?'✅':'❌') + ' ' + msg;
  wrap.appendChild(el);
  setTimeout(() => el.remove(), 3200);
}

// Also expose as toast for backward compat
window.toast = toast_shared;

/* ═══════════════════════════════════════════
   MODAL CLOSE
═══════════════════════════════════════════ */
function closeModal() {
  document.querySelectorAll('.overlay, .modal-overlay').forEach(m => m.remove());
}

/* ═══════════════════════════════════════════
   INIT on DOM ready
═══════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  setLang(currentLang);
});
