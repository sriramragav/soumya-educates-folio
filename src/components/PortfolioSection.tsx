import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Award, Users, Lightbulb } from 'lucide-react';

const subjects = [
  {
    title: 'Mathematics Education',
    description: 'Advanced pedagogical approaches to teaching complex mathematical concepts',
    icon: BookOpen,
    level: 'K-12 & Higher Education'
  },
  {
    title: 'Curriculum Development',
    description: 'Designing comprehensive educational programs aligned with learning outcomes',
    icon: Lightbulb,
    level: 'Institutional Level'
  },
  {
    title: 'Educational Technology',
    description: 'Integration of digital tools and platforms in modern learning environments',
    icon: Users,
    level: 'All Levels'
  },
  {
    title: 'Teacher Training',
    description: 'Professional development programs for educational excellence',
    icon: Award,
    level: 'Professional Development'
  }
];

const certifications = [
  {
    title: 'Ph.D. in Educational Psychology',
    institution: 'Indian Institute of Education',
    year: '2015',
    type: 'Degree'
  },
  {
    title: 'M.Ed. in Curriculum & Instruction',
    institution: 'Delhi University',
    year: '2010',
    type: 'Degree'
  },
  {
    title: 'Certified Educational Technology Leader',
    institution: 'EdTech Council of India',
    year: '2019',
    type: 'Certification'
  },
  {
    title: 'International Teaching Excellence Award',
    institution: 'Global Education Forum',
    year: '2021',
    type: 'Award'
  }
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 bg-soft-gradient">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Areas of Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Specialized knowledge and proven track record across diverse educational domains
          </p>
        </div>


        {/* Degrees & Certifications */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Degrees & Certifications</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="hover:shadow-elegant transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold mb-1">{cert.title}</h4>
                      <p className="text-muted-foreground">{cert.institution}</p>
                    </div>
                    <div className="text-right">
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm">
                        {cert.year}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs ${
                      cert.type === 'Degree' 
                        ? 'bg-accent text-accent-foreground'
                        : cert.type === 'Award'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-secondary text-secondary-foreground'
                    }`}>
                      {cert.type}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <br /><br />

        {/* Subjects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Core Specializations</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {subjects.map((subject, index) => {
              const Icon = subject.icon;
              return (
                <Card key={index} className="hover:shadow-elegant transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">{subject.title}</h4>
                    <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                      {subject.description}
                    </p>
                    <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs">
                      {subject.level}
                    </span>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
