# Shri Swami Travels

A production-oriented travel booking platform for Shri Swami Travels, built with Next.js, TypeScript, Tailwind CSS, Supabase, and Razorpay.

## Status

Milestones 1 and 2 are complete: project foundation plus the responsive public website shell. Tour pages use clearly identified reference information; live inventory, bookings, payments, and administration are not implemented yet.

The database foundation is also prepared as an unapplied Supabase migration. A Supabase project, verified business data, and administrator identities are still required before enabling authenticated or transactional features.

## Local setup

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open `http://localhost:3000`. Keep `.env.local` private; it is ignored by Git.

## Commands

```bash
npm run dev
npm run lint
npm run test
npm run build
```

## Documentation

- [Architecture](docs/architecture.md)
- [Database plan](docs/database.md)
- [Payment integration plan](docs/payment-integration.md)
- [Testing](docs/testing.md)
- [Deployment](docs/deployment.md)
- [Troubleshooting](docs/troubleshooting.md)

## Security

Never commit `.env.local`, Supabase service-role keys, Razorpay secret keys, or customer exports. Payment amounts and booking confirmation will be determined and verified on the server in later milestones.
