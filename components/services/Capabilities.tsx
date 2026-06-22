import CapabilityCard from "../ui/CapabilityCard";

export default function Capabilities() {
  const services = [
    {
      title: "Web Engineering",
      description: "Modern web applications built for performance and scale.",
      points: ["Next.js", "React", "Node.js", "Microservices"],
    },
    {
      title: "Mobile Development",
      description: "Cross-platform mobile experiences.",
      points: ["React Native", "Expo", "iOS", "Android"],
    },
    {
      title: "UI/UX Design",
      description: "Interfaces users actually enjoy using.",
      points: ["Design Systems", "Research", "Prototyping", "Accessibility"],
    },
    {
      title: "AI Integration",
      description: "Production-ready AI workflows and automation.",
      points: ["OpenAI", "RAG", "Vector DB", "Automation"],
    },
  ];

  return (
    <section className="py-24">
      <div className="container-custom">
        <h2 className="mb-14 font-syne text-5xl font-bold">
          Core Capabilities
        </h2>

        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <CapabilityCard
              key={service.title}
              title={service.title}
              description={service.description}
              points={service.points}
              icon={<div className="h-12 w-12 rounded-xl bg-[#6D5DFC]/20" />}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
