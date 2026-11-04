import { siteConfig } from "@/config/site";
import { PageHero } from "@/components/page-hero";
import { SiteLayout } from "@/components/site-layout";
import { EnquiryForm } from "@/components/enquiry-form";
import { PhoneIcon, WhatsAppIcon, CompassIcon } from "@/components/icons";

export default function ContactPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact Shri Swami Travels"
        title="We Are Here to Help Plan Your Trip"
        copy="Call our team for package details, departure schedules, or vehicle rental quotations. We are just a call or message away."
      />

      <main className="bg-slate-50 py-12">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12">
            {/* Left Column: Direct contact info */}
            <div className="space-y-6 lg:col-span-5">
              <div className="rounded-2xl bg-blue-950 p-6 text-white shadow-sm sm:p-8">
                <span className="rounded-full bg-amber-400/20 px-3 py-1 text-xs font-bold text-amber-300 uppercase tracking-wider border border-amber-400/30">
                  Customer Support
                </span>
                <h2 className="mt-3 text-2xl font-bold">Call Our Travel Coordinators</h2>
                <p className="mt-2 text-xs leading-6 text-slate-200">
                  Available for booking assistance, custom itineraries, and immediate rental quotations:
                </p>

                <div className="mt-6 space-y-3">
                  {siteConfig.contactNumbers.map((num) => (
                    <a
                      key={num}
                      href={`tel:${num}`}
                      className="flex items-center justify-between rounded-xl bg-white/10 px-4 py-3 text-sm font-bold text-amber-300 transition hover:bg-white/20"
                    >
                      <span className="flex items-center gap-2.5">
                        <PhoneIcon className="h-4 w-4 text-amber-400" /> {num}
                      </span>
                      <span className="text-xs text-white/80">Call Now →</span>
                    </a>
                  ))}
                </div>

                <a
                  href={`https://wa.me/91${siteConfig.primaryContactNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-center text-sm font-bold text-white shadow-sm transition hover:bg-emerald-500"
                >
                  <WhatsAppIcon className="h-4 w-4" /> Message on WhatsApp
                </a>
              </div>

              {/* Tips for quick quotes */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs sm:p-8">
                <div className="flex items-center gap-2 text-blue-950">
                  <CompassIcon className="h-5 w-5 text-amber-600" />
                  <h3 className="text-base font-bold">Helpful Tips for Faster Quotes</h3>
                </div>
                <ul className="mt-4 space-y-2.5 text-xs leading-5 text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-amber-600">•</span>
                    <span>Specify your destination and preferred travel or departure dates.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-amber-600">•</span>
                    <span>Mention total passenger count (adults and children).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-amber-600">•</span>
                    <span>Let us know if you need specific vehicle types (Innova, Tempo Traveller, or Bus).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-amber-600">•</span>
                    <span>Inform us of preferred pickup locations (Mumbai, Pune, Thane, etc.).</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column: Embedded Enquiry Form */}
            <div className="lg:col-span-7">
              <EnquiryForm initialService="general" />
            </div>
          </div>
        </div>
      </main>
    </SiteLayout>
  );
}
