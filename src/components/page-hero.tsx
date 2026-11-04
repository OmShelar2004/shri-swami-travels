interface PageHeroProps {
  eyebrow: string;
  title: string;
  copy: string;
}

export function PageHero({ eyebrow, title, copy }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-blue-950 px-5 py-14 text-white sm:py-16 lg:px-8">
      {/* Subtle background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl">
        <p className="text-xs font-bold tracking-[.2em] text-amber-400 uppercase sm:text-sm">
          {eyebrow}
        </p>
        <h1 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
          {copy}
        </p>
      </div>
    </section>
  );
}
