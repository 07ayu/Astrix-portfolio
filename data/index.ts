export type Stat = {
  value: string;
  label: string;
};

export type Service = {
  title: string;
  description: string;
};

export type Project = {
  title: string;
  category: string;
  description: string;
  image: string;
  span: "large" | "small";
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export type Feature = {
  title: string;
  description: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type Principle = {
  title: string;
  desc: string;
};

export type TeamMember = {
  name: string;
  role: string;
  image: string;
};

export const STATS: Stat[] = [
  { value: "200+", label: "PROJECTS DELIVERED" },
  { value: "45+", label: "CLIENTS SERVED" },
  { value: "12", label: "AWARDS" },
  { value: "98%", label: "CLIENT RETENTION" },
];

export const SERVICES: Service[] = [
  {
    title: "SaaS Development",
    description: "Custom SaaS products built with modern scalable architecture.",
  },
  {
    title: "MVP Development",
    description: "Launch your startup idea quickly and validate with real users.",
  },
  {
    title: "Web Applications",
    description: "Fast, responsive applications built with React and Next.js.",
  },
  {
    title: "Mobile Apps",
    description: "Cross-platform apps using React Native and Expo.",
  },
];

export const PROJECTS: Project[] = [
  {
    title: "Nova Finance",
    category: "FINTECH",
    description: "Revolutionizing wealth management with AI-powered trading dashboards.",
    image: "/projects/project-1.svg",
    span: "large",
  },
  {
    title: "Vanguard Mobile",
    category: "MOBILE",
    description: "A luxury ecommerce experience optimized for conversions.",
    image: "/projects/project-2.svg",
    span: "small",
  },
  {
    title: "Neural Sync",
    category: "AI",
    description: "AI-driven infrastructure monitoring platform.",
    image: "/projects/project-3.svg",
    span: "small",
  },
  {
    title: "Aether City",
    category: "WEB",
    description: "A digital twin platform for urban planning.",
    image: "/projects/project-4.svg",
    span: "large",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    description: "Deep-dive into your business goals, target audience and technical requirements.",
  },
  {
    number: "02",
    title: "Design",
    description: "Crafting high-fidelity experiences with strategic UX and premium visuals.",
  },
  {
    number: "03",
    title: "Development",
    description: "Agile execution using modern frameworks and scalable architecture.",
  },
  {
    number: "04",
    title: "Launch",
    description: "Seamless deployment, performance optimization and ongoing support.",
  },
];

export const FEATURES: Feature[] = [
  {
    title: "Elite Talent",
    description: "Small senior team focused on quality, speed and product excellence.",
  },
  {
    title: "Cutting-edge Tech",
    description: "Modern frameworks, AI tooling and scalable cloud infrastructure.",
  },
  {
    title: "Scalable Solutions",
    description: "Built to support growth from MVP to enterprise scale.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Astrix transformed our vision into a high-performance product. Their engineering standards are the best we've seen.",
    name: "Sarah Williams",
    role: "CEO, NexLabs",
  },
  {
    quote: "The level of detail and execution was exceptional. Our conversion rate increased dramatically after launch.",
    name: "Marcus Reed",
    role: "Founder, Vanguard",
  },
  {
    quote: "Fast delivery, outstanding communication and enterprise-grade quality.",
    name: "Daniel Foster",
    role: "CTO, NeuralSync",
  },
];

export const FAQS: FAQ[] = [
  {
    question: "What is your typical project timeline?",
    answer: "Most projects take between 4 and 12 weeks depending on scope and complexity.",
  },
  {
    question: "Do you provide post-launch support?",
    answer: "Yes. We offer maintenance, monitoring and feature iteration plans.",
  },
  {
    question: "How do you manage projects?",
    answer: "Through agile workflows with weekly milestones and transparent communication.",
  },
];

export const PRINCIPLES: Principle[] = [
  { title: "Precision", desc: "Every system is designed with long-term scalability and maintainability." },
  { title: "Innovation", desc: "Modern engineering practices without unnecessary complexity." },
  { title: "Collaboration", desc: "Transparent communication across every stage of delivery." },
  { title: "Integrity", desc: "Reliable execution and measurable outcomes." },
];

export const team: TeamMember[] = [
  { name: "Alex Wilson", role: "Founder", image: "/team/team-1.svg" },
  { name: "Sarah Chen", role: "Lead Engineer", image: "/team/team-2.svg" },
  { name: "Clara Rodriguez", role: "Product Design", image: "/team/team-3.svg" },
  { name: "Marcus Thorne", role: "Solutions Architect", image: "/team/team-4.svg" },
];
