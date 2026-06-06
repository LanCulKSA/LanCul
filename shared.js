/* =====================================================
   LanCul — shared.js
   Core data, utilities, auth modal, booking modal
===================================================== */

// ── PROVIDERS DATA ─────────────────────────────────
const PROVIDERS = [
  {
    id:'p1', name:'م. سليمان الخطيب', nameEn:'Eng. Sulaiman Alkhateeb', city:'الرياض',
    languages:['اليابانية','البرتغالية','الإنجليزية'],
    specializations:['تقنية نانو','طاقة متجددة','علوم'],
    offers:['guiding','translation','experience'],
    rating:4.9, reviews:47, jobs:63, verified:true,
    bio:'مهندس نانو تكنولوجي، خبرة 12 عاماً في مرافقة الوفود الدولية',
    pricing:{ hourly_no_car:120, hourly_with_car:160, fullday_no_car:650, fullday_with_car:800 }
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
    bio:'ماجستير هندسة حيوية من اليابان، خبرة في المؤتمرات الطبية',
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
  }
];

const EXPERIENCES = [
  {id:'e1',title:'حضور زفاف سعودي أصيل',titleEn:'Authentic Saudi Wedding',city:'الرياض',cat:'ثقافي',hours:4,price:350,pax:6,emoji:'💍',grad:'linear-gradient(135deg,#2c1810,#8b4513)'},
  {id:'e2',title:'جلسة صيد الصقور',titleEn:'Falconry Experience',city:'الرياض',cat:'تراث',hours:3,price:280,pax:8,emoji:'🦅',grad:'linear-gradient(135deg,#1a2a4a,#2d4a7a)'},
  {id:'e3',title:'طهي الكبسة مع عائلة سعودية',titleEn:'Cook Kabsa with a Family',city:'جدة',cat:'طعام',hours:2.5,price:200,pax:10,emoji:'🍲',grad:'linear-gradient(135deg,#3d1a00,#8b4500)'},
  {id:'e4',title:'رحلة الدرعية التاريخية',titleEn:'Diriyah Night Tour',city:'الرياض',cat:'تاريخي',hours:3,price:180,pax:12,emoji:'🏰',grad:'linear-gradient(135deg,#1a1a2e,#16213e)'},
  {id:'e5',title:'تجربة القهوة العربية',titleEn:'Arabic Coffee & Dates',city:'العُلا',cat:'ثقافي',hours:1.5,price:120,pax:15,emoji:'☕',grad:'linear-gradient(135deg,#2e1a0e,#6b3a2a)'},
  {id:'e6',title:'زيارة منزل سعودي تقليدي',titleEn:'Traditional Saudi Home Visit',city:'أبها',cat:'ثقافي',hours:2,price:160,pax:8,emoji:'🏡',grad:'linear-gradient(135deg,#0d2e1a,#1a5e3a)'}
];

const MARKETPLACE = [
  {id:'m1',name:'مطعم نجد القديم',nameEn:'Old Najd Restaurant',cat:'restaurant',city:'الرياض',desc:'أكلات نجدية أصيلة',emoji:'🍽️',langs:['EN','JA','ZH'],featured:true},
  {id:'m2',name:'مقهى الرياض الأصيل',nameEn:'Authentic Riyadh Cafe',cat:'cafe',city:'الرياض',desc:'قهوة عربية وأجواء هادئة',emoji:'☕',langs:['EN','FR'],featured:false},
  {id:'m3',name:'تجربة الرماية التقليدية',nameEn:'Traditional Archery',cat:'activity',city:'الرياض',desc:'تعلم فن الرماية بالقوس',emoji:'🏹',langs:['EN','JA'],featured:true},
  {id:'m4',name:'ملحمة الشاوية',nameEn:'Al-Shawiya Grill',cat:'restaurant',city:'جدة',desc:'أشهى لحوم الضأن والإبل',emoji:'🥩',langs:['EN'],featured:false}
];

