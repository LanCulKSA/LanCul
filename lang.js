/* =============================================
   LanCul — lang.js  v5 (single source of truth)
   Load this in ALL pages, BEFORE shared.js
============================================= */

// ── TRANSLATIONS ──────────────────────────────
const T = {
  ar:{dir:'rtl',name:'العربية',nav_home:'الرئيسية',nav_providers:'المرشدون',nav_experiences:'التجارب',nav_marketplace:'السوق',nav_rfq:'فرص B2B',nav_client:'حسابي',nav_login:'دخول',nav_signup:'سجّل مجاناً',nav_logout:'خروج',hero_badge:'🌍 التقنية في خدمة السياحة والثقافة',hero_title:'بيتك في مكان آخر..',hero_title2:'تجربة ضيافة سعودية',hero_title3:'بلغات العالم',hero_sub:'اعثر على مرشدك السعودي المحلي الذي يتكلم لغتك الأم — متاح الآن، في أي مدينة، بأسعار شفافة',search_city:'المدينة',search_lang:'اللغة المطلوبة',search_service:'نوع الخدمة',search_btn:'🔍 بحث',search_all:'الكل',stat_providers:'كادر محلي',stat_langs:'لغة عالمية',stat_clients:'عميل مستفيد',stat_jobs:'طلب منفّذ',sec_providers:'المرشدون المتميزون',sec_exp:'التجارب الحصرية',sec_mkt:'السوق المحلي',sec_rfq:'فرص B2B المتاحة',see_all:'عرض الكل',book_now:'احجز الآن',send_rfq:'أرسل عرضك',rfq_title:'RFQ — فرص B2B',rfq_sub:'فرص ومناقصات B2B — مرافقة وفود، معارض، مؤتمرات',rfq_post:'أرسل طلب عرض أسعار',rfq_company:'اسم الشركة',rfq_event_type:'نوع الفعالية',rfq_event_date:'تاريخ الفعالية',rfq_city:'المدينة',rfq_langs:'اللغات المطلوبة',rfq_persons:'عدد الأشخاص',rfq_duration:'مدة الخدمة (أيام)',rfq_budget:'الميزانية المتوقعة (ر.س)',rfq_desc:'تفاصيل الطلب',rfq_contact_name:'اسم المسؤول',rfq_contact_email:'البريد الإلكتروني',rfq_contact_phone:'رقم الجوال',rfq_submit:'إرسال الطلب',rfq_types:['معرض دولي','مؤتمر','اجتماع أعمال','وفد حكومي','فعالية رياضية','زيارة استثمارية','أخرى'],from_price:'يبدأ من',sar:' ر.س',per_hour:'/ساعة',svc_guiding:'مرشد سياحي',svc_translation:'ترجمة',svc_airport:'استقبال مطار',svc_experience:'تجارب',verified:'موثق',rating:'التقييم',reviews:'تقييم',login:'تسجيل الدخول',signup:'إنشاء حساب',email:'البريد الإلكتروني',password:'كلمة المرور',full_name:'الاسم الكامل',nationality:'الجنسية',account_type:'نوع الحساب',client:'عميل / سائح',provider:'مُقدم خدمة',enter_btn:'دخول',create_btn:'إنشاء الحساب',footer_tagline:'بيتك في مكان آخر',rfq_cta:"📩 أرسل طلبك مجاناً",footer_rights:'جميع الحقوق محفوظة'},
  en:{dir:'ltr',name:'English',nav_home:'Home',nav_providers:'Guides',nav_experiences:'Experiences',nav_marketplace:'Marketplace',nav_rfq:'B2B Opportunities',nav_client:'My Account',nav_login:'Login',nav_signup:'Sign Up Free',nav_logout:'Logout',hero_badge:'🌍 Tech Serving Tourism & Culture',hero_title:'Your Home Away From Home..',hero_title2:'Authentic Saudi Hospitality',hero_title3:'In Your Language',hero_sub:'Find a local Saudi guide who speaks your native language — available now, any city, transparent pricing',search_city:'City',search_lang:'Language Needed',search_service:'Service Type',search_btn:'🔍 Search',search_all:'All',stat_providers:'Local Cadres',stat_langs:'Languages',stat_clients:'Clients Served',stat_jobs:'Jobs Done',sec_providers:'Top Guides',sec_exp:'Exclusive Experiences',sec_mkt:'Local Marketplace',sec_rfq:'B2B Opportunities',see_all:'View All',book_now:'Book Now',send_rfq:'Submit Quote',rfq_title:'RFQ — B2B Opportunities',rfq_sub:'Delegations, exhibitions, conferences & business meetings',rfq_post:'Post Request for Quote',rfq_company:'Company / Organization',rfq_event_type:'Event Type',rfq_event_date:'Event Date',rfq_city:'City',rfq_langs:'Languages Needed',rfq_persons:'Number of Persons',rfq_duration:'Duration (Days)',rfq_budget:'Expected Budget (SAR)',rfq_desc:'Request Details',rfq_contact_name:'Contact Name',rfq_contact_email:'Email Address',rfq_contact_phone:'Phone Number',rfq_submit:'Submit Request',rfq_types:['International Exhibition','Conference','Business Meeting','Government Delegation','Sports Event','Investment Visit','Other'],from_price:'From',sar:' SAR',per_hour:'/hr',svc_guiding:'Tour Guide',svc_translation:'Translation',svc_airport:'Airport Reception',svc_experience:'Experiences',verified:'Verified',rating:'Rating',reviews:'reviews',login:'Login',signup:'Create Account',email:'Email Address',password:'Password',full_name:'Full Name',nationality:'Nationality',account_type:'Account Type',client:'Client / Tourist',provider:'Service Provider',enter_btn:'Login',create_btn:'Create Account',footer_tagline:'Your Home in Another Location',rfq_cta:"📩 Submit Request Free",footer_rights:'All Rights Reserved'},
  es:{dir:'ltr',name:'Español',nav_home:'Inicio',nav_providers:'Guías',nav_experiences:'Experiencias',nav_marketplace:'Mercado',nav_rfq:'Oport. B2B',nav_client:'Mi Cuenta',nav_login:'Entrar',nav_signup:'Registrarse',nav_logout:'Salir',hero_badge:'🌍 Tecnología al Servicio del Turismo',hero_title:'Tu Hogar en Otro Lugar..',hero_title2:'Hospitalidad Saudí Auténtica',hero_title3:'En Tu Idioma',hero_sub:'Encuentra un guía saudí local que habla tu idioma materno',search_city:'Ciudad',search_lang:'Idioma',search_service:'Servicio',search_btn:'🔍 Buscar',search_all:'Todos',rfq_types:['Feria Internacional','Conferencia','Reunión de Negocios','Delegación','Evento Deportivo','Visita de Inversión','Otro'],footer_tagline:'Tu Hogar en Otro Lugar',footer_rights:'Todos los Derechos Reservados'},
  fr:{dir:'ltr',name:'Français',nav_home:'Accueil',nav_providers:'Guides',nav_experiences:'Expériences',nav_marketplace:'Marché',nav_rfq:'Opport. B2B',nav_client:'Mon Compte',nav_login:'Connexion',nav_signup:"S'inscrire",nav_logout:'Déconnexion',hero_badge:'🌍 La Technologie au Service du Tourisme',hero_title:'Votre Maison Ailleurs..',hero_title2:'Hospitalité Saoudienne Authentique',hero_title3:'Dans Votre Langue',hero_sub:"Trouvez un guide saoudien local qui parle votre langue maternelle",search_city:'Ville',search_lang:'Langue',search_service:'Service',search_btn:'🔍 Rechercher',search_all:'Tous',rfq_types:["Exposition Internationale","Conférence","Réunion d'Affaires","Délégation","Événement Sportif","Visite d'Investissement","Autre"],footer_tagline:'Votre Maison Ailleurs',footer_rights:'Tous Droits Réservés'},
  it:{dir:'ltr',name:'Italiano',nav_home:'Home',nav_providers:'Guide',nav_experiences:'Esperienze',nav_marketplace:'Mercato',nav_rfq:'Opport. B2B',nav_client:'Il Mio Account',nav_login:'Accedi',nav_signup:'Registrati',nav_logout:'Esci',hero_badge:'🌍 Tecnologia al Servizio del Turismo',hero_title:'Casa Tua Altrove..',hero_title2:'Ospitalità Saudita Autentica',hero_title3:'Nella Tua Lingua',hero_sub:'Trova una guida saudita locale che parla la tua lingua madre',search_city:'Città',search_lang:'Lingua',search_service:'Servizio',search_btn:'🔍 Cerca',search_all:'Tutti',rfq_types:['Fiera Internazionale','Conferenza',"Riunione d'Affari",'Delegazione','Evento Sportivo','Visita di Investimento','Altro'],footer_tagline:'Casa Tua Altrove',footer_rights:'Tutti i Diritti Riservati'},
  pt:{dir:'ltr',name:'Português',nav_home:'Início',nav_providers:'Guias',nav_experiences:'Experiências',nav_marketplace:'Mercado',nav_rfq:'Opor. B2B',nav_client:'Minha Conta',nav_login:'Entrar',nav_signup:'Cadastrar',nav_logout:'Sair',hero_badge:'🌍 Tecnologia a Serviço do Turismo',hero_title:'Sua Casa em Outro Lugar..',hero_title2:'Hospitalidade Saudita Autêntica',hero_title3:'No Seu Idioma',hero_sub:'Encontre um guia saudita local que fala sua língua materna',search_city:'Cidade',search_lang:'Idioma',search_service:'Serviço',search_btn:'🔍 Buscar',search_all:'Todos',rfq_types:['Feira Internacional','Conferência','Reunião de Negócios','Delegação','Evento Esportivo','Visita de Investimento','Outro'],footer_tagline:'Sua Casa em Outro Lugar',footer_rights:'Todos os Direitos Reservados'},
  zh:{dir:'ltr',name:'中文',nav_home:'首页',nav_providers:'向导',nav_experiences:'体验',nav_marketplace:'市场',nav_rfq:'B2B机会',nav_client:'我的账户',nav_login:'登录',nav_signup:'免费注册',nav_logout:'退出',hero_badge:'🌍 科技服务旅游文化',hero_title:'异乡的家..',hero_title2:'真实的沙特热情款待',hero_title3:'用您的语言',hero_sub:'找到会说您母语的本地沙特向导',search_city:'城市',search_lang:'语言',search_service:'服务',search_btn:'🔍 搜索',search_all:'全部',rfq_types:['国际展览','会议','商务会议','政府代表团','体育赛事','投资访问','其他'],footer_tagline:'异乡的家',footer_rights:'版权所有'},
  ja:{dir:'ltr',name:'日本語',nav_home:'ホーム',nav_providers:'ガイド',nav_experiences:'体験',nav_marketplace:'マーケット',nav_rfq:'B2B案件',nav_client:'マイアカウント',nav_login:'ログイン',nav_signup:'無料登録',nav_logout:'ログアウト',hero_badge:'🌍 観光文化に奉仕するテクノロジー',hero_title:'異国の我が家..',hero_title2:'本物のサウジホスピタリティ',hero_title3:'あなたの言語で',hero_sub:'母国語を話すサウジアラビアのローカルガイドを見つけましょう',search_city:'都市',search_lang:'言語',search_service:'サービス',search_btn:'🔍 検索',search_all:'すべて',rfq_types:['国際展示会','会議','ビジネスミーティング','政府代表団','スポーツイベント','投資訪問','その他'],footer_tagline:'異国の我が家',footer_rights:'著作権表示'},
  ko:{dir:'ltr',name:'한국어',nav_home:'홈',nav_providers:'가이드',nav_experiences:'체험',nav_marketplace:'마켓',nav_rfq:'B2B 기회',nav_client:'내 계정',nav_login:'로그인',nav_signup:'무료 가입',nav_logout:'로그아웃',hero_badge:'🌍 관광 문화를 위한 기술',hero_title:'다른 곳의 나의 집..',hero_title2:'진정한 사우디 환대',hero_title3:'당신의 언어로',hero_sub:'모국어를 구사하는 현지 사우디 가이드를 찾으세요',search_city:'도시',search_lang:'언어',search_service:'서비스',search_btn:'🔍 검색',search_all:'전체',rfq_types:['국제 전시회','컨퍼런스','비즈니스 미팅','정부 대표단','스포츠 이벤트','투자 방문','기타'],footer_tagline:'다른 곳의 나의 집',footer_rights:'모든 권리 보유'},
  de:{dir:'ltr',name:'Deutsch',nav_home:'Startseite',nav_providers:'Guides',nav_experiences:'Erlebnisse',nav_marketplace:'Marktplatz',nav_rfq:'B2B-Chancen',nav_client:'Mein Konto',nav_login:'Anmelden',nav_signup:'Kostenlos registrieren',nav_logout:'Abmelden',hero_badge:'🌍 Technologie im Dienst von Tourismus und Kultur',hero_title:'Zu Hause anderswo..',hero_title2:'Authentische saudische Gastfreundschaft',hero_title3:'In Ihrer Sprache',hero_sub:'Finden Sie einen lokalen saudischen Guide, der Ihre Muttersprache spricht',search_city:'Stadt',search_lang:'Sprache',search_service:'Service',search_btn:'🔍 Suchen',search_all:'Alle',rfq_types:['Internationale Messe','Konferenz','Geschäftstreffen','Regierungsdelegation','Sportveranstaltung','Investitionsbesuch','Sonstiges'],footer_tagline:'Zu Hause anderswo',footer_rights:'Alle Rechte vorbehalten'},
  ru:{dir:'ltr',name:'Русский',nav_home:'Главная',nav_providers:'Гиды',nav_experiences:'Впечатления',nav_marketplace:'Маркет',nav_rfq:'B2B Возможности',nav_client:'Мой Аккаунт',nav_login:'Войти',nav_signup:'Регистрация',nav_logout:'Выйти',hero_badge:'🌍 Технологии на службе туризма',hero_title:'Дом вдали от дома..',hero_title2:'Настоящее саудовское гостеприимство',hero_title3:'На вашем языке',hero_sub:'Найдите местного саудовского гида, говорящего на вашем родном языке',search_city:'Город',search_lang:'Язык',search_service:'Услуга',search_btn:'🔍 Поиск',search_all:'Все',rfq_types:['Международная выставка','Конференция','Деловая встреча','Правительственная делегация','Спортивное мероприятие','Инвестиционный визит','Другое'],footer_tagline:'Дом вдали от дома',footer_rights:'Все права защищены'},
};

