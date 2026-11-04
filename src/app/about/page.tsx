"use client";
import Link from "next/link";
import { useLanguage } from "@/context/language-context";
import { siteConfig } from "@/config/site";
import { PageHero } from "@/components/page-hero";
import { SiteLayout } from "@/components/site-layout";
import { ShieldCheckIcon, UsersIcon, BusIcon, CompassIcon, PhoneIcon } from "@/components/icons";

export default function AboutPage() {
  const { t } = useLanguage();
  const pillars = [
    { icon: ShieldCheckIcon, title: t.about.pillars[0].title, desc: t.about.pillars[0].desc },
    { icon: UsersIcon, title: t.about.pillars[1].title, desc: t.about.pillars[1].desc },
    { icon: BusIcon, title: t.about.pillars[2].title, desc: t.about.pillars[2].desc },
    { icon: CompassIcon, title: t.about.pillars[3].title, desc: t.about.pillars[3].desc },
  ];

  return (
    <SiteLayout>
      <PageHero eyebrow={t.about.eyebrow} title={t.about.title} copy={t.about.copy} />

      <main className="bg-slate-50 py-12">
        <div className="mx-auto max-w-4xl px-5 lg:px-8 space-y-12">
          {/* Company Story */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs sm:p-10 space-y-5 text-sm leading-7 text-slate-700">
            <h2 className="text-2xl font-bold text-blue-950">{t.whoWeAre}</h2>
            <p>{t.about.story}</p>
            <p>{t.about.services}</p>
            <div className="rounded-xl border border-amber-200 bg-amber-50/60 p-4 text-xs leading-6 text-amber-900">
              <strong>{t.about.directCoordinationLabel}</strong> {t.about.directCoordination}
            </div>
          </section>

          {/* Pillars of Service */}
          <section>
            <h2 className="text-xl font-bold text-blue-950 sm:text-2xl">{t.whyTravel}</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-blue-950 text-amber-400">
                    <pillar.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-3 text-base font-bold text-blue-950">{pillar.title}</h3>
                  <p className="mt-1 text-xs leading-5 text-slate-600">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Banner */}
          <section className="rounded-2xl bg-blue-950 p-6 text-white shadow-sm sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold">{t.contactBannerTitle}</h3>
              <p className="mt-1 text-xs text-slate-300">{t.contactBannerCopy}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={`tel:${siteConfig.primaryContactNumber}`} className="inline-flex items-center gap-2 rounded-lg bg-amber-400 px-5 py-2.5 text-xs font-bold text-blue-950 shadow-xs hover:bg-amber-300">
                <PhoneIcon className="h-3.5 w-3.5" /> Call {siteConfig.primaryContactNumber}
              </a>
              <Link href="/booking" className="inline-flex items-center rounded-lg border border-white/40 px-4 py-2.5 text-xs font-bold text-white hover:bg-white hover:text-blue-950">
                {t.nav.enquireNow}
              </Link>
            </div>
          </section>
        </div>
      </main>
    </SiteLayout>
  );
}
