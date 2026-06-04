-- ============================================
-- LanCul Platform — Supabase Schema
-- Run this in Supabase SQL Editor
-- ============================================

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- ============================================
-- PROFILES (extends Supabase auth.users)
-- ============================================
create table if not exists profiles (
  id uuid references auth.users(id) on delete cascade primary key,
  name text not null,
  email text,
  role text not null default 'client', -- 'client' | 'provider' | 'admin'
  nationality text,
  phone text,
  avatar_url text,
  preferred_lang text default 'ar',
  created_at timestamptz default now()
);

alter table profiles enable row level security;

create policy "Public profiles are viewable" on profiles
  for select using (true);

create policy "Users can update own profile" on profiles
  for update using (auth.uid() = id);

create policy "Users can insert own profile" on profiles
  for insert with check (auth.uid() = id);

-- Auto-create profile on signup
create or replace function handle_new_user()
returns trigger as $$
begin
  insert into profiles (id, name, email, role)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'name', split_part(new.email, '@', 1)),
    new.email,
    coalesce(new.raw_user_meta_data->>'role', 'client')
  );
  return new;
end;
$$ language plpgsql security definer;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure handle_new_user();

-- ============================================
-- PROVIDERS
-- ============================================
create table if not exists providers (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references profiles(id) on delete cascade,
  name text not null,
  name_en text,
  city text not null,
  bio text,
  languages text[] not null default '{}',
  specializations text[] default '{}',
  offers text[] default '{}',         -- guiding, translation, airport, experience
  -- Pricing (4 tiers)
  price_hourly_no_car integer not null default 120,
  price_hourly_with_car integer not null default 160,
  price_fullday_no_car integer not null default 650,
  price_fullday_with_car integer not null default 800,
  -- Stats
  rating numeric(3,2) default 5.0,
  reviews_count integer default 0,
  jobs_count integer default 0,
  -- Status
  verified boolean default false,
  status text default 'pending',      -- 'pending' | 'active' | 'suspended'
  created_at timestamptz default now()
);

alter table providers enable row level security;

create policy "Providers are publicly viewable" on providers
  for select using (status = 'active');

create policy "Admins can do everything on providers" on providers
  using (exists (select 1 from profiles where id = auth.uid() and role = 'admin'));

create policy "Providers can update own record" on providers
  for update using (user_id = auth.uid());

-- Insert seed data (mock providers)
insert into providers (id, name, name_en, city, bio, languages, specializations, offers, price_hourly_no_car, price_hourly_with_car, price_fullday_no_car, price_fullday_with_car, rating, reviews_count, jobs_count, verified, status)
values
  ('00000000-0000-0000-0000-000000000001', 'م. سليمان الخطيب', 'Eng. Sulaiman Alkhateeb', 'الرياض', 'مهندس نانو تكنولوجي، خبرة 12 عاماً في مرافقة الوفود الدولية', ARRAY['اليابانية','البرتغالية','الإنجليزية'], ARRAY['تقنية نانو','طاقة متجددة','علوم'], ARRAY['guiding','translation','experience'], 120, 160, 650, 800, 4.9, 47, 63, true, 'active'),
  ('00000000-0000-0000-0000-000000000002', 'أ. فهد الهويمل', 'Fahad AlHuwaimel', 'الرياض', 'متخصص لغة صينية، خبرة مع الوفود التجارية الصينية', ARRAY['الصينية (الماندرين)','الإنجليزية'], ARRAY['ثقافة','أعمال','دبلوماسية'], ARRAY['guiding','translation'], 100, 140, 550, 680, 4.8, 31, 44, true, 'active'),
  ('00000000-0000-0000-0000-000000000003', 'م. خديجة كنانة', 'Khadija Kinana', 'جدة', 'ماجستير هندسة حيوية من اليابان، خبرة في المؤتمرات الطبية', ARRAY['اليابانية','الفرنسية','الإنجليزية'], ARRAY['هندسة حيوية','طب','علوم'], ARRAY['translation','guiding'], 110, 150, 600, 720, 4.7, 28, 35, true, 'active'),
  ('00000000-0000-0000-0000-000000000004', 'أ. وليد التويجري', 'Walid AlTuwaijri', 'الدمام', 'إدارة أعمال من اليابان، خبرة في الوفود التجارية', ARRAY['اليابانية','الإنجليزية'], ARRAY['أغذية','أعمال'], ARRAY['guiding','translation','airport'], 90, 130, 500, 620, 4.6, 19, 22, false, 'active'),
  ('00000000-0000-0000-0000-000000000005', 'د. حسين آل سالم', 'Dr. Hussain AlSaalem', 'الرياض', 'دكتوراه نظم معلومات من اليابان، متخصص براءات الاختراع', ARRAY['اليابانية','الإنجليزية'], ARRAY['تقنية معلومات','براءات اختراع'], ARRAY['translation','guiding','experience'], 140, 180, 750, 900, 4.9, 52, 71, true, 'active'),
  ('00000000-0000-0000-0000-000000000006', 'ريم العنزي', 'Reem AlAnazi', 'مكة المكرمة', 'متخصصة مرافقة الحجاج والمعتمرين الجنوب آسيويين', ARRAY['الإندونيسية','الماليزية','الإنجليزية'], ARRAY['إرشاد ديني','حج وعمرة'], ARRAY['guiding','airport','experience'], 80, 110, 450, 560, 5.0, 89, 120, true, 'active')
