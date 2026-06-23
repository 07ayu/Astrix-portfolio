"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeader from "@/components/ui/SectionHeader";
import ProjectCard from "@/components/ui/ProjectCard";
import { useReveal } from "@/hooks/useReveal";
import { useStagger } from "@/hooks/useStagger";
import { PROJECTS } from "@/data";

export default function PortfolioPage() {
  const headingRef = useReveal({ direction: "up" });
  const gridRef = useStagger(".project-card");

  return (
    <>
      <Navbar />

      <main>
        <section className="container-custom pt-36 pb-28">
          <div ref={headingRef}>
            <SectionHeader
              title="Our Portfolio"
              description="Selected digital products and premium software experiences we've crafted."
            />
          </div>

          <div ref={gridRef} className="grid gap-6 md:grid-cols-3">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
