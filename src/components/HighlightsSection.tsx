import { Card, CardContent } from '@/components/ui/card';

export default function HighlightsSection() {
  return (
    <section id="highlights" className="py-20 bg-background">
      <div className="section-container max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Career Highlights</h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          <Card className="text-center hover:shadow-elegant transition-shadow">
            <CardContent className="p-6 space-y-3">
              <div className="text-3xl font-bold text-primary">30+</div>
              <div className="font-semibold text-foreground">Teachers Led</div>
              <p className="text-sm text-muted-foreground">Rose from teacher to Vice Principal in 2 years, successfully managing and mentoring a team of more than 30 educators.</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-elegant transition-shadow">
            <CardContent className="p-6 space-y-3">
              <div className="text-3xl font-bold text-primary">70%</div>
              <div className="font-semibold text-foreground">Admissions Conversion</div>
              <p className="text-sm text-muted-foreground">Personally converted around 600 of 860 enquiries into school admissions—a testament to persuasive communication and trust-building with families.</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-elegant transition-shadow">
            <CardContent className="p-6 space-y-3">
              <div className="text-3xl font-bold text-primary">1000+</div>
              <div className="font-semibold text-foreground">Students Impacted</div>
              <p className="text-sm text-muted-foreground">Taught, mentored, and guided students spanning kindergarten to grade 12 across international (IB, IGCSE) and Indian curricula.</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-elegant transition-shadow">
            <CardContent className="p-6 space-y-3">
              <div className="text-3xl font-bold text-primary">📚</div>
              <div className="font-semibold text-foreground">Academic Content Creator</div>
              <p className="text-sm text-muted-foreground">Designed math workbooks for grades 1–8 and played a key role in curriculum planning, development, and teacher training at a leading institution.</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-elegant transition-shadow">
            <CardContent className="p-6 space-y-3">
              <div className="text-3xl font-bold text-primary">⚙️</div>
              <div className="font-semibold text-foreground">Process Innovator</div>
              <p className="text-sm text-muted-foreground">Streamlined critical school operations, led CBSE affiliation record-keeping, and launched a monthly newsletter to showcase achievements and foster community spirit.</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-elegant transition-shadow">
            <CardContent className="p-6 space-y-3">
              <div className="text-3xl font-bold text-primary">⚙️</div>
              <div className="font-semibold text-foreground">Leadership in Wellness</div>
              <p className="text-sm text-muted-foreground">Certified Level 1 Pranic Healer and conducted pranayama (yogic breathing) sessions for students from classes VI to XII, promoting holistic well-being alongside academic growth.</p>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
}
