import { ChevronDown, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import type { FAQItem, Testimonial } from "@/content/site";

export function Testimonials({ items }: { items: Testimonial[] }) {
  if (items.length === 0) return null;

  return <section className="py-10 sm:py-14" aria-labelledby="testimonials-title">
    <div className="section-container">
      <div className="mb-6 flex items-baseline justify-between gap-4 border-b border-border pb-3">
        <div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Testimonials</p><h2 id="testimonials-title" className="mt-2 text-2xl font-bold">What families and students say</h2></div>
      </div>
      <div className="grid gap-x-8 gap-y-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => <figure key={`${item.name}-${index}`} className="border-t border-border pt-4">
          <Quote className="h-5 w-5 text-primary" aria-hidden="true" />
          <blockquote className="mt-3 text-sm leading-relaxed text-muted-foreground">“{item.quote}”</blockquote>
          <figcaption className="mt-3 text-sm font-semibold">{item.name}{item.country && ` · ${item.country}`}{item.gradeOrCurriculum && <span className="font-normal text-muted-foreground"> · {item.gradeOrCurriculum}</span>}</figcaption>
        </figure>)}
      </div>
    </div>
  </section>;
}

export function FAQ({ items, title = "Frequently asked questions" }: { items: FAQItem[]; title?: string }) {
  return <section className="py-10 sm:py-14" aria-labelledby="faq-title">
    <div className="section-container max-w-3xl">
      <div className="mb-6"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">FAQ</p><h2 id="faq-title" className="mt-2 text-2xl font-bold">{title}</h2></div>
      <div className="border-y border-border">
        {items.map(item => <details key={item.question} className="group border-b border-border last:border-b-0">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-sm font-semibold marker:content-none">
            {item.question}<ChevronDown className="h-4 w-4 shrink-0 transition-transform group-open:rotate-180" aria-hidden="true" />
          </summary>
          <div className="pb-4 pr-8 text-sm leading-relaxed text-muted-foreground">{item.answer}{item.contactCta && <> <Link to="/contact" className="font-semibold text-primary hover:underline">Start a Conversation.</Link></>}</div>
        </details>)}
      </div>
    </div>
  </section>;
}
