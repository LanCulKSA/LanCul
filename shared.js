/* =====================================================
   LanCul — shared.js
   Core data, utilities, auth modal, booking modal
===================================================== */

// ── CENTRAL SETTINGS (Supabase -> localStorage cache) ──
// Reads VAT %, commission %, USD rate from app_settings.
// localStorage is the instant cache; Supabase is the source of truth.
async function loadAppSettings() {
  if (!window._sb) return;
  try {
    var r = await window._sb.from('app_settings').select('key,value');
    if (r && r.data) {
      r.data.forEach(function(row){
        if (row.key === 'vat_pct')        localStorage.setItem('lancul_vat_pct', row.value);
        if (row.key === 'commission_pct') localStorage.setItem('lancul_commission_pct', row.value);
        if (row.key === 'usd_rate')       localStorage.setItem('lancul_usd_rate', row.value);
      });
      document.dispatchEvent(new CustomEvent('settingschange'));
    }
  } catch(e) { /* offline -> use cached localStorage */ }
}
// Save one setting to Supabase (admin use)
async function saveAppSetting(key, value) {
  localStorage.setItem('lancul_' + key, value); // instant local
  if (!window._sb) return false;
  try {
    await window._sb.from('app_settings').upsert({ key: key, value: String(value), updated_at: new Date().toISOString() }, { onConflict: 'key' });
    return true;
  } catch(e) { return false; }
}
// Load settings as soon as Supabase is ready, and subscribe to live changes
if (typeof window !== 'undefined') {
  window.addEventListener('sb_ready', function(){
    loadAppSettings();
    if (window._sb) {
      window._sb.channel('app_settings_live')
        .on('postgres_changes', { event:'*', schema:'public', table:'app_settings' }, function(){
          loadAppSettings();
        }).subscribe();
    }
  });
}


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

// ── PRICE BREAKDOWN (VAT + Commission) ──────────────
// Rates are admin-editable via localStorage.
function getVatPct() {
  var v = parseFloat(localStorage.getItem('lancul_vat_pct'));
  return isNaN(v) ? 15 : v;
}
function getCommissionPct() {
  var c = parseFloat(localStorage.getItem('lancul_commission_pct'));
  return isNaN(c) ? 15 : c;
}

// ── CURRENCY (SAR base, USD shown alongside) ────────
// Admin-editable USD rate: how many SAR = 1 USD (default 3.75)
function getUsdRate() {
  var r = parseFloat(localStorage.getItem('lancul_usd_rate'));
  return (isNaN(r) || r <= 0) ? 3.75 : r;
}
// Format a SAR amount showing both currencies: "1,150 SAR ($307)"
function money(sar) {
  sar = Math.round(sar || 0);
  var usd = Math.round(sar / getUsdRate());
  var sarLabel = (typeof t === 'function' ? (t('sar') || 'SAR') : 'SAR');
  return sar.toLocaleString() + ' ' + sarLabel + ' <span style="opacity:.6;font-weight:400">($' + usd.toLocaleString() + ')</span>';
}
// Plain-text version (no HTML) for inputs/labels
function moneyTxt(sar) {
  sar = Math.round(sar || 0);
  var usd = Math.round(sar / getUsdRate());
  return sar.toLocaleString() + ' SAR ($' + usd.toLocaleString() + ')';
}

// providerPrice = base price the provider set (e.g. 1000)
// Returns full money breakdown.
//   VAT is ADDED on top of provider price  -> client pays providerPrice + VAT
//   Commission is taken FROM provider price -> provider nets providerPrice - commission
function priceBreakdown(providerPrice) {
  providerPrice = Math.round(providerPrice || 0);
  var vatPct  = getVatPct();
  var commPct = getCommissionPct();

  var vat        = Math.round(providerPrice * vatPct / 100);   // goes to government
  var clientPays = providerPrice + vat;                        // total client pays
  var commission = Math.round(providerPrice * commPct / 100);  // site commission (from provider)
  var providerNet = providerPrice - commission;                // provider receives

  return {
    providerPrice: providerPrice,   // 1000
    vatPct:        vatPct,           // 15
    vat:           vat,              // 150
    clientPays:    clientPays,       // 1150
    commPct:       commPct,          // 15
    commission:    commission,       // 150
    providerNet:   providerNet       // 850
  };
}

