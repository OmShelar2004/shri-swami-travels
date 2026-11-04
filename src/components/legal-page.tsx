import { PageHero } from "@/components/page-hero";
import { SiteLayout } from "@/components/site-layout";

interface LegalPageProps {
  title: string;
  children: React.ReactNode;
}

export function LegalPage({ title, children }: LegalPageProps) {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Policy Information"
        title={title}
        copy="Please review the terms and operational guidelines for tour packages, vehicle bookings, and customer agreements with Shri Swami Travels."
      />
      <main className="bg-slate-50 py-12">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs sm:p-10 space-y-6 text-sm leading-7 text-slate-700">
            {children}
          </div>
        </div>
      </main>
    </SiteLayout>
  );
}