const LANG_FLAGS = {
  'اليابانية':'🇯🇵','الصينية (الماندرين)':'🇨🇳','الفرنسية':'🇫🇷',
  'الألمانية':'🇩🇪','الإسبانية':'🇪🇸','البرتغالية':'🇧🇷',
  'الإنجليزية':'🇬🇧','الروسية':'🇷🇺','الكورية':'🇰🇷',
  'الإيطالية':'🇮🇹','الإندونيسية':'🇮🇩','الماليزية':'🇲🇾',
  'التركية':'🇹🇷','الهندية':'🇮🇳','التايلاندية':'🇹🇭'
};

// ── PRICE CALCULATION ───────────────────────────────
function calcPrice(p, hours, withCar) {
  if (!p || !p.pricing) return 0;
  var isFullDay = parseFloat(hours) > 4;
  if (isFullDay) {
    return withCar ? p.pricing.fullday_with_car : p.pricing.fullday_no_car;
  } else {
    var rate = withCar ? p.pricing.hourly_with_car : p.pricing.hourly_no_car;
    return rate * parseFloat(hours);
  }
}

// ── BOOKINGS (localStorage) ─────────────────────────
function getBookings() {
  try { return JSON.parse(localStorage.getItem('lancul_bookings') || '[]'); } catch(e) { return []; }
}
function saveBooking(bk) {
  var bks = getBookings();
  bks.push(bk);
  localStorage.setItem('lancul_bookings', JSON.stringify(bks));
  return bk;
}
function updateBookingStatus(id, status) {
  var bks = getBookings();
  var bk = bks.find(function(b){ return b.id === id; });
  if (bk) { bk.status = status; localStorage.setItem('lancul_bookings', JSON.stringify(bks)); }
  return bk;
}
function verifyTripCode(bookingId, code) {
  var bks = getBookings();
  var bk = bks.find(function(b){ return b.id === bookingId; });
  if (!bk || bk.tripCode !== code) return false;
  bk.status = 'active';
  bk.codeUnlocked = true;
  localStorage.setItem('lancul_bookings', JSON.stringify(bks));
  return true;
}

// ── RFQs (localStorage) ────────────────────────────
function getRFQs() {
  try { return JSON.parse(localStorage.getItem('lancul_rfqs') || '[]'); } catch(e) { return []; }
}
function saveRFQ(rfq) {
  var rfqs = getRFQs();
  rfqs.push(rfq);
  localStorage.setItem('lancul_rfqs', JSON.stringify(rfqs));
  return rfq;
}
function updateRFQ(id, updates) {
  var rfqs = getRFQs();
  var rfq = rfqs.find(function(r){ return r.id === id; });
  if (rfq) { Object.assign(rfq, updates); localStorage.setItem('lancul_rfqs', JSON.stringify(rfqs)); }
}

// ── USER SESSION ────────────────────────────────────
function getUser() {
  try { return JSON.parse(localStorage.getItem('lancul_user') || 'null'); } catch(e) { return null; }
}
function setUser(u) {
  localStorage.setItem('lancul_user', JSON.stringify(u));
}
function logout() {
  localStorage.removeItem('lancul_user');
}
function getAdminPass() {
  return localStorage.getItem('lancul_admin_pass') || 'lancul2026';
}

// ── TOAST ───────────────────────────────────────────
function toast(msg, type) {
  type = type || 'ok';
  var wrap = document.getElementById('tw');
  if (!wrap) {
    wrap = document.createElement('div');
    wrap.id = 'tw';
    wrap.style.cssText = 'position:fixed;bottom:16px;left:50%;transform:translateX(-50%);z-index:9999;width:calc(100% - 32px);max-width:360px;display:flex;flex-direction:column;gap:6px;pointer-events:none;';
    document.body.appendChild(wrap);
  }
  var el = document.createElement('div');
  el.style.cssText = 'background:#0D1B3E;color:white;padding:10px 15px;border-radius:10px;font-size:13px;box-shadow:0 6px 28px rgba(0,0,0,.4);animation:su .3s;border-right:4px solid ' + (type === 'err' ? '#E8506A' : '#2ECC8E');
  el.textContent = (type === 'err' ? '❌ ' : '✅ ') + msg;
  wrap.appendChild(el);
  setTimeout(function(){ el.remove(); }, 3200);
}