on conflict (id) do nothing;

-- ============================================
-- BOOKINGS
-- ============================================
create table if not exists bookings (
  id uuid default uuid_generate_v4() primary key,
  client_id uuid references profiles(id) on delete cascade,
  provider_id uuid references providers(id) on delete cascade,
  -- Booking details
  service text not null,              -- guiding, translation, airport, experience
  date date not null,
  time_from text,
  hours numeric(4,1) not null default 2,
  with_car boolean default false,
  city text,
  notes text,
  -- Pricing
  total integer not null,
  commission_pct integer default 15,
  commission_amount integer,
  provider_amount integer,
  -- Trip code system
  trip_code text,
  code_unlocked boolean default false,
  -- Status
  status text default 'pending',      -- pending | confirmed | active | completed | cancelled
  arrival_time timestamptz,
  trip_started_at timestamptz,
  trip_ended_at timestamptz,
  -- Meta
  client_name text,
  provider_name text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table bookings enable row level security;

create policy "Clients can view own bookings" on bookings
  for select using (client_id = auth.uid());

create policy "Clients can create bookings" on bookings
  for insert with check (client_id = auth.uid());

create policy "Admins can view all bookings" on bookings
  for select using (exists (select 1 from profiles where id = auth.uid() and role = 'admin'));

create policy "Admins can update all bookings" on bookings
  for update using (exists (select 1 from profiles where id = auth.uid() and role = 'admin'));

-- Auto-calc commission
create or replace function calc_commission()
returns trigger as $$
begin
  new.commission_amount = round(new.total * new.commission_pct / 100.0);
  new.provider_amount = new.total - new.commission_amount;
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists on_booking_change on bookings;
create trigger on_booking_change
  before insert or update on bookings
  for each row execute procedure calc_commission();

-- ============================================
-- CHATS
-- ============================================
create table if not exists chats (
  id uuid default uuid_generate_v4() primary key,
  client_id uuid references profiles(id) on delete cascade,
  provider_id uuid references providers(id) on delete cascade,
  booking_id uuid references bookings(id) on delete set null,
  status text default 'open',         -- open | closed
  created_at timestamptz default now(),
  unique(client_id, provider_id)
);

alter table chats enable row level security;

create policy "Chat participants can view" on chats
  for select using (client_id = auth.uid());

create policy "Clients can create chats" on chats
  for insert with check (client_id = auth.uid());

create policy "Admins can view all chats" on chats
  for select using (exists (select 1 from profiles where id = auth.uid() and role = 'admin'));

-- ============================================
-- MESSAGES
-- ============================================
create table if not exists messages (
  id uuid default uuid_generate_v4() primary key,
  chat_id uuid references chats(id) on delete cascade,
  sender_id uuid references profiles(id) on delete cascade,
  text text,
  type text default 'text',           -- text | image | booking | system
  metadata jsonb,                     -- booking card data, image url, etc
  read_at timestamptz,
  created_at timestamptz default now()
);

alter table messages enable row level security;

create policy "Chat participants can view messages" on messages
  for select using (
    exists (
      select 1 from chats
      where chats.id = chat_id
      and (chats.client_id = auth.uid())
    )
  );

create policy "Chat participants can send messages" on messages
  for insert with check (sender_id = auth.uid());

create policy "Admins can view all messages" on messages
  for select using (exists (select 1 from profiles where id = auth.uid() and role = 'admin'));

-- Enable Realtime for messages
alter publication supabase_realtime add table messages;
alter publication supabase_realtime add table bookings;

-- ============================================
-- RFQ (Request for Quotation — B2B)
-- ============================================
create table if not exists rfqs (
  id uuid default uuid_generate_v4() primary key,
  company text not null,
  event_type text,
  event_date date,
  city text,
  langs text,
  persons integer,
  duration_days integer,
  budget integer,
  description text,
  contact_name text,
  contact_email text not null,
  contact_phone text,
  status text default 'new',          -- new | active | quoted | closed
  selected_provider text,
  provider_rate integer,
  admin_margin integer,
  final_price integer,
  quoted_at timestamptz,
  created_at timestamptz default now()
);

alter table rfqs enable row level security;

create policy "RFQs are publicly insertable" on rfqs
  for insert with check (true);

create policy "Admins can view and manage RFQs" on rfqs
  using (exists (select 1 from profiles where id = auth.uid() and role = 'admin'));

-- ============================================
-- RFQ BIDS
-- ============================================
create table if not exists rfq_bids (
  id uuid default uuid_generate_v4() primary key,
  rfq_id uuid references rfqs(id) on delete cascade,
  provider_id uuid references providers(id) on delete cascade,
  provider_name text,
  rate integer not null,
  description text,
  created_at timestamptz default now()
);

alter table rfq_bids enable row level security;

create policy "Providers can submit bids" on rfq_bids
  for insert with check (true);

create policy "Admins can view all bids" on rfq_bids
  using (exists (select 1 from profiles where id = auth.uid() and role = 'admin'));

-- ============================================
-- MARKETPLACE
-- ============================================
create table if not exists marketplace (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  name_en text,
  category text,                      -- restaurant | cafe | activity
  city text,
  description text,
  emoji text,
  langs text[],
  featured boolean default false,
  active boolean default true,
  created_at timestamptz default now()
);

alter table marketplace enable row level security;
create policy "Marketplace is public" on marketplace for select using (active = true);

insert into marketplace (name, name_en, category, city, description, emoji, langs, featured)
values
  ('مطعم نجد القديم', 'Old Najd Restaurant', 'restaurant', 'الرياض', 'أكلات نجدية أصيلة', '🍽️', ARRAY['EN','JA','ZH'], true),
  ('مقهى الرياض الأصيل', 'Authentic Riyadh Cafe', 'cafe', 'الرياض', 'قهوة عربية وأجواء هادئة', '☕', ARRAY['EN','FR'], false),
  ('تجربة الرماية التقليدية', 'Traditional Archery', 'activity', 'الرياض', 'تعلم فن الرماية بالقوس', '🏹', ARRAY['EN','JA'], true),
  ('ملحمة الشاوية', 'Al-Shawiya Grill', 'restaurant', 'جدة', 'أشهى لحوم الضأن والإبل', '🥩', ARRAY['EN'], false)
on conflict do nothing;

-- ============================================
-- EXPERIENCES
-- ============================================
create table if not exists experiences (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  title_en text,
  city text,
  category text,
  hours numeric(4,1),
  price_per_person integer,
  max_participants integer,
  emoji text,
  gradient text,
  active boolean default true,
  created_at timestamptz default now()
);

alter table experiences enable row level security;
create policy "Experiences are public" on experiences for select using (active = true);

insert into experiences (title, title_en, city, category, hours, price_per_person, max_participants, emoji, gradient)
values
  ('حضور زفاف سعودي أصيل', 'Authentic Saudi Wedding', 'الرياض', 'ثقافي', 4, 350, 6, '💍', 'linear-gradient(135deg,#2c1810,#8b4513)'),
  ('جلسة صيد الصقور', 'Falconry Experience', 'الرياض', 'تراث', 3, 280, 8, '🦅', 'linear-gradient(135deg,#1a2a4a,#2d4a7a)'),
  ('طهي الكبسة مع عائلة سعودية', 'Cook Kabsa with a Family', 'جدة', 'طعام', 2.5, 200, 10, '🍲', 'linear-gradient(135deg,#3d1a00,#8b4500)'),
  ('رحلة الدرعية التاريخية', 'Diriyah Night Tour', 'الرياض', 'تاريخي', 3, 180, 12, '🏰', 'linear-gradient(135deg,#1a1a2e,#16213e)'),
  ('تجربة القهوة العربية', 'Arabic Coffee & Dates', 'العُلا', 'ثقافي', 1.5, 120, 15, '☕', 'linear-gradient(135deg,#2e1a0e,#6b3a2a)'),
  ('زيارة منزل سعودي تقليدي', 'Traditional Saudi Home Visit', 'أبها', 'ثقافي', 2, 160, 8, '🏡', 'linear-gradient(135deg,#0d2e1a,#1a5e3a)')
on conflict do nothing;

-- ============================================
-- REVIEWS
-- ============================================
create table if not exists reviews (
  id uuid default uuid_generate_v4() primary key,
  booking_id uuid references bookings(id) on delete cascade,
  client_id uuid references profiles(id) on delete cascade,
  provider_id uuid references providers(id) on delete cascade,
  rating integer not null check (rating between 1 and 5),
  comment text,
  created_at timestamptz default now()
);

alter table reviews enable row level security;
create policy "Reviews are public" on reviews for select using (true);
create policy "Clients can create reviews" on reviews for insert with check (client_id = auth.uid());

-- Auto-update provider rating
create or replace function update_provider_rating()
returns trigger as $$
begin
  update providers
  set
    rating = (select round(avg(rating)::numeric, 2) from reviews where provider_id = new.provider_id),
    reviews_count = (select count(*) from reviews where provider_id = new.provider_id)
  where id = new.provider_id;
  return new;
end;
$$ language plpgsql;

drop trigger if exists on_review_created on reviews;
create trigger on_review_created
  after insert on reviews
  for each row execute procedure update_provider_rating();

-- ============================================
-- USEFUL VIEWS
-- ============================================

-- Admin dashboard summary
create or replace view admin_summary as
select
  (select count(*) from providers where status = 'active') as active_providers,
  (select count(*) from bookings) as total_bookings,
  (select count(*) from bookings where status = 'pending') as pending_bookings,
  (select coalesce(sum(total),0) from bookings) as total_revenue,
  (select coalesce(sum(commission_amount),0) from bookings) as total_commission,
  (select count(*) from rfqs where status = 'new') as new_rfqs,
  (select count(*) from profiles where role = 'client') as total_clients;

-- Bookings with full details
create or replace view bookings_full as
select
  b.*,
  p.name as profile_name,
  p.email as profile_email,
  pr.name as provider_full_name,
  pr.city as provider_city,
  pr.languages as provider_languages
from bookings b
left join profiles p on p.id = b.client_id
left join providers pr on pr.id = b.provider_id;
