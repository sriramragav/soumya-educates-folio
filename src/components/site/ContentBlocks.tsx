import { ArrowRight, BookOpen, CheckCircle2, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function SectionHeading({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return <div className="mx-auto mb-7 max-w-2xl text-center">
    {eyebrow && <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">{eyebrow}</p>}
    <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
    {description && <p className="mt-3 leading-relaxed text-muted-foreground sm:text-lg">{description}</p>}
  </div>;
}

export function PageHero({ eyebrow, title, description, children }: { eyebrow?: string; title: string; description: string; children?: ReactNode }) {
  return <section className="bg-soft-gradient py-12 sm:py-16"><div className="section-container max-w-4xl text-center">
    {eyebrow && <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary">{eyebrow}</p>}
    <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">{title}</h1>
    <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground sm:text-lg">{description}</p>
    {children && <div className="mt-6 flex flex-wrap justify-center gap-3">{children}</div>}
  </div></section>;
}

export function SubjectCard({ title, description, href }: { title: string; description: string; href: string }) {
  return <Card className="group h-full border-border shadow-soft transition hover:-translate-y-1 hover:shadow-elegant"><CardContent className="flex h-full flex-col p-6">
    <BookOpen className="mb-4 h-7 w-7 text-primary" /><h3 className="text-xl font-semibold">{title}</h3><p className="mt-2 flex-1 leading-relaxed text-muted-foreground">{description}</p>
    <Link to={href} className="mt-5 inline-flex items-center gap-2 font-semibold text-primary">Explore {title} <ArrowRight className="h-4 w-4" /></Link>
  </CardContent></Card>;
}

export function PrincipleCard({ title, description }: { title: string; description: string }) {
  return <div className="border-l-2 border-primary/40 pl-4"><Lightbulb className="mb-3 h-5 w-5 text-primary" /><h3 className="font-semibold">{title}</h3><p className="mt-1 text-sm leading-relaxed text-muted-foreground">{description}</p></div>;
}

export function ExperienceList({ items }: { items: string[] }) {
  return <ul className="grid gap-x-6 gap-y-2 sm:grid-cols-2">{items.map(item => <li key={item} className="flex items-center gap-2 py-1 text-sm"><CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />{item}</li>)}</ul>;
}

export function ConversationButton({ children = "Start a Conversation" }: { children?: ReactNode }) {
  return <Button size="lg" asChild><Link to="/contact">{children} <ArrowRight /></Link></Button>;
}
