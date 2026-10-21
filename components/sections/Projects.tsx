"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import ProjectCard from "@/components/ui/ProjectCard";
import { useReveal } from "@/hooks/useReveal";
import { useStagger } from "@/hooks/useStagger";
import { PROJECTS } from "@/data";
import Link from "next/link";

export default function Projects() {
  const headingRef = useReveal({ direction: "up" });
  const gridRef = useStagger(".project-card", { stagger: 0.15 });

  return (
    <section className="container-custom py-28 border-b border-white/5">
      <div ref={headingRef}>
        <SectionHeader
          badge="FEATURED CASE STUDIES"
          title="Architectural Highlights & Production Systems"
          description="A selection of high-scale SaaS products, real-time engines, and mission-critical applications delivered by our studio."
        />
      </div>

      {/* Bento Grid */}
      <div ref={gridRef} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>

      {/* Explore full portfolio CTA bar */}
      <div className="mt-14 flex items-center justify-center">
        <Link
          href="/portfolio"
          className="group inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.02] px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-[#6D5DFC]/40 hover:bg-[#6D5DFC]/10"
        >
          <span>View All Architectural Case Studies</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </section>
  );
}
