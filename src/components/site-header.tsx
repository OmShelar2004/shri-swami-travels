"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteConfig } from "@/config/site";
import { PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { useLanguage } from "@/context/language-context";


const navigation = [
  { label: "Tours", href: "/packages" },
  { label: "Destinations", href: "/destinations" },
  { label: "Fleet", href: "/fleet" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/packages") {
      return pathname === "/packages" || pathname.startsWith("/packages/");
    }
    return pathname === href;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-xs backdrop-blur-md">
      {/* Top phone & info strip for tablets & desktops */}
      <div className="hidden border-b border-slate-100 bg-blue-950 px-5 py-1.5 text-xs text-white sm:block lg:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <p className="font-medium text-slate-200">
            Shri Swami Travels • Domestic Tours, Pilgrimages, Sightseeing &amp; Vehicle Rentals
          </p>
          <div className="flex items-center gap-4 text-xs">
            <span className="text-slate-300">Call:</span>
            {siteConfig.contactNumbers.map((num) => (
              <a
                key={num}
                href={`tel:${num}`}
                className="font-bold tracking-wide text-amber-300 hover:underline"
              >
                {num}
              </a>
            ))}
            <a
              href={`https://wa.me/91${siteConfig.primaryContactNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded bg-emerald-600 px-2 py-0.5 text-[11px] font-bold text-white transition hover:bg-emerald-500"
            >
              <WhatsAppIcon className="h-3 w-3" /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 leading-none transition hover:opacity-90"
          onClick={() => setMenuOpen(false)}
        >
          <span className="grid h-10 w-10 place-items-center rounded-full bg-amber-400 text-lg font-black text-blue-950 shadow-xs">
            ✦
          </span>
          <div>
            <span className="block text-lg font-black tracking-tight text-blue-950 sm:text-xl">
              SHRI SWAMI
            </span>
            <span className="mt-0.5 block text-[10px] font-bold tracking-[.32em] text-slate-700">
              TRAVELS
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav aria-label="Primary navigation" className="hidden items-center gap-6 text-sm font-bold md:flex">
                    {navigation.map(({ label, href }) => {
            const keyMap: Record<string, keyof typeof t.nav> = {
              Tours: "tours",
              Destinations: "destinations",
              Fleet: "fleet",
              About: "about",
              Contact: "contact",
            };
            const navKey = keyMap[label] as keyof typeof t.nav;
            const display = t.nav[navKey] || label;
            const active = isActive(href);
            return (
              <Link
                key={href}
                href={href}
                className={`rounded-md px-2 py-1 transition ${
                  active
                    ? "text-blue-950 underline decoration-amber-400 decoration-2 underline-offset-6"
                    : "text-slate-700 hover:text-blue-950"
                }`}
              >
                {display}
              </Link>
            );
          })}

        </nav>

        {/* Desktop CTA / Mobile buttons */}
        <div className="flex items-center gap-2">
          {/* Mobile direct call button */}
          <a
            href={`tel:${siteConfig.primaryContactNumber}`}
            className="grid h-9 w-9 place-items-center rounded-md border border-slate-200 text-blue-950 sm:hidden"
            aria-label={`Call ${siteConfig.primaryContactNumber}`}
          >
            <PhoneIcon className="h-4 w-4" />
          </a>

          {/* Enquire button */}
          <Link
            href="/booking"
            className="rounded-md bg-amber-400 px-4 py-2 text-xs font-bold text-blue-950 shadow-xs transition hover:bg-amber-300 sm:text-sm"
          >
            {t.nav.enquireNow}
          </Link>
          {/* Language selector dropdown */}
          <select
            aria-label="Select language"
            value={language}
            onChange={(e) => setLanguage(e.target.value as "en" | "hi" | "mr")}
            className="rounded bg-white/10 px-2 py-1 text-sm text-amber-300 focus:outline-none"
          >
            <option value="en">EN</option>
            <option value="hi">हिन्दी</option>
            <option value="mr">मराठी</option>
          </select>

          {/* Hamburger menu button */}
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
            className="grid h-9 w-9 place-items-center rounded-md border border-slate-300 text-lg text-blue-950 md:hidden"
          >
            <span className="sr-only">Toggle navigation</span>
            {menuOpen ? "×" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-slate-200 bg-white px-5 py-4 shadow-lg md:hidden"
        >
          <div className="grid gap-1">
            {navigation.map(({ label, href }) => {
              const active = isActive(href);
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-lg px-3 py-2 text-sm font-bold transition ${
                    active
                      ? "bg-amber-50 text-blue-950 border-l-4 border-amber-400"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </div>

          <div className="mt-4 border-t border-slate-100 pt-3">
            <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
              Quick Assistance
            </p>
            <div className="mt-2 flex flex-col gap-2">
              <a
                href={`tel:${siteConfig.primaryContactNumber}`}
                className="flex items-center justify-center gap-2 rounded-lg bg-blue-950 px-4 py-2.5 text-xs font-bold text-white"
              >
                <PhoneIcon className="h-3.5 w-3.5" /> Call {siteConfig.primaryContactNumber}
              </a>
              <a
                href={`https://wa.me/91${siteConfig.primaryContactNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-xs font-bold text-white"
              >
                <WhatsAppIcon className="h-3.5 w-3.5" /> WhatsApp Support
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
