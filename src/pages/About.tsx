import { PageShell } from "@/components/site/SiteLayout";
import { SectionHeading } from "@/components/site/ContentBlocks";
import { CallToAction, VideoIntro } from "@/components/site/PageSections";
import { aboutContent, site } from "@/content/site";

export default function AboutPage() {
  return <PageShell>
    <section className="border-b border-border bg-soft-gradient py-10 sm:py-12"><div className="section-container grid items-center gap-7 lg:grid-cols-[.9fr_1.1fr]"><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">About</p><h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Meet Soumya</h1><p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">{aboutContent.introduction}</p></div><VideoIntro video={aboutContent.video} /></div></section>
    <section className="py-10 sm:py-12"><div className="section-container max-w-3xl"><SectionHeading eyebrow="Teaching journey" title="A fuller story, to be added" /><p className="leading-relaxed text-muted-foreground">{aboutContent.journey}</p></div></section>
    <section className="bg-muted/50 py-10 sm:py-14"><div className="section-container"><SectionHeading title="Qualifications" /><div className="mx-auto grid max-w-3xl divide-y divide-border border-y border-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">{site.qualifications.map(item => <div className="px-5 py-4 text-center font-semibold" key={item}>{item}</div>)}</div></div></section>
    <section className="bg-muted/40 py-10 sm:py-12"><div className="section-container max-w-3xl"><SectionHeading eyebrow="Teaching philosophy" title="The principles behind the practice" /><p className="leading-relaxed text-muted-foreground">{aboutContent.philosophy}</p></div></section>
    <section className="py-10 sm:py-12"><div className="section-container max-w-3xl"><SectionHeading eyebrow="Classroom + online experience" title="Teaching across settings and geographies" /><p className="leading-relaxed text-muted-foreground">{aboutContent.experience}</p></div></section>
    <CallToAction title="Start a Conversation" description="Talk about the student's needs and where support would be most useful." />
  </PageShell>;
}
