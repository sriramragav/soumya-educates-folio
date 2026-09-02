import { PageShell } from "@/components/site/SiteLayout";
import { SectionHeading } from "@/components/site/ContentBlocks";
import { CallToAction, EngagementProcess, LearningLibraryGrid, SubjectExperience, TeachingApproach, VideoIntro } from "@/components/site/PageSections";
import { FAQ } from "@/components/site/TrustContent";
import { learningResources, subjectPages } from "@/content/site";

export default function MathPage() {
  const content = subjectPages.math;
  return <PageShell>
    <section className="border-b border-border bg-soft-gradient py-10 sm:py-12"><div className="section-container grid items-center gap-7 lg:grid-cols-[.9fr_1.1fr]"><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">{content.eyebrow}</p><h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{content.headline}</h1><p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">{content.introduction}</p><a href="/contact" className="mt-6 inline-flex rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground">Talk to Soumya About Math</a></div><VideoIntro video={content.video} /></div></section>
    <section className="py-10 sm:py-12"><div className="section-container"><SectionHeading eyebrow="Who this is for" title="Support with the parts of Math that need attention" /><div className="grid divide-y divide-border border-y border-border md:grid-cols-3 md:divide-x md:divide-y-0">{content.audience.map(item => <article className="px-5 py-4" key={item.title}><h3 className="font-semibold">{item.title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.detail}</p></article>)}</div></div></section>
    <section className="bg-muted/40 py-10 sm:py-12"><div className="section-container"><SectionHeading eyebrow="Curriculum experience" title="Experience across familiar Math pathways" description="These reflect teaching experience; the appropriate support depends on the student's level and needs." /><SubjectExperience items={content.experience} /></div></section>
    <section className="py-10 sm:py-12"><div className="section-container"><SectionHeading eyebrow="How Math is taught" title="A deeper focus on the ideas behind the work" /><TeachingApproach items={content.approach} /></div></section>
    <section className="bg-muted/40 py-10 sm:py-12"><div className="section-container"><SectionHeading eyebrow="What an engagement can look like" title="A responsive teaching progression" description="This describes the approach to working through a difficulty, not a fixed sequence for every student." /><EngagementProcess items={content.process} /></div></section>
    <section className="py-10 sm:py-12"><div className="section-container"><SectionHeading eyebrow="Math learning resources" title="Learn between lessons" description="A library of Math resources will connect here as lessons and worked examples are published." /><LearningLibraryGrid resources={learningResources} subject="Math" /></div></section>
    <FAQ title="Math FAQ" items={content.faqs} />
    <CallToAction title="Talk to Soumya About Math" description="Share the student's grade, curriculum, and the areas that currently feel difficult." action="Talk to Soumya About Math" />
  </PageShell>;
}
