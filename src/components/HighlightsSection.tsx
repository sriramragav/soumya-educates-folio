import { Card, CardContent } from '@/components/ui/card';

const highlightsAndSkills = [
  {
    title: 'Teachers Led',
    icon: '👩‍🏫',
    description:
      'Rose from teacher to Vice Principal in 2 years, successfully managing and mentoring a team of more than 30 educators.',
  },
  {
    title: 'Admissions Conversion',
    icon: '🎯',
    description:
      'Personally converted around 600 of 860 enquiries into school admissions—a testament to persuasive communication and trust-building with families.',
  },
  {
    title: 'Students Impacted',
    icon: '👩‍🎓',
    description:
      'Taught, mentored, and guided students spanning kindergarten to grade 12 across international (IB, IGCSE) and Indian curricula.',
  },
  {
    title: 'Academic Content Creator',
    icon: '📚',
    description:
      'Designed math workbooks for grades 1–8 and played a key role in curriculum planning, development, and teacher training at a leading institution.',
  },
  {
    title: 'Process Innovator',
    icon: '⚙️',
    description:
      'Streamlined critical school operations, led CBSE affiliation record-keeping, and launched a monthly newsletter to showcase achievements and foster community spirit.',
  },
  {
    title: 'Leadership in Wellness',
    icon: '🧘‍♀️',
    description:
      'Certified Level 1 Pranic Healer and conducted pranayama sessions for students, promoting holistic well-being alongside academic growth.',
  },
  {
    title: 'Learner-Centric Educator',
    icon: '🌱',
    description:
      'Passionate about inquiry-based learning focused on critical thinking, personalized support, and active student engagement.',
  },
  {
    title: 'Curriculum Designer',
    icon: '🗂️',
    description:
      'Experienced in developing curriculum maps, assessment frameworks, and study materials across multiple international curricula.',
  },
  {
    title: 'Effective Communicator',
    icon: '🗣️',
    description:
      'Excellent negotiation, presentation, and relationship-building skills demonstrated through successful student and parent engagements.',
  },
];

export default function HighlightsAndStrengthsCards() {
  return (
    <section id="highlights-skills" className="py-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
      <div className="section-container max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-primary">Career Highlights & Strengths</h2>
          <div className="w-28 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto shadow-lg"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
          {highlightsAndSkills.map(({ title, icon, description }, idx) => (
            <Card
              key={idx}
              className="text-center hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between bg-white/90 backdrop-blur-lg border border-gray-200 rounded-xl"
            >
              <CardContent className="p-8 space-y-5 flex flex-col h-full">
                <div className="text-6xl">{icon}</div>
                <div className="text-2xl font-semibold text-primary">{title}</div>
                <p className="text-sm text-gray-700 flex-grow">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
