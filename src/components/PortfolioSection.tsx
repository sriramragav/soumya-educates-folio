import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Award, Users, Lightbulb, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

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
    title: 'B.Ed in Math and English',
    institution: 'Sri Bharathi College of Education',
    year: '2018',
    type: 'Degree'
  },
  {
    title: 'M.B.A in Marketing',
    institution: 'SPMVV College, Tirupati',
    year: '2002',
    type: 'Degree'
  },
  {
    title: 'B.E in Mechanical',
    institution: 'SV University, Tirupati',
    year: '2000',
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

function debounce(func: (...args: any[]) => void, wait: number) {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

export default function PortfolioSection() {
  // Scroll refs & state for certs and subjects sections
  const certsRef = useRef<HTMLDivElement>(null);
  const subjectsRef = useRef<HTMLDivElement>(null);

  const [certCardFullWidth, setCertCardFullWidth] = useState(0);
  const [certCurrentIndex, setCertCurrentIndex] = useState(0);
  const [certCanScrollLeft, setCertCanScrollLeft] = useState(false);
  const [certCanScrollRight, setCertCanScrollRight] = useState(true);

  const [subjCardFullWidth, setSubjCardFullWidth] = useState(0);
  const [subjCurrentIndex, setSubjCurrentIndex] = useState(0);
  const [subjCanScrollLeft, setSubjCanScrollLeft] = useState(false);
  const [subjCanScrollRight, setSubjCanScrollRight] = useState(true);

  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile, measure card full width including gap for both sections
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);

      // Measure certifications card full width
      if (certsRef.current) {
        const container = certsRef.current;
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
          setCertCardFullWidth(cardWidth + gapWidth);
        }
      }

      // Measure subjects card full width
      if (subjectsRef.current) {
        const container = subjectsRef.current;
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
          setSubjCardFullWidth(cardWidth + gapWidth);
        }
      }
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Update scroll button states and current index - generic helper for both sections
  function setupScrollListeners(
    ref: React.RefObject<HTMLDivElement>,
    cardFullWidth: number,
    setCanScrollLeft: React.Dispatch<React.SetStateAction<boolean>>,
    setCanScrollRight: React.Dispatch<React.SetStateAction<boolean>>,
    setCurrentIndex: React.Dispatch<React.SetStateAction<number>>
  ) {
    useEffect(() => {
      if (!ref.current) return;
      const container = ref.current;

      const updateScroll = debounce(() => {
        const { scrollLeft, scrollWidth, clientWidth } = container;
        setCanScrollLeft(scrollLeft > 5);
        setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
        if (cardFullWidth > 0) {
          const idx = Math.round(scrollLeft / cardFullWidth);
          setCurrentIndex(idx);
        }
      }, 100);

      container.addEventListener('scroll', updateScroll);
      updateScroll(); // initial update

      return () => {
        container.removeEventListener('scroll', updateScroll);
      };
    }, [cardFullWidth, ref, setCanScrollLeft, setCanScrollRight, setCurrentIndex]);
  }

  // Setup scroll listeners for both sections
  setupScrollListeners(certsRef, certCardFullWidth, setCertCanScrollLeft, setCertCanScrollRight, setCertCurrentIndex);
  setupScrollListeners(subjectsRef, subjCardFullWidth, setSubjCanScrollLeft, setSubjCanScrollRight, setSubjCurrentIndex);

  // Scroll to a specific index in a section
  function scrollToIndex(ref: React.RefObject<HTMLDivElement>, cardFullWidth: number, idx: number) {
    if (ref.current) {
      ref.current.scrollTo({ left: cardFullWidth * idx, behavior: 'smooth' });
    }
  }

  // Navigation handlers for certifications
  const certScrollLeft = () => {
    const newIndex = Math.max(certCurrentIndex - 1, 0);
    setCertCurrentIndex(newIndex);
    scrollToIndex(certsRef, certCardFullWidth, newIndex);
  };
  const certScrollRight = () => {
    const newIndex = Math.min(certCurrentIndex + 1, certifications.length - 1);
    setCertCurrentIndex(newIndex);
    scrollToIndex(certsRef, certCardFullWidth, newIndex);
  };

  // Navigation handlers for subjects
  const subjScrollLeft = () => {
    const newIndex = Math.max(subjCurrentIndex - 1, 0);
    setSubjCurrentIndex(newIndex);
    scrollToIndex(subjectsRef, subjCardFullWidth, newIndex);
  };
  const subjScrollRight = () => {
    const newIndex = Math.min(subjCurrentIndex + 1, subjects.length - 1);
    setSubjCurrentIndex(newIndex);
    scrollToIndex(subjectsRef, subjCardFullWidth, newIndex);
  };

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
        <div className="mb-14">
          <h3 className="text-2xl font-bold mb-8 text-center">Degrees & Certifications</h3>
          <div className="relative max-w-7xl mx-auto">
            {/* Left button */}
            <button
              aria-label="Scroll Left Certifications"
              onClick={certScrollLeft}
              disabled={!certCanScrollLeft}
              className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 rounded bg-indigo-700 text-white shadow-lg p-3 opacity-80 hover:opacity-100 disabled:bg-indigo-400 disabled:opacity-60 disabled:cursor-not-allowed`}
            >
              <ChevronLeft size={20} />
            </button>
            {/* Cards */}
            <div
              ref={certsRef}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth px-12 scrollbar-hide"
              style={{ scrollSnapType: 'x mandatory' }}
            >
              {certifications.map((cert, index) => (
                <Card 
                  key={index} 
                  className="flex-shrink-0 snap-center hover:shadow-elegant transition-shadow"
                  style={{ minWidth: '280px', maxWidth: '320px' }}
                >
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
            {/* Right button */}
            <button
              aria-label="Scroll Right Certifications"
              onClick={certScrollRight}
              disabled={!certCanScrollRight}
              className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 rounded bg-indigo-700 text-white shadow-lg p-3 opacity-80 hover:opacity-100 disabled:bg-indigo-400 disabled:opacity-60 disabled:cursor-not-allowed`}
            >
              <ChevronRight size={20} />
            </button>

            {/* Dots for mobile */}
            {isMobile && (
              <div className="flex justify-center mt-4 space-x-3">
                {certifications.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setCertCurrentIndex(idx);
                      scrollToIndex(certsRef, certCardFullWidth, idx);
                    }}
                    aria-label={`Go to certification ${idx + 1}`}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      idx === certCurrentIndex ? 'bg-indigo-700' : 'bg-indigo-300'
                    }`}
                    aria-current={idx === certCurrentIndex ? 'true' : undefined}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Core Specializations */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Core Specializations</h3>
          <div className="relative max-w-7xl mx-auto">
            {/* Left button */}
            <button
              aria-label="Scroll Left Specializations"
              onClick={subjScrollLeft}
              disabled={!subjCanScrollLeft}
              className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 rounded bg-indigo-700 text-white shadow-lg p-3 opacity-80 hover:opacity-100 disabled:bg-indigo-400 disabled:opacity-60 disabled:cursor-not-allowed`}
            >
              <ChevronLeft size={20} />
            </button>
            {/* Cards */}
            <div
              ref={subjectsRef}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth px-12 scrollbar-hide"
              style={{ scrollSnapType: 'x mandatory' }}
            >
              {subjects.map((subject, index) => {
                const Icon = subject.icon;
                return (
                  <Card key={index} className="flex-shrink-0 snap-center hover:shadow-elegant transition-shadow" style={{ minWidth: '280px', maxWidth: '320px' }}>
                    <CardContent className="p-6 text-center">
                      <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-8 w-8" />
                      </div>
                      <h4 className="text-lg font-semibold mb-2">{subject.title}</h4>
                      <p className="text-muted-foreground text-sm mb-3 leading-relaxed">{subject.description}</p>
                      <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs">
                        {subject.level}
                      </span>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            {/* Right button */}
            <button
              aria-label="Scroll Right Specializations"
              onClick={subjScrollRight}
              disabled={!subjCanScrollRight}
              className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 rounded bg-indigo-700 text-white shadow-lg p-3 opacity-80 hover:opacity-100 disabled:bg-indigo-400 disabled:opacity-60 disabled:cursor-not-allowed`}
            >
              <ChevronRight size={20} />
            </button>

            {/* Dots for mobile */}
            {isMobile && (
              <div className="flex justify-center mt-4 space-x-3">
                {subjects.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setSubjCurrentIndex(idx);
                      scrollToIndex(subjectsRef, subjCardFullWidth, idx);
                    }}
                    aria-label={`Go to specialization ${idx + 1}`}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      idx === subjCurrentIndex ? 'bg-indigo-700' : 'bg-indigo-300'
                    }`}
                    aria-current={idx === subjCurrentIndex ? 'true' : undefined}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
