import { PageHero } from "@/components/page-hero";
import { SiteLayout } from "@/components/site-layout";
type LegalPageProps = { title: string; children: React.ReactNode };
export function LegalPage({ title, children }: LegalPageProps) { return <SiteLayout><PageHero eyebrow="Important information" title={title} copy="This policy is a draft placeholder and will be replaced by the business-approved version before publication." /><main className="mx-auto max-w-4xl px-5 py-14 lg:px-8"><div className="space-y-6 leading-7 text-slate-700">{children}</div></main></SiteLayout>; }