// ── CLOSE MODAL ─────────────────────────────────────
function closeModal() {
  var o = document.querySelector('.overlay');
  if (o) o.remove();
}

// ── AUTH MODAL ──────────────────────────────────────
var _selectedRole = 'client';

function selRole(role) {
  _selectedRole = role;
  var cc = document.getElementById('roleClient');
  var cp = document.getElementById('roleProvider');
  if (cc) cc.classList.toggle('on', role === 'client');
  if (cp) cp.classList.toggle('on', role === 'provider');
}

function openAuth(mode) {
  mode = mode || 'login';
  closeModal();

  var isLogin  = mode === 'login';
  var title    = isLogin ? (t('nav_login') || 'Login') : (t('nav_signup') || 'Sign Up');
  var btnLabel = isLogin ? (t('btn_login') || 'Login') : (t('btn_create_acc') || 'Create Account');

  var o = document.createElement('div');
  o.className = 'overlay';

  var signupExtra = '';
  if (!isLogin) {
    signupExtra = '<div style="margin-bottom:14px">'
      + '<div style="font-size:12px;font-weight:700;color:#7B82A0;text-transform:uppercase;margin-bottom:8px">' + (t('account_type') || 'Account Type') + '</div>'
      + '<div style="display:flex;gap:10px">'
      + '<label class="cbchip on" id="roleClient" onclick="selRole(\'client\')" style="flex:1;display:flex;align-items:center;gap:7px;padding:10px 14px;border:1.5px solid #E8506A;border-radius:10px;background:rgba(232,80,106,.06);cursor:pointer;font-size:13px;color:#E8506A">🌍 ' + (t('role_client') || 'Client') + '</label>'
      + '<label class="cbchip" id="roleProvider" onclick="selRole(\'provider\')" style="flex:1;display:flex;align-items:center;gap:7px;padding:10px 14px;border:1.5px solid #EEF0F7;border-radius:10px;cursor:pointer;font-size:13px;color:#3D4466">🎯 ' + (t('provider_label') || 'Provider') + '</label>'
      + '</div></div>';
  }

  var nameField = isLogin ? '' : '<div style="margin-bottom:14px">'
    + '<label style="font-size:12px;font-weight:700;color:#3D4466;display:block;margin-bottom:5px">' + (t('lbl_full_name') || 'Full Name') + '</label>'
    + '<input id="authName" type="text" style="width:100%;border:1.5px solid #EEF0F7;border-radius:10px;padding:10px 14px;font-family:inherit;font-size:14px;outline:none" placeholder="' + (t('lbl_full_name') || 'Your Name') + '">'
    + '</div>';

  o.innerHTML = '<div class="modal" style="max-width:480px">'
    + '<div class="mhead"><h2>' + title + '</h2><button class="close-btn" onclick="closeModal()">×</button></div>'
    + signupExtra
    + nameField
    + '<div style="margin-bottom:14px">'
    + '<label style="font-size:12px;font-weight:700;color:#3D4466;display:block;margin-bottom:5px">' + (t('lbl_email') || 'Email') + '</label>'
    + '<input id="authEmail" type="email" style="width:100%;border:1.5px solid #EEF0F7;border-radius:10px;padding:10px 14px;font-family:inherit;font-size:14px;outline:none;direction:ltr" placeholder="you@email.com">'
    + '</div>'
    + '<div style="margin-bottom:18px">'
    + '<label style="font-size:12px;font-weight:700;color:#3D4466;display:block;margin-bottom:5px">' + (t('lbl_password') || 'Password') + '</label>'
    + '<input id="authPass" type="password" style="width:100%;border:1.5px solid #EEF0F7;border-radius:10px;padding:10px 14px;font-family:inherit;font-size:14px;outline:none" onkeydown="if(event.key===\'Enter\')doAuth(\'' + mode + '\')">'
    + '</div>'
    + '<button onclick="doAuth(\'' + mode + '\')" style="width:100%;background:linear-gradient(135deg,#E8506A,#F5863E);color:white;border:none;border-radius:10px;padding:12px;font-family:inherit;font-size:15px;font-weight:700;cursor:pointer">' + btnLabel + '</button>'
    + '<div style="text-align:center;margin-top:12px;font-size:12px;color:#7B82A0">'
    + (isLogin
        ? '<button onclick="openAuth(\'signup\')" style="background:none;border:none;color:#E8506A;cursor:pointer;font-family:inherit;font-size:12px">' + (t('nav_signup') || 'Sign Up') + '</button>'
        : '<button onclick="openAuth(\'login\')" style="background:none;border:none;color:#E8506A;cursor:pointer;font-family:inherit;font-size:12px">' + (t('nav_login') || 'Login') + '</button>')
    + '</div>'
    + '</div>';

  document.body.appendChild(o);
  o.addEventListener('click', function(e){ if (e.target === o) closeModal(); });

  // Focus first input
  setTimeout(function(){
    var f = o.querySelector('input');
    if (f) f.focus();
  }, 100);
}

