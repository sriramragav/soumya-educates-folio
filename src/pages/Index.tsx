import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import PortfolioSection from '@/components/PortfolioSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <PortfolioSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <footer className="bg-foreground text-background py-8">
        <div className="section-container text-center">
          <p>&copy; 2024 Soumya Mulubagula. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;