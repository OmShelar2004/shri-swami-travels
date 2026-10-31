type PageHeroProps = { eyebrow: string; title: string; copy: string };
export function PageHero({ eyebrow, title, copy }: PageHeroProps) {
  return <section className="bg-slate-950 px-5 py-16 text-white sm:py-20 lg:px-8"><div className="mx-auto max-w-7xl"><p className="text-sm font-bold tracking-[.18em] text-amber-400 uppercase">{eyebrow}</p><h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">{copy}</p></div></section>;
}
