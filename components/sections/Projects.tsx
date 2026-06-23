"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import ProjectCard from "@/components/ui/ProjectCard";
import { useReveal } from "@/hooks/useReveal";
import { useStagger } from "@/hooks/useStagger";
import { PROJECTS } from "@/data";

export default function Projects() {
  const headingRef = useReveal({ direction: "up" });
  const gridRef = useStagger(".project-card");

  return (
    <section className="container-custom py-28">
      <div ref={headingRef}>
        <SectionHeader
          title="Featured Work"
          description="Selected digital products and premium software experiences."
        />
      </div>

      <div ref={gridRef} className="grid gap-6 md:grid-cols-3">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
