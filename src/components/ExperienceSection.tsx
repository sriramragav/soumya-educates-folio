import { Building, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useRef, useState, useEffect } from 'react';

const experiences = [
  {
    year: 'Nov 2023 - Present',
    title: 'Academic Content Creator',
    organization: 'Velammal Knowledge Park',
    bullets: [
      'Authored Math workbooks (Grades 1–8) & created revision/test flashcards.',
      'Reviewed Physics content and provided constructive feedback to team.',
      'Planned & implemented curriculum, including bridge courses for primary grades.',
      'Trained teachers & collaborated with LMS team for online concept revisions.',
    ],
    highlights: ['Curriculum Design','Content Creation','Teacher Training','Quality Review','LMS Coordination'],
  },
  {
    year: 'Jul 2018 - Oct 2023',
    title: 'Freelance & Online Math & Physics Instructor',
    organization: 'Self-employed / Catalyze Center for Learning / Vidyalai',
    bullets: [
      'Tutored Math & Physics online for multiple curricula (Grades 8–12).',
      'Guided students through past papers, assessments, and exam prep.',
      'Developed concepts and mathematical modeling for IBDP IA projects (HL & SL).',
      'Designed academic assessments and training for teachers.',
      'Provided personalized guidance and periodic evaluations.',
    ],
    highlights: ['Online Tutoring','Curriculum Design','Concept Development','Assessment & Feedback','Personalized Learning','IBDP IA Mentorship'],
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
      'Coordinated with head office for teacher training programs and compliance documentation.',
    ],
    highlights: ['Teacher Management','Class Observation & Feedback','Parent Engagement','Policy Implementation','Student Counseling','Teacher Training Coordination'],
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
      'Implemented whole language program and group assignments to enrich vocabulary and learning engagement.',
    ],
    highlights: ['Early Childhood Education','Montessori Facilitation','Behavioral Assessment','Wellness & Mindfulness','Curriculum Implementation','Student Engagement'],
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
      'Active member of the Blue Ribbon program addressing child protection and safety.',
    ],
    highlights: ['Leadership & Administration','Teacher Training','Admissions & Parent Engagement','Curriculum Implementation','Event & Budget Management','Student Safety & Welfare','Staff Recruitment & Mentorship'],
  },
];

function debounce(func: (...args: any[]) => void, wait: number) {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

export default function ExperienceSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [cardFullWidth, setCardFullWidth] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Detect mobile and measure card full width (card + gap)
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
      // Measure card full width including gap for desktop
      if (scrollRef.current) {
        const container = scrollRef.current;
        const cards = container.children;
        if (cards.length > 0) {
          const firstCard = cards[0] as HTMLElement;
          const cardWidth = firstCard.offsetWidth;
          let gapWidth = 0;
          if (cards.length > 1) {
            const secondCard = cards[1] as HTMLElement;
            gapWidth = secondCard.offsetLeft - firstCard.offsetLeft - cardWidth;
            if (gapWidth < 0) gapWidth = 0;
          }
          setCardFullWidth(cardWidth + gapWidth);
        }
      }
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Update buttons enabled state based on scroll position
  useEffect(() => {
    function updateScrollButtons() {
      if (!scrollRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 5); // small buffer for rounding
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
    }

    if (scrollRef.current) {
      updateScrollButtons();
      scrollRef.current.addEventListener('scroll', updateScrollButtons);
      return () => scrollRef.current?.removeEventListener('scroll', updateScrollButtons);
    }
  }, []);

  // Update currentIndex on scroll to sync dots
  useEffect(() => {
    if (!scrollRef.current || cardFullWidth === 0) return;
    const container = scrollRef.current;

    const onScroll = debounce(() => {
      const scrollLeft = container.scrollLeft;
      const idx = Math.round(scrollLeft / cardFullWidth);
      setCurrentIndex(idx);
    }, 100);

    container.addEventListener('scroll', onScroll);
    return () => container.removeEventListener('scroll', onScroll);
  }, [cardFullWidth]);

  // Scroll to desired card index (for dots and navigation)
  function goToIndex(idx: number) {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: cardFullWidth * idx, behavior: 'smooth' });
      setCurrentIndex(idx);
    }
  }

  const scrollLeft = () => {
    if (scrollRef.current) {
      const newIndex = Math.max(currentIndex - 1, 0);
      goToIndex(newIndex);
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const newIndex = Math.min(currentIndex + 1, experiences.length - 1);
      goToIndex(newIndex);
    }
  };

  return (
    <section id="experience" className="py-16">
      <div className="section-container">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Professional Journey</h2>
        </div>
        <div className="relative max-w-6xl mx-auto overflow-x-hidden">
          <Button
            variant="outline"
            size="icon"
            onClick={scrollLeft}
            className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-10 h-10 w-10 rounded bg-indigo-700 text-white shadow-lg opacity-80 hover:opacity-100 disabled:bg-indigo-400 disabled:opacity-60 disabled:cursor-not-allowed`}
            aria-label="Scroll Left"
            disabled={!canScrollLeft}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div 
            ref={scrollRef}
            className="flex gap-4 overflow-x-scroll scrollbar-hide snap-x snap-mandatory scroll-smooth px-4"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {experiences.map((exp, index) => (
              <Card 
                key={index}
                className="flex-shrink-0 snap-center bg-card shadow-elegant"
                style={{ width: '90vw', maxWidth: '400px', maxHeight: '440px', scrollSnapAlign: 'center' }}
              >
                <CardContent className="flex flex-col h-full p-5">
                  <div className="flex flex-col h-full">
                    <div className="text-sm font-medium text-primary mb-1">{exp.year}</div>
                    <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                    <p className="text-accent font-medium mb-3">{exp.organization}</p>
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
                </CardContent>
              </Card>
            ))}
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={scrollRight}
            className={`absolute right-0 top-1/2 transform -translate-y-1/2 z-10 h-10 w-10 rounded bg-indigo-700 text-white shadow-lg opacity-80 hover:opacity-100 disabled:bg-indigo-400 disabled:opacity-60 disabled:cursor-not-allowed`}
            aria-label="Scroll Right"
            disabled={!canScrollRight}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Dots navigation: only show on mobile */}
        {isMobile && (
          <div className="flex justify-center mt-6 space-x-3">
            {experiences.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToIndex(idx)}
                aria-label={`Go to experience ${idx + 1}`}
                className={`w-3 h-3 rounded-full transition-colors ${
                  idx === currentIndex ? 'bg-indigo-700' : 'bg-indigo-300'
                }`}
                aria-current={idx === currentIndex ? 'true' : undefined}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
