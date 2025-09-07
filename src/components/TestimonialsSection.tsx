import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: 'Dr. Rajesh Kumar',
    position: 'Principal, Modern Public School',
    content: 'Soumya\'s innovative teaching methodologies transformed our mathematics department. Student engagement increased by 60% and test scores improved dramatically.',
    rating: 5,
    image: '👨‍🎓'
  },
  {
    name: 'Ms. Priya Sharma',
    position: 'Director of Education, TechLearn Solutions',
    content: 'Her curriculum development expertise is unparalleled. The programs she designed have been implemented across 50+ institutions with remarkable success.',
    rating: 5,
    image: '👩‍💼'
  },
  {
    name: 'Prof. Anjali Gupta',
    position: 'Head of Academics, Delhi Education Board',
    content: 'Soumya\'s leadership in educational technology integration has set new standards. Her training programs have upskilled hundreds of teachers.',
    rating: 5,
    image: '👩‍🏫'
  },
  {
    name: 'Mr. Vikram Singh',
    position: 'CEO, Learning Excellence Foundation',
    content: 'Working with Soumya was transformative. Her community outreach programs reached over 5000 students and made education accessible to underserved areas.',
    rating: 5,
    image: '👨‍💻'
  },
  {
    name: 'Dr. Meera Nair',
    position: 'Educational Consultant, UNESCO',
    content: 'Soumya brings a unique blend of academic rigor and practical innovation. Her research-backed approaches have influenced policy discussions at the international level.',
    rating: 5,
    image: '👩‍🔬'
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section id="testimonials" className="py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Testimonials</h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-card shadow-elegant">
                    <CardContent className="p-8 text-center">
                      <Quote className="h-12 w-12 text-primary mx-auto mb-6 opacity-60" />
                      
                      <p className="text-lg leading-relaxed mb-6 italic">
                        "{testimonial.content}"
                      </p>
                      
                      <div className="flex justify-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-center space-x-4">
                        <div className="text-4xl">{testimonial.image}</div>
                        <div className="text-left">
                          <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                          <p className="text-muted-foreground">{testimonial.position}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-border'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
