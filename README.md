Shri Swami Travels
A modern, mobile-friendly travel and tour booking platform for Shri
Swami Travels, a Maharashtra-based travel business. The planned
platform will help customers explore tour packages, enquire about
vehicle rentals, request bookings and, once the payment workflow is
implemented and verified, pay online.
Project status: Initial planning / development in progress. This
README describes the intended product and architecture. Update the
implementation, setup and testing sections as features are added and
verified.

Table of Contents
- Project Overview
- Business and Services
- Planned Website Features
- Planned Technology Stack
- Architecture Principles
- Booking and Payment Workflow
- Security Requirements
- Getting Started
- Environment Configuration
- Testing and Quality
- Development Workflow
- Business Information to Confirm
- Project Roadmap
- Contact
Project Overview
Shri Swami Travels provides domestic tour packages, pilgrimage trips,
sightseeing and passenger transportation services. This project aims to
create a professional online presence where visitors can:
- Discover destinations and tour packages.
- Review itineraries, inclusions, exclusions and trip details.
- Explore available vehicle categories and request a rental quotation.
- Select a departure and submit a booking.
- Complete an online payment when the production payment integration
  is enabled.
- Access booking and payment information through an authenticated
  customer account, if customer accounts are enabled.
The business owner will have a protected administration area to manage
packages, departure schedules, vehicle information, bookings and payment
records.

The website should be designed for mobile-first use, clear navigation,
accessibility, search-engine discoverability and maintainability by
future developers.
Business and Services
Tour packages and destinations
The following destinations and package categories have been supplied by
the business:
1. Daily Tour Package
2. Mahabaleshwar
3. Goa
4. Shimla--Kullu--Manali
5. Exotic Kashmir
6. Kerala
7. Ashtavinayak Darshan
8. Mumbai Darshan
9. Tirupati Balaji Darshan
Promotional material for some packages mentions the following details.
These are reference information only and must be confirmed with the
business before being published as current offers:
- Mahabaleshwar: A promotional package describes a two-night stay
  with breakfast, lunch and dinner, sightseeing by tourist taxi,
  Mahabaleshwar Darshan and Panchgani Darshan. Places shown include
  Arthur's Seat, Lingmala Waterfall, Venna Lake, Strawberry Farm and
  Panchgani viewpoints.
- Exotic Kashmir: A promotional poster describes a five-night
  package featuring Srinagar, Gulmarg, Pahalgam, Dal Lake and Shalimar
  Bagh. It mentions sightseeing, accommodation, pickup/drop and
  breakfast/dinner.
- Konkan / Malvan: Promotional material describes a three-night
  stay with food, bus travel and sightseeing around Malvan, Tarkarli
  and nearby attractions. Confirm whether this is an active package
  before listing it.
Package prices, dates, hotel names, itineraries, transport arrangements,
inclusions, exclusions, availability and cancellation terms must be
maintained from business-approved information. Do not invent or assume
these details.
Vehicle rental and transport
Vehicle categories supplied by the business:
- Toyota Innova Crysta
- 17-seater Traveller
- 20-seater Traveller
- 26-seater Traveller
- 35-seater bus
- 45-seater bus
- 49-seater bus
Vehicle specifications, amenities, photographs, rental rates and
availability must be confirmed by the business. The site should support
quotation requests with travel date, pickup point, destination and
passenger count.
Business contact numbers
- 9323923183
- 9324923183
- 9076024545
Use these numbers consistently in the contact area and relevant enquiry
flows. Confirm which number should receive booking notifications and
WhatsApp enquiries before launch.

Business name: Shri Swami Travels
Operating location / registered address: To be confirmed.
Planned Website Features
Public website
- Home page with company introduction and featured destinations.
- Tour package listing and individual package detail pages.
- Package itinerary, photo gallery, inclusions and exclusions.
- Departure date and availability display.
- Vehicle fleet and rental enquiry pages.
- Contact and about pages.
- FAQ, privacy policy, terms and conditions, and cancellation/refund
  policy.
