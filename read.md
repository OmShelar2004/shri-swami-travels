# Shri Swami Travels — Project Overview

This repository contains the in-progress website and booking-platform foundation for **Shri Swami Travels**, an Indian travel operator offering domestic packages, pilgrimages, sightseeing, and vehicle rentals.

## Current implementation

- Responsive public website built with Next.js, TypeScript, and Tailwind CSS.
- Public pages for tours, destinations, fleet, contact, FAQ, policies, and future booking/payment states.
- Mobile navigation, active navigation states, accessible link labels, and a navy/gold visual system.
- Clearly labelled reference content only; no unverified prices, dates, availability, reviews, or payment confirmations.
- Supabase PostgreSQL migration containing packages, departures, vehicles, bookings, payments, refunds, enquiries, roles, indexes, and Row Level Security policies.
- Server-safe Supabase client boundaries and Zod validation for future booking requests.

## Running locally

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality checks

```bash
npm run lint
npm run test
npm run build
```

## Important limitations

The Supabase migration has not been applied to a live project. Online bookings, administrator authentication, Razorpay payments, live capacity, and production package data are intentionally not enabled until verified business information and credentials are supplied.

See [README.md](README.md) and the [`docs/`](docs) directory for setup, architecture, database, payment, testing, deployment, and troubleshooting information.
