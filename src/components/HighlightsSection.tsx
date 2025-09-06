import { useRef, useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const highlightsAndSkills = [
  {
    title: 'Educational Leadership & Mentorship',
    icon: '👩‍🏫',
    description:
      'Rose from teacher to Vice Principal in 2 years, successfully managing and mentoring a team of over 30 educators.',
  },
  {
    title: 'Admissions Success Rate',
    icon: '🎯',
    description:
      'Converted 70% of enquiries into admissions, building strong trust with parents and families.',
  },
  {
    title: 'Student Development & Guidance',
    icon: '🎓',
    description:
      'Mentored students across kindergarten to grade 12 in IB, IGCSE, and other curricula, fostering academic excellence.',
  },
  {
    title: 'Academic Content Development',
    icon: '📚',
    description:
      'Designed math workbooks and revision materials for grades 1-8, contributing to curriculum planning and execution.',
  },
  {
    title: 'Operational Excellence & Innovation',
    icon: '⚙️',
    description:
      'Streamlined school processes and led initiatives like newsletters that enhanced community engagement.',
  },
  {
    title: 'Wellness & Holistic Leadership',
    icon: '🧘‍♀️',
    description:
      'Certified Level 1 Pranic Healer; conducted pranayama and mindfulness sessions promoting student wellness.',
  },
  {
    title: 'Learner-Centered Teaching',
    icon: '🌱',
    description:
      'Committed to inquiry-based, differentiated instruction that nurtures critical thinking and personalized learning.',
  },
  {
    title: 'Curriculum & Assessment Design',
    icon: '🗂️',
    description:
      'Experienced in creating diverse assessments aligned with international standards for Math and Physics.',
  },
  {
    title: 'Effective Communication & Relationship Building',
    icon: '🗣️',
    description:
      'Strong communicator with a proven track record in engaging students, parents, and academic teams.',
  },
];

function debounce(func: () => void, wait: number) {
  let timeout: ReturnType<typeof setTimeout>;
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(func, wait);
  };
}

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

  // Improved scroll handler
  useEffect(() => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;

    const handleScroll = debounce(() => {
      if (!container) return;
      const scrollLeft = container.scrollLeft;

      // Measure card width including margin
      const cards = container.children;
      if (!cards || cards.length === 0) return;
      const firstCard = cards[0] as HTMLElement;
      const cardRect = firstCard.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      // Calculate card full width (including right margin/gap)
      const cardWidth = cardRect.width;
      let gapWidth = 0;

      if (cards.length > 1) {
        const secondCard = cards[1] as HTMLElement;
        const gap = secondCard.offsetLeft - firstCard.offsetLeft - cardWidth;
        gapWidth = gap > 0 ? gap : 0;
      }

      const fullCardWidth = cardWidth + gapWidth;

      // Calculate index by dividing scrollLeft by full card width
      let idx = Math.round(scrollLeft / fullCardWidth);
      // Clamp idx in valid range
      idx = Math.min(Math.max(idx, 0), highlightsAndSkills.length - 1);

      setCurrentIndex(idx);
    }, 100);

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  // Scroll to current card when index changes programmatically
  useEffect(() => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cards = container.children;
    if (!cards || cards.length === 0) return;
    const firstCard = cards[0] as HTMLElement;
    const cardRect = firstCard.getBoundingClientRect();

    // Calculate card full width including gap
    let gapWidth = 0;
    if (cards.length > 1) {
      const secondCard = cards[1] as HTMLElement;
      gapWidth = secondCard.offsetLeft - firstCard.offsetLeft - cardRect.width;
      if (gapWidth < 0) gapWidth = 0;
    }
    const fullCardWidth = cardRect.width + gapWidth;

    container.scrollTo({ left: fullCardWidth * currentIndex, behavior: 'smooth' });
  }, [currentIndex]);

  function scrollLeft() {
    setCurrentIndex((idx) => Math.max(0, idx - 1));
  }

  function scrollRight() {
    setCurrentIndex((idx) => Math.min(highlightsAndSkills.length - 1, idx + 1));
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
            Career Highlights & Strengths
          </h2>
          <div className="mx-auto w-24 h-1 rounded-full bg-gradient-to-r from-indigo-400 to-purple-600 shadow-md" />
        </header>

        {/* Scroll buttons */}
        <button
          onClick={scrollLeft}
          aria-label="Scroll left"
          disabled={currentIndex === 0}
          className={`absolute left-2 top-1/2 -translate-y-1/2 z-20 p-3 bg-indigo-700 bg-opacity-80 text-white rounded-full shadow-lg hover:bg-indigo-800 disabled:opacity-40 disabled:cursor-not-allowed transition`}
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onClick={scrollRight}
          aria-label="Scroll right"
          disabled={currentIndex === highlightsAndSkills.length - 1}
          className={`absolute right-2 top-1/2 -translate-y-1/2 z-20 p-3 bg-indigo-700 bg-opacity-80 text-white rounded-full shadow-lg hover:bg-indigo-800 disabled:opacity-40 disabled:cursor-not-allowed transition`}
        >
          <ChevronRight size={28} />
        </button>

        {/* Scrollable container */}
        <div
          ref={scrollRef}
          className={`flex overflow-x-auto space-x-6 scrollbar-hide px-6`}
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {highlightsAndSkills.map(({ title, icon, description }, idx) => (
            <Card
              key={idx}
              className={`flex-shrink-0 bg-white backdrop-blur-sm bg-opacity-90 border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 min-w-[280px] max-w-[320px] snap-start`}
            >
              <CardContent className="flex flex-col items-center text-center p-8 space-y-6 h-full">
                <div className="text-6xl">{icon}</div>
                <h3 className="text-xl font-semibold text-indigo-800">{title}</h3>
                <p className="text-sm text-gray-700 flex-grow">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Dots navigation */}
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
      </div>
    </section>
  );
}
