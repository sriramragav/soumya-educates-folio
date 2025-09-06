import { GraduationCap, Building, Users, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const experiences = [
  {
    year: '2020 - Present',
    title: 'Senior Educational Consultant',
    organization: 'EdTech Innovations Pvt. Ltd.',
    description: 'Leading curriculum design and implementation for K-12 schools across multiple states. Developed innovative assessment frameworks that improved student performance by 40%.',
    icon: Building,
    highlights: ['Curriculum Development', 'Teacher Training', 'Assessment Design']
  },
  {
    year: '2017 - 2020',
    title: 'Academic Director',
    organization: 'Bright Future International School',
    description: 'Oversaw academic operations for 1200+ students. Introduced project-based learning methodologies and integrated technology into traditional classroom settings.',
    icon: GraduationCap,
    highlights: ['Academic Leadership', 'Technology Integration', 'Student Outcomes']
  },
  {
    year: '2014 - 2017',
    title: 'Educational Program Manager',
    organization: 'Learning Excellence Foundation',
    description: 'Managed educational programs for underserved communities. Developed and executed literacy programs that reached over 5000 students across rural areas.',
    icon: Users,
    highlights: ['Program Management', 'Community Outreach', 'Literacy Programs']
  },
  {
    year: '2010 - 2014',
    title: 'Senior Teacher & Department Head',
    organization: 'Delhi Public School Network',
    description: 'Led mathematics department and pioneered innovative teaching methods. Mentored 25+ teachers and developed professional development programs.',
    icon: Award,
    highlights: ['Teaching Excellence', 'Mentorship', 'Department Leadership']
  }
];

export default function ExperienceSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => Math.min(experiences.length - 1, prevIndex + 1));
  };

  return (
    <section id="experience" className="py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Professional Journey</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A timeline of educational excellence and transformative leadership
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {experiences.map((exp, index) => {
                const Icon = exp.icon;
                return (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <Card className="bg-card shadow-elegant">
                      <CardContent className="p-8">
                        <div className="flex items-start gap-6">
                          <div className="bg-primary text-primary-foreground p-4 rounded-lg">
                            <Icon className="h-8 w-8" />
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-medium text-primary mb-2">{exp.year}</div>
                            <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                            <p className="text-accent font-medium mb-4">{exp.organization}</p>
                            <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                              {exp.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {exp.highlights.map((highlight, i) => (
                                <span
                                  key={i}
                                  className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm"
                                >
                                  {highlight}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevious}
              disabled={currentIndex === 0}
              className="h-10 w-10"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <span className="text-muted-foreground font-medium">
              {currentIndex + 1} of {experiences.length}
            </span>
            
            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              disabled={currentIndex === experiences.length - 1}
              className="h-10 w-10"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}