- Responsive layout for mobile, tablet and desktop.
- Search-engine metadata, sitemap and robots configuration.
Customer booking experience
- Select a package and available departure.
- Select traveller count and supported options.
- Enter primary traveller and contact details.
- Review an itemized price summary.
- Submit a booking and proceed to the configured payment provider.
- View a clear success, pending or failure state.
- Receive a booking reference and confirmation after the server
  verifies payment.
Customer accounts and booking history are planned features; implement
them only once the authentication and account requirements are agreed.
Admin dashboard
A protected admin dashboard is planned for authorized staff to:
- Create, update, publish, unpublish and archive packages.
- Manage package images, descriptions and itineraries.
- Create departures and configure capacity.
- View bookings and search/filter by reference, customer, package or
  date.
- Review payment status and refund status.
- Manage vehicle information and rental enquiries.
- Export appropriate booking reports to CSV or Excel.
Administrative actions must be authenticated, authorized and auditable.
Planned Technology Stack
The intended stack, subject to confirmation against the actual
repository, is:
  Area                                Planned technology
  Web application                     Next.js with App Router

  UI                                  React

  Language                            TypeScript

  Styling                             Tailwind CSS

  Database                            Supabase PostgreSQL

  Authentication                      Supabase Auth

  Payments                            Razorpay (India), subject to
merchant onboarding

  Version control                     Git and GitHub
Hosting                             A hosting provider whose plan
permits commercial use and supports
the chosen Next.js deployment
Do not assume these dependencies are already installed. Check
package.json, lockfiles and the existing source before changing the
stack.
Architecture Principles
The codebase should remain understandable to developers who have not
worked on the project before.
- Separate presentation components from business rules and data
  access.
- Keep payment provider integration isolated from booking UI.
- Validate all untrusted input on the server.
- Use shared TypeScript types for domain entities and API contracts.
- Keep database schema changes in version-controlled migrations.
- Use clear, consistent naming and small, focused modules.
- Avoid duplicated logic, oversized components and unnecessary
  dependencies.
- Document important architectural decisions.
- Keep secrets out of source control.
- Do not introduce additional frameworks or services without a clear
  need.
The database should be the source of truth for packages, departures,
capacity, bookings and payment status. Spreadsheet exports may be
provided for reporting, but spreadsheets must not be used as the live
booking database.
Booking and Payment Workflow
The intended production workflow is:
1. The customer selects a package, departure and traveller count.
2. The server validates that the departure is bookable and calculates
   the amount using trusted database values.
3. The server safely reserves capacity or creates a time-limited
   booking hold to prevent overbooking.
4. A pending booking and payment order are created.
5. The customer completes checkout with the payment provider.
6. The server verifies the provider signature and/or a verified
   webhook.
7. Payment events are processed idempotently.
8. The booking is confirmed only after authoritative server-side
   payment verification.
9. Failed, expired, cancelled and refunded payments update the relevant
   records without losing the audit trail.
Booking status and payment status should be separate fields. Do not
trust a browser redirect, client-side status, screenshot or
user-submitted payment reference as proof of payment.

The implementation must account for concurrent attempts to reserve the
final available seats, duplicate requests, delayed webhooks, abandoned
checkout sessions and refund reconciliation.
Security Requirements
- Store secrets in environment variables and deployment secret
  storage.
- Commit an .env.example containing placeholders only; never commit
  .env files.
- Never expose a Supabase service-role key or payment secret in
  browser code.
- Enable and test Supabase Row Level Security for tables exposed to
  client access.
- Restrict admin access using server-side authorization, not just
  hidden UI elements.
- Validate and sanitize input at server boundaries.
- Apply appropriate rate limits to authentication, booking and enquiry
  endpoints.
- Verify payment signatures and webhook authenticity on the server.
- Avoid storing card data or other payment credentials.
- Minimize access to customer personal information.
- Maintain secure logs without recording secrets or unnecessary
  sensitive data.
Getting Started
The exact commands depend on the dependencies and scripts present in the
repository. First inspect the project files.

For a Next.js application, the typical local workflow is:
# Clone the repository
git clone https://github.com/OmShelar2004/shri-swami-travels.git
cd shri-swami-travels