// Render a clean breakdown HTML block (used in booking/invoice)
function breakdownHtml(providerPrice) {
  var b = priceBreakdown(providerPrice);
  return '<div style="font-size:13px;line-height:1.9">'
    + '<div style="display:flex;justify-content:space-between"><span>' + (t('provider_price')||'Service price') + '</span><strong>' + money(b.providerPrice) + '</strong></div>'
    + '<div style="display:flex;justify-content:space-between;color:#6B7280"><span>' + (t('vat')||'VAT') + ' (' + b.vatPct + '%)</span><span>+ ' + money(b.vat) + '</span></div>'
    + '<div style="border-top:1px dashed #E5E7EB;margin:6px 0"></div>'
    + '<div style="display:flex;justify-content:space-between;font-weight:800;color:#E8506A;font-size:15px"><span>' + (t('client_pays')||'Total') + '</span><span>' + money(b.clientPays) + '</span></div>'
    + '</div>';
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
  document.querySelectorAll('.overlay').forEach(function(o){ o.remove(); });
}

// ── AUTH MODAL ──────────────────────────────────────
var _selectedRole = 'client';

function selRole(role) {
  _selectedRole = role;
  var cc = document.getElementById('roleClient');
  var cp = document.getElementById('roleProvider');
  var ON  = 'flex:1;padding:10px;border:1.5px solid #E8506A;border-radius:10px;background:rgba(232,80,106,.08);color:#E8506A;cursor:pointer;font-family:inherit;font-size:13px;font-weight:700';
  var OFF = 'flex:1;padding:10px;border:1.5px solid #EEF0F7;border-radius:10px;background:white;color:#3D4466;cursor:pointer;font-family:inherit;font-size:13px';
  if (cc) cc.style.cssText = (role==='client')   ? ON : OFF;
  if (cp) cp.style.cssText = (role==='provider') ? ON : OFF;

  // Show provider note: providers register via the full application form
  var note = document.getElementById('providerNote');
  if (note) note.style.display = (role==='provider') ? 'block' : 'none';
}

