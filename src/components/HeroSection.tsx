import { Button } from '@/components/ui/button';
import React, { useState } from "react";
import { Download, FileText } from 'lucide-react';
import soumyaHeadshot from '@/assets/SoumyaSpeaking.jpeg';
import ResumeModal from "./ResumeModal";

export default function HeroSection() {
  const [open, setOpen] = useState(false);
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 bg-soft-gradient relative">
      <div className="section-container">
        <div className="text-center space-y-8">
          <div className="relative inline-block group">
            <img
              src={soumyaHeadshot}
              alt="Soumya Mulubagula"
              className="w-48 h-48 mx-auto rounded-full object-cover shadow-elegant border-4 border-white group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium shadow-soft">
              Educationist
            </div>
          </div>
          
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl mx-auto text-center">
              <span className="bg-hero-gradient bg-clip-text text-transparent">
                Educator (B.Ed.) by Choice
              </span>
              <br />
              <span className="text-2xl md:text-3xl font-medium text-muted-foreground mt-2 block">
                Engineer (B.E.) and Administrator (M.B.A.) by Qualification
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              <span className="font-semibold text-primary">15+ years</span> of teaching & leadership, 
              enriched by <span className="font-semibold text-accent">global experience</span> in the US
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
