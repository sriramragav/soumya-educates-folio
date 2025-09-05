import { GraduationCap, Building, Users, Award } from 'lucide-react';

const experiences = [
  {
    year: '2020 - Present',
    title: 'Senior Educational Consultant',
    organization: 'EdTech Innovations Pvt. Ltd.',
    description: 'Leading curriculum design and implementation for K-12 schools across multiple states. Developed innovative assessment frameworks that improved student performance by 40%.',
    icon: Building,
    highlights: ['Curriculum Development', 'Teacher Training', 'Assessment Design']
  },
  {
    year: '2017 - 2020',
    title: 'Academic Director',
    organization: 'Bright Future International School',
    description: 'Oversaw academic operations for 1200+ students. Introduced project-based learning methodologies and integrated technology into traditional classroom settings.',
    icon: GraduationCap,
    highlights: ['Academic Leadership', 'Technology Integration', 'Student Outcomes']
  },
  {
    year: '2014 - 2017',
    title: 'Educational Program Manager',
    organization: 'Learning Excellence Foundation',
    description: 'Managed educational programs for underserved communities. Developed and executed literacy programs that reached over 5000 students across rural areas.',
    icon: Users,
    highlights: ['Program Management', 'Community Outreach', 'Literacy Programs']
  },
  {
    year: '2010 - 2014',
    title: 'Senior Teacher & Department Head',
    organization: 'Delhi Public School Network',
    description: 'Led mathematics department and pioneered innovative teaching methods. Mentored 25+ teachers and developed professional development programs.',
    icon: Award,
    highlights: ['Teaching Excellence', 'Mentorship', 'Department Leadership']
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Professional Journey</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A timeline of educational excellence and transformative leadership
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-0.5"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full transform md:-translate-x-1.5 z-10"></div>
                  
                  {/* Content card */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-card p-6 rounded-lg shadow-soft hover:shadow-elegant transition-shadow">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary text-primary-foreground p-3 rounded-lg">
                          <Icon className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-primary mb-1">{exp.year}</div>
                          <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                          <p className="text-accent font-medium mb-3">{exp.organization}</p>
                          <p className="text-muted-foreground mb-4 leading-relaxed">
                            {exp.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {exp.highlights.map((highlight, i) => (
                              <span
                                key={i}
                                className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm"
                              >
                                {highlight}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}