// ── SIGN UP / LOGIN ─────────────────────────────────
async function doAuth(mode) {
  var email = document.getElementById('authEmail') ? document.getElementById('authEmail').value.trim() : '';
  var pass  = document.getElementById('authPass')  ? document.getElementById('authPass').value : '';
  if (!email || !pass) { toast(t('err_fill_all') || 'Please fill all fields', 'err'); return; }

  var btn = document.querySelector('.overlay button[onclick^="doAuth"]');
  if (btn) { btn.disabled = true; btn.textContent = '...'; }

  try {
    if (window.db && window._sb) {
      if (mode === 'signup') {
        var name = document.getElementById('authName') ? document.getElementById('authName').value.trim() : email.split('@')[0];
        await window.db.signUp(email, pass, name, _selectedRole || 'client');
        toast(t('signup_success') || 'Account created! Check your email ✅');
      } else {
        await window.db.signIn(email, pass);
        toast('Welcome back! 🎉');
      }
    } else {
      // localStorage fallback
      var name2 = (document.getElementById('authName') && document.getElementById('authName').value.trim()) || email.split('@')[0];
      setUser({ name: name2, email: email, role: mode==='signup' ? (_selectedRole||'client') : 'client' });
      toast('Welcome ' + name2 + '! 🎉');
    }
    closeModal();
    setTimeout(function(){
      if (typeof initNav === 'function') initNav();
      if (typeof initDash === 'function') initDash();
    }, 400);
  } catch(err) {
    var msg = (err.message && err.message.indexOf('Invalid') > -1)
      ? (t('err_wrong_creds') || 'Invalid email or password')
      : (err.message || 'Error occurred');
    toast(msg, 'err');
    if (btn) { btn.disabled = false; btn.textContent = mode==='login'?(t('btn_login')||'Login'):(t('btn_create_acc')||'Sign Up'); }
  }
}

async function doLogout() {
  if (window.db && window._sb) {
    try { await window.db.signOut(); } catch(e) {}
  }
  logout();
  toast(t('btn_logout') || 'Logged out');
  setTimeout(function(){ window.location.href = 'index.html'; }, 400);
}

// ── BOOKING MODAL ───────────────────────────────────
var _bkCar   = false;
var _bkProv  = null;

