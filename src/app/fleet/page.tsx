import Image from "next/image";
import { vehicleDetails } from "@/config/content";
import { siteConfig } from "@/config/site";
import { PageHero } from "@/components/page-hero";
import { SiteLayout } from "@/components/site-layout";
import { EnquiryForm } from "@/components/enquiry-form";
import { BusIcon, UsersIcon, ShieldCheckIcon, PhoneIcon, WhatsAppIcon } from "@/components/icons";

export default function FleetPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Vehicle Rentals"
        title="Well-Maintained Fleet for Every Journey"
        copy="From premium Innova Crysta for family vacations to spacious Tempo Travellers and luxury 49-seater coaches for group yatras, corporate events, and weddings."
      />

      <main className="bg-slate-50 py-12">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          {/* Fleet Features Strip */}
          <div className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-xs sm:grid-cols-3">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-blue-950 text-amber-400">
                <ShieldCheckIcon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-blue-950">Verified &amp; Sanitized</p>
                <p className="text-[11px] text-slate-500">Regularly inspected vehicles with experienced drivers</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-blue-950 text-amber-400">
                <BusIcon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-blue-950">AC &amp; Pushback Comfort</p>
                <p className="text-[11px] text-slate-500">Dual-zone air conditioning &amp; generous legroom</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-blue-950 text-amber-400">
                <UsersIcon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-blue-950">Transparent Quotations</p>
                <p className="text-[11px] text-slate-500">Clear rates based on route, days &amp; passenger count</p>
              </div>
            </div>
          </div>

          {/* Vehicles Grid - All 7 Vehicles with One Distinct Action */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {vehicleDetails.map((vehicle) => {
              return (
                <article
                  key={vehicle.name}
                  className="group flex flex-col justify-between overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xs transition duration-200 hover:-translate-y-1 hover:border-amber-400 hover:shadow-md"
                >
                  {/* Photo header - Consistent 16:9 front-left */}
                  <div className="relative h-52 overflow-hidden bg-blue-950">
                    <Image
                      src={vehicle.image}
                      alt={vehicle.imageAlt}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-3 rounded-full bg-blue-950/80 px-2.5 py-1 text-[11px] font-bold text-amber-300 border border-amber-400/30 backdrop-blur-sm">
                      {vehicle.category}
                    </span>
                    <span className="absolute top-3 right-3 rounded-full bg-blue-950/80 px-2.5 py-1 text-[11px] font-semibold text-white border border-white/20 backdrop-blur-sm">
                      {vehicle.capacity}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="flex flex-1 flex-col justify-between p-5">
                    <div>
                      <div className="flex items-center justify-between">
                        <h2 className="text-lg font-bold text-blue-950 group-hover:text-amber-700 transition">
                          {vehicle.name}
                        </h2>
                        <span className="rounded bg-amber-100 px-2 py-0.5 text-[11px] font-bold text-amber-800">
                          {vehicle.capacity}
                        </span>
                      </div>
                      <p className="mt-2 text-xs leading-5 text-slate-600">
                        {vehicle.description}
                      </p>
                      <div className="mt-3 rounded-lg bg-slate-50 p-3 text-[11px] text-slate-600">
                        <span className="font-bold text-blue-950">Ideal for:</span> {vehicle.idealFor}
                      </div>
                    </div>

                    {/* Single Distinct Enquiry Action */}
                    <div className="mt-5 border-t border-slate-100 pt-4">
                      <a
                        href={`#vehicle-enquiry`}
                        className="flex w-full items-center justify-center rounded-lg bg-amber-400 px-4 py-2.5 text-center text-xs font-bold text-blue-950 shadow-2xs transition hover:bg-amber-300"
                      >
                        Request Quotation for {vehicle.name} →
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Bottom Vehicle Enquiry Form - THE SINGLE Form on this page */}
          <div id="vehicle-enquiry" className="mt-16 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10 scroll-mt-24">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-5">
                <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-800">
                  Custom Route &amp; Quotation
                </span>
                <h3 className="mt-3 text-2xl font-bold text-blue-950 sm:text-3xl">
                  Need a Vehicle for an Upcoming Trip or Event?
                </h3>
                <p className="mt-2 text-xs leading-6 text-slate-600">
                  Share your dates, pickup location, destination, and approximate passenger count.
                  Our vehicle coordinator will provide clear vehicle options with all-inclusive rate details.
                </p>

                <div className="mt-6 space-y-2 border-t border-slate-100 pt-4 text-xs">
                  <p className="font-bold text-blue-950">Need instant assistance?</p>
                  <div className="flex flex-col gap-2">
                    <a
                      href={`tel:${siteConfig.primaryContactNumber}`}
                      className="inline-flex items-center gap-2 font-bold text-blue-950 hover:text-amber-700"
                    >
                      <PhoneIcon className="h-4 w-4 text-amber-500" /> Call {siteConfig.primaryContactNumber}
                    </a>
                    <a
                      href={`https://wa.me/91${siteConfig.primaryContactNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-bold text-emerald-700 hover:text-emerald-800"
                    >
                      <WhatsAppIcon className="h-4 w-4 text-emerald-600" /> Message on WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <EnquiryForm initialService="vehicle" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </SiteLayout>
  );
}
