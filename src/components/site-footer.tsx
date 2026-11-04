"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { useLanguage } from "@/context/language-context";

export function SiteFooter() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-blue-900 bg-blue-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-amber-400 text-sm font-bold text-blue-950">
              ✦
            </span>
            <p className="text-lg font-extrabold tracking-tight text-white">
              Shri Swami Travels
            </p>
          </div>
          <p className="mt-4 text-xs leading-6 text-slate-300">
            {t.footer.aboutText}
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href={`https://wa.me/91${siteConfig.primaryContactNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="inline-flex items-center gap-1.5 rounded-md bg-emerald-600/90 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-emerald-600"
            >
              <WhatsAppIcon className="h-3.5 w-3.5" /> {t.contactCta.whatsappBtn}
            </a>
          </div>
        </div>

        <div>
          <p className="text-sm font-bold tracking-wider text-amber-400 uppercase">{t.footer.explore}</p>
          <div className="mt-4 grid gap-2.5 text-xs text-slate-300">
            <Link href="/packages" className="transition hover:text-white hover:underline">
              {t.footer.tourPackages}
            </Link>
            <Link href="/destinations" className="transition hover:text-white hover:underline">
              {t.footer.destinations}
            </Link>
            <Link href="/fleet" className="transition hover:text-white hover:underline">
              {t.footer.vehicleFleet}
            </Link>
            <Link href="/about" className="transition hover:text-white hover:underline">
              {t.footer.aboutUs}
            </Link>
            <Link href="/faq" className="transition hover:text-white hover:underline">
              {t.footer.faq}
            </Link>
          </div>
        </div>

        <div>
          <p className="text-sm font-bold tracking-wider text-amber-400 uppercase">{t.footer.policies}</p>
          <div className="mt-4 grid gap-2.5 text-xs text-slate-300">
            <Link href="/terms" className="transition hover:text-white hover:underline">
              {t.footer.terms}
            </Link>
            <Link href="/privacy" className="transition hover:text-white hover:underline">
              {t.footer.privacy}
            </Link>
            <Link href="/cancellation-policy" className="transition hover:text-white hover:underline">
              {t.footer.cancellation}
            </Link>
          </div>
        </div>

        <div>
          <p className="text-sm font-bold tracking-wider text-amber-400 uppercase">{t.footer.contactTeam}</p>
          <div className="mt-4 grid gap-2 text-xs">
            <p className="text-slate-400">{t.footer.directBooking}</p>
            {siteConfig.contactNumbers.map((number) => (
              <a
                key={number}
                href={`tel:${number}`}
                className="inline-flex items-center gap-2 font-semibold text-white transition hover:text-amber-300"
              >
                <PhoneIcon className="h-3.5 w-3.5 text-amber-400" /> {number}
              </a>
            ))}
            <Link
              href="/contact"
              className="mt-3 inline-block font-bold text-amber-400 hover:text-amber-300"
            >
              {t.footer.viewContact} →
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-blue-900/60 px-5 py-5 text-center text-xs text-slate-400">
        {t.footer.copyright}
      </div>
    </footer>
  );
}
