import { Button } from '@/components/ui/button';
import React, { useState } from "react";
import { Download, FileText } from 'lucide-react';
import soumyaHeadshot from '@/assets/SoumyaSpeaking.jpeg';
import ResumeModal from "./ResumeModal";

export default function HeroSection() {
  const [open, setOpen] = useState(false);
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 bg-soft-gradient relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-secondary/20 rounded-full blur-2xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent/20 rounded-full blur-lg animate-pulse delay-300"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="text-center space-y-8">
          <div className="relative inline-block group">
            <div className="absolute inset-0 bg-glow-gradient rounded-full blur-md opacity-30 group-hover:opacity-50 transition-opacity"></div>
            <img
              src={soumyaHeadshot}
              alt="Soumya Mulubagula"
              className="relative w-48 h-48 mx-auto rounded-full object-cover shadow-glow border-4 border-white/50 group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute -bottom-4 -right-4 bg-accent-gradient text-accent-foreground px-4 py-2 rounded-full text-sm font-medium shadow-glow animate-bounce">
              ✨ Educationist ✨
            </div>
          </div>
          
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl mx-auto text-center">
              <span className="bg-hero-gradient bg-clip-text text-transparent animate-pulse">
                Educator (B.Ed.) by Choice
              </span>
              <br />
              <span className="text-2xl md:text-3xl font-medium text-primary/80 mt-2 block">
                Engineer (B.E.) and Administrator (M.B.A.) by Qualification
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              <span className="font-semibold text-secondary">15+ years</span> of teaching & leadership, 
              enriched by <span className="font-semibold text-accent">global experience</span> in the US 🌟
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="hero"
              size="lg"
              className="gap-2"
              asChild
            >
              <a href="/assets/SoumyaResume.pdf" download>
                <Download className="h-5 w-5" />
                Download Resume
              </a>
            </Button>

            <Button variant="outline" size="lg" className="gap-2" onClick={() => setOpen(true)}>
              <FileText className="h-5 w-5" />
                View Resume
            </Button>

            <ResumeModal open={open} onOpenChange={setOpen} />
            
          </div>
        </div>
      </div>
    </section>
  );
}
