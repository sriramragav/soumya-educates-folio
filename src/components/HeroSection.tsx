import { Button } from '@/components/ui/button';
import { Download, FileText } from 'lucide-react';
import soumyaHeadshot from '@/assets/SoumyaSpeaking.jpeg';

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="section-container">
        <div className="text-center space-y-8">
          <div className="relative inline-block">
            <img
              src={soumyaHeadshot}
              alt="Soumya Mulubagula"
              className="w-48 h-48 mx-auto rounded-full object-cover shadow-elegant"
            />
            <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium shadow-soft">
              Educationist
            </div>
          </div>
          
          <div className="space-y-4">
            <h1 className="hero-text">
              Transforming Education - With Expertise and Empathy
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Engineer, Manager, and Educator dedicated to making Math and Physics engaging across CBSE, IB, IGCSE, and global curricula.  Passionate about fostering curiosity, building resilience, and creating learner-centric environments that empower every student to succeed.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="gap-2">
              <Download className="h-5 w-5" />
              Download Resume
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <FileText className="h-5 w-5" />
              View Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
