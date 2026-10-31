# Database schema and security

The initial schema lives in `supabase/migrations/20261031210000_initial_booking_platform.sql`. It is version-controlled but has not been applied to a Supabase project.

## Core relationships

```text
tour_packages ──< package_images
tour_packages ──< departures ──< bookings ──< booking_travellers
                                    └──< payments ──< refunds
profiles ──< bookings
vehicles ──< vehicle_rental_enquiries
tour_packages ──< customer_enquiries
```

All monetary values are stored as integer paise. Package-level descriptive information is separate from dated departure capacity and pricing. A booking contains a server-calculated total and an idempotency key; payment status is stored separately from booking status.

## Capacity and booking safety

The schema constrains `reserved_seats` to be non-negative and no greater than departure capacity. The upcoming booking service will use a PostgreSQL transaction or RPC to atomically lock a departure, remove expired holds, verify capacity, calculate trusted pricing, and create a pending booking.

Browser-submitted totals and confirmation claims will never be accepted.

## Row Level Security

RLS is enabled for every table. Public visitors may only read published packages, visible images, bookable departures, and active vehicles. They may create enquiries, but cannot read enquiry or booking data.

Authenticated customers may read only their own bookings, travellers, and payments. Administrators are identified by `profiles.role = 'ADMIN'`; dashboard operations will be routed through server-side authorization rather than granted broad browser write access.

The Supabase service-role client is for server-only payment processing and privileged operations. It must never be imported into a Client Component or exposed through a `NEXT_PUBLIC_` variable.

## Applying the migration

After a Supabase project is created and linked, review the migration with the business owner and apply it using the Supabase CLI or the Supabase SQL editor. Seed only verified package, vehicle, pricing, departure, and policy data.