function openBooking(providerId) {
  var p = PROVIDERS.find(function(x){ return x.id === providerId; });
  if (!p) return;
  _bkProv = p;
  _bkCar  = false;
  closeModal();

  var o = document.createElement('div');
  o.className = 'overlay';

  var provName = (typeof currentLang !== 'undefined' && currentLang !== 'ar' && p.nameEn) ? p.nameEn : p.name;
  var bookTitle = (t('book_now') || 'Book') + ' — ' + provName;

  o.innerHTML = '<div class="modal">'
    + '<div class="mhead"><h2>' + bookTitle + '</h2><button class="close-btn" onclick="closeModal()">×</button></div>'
    + '<div style="background:linear-gradient(135deg,#0D1B3E,#162654);border-radius:12px;padding:12px;display:flex;gap:10px;align-items:center;margin-bottom:16px">'
    + '<div style="width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#E8506A,#F5863E);display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:700;color:white;flex-shrink:0">' + p.name.slice(0,2) + '</div>'
    + '<div><div style="color:white;font-weight:700;font-size:14px">' + provName + '</div>'
    + '<div style="color:rgba(255,255,255,.5);font-size:11px">★ ' + p.rating + ' · 📍 ' + p.city + '</div></div>'
    + '</div>'
    + '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:14px">'
    + '<div><label style="font-size:11px;font-weight:700;color:#3D4466;display:block;margin-bottom:4px">' + (t('lbl_service') || 'Service') + '</label>'
    + '<select id="bkSvc" style="width:100%;border:1.5px solid #EEF0F7;border-radius:8px;padding:9px 10px;font-family:inherit;font-size:13px;outline:none" onchange="updateBkPrice()">'
    + '<option value="guiding">🗺️ ' + (t('svc_guiding_s') || 'Guide') + '</option>'
    + '<option value="translation">🌐 ' + (t('svc_translation') || 'Translation') + '</option>'
    + '<option value="companion">🤝 ' + (t('svc_companion') || 'Companion') + '</option>'
    + '<option value="airport">✈️ ' + (t('svc_airport_s') || 'Airport') + '</option>'
    + '</select></div>'
    + '<div><label style="font-size:11px;font-weight:700;color:#3D4466;display:block;margin-bottom:4px">' + (t('lbl_city') || 'Date') + '</label>'
    + '<input type="date" id="bkDate" style="width:100%;border:1.5px solid #EEF0F7;border-radius:8px;padding:9px 10px;font-family:inherit;font-size:13px;outline:none"></div>'
    + '</div>'
    + '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:14px">'
    + '<div><label style="font-size:11px;font-weight:700;color:#3D4466;display:block;margin-bottom:4px">' + (t('per_hour') || 'Hours') + '</label>'
    + '<select id="bkHours" style="width:100%;border:1.5px solid #EEF0F7;border-radius:8px;padding:9px 10px;font-family:inherit;font-size:13px;outline:none" onchange="updateBkPrice()">'
    + '<option value="1">1h</option><option value="2" selected>2h</option><option value="3">3h</option><option value="4">4h</option>'
    + '<option value="6">Full day (6h)</option><option value="8">Full day (8h)</option>'
    + '</select></div>'
    + '<div><label style="font-size:11px;font-weight:700;color:#3D4466;display:block;margin-bottom:4px">' + (t('lbl_service') || 'Car') + '</label>'
    + '<div style="display:flex;gap:6px;margin-top:4px">'
    + '<button id="bkNoCar" onclick="setBkCar(false)" style="flex:1;padding:8px;border-radius:8px;border:1.5px solid #E8506A;background:rgba(232,80,106,.06);color:#E8506A;font-family:inherit;font-size:12px;font-weight:700;cursor:pointer">🚶 No</button>'
    + '<button id="bkWithCar" onclick="setBkCar(true)" style="flex:1;padding:8px;border-radius:8px;border:1.5px solid #EEF0F7;background:white;color:#3D4466;font-family:inherit;font-size:12px;cursor:pointer">🚗 Yes</button>'
    + '</div></div>'
    + '</div>'
    + '<div id="bkPriceBox" style="background:linear-gradient(135deg,#0D1B3E,#162654);border-radius:12px;padding:12px;text-align:center;margin-bottom:14px">'
    + '<div style="font-size:11px;color:rgba(255,255,255,.5);margin-bottom:4px" id="bkPriceLabel">Total</div>'
    + '<div style="font-size:26px;font-weight:900;color:white;font-family:\'Sora\',sans-serif" id="bkPriceVal">— SAR</div>'
    + '<div style="font-size:10px;color:rgba(255,255,255,.4);margin-top:3px" id="bkNote">⚡ Over 4 hours = Full day automatically</div>'
    + '</div>'
    + '<button onclick="confirmBooking()" style="width:100%;background:linear-gradient(135deg,#E8506A,#F5863E);color:white;border:none;border-radius:12px;padding:13px;font-family:inherit;font-size:15px;font-weight:700;cursor:pointer">'
    + (t('book_now') || 'Book Now')
    + '</button>'
    + '</div>';

  document.body.appendChild(o);
  o.addEventListener('click', function(e){ if (e.target === o) closeModal(); });

  // Set default date tomorrow
  var tmr = new Date(); tmr.setDate(tmr.getDate()+1);
  var dateEl = document.getElementById('bkDate');
  if (dateEl) dateEl.value = tmr.toISOString().split('T')[0];

  updateBkPrice();
}