// Missing keys (added separately for clean diff)
(function() {
  var extra = {
    how1:{ar:'ابحث',en:'Search',es:'Busca',fr:'Cherche',it:'Cerca',pt:'Busque',zh:'搜索',ja:'検索',ko:'검색',de:'Suchen',ru:'Поиск'},
    how2:{ar:'تواصل',en:'Connect',es:'Conecta',fr:'Contacte',it:'Connetti',pt:'Conecte',zh:'联系',ja:'連絡',ko:'연락',de:'Verbinden',ru:'Связаться'},
    how3:{ar:'احجز',en:'Book',es:'Reserva',fr:'Réserve',it:'Prenota',pt:'Reserve',zh:'预订',ja:'予約',ko:'예약',de:'Buchen',ru:'Забронировать'},
    how4:{ar:'قيّم',en:'Review',es:'Evalúa',fr:'Évalue',it:'Valuta',pt:'Avalie',zh:'评价',ja:'評価',ko:'리뷰',de:'Bewerten',ru:'Оценить'},
    partners_label:{ar:'شركاء النجاح والثقة',en:'Our Trusted Partners',es:'Nuestros Socios',fr:'Nos Partenaires',it:'I Nostri Partner',pt:'Nossos Parceiros',zh:'合作伙伴',ja:'パートナー',ko:'파트너',de:'Unsere Partner',ru:'Наши партнёры'},
    rfq_cta:{ar:'📩 أرسل طلبك مجاناً',en:'📩 Submit Free Request',es:'📩 Enviar Gratis',fr:'📩 Soumettre Gratuitement',it:'📩 Invia Gratis',pt:'📩 Enviar Grátis',zh:'📩 免费提交',ja:'📩 無料送信',ko:'📩 무료 제출',de:'📩 Kostenlos Senden',ru:'📩 Отправить Бесплатно'},
  };
  var langs = Object.keys(T);
  for (var i = 0; i < langs.length; i++) {
    var lc = langs[i];
    var keys = Object.keys(extra);
    for (var j = 0; j < keys.length; j++) {
      var key = keys[j];
      if (!T[lc][key]) T[lc][key] = extra[key][lc] || extra[key]['ar'];
    }
  }
})();

