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

  // Scroll container scrolled manually or by buttons/dots
  useEffect(() => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;

    const handleScroll = debounce(() => {
      let cardWidth = container.clientWidth;
      if (!isMobile) {
        const firstCard = container.querySelector('div > div');
        if (firstCard instanceof HTMLElement) {
          cardWidth = firstCard.offsetWidth + 24; // 24 = space-x-6 px
        }
      }
      const scrollLeft = container.scrollLeft;
      const idx = Math.round(scrollLeft / cardWidth);
      setCurrentIndex(idx);
    }, 100);

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  // Scroll to current card when index changes programmatically
  useEffect(() => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      let cardWidth = container.clientWidth;
      if (!isMobile) {
        const firstCard = container.querySelector('div > div');
        if (firstCard instanceof HTMLElement) {
          cardWidth = firstCard.offsetWidth + 24;
        }
      }
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
        {/* Header as before */}

        {/* Scroll buttons as before */}

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
          {/* Render cards same as before */}
        </div>

        {/* Dots always visible */}
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
