import Link from "next/link";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return <footer className="bg-slate-950 text-slate-300">
    <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
      <div><p className="text-xl font-bold text-white">Shri Swami Travels</p><p className="mt-3 text-sm leading-6">Thoughtful domestic tours, pilgrimages, sightseeing, and group travel from Maharashtra.</p></div>
      <div><p className="font-semibold text-white">Explore</p><div className="mt-3 grid gap-2 text-sm"><Link href="/packages">Tour packages</Link><Link href="/destinations">Destinations</Link><Link href="/fleet">Vehicle fleet</Link><Link href="/faq">Frequently asked questions</Link></div></div>
      <div><p className="font-semibold text-white">Policies</p><div className="mt-3 grid gap-2 text-sm"><Link href="/privacy">Privacy policy</Link><Link href="/terms">Terms & conditions</Link><Link href="/cancellation-policy">Cancellation & refund policy</Link></div></div>
      <div><p className="font-semibold text-white">Enquiries</p><div className="mt-3 grid gap-2 text-sm">{siteConfig.contactNumbers.map((number) => <a key={number} href={`tel:${number}`} className="hover:text-white">{number}</a>)}<Link href="/contact" className="mt-2 font-semibold text-amber-400">Contact our team →</Link></div></div>
    </div>
    <div className="border-t border-slate-800 px-5 py-5 text-center text-xs text-slate-500">© Shri Swami Travels. Details and availability subject to confirmation.</div>
  </footer>;
}