# Install dependencies using the package manager indicated by the lockfile
npm install

# Configure local environment variables
cp .env.example .env.local

# Start the development server (if this script exists)
npm run dev
Then open http://localhost:3000.

Use the package manager and commands that match the committed lockfile
and package.json. Do not run database migrations or connect to
production services until the local environment is configured and the
migration has been reviewed.
Prerequisites
- Node.js version supported by the installed Next.js version.
- npm, pnpm or another package manager matching the repository
  lockfile.
- Git.
- Supabase project credentials for database/auth development, once
  integrated.
- Razorpay test credentials for payment integration, once integrated.
Environment Configuration
Create a local .env.local file based on .env.example. The following
names are examples of likely configuration values; align them with the
actual implementation before use:
# Supabase — public project configuration
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=

# Server-only secrets — never expose to the browser
SUPABASE_SERVICE_ROLE_KEY=

# Razorpay — server-side secret must remain private
RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=
RAZORPAY_WEBHOOK_SECRET=

# Application
NEXT_PUBLIC_SITE_URL=http://localhost:3000
Only expose values prefixed with NEXT_PUBLIC_ when they are explicitly
safe for browser use. The Supabase service-role key and Razorpay secrets
must only be used in trusted server-side code. Never commit real
credentials.
Testing and Quality
Testing should cover both expected and failure scenarios.

Recommended coverage:
- Unit tests for price calculations, validation and booking rules.
- Integration tests for database operations and authorization.
- Payment tests using the provider's test environment.
- End-to-end tests for package discovery, booking and checkout.
- Tests for payment failure, duplicate webhook delivery and abandoned
  checkout.
- Concurrency tests for the final available seats.
- Admin authorization and customer-data access tests.
- Responsive layout, accessibility and cross-browser checks.
Before merging changes, run the checks actually defined in the
repository, such as:
npm run lint
npm run typecheck
npm test
npm run build
These scripts are examples; verify that each script exists in
package.json. Do not report a check as passing unless it has been run
successfully.
Development Workflow
- Keep main stable.
- Use focused feature branches for changes.
- Make small commits with descriptive messages.
- Review diffs before merging.
- Update documentation when setup, architecture, environment variables
  or workflows change.
- Do not commit secrets, customer records, generated build output or
  local environment files.
- Record known limitations and unresolved business decisions.
Business Information to Confirm
Before production launch, obtain written confirmation of:
- Official business name, logo, address and service area.
- Which contact number receives customer enquiries and booking
  notifications.
- Current package descriptions, prices, dates, itineraries and
  inclusions.
- Departure capacity and seat allocation rules.
- Vehicle specifications, rental prices and availability.
- Pickup/drop locations and operating schedules.
- Child pricing and traveller categories.
- Payment, cancellation, rescheduling and refund policies.
- Whether full payment or an advance deposit is required.
- Merchant onboarding and settlement account details.
- Privacy policy and customer-data retention requirements.
Do not publish sample prices, placeholder reviews, invented hotel
details or unverified availability.
Project Roadmap
1. Inspect the existing repository and confirm the actual framework and
   dependencies.
2. Establish the application foundation, linting, type checking and
   documentation.
3. Implement the responsive public website and destination pages.
4. Design and migrate the database schema.
5. Implement authentication and role-based admin access.
6. Implement package, vehicle and departure management.
7. Implement safe booking and seat-reservation logic.
8. Integrate and test Razorpay in test mode.
9. Build customer booking views and admin reporting.
10. Complete security, accessibility, performance and end-to-end
    testing.
11. Configure production hosting, domain, backups, monitoring and Google
    Search Console.
Contact
Shri Swami Travels
Phone: 9323923183 | 9324923183 | 9076024545

For business enquiries, package confirmation and operational details,
contact the travel business directly.
This document describes the intended project based on the currently
supplied business requirements. Update it as the implementation evolves,
and remove or revise any planned feature that is not actually
delivered.

## Security

Never commit `.env.local`, Supabase service-role keys, Razorpay secret keys, or customer exports. Payment amounts and booking confirmation will be determined and verified on the server in later milestones.
