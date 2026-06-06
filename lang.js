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
    rfq_cta:{ar:'📩 أرسل طلبك مجاناً',en:'📩 Submit Free Request',es:'📩 Enviar Gratis',fr:'📩 Soumettre Gratuitement',it:'📩 Invia Gratis',pt:'📩 Enviar Grátis',zh:'📩 免费提交',ja:'📩 無料送信',ko:'📩 무료 제출',de:'📩 Kostenlos Senden',ru:'📩 Отправить Бесплатно'},    nav_account:{ar:'👤 حسابي', en:'👤 My Account', es:'👤 Mi Cuenta', fr:'👤 Mon Compte', it:'👤 Il Mio Account', pt:'👤 Minha Conta', zh:'👤 我的账户', ja:'👤 マイページ', ko:'👤 내 계정', de:'👤 Mein Konto', ru:'👤 Мой Аккаунт'},
    nav_chat:{ar:'الشات', en:'Chat', es:'Chat', fr:'Chat', it:'Chat', pt:'Chat', zh:'聊天', ja:'チャット', ko:'채팅', de:'Chat', ru:'Чат'},
    nav_admin:{ar:'الإدارة', en:'Admin', es:'Admin', fr:'Admin', it:'Admin', pt:'Admin', zh:'管理', ja:'管理', ko:'관리', de:'Verwaltung', ru:'Админ'},
    btn_logout:{ar:'خروج', en:'Logout', es:'Salir', fr:'Déconnexion', it:'Esci', pt:'Sair', zh:'退出', ja:'ログアウト', ko:'로그아웃', de:'Abmelden', ru:'Выйти'},
    btn_login:{ar:'دخول', en:'Login', es:'Entrar', fr:'Connexion', it:'Accedi', pt:'Entrar', zh:'登录', ja:'ログイン', ko:'로그인', de:'Anmelden', ru:'Войти'},
    btn_signup:{ar:'سجّل مجاناً', en:'Sign Up Free', es:'Registrarse', fr:'Inscription', it:'Registrati', pt:'Cadastrar', zh:'免费注册', ja:'無料登録', ko:'무료 가입', de:'Kostenlos anmelden', ru:'Регистрация'},
    search_all:{ar:'الكل', en:'All', es:'Todo', fr:'Tout', it:'Tutto', pt:'Todos', zh:'全部', ja:'すべて', ko:'전체', de:'Alle', ru:'Все'},
    search_go:{ar:'🔍 بحث', en:'🔍 Search', es:'🔍 Buscar', fr:'🔍 Chercher', it:'🔍 Cerca', pt:'🔍 Buscar', zh:'🔍 搜索', ja:'🔍 検索', ko:'🔍 검색', de:'🔍 Suchen', ru:'🔍 Поиск'},
    filter_all:{ar:'🌍 الكل', en:'🌍 All', es:'🌍 Todo', fr:'🌍 Tout', it:'🌍 Tutto', pt:'🌍 Todos', zh:'🌍 全部', ja:'🌍 すべて', ko:'🌍 전체', de:'🌍 Alle', ru:'🌍 Все'},
    f_riyadh:{ar:'الرياض', en:'Riyadh', es:'Riad', fr:'Riyad', it:'Riyad', pt:'Riade', zh:'利雅得', ja:'リヤド', ko:'리야드', de:'Riad', ru:'Эр-Рияд'},
    f_jeddah:{ar:'جدة', en:'Jeddah', es:'Yeda', fr:'Djeddah', it:'Gedda', pt:'Jeddah', zh:'吉达', ja:'ジッダ', ko:'제다', de:'Dschidda', ru:'Джидда'},
    f_mecca:{ar:'مكة', en:'Mecca', es:'La Meca', fr:'La Mecque', it:'Mecca', pt:'Meca', zh:'麦加', ja:'メッカ', ko:'메카', de:'Mekka', ru:'Мекка'},
    f_jp:{ar:'🇯🇵 ياباني', en:'🇯🇵 Japanese', es:'🇯🇵 Japonés', fr:'🇯🇵 Japonais', it:'🇯🇵 Giapponese', pt:'🇯🇵 Japonês', zh:'🇯🇵 日语', ja:'🇯🇵 日本語', ko:'🇯🇵 일본어', de:'🇯🇵 Japanisch', ru:'🇯🇵 Японский'},
    f_cn:{ar:'🇨🇳 صيني', en:'🇨🇳 Chinese', es:'🇨🇳 Chino', fr:'🇨🇳 Chinois', it:'🇨🇳 Cinese', pt:'🇨🇳 Chinês', zh:'🇨🇳 中文', ja:'🇨🇳 中国語', ko:'🇨🇳 중국어', de:'🇨🇳 Chinesisch', ru:'🇨🇳 Китайский'},
    f_en:{ar:'🇬🇧 إنجليزي', en:'🇬🇧 English', es:'🇬🇧 Inglés', fr:'🇬🇧 Anglais', it:'🇬🇧 Inglese', pt:'🇬🇧 Inglês', zh:'🇬🇧 英语', ja:'🇬🇧 英語', ko:'🇬🇧 영어', de:'🇬🇧 Englisch', ru:'🇬🇧 Английский'},
    mkt_all:{ar:'الكل', en:'All', es:'Todo', fr:'Tout', it:'Tutto', pt:'Todos', zh:'全部', ja:'すべて', ko:'전체', de:'Alle', ru:'Все'},
    mkt_restaurants:{ar:'🍽️ مطاعم', en:'🍽️ Restaurants', es:'🍽️ Restaurantes', fr:'🍽️ Restaurants', it:'🍽️ Ristoranti', pt:'🍽️ Restaurantes', zh:'🍽️ 餐厅', ja:'🍽️ レストラン', ko:'🍽️ 레스토랑', de:'🍽️ Restaurants', ru:'🍽️ Рестораны'},
    mkt_cafes:{ar:'☕ مقاهي', en:'☕ Cafes', es:'☕ Cafés', fr:'☕ Cafés', it:'☕ Caffè', pt:'☕ Cafés', zh:'☕ 咖啡馆', ja:'☕ カフェ', ko:'☕ 카페', de:'☕ Cafés', ru:'☕ Кафе'},
    mkt_activities:{ar:'🎯 أنشطة', en:'🎯 Activities', es:'🎯 Actividades', fr:'🎯 Activités', it:'🎯 Attività', pt:'🎯 Atividades', zh:'🎯 活动', ja:'🎯 アクティビティ', ko:'🎯 활동', de:'🎯 Aktivitäten', ru:'🎯 Активности'},
    mkt_join:{ar:'انضم للسوق واستقبل السياح الأجانب بلغتهم', en:'Join the marketplace and receive foreign tourists in their language', es:'Únase al mercado', fr:'Rejoignez le marché', it:'Unisciti al mercato', pt:'Junte-se ao mercado', zh:'加入市场接待外国游客', ja:'マーケットプレイスに参加', ko:'마켓플레이스 참여', de:'Treten Sie dem Marktplatz bei', ru:'Присоединитесь к рынку'},
    mkt_register:{ar:'سجّل نشاطك التجاري', en:'Register Your Business', es:'Registrar su negocio', fr:'Enregistrer votre entreprise', it:'Registra la tua attività', pt:'Registrar negócio', zh:'注册您的商家', ja:'ビジネス登録', ko:'비즈니스 등록', de:'Geschäft registrieren', ru:'Зарегистрируйте бизнес'},
    how1_desc:{ar:'حدد المدينة، اللغة، ونوع الخدمة', en:'Choose city, language, and service type', es:'Elige ciudad, idioma y servicio', fr:'Choisissez ville, langue et service', it:'Scegli città, lingua e servizio', pt:'Escolha cidade, idioma e serviço', zh:'选择城市、语言和服务', ja:'都市、言語、サービスを選択', ko:'도시, 언어, 서비스 선택', de:'Stadt, Sprache und Serviceart wählen', ru:'Выберите город, язык и услугу'},
    how2_desc:{ar:'تحدث مع المُقدم قبل الحجز', en:'Talk to the guide before booking', es:'Habla con el guía antes de reservar', fr:'Parlez au guide avant de réserver', it:'Parla con la guida prima di prenotare', pt:'Fale com o guia antes de reservar', zh:'预订前与向导交流', ja:'予約前にガイドと話す', ko:'예약 전 가이드와 대화', de:'Sprechen Sie vor der Buchung mit dem Guide', ru:'Поговорите с гидом перед бронированием'},
    how3_desc:{ar:'أسعار شفافة وواضحة', en:'Transparent and clear pricing', es:'Precios transparentes y claros', fr:'Prix transparents et clairs', it:'Prezzi trasparenti e chiari', pt:'Preços transparentes e claros', zh:'价格透明清晰', ja:'透明で明確な価格', ko:'투명하고 명확한 가격', de:'Transparente und klare Preise', ru:'Прозрачные и чёткие цены'},
    how4_desc:{ar:'شاركنا تجربتك', en:'Share your experience with us', es:'Comparte tu experiencia', fr:'Partagez votre expérience', it:'Condividi la tua esperienza', pt:'Compartilhe sua experiência', zh:'与我们分享您的体验', ja:'あなたの体験を共有してください', ko:'경험을 공유하세요', de:'Teilen Sie Ihre Erfahrung mit uns', ru:'Поделитесь своим опытом'},
    opt_all_cities:{ar:'الكل', en:'All Cities', es:'Todas las ciudades', fr:'Toutes les villes', it:'Tutte le città', pt:'Todas as cidades', zh:'所有城市', ja:'全都市', ko:'전체 도시', de:'Alle Städte', ru:'Все города'},
    svc_all:{ar:'الكل', en:'All Services', es:'Todos los servicios', fr:'Tous les services', it:'Tutti i servizi', pt:'Todos os serviços', zh:'所有服务', ja:'全サービス', ko:'전체 서비스', de:'Alle Dienste', ru:'Все услуги'},
    lang_all:{ar:'الكل', en:'All Languages', es:'Todos los idiomas', fr:'Toutes les langues', it:'Tutte le lingue', pt:'Todos os idiomas', zh:'所有语言', ja:'全言語', ko:'전체 언어', de:'Alle Sprachen', ru:'Все языки'},
    stat_label1:{ar:'كادر محلي سعودي', en:'Local Saudi Guides', es:'Guías locales saudíes', fr:'Guides locaux saoudiens', it:'Guide locali saudite', pt:'Guias locais sauditas', zh:'当地沙特向导', ja:'地元サウジガイド', ko:'현지 사우디 가이드', de:'Lokale saudi. Guides', ru:'Местные саудовские гиды'},
    footer_contact:{ar:'تواصل معنا', en:'Contact Us', es:'Contáctenos', fr:'Contactez-nous', it:'Contattaci', pt:'Fale conosco', zh:'联系我们', ja:'お問い合わせ', ko:'문의하기', de:'Kontakt', ru:'Свяжитесь с нами'},
    f_medina:{ar:'المدينة المنورة', en:'Medina', es:'Medina', fr:'Médine', it:'Medina', pt:'Medina', zh:'麦地那', ja:'メディナ', ko:'메디나', de:'Medina', ru:'Медина'},
    f_dammam:{ar:'الدمام', en:'Dammam', es:'Dammam', fr:'Dammam', it:'Dammam', pt:'Dammam', zh:'达曼', ja:'ダンマーム', ko:'담맘', de:'Dammam', ru:'Даммам'},
    f_abha:{ar:'أبها', en:'Abha', es:'Abha', fr:'Abha', it:'Abha', pt:'Abha', zh:'艾卜哈', ja:'アブハ', ko:'아브하', de:'Abha', ru:'Абха'},
    f_alula:{ar:'العُلا', en:'AlUla', es:'AlUla', fr:'AlUla', it:'AlUla', pt:'AlUla', zh:'阿尔奥拉', ja:'アルウラ', ko:'알울라', de:'AlUla', ru:'Аль-Ула'},
    l_ja:{ar:'اليابانية', en:'Japanese', es:'Japonés', fr:'Japonais', it:'Giapponese', pt:'Japonês', zh:'日语', ja:'日本語', ko:'일본어', de:'Japanisch', ru:'Японский'},
    l_zh:{ar:'الصينية (الماندرين)', en:'Chinese (Mandarin)', es:'Chino', fr:'Chinois', it:'Cinese', pt:'Chinês', zh:'中文', ja:'中国語', ko:'중국어', de:'Chinesisch', ru:'Китайский'},
    l_fr:{ar:'الفرنسية', en:'French', es:'Francés', fr:'Français', it:'Francese', pt:'Francês', zh:'法语', ja:'フランス語', ko:'프랑스어', de:'Französisch', ru:'Французский'},
    l_de:{ar:'الألمانية', en:'German', es:'Alemán', fr:'Allemand', it:'Tedesco', pt:'Alemão', zh:'德语', ja:'ドイツ語', ko:'독일어', de:'Deutsch', ru:'Немецкий'},
    l_es:{ar:'الإسبانية', en:'Spanish', es:'Español', fr:'Espagnol', it:'Spagnolo', pt:'Espanhol', zh:'西班牙语', ja:'スペイン語', ko:'스페인어', de:'Spanisch', ru:'Испанский'},
    l_pt:{ar:'البرتغالية', en:'Portuguese', es:'Portugués', fr:'Portugais', it:'Portoghese', pt:'Português', zh:'葡萄牙语', ja:'ポルトガル語', ko:'포르투갈어', de:'Portugiesisch', ru:'Португальский'},
    l_ru:{ar:'الروسية', en:'Russian', es:'Ruso', fr:'Russe', it:'Russo', pt:'Russo', zh:'俄语', ja:'ロシア語', ko:'러시아어', de:'Russisch', ru:'Русский'},
    l_en:{ar:'الإنجليزية', en:'English', es:'Inglés', fr:'Anglais', it:'Inglese', pt:'Inglês', zh:'英语', ja:'英語', ko:'영어', de:'Englisch', ru:'Английский'},
    l_ko:{ar:'الكورية', en:'Korean', es:'Coreano', fr:'Coréen', it:'Coreano', pt:'Coreano', zh:'韩语', ja:'韓国語', ko:'한국어', de:'Koreanisch', ru:'Корейский'},
    l_it:{ar:'الإيطالية', en:'Italian', es:'Italiano', fr:'Italien', it:'Italiano', pt:'Italiano', zh:'意大利语', ja:'イタリア語', ko:'이탈리아어', de:'Italienisch', ru:'Итальянский'},
    l_id:{ar:'الإندونيسية', en:'Indonesian', es:'Indonesio', fr:'Indonésien', it:'Indonesiano', pt:'Indonésio', zh:'印尼语', ja:'インドネシア語', ko:'인도네시아어', de:'Indonesisch', ru:'Индонезийский'},
    how_title:{ar:'يعمل لانكول؟', en:'How LanCul Works?', es:'¿Cómo funciona LanCul?', fr:'Comment fonctionne LanCul ?', it:'Come funziona LanCul?', pt:'Como funciona o LanCul?', zh:'LanCul如何运作', ja:'LanCulの仕組み', ko:'LanCul 작동 방식', de:'Wie funktioniert LanCul?', ru:'Как работает LanCul?'},
    p2:{ar:'هيئة السياحة السعودية', en:'Saudi Tourism Authority', es:'Autoridad de Turismo Saudí', fr:'Autorité touristique saoudienne', it:'Autorità turistica saudita', pt:'Autoridade de Turismo Saudita', zh:'沙特旅游局', ja:'サウジ観光庁', ko:'사우디 관광청', de:'Saudi-Tourismusbehörde', ru:'Саудовское туристическое ведомство'},
    p3:{ar:'مؤسسة مسك', en:'Misk Foundation', es:'Fundación Misk', fr:'Fondation Misk', it:'Fondazione Misk', pt:'Fundação Misk', zh:'米斯克基金会', ja:'ミスク財団', ko:'미스크 재단', de:'Misk-Stiftung', ru:'Фонд Миск'},
    p4:{ar:'الأمم المتحدة', en:'United Nations', es:'Naciones Unidas', fr:'Nations Unies', it:'Nazioni Unite', pt:'Nações Unidas', zh:'联合国', ja:'国連', ko:'유엔', de:'Vereinte Nationen', ru:'ООН'},
    p5:{ar:'وزارة الثقافة', en:'Ministry of Culture', es:'Ministerio de Cultura', fr:'Ministère de la Culture', it:'Ministero della Cultura', pt:'Ministério da Cultura', zh:'文化部', ja:'文化省', ko:'문화부', de:'Kulturministerium', ru:'Министерство культуры'},
    p6:{ar:'وزارة الرياضة', en:'Ministry of Sport', es:'Ministerio de Deportes', fr:'Ministère du Sport', it:'Ministero dello Sport', pt:'Ministério do Esporte', zh:'体育部', ja:'スポーツ省', ko:'체육부', de:'Sportministerium', ru:'Министерство спорта'},
    p7:{ar:'جامعة الملك سعود', en:'King Saud University', es:'Universidad Rey Saud', fr:'Université Roi Saoud', it:'Università Re Saud', pt:'Universidade Rei Saud', zh:'沙特国王大学', ja:'キング・サウード大学', ko:'킹 사우드 대학교', de:'König-Saud-Universität', ru:'Университет короля Сауда'},
    prov_hero_title:{ar:'مرشد أو مترجم', en:'Guide or Translator', es:'Guía o Traductor', fr:'Guide ou Traducteur', it:'Guida o Traduttore', pt:'Guia ou Tradutor', zh:'向导或翻译', ja:'ガイドまたは通訳', ko:'가이드 또는 통역사', de:'Guide oder Übersetzer', ru:'Гид или переводчик'},
    prov_hero_sub:{ar:'+1,000 كادر سعودي — 20+ لغة عالمية', en:'+1,000 Saudi professionals — 20+ world languages', es:'+1,000 Saudíes — 20+ idiomas', fr:'+1,000 Saoudiens — 20+ langues', it:'+1,000 Sauditi — 20+ lingue', pt:'+1.000 Sauditas — 20+ idiomas', zh:'+1,000名沙特专业人士 — 20+种语言', ja:'+1,000人のサウジ人 — 20以上の言語', ko:'+1,000명 사우디 전문가 — 20개 이상 언어', de:'+1.000 Saudis — 20+ Weltsprachen', ru:'+1,000 саудовцев — 20+ языков'},
    btn_reset:{ar:'إعادة ضبط', en:'Reset', es:'Restablecer', fr:'Réinitialiser', it:'Reimposta', pt:'Redefinir', zh:'重置', ja:'リセット', ko:'초기화', de:'Zurücksetzen', ru:'Сбросить'},
    lbl_city:{ar:'المدينة', en:'City', es:'Ciudad', fr:'Ville', it:'Città', pt:'Cidade', zh:'城市', ja:'都市', ko:'도시', de:'Stadt', ru:'Город'},
    lbl_lang:{ar:'اللغة', en:'Language', es:'Idioma', fr:'Langue', it:'Lingua', pt:'Idioma', zh:'语言', ja:'言語', ko:'언어', de:'Sprache', ru:'Язык'},
    lbl_service:{ar:'الخدمة', en:'Service', es:'Servicio', fr:'Service', it:'Servizio', pt:'Serviço', zh:'服务', ja:'サービス', ko:'서비스', de:'Dienst', ru:'Услуга'},
    lbl_sort:{ar:'ترتيب حسب', en:'Sort by', es:'Ordenar por', fr:'Trier par', it:'Ordina per', pt:'Ordenar por', zh:'排序方式', ja:'並び替え', ko:'정렬 기준', de:'Sortieren nach', ru:'Сортировать по'},
    opt_all_langs:{ar:'كل اللغات', en:'All Languages', es:'Todos los idiomas', fr:'Toutes les langues', it:'Tutte le lingue', pt:'Todos os idiomas', zh:'所有语言', ja:'全言語', ko:'전체 언어', de:'Alle Sprachen', ru:'Все языки'},
    opt_all_svcs:{ar:'كل الخدمات', en:'All Services', es:'Todos los servicios', fr:'Tous les services', it:'Tutti i servizi', pt:'Todos os serviços', zh:'所有服务', ja:'全サービス', ko:'전체 서비스', de:'Alle Dienste', ru:'Все услуги'},
    sort_rating:{ar:'الأعلى تقييماً', en:'Top Rated', es:'Mejor valorado', fr:'Mieux noté', it:'Più apprezzato', pt:'Melhor avaliado', zh:'评分最高', ja:'評価順', ko:'높은 평점순', de:'Beste Bewertung', ru:'По рейтингу'},
    sort_price_asc:{ar:'السعر: الأقل', en:'Price: Low', es:'Precio: Bajo', fr:'Prix: Bas', it:'Prezzo: Basso', pt:'Preço: Baixo', zh:'价格: 低到高', ja:'価格: 安い順', ko:'가격: 낮은순', de:'Preis: Niedrig', ru:'Цена: низкая'},
    sort_price_desc:{ar:'السعر: الأعلى', en:'Price: High', es:'Precio: Alto', fr:'Prix: Élevé', it:'Prezzo: Alto', pt:'Preço: Alto', zh:'价格: 高到低', ja:'価格: 高い順', ko:'가격: 높은순', de:'Preis: Hoch', ru:'Цена: высокая'},
    sort_jobs:{ar:'الأكثر طلباً', en:'Most Requested', es:'Más solicitado', fr:'Plus demandé', it:'Più richiesto', pt:'Mais solicitado', zh:'最多需求', ja:'最多リクエスト', ko:'가장 많이 요청', de:'Am meisten gefragt', ru:'Самый востребованный'},
    reg_title:{ar:'سجّل كمُقدم خدمة', en:'Register as Provider', es:'Registrarse como proveedor', fr:'S`inscrire comme prestataire', it:'Registrati come fornitore', pt:'Registrar como prestador', zh:'注册为服务提供者', ja:'プロバイダーとして登録', ko:'서비스 제공자로 등록', de:'Als Anbieter registrieren', ru:'Зарегистрироваться как провайдер'},
    dash_welcome:{ar:'للوصول إلى لوحة تحكمك', en:'Access your dashboard', es:'Accede a tu panel', fr:'Accéder à votre tableau de bord', it:'Accedi al tuo pannello', pt:'Acesse seu painel', zh:'访问您的控制台', ja:'ダッシュボードにアクセス', ko:'대시보드 액세스', de:'Auf Ihr Dashboard zugreifen', ru:'Доступ к панели управления'},
    btn_login_cta:{ar:'تسجيل الدخول', en:'Sign In', es:'Iniciar sesión', fr:'Se connecter', it:'Accedi', pt:'Entrar', zh:'登录', ja:'サインイン', ko:'로그인', de:'Anmelden', ru:'Войти'},
    btn_create_acc:{ar:'إنشاء حساب', en:'Create Account', es:'Crear cuenta', fr:'Créer un compte', it:'Crea account', pt:'Criar conta', zh:'创建账户', ja:'アカウント作成', ko:'계정 만들기', de:'Konto erstellen', ru:'Создать аккаунт'},
    tab_bookings:{ar:'🗓️ حجوزاتي', en:'🗓️ My Bookings', es:'🗓️ Reservas', fr:'🗓️ Réservations', it:'🗓️ Prenotazioni', pt:'🗓️ Reservas', zh:'🗓️ 我的预订', ja:'🗓️ 予約', ko:'🗓️ 내 예약', de:'🗓️ Buchungen', ru:'🗓️ Мои бронирования'},
    tab_messages:{ar:'💬 الرسائل', en:'💬 Messages', es:'💬 Mensajes', fr:'💬 Messages', it:'💬 Messaggi', pt:'💬 Mensagens', zh:'💬 消息', ja:'💬 メッセージ', ko:'💬 메시지', de:'💬 Nachrichten', ru:'💬 Сообщения'},
    tab_reviews:{ar:'⭐ تقييمات', en:'⭐ Reviews', es:'⭐ Reseñas', fr:'⭐ Avis', it:'⭐ Recensioni', pt:'⭐ Avaliações', zh:'⭐ 评价', ja:'⭐ レビュー', ko:'⭐ 리뷰', de:'⭐ Bewertungen', ru:'⭐ Отзывы'},
    tab_settings:{ar:'⚙️ الإعدادات', en:'⚙️ Settings', es:'⚙️ Configuración', fr:'⚙️ Paramètres', it:'⚙️ Impostazioni', pt:'⚙️ Configurações', zh:'⚙️ 设置', ja:'⚙️ 設定', ko:'⚙️ 설정', de:'⚙️ Einstellungen', ru:'⚙️ Настройки'},
    btn_new_booking:{ar:'+ حجز جديد', en:'+ New Booking', es:'+ Nueva reserva', fr:'+ Nouvelle réservation', it:'+ Nuova prenotazione', pt:'+ Nova reserva', zh:'+ 新预订', ja:'+ 新規予約', ko:'+ 새 예약', de:'+ Neue Buchung', ru:'+ Новое бронирование'},
    btn_new_chat:{ar:'+ محادثة جديدة', en:'+ New Chat', es:'+ Nuevo chat', fr:'+ Nouvelle conversation', it:'+ Nuova chat', pt:'+ Novo chat', zh:'+ 新对话', ja:'+ 新しいチャット', ko:'+ 새 채팅', de:'+ Neuer Chat', ru:'+ Новый чат'},
    btn_new_rfq:{ar:'+ طلب جديد', en:'+ New Request', es:'+ Nueva solicitud', fr:'+ Nouvelle demande', it:'+ Nuova richiesta', pt:'+ Nova solicitação', zh:'+ 新请求', ja:'+ 新しいリクエスト', ko:'+ 새 요청', de:'+ Neue Anfrage', ru:'+ Новый запрос'},
    lbl_full_name:{ar:'الاسم الكامل', en:'Full Name', es:'Nombre completo', fr:'Nom complet', it:'Nome completo', pt:'Nome completo', zh:'全名', ja:'フルネーム', ko:'전체 이름', de:'Vollständiger Name', ru:'Полное имя'},
    lbl_email:{ar:'البريد الإلكتروني', en:'Email Address', es:'Correo electrónico', fr:'Adresse e-mail', it:'Indirizzo email', pt:'E-mail', zh:'电子邮件', ja:'メールアドレス', ko:'이메일 주소', de:'E-Mail-Adresse', ru:'Электронная почта'},
    lbl_nationality:{ar:'الجنسية', en:'Nationality', es:'Nacionalidad', fr:'Nationalité', it:'Nazionalità', pt:'Nacionalidade', zh:'国籍', ja:'国籍', ko:'국적', de:'Nationalität', ru:'Гражданство'},
    lbl_password:{ar:'كلمة المرور', en:'Password', es:'Contraseña', fr:'Mot de passe', it:'Password', pt:'Senha', zh:'密码', ja:'パスワード', ko:'비밀번호', de:'Passwort', ru:'Пароль'},
    btn_save:{ar:'💾 حفظ التغييرات', en:'💾 Save Changes', es:'💾 Guardar', fr:'💾 Enregistrer', it:'💾 Salva', pt:'💾 Salvar', zh:'💾 保存更改', ja:'💾 保存', ko:'💾 저장', de:'💾 Speichern', ru:'💾 Сохранить'},
    chat_empty:{ar:'لا توجد محادثات بعد', en:'No chats yet', es:'Sin chats aún', fr:'Pas encore de chats', it:'Nessuna chat', pt:'Sem chats ainda', zh:'暂无对话', ja:'まだチャットなし', ko:'아직 채팅 없음', de:'Noch keine Chats', ru:'Чатов пока нет'},
    chat_find_guide:{ar:'ابحث عن مرشد', en:'Find a Guide', es:'Buscar guía', fr:'Trouver un guide', it:'Trova una guida', pt:'Encontrar guia', zh:'寻找向导', ja:'ガイドを探す', ko:'가이드 찾기', de:'Guide finden', ru:'Найти гида'},
    chat_select:{ar:'اختر محادثة من القائمة أو ابدأ حجزاً جديداً', en:'Select a chat or start a new booking', es:'Selecciona un chat o inicia una reserva', fr:'Sélectionnez une conversation ou réservez', it:'Seleziona una chat o prenota', pt:'Selecione um chat ou faça uma reserva', zh:'选择对话或开始新预订', ja:'チャットを選択するか新規予約を開始', ko:'채팅 선택 또는 새 예약 시작', de:'Wählen Sie einen Chat oder starten Sie eine Buchung', ru:'Выберите чат или начните бронирование'},
    trip_code_title:{ar:'🔒 كود الرحلة الخاص بك', en:'🔒 Your Trip Code', es:'🔒 Tu código de viaje', fr:'🔒 Votre code de voyage', it:'🔒 Il tuo codice viaggio', pt:'🔒 Seu código de viagem', zh:'🔒 您的行程码', ja:'🔒 あなたの旅行コード', ko:'🔒 내 여행 코드', de:'🔒 Ihr Reisecode', ru:'🔒 Ваш код поездки'},
    trip_code_hint:{ar:'🔒 الكود مقفل — شاركه مع المُقدم فقط بعد وصوله إليك', en:'🔒 Code locked — share only when provider arrives', es:'🔒 Código bloqueado — comparte al llegar', fr:'🔒 Code verrouillé — partagez à l`arrivée', it:'🔒 Codice bloccato — condividi all`arrivo', pt:'🔒 Código bloqueado — compartilhe na chegada', zh:'🔒 代码已锁定 — 服务商到达后分享', ja:'🔒 コードロック中 — 到着後に共有', ko:'🔒 코드 잠김 — 도착 시 공유', de:'🔒 Code gesperrt — nur bei Ankunft teilen', ru:'🔒 Код заблокирован — поделитесь при прибытии'},
    trip_code_inst:{ar:'عند وصول المُقدم سيطلب منك هذا الكود لبدء الرحلة', en:'Provider will ask for this code when they arrive to start the trip', es:'El proveedor pedirá este código al llegar', fr:'Le prestataire demandera ce code à son arrivée', it:'Il fornitore chiederà questo codice all`arrivo', pt:'O provedor pedirá este código ao chegar', zh:'服务商到达时会要求此代码', ja:'到着時にガイドがこのコードを求めます', ko:'제공자가 도착 시 이 코드를 요청합니다', de:'Anbieter fragt bei Ankunft nach diesem Code', ru:'Провайдер попросит этот код по прибытии'},
    btn_share_code:{ar:'📤 مشاركة الكود', en:'📤 Share Code', es:'📤 Compartir código', fr:'📤 Partager le code', it:'📤 Condividi codice', pt:'📤 Compartilhar código', zh:'📤 分享代码', ja:'📤 コードを共有', ko:'📤 코드 공유', de:'📤 Code teilen', ru:'📤 Поделиться кодом'},
    btn_new_svc:{ar:'+ طلب خدمة', en:'+ Request Service', es:'+ Solicitar servicio', fr:'+ Demander un service', it:'+ Richiedi servizio', pt:'+ Solicitar serviço', zh:'+ 请求服务', ja:'+ サービスを依頼', ko:'+ 서비스 요청', de:'+ Dienst anfordern', ru:'+ Запрос услуги'},
    portal_provider:{ar:'بورتال مُقدمي الخدمة', en:'Provider Portal', es:'Portal de proveedores', fr:'Portail prestataire', it:'Portale fornitori', pt:'Portal do provedor', zh:'服务商门户', ja:'プロバイダーポータル', ko:'공급자 포털', de:'Anbieterportal', ru:'Портал провайдера'},
    trip_active:{ar:'🟢 رحلة جارية الآن', en:'🟢 Trip in Progress', es:'🟢 Viaje en curso', fr:'🟢 Voyage en cours', it:'🟢 Viaggio in corso', pt:'🟢 Viagem em andamento', zh:'🟢 行程进行中', ja:'🟢 旅行中', ko:'🟢 여행 진행 중', de:'🟢 Reise läuft', ru:'🟢 Поездка в процессе'},
    btn_end_trip:{ar:'إنهاء الرحلة ✓', en:'End Trip ✓', es:'Finalizar viaje ✓', fr:'Terminer le voyage ✓', it:'Termina viaggio ✓', pt:'Encerrar viagem ✓', zh:'结束行程 ✓', ja:'旅行を終了 ✓', ko:'여행 종료 ✓', de:'Reise beenden ✓', ru:'Завершить поездку ✓'},
    kpi_total_bk:{ar:'إجمالي الحجوزات', en:'Total Bookings', es:'Reservas totales', fr:'Réservations totales', it:'Prenotazioni totali', pt:'Total de reservas', zh:'总预订数', ja:'予約総数', ko:'총 예약', de:'Buchungen gesamt', ru:'Всего бронирований'},
    kpi_earnings:{ar:'أرباحي (ر.س)', en:'My Earnings (SAR)', es:'Mis ganancias (SAR)', fr:'Mes gains (SAR)', it:'I miei guadagni (SAR)', pt:'Meus ganhos (SAR)', zh:'我的收益 (SAR)', ja:'収益 (SAR)', ko:'내 수익 (SAR)', de:'Mein Verdienst (SAR)', ru:'Мой заработок (SAR)'},
    kpi_rating:{ar:'التقييم', en:'Rating', es:'Calificación', fr:'Évaluation', it:'Valutazione', pt:'Avaliação', zh:'评分', ja:'評価', ko:'평점', de:'Bewertung', ru:'Рейтинг'},
    kpi_pending:{ar:'حجوزات جديدة', en:'New Bookings', es:'Nuevas reservas', fr:'Nouvelles réservations', it:'Nuove prenotazioni', pt:'Novas reservas', zh:'新预订', ja:'新規予約', ko:'새 예약', de:'Neue Buchungen', ru:'Новые бронирования'},
    lbl_recent_bk:{ar:'آخر الحجوزات', en:'Recent Bookings', es:'Reservas recientes', fr:'Réservations récentes', it:'Prenotazioni recenti', pt:'Reservas recentes', zh:'最近预订', ja:'最近の予約', ko:'최근 예약', de:'Letzte Buchungen', ru:'Последние бронирования'},
    opt_all_bk:{ar:'كل الحجوزات', en:'All Bookings', es:'Todas las reservas', fr:'Toutes les réservations', it:'Tutte le prenotazioni', pt:'Todas as reservas', zh:'所有预订', ja:'全予約', ko:'전체 예약', de:'Alle Buchungen', ru:'Все бронирования'},
    opt_pending:{ar:'جديدة', en:'New', es:'Nuevo', fr:'Nouveau', it:'Nuovo', pt:'Novo', zh:'新建', ja:'新規', ko:'신규', de:'Neu', ru:'Новые'},
    opt_confirmed:{ar:'مؤكدة', en:'Confirmed', es:'Confirmado', fr:'Confirmé', it:'Confermato', pt:'Confirmado', zh:'已确认', ja:'確定', ko:'확정', de:'Bestätigt', ru:'Подтверждённые'},
    opt_active:{ar:'جارية', en:'Active', es:'Activo', fr:'Actif', it:'Attivo', pt:'Ativo', zh:'进行中', ja:'進行中', ko:'진행 중', de:'Aktiv', ru:'Активные'},
    opt_completed:{ar:'مكتملة', en:'Completed', es:'Completado', fr:'Terminé', it:'Completato', pt:'Concluído', zh:'已完成', ja:'完了', ko:'완료', de:'Abgeschlossen', ru:'Завершённые'},
    opt_cancelled:{ar:'ملغاة', en:'Cancelled', es:'Cancelado', fr:'Annulé', it:'Annullato', pt:'Cancelado', zh:'已取消', ja:'キャンセル', ko:'취소', de:'Storniert', ru:'Отменённые'},
    admin_title:{ar:'لوحة التحكم الإدارية', en:'Admin Dashboard', es:'Panel de administración', fr:'Tableau de bord admin', it:'Dashboard admin', pt:'Painel administrativo', zh:'管理控制台', ja:'管理ダッシュボード', ko:'관리자 대시보드', de:'Admin-Dashboard', ru:'Панель администратора'},
    btn_enter_admin:{ar:'دخول لوحة الإدارة', en:'Enter Admin Panel', es:'Entrar al panel', fr:'Accéder au panneau', it:'Accedi al pannello', pt:'Acessar painel', zh:'进入管理面板', ja:'管理パネルに入る', ko:'관리 패널 입장', de:'Admin-Panel betreten', ru:'Войти в панель'},
    admin_welcome:{ar:'مرحباً، الأدمن', en:'Welcome, Admin', es:'Bienvenido, Admin', fr:'Bienvenue, Admin', it:'Benvenuto, Admin', pt:'Bem-vindo, Admin', zh:'欢迎，管理员', ja:'ようこそ、管理者', ko:'환영합니다, 관리자', de:'Willkommen, Admin', ru:'Добро пожаловать, Админ'},
    partner_portal:{ar:'Partner Portal — بوابة الشركاء', en:'Partner Portal', es:'Portal de socios', fr:'Portail partenaire', it:'Portale partner', pt:'Portal de parceiros', zh:'合作伙伴门户', ja:'パートナーポータル', ko:'파트너 포털', de:'Partner-Portal', ru:'Портал партнёров'},
    kpi_commission:{ar:'نسبة عمولتك', en:'Your Commission', es:'Tu comisión', fr:'Votre commission', it:'La tua commissione', pt:'Sua comissão', zh:'您的佣金', ja:'あなたの手数料', ko:'귀하의 수수료', de:'Ihre Provision', ru:'Ваша комиссия'},
    loading:{ar:'جاري التحميل...', en:'Loading...', es:'Cargando...', fr:'Chargement...', it:'Caricamento...', pt:'Carregando...', zh:'加载中...', ja:'読み込み中...', ko:'로딩 중...', de:'Laden...', ru:'Загрузка...'},
    btn_refresh:{ar:'🔄 تحديث', en:'🔄 Refresh', es:'🔄 Actualizar', fr:'🔄 Actualiser', it:'🔄 Aggiorna', pt:'🔄 Atualizar', zh:'🔄 刷新', ja:'🔄 更新', ko:'🔄 새로고침', de:'🔄 Aktualisieren', ru:'🔄 Обновить'},
    guest_name:{ar:'اسم الضيف', en:'Guest Name', es:'Nombre del huésped', fr:'Nom du client', it:'Nome dell`ospite', pt:'Nome do hóspede', zh:'客人姓名', ja:'ゲスト名', ko:'투숙객 이름', de:'Gastname', ru:'Имя гостя'},
    partner_ref:{ar:'رقم مرجعي (اختياري)', en:'Reference Number (optional)', es:'Número de referencia (opcional)', fr:'Numéro de référence (optionnel)', it:'Numero di riferimento (opzionale)', pt:'Número de referência (opcional)', zh:'参考编号（可选）', ja:'参照番号（任意）', ko:'참조 번호 (선택 사항)', de:'Referenznummer (optional)', ru:'Справочный номер (необязательно)'},
    btn_submit_booking:{ar:'✅ إرسال الحجز عبر API', en:'✅ Submit Booking via API', es:'✅ Enviar reserva por API', fr:'✅ Soumettre la réservation', it:'✅ Invia prenotazione via API', pt:'✅ Enviar reserva por API', zh:'✅ 通过API提交预订', ja:'✅ APIで予約送信', ko:'✅ API로 예약 제출', de:'✅ Buchung per API senden', ru:'✅ Отправить бронирование через API'},
    lbl_email2:{ar:'البريد الإلكتروني', en:'Email', es:'Correo', fr:'E-mail', it:'Email', pt:'Email', zh:'邮箱', ja:'メール', ko:'이메일', de:'E-Mail', ru:'Эл. почта'},
    lbl_preferred_lang:{ar:'اللغة المفضلة', en:'Preferred Language', es:'Idioma preferido', fr:'Langue préférée', it:'Lingua preferita', pt:'Idioma preferido', zh:'首选语言', ja:'使用言語', ko:'선호 언어', de:'Bevorzugte Sprache', ru:'Предпочитаемый язык'},
    role_client:{ar:'🌍 عميل', en:'🌍 Client', es:'🌍 Cliente', fr:'🌍 Client', it:'🌍 Cliente', pt:'🌍 Cliente', zh:'🌍 客户', ja:'🌍 クライアント', ko:'🌍 고객', de:'🌍 Kunde', ru:'🌍 Клиент'},
    role_provider:{ar:'🎯 مُقدم خدمة', en:'🎯 Service Provider', es:'🎯 Proveedor', fr:'🎯 Prestataire', it:'🎯 Fornitore', pt:'🎯 Prestador', zh:'🎯 服务提供商', ja:'🎯 サービス提供者', ko:'🎯 서비스 제공자', de:'🎯 Dienstleister', ru:'🎯 Поставщик услуг'},
    err_wrong_pass:{ar:'❌ كلمة المرور غير صحيحة', en:'❌ Wrong password', es:'❌ Contraseña incorrecta', fr:'❌ Mot de passe incorrect', it:'❌ Password errata', pt:'❌ Senha incorreta', zh:'❌ 密码错误', ja:'❌ パスワードが違います', ko:'❌ 잘못된 비밀번호', de:'❌ Falsches Passwort', ru:'❌ Неверный пароль'},
    err_wrong_creds:{ar:'❌ بريد أو كلمة مرور غير صحيحة', en:'❌ Invalid email or password', es:'❌ Email o contraseña incorrectos', fr:'❌ Email ou mot de passe incorrect', it:'❌ Email o password errati', pt:'❌ Email ou senha incorretos', zh:'❌ 邮箱或密码错误', ja:'❌ メールまたはパスワードが違います', ko:'❌ 이메일 또는 비밀번호 오류', de:'❌ E-Mail oder Passwort falsch', ru:'❌ Неверный email или пароль'},
    err_api_key:{ar:'❌ API Key غير صحيح أو غير نشط', en:'❌ Invalid or inactive API Key', es:'❌ API Key no válida', fr:'❌ Clé API invalide', it:'❌ API Key non valida', pt:'❌ API Key inválida', zh:'❌ API密钥无效', ja:'❌ 無効なAPIキー', ko:'❌ 잘못된 API 키', de:'❌ Ungültiger API-Schlüssel', ru:'❌ Недействительный API ключ'},
    back_to_site:{ar:'← العودة للموقع', en:'← Back to Site', es:'← Volver al sitio', fr:'← Retour au site', it:'← Torna al sito', pt:'← Voltar ao site', zh:'← 返回网站', ja:'← サイトに戻る', ko:'← 사이트로 돌아가기', de:'← Zur Website', ru:'← Вернуться на сайт'},
    provider_label:{ar:'مُقدم خدمة', en:'Service Provider', es:'Proveedor', fr:'Prestataire', it:'Fornitore', pt:'Prestador', zh:'服务提供商', ja:'サービス提供者', ko:'서비스 제공자', de:'Dienstleister', ru:'Поставщик услуг'},
    provider_new_reg:{ar:'سجّل كمُقدم جديد', en:'Register as New Provider', es:'Registrarse como nuevo proveedor', fr:'S`inscrire comme nouveau prestataire', it:'Registrati come nuovo fornitore', pt:'Registrar como novo prestador', zh:'注册新服务提供商', ja:'新規プロバイダー登録', ko:'새 제공자로 등록', de:'Als neuer Anbieter registrieren', ru:'Зарегистрироваться как новый провайдер'},
    chat_booking_req:{ar:'طلب خدمة', en:'Service Request', es:'Solicitud de servicio', fr:'Demande de service', it:'Richiesta di servizio', pt:'Solicitação de serviço', zh:'服务请求', ja:'サービスリクエスト', ko:'서비스 요청', de:'Serviceanfrage', ru:'Запрос услуги'},
    status_waiting:{ar:'قيد الانتظار', en:'Pending', es:'Pendiente', fr:'En attente', it:'In attesa', pt:'Pendente', zh:'待处理', ja:'保留中', ko:'대기 중', de:'Ausstehend', ru:'В ожидании'},
    btn_details:{ar:'تفاصيل', en:'Details', es:'Detalles', fr:'Détails', it:'Dettagli', pt:'Detalhes', zh:'详情', ja:'詳細', ko:'상세보기', de:'Details', ru:'Детали'},
    code_unlocked_msg:{ar:'✅ أعطِ هذا الكود للمُقدم لبدء الرحلة', en:'✅ Give this code to provider to start trip', es:'✅ Da este código al proveedor', fr:'✅ Donnez ce code au prestataire', it:'✅ Dai questo codice al fornitore', pt:'✅ Dê este código ao prestador', zh:'✅ 将此代码提供给服务商', ja:'✅ このコードをガイドに渡してください', ko:'✅ 제공자에게 이 코드를 주세요', de:'✅ Code dem Anbieter geben', ru:'✅ Дайте этот код провайдеру'},
    earn_total:{ar:'إجمالي المكتسب', en:'Total Earned', es:'Total ganado', fr:'Total gagné', it:'Totale guadagnato', pt:'Total ganho', zh:'总收益', ja:'総収益', ko:'총 수입', de:'Gesamtverdienst', ru:'Всего заработано'},
    svc_guiding_s:{ar:'🗺️ مرشد', en:'🗺️ Guide', es:'🗺️ Guía', fr:'🗺️ Guide', it:'🗺️ Guida', pt:'🗺️ Guia', zh:'🗺️ 向导', ja:'🗺️ ガイド', ko:'🗺️ 가이드', de:'🗺️ Guide', ru:'🗺️ Гид'},
    svc_airport_s:{ar:'✈️ مطار', en:'✈️ Airport', es:'✈️ Aeropuerto', fr:'✈️ Aéroport', it:'✈️ Aeroporto', pt:'✈️ Aeroporto', zh:'✈️ 机场', ja:'✈️ 空港', ko:'✈️ 공항', de:'✈️ Flughafen', ru:'✈️ Аэропорт'},
    sort_label:{ar:'الترتيب', en:'Sort', es:'Ordenar', fr:'Tri', it:'Ordina', pt:'Ordenar', zh:'排序', ja:'並び替え', ko:'정렬', de:'Sortierung', ru:'Сортировка'},
    sort_cheapest:{ar:'الأرخص', en:'Cheapest', es:'Más barato', fr:'Le moins cher', it:'Più economico', pt:'Mais barato', zh:'最便宜', ja:'最安値', ko:'가장 저렴', de:'Günstigste', ru:'Дешевле'},
    sort_expensive:{ar:'الأغلى', en:'Most Expensive', es:'Más caro', fr:'Le plus cher', it:'Più costoso', pt:'Mais caro', zh:'最贵', ja:'最高値', ko:'가장 비싼', de:'Teuerste', ru:'Дороже'},
    sort_experienced:{ar:'الأكثر خبرة', en:'Most Experienced', es:'Más experimentado', fr:'Le plus expérimenté', it:'Più esperto', pt:'Mais experiente', zh:'最有经验', ja:'最も経験豊富', ko:'가장 경험 많은', de:'Erfahrenste', ru:'Наиболее опытный'},
    lbl_spec:{ar:'التخصص', en:'Specialization', es:'Especialización', fr:'Spécialisation', it:'Specializzazione', pt:'Especialização', zh:'专长', ja:'専門', ko:'전문 분야', de:'Spezialisierung', ru:'Специализация'},
    available_now:{ar:'● متاح الآن', en:'● Available Now', es:'● Disponible ahora', fr:'● Disponible maintenant', it:'● Disponibile ora', pt:'● Disponível agora', zh:'● 现在可用', ja:'● 今すぐ利用可能', ko:'● 지금 이용 가능', de:'● Jetzt verfügbar', ru:'● Доступен сейчас'},
    back_account:{ar:'← حسابي', en:'← My Account', es:'← Mi cuenta', fr:'← Mon compte', it:'← Il mio account', pt:'← Minha conta', zh:'← 我的账户', ja:'← マイページ', ko:'← 내 계정', de:'← Mein Konto', ru:'← Мой аккаунт'},
    no_chats:{ar:'لا توجد محادثات بعد', en:'No conversations yet', es:'Sin conversaciones aún', fr:'Pas encore de conversations', it:'Nessuna conversazione', pt:'Sem conversas ainda', zh:'暂无对话', ja:'まだ会話なし', ko:'아직 대화 없음', de:'Noch keine Gespräche', ru:'Пока нет разговоров'},
    total_earned:{ar:'إجمالي المكتسب', en:'Total Earned', es:'Total ganado', fr:'Total gagné', it:'Totale guadagnato', pt:'Total ganho', zh:'总收入', ja:'総収益', ko:'총 수입', de:'Gesamt verdient', ru:'Всего заработано'},
    lbl_city2:{ar:'المدينة', en:'City', es:'Ciudad', fr:'Ville', it:'Città', pt:'Cidade', zh:'城市', ja:'都市', ko:'도시', de:'Stadt', ru:'Город'},
    lbl_svc_type:{ar:'نوع الخدمة', en:'Service Type', es:'Tipo de servicio', fr:'Type de service', it:'Tipo di servizio', pt:'Tipo de serviço', zh:'服务类型', ja:'サービスタイプ', ko:'서비스 유형', de:'Dienstleistungstyp', ru:'Тип услуги'},
    lbl_lang_req:{ar:'اللغة المطلوبة', en:'Required Language', es:'Idioma requerido', fr:'Langue requise', it:'Lingua richiesta', pt:'Idioma necessário', zh:'所需语言', ja:'必要言語', ko:'필요한 언어', de:'Gewünschte Sprache', ru:'Требуемый язык'},
    admin_providers:{ar:'مُقدمو خدمة', en:'Service Providers', es:'Proveedores', fr:'Prestataires', it:'Fornitori', pt:'Prestadores', zh:'服务提供商', ja:'サービス提供者', ko:'서비스 제공자', de:'Dienstleister', ru:'Поставщики услуг'},
    admin_commission:{ar:'عمولة لانكول (ر.س)', en:'LanCul Commission (SAR)', es:'Comisión LanCul (SAR)', fr:'Commission LanCul (SAR)', it:'Commissione LanCul (SAR)', pt:'Comissão LanCul (SAR)', zh:'LanCul佣金 (SAR)', ja:'LanCul手数料 (SAR)', ko:'LanCul 수수료 (SAR)', de:'LanCul-Provision (SAR)', ru:'Комиссия LanCul (SAR)'},
    admin_chat_note:{ar:'للرجوع للمحادثات عند الحاجة — جميع المحادثات مسجلة ومحفوظة', en:'Return to chats when needed — all chats are recorded and saved', es:'Vuelve a los chats cuando sea necesario', fr:'Revenez aux chats si nécessaire', it:'Torna alle chat se necessario', pt:'Volte aos chats quando necessário', zh:'需要时返回对话', ja:'必要に応じてチャットに戻る', ko:'필요할 때 채팅으로 돌아가기', de:'Kehren Sie bei Bedarf zu Chats zurück', ru:'Вернитесь к чатам при необходимости'},
    th_client:{ar:'العميل', en:'Client', es:'Cliente', fr:'Client', it:'Cliente', pt:'Cliente', zh:'客户', ja:'クライアント', ko:'고객', de:'Kunde', ru:'Клиент'},
    reviews:{ar:'تقييم', en:'reviews', es:'reseñas', fr:'avis', it:'recensioni', pt:'avaliações', zh:'评价', ja:'レビュー', ko:'리뷰', de:'Bewertungen', ru:'отзывов'},
    profile_title:{ar:'الملف الشخصي', en:'Profile', es:'Perfil', fr:'Profil', it:'Profilo', pt:'Perfil', zh:'个人资料', ja:'プロフィール', ko:'프로필', de:'Profil', ru:'Профиль'},
    services_offered:{ar:'الخدمات المقدمة', en:'Services Offered', es:'Servicios ofrecidos', fr:'Services proposés', it:'Servizi offerti', pt:'Serviços oferecidos', zh:'提供的服务', ja:'提供サービス', ko:'제공 서비스', de:'Angebotene Dienste', ru:'Предлагаемые услуги'},
    pricing:{ar:'الأسعار', en:'Pricing', es:'Precios', fr:'Tarifs', it:'Prezzi', pt:'Preços', zh:'价格', ja:'料金', ko:'가격', de:'Preise', ru:'Цены'},
    hourly_no_car:{ar:'ساعة بدون سيارة', en:'Hourly (no car)', es:'Por hora (sin coche)', fr:'À l`heure (sans voiture)', it:'All`ora (senza auto)', pt:'Por hora (sem carro)', zh:'每小时（无车）', ja:'1時間（車なし）', ko:'시간당 (차 없음)', de:'Stündlich (ohne Auto)', ru:'В час (без авто)'},
    hourly_with_car:{ar:'ساعة مع سيارة', en:'Hourly (with car)', es:'Por hora (con coche)', fr:'À l`heure (avec voiture)', it:'All`ora (con auto)', pt:'Por hora (com carro)', zh:'每小时（含车）', ja:'1時間（車あり）', ko:'시간당 (차 포함)', de:'Stündlich (mit Auto)', ru:'В час (с авто)'},
    fullday_no_car:{ar:'يوم كامل بدون سيارة', en:'Full day (no car)', es:'Día completo (sin coche)', fr:'Journée complète (sans voiture)', it:'Giornata intera (senza auto)', pt:'Dia inteiro (sem carro)', zh:'全天（无车）', ja:'1日（車なし）', ko:'하루 종일 (차 없음)', de:'Ganzer Tag (ohne Auto)', ru:'Полный день (без авто)'},
    fullday_with_car:{ar:'يوم كامل مع سيارة', en:'Full day (with car)', es:'Día completo (con coche)', fr:'Journée complète (avec voiture)', it:'Giornata intera (con auto)', pt:'Dia inteiro (com carro)', zh:'全天（含车）', ja:'1日（車あり）', ko:'하루 종일 (차 포함)', de:'Ganzer Tag (mit Auto)', ru:'Полный день (с авто)'},
    per_hour:{ar:'للساعة', en:'per hour', es:'por hora', fr:'par heure', it:'all`ora', pt:'por hora', zh:'每小时', ja:'1時間あたり', ko:'시간당', de:'pro Stunde', ru:'в час'},
    sar:{ar:'ر.س', en:'SAR', es:'SAR', fr:'SAR', it:'SAR', pt:'SAR', zh:'SAR', ja:'SAR', ko:'SAR', de:'SAR', ru:'SAR'},
    verified_guide:{ar:'مرشد موثّق', en:'Verified Guide', es:'Guía verificado', fr:'Guide vérifié', it:'Guida verificata', pt:'Guia verificado', zh:'认证向导', ja:'認定ガイド', ko:'인증된 가이드', de:'Verifizierter Guide', ru:'Проверенный гид'},
    specializations:{ar:'التخصصات', en:'Specializations', es:'Especializaciones', fr:'Spécialisations', it:'Specializzazioni', pt:'Especializações', zh:'专业领域', ja:'専門分野', ko:'전문 분야', de:'Spezialisierungen', ru:'Специализации'},
    languages_spoken:{ar:'اللغات', en:'Languages', es:'Idiomas', fr:'Langues', it:'Lingue', pt:'Idiomas', zh:'语言', ja:'言語', ko:'언어', de:'Sprachen', ru:'Языки'},
    no_results:{ar:'لا توجد نتائج تطابق فلاتر البحث', en:'No results match your filters', es:'No hay resultados para tus filtros', fr:'Aucun résultat ne correspond à vos filtres', it:'Nessun risultato per i tuoi filtri', pt:'Nenhum resultado para seus filtros', zh:'没有符合筛选条件的结果', ja:'フィルターに一致する結果なし', ko:'필터에 맞는 결과 없음', de:'Keine Ergebnisse für Ihre Filter', ru:'Нет результатов по фильтрам'},
    per_person:{ar:'للشخص', en:'per person', es:'por persona', fr:'par personne', it:'a persona', pt:'por pessoa', zh:'每人', ja:'一人当たり', ko:'인당', de:'pro Person', ru:'на человека'},
    persons:{ar:'أشخاص', en:'pax', es:'pers.', fr:'pers.', it:'pers.', pt:'pes.', zh:'人', ja:'名', ko:'명', de:'Pers.', ru:'чел.'},

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
var currentLang = localStorage.getItem('lancul_lang') || 'en';

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
  setLang(localStorage.getItem('lancul_lang') || 'en');
});
