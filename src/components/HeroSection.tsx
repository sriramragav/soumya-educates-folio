import { Button } from '@/components/ui/button';
import React, { useState } from "react";
import { Download, FileText } from 'lucide-react';
import soumyaHeadshot from '@/assets/SoumyaSpeaking.jpeg';
import ResumeModal from "./ResumeModal";

export default function HeroSection() {
  const [open, setOpen] = useState(false);
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
            <h1 className="hero-text text-4xl font-bold leading-tight">
              Transforming Education <br />
              <span className="text-2xl font-medium text-gray-700">
                With Expertise and Empathy
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Versatile educator with expertise across CBSE, IB, and international curricula, passionate about making Math and Physics engaging, accessible, and impactful.
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
