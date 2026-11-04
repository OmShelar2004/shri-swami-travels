"use client";
import { useLanguage } from "@/context/language-context";
import { siteConfig } from "@/config/site";

import { PageHero } from "@/components/page-hero";
import { SiteLayout } from "@/components/site-layout";
import { EnquiryForm } from "@/components/enquiry-form";
import { PhoneIcon, WhatsAppIcon } from "@/components/icons";

export default function BookingPage() {
  const { t } = useLanguage();
  return (
    <SiteLayout>
      <PageHero
        eyebrow={t.booking.eyebrow}
        title={t.booking.title}
        copy={t.booking.copy}
      />

      <main className="bg-slate-50 py-12">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12">
            {/* Left Column: Direct Call & Assistance Info */}
            <div className="space-y-6 lg:col-span-5">
              <div className="rounded-2xl bg-blue-950 p-6 text-white shadow-sm sm:p-8">
                <span className="rounded-full bg-amber-400/20 px-3 py-1 text-xs font-bold text-amber-300 uppercase tracking-wider border border-amber-400/30">
                  Direct Assistance
                </span>
                <h2 className="mt-4 text-2xl font-bold">Fastest Booking by Phone</h2>
                <p className="mt-2 text-xs leading-6 text-slate-200">
                  Speak directly with our travel coordinators to lock in dates, check seats, or get an immediate bus quotation.
                </p>

                <div className="mt-6 space-y-3">
                  {siteConfig.contactNumbers.map((num) => (
                    <a
                      key={num}
                      href={`tel:${num}`}
                      className="flex items-center justify-between rounded-xl bg-white/10 px-4 py-3 text-sm font-bold text-amber-300 transition hover:bg-white/20"
                    >
                      <span className="flex items-center gap-2">
                        <PhoneIcon className="h-4 w-4 text-amber-400" /> {num}
                      </span>
                      <span className="text-xs text-white/80">Call →</span>
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

              {/* Booking Process Steps */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs sm:p-8">
                <h3 className="text-base font-bold text-blue-950">How Booking Works:</h3>
                <div className="mt-4 space-y-4 text-xs text-slate-600">
                  <div className="flex items-start gap-3">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-blue-100 font-bold text-blue-950 text-xs">
                      1
                    </span>
                    <div>
                      <p className="font-bold text-slate-800">Submit Your Trip Plan</p>
                      <p className="mt-0.5 leading-5 text-slate-500">
                        Share your destination, preferred date, and number of travellers.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-blue-100 font-bold text-blue-950 text-xs">
                      2
                    </span>
                    <div>
                      <p className="font-bold text-slate-800">Confirm Itinerary &amp; Price</p>
                      <p className="mt-0.5 leading-5 text-slate-500">
                        Our team verifies dates, vehicle options, and sends a clear quotation.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-blue-100 font-bold text-blue-950 text-xs">
                      3
                    </span>
                    <div>
                      <p className="font-bold text-slate-800">Travel with Peace of Mind</p>
                      <p className="mt-0.5 leading-5 text-slate-500">
                        Punctual pickup, sanitized vehicle, and dedicated on-trip coordination.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Enquiry Form */}
            <div className="lg:col-span-7">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </main>
    </SiteLayout>
  );
}
