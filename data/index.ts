export type Stat = {
  value: string;
  label: string;
};

export type Service = {
  title: string;
  tagline: string;
  description: string;
  capabilities: string[];
  metric?: string;
  iconType: "web" | "mobile" | "desktop" | "solutions" | "ar" | "ai";
};

export type Project = {
  title: string;
  category: string;
  description: string;
  image: string;
  span: "large" | "small";
  metrics?: string;
  stack?: string[];
  deliverables?: string[];
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
  details?: string;
};

export type Feature = {
  title: string;
  description: string;
  codeSnippet?: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company?: string;
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

export const CONTACT_INFO = {
  phone: "7980779265",
  phoneFormatted: "+91 7980779265",
  phoneActionText: "Let's Build Together",
  email: "astrixlabs03.tech@gmail.com",
  emailActionText: "Get in Touch",
  motto: "Ideas | Code | Impact",
  tagline: "Turning Ideas into Reality",
};

export const STATS: Stat[] = [
  { value: "150+", label: "Systems Deployed" },
  { value: "45+", label: "Global Clients" },
  { value: "99.98%", label: "Uptime SLA" },
  { value: "98%", label: "Client Retention" },
];

export const SERVICES: Service[] = [
  {
    title: "Web Development",
    tagline: "Modern, Scalable & Responsive Web Solutions",
    description: "Crafting high-speed, responsive, and robust web applications with modern frontend frameworks and scalable backend architecture.",
    capabilities: ["Modern Web Apps", "Scalable Full-Stack", "Responsive Design", "Performance Optimization"],
    metric: "High-Speed Web Architecture",
    iconType: "web",
  },
  {
    title: "App Development",
    tagline: "Android & iOS Apps for Your Ideas",
    description: "Cross-platform and native mobile apps built for seamless user experiences, offline reliability, and fast app store deployment.",
    capabilities: ["iOS & Android", "React Native & Flutter", "Native Integrations", "Offline Data Sync"],
    metric: "Native & Cross-Platform",
    iconType: "mobile",
  },
  {
    title: "Desktop Application",
    tagline: "Custom Software to Simplify Your Work",
    description: "High-performance, resource-efficient desktop tools and multi-platform native software tailored to business workflows.",
    capabilities: ["Cross-Platform Desktop", "Electron & Tauri", "System Utilities", "Enterprise Workflows"],
    metric: "Windows & macOS",
    iconType: "desktop",
  },
  {
    title: "Software Solutions",
    tagline: "End-to-End Technology Solutions",
    description: "Comprehensive technology architectures from cloud backends, APIs, database engineering to enterprise digital transformations.",
    capabilities: ["End-to-End Architecture", "Cloud APIs & Microservices", "Database Modeling", "Custom SaaS Platforms"],
    metric: "Enterprise Scale Ready",
    iconType: "solutions",
  },
  {
    title: "Augmented Reality",
    tagline: "Interactive AR Experiences for Real Impact",
    description: "Immersive WebGL and spatial computing solutions that engage users with next-generation interactive 3D and AR products.",
    capabilities: ["Interactive 3D / WebGL", "Mobile AR Experiences", "Spatial Computing", "Real-Time Visualization"],
    metric: "Interactive 3D & Spatial Tech",
    iconType: "ar",
  },
  {
    title: "AI Integration",
    tagline: "Smart Solutions with Artificial Intelligence",
    description: "Production-grade artificial intelligence workflows, smart LLM integrations, automated data pipelines, and intelligent agents.",
    capabilities: ["LLM Workflows & RAG", "Intelligent Automation", "Vector Databases", "Predictive Analytics"],
    metric: "Next-Gen Smart Workflows",
    iconType: "ai",
  },
];

export const PROJECTS: Project[] = [
  {
    title: "Nova Financial OS",
    category: "FINTECH & QUANTITATIVE",
    description: "High-frequency portfolio analytics dashboard streaming real-time equities, order books, and risk stress tests.",
    image: "/projects/project-1.svg",
    span: "large",
    metrics: "1.2M events/sec • 8ms P99 Latency",
    stack: ["Next.js 16", "WebSockets", "ClickHouse", "TypeScript"],
    deliverables: ["Quantitative Dashboard", "Streaming Engine", "Risk Simulator"],
  },
  {
    title: "Vanguard Commerce",
    category: "MOBILE PLATFORM",
    description: "Bespoke luxury shopping application with biometric authentication, instant checkout, and offline sync.",
    image: "/projects/project-2.svg",
    span: "small",
    metrics: "+44% Mobile Conversion",
    stack: ["React Native", "Expo", "Stripe API", "GraphQL"],
    deliverables: ["iOS & Android App", "Bespoke Checkout", "Loyalty System"],
  },
  {
    title: "NeuralSync Intelligence",
    category: "ENTERPRISE AI",
    description: "Autonomous LLM orchestration pipeline with semantic prompt caching, vector indexing, and real-time observability.",
    image: "/projects/project-3.svg",
    span: "small",
    metrics: "64% LLM Cost Reduction",
    stack: ["FastAPI", "Vector DB", "OpenAI / Anthropic", "Next.js"],
    deliverables: ["RAG Architecture", "Prompt Evaluation Engine", "Admin Portal"],
  },
  {
    title: "Aether Spatial Engine",
    category: "3D DIGITAL TWIN",
    description: "Browser-based 3D simulation engine rendering 500,000 active urban IoT nodes with sub-millisecond telemetry.",
    image: "/projects/project-4.svg",
    span: "large",
    metrics: "60 FPS Benchmark on WebGL",
    stack: ["Three.js", "WebAssembly", "Node.js", "Tailwind CSS"],
    deliverables: ["3D Spatial Viewport", "IoT Telemetry Stream", "GIS Mapping"],
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Technical Discovery",
    description: "Deep technical audit, architecture blueprinting, database schema design, and feasibility modeling.",
    details: "1-2 Weeks • Architectural Spec Document",
  },
  {
    number: "02",
    title: "Design System & UX",
    description: "Precision UI engineering, interactive component prototyping, and user journey optimization.",
    details: "2 Weeks • Production Design Token Library",
  },
  {
    number: "03",
    title: "Agile Engineering",
    description: "Weekly production sprints, rigorous automated testing, code reviews, and continuous deployment pipelines.",
    details: "4-8 Weeks • Bi-Weekly Milestone Releases",
  },
  {
    number: "04",
    title: "Production Launch & SLA",
    description: "Zero-downtime cutover, telemetry & latency monitoring, infrastructure hardening, and ongoing support.",
    details: "Continuous • 99.98% Guaranteed Uptime",
  },
];

export const FEATURES: Feature[] = [
  {
    title: "Senior Engineering Craft",
    description: "Every line of code is written by senior systems architects and staff engineers who have scaled enterprise platforms.",
  },
  {
    title: "Modern Battle-Tested Stack",
    description: "Next.js, TypeScript, cloud native microservices, and AI integrations with uncompromising type safety.",
  },
  {
    title: "Enterprise Grade Reliability",
    description: "Built for mission-critical reliability with automated testing, edge caching, and scalable multi-region hosting.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Astrix architected our core streaming platform from zero to handling over 1 million concurrent events without a single outage. Their engineering standard is unmatched.",
    name: "Sarah Williams",
    role: "Chief Technology Officer",
    company: "NexLabs Technologies",
  },
  {
    quote: "The precision of their code and UI execution is remarkable. Our checkout latency dropped by 65% and our conversion rate jumped significantly.",
    name: "Marcus Reed",
    role: "Founder & CEO",
    company: "Vanguard Global",
  },
  {
    quote: "Fast, communicative, and technically exceptional. They operate like an elite in-house founding team rather than a traditional agency.",
    name: "Daniel Foster",
    role: "VP of Engineering",
    company: "NeuralSync AI",
  },
];

export const FAQS: FAQ[] = [
  {
    question: "What is your typical project timeline?",
    answer: "Most production MVPs and SaaS engagements take between 4 and 10 weeks from discovery to deployment, organized into structured two-week delivery milestones.",
  },
  {
    question: "How do you handle post-launch support and SLA guarantees?",
    answer: "We offer dedicated engineering retainers providing 24/7 incident response, latency monitoring, infrastructure scaling, and continuous feature iterations.",
  },
  {
    question: "What does your delivery process look like?",
    answer: "We operate on transparent agile sprints with shared GitHub repositories, automated preview deployments, weekly demo calls, and direct Slack communication.",
  },
  {
    question: "Can you take over or modernize an existing codebase?",
    answer: "Yes. We regularly conduct code audits, performance profiling, and incremental modernizations to migrate legacy apps to modern Next.js and TypeScript architectures.",
  },
];

export const PRINCIPLES: Principle[] = [
  { title: "Architectural Precision", desc: "Every system is designed with clean boundaries, long-term scalability, and zero tech debt shortcuts." },
  { title: "Pragmatic Innovation", desc: "Modern engineering practices and modern frameworks without unnecessary complexity or speculative dependencies." },
  { title: "Transparent Velocity", desc: "Direct communication with the engineers building your product, verified with continuous preview links." },
  { title: "Production Integrity", desc: "Rigorous testing, automated CI/CD, and measurable uptime standards across every release." },
];

export const team: TeamMember[] = [
  { name: "Alex Wilson", role: "Principal Architect", image: "/team/team-1.svg" },
  { name: "Sarah Chen", role: "Staff Frontend Engineer", image: "/team/team-2.svg" },
  { name: "Clara Rodriguez", role: "Head of Product Design", image: "/team/team-3.svg" },
  { name: "Marcus Thorne", role: "Cloud & Infrastructure Lead", image: "/team/team-4.svg" },
];
