-- Shri Swami Travels initial schema. Apply with the Supabase CLI after creating
-- the project; this migration is intentionally not applied by the application.

create extension if not exists "pgcrypto";

create type public.user_role as enum ('CUSTOMER', 'ADMIN');
create type public.booking_status as enum (
  'PENDING_PAYMENT', 'CONFIRMED', 'PAYMENT_FAILED', 'CANCELLED', 'REFUND_PENDING', 'REFUNDED'
);
create type public.payment_status as enum ('CREATED', 'PENDING', 'CAPTURED', 'FAILED', 'REFUNDED');
create type public.payment_provider as enum ('RAZORPAY');
create type public.enquiry_status as enum ('NEW', 'IN_PROGRESS', 'CLOSED');

create function public.set_updated_at()
returns trigger
language plpgsql
set search_path = public
as $$
begin
  new.updated_at = timezone('utc', now());
  return new;
end;
$$;

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  role public.user_role not null default 'CUSTOMER',
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table public.tour_packages (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique check (slug ~ '^[a-z0-9]+(?:-[a-z0-9]+)*$'),
  title text not null check (char_length(title) between 2 and 160),
  destination text not null check (char_length(destination) between 2 and 160),
  summary text not null check (char_length(summary) between 2 and 500),
  description text,
  duration_days smallint check (duration_days is null or duration_days > 0),
  duration_nights smallint check (duration_nights is null or duration_nights >= 0),
  price_from_paise integer check (price_from_paise is null or price_from_paise >= 0),
  itinerary jsonb not null default '[]'::jsonb check (jsonb_typeof(itinerary) = 'array'),
  inclusions jsonb not null default '[]'::jsonb check (jsonb_typeof(inclusions) = 'array'),
  exclusions jsonb not null default '[]'::jsonb check (jsonb_typeof(exclusions) = 'array'),
  travel_information text,
  cancellation_information text,
  is_published boolean not null default false,
  archived_at timestamptz,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table public.package_images (
  id uuid primary key default gen_random_uuid(),
  package_id uuid not null references public.tour_packages(id) on delete cascade,
  storage_path text not null unique,
  alt_text text,
  sort_order smallint not null default 0 check (sort_order >= 0),
  created_at timestamptz not null default timezone('utc', now())
);

create table public.departures (
  id uuid primary key default gen_random_uuid(),
  package_id uuid not null references public.tour_packages(id) on delete restrict,
  departure_at timestamptz not null,
  return_at timestamptz,
  capacity integer not null check (capacity > 0),
  reserved_seats integer not null default 0 check (reserved_seats >= 0),
  hold_expires_at timestamptz,
  adult_price_paise integer not null check (adult_price_paise >= 0),
  child_price_paise integer check (child_price_paise is null or child_price_paise >= 0),
  pickup_information text,
  is_bookable boolean not null default false,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now()),
  constraint departure_dates_are_ordered check (return_at is null or return_at > departure_at),
  constraint departure_reserved_seats_within_capacity check (reserved_seats <= capacity)
);