// ── LANGS CONFIG ───────────────────────────────
var LANGS_CFG = [
  {c:'ar', n:'عر', label:'العربية',  flag:'🇸🇦', dir:'rtl'},
  {c:'en', n:'EN', label:'English',   flag:'🇬🇧', dir:'ltr'},
  {c:'es', n:'ES', label:'Español',   flag:'🇪🇸', dir:'ltr'},
  {c:'fr', n:'FR', label:'Français',  flag:'🇫🇷', dir:'ltr'},
  {c:'it', n:'IT', label:'Italiano',  flag:'🇮🇹', dir:'ltr'},
  {c:'pt', n:'PT', label:'Português', flag:'🇧🇷', dir:'ltr'},
  {c:'zh', n:'中', label:'中文',       flag:'🇨🇳', dir:'ltr'},
  {c:'ja', n:'日', label:'日本語',     flag:'🇯🇵', dir:'ltr'},
  {c:'ko', n:'한', label:'한국어',     flag:'🇰🇷', dir:'ltr'},
  {c:'de', n:'DE', label:'Deutsch',   flag:'🇩🇪', dir:'ltr'},
  {c:'ru', n:'РУ', label:'Русский',   flag:'🇷🇺', dir:'ltr'},
];

// ── STATE ──────────────────────────────────────
var currentLang = localStorage.getItem('lancul_lang') || 'ar';

