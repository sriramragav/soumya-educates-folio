import { PageShell } from "@/components/site/SiteLayout";
import { SectionHeading } from "@/components/site/ContentBlocks";
import { CallToAction, LearningLibraryGrid, VideoIntro } from "@/components/site/PageSections";
import { learnContent, learningResources } from "@/content/site";

export default function LearnPage() {
  return <PageShell>
    <section className="border-b border-border bg-soft-gradient py-10 sm:py-12"><div className="section-container grid items-center gap-7 lg:grid-cols-[.9fr_1.1fr]"><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Learn</p><h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Learn at your own pace.</h1><p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">{learnContent.introduction}</p></div><VideoIntro video={learnContent.video} /></div></section>
    <section className="py-10 sm:py-12"><div className="section-container"><SectionHeading eyebrow="Learning library" title="Math and Physics resources" description="Filter-ready lesson data is collected here as resources are published." /><div className="mb-5 flex gap-2 text-sm"><span className="border-b-2 border-primary pb-2 font-semibold">All resources</span><span className="pb-2 text-muted-foreground">Math</span><span className="pb-2 text-muted-foreground">Physics</span></div><LearningLibraryGrid resources={learningResources} /></div></section>
    <section className="bg-muted/40 py-10 sm:py-12"><div className="section-container max-w-3xl"><SectionHeading eyebrow="Future learning" title="Structured learning, when it is ready" /><p className="leading-relaxed text-muted-foreground">{learnContent.future}</p></div></section>
    <CallToAction title="Need personal help?" description="Talk to Soumya about the student's current needs." />
  </PageShell>;
}
