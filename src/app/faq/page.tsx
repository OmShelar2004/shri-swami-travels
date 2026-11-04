import { siteConfig } from "@/config/site";
import { PageHero } from "@/components/page-hero";
import { SiteLayout } from "@/components/site-layout";
import { PhoneIcon, WhatsAppIcon } from "@/components/icons";

const faqs = [
  {
    q: "How do I confirm a tour package price?",
    a: "Tour package rates depend on your departure dates, number of travellers, hotel preference, and vehicle chosen. Simply call our coordinators with your travel dates, and we will provide a verified, all-inclusive quotation.",
  },
  {
    q: "How does vehicle rental pricing work?",
    a: "Vehicle rental quotes are calculated transparently based on total kilometers, route, duration (number of days), toll & parking permits, and driver allowance. Contact us with your pickup point and destination for a quick, upfront quote.",
  },
  {
    q: "Where are the pickup points located?",
    a: "For vehicle rentals and private tours, pickup can be arranged directly from your doorstep, hotel, airport, or railway station in Mumbai, Thane, Navi Mumbai, Pune, and nearby regions. For group tours, designated pickup hubs are shared prior to departure.",
  },
  {
    q: "How do you coordinate pilgrimage tours like Ashtvinayak or Tirupati?",
    a: "We pace spiritual yatras with utmost care for senior citizens and families. We organize comfortable halts, clean accommodation, and experienced drivers familiar with temple routes and rituals. Temple entry tickets and darshan slots should be confirmed directly with our coordinators prior to departure.",
  },
  {
    q: "Can I reserve seats online right now?",
    a: "Online digital payment checkout will be introduced in an upcoming phase. Currently, you can submit your travel enquiry online or call us directly. Our team confirms availability and reserves your vehicle or seats immediately.",
  },
  {
    q: "What types of vehicles are available in your fleet?",
    a: "Our fleet includes Toyota Innova Crysta (6-7 seats), 17-seater, 20-seater, and 26-seater AC Tempo Travellers, as well as 35-seater, 45-seater, and 49-seater deluxe tourist buses with underfloor luggage compartments.",
  },
  {
    q: "What is your cancellation and refund policy?",
    a: "Cancellation terms depend on the timing of your notice and supplier commitments (hotels/permits). Please review our Cancellation & Refund Policy page or discuss with your travel coordinator before making an advance payment.",
  },
];

export default function FaqPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Help &amp; Answers"
        title="Frequently Asked Questions"
        copy="Everything you need to know about our tour packages, fleet rentals, pickup arrangements, and booking procedures."
      />

      <main className="bg-slate-50 py-12">
        <div className="mx-auto max-w-4xl px-5 lg:px-8 space-y-10">
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <details
                key={q}
                open
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-xs"
              >
                <summary className="flex cursor-pointer items-center justify-between font-bold text-base text-blue-950 list-none">
                  <span>{q}</span>
                  <span className="ml-4 shrink-0 text-amber-600 font-bold group-open:rotate-180 transition">
                    ↓
                  </span>
                </summary>
                <p className="mt-3 text-xs leading-6 text-slate-600 sm:text-sm">{a}</p>
              </details>
            ))}
          </div>

          {/* Still have questions card */}
          <div className="rounded-2xl bg-blue-950 p-6 text-white shadow-sm sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold">Still have a question?</h3>
              <p className="mt-1 text-xs text-slate-300">
                Our travel team is always available to assist with your specific travel needs.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={`tel:${siteConfig.primaryContactNumber}`}
                className="inline-flex items-center gap-2 rounded-lg bg-amber-400 px-5 py-2.5 text-xs font-bold text-blue-950 shadow-xs hover:bg-amber-300"
              >
                <PhoneIcon className="h-3.5 w-3.5" /> Call {siteConfig.primaryContactNumber}
              </a>
              <a
                href={`https://wa.me/91${siteConfig.primaryContactNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white hover:bg-emerald-500"
              >
                <WhatsAppIcon className="h-3.5 w-3.5" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </main>
    </SiteLayout>
  );
}
