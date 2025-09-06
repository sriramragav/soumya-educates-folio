import { GraduationCap, Building, Users, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useState } from 'react';

const experiences = [
  {
    year: 'Nov 2023 - Present',
    title: 'Academic Content Creator',
    organization: 'Velammal Knowledge Park',
    bullets: [
      'Authored Math workbooks (Grades 1–8) & created revision/test flashcards.',
      'Reviewed Physics content and provided constructive feedback to team.',
      'Planned & implemented curriculum, including bridge courses for primary grades.',
      'Trained teachers & collaborated with LMS team for online concept revisions.'
    ],
    icon: Building,
    
    highlights: ['Curriculum Design','Content Creation','Teacher Training','Quality Review','LMS Coordination']
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

        <div className="relative max-w-5xl mx-auto">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 90}%)` }} // 90% width for partial peek
            >
              {experiences.map((exp, index) => {
                const Icon = exp.icon;
                return (
                  <div key={index} className="flex-shrink-0 w-[85%] md:w-[45%] px-3">
                    <Card className="bg-card shadow-elegant max-h-[450px] md:max-h-[500px] flex flex-col">
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="flex items-start gap-4 flex-1">
                          <div className="bg-primary text-primary-foreground p-3 rounded-lg flex-shrink-0">
                            <Icon className="h-6 w-6" />
                          </div>
                          <div className="flex-1 flex flex-col h-full">
                            <div className="text-sm font-medium text-primary mb-1">{exp.year}</div>
                            <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                            <p className="text-accent font-medium mb-3">{exp.organization}</p>

                            {exp.bullets ? (
                              <ScrollArea className="flex-1 mb-4 pr-2">
                                <div className="space-y-2">
                                  {exp.bullets.map((bullet, i) => (
                                    <div key={i} className="flex items-start gap-2">
                                      <div className="w-2 h-2 bg-primary rounded-full mt-1 flex-shrink-0"></div>
                                      <p className="text-muted-foreground leading-relaxed text-sm">{bullet}</p>
                                    </div>
                                  ))}
                                </div>
                              </ScrollArea>
                            ) : (
                              <p className="text-muted-foreground mb-4 leading-relaxed text-sm flex-1">
                                {exp.description}
                              </p>
                            )}

                            <div className="flex flex-wrap gap-2 mt-auto">
                              {exp.highlights.map((highlight, i) => (
                                <span
                                  key={i}
                                  className="bg-secondary text-secondary-foreground px-2 py-1 rounded-full text-xs"
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
            
            {/* Dots */}
            <div className="flex gap-2">
              {experiences.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors border-2 ${
                    currentIndex === index ? 'bg-primary border-primary' : 'bg-white border-gray-400'
                  }`}
                />
              ))}
            </div>
            
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
