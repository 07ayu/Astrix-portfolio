"use client";

import CapabilityCard from "../ui/CapabilityCard";
import SectionHeader from "@/components/ui/SectionHeader";
import { useReveal } from "@/hooks/useReveal";
import { useStagger } from "@/hooks/useStagger";

const icon = <div className="h-12 w-12 rounded-xl bg-[#6D5DFC]/20" />;

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

export default function Capabilities() {
  const headingRef = useReveal({ direction: "up" });
  const gridRef = useStagger(".capability-card");

  return (
    <section className="py-28">
      <div className="container-custom">
        <div ref={headingRef}>
          <SectionHeader
            title="Core Capabilities"
            description="Expertise across the full stack, from frontend to infrastructure."
          />
        </div>

        <div ref={gridRef} className="grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <CapabilityCard
              key={service.title}
              title={service.title}
              description={service.description}
              points={service.points}
              icon={icon}
              className="capability-card"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
