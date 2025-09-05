import { Play } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-soft-gradient">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video Placeholder */}
          <div className="relative">
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
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">About Soumya</h2>
              <div className="w-20 h-1 bg-primary rounded-full"></div>
            </div>
            
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-muted-foreground">
                With over 15 years of experience in education, Soumya Mulubagula has dedicated 
                her career to revolutionizing the way students learn and engage with knowledge. 
                Her innovative approach combines traditional pedagogical wisdom with cutting-edge 
                educational technologies.
              </p>
              
              <p className="text-muted-foreground">
                Soumya specializes in curriculum development, educational leadership, and 
                student-centered learning methodologies. She has successfully implemented 
                numerous educational programs that have significantly improved student outcomes 
                and engagement across diverse learning environments.
              </p>
              
              <p className="text-muted-foreground">
                Her passion for lifelong learning and commitment to educational excellence 
                has made her a sought-after consultant and speaker in the education sector. 
                She believes in creating inclusive learning spaces where every student can 
                thrive and reach their maximum potential.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}