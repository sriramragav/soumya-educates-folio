import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PageShell } from "@/components/site/SiteLayout";
import { PageHero, SectionHeading } from "@/components/site/ContentBlocks";
import { FAQ } from "@/components/site/TrustContent";
import { contactFaqs, site } from "@/content/site";

const enquirySchema = z.object({
  parentName: z.string().trim().min(2, "Please enter your name."),
  studentName: z.string().trim().min(2, "Please enter the student's name."),
  grade: z.string().trim().min(1, "Please select a grade range."),
  subject: z.string().trim().min(1, "Please select a subject."),
  curriculum: z.string().trim().min(2, "Please tell us the curriculum."),
  location: z.string().trim().min(2, "Please enter your country or location."),
  helpNeeded: z.string().trim().min(10, "Please share a little more about the support needed."),
  availability: z.string().trim().min(2, "Please share preferred days or times."),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z.string().trim().min(6, "Please enter a phone or WhatsApp number."),
});
type Enquiry = z.infer<typeof enquirySchema>;

const fieldClass = "mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";
function ErrorText({ message }: { message?: string }) { return message ? <p className="mt-1 text-sm text-destructive">{message}</p> : null; }

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<Enquiry>({ resolver: zodResolver(enquirySchema) });
  const onSubmit = () => setSubmitted(true);
  const hasContactDetails = Boolean(site.contact.email || site.contact.phone || site.contact.whatsapp);

  return <PageShell>
    <PageHero eyebrow="Contact" title="Start a conversation." description="Parents can contact Soumya to discuss the student’s needs, current challenges, and the right next step." />
    <section className="py-10 sm:py-12"><div className="section-container grid gap-8 lg:grid-cols-[.75fr_1.25fr]">
      <aside><h2 className="text-2xl font-bold">Tell us about the student.</h2><p className="mt-4 leading-relaxed text-muted-foreground">Share the subject, grade, curriculum, and the areas that feel difficult. This helps make the first conversation more useful.</p>
        <div className="mt-7 rounded-xl border border-border bg-muted/50 p-5"><h3 className="font-semibold">A thoughtful first step</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">The introductory discussion is a chance to understand the student’s needs and whether one-to-one or small-group learning may be suitable.</p></div>
        <div className="mt-7 border-t border-border pt-5"><h3 className="font-semibold">Contact details</h3>{hasContactDetails ? <div className="mt-3 text-sm text-muted-foreground">{site.contact.email && <p>Email: <a className="font-medium text-primary" href={`mailto:${site.contact.email}`}>{site.contact.email}</a></p>}{site.contact.phone && <p className="mt-2">Phone: {site.contact.phone}</p>}{site.contact.whatsapp && <p className="mt-2">WhatsApp: {site.contact.whatsapp}</p>}</div> : <p className="mt-2 text-sm leading-relaxed text-muted-foreground">A verified email address can be added here. Phone and WhatsApp details have not yet been confirmed.</p>}</div>
      </aside>
      <form className="border border-border bg-card p-6 shadow-soft" onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="grid gap-5 sm:grid-cols-2"><div><Label htmlFor="parentName">Parent name</Label><Input id="parentName" className="mt-2" {...register("parentName")} /><ErrorText message={errors.parentName?.message} /></div><div><Label htmlFor="studentName">Student name</Label><Input id="studentName" className="mt-2" {...register("studentName")} /><ErrorText message={errors.studentName?.message} /></div>
          <div><Label htmlFor="grade">Student grade</Label><select id="grade" className={fieldClass} defaultValue="" {...register("grade")}><option value="" disabled>Select grade range</option><option>Grades VIII–X</option><option>Grades XI–XII</option><option>Other</option></select><ErrorText message={errors.grade?.message} /></div><div><Label htmlFor="subject">Subject</Label><select id="subject" className={fieldClass} defaultValue="" {...register("subject")}><option value="" disabled>Select subject</option><option>Math</option><option>Physics</option><option>Math and Physics</option></select><ErrorText message={errors.subject?.message} /></div>
          <div><Label htmlFor="curriculum">Curriculum</Label><Input id="curriculum" className="mt-2" placeholder="For example: IGCSE, IB, CBSE" {...register("curriculum")} /><ErrorText message={errors.curriculum?.message} /></div><div><Label htmlFor="location">Country / location</Label><Input id="location" className="mt-2" {...register("location")} /><ErrorText message={errors.location?.message} /></div></div>
        <div className="mt-5"><Label htmlFor="helpNeeded">What does the student need help with?</Label><Textarea id="helpNeeded" className="mt-2 min-h-28" {...register("helpNeeded")} /><ErrorText message={errors.helpNeeded?.message} /></div><div className="mt-5"><Label htmlFor="availability">Preferred days and times</Label><Input id="availability" className="mt-2" {...register("availability")} /><ErrorText message={errors.availability?.message} /></div>
        <div className="mt-5 grid gap-5 sm:grid-cols-2"><div><Label htmlFor="email">Email</Label><Input id="email" type="email" className="mt-2" {...register("email")} /><ErrorText message={errors.email?.message} /></div><div><Label htmlFor="phone">Phone / WhatsApp</Label><Input id="phone" type="tel" className="mt-2" {...register("phone")} /><ErrorText message={errors.phone?.message} /></div></div>
        <p className="mt-6 text-sm leading-relaxed text-muted-foreground">Email delivery will be connected once Soumya’s preferred contact details and delivery method are confirmed. This form currently validates the information but does not send or store it.</p>
        <Button type="submit" size="lg" className="mt-5">Prepare enquiry</Button>
        {submitted && <p role="status" className="mt-4 rounded-lg bg-muted p-4 text-sm">Your enquiry details are complete. Email delivery has not yet been configured, so nothing has been sent.</p>}
      </form>
    </div></section>
    <section className="bg-muted/40 py-10 sm:py-12"><div className="section-container"><SectionHeading eyebrow="What happens next?" title="A simple first conversation" /><ol className="grid divide-y divide-border border-y border-border md:grid-cols-3 md:divide-x md:divide-y-0">{[["You tell us about the student", "Share the grade, curriculum, and current difficulty."], ["Soumya understands the need", "The first conversation gives context for the support being considered."], ["Discuss the appropriate approach", "Talk through what may be suitable for the student."]].map(([title, detail], index) => <li className="px-5 py-4" key={title}><p className="text-xs font-bold text-primary">0{index + 1}</p><h3 className="mt-2 font-semibold">{title}</h3><p className="mt-1 text-sm leading-relaxed text-muted-foreground">{detail}</p></li>)}</ol></div></section>
    <FAQ title="Practical FAQ" items={contactFaqs} />
  </PageShell>;
}