// ── SET LANG (main apply function) ─────────────
function setLang(lc) {
  // Find lang config
  var langCfg = null;
  for (var i = 0; i < LANGS_CFG.length; i++) {
    if (LANGS_CFG[i].c === lc) { langCfg = LANGS_CFG[i]; break; }
  }
  if (!langCfg) return;

  currentLang = lc;
  localStorage.setItem('lancul_lang', lc);

  // Apply direction & lang attribute
  document.documentElement.dir  = langCfg.dir;
  document.documentElement.lang = lc;
  if (langCfg.dir === 'ltr') {
    document.body.classList.add('ltr');
    document.body.style.fontFamily = "'Sora', sans-serif";
  } else {
    document.body.classList.remove('ltr');
    document.body.style.fontFamily = "'Tajawal', sans-serif";
  }

  // Translate all data-t elements
  var tx = T[lc] || T['ar'];
  var els = document.querySelectorAll('[data-t]');
  for (var j = 0; j < els.length; j++) {
    var el  = els[j];
    var key = el.getAttribute('data-t');
    if (tx[key] !== undefined) {
      el.textContent = tx[key];
    }
  }

  // Translate placeholders (data-tp)
  var pls = document.querySelectorAll('[data-tp]');
  for (var k = 0; k < pls.length; k++) {
    var pKey = pls[k].getAttribute('data-tp');
    if (tx[pKey] !== undefined) pls[k].placeholder = tx[pKey];
  }

  // Update lang button label
  var f = document.getElementById('curFlag');
  var n = document.getElementById('curLangN');
  if (f) f.textContent = langCfg.flag;
  if (n) n.textContent = langCfg.n;

  // Rebuild dropdown to reflect current selection
  _buildDDInner(lc);

  // Fire event for dynamic content re-render
  document.dispatchEvent(new CustomEvent('langchange', { detail: lc }));
}

