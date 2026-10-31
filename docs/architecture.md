# Architecture

Shri Swami Travels is a Next.js App Router application written in TypeScript.

## Boundaries

- `src/app`: routes, layouts, route handlers, and server actions.
- `src/components`: reusable presentation components.
- `src/features`: business-focused UI and application logic.
- `src/services`: server-side use cases and external integrations.
- `src/lib`: shared infrastructure helpers such as Supabase clients and validation.
- `src/config`: non-secret application configuration.
- `supabase/migrations`: version-controlled PostgreSQL schema changes.

Supabase PostgreSQL will be the source of truth for packages, departures, bookings, payments, and vehicles. Browser access will use Supabase Auth and Row Level Security. Privileged operations will run on the server only.

`src/lib/supabase/browser.ts` is the browser-safe Supabase client. `src/lib/supabase/server.ts` creates a cookie-aware server client. `src/lib/supabase/admin.ts` uses the service-role key and is strictly for server-only use.

Razorpay order creation, signature verification, webhook verification, and payment reconciliation will be server-side responsibilities. The browser will never set a booking amount or confirmation status.

## Booking safety principles

- Money is stored as integer paise.
- A database transaction will reserve capacity and create a pending booking together.
- Seat holds will have an expiry timestamp.
- Payment callbacks and webhooks will be idempotent.
- Confirmation happens only after verified payment evidence.