function openAuth(mode) {
  mode = mode || 'login';
  closeModal();
  var isLogin = mode === 'login';

  var o = document.createElement('div');
  o.className = 'overlay';

  var modal = document.createElement('div');
  modal.className = 'modal';
  modal.style.maxWidth = '440px';

  // Header
  var head = document.createElement('div');
  head.className = 'mhead';
  var h2 = document.createElement('h2');
  h2.textContent = isLogin ? (t('nav_login') || 'Login') : (t('nav_signup') || 'Sign Up');
  var closeBtn = document.createElement('button');
  closeBtn.className = 'close-btn';
  closeBtn.textContent = '\u00d7';
  closeBtn.onclick = closeModal;
  head.appendChild(h2);
  head.appendChild(closeBtn);
  modal.appendChild(head);

  // Role selector (signup only)
  if (!isLogin) {
    var roleWrap = document.createElement('div');
    roleWrap.style.cssText = 'margin-bottom:14px';
    var roleLabel = document.createElement('div');
    roleLabel.style.cssText = 'font-size:12px;font-weight:700;color:#7B82A0;margin-bottom:8px';
    roleLabel.textContent = t('account_type') || 'Account Type';
    var roleBtns = document.createElement('div');
    roleBtns.style.cssText = 'display:flex;gap:10px';

    var cBtn = document.createElement('button');
    cBtn.id = 'roleClient';
    cBtn.type = 'button';
    cBtn.style.cssText = 'flex:1;padding:10px;border:1.5px solid #E8506A;border-radius:10px;background:rgba(232,80,106,.06);color:#E8506A;cursor:pointer;font-family:inherit;font-size:13px;font-weight:700';
    cBtn.textContent = '\ud83c\udf0d ' + (t('role_client') || 'Client');
    cBtn.onclick = function(){ selRole('client'); };

    var pBtn = document.createElement('button');
    pBtn.id = 'roleProvider';
    pBtn.type = 'button';
    pBtn.style.cssText = 'flex:1;padding:10px;border:1.5px solid #EEF0F7;border-radius:10px;background:white;color:#3D4466;cursor:pointer;font-family:inherit;font-size:13px';
    pBtn.textContent = '\ud83c\udfaf ' + (t('provider_label') || 'Provider');
    pBtn.onclick = function(){ selRole('provider'); };

    roleBtns.appendChild(cBtn);
    roleBtns.appendChild(pBtn);
    roleWrap.appendChild(roleLabel);
    roleWrap.appendChild(roleBtns);
    modal.appendChild(roleWrap);

    // Provider note (hidden until provider selected)
    var note = document.createElement('div');
    note.id = 'providerNote';
    note.style.cssText = 'display:none;background:rgba(245,134,62,.1);border:1px solid rgba(245,134,62,.25);border-radius:10px;padding:10px 12px;margin-bottom:14px;font-size:12px;color:#9a5b1f;line-height:1.6';
    note.innerHTML = (t('provider_signup_note') || 'Service providers register through a detailed application. Click below to start.')
      + '<button type="button" onclick="closeModal();window.location.href=\'register.html\'" style="display:block;width:100%;margin-top:8px;background:linear-gradient(135deg,#E8506A,#F5863E);color:white;border:none;border-radius:8px;padding:9px;font-family:inherit;font-size:13px;font-weight:700;cursor:pointer">'
      + (t('go_to_registration') || 'Go to Provider Registration') + '</button>';
    modal.appendChild(note);
  }

  // Name field (signup only)
  if (!isLogin) {
    modal.appendChild(makeField('authName', t('lbl_full_name') || 'Full Name', 'text', t('lbl_full_name') || 'Your Name'));
  }

  // Email + Password
  modal.appendChild(makeField('authEmail', t('lbl_email') || 'Email', 'email', 'you@email.com'));
  modal.appendChild(makeField('authPass', t('lbl_password') || 'Password', 'password', '********'));

  // Submit button
  var submitBtn = document.createElement('button');
  submitBtn.style.cssText = 'width:100%;background:linear-gradient(135deg,#E8506A,#F5863E);color:white;border:none;border-radius:10px;padding:12px;font-family:inherit;font-size:15px;font-weight:700;cursor:pointer;margin-top:4px';
  submitBtn.textContent = isLogin ? (t('btn_login') || 'Login') : (t('btn_create_acc') || 'Create Account');
  submitBtn.onclick = function(){ doAuth(mode); };
  modal.appendChild(submitBtn);

  // Switch link
  var switchWrap = document.createElement('div');
  switchWrap.style.cssText = 'text-align:center;margin-top:12px;font-size:12px;color:#7B82A0';
  var switchBtn = document.createElement('button');
  switchBtn.type = 'button';
  switchBtn.style.cssText = 'background:none;border:none;color:#E8506A;cursor:pointer;font-family:inherit;font-size:12px';
  switchBtn.textContent = isLogin ? (t('nav_signup') || 'Create an account') : (t('nav_login') || 'Already have an account?');
  switchBtn.onclick = function(){ openAuth(isLogin ? 'signup' : 'login'); };
  switchWrap.appendChild(switchBtn);
  modal.appendChild(switchWrap);

  o.appendChild(modal);
  document.body.appendChild(o);
  o.addEventListener('click', function(e){ if (e.target === o) closeModal(); });

  // Enter key support
  var passInput = document.getElementById('authPass');
  if (passInput) {
    passInput.addEventListener('keydown', function(e){ if (e.key === 'Enter') doAuth(mode); });
  }

  setTimeout(function(){
    var first = modal.querySelector('input');
    if (first) first.focus();
  }, 100);
}

function makeField(id, label, type, placeholder) {
  var wrap = document.createElement('div');
  wrap.style.cssText = 'margin-bottom:14px';
  var lbl = document.createElement('label');
  lbl.style.cssText = 'font-size:12px;font-weight:700;color:#3D4466;display:block;margin-bottom:5px';
  lbl.textContent = label;
  var inp = document.createElement('input');
  inp.id = id;
  inp.type = type;
  inp.placeholder = placeholder || '';
  inp.style.cssText = 'width:100%;border:1.5px solid #EEF0F7;border-radius:10px;padding:10px 14px;font-family:inherit;font-size:14px;outline:none';
  if (type === 'email') inp.style.direction = 'ltr';
  wrap.appendChild(lbl);
  wrap.appendChild(inp);
  return wrap;
}