// helper: get t value
function t(key) {
  var tx = T[currentLang] || T['ar'];
  return tx[key] !== undefined ? tx[key] : (T['ar'][key] || key);
}

// ── BUILD DROPDOWN ─────────────────────────────
function _buildDDInner(cur) {
  var dd = document.getElementById('langDD');
  if (!dd) return;
  var rows = [];
  for (var i = 0; i < LANGS_CFG.length; i++) {
    var l = LANGS_CFG[i];
    rows.push('<button class="ldb ' + (l.c === cur ? 'on' : '') +
      '" data-lc="' + l.c + '">' + l.flag + ' ' + l.label + '</button>');
  }
  dd.innerHTML = rows.join('');
  // Attach click handlers
  var btns = dd.querySelectorAll('[data-lc]');
  for (var j = 0; j < btns.length; j++) {
    (function(btn) {
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        switchLang(this.getAttribute('data-lc'));
      });
    })(btns[j]);
  }
}

function buildLangDD() {
  var cur = localStorage.getItem('lancul_lang') || 'ar';
  var cl = null;
  for (var i = 0; i < LANGS_CFG.length; i++) {
    if (LANGS_CFG[i].c === cur) { cl = LANGS_CFG[i]; break; }
  }
  if (!cl) cl = LANGS_CFG[0];
  var f = document.getElementById('curFlag');
  var n = document.getElementById('curLangN');
  if (f) f.textContent = cl.flag;
  if (n) n.textContent = cl.n;
  _buildDDInner(cur);
}

