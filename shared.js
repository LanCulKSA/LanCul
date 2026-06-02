
/* =============================================
   LanCul Platform — Shared JS  v3
   Trip Code System + Full Pricing
============================================= */

/* ── TRANSLATIONS (11 langs) ─────────────── */
const T = {
  ar:{dir:'rtl',name:'العربية',nav_home:'الرئيسية',nav_providers:'المرشدون',nav_experiences:'التجارب',nav_marketplace:'السوق',nav_rfq:'فرص B2B',nav_client:'حسابي',nav_login:'دخول',nav_signup:'سجّل مجاناً',nav_logout:'خروج',hero_badge:'🌍 التقنية في خدمة السياحة والثقافة',hero_title:'بيتك في مكان آخر..',hero_title2:'تجربة ضيافة سعودية',hero_title3:'بلغات العالم',hero_sub:'اعثر على مرشدك السعودي المحلي الذي يتكلم لغتك الأم — متاح الآن، في أي مدينة، بأسعار شفافة',search_city:'المدينة',search_lang:'اللغة المطلوبة',search_service:'نوع الخدمة',search_btn:'🔍 بحث',search_all:'الكل',stat_providers:'كادر محلي',stat_langs:'لغة عالمية',stat_clients:'عميل مستفيد',stat_jobs:'طلب منفّذ',sec_providers:'المرشدون المتميزون',sec_exp:'التجارب الحصرية',sec_mkt:'السوق المحلي',sec_rfq:'فرص B2B المتاحة',see_all:'عرض الكل',book_now:'احجز الآن',send_rfq:'أرسل عرضك',rfq_title:'RFQ — فرص B2B',rfq_sub:'فرص ومناقصات B2B — مرافقة وفود، معارض، مؤتمرات',rfq_post:'أرسل طلب عرض أسعار',rfq_company:'اسم الشركة',rfq_event_type:'نوع الفعالية',rfq_event_date:'تاريخ الفعالية',rfq_city:'المدينة',rfq_langs:'اللغات المطلوبة',rfq_persons:'عدد الأشخاص',rfq_duration:'مدة الخدمة (أيام)',rfq_budget:'الميزانية المتوقعة (ر.س)',rfq_desc:'تفاصيل الطلب',rfq_contact_name:'اسم المسؤول',rfq_contact_email:'البريد الإلكتروني',rfq_contact_phone:'رقم الجوال',rfq_submit:'إرسال الطلب',rfq_types:['معرض دولي','مؤتمر','اجتماع أعمال','وفد حكومي','فعالية رياضية','زيارة استثمارية','أخرى'],from_price:'يبدأ من',sar:' ر.س',per_hour:'/ساعة',svc_guiding:'مرشد سياحي',svc_translation:'ترجمة',svc_airport:'استقبال مطار',svc_experience:'تجارب',verified:'موثق',rating:'التقييم',reviews:'تقييم',login:'تسجيل الدخول',signup:'إنشاء حساب',email:'البريد الإلكتروني',password:'كلمة المرور',full_name:'الاسم الكامل',nationality:'الجنسية',account_type:'نوع الحساب',client:'عميل / سائح',provider:'مُقدم خدمة',enter_btn:'دخول',create_btn:'إنشاء الحساب',footer_tagline:'بيتك في مكان آخر',footer_rights:'جميع الحقوق محفوظة'},
  en:{dir:'ltr',name:'English',nav_home:'Home',nav_providers:'Guides',nav_experiences:'Experiences',nav_marketplace:'Marketplace',nav_rfq:'B2B Opportunities',nav_client:'My Account',nav_login:'Login',nav_signup:'Sign Up Free',nav_logout:'Logout',hero_badge:'🌍 Tech Serving Tourism & Culture',hero_title:'Your Home Away From Home..',hero_title2:'Authentic Saudi Hospitality',hero_title3:'In Your Language',hero_sub:'Find a local Saudi guide who speaks your native language — available now, any city, transparent pricing',search_city:'City',search_lang:'Language Needed',search_service:'Service Type',search_btn:'🔍 Search',search_all:'All',stat_providers:'Local Cadres',stat_langs:'Languages',stat_clients:'Clients Served',stat_jobs:'Jobs Done',sec_providers:'Top Guides',sec_exp:'Exclusive Experiences',sec_mkt:'Local Marketplace',sec_rfq:'B2B Opportunities',see_all:'View All',book_now:'Book Now',send_rfq:'Submit Quote',rfq_title:'RFQ — B2B Opportunities',rfq_sub:'Delegations, exhibitions, conferences & business meetings',rfq_post:'Post Request for Quote',rfq_company:'Company / Organization',rfq_event_type:'Event Type',rfq_event_date:'Event Date',rfq_city:'City',rfq_langs:'Languages Needed',rfq_persons:'Number of Persons',rfq_duration:'Duration (Days)',rfq_budget:'Expected Budget (SAR)',rfq_desc:'Request Details',rfq_contact_name:'Contact Name',rfq_contact_email:'Email Address',rfq_contact_phone:'Phone Number',rfq_submit:'Submit Request',rfq_types:['International Exhibition','Conference','Business Meeting','Government Delegation','Sports Event','Investment Visit','Other'],from_price:'From',sar:' SAR',per_hour:'/hr',svc_guiding:'Tour Guide',svc_translation:'Translation',svc_airport:'Airport Reception',svc_experience:'Experiences',verified:'Verified',rating:'Rating',reviews:'reviews',login:'Login',signup:'Create Account',email:'Email Address',password:'Password',full_name:'Full Name',nationality:'Nationality',account_type:'Account Type',client:'Client / Tourist',provider:'Service Provider',enter_btn:'Login',create_btn:'Create Account',footer_tagline:'Your Home in Another Location',footer_rights:'All Rights Reserved'},
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
        <h2>احجز مع ${p.name}</h2>
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
  if (!date || !time) { toast_shared('اختر التاريخ والوقت', 'err'); return; }
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
  toast_shared('تم الحجز ✅ فُتحت قناة التواصل مع ' + p.name);
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
  o.innerHTML = `<div class="modal" style="max-width:480px">
    <div class="mhead"><h2>${mode==='login'?'تسجيل الدخول':'إنشاء حساب'}</h2><button class="close-btn" onclick="closeModal()">×</button></div>
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

function doAuth(mode) {
  const email = document.getElementById('authEmail')?.value;
  const pass  = document.getElementById('authPass')?.value;
  if (!email || !pass) { toast_shared('يرجى تعبئة جميع الحقول', 'err'); return; }
  const name = document.getElementById('authName')?.value || email.split('@')[0];
  setUser({ name, email, role: mode==='signup' ? _selectedRole : 'client' });
  closeModal();
  toast_shared('مرحباً ' + name + '! 🎉');
  setTimeout(() => location.reload(), 600);
}

function doLogout() { logout(); toast_shared('تم تسجيل الخروج'); setTimeout(() => location.reload(), 600); }

/* ═══════════════════════════════════════════
   LANGUAGE ENGINE
═══════════════════════════════════════════ */
let currentLang = localStorage.getItem('lancul_lang') || 'ar';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('lancul_lang', lang);
  const tx = T[lang] || T['ar'];
  document.documentElement.dir = tx.dir;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-t]').forEach(el => {
    const key = el.getAttribute('data-t');
    if (tx[key] !== undefined) el.textContent = tx[key];
  });
  document.dispatchEvent(new CustomEvent('langchange', { detail: lang }));
}

function t(key) { return (T[currentLang] && T[currentLang][key]) || (T['ar'][key]) || key; }

/* ═══════════════════════════════════════════
   TOAST (shared)
═══════════════════════════════════════════ */
function toast_shared(msg, type='ok') {
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
