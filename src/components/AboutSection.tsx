import { Play } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-soft-gradient">
      <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Soumya</h2>
      </div>

      <br />
      <div className="section-container max-w-4xl mx-auto">
        <div className="flex flex-col gap-12 items-center">
          {/* Video Section */}
          <div className="relative w-full max-w-3xl">
            <div className="aspect-video bg-muted rounded-lg shadow-soft flex items-center justify-center group cursor-pointer hover:shadow-elegant transition-shadow">
              <div className="text-center space-y-4">
                <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <Play className="h-8 w-8 ml-1" />
                </div>
                <p className="text-muted-foreground">Watch Introduction Video</p>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6 text-center">
            <div className="space-y-6 text-lg leading-relaxed max-w-3xl mx-auto text-muted-foreground">
              <p>
                My journey into education has been shaped by an unusual academic path —
                an engineering degree (B.E.) and a management qualification (M.B.A.)
                that might have led me into the corporate world, followed by a B.Ed.
                that anchored my choice to teach. That blend of technical rigor,
                organizational perspective, and pedagogy has become the foundation of my work as an educator.
              </p>
              
              <p>
                Today, I teach Physics to Classes VIII–X at the Narayana Group of Institutions,
                an environment known for its rigorous focus on IIT-JEE preparation. In this role,
                I strive to simplify complex concepts, sharpen problem-solving skills, and nurture
                curiosity, so that students grow not only as exam-ready learners but as confident thinkers.
              </p>
              
              <p>
                Over the past 15+ years, I have also served as vice principal, academic coordinator,
                online tutor, and curriculum content creator. Living in the US broadened my perspective
                further, exposing me to diverse cultures and teaching approaches. Across all these
                experiences, one belief has stayed constant: education is most powerful when it combines
                clarity, empathy, and resilience — preparing young people to thrive both in the classroom and beyond.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
