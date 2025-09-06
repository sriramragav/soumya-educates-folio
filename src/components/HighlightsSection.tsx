import { Card, CardContent } from '@/components/ui/card';

const highlightsAndSkills = [
  {
    title: 'Educational Leadership & Mentorship',
    icon: '👩‍🏫',
    description:
      'Rose from teacher to Vice Principal in 2 years, successfully managing and mentoring a team of over 30 educators.',
  },
  {
    title: 'Admissions Success Rate',
    icon: '🎯',
    description:
      'Converted 70% of enquiries into admissions, building strong trust with parents and families.',
  },
  {
    title: 'Student Development & Guidance',
    icon: '🎓',
    description:
      'Mentored students across kindergarten to grade 12 in IB, IGCSE, and other curricula, fostering academic excellence.',
  },
  {
    title: 'Academic Content Development',
    icon: '📚',
    description:
      'Designed math workbooks and revision materials for grades 1-8, contributing to curriculum planning and execution.',
  },
  {
    title: 'Operational Excellence & Innovation',
    icon: '⚙️',
    description:
      'Streamlined school processes and led initiatives like newsletters that enhanced community engagement.',
  },
  {
    title: 'Wellness & Holistic Leadership',
    icon: '🧘‍♀️',
    description:
      'Certified Level 1 Pranic Healer; conducted pranayama and mindfulness sessions promoting student wellness.',
  },
  {
    title: 'Learner-Centered Teaching',
    icon: '🌱',
    description:
      'Committed to inquiry-based, differentiated instruction that nurtures critical thinking and personalized learning.',
  },
  {
    title: 'Curriculum & Assessment Design',
    icon: '🗂️',
    description:
      'Experienced in creating diverse assessments aligned with international standards for Math and Physics.',
  },
  {
    title: 'Effective Communication & Relationship Building',
    icon: '🗣️',
    description:
      'Strong communicator with a proven track record in engaging students, parents, and academic teams.',
  },
];

export default function HighlightsAndStrengthsPage() {
  return (
    <section
      id="highlights"
      className="py-20 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <header className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-indigo-700 mb-2">
            Career Highlights & Strengths
          </h2>
          <div className="mx-auto w-24 h-1 rounded-full bg-gradient-to-r from-indigo-400 to-purple-600 shadow-md"></div>
        </header>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex space-x-6 min-w-max sm:justify-center sm:space-x-8 md:space-x-10">
            {highlightsAndSkills.map((item, index) => (
              <Card
                key={index}
                className="min-w-[280px] max-w-[320px] flex-shrink-0 bg-white backdrop-blur-sm bg-opacity-90 border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="flex flex-col items-center text-center p-8 space-y-6 h-full">
                  <div className="text-6xl">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-indigo-800">{item.title}</h3>
                  <p className="text-gray-700 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
