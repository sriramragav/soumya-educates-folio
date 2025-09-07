import { useRef, useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  BookOpen,
  Award,
  Users,
  Lightbulb,
  Globe,
  MonitorCheck,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const highlightsAndSkills = [
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
    icon: ChevronRight, // You can swap this with a better icon if you want
    description:
      'Achieved a 70% enquiry-to-admission conversion rate by building trustful relationships with families and reinforcing institutional reputation.',
  },
  {
    title: 'Operational Excellence',
    icon: MonitorCheck,
    description:
      'Led initiatives to improve school processes and community engagement including newsletters and resource management.',
  },
];

export default function ScrollableHighlightsAndSkills() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (scrollRef.current && isMobile) {
      const container = scrollRef.current;
      const cardWidth = container.clientWidth;
      container.scrollTo({ left: cardWidth * currentIndex, behavior: 'smooth' });
    }
  }, [currentIndex, isMobile]);

  function scrollLeft() {
    if (isMobile) {
      setCurrentIndex((idx) => Math.max(0, idx - 1));
    } else if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  }

  function scrollRight() {
    if (isMobile) {
      setCurrentIndex((idx) => Math.min(highlightsAndSkills.length - 1, idx + 1));
    } else if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  }

  function goToIndex(idx: number) {
    setCurrentIndex(idx);
  }

  return (
    <section
      id="highlights"
      className="relative py-20 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <header className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-indigo-700 mb-2">
            Career Highlights
          </h2>
          <div className="mx-auto w-24 h-1 rounded-full bg-gradient-to-r from-indigo-400 to-purple-600 shadow-md" />
        </header>

        {/* Scroll buttons */}
        <button
          onClick={scrollLeft}
          aria-label="Scroll left"
          disabled={isMobile ? currentIndex === 0 : false}
          className={`absolute left-2 top-1/2 -translate-y-1/2 z-20 p-3 bg-indigo-700 bg-opacity-80 text-white rounded-full shadow-lg hover:bg-indigo-800 disabled:opacity-40 disabled:cursor-not-allowed transition`}
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onClick={scrollRight}
          aria-label="Scroll right"
          disabled={isMobile ? currentIndex === highlightsAndSkills.length - 1 : false}
          className={`absolute right-2 top-1/2 -translate-y-1/2 z-20 p-3 bg-indigo-700 bg-opacity-80 text-white rounded-full shadow-lg hover:bg-indigo-800 disabled:opacity-40 disabled:cursor-not-allowed transition`}
        >
          <ChevronRight size={28} />
        </button>

        {/* Scrollable container */}
        <div
          ref={scrollRef}
          className={`
            flex
            ${isMobile ? 'overflow-hidden' : 'overflow-x-auto'}
            space-x-6 scrollbar-hide
            ${isMobile ? 'snap-x snap-mandatory' : ''}
            px-6
          `}
        >
          {highlightsAndSkills.map(({ title, icon, description }, idx) => (
            <Card
              key={idx}
              className={`
                flex-shrink-0 bg-white backdrop-blur-sm bg-opacity-90 border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300
                ${isMobile ? 'w-full snap-start' : 'min-w-[280px] max-w-[320px]'}
              `}
            >
              <CardContent className="flex flex-col items-center text-center p-8 space-y-6 h-full">
                <div className="text-6xl">{icon}</div>
                <h3 className="text-xl font-semibold text-indigo-800">{title}</h3>
                <p className="text-sm text-gray-700 flex-grow">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Dots navigation only on mobile */}
        {isMobile && (
          <div className="flex justify-center mt-6 space-x-3">
            {highlightsAndSkills.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToIndex(idx)}
                aria-label={`Go to card ${idx + 1}`}
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
