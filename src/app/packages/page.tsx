"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { packages } from "@/config/content";
import { PageHero } from "@/components/page-hero";
import { SiteLayout } from "@/components/site-layout";
import { useLanguage } from "@/context/language-context";

const filters = [
  "All",
  "Hill Stations",
  "Beaches",
  "Pilgrimage",
  "South India",
  "Daily Tours",
] as const;

type FilterType = (typeof filters)[number];

export default function PackagesPage() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");

  const filteredPackages =
    activeFilter === "All"
      ? packages
      : packages.filter((pkg) => pkg.category === activeFilter);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Explore India"
        title="Tour Packages"
        copy="Beautiful destinations across India, planned with a focus on comfort, reliable transport, and clear travel arrangements."
      />

      <main className="bg-slate-50 py-12">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2" aria-label={t.common.packageCategories}>
            {filters.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-full px-4 py-2 text-xs font-bold transition shadow-2xs ${
                    isActive
                      ? "bg-blue-950 text-white shadow-xs"
                      : "bg-white text-slate-700 hover:bg-slate-100 hover:text-blue-950 border border-slate-200"
                  }`}
                >
                  {filter === "All" ? t.common.all : filter}
                </button>
              );
            })}
          </div>

          <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
            <span>
              {t.common.showingPackages(filteredPackages.length, activeFilter === "All" ? undefined : activeFilter)}
            </span>
            {activeFilter !== "All" && (
              <button
                type="button"
                onClick={() => setActiveFilter("All")}
                className="font-semibold text-blue-950 hover:underline"
              >
                {t.common.resetFilter}
              </button>
            )}
          </div>

          {/* Package Cards Grid */}
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPackages.map((tour) => (
              <article
                key={tour.slug}
                className="group flex flex-col justify-between overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xs transition duration-200 hover:-translate-y-1 hover:border-amber-400 hover:shadow-md"
              >
                {/* Photo & Badge */}
                <Link href={`/packages/${tour.slug}`} className="block relative h-48 overflow-hidden bg-blue-950">
                  <Image
                    src={tour.image}
                    alt={tour.imageAlt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/75 via-transparent to-transparent" />
                  <span className="absolute bottom-2.5 left-2.5 rounded-full bg-blue-950/80 px-2.5 py-1 text-[10px] font-bold text-amber-300 border border-amber-400/30 backdrop-blur-sm uppercase">
                    {tour.tag}
                  </span>
                  <span className="absolute top-2.5 right-2.5 rounded-full bg-blue-950/80 px-2.5 py-1 text-[10px] font-semibold text-white border border-white/20 backdrop-blur-sm">
                    {tour.duration}
                  </span>
                </Link>

                {/* Details */}
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-amber-700">
                      <span>{tour.category}</span>
                    </div>

                    <h2 className="mt-2 text-lg font-bold text-blue-950 group-hover:text-amber-700 transition">
                      <Link href={`/packages/${tour.slug}`}>{tour.name}</Link>
                    </h2>

                    <p className="mt-2 text-xs leading-5 text-slate-600 line-clamp-2">
                      {tour.summary}
                    </p>

                    {tour.highlights && (
                      <ul className="mt-3 space-y-1 text-[11px] text-slate-500">
                        {tour.highlights.slice(0, 2).map((h) => (
                          <li key={h} className="flex items-center gap-1.5">
                            <span className="text-amber-500">•</span> {h}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Individual Enquire & View actions */}
                  <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-3">
                    <Link
                      href={`/packages/${tour.slug}`}
                      className="text-xs font-bold text-blue-950 hover:text-amber-700"
                    >
                      {t.common.viewDetails} →
                    </Link>
                    <Link
                      href={`/packages/${tour.slug}#enquiry`}
                      className="rounded-lg bg-amber-400 px-3.5 py-1.5 text-xs font-bold text-blue-950 shadow-2xs transition hover:bg-amber-300"
                    >
                      {t.common.enquire}
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </SiteLayout>
  );
}
