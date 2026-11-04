import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { packages, vehicleDetails } from "@/config/content";
import { siteConfig } from "@/config/site";
import { PageHero } from "@/components/page-hero";
import { SiteLayout } from "@/components/site-layout";
import { EnquiryForm } from "@/components/enquiry-form";
import { PhoneIcon, WhatsAppIcon, CheckCircleIcon, ShieldCheckIcon } from "@/components/icons";

export function generateStaticParams() {
  return packages.map(({ slug }) => ({ slug }));
}

export default async function PackageDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tour = packages.find((item) => item.slug === slug);

  if (!tour) {
    notFound();
  }

  return (
    <SiteLayout>
      <PageHero eyebrow={tour.tag} title={tour.name} copy={tour.summary} />

      <main className="bg-slate-50 py-12">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12">
            {/* Left Column: Structured Package Content */}
            <div className="space-y-8 lg:col-span-7">
              {/* Image banner */}
              <div className="relative h-72 overflow-hidden rounded-2xl shadow-sm sm:h-96 bg-blue-950">
                <Image
                  src={tour.image}
                  alt={tour.imageAlt}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/75 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <span className="rounded-full bg-blue-950/80 px-3 py-1 text-xs font-bold uppercase tracking-wider backdrop-blur-sm border border-amber-400/40 text-amber-300">
                    {tour.category}
                  </span>
                  <span className="text-xs font-semibold bg-blue-950/80 px-3 py-1 rounded-full border border-white/20 backdrop-blur-sm">
                    {tour.duration}
                  </span>
                </div>
              </div>

              {/* 1. Overview */}
              <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs sm:p-8">
                <h2 className="text-xl font-bold text-blue-950">Overview</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {tour.summary} At Shri Swami Travels, all tour packages are carefully curated with flexible pickup points across Maharashtra.
                  We focus on comfortable pacing, clean accommodations, and experienced drivers who know the routes thoroughly.
                </p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs">
                  <span className="rounded-md bg-blue-50 px-2.5 py-1 font-semibold text-blue-950">
                    Category: {tour.category}
                  </span>
                  <span className="rounded-md bg-amber-50 px-2.5 py-1 font-semibold text-amber-900">
                    Duration: {tour.duration}
                  </span>
                  <span className="rounded-md bg-slate-100 px-2.5 py-1 font-semibold text-slate-700">
                    Family &amp; Senior Friendly
                  </span>
                </div>
              </section>

              {/* 2. Highlights */}
              <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs sm:p-8">
                <h2 className="text-xl font-bold text-blue-950">Tour Highlights</h2>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {tour.highlights.map((h) => (
                    <div key={h} className="flex items-start gap-2.5 text-xs font-medium text-slate-700">
                      <CheckCircleIcon className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* 3. Sample Itinerary */}
              <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs sm:p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-blue-950">Sample Day-Wise Itinerary</h2>
                    <p className="mt-1 text-xs text-slate-500">
                      Standard framework. Custom adjustments are made directly with our coordinators based on your dates.
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {tour.itinerary.map((item) => (
                    <div key={item.day} className="flex gap-4 rounded-xl border border-slate-100 bg-slate-50/70 p-4">
                      <span className="flex h-8 w-14 shrink-0 items-center justify-center rounded-lg bg-blue-950 text-[11px] font-bold text-amber-400">
                        {item.day}
                      </span>
                      <div>
                        <h3 className="text-sm font-bold text-blue-950">{item.title}</h3>
                        <p className="mt-1 text-xs leading-5 text-slate-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* 4. Inclusions & Guidelines */}
              <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs sm:p-8">
                <h2 className="text-xl font-bold text-blue-950">Inclusions &amp; Booking Guidelines</h2>
                <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
                  {tour.inclusions.map((inc) => (
                    <div key={inc} className="flex items-center gap-2 text-xs text-slate-700">
                      <ShieldCheckIcon className="h-4 w-4 shrink-0 text-amber-600" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50/60 p-4 text-xs leading-5 text-slate-700">
                  <p className="font-bold text-blue-950">What to confirm before booking:</p>
                  <p className="mt-1">
                    Exact departure dates, pickup timing, preferred room categories, and remaining vehicle capacity. Quotations are provided transparently with zero hidden costs.
                  </p>
                </div>
              </section>

              {/* 5. Recommended Vehicles */}
              <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs sm:p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-blue-950">Recommended Vehicles for this Tour</h2>
                    <p className="mt-1 text-xs text-slate-500">
                      Choose a vehicle that fits your group size and luggage preference.
                    </p>
                  </div>
                  <Link href="/fleet" className="text-xs font-bold text-blue-950 hover:underline">
                    View Fleet →
                  </Link>
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                  {vehicleDetails.slice(0, 3).map((v) => (
                    <div key={v.name} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xs">
                      <div className="relative h-28 overflow-hidden bg-blue-950">
                        <Image
                          src={v.image}
                          alt={v.imageAlt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 via-transparent to-transparent" />
                        <span className="absolute bottom-1.5 left-2 rounded bg-blue-950/80 px-1.5 py-0.5 text-[9px] font-bold text-amber-300 backdrop-blur-sm">
                          {v.capacity}
                        </span>
                      </div>
                      <div className="p-3">
                        <h3 className="text-xs font-bold text-blue-950">{v.name}</h3>
                        <p className="mt-1 text-[11px] text-slate-500 leading-4 line-clamp-2">{v.idealFor}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Column: ONE Package-Specific Enquiry Form with Direct Help */}
            <aside id="enquiry" className="space-y-6 lg:col-span-5 scroll-mt-24">
              <div className="sticky top-24 space-y-6">
                {/* Unified Helpline & WhatsApp Bar */}
                <div className="rounded-2xl bg-blue-950 p-6 text-white shadow-sm">
                  <span className="text-[11px] font-bold tracking-widest text-amber-400 uppercase">
                    Direct Assistance
                  </span>
                  <h3 className="mt-1 text-lg font-bold">Have Questions About {tour.name}?</h3>
                  <p className="mt-1 text-xs text-slate-200">
                    Call our travel coordinators directly or submit your details below:
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2 text-xs font-bold text-amber-300">
                    {siteConfig.contactNumbers.map((num) => (
                      <a
                        key={num}
                        href={`tel:${num}`}
                        className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-2 hover:bg-white/20 transition"
                      >
                        <PhoneIcon className="h-3 w-3 text-amber-400" /> {num}
                      </a>
                    ))}
                  </div>

                  <a
                    href={`https://wa.me/91${siteConfig.primaryContactNumber}?text=Hi%20Shri%20Swami%20Travels,%20I%20am%20interested%20in%20the%20${encodeURIComponent(
                      tour.name
                    )}%20package.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-emerald-500"
                  >
                    <WhatsAppIcon className="h-4 w-4" /> Enquire on WhatsApp
                  </a>
                </div>

                {/* THE SINGLE Package-Specific Enquiry Form */}
                <EnquiryForm
                  initialService="tour"
                  initialSelection={tour.name}
                  compact
                />
              </div>
            </aside>
          </div>
        </div>
      </main>
    </SiteLayout>
  );
}