// ── TOGGLE DROPDOWN ────────────────────────────
function toggleLangDD() {
  var dd = document.getElementById('langDD');
  if (!dd) return;
  if (dd.classList.contains('hidden')) {
    dd.classList.remove('hidden');
    _buildDDInner(currentLang);
    setTimeout(function() {
      document.addEventListener('click', _closeLangDD, { once: true });
    }, 10);
  } else {
    dd.classList.add('hidden');
  }
}

function _closeLangDD(e) {
  var wrap = document.getElementById('langWrap');
  if (!wrap || !wrap.contains(e.target)) {
    var dd = document.getElementById('langDD');
    if (dd) dd.classList.add('hidden');
  }
}

// ── SWITCH LANG ────────────────────────────────
function switchLang(lc) {
  var dd = document.getElementById('langDD');
  if (dd) dd.classList.add('hidden');
  setLang(lc);
  // Re-render dynamic sections if present
  if (typeof renderProviders   === 'function') renderProviders();
  if (typeof renderExp         === 'function') renderExp();
  if (typeof renderMkt         === 'function') renderMkt();
  if (typeof renderRFQTypes    === 'function') renderRFQTypes();
  if (typeof renderRFQCards    === 'function') renderRFQCards();
  if (typeof applyFilters      === 'function') applyFilters();
}

// ── HANDLE ?lang= URL PARAM ────────────────────
(function() {
  var p = new URLSearchParams(location.search);
  var l = p.get('lang');
  if (l) localStorage.setItem('lancul_lang', l);
})();

// ── AUTO INIT ON DOM READY ─────────────────────
document.addEventListener('DOMContentLoaded', function() {
  setLang(localStorage.getItem('lancul_lang') || 'ar');
});
