import { Card, CardContent } from '@/components/ui/card';
import { 
  Award, 
  BookOpen, 
  Users, 
  Globe, 
  Target, 
  Lightbulb, 
  Zap 
} from 'lucide-react';

const highlights = [
  {
    title: 'Transformational Leadership',
    icon: Users,
    description:
      'Rapidly advanced to Vice Principal, leading and mentoring 30+ educators to foster a collaborative and innovative school culture.',
  },
  {
    title: 'Innovative Curriculum & Assessment',
    icon: BookOpen,
    description:
      'Designed inquiry-based Math and Physics curricula aligned with international standards, supporting holistic student evaluation.',
  },
  {
    title: 'Holistic Student Mentorship',
    icon: Award,
    description:
      'Guided students across IB, IGCSE, and other curricula, promoting academic achievement and socio-emotional growth.',
  },
  {
    title: 'Multicultural Communication & Engagement',
    icon: Globe,
    description:
      'Fluent in five languages, enhancing inclusivity and building bridges with diverse learners and families.',
  },
  {
    title: 'Wellness & Mindfulness Leadership',
    icon: Lightbulb,
    description:
      'Integrated pranayama and pranic healing practices promoting emotional resilience and balance consistent with IB values.',
  },
  {
    title: 'Admissions & Community Relations',
    icon: Target,
    description:
      'Achieved a 70% enquiry-to-admission conversion rate by building trustful relationships with families and reinforcing institutional reputation.',
  },
  {
    title: 'Operational Excellence',
    icon: Zap,
    description:
      'Led initiatives to improve school processes and community engagement including newsletters and resource management.',
  },
];

export default function HighlightsSection() {
  return (
    <section id="highlights" className="py-20">
      <div className="section-container">
        <div className="space-y-6 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-hero-gradient bg-clip-text text-transparent">Career Highlights</span>
          </h2>
          <div className="w-20 h-1 bg-hero-gradient rounded-full mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Card
                key={index}
                className="p-8 rounded-xl bg-card-gradient border hover:shadow-elegant transition-all duration-300 hover:scale-105 group"
              >
                <CardContent className="text-center space-y-6 p-0">
                  <div className="w-16 h-16 bg-primary/10 text-primary rounded-xl flex items-center justify-center mx-auto group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}