create table public.vehicles (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  category text not null,
  seating_capacity smallint check (seating_capacity is null or seating_capacity > 0),
  air_conditioned boolean,
  facilities jsonb not null default '[]'::jsonb check (jsonb_typeof(facilities) = 'array'),
  image_path text,
  is_active boolean not null default true,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table public.bookings (
  id uuid primary key default gen_random_uuid(),
  booking_code text not null unique check (booking_code ~ '^SST-[A-Z0-9]{8}$'),
  customer_id uuid references public.profiles(id) on delete set null,
  departure_id uuid not null references public.departures(id) on delete restrict,
  status public.booking_status not null default 'PENDING_PAYMENT',
  full_name text not null check (char_length(full_name) between 2 and 160),
  email text not null check (char_length(email) between 3 and 320),
  mobile_number text not null check (mobile_number ~ '^[0-9+ -]{7,24}$'),
  adults smallint not null check (adults > 0),
  children smallint not null default 0 check (children >= 0),
  pickup_location text,
  special_requirements text,
  total_amount_paise integer not null check (total_amount_paise >= 0),
  hold_expires_at timestamptz,
  confirmed_at timestamptz,
  cancelled_at timestamptz,
  idempotency_key uuid not null unique,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table public.booking_travellers (
  id uuid primary key default gen_random_uuid(),
  booking_id uuid not null references public.bookings(id) on delete cascade,
  traveller_type text not null check (traveller_type in ('ADULT', 'CHILD')),
  full_name text not null check (char_length(full_name) between 2 and 160),
  age smallint check (age is null or age between 0 and 120),
  created_at timestamptz not null default timezone('utc', now())
);

create table public.payments (
  id uuid primary key default gen_random_uuid(),
  booking_id uuid not null references public.bookings(id) on delete restrict,
  provider public.payment_provider not null default 'RAZORPAY',
  provider_order_id text not null unique,
  provider_payment_id text unique,
  status public.payment_status not null default 'CREATED',
  amount_paise integer not null check (amount_paise >= 0),
  currency char(3) not null default 'INR' check (currency = 'INR'),
  provider_payload jsonb,
  captured_at timestamptz,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table public.refunds (
  id uuid primary key default gen_random_uuid(),
  payment_id uuid not null references public.payments(id) on delete restrict,
  provider_refund_id text unique,
  amount_paise integer not null check (amount_paise > 0),
  status public.payment_status not null default 'PENDING',
  reason text,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table public.vehicle_rental_enquiries (
  id uuid primary key default gen_random_uuid(),
  vehicle_id uuid references public.vehicles(id) on delete set null,
  full_name text not null check (char_length(full_name) between 2 and 160),
  email text check (email is null or char_length(email) <= 320),
  mobile_number text not null check (mobile_number ~ '^[0-9+ -]{7,24}$'),
  pickup_location text not null,
  destination text not null,
  travel_date date not null,
  passenger_count smallint not null check (passenger_count > 0),
  requirements text,
  status public.enquiry_status not null default 'NEW',
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table public.customer_enquiries (
  id uuid primary key default gen_random_uuid(),
  package_id uuid references public.tour_packages(id) on delete set null,
  full_name text not null check (char_length(full_name) between 2 and 160),
  email text check (email is null or char_length(email) <= 320),
  mobile_number text not null check (mobile_number ~ '^[0-9+ -]{7,24}$'),
  message text not null check (char_length(message) between 1 and 4000),
  status public.enquiry_status not null default 'NEW',
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table public.admin_activity_logs (
  id bigint generated always as identity primary key,
  actor_id uuid references public.profiles(id) on delete set null,
  action text not null,
  entity_type text not null,
  entity_id uuid,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default timezone('utc', now())
);

create index departures_package_departure_at_idx on public.departures (package_id, departure_at);
create index bookings_departure_status_idx on public.bookings (departure_id, status);
create index bookings_customer_created_at_idx on public.bookings (customer_id, created_at desc);
create index payments_booking_created_at_idx on public.payments (booking_id, created_at desc);
create index customer_enquiries_status_created_at_idx on public.customer_enquiries (status, created_at desc);
create index vehicle_enquiries_status_created_at_idx on public.vehicle_rental_enquiries (status, created_at desc);

create function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$ select exists (select 1 from public.profiles where id = auth.uid() and role = 'ADMIN'); $$;

alter table public.profiles enable row level security;
alter table public.tour_packages enable row level security;
alter table public.package_images enable row level security;
alter table public.departures enable row level security;
alter table public.vehicles enable row level security;
alter table public.bookings enable row level security;
alter table public.booking_travellers enable row level security;
alter table public.payments enable row level security;
alter table public.refunds enable row level security;
alter table public.vehicle_rental_enquiries enable row level security;
alter table public.customer_enquiries enable row level security;
alter table public.admin_activity_logs enable row level security;

create policy "profiles are visible to their owner or administrators" on public.profiles for select using (id = auth.uid() or public.is_admin());
create policy "published packages are public" on public.tour_packages for select using ((is_published and archived_at is null) or public.is_admin());
create policy "published package images are public" on public.package_images for select using (exists (select 1 from public.tour_packages p where p.id = package_id and p.is_published and p.archived_at is null) or public.is_admin());
create policy "bookable departures are public" on public.departures for select using ((is_bookable and exists (select 1 from public.tour_packages p where p.id = package_id and p.is_published and p.archived_at is null)) or public.is_admin());
create policy "active vehicles are public" on public.vehicles for select using (is_active or public.is_admin());
create policy "customers can read their bookings" on public.bookings for select using (customer_id = auth.uid() or public.is_admin());
create policy "customers can read their travellers" on public.booking_travellers for select using (exists (select 1 from public.bookings b where b.id = booking_id and (b.customer_id = auth.uid() or public.is_admin())));
create policy "customers can read their payments" on public.payments for select using (exists (select 1 from public.bookings b where b.id = booking_id and (b.customer_id = auth.uid() or public.is_admin())));
create policy "administrators can read refunds" on public.refunds for select using (public.is_admin());
create policy "public can create vehicle enquiries" on public.vehicle_rental_enquiries for insert with check (status = 'NEW');
create policy "administrators can read vehicle enquiries" on public.vehicle_rental_enquiries for select using (public.is_admin());
create policy "public can create customer enquiries" on public.customer_enquiries for insert with check (status = 'NEW');
create policy "administrators can read customer enquiries" on public.customer_enquiries for select using (public.is_admin());
create policy "administrators can read activity logs" on public.admin_activity_logs for select using (public.is_admin());

create trigger profiles_updated_at before update on public.profiles for each row execute function public.set_updated_at();
create trigger tour_packages_updated_at before update on public.tour_packages for each row execute function public.set_updated_at();
create trigger departures_updated_at before update on public.departures for each row execute function public.set_updated_at();
create trigger vehicles_updated_at before update on public.vehicles for each row execute function public.set_updated_at();
create trigger bookings_updated_at before update on public.bookings for each row execute function public.set_updated_at();
create trigger payments_updated_at before update on public.payments for each row execute function public.set_updated_at();
create trigger refunds_updated_at before update on public.refunds for each row execute function public.set_updated_at();
create trigger vehicle_enquiries_updated_at before update on public.vehicle_rental_enquiries for each row execute function public.set_updated_at();
create trigger customer_enquiries_updated_at before update on public.customer_enquiries for each row execute function public.set_updated_at();