function setBkCar(val) {
  _bkCar = val;
  var nc = document.getElementById('bkNoCar');
  var wc = document.getElementById('bkWithCar');
  if (nc) { nc.style.borderColor = val?'#EEF0F7':'#E8506A'; nc.style.background = val?'white':'rgba(232,80,106,.06)'; nc.style.color = val?'#3D4466':'#E8506A'; }
  if (wc) { wc.style.borderColor = val?'#E8506A':'#EEF0F7'; wc.style.background = val?'rgba(232,80,106,.06)':'white'; wc.style.color = val?'#E8506A':'#3D4466'; }
  updateBkPrice();
}

function updateBkPrice() {
  if (!_bkProv) return;
  var hours  = parseFloat(document.getElementById('bkHours')?.value || 2);
  var isFullDay = hours > 4;
  var price  = calcPrice(_bkProv, hours, _bkCar);
  var pv = document.getElementById('bkPriceVal');
  var pl = document.getElementById('bkPriceLabel');
  var pn = document.getElementById('bkNote');
  if (pv) pv.textContent = price + ' SAR';
  if (pl) pl.textContent = isFullDay ? 'Full Day' : hours + (hours===1?' hour':' hours');
  if (pn) pn.textContent = isFullDay ? '⚡ Full day rate applied' : '⚡ Over 4h = full day rate';
}

function confirmBooking() {
  var u = getUser();
  if (!u) { closeModal(); openAuth('login'); return; }

  var hours = parseFloat(document.getElementById('bkHours')?.value || 2);
  var svc   = document.getElementById('bkSvc')?.value || 'guiding';
  var date  = document.getElementById('bkDate')?.value || '';
  var price = calcPrice(_bkProv, hours, _bkCar);

  if (!date) { toast('Please select a date', 'err'); return; }

  var bk = {
    id:           'bk_' + Date.now(),
    providerId:   _bkProv.id,
    providerName: _bkProv.name,
    clientName:   u.name,
    service:      svc,
    date:         date,
    hours:        hours,
    withCar:      _bkCar,
    city:         _bkProv.city,
    total:        price,
    bookingType:  hours > 4 ? 'fullday' : 'hourly',
    status:       'pending',
    tripCode:     Math.floor(100000 + Math.random()*900000).toString(),
    codeUnlocked: false,
    createdAt:    new Date().toISOString()
  };

  // Save
  if (window.db && window._sb) {
    window.db.createBooking({
      providerId:   _bkProv.id,
      providerName: _bkProv.name,
      service:      svc,
      date:         date,
      hours:        hours,
      withCar:      _bkCar,
      total:        price,
    }).catch(function(){ saveBooking(bk); });
  } else {
    saveBooking(bk);
  }

  closeModal();
  toast('Booking sent! ✅ The provider will confirm shortly.');
  setTimeout(function(){ window.location.href = 'chat.html?provider=' + _bkProv.id; }, 1200);
}

// ── ADMIN HELPERS ───────────────────────────────────
function generateTripCode() {
  return Math.floor(100000 + Math.random()*900000).toString();
}
