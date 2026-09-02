export const site = {
  name: "Soumya Educates",
  teacherName: "Soumya",
  positioning: "Math & Physics, taught for understanding.",
  experience: "20+ years of teaching experience",
  qualifications: ["B.E. (Mechanical)", "MBA", "B.Ed. (Math)"],
  contact: {
    // Add verified contact details here before enabling enquiry delivery.
    email: "",
    phone: "",
    whatsapp: "",
  },
};

export type VideoContent = { title: string; description?: string; videoUrl?: string; poster?: string };
export type FAQItem = { question: string; answer: string; contactCta?: boolean };
export type Testimonial = { quote: string; name: string; country?: string; gradeOrCurriculum?: string };
export type LearningResource = { id: string; subject: "Math" | "Physics"; topic: string; level: string; title: string; description: string; resourceType: "Video" | "Worked example" | "Guide"; embedUrl?: string; publishedAt?: string; status?: "draft" | "published" };
export type PageSubjectContent = { eyebrow: string; headline: string; introduction: string; video: VideoContent; audience: Array<{ title: string; detail: string }>; experience: Array<{ title: string; detail?: string }>; approach: Array<{ title: string; detail: string }>; process: Array<{ title: string; detail: string }>; faqs: FAQItem[] };

export const teachingPrinciples = [
  { title: "Understand", description: "Complex ideas are simplified until the student understands what is actually happening." },
  { title: "Diagnose", description: "When a student struggles, identify the specific gap instead of simply moving through the syllabus." },
  { title: "Adapt", description: "If one explanation does not work, try another way of making the idea clear." },
  { title: "Apply", description: "Move from understanding a concept to using it in familiar and unfamiliar problems." },
];

export const subjects = {
  math: { name: "Math", path: "/math", summary: "Strengthen fundamentals, make ideas clear, and build confidence in solving problems.", headline: "Math becomes easier when the ideas become clear.", focus: "Grades VIII–X · One-to-one and small-group classes", experience: ["Algebra 2", "Geometry B", "IB SL Math", "IGCSE", "A Levels"] },
  physics: { name: "Physics", path: "/physics", summary: "Understand concepts, connect them to real situations, and solve problems with confidence.", headline: "Physics is easier when you understand what is happening — not just which formula to use.", focus: "Grades VIII–X · One-to-one and small-group classes", experience: ["Grades IX–X", "JEE-oriented preparation", "IB SL Physics", "Grades XI–XII"] },
};

