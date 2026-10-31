"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteConfig } from "@/config/site";

const navigation = [
  ["Tours", "/packages"], ["Destinations", "/destinations"], ["Fleet", "/fleet"], ["About", "/about"], ["Contact", "/contact"],
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = (href: string) => `rounded px-1 py-2 transition hover:text-blue-800 ${pathname === href ? "text-blue-900 underline decoration-amber-400 decoration-2 underline-offset-8" : "text-slate-700"}`;

  return <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
    <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-3 lg:px-8">
      <Link href="/" className="flex items-center gap-2 leading-none" onClick={() => setMenuOpen(false)}><span className="grid h-10 w-10 place-items-center rounded-full bg-amber-400 text-xl text-blue-950">✦</span><span><span className="block text-xl font-black tracking-tight text-blue-950">SWAMI</span><span className="mt-0.5 block text-[10px] font-bold tracking-[.34em] text-slate-800">TRAVELS</span></span></Link>
      <div className="hidden text-[11px] font-semibold text-slate-700 xl:block">☎ {siteConfig.contactNumbers.join("  |  ")}</div>
      <nav aria-label="Primary navigation" className="hidden items-center gap-5 text-xs font-bold md:flex">{navigation.map(([label, href]) => <Link key={href} href={href} className={linkClass(href)}>{label}</Link>)}</nav>
      <div className="flex items-center gap-2"><Link href="/booking" className="rounded-md bg-amber-400 px-3 py-2 text-xs font-bold text-slate-950 shadow-sm transition hover:bg-amber-300">Enquire</Link><button type="button" aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen((open) => !open)} className="grid h-9 w-9 place-items-center rounded-md border border-slate-300 text-lg text-blue-950 md:hidden"><span className="sr-only">Toggle navigation</span>{menuOpen ? "×" : "☰"}</button></div>
    </div>
    {menuOpen && <nav id="mobile-navigation" aria-label="Mobile navigation" className="border-t border-slate-200 bg-white px-5 py-3 md:hidden"><div className="grid gap-1">{navigation.map(([label, href]) => <Link key={href} href={href} onClick={() => setMenuOpen(false)} className={`${linkClass(href)} px-2 text-sm`}>{label}</Link>)}<a href={`tel:${siteConfig.primaryContactNumber}`} className="mt-2 rounded-md bg-blue-950 px-3 py-2 text-center text-sm font-bold text-white">Call to enquire</a></div></nav>}
  </header>;
}
