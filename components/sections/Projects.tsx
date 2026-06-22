import SectionHeader from "@/components/ui/SectionHeader";
import ProjectCard from "@/components/ui/ProjectCard";
import { PROJECTS } from "@/lib/constants";

export default function Projects() {
  return (
    <section className="container-custom py-28">
      <SectionHeader
        title="Featured Work"
        description="Selected digital products and premium software experiences."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