export const subjectPages: Record<"math" | "physics", PageSubjectContent> = {
  math: {
    eyebrow: "Math", headline: subjects.math.headline, introduction: "For students who need stronger fundamentals, clearer explanations, and more confidence applying what they know.", video: { title: "How Soumya teaches Math", description: "A short introduction video will be added here." },
    audience: [{ title: "Primary focus", detail: "Grades VIII–X, through one-to-one and small-group classes." }, { title: "When Math feels difficult", detail: "A topic may feel confusing, foundations may need attention, or applying an idea to a problem may be difficult." }, { title: "Support", detail: "Clear explanation, focused practice, and guidance that helps a student move forward with the curriculum." }],
    experience: subjects.math.experience.map(title => ({ title })),
    approach: [{ title: "Find the actual difficulty", detail: "Make room to identify whether the obstacle is a missing fundamental, an unclear idea, or a question type." }, { title: "Make the idea clear", detail: "Use explanations that meet the student where they are, rather than simply moving on." }, { title: "Practise with purpose", detail: "Use focused questions to strengthen understanding before increasing complexity." }, { title: "Build independent thinking", detail: "Help the student connect an idea to new problems and work with more confidence." }],
    process: [{ title: "Identify the difficulty", detail: "Notice what is getting in the way." }, { title: "Understand the gap", detail: "Work out the concept or foundation that needs attention." }, { title: "Explain", detail: "Make the idea understandable." }, { title: "Targeted practice", detail: "Use questions that reinforce the point." }, { title: "Apply", detail: "Connect understanding to unfamiliar problems." }, { title: "Progress", detail: "Continue with greater confidence." }],
    faqs: [{ question: "Which Math curricula has Soumya worked with?", answer: "Experience includes Algebra 2, Geometry B, IB SL Math, IGCSE, and A Levels. The right fit depends on the student's grade and needs." }, { question: "Which students is Math support primarily for?", answer: "The primary focus is Grades VIII–X. Senior-school and international curriculum experience also informs the support offered." }],
  },
  physics: {
    eyebrow: "Physics", headline: subjects.physics.headline, introduction: "Clear explanations, conceptual understanding, and structured problem solving for students who want to make sense of the subject.", video: { title: "How Soumya teaches Physics", description: "A short introduction video will be added here." },
    audience: [{ title: "Grades IX–X", detail: "Support for building a secure understanding of school Physics." }, { title: "Grades XI–XII", detail: "Support for senior-school Physics and the demands of more complex topics." }, { title: "International and JEE-oriented students", detail: "Experience includes IB SL Physics and JEE-oriented preparation." }],
    experience: [{ title: "IB SL Physics" }, { title: "Grades IX–X" }, { title: "Grades XI–XII" }, { title: "JEE-oriented preparation" }, { title: "India, Singapore and USA", detail: "Students taught across these geographies." }],
    approach: [{ title: "Start with the concept", detail: "Focus on what is happening physically before relying on a formula." }, { title: "Simplify difficult ideas", detail: "Break a complex topic into understandable parts." }, { title: "Connect idea to question", detail: "Help students see how the concept appears in a problem." }, { title: "Apply and solve", detail: "Develop deliberate problem-solving ability through practice." }],
    process: [{ title: "Locate the sticking point", detail: "Find the concept, interpretation, or question step causing difficulty." }, { title: "Build the physical picture", detail: "Understand the situation behind the question." }, { title: "Clarify the concept", detail: "Simplify the idea and its relationships." }, { title: "Connect to the question", detail: "Choose an approach based on understanding." }, { title: "Practise application", detail: "Work through problems with increasing independence." }, { title: "Progress", detail: "Carry the approach into new topics." }],
    faqs: [{ question: "Which Physics experience does Soumya have?", answer: "Experience includes IB SL Physics, Grades IX–X, Grades XI–XII, and JEE-oriented preparation." }, { question: "Does Soumya teach students outside India?", answer: "Physics teaching experience includes students from India, Singapore, and the USA." }],
  },
};

export const aboutContent = { introduction: "Soumya is a Math and Physics teacher focused on helping students understand difficult ideas, build confidence, and solve problems independently.", video: { title: "Meet Soumya", description: "A personal introduction about Soumya's teaching journey and what she believes about teaching will be added here." }, journey: "This section is reserved for the fuller story of Soumya's teaching journey.", philosophy: "This section is reserved for Soumya's fuller teaching philosophy: the principles that shape how she supports students over time.", experience: "This section will expand on classroom and online teaching experience, including work with students in India, Singapore, and the USA." };
export const learnContent = { introduction: "A growing home for clear Math and Physics lessons, worked examples, and problem-solving guidance.", video: { title: "Sample teaching lesson", description: "A genuine sample lesson will be added here." }, future: "A restrained space for future structured learning offerings. Details will be added when they are ready." };
export const learningResources: LearningResource[] = [];
export const testimonials: Testimonial[] = [];
export const contactFaqs: FAQItem[] = [{ question: "What should I include in an enquiry?", answer: "Share the student's grade, subject, curriculum, location, and the areas where support is needed." }, { question: "What happens after I get in touch?", answer: "The first conversation is used to understand the student's needs and discuss an appropriate approach." }];
// Retained for the existing Home page; Home is intentionally not part of this pass.
export const faqs: FAQItem[] = contactFaqs;