// ── SIGN UP / LOGIN ─────────────────────────────────
async function doAuth(mode) {
  var ovs = document.querySelectorAll('.overlay');
  var scope = ovs.length ? ovs[ovs.length-1] : document;
  var emailEl = scope.querySelector('#authEmail') || document.getElementById('authEmail');
  var passEl  = scope.querySelector('#authPass')  || document.getElementById('authPass');
  var email = emailEl ? emailEl.value.trim() : '';
  var pass  = passEl ? passEl.value : '';
  if (!email || !pass) { toast(t('err_fill_all') || 'Please fill all fields', 'err'); return; }

  var btn = document.querySelector('.overlay button[onclick^="doAuth"]');
  if (btn) { btn.disabled = true; btn.textContent = '...'; }

  try {
    if (window.db && window._sb) {
      if (mode === 'signup') {
        if (_selectedRole === 'provider') {
          closeModal();
          window.location.href = 'register.html';
          return;
        }
        var name = document.getElementById('authName') ? document.getElementById('authName').value.trim() : email.split('@')[0];
        await window.db.signUp(email, pass, name, 'client');
        toast(t('signup_success') || 'Account created! Check your email ✅');
      } else {
        await window.db.signIn(email, pass);
        toast('Welcome back! 🎉');
      }
    } else {
      // localStorage fallback
      if (mode==='signup' && _selectedRole==='provider') {
        closeModal();
        window.location.href = 'register.html';
        return;
      }
      var name2 = (document.getElementById('authName') && document.getElementById('authName').value.trim()) || email.split('@')[0];
      setUser({ name: name2, email: email, role: 'client' });
      toast((t('welcome')||'Welcome') + ' ' + name2 + '! 🎉');
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
    + '<div id="bkPriceBox" style="background:linear-gradient(135deg,#0D1B3E,#162654);border-radius:12px;padding:14px;margin-bottom:14px">'
    + '<div id="bkBreakdown" style="color:white"></div>'
    + '<div style="font-size:10px;color:rgba(255,255,255,.4);margin-top:6px;text-align:center" id="bkNote"></div>'
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
  var hours  = parseFloat(document.getElementById('bkHours') ? document.getElementById('bkHours').value : 2);
  var isFullDay = hours > 4;
  var price  = calcPrice(_bkProv, hours, _bkCar);   // provider base price
  var b = priceBreakdown(price);
  var sar = (t('sar') || 'SAR');

  var bd = document.getElementById('bkBreakdown');
  if (bd) {
    bd.innerHTML =
        '<div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:3px"><span style="color:rgba(255,255,255,.6)">' + (t('provider_price')||'Service price') + '</span><span>' + money(b.providerPrice) + '</span></div>'
      + '<div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:6px"><span style="color:rgba(255,255,255,.6)">' + (t('vat')||'VAT') + ' (' + b.vatPct + '%)</span><span style="color:rgba(255,255,255,.8)">+ ' + money(b.vat) + '</span></div>'
      + '<div style="border-top:1px solid rgba(255,255,255,.15);padding-top:8px;display:flex;justify-content:space-between;align-items:center"><span style="font-size:12px;color:rgba(255,255,255,.7)">' + (t('client_pays')||'You pay') + '</span><span style="font-size:20px;font-weight:900;font-family:\'Sora\',sans-serif">' + money(b.clientPays) + '</span></div>';
  }
  var pn = document.getElementById('bkNote');
  if (pn) pn.textContent = isFullDay ? ('\u26a1 ' + (t('full_day_applied')||'Full day rate applied')) : ('\u26a1 ' + (t('over_4h')||'Over 4h = full day rate'));
}

function confirmBooking() {
  var u = getUser();
  if (!u) { closeModal(); openAuth('login'); return; }

  var hours = parseFloat(document.getElementById('bkHours')?.value || 2);
  var svc   = document.getElementById('bkSvc')?.value || 'guiding';
  var date  = document.getElementById('bkDate')?.value || '';
  var price = calcPrice(_bkProv, hours, _bkCar);

  if (!date) { toast('Please select a date', 'err'); return; }

  var b = priceBreakdown(price);
  var bk = {
    id:            'bk_' + Date.now(),
    providerId:    _bkProv.id,
    providerName:  _bkProv.name,
    clientName:    u.name,
    service:       svc,
    date:          date,
    hours:         hours,
    withCar:       _bkCar,
    city:          _bkProv.city,
    providerPrice: b.providerPrice,
    vatPct:        b.vatPct,
    vatAmount:     b.vat,
    total:         b.clientPays,
    commPct:       b.commPct,
    commissionAmount: b.commission,
    providerNet:   b.providerNet,
    bookingType:   hours > 4 ? 'fullday' : 'hourly',
    status:        'pending',
    tripCode:      Math.floor(100000 + Math.random()*900000).toString(),
    codeUnlocked:  false,
    createdAt:     new Date().toISOString()
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
