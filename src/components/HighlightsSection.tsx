import { Card, CardContent } from '@/components/ui/card';

const highlights = [
  {
    number: '30+',
    title: 'Teachers Led',
    description: 'Rose from teacher to Vice Principal in 2 years, successfully managing and mentoring a team of more than 30 educators.',
  },
  {
    number: '70%',
    title: 'Admissions Conversion',
    description: 'Personally converted around 600 of 860 enquiries into school admissions—a testament to persuasive communication and trust-building with families.',
  },
  {
    number: '1000+',
    title: 'Students Impacted',
    description: 'Taught, mentored, and guided students spanning kindergarten to grade 12 across international (IB, IGCSE) and Indian curricula.',
  },
  {
    number: '📚',
    title: 'Academic Content Creator',
    description: 'Designed math workbooks for grades 1–8 and played a key role in curriculum planning, development, and teacher training at a leading institution.',
  },
  {
    number: '⚙️',
    title: 'Process Innovator',
    description: 'Streamlined critical school operations, led CBSE affiliation record-keeping, and launched a monthly newsletter to showcase achievements and foster community spirit.',
  },
  {
    number: '⚙️',
    title: 'Leadership in Wellness',
    description: 'Certified Level 1 Pranic Healer and conducted pranayama (yogic breathing) sessions for students from classes VI to XII, promoting holistic well-being alongside academic growth.',
  },
];

const strengths = [
  'Commendable subject knowledge in Mathematics & Physics',
  'Passionate learner-centric and inquiry-based teaching approach',
  'Consistent analysis and review of academic performance with customized study plans',
  'Strong administrative and management abilities',
  'Excellent communication, presentation & relationship handling skills',
  'Proficient in virtual classroom and online teaching platforms',
  'Good understanding of US English and multicultural student engagement',
  'Experienced curriculum developer and academic content creator',
  'Wellness advocate with certification in Pranic Healing and pranayama facilitation',
];

export default function HighlightsAndStrengths() {
  return (
    <section id="highlights-skills" className="py-20 bg-background">
      <div className="section-container max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Career Highlights & Strengths</h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto"></div>
        </div>
        <div className="flex flex-col md:flex-row gap-12">
          {/* Highlights cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:flex-1">
            {highlights.map(({ number, title, description }, idx) => (
              <Card key={idx} className="text-center hover:shadow-elegant transition-shadow">
                <CardContent className="p-6 space-y-3">
                  <div className="text-3xl font-bold text-primary">{number}</div>
                  <div className="font-semibold text-foreground">{title}</div>
                  <p className="text-sm text-muted-foreground">{description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          {/* Strengths & Skills list */}
          <div className="md:flex-1 bg-card rounded-lg p-8 shadow-elegant">
            <h3 className="text-2xl font-semibold mb-6 text-primary">Strengths & Skills</h3>
            <ul className="list-disc list-inside space-y-3 text-muted-foreground text-base">
              {strengths.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
