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
  year: 'Jul 2018 - Oct 2023',
  title: 'Freelance & Online Math & Physics Instructor',
  organization: 'Self-employed / Catalyze Center for Learning / Vidyalai',
  bullets: [
    'Tutored Math & Physics online for IB, IGCSE, ICSE, CBSE, Edexcel, Australian, New Zealand, and Singapore curricula (Grades 8–12).',
    'Guided students through past papers, assessments, and board exam preparation to strengthen concept application.',
    'Developed concepts, experimental procedures, and mathematical modeling for IBDP IA projects (HL & SL).',
    'Designed academic assessments, trained teachers, and created individualized study plans for students.',
    'Provided solutions, one-on-one guidance, and periodic tests to address grey areas and improve performance.'
  ],
  icon: Users,
  highlights: ['Online Tutoring','Curriculum Design','Concept Development','Assessment & Feedback','Personalized Learning','IBDP IA Mentorship']
},

{
  year: 'Jun 2017 - Mar 2018',
  title: 'Academic Coordinator',
  organization: 'Edify, Ecity, Bengaluru',
  bullets: [
    'Managed and mentored a team of teachers (Grades 1–6).',
    'Conducted classes across subjects as per organizational requirements.',
    'Observed classes and provided structured, constructive feedback to teachers.',
    'Facilitated PTMs, documented feedback, and implemented policies to enhance academic performance.',
    'Conducted parent induction programs and educated parents on teaching methodologies and assessment procedures.',
    'Counseled students on disciplinary and academic concerns.',
    'Coordinated with head office for teacher training programs and compliance documentation.'
  ],
  icon: Building,
  highlights: ['Teacher Management','Class Observation & Feedback','Parent Engagement','Policy Implementation','Student Counseling','Teacher Training Coordination']
},
{
  year: 'Dec 2014 - Sep 2016',
  title: 'Early Years Educator',
  organization: 'TVS Academy',
  bullets: [
    'Facilitated English, EVS, Math, and Montessori sessions for kindergarten and Class I students.',
    'Designed physical and cognitive activities to enhance fine, gross, and large motor skills.',
    'Identified behavioral challenges and applied targeted interventions using physical movement and learning style analysis (Auditory, Visual, Kinesthetic).',
    'Implemented feedback from workshops on child psychology and teacher development to improve teaching methodology.',
    'Conducted morning meditation, pranayama sessions, and wellness activities for students (Class VI–XII).',
    'Implemented whole language program and group assignments to enrich vocabulary and learning engagement.'
  ],
  icon: Users,
  highlights: ['Early Childhood Education','Montessori Facilitation','Behavioral Assessment','Wellness & Mindfulness','Curriculum Implementation','Student Engagement']
},
{
  year: 'May 2010 - Aug 2013',
  title: 'Vice Principal & Academic Leader',
  organization: 'Mount Litera Zee School',
  bullets: [
    'Started as an Illume-certified KG teacher, facilitating early years learning and Montessori sessions.',
    'Handled admissions enquiries, educated parents about curriculum, and processed applications.',
    'Organized and conducted teacher training programs, enhancing computer literacy and teaching skills.',
    'Managed school administration: inventory, records, fee collection, ESI/PF proceedings, and supervision of staff.',
    'Played a key role in marketing, brand-building events, and as MC for "Mount Litera Fest".',
    'Interviewed potential employees, supervised demo/observation classes, and onboarded teaching/admin staff.',
    'Planned budgets, school events, and parent induction sessions end-to-end.',
    'Taught Mathematics for pre-primary classes while facilitating hiring of permanent staff.',
    'Acted as single point of contact for parent concerns regarding academics, behavior, and transport.',
    'Framed and implemented school policies and procedures in alignment with Zee Learn guidelines.',
    'Managed entrance exams, evaluations, and assessments for student admissions.',
    'Active member of the Blue Ribbon program addressing child protection and safety.'
  ],
  icon: Building,
  highlights: ['Leadership & Administration','Teacher Training','Admissions & Parent Engagement','Curriculum Implementation','Event & Budget Management','Student Safety & Welfare','Staff Recruitment & Mentorship']
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
