import { GraduationCap, Building, Users, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useRef, useState } from 'react';

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
  const scrollRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section id="experience" className="py-16">
      <div className="section-container">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Professional Journey</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A timeline of educational excellence and transformative leadership
          </p>
        </div>
        {/* Outer container hides horizontal scroll, buttons show on hover */}
        <div
          className="relative max-w-6xl mx-auto overflow-x-hidden"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Button
            variant="outline"
            size="icon"
            onClick={scrollLeft}
            className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-10 h-10 w-10 transition-opacity duration-300 ${
              hovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            aria-label="Scroll Left"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-hidden overflow-y-hidden scroll-smooth px-12 py-3"
            style={{ scrollBehavior: 'smooth' }}
          >
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <Card
                  key={index}
                  className="flex-shrink-0 w-[300px] md:w-[400px] max-h-[440px] flex flex-col bg-card shadow-elegant"
                >
                  <CardContent className="flex flex-col h-full p-5">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="bg-primary text-primary-foreground p-3 rounded-lg flex-shrink-0">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1 flex flex-col h-full">
                        <div className="text-sm font-medium text-primary mb-1">{exp.year}</div>
                        <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                        <p className="text-accent font-medium mb-3">{exp.organization}</p>
                        {/* Combined bullets + highlights scrollable */}
                        <div className="flex-1 overflow-y-auto pr-2 mb-2 max-h-[240px] flex flex-col">
                          <div className="space-y-2 mb-4">
                            {exp.bullets.map((bullet, i) => (
                              <div key={i} className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-primary rounded-full mt-1 flex-shrink-0"></div>
                                <p className="text-muted-foreground text-sm leading-relaxed">{bullet}</p>
                              </div>
                            ))}
                          </div>
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
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={scrollRight}
            className={`absolute right-0 top-1/2 transform -translate-y-1/2 z-10 h-10 w-10 transition-opacity duration-300 ${
              hovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            aria-label="Scroll Right"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
