"use client";

import { useEffect, useRef, useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import ProjectCard from "@/components/ui/ProjectCard";
import { useReveal } from "@/hooks/useReveal";
import { PROJECTS } from "@/data";
import Link from "next/link";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export default function Projects() {
  const headingRef = useReveal({ direction: "up" });
  const pinSectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDesktopPinned, setIsDesktopPinned] = useState(false);

  useEffect(() => {
    const isDesktop = window.innerWidth >= 1024;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isDesktop && !prefersReducedMotion) {
      setIsDesktopPinned(true);
    }
  }, []);

  useEffect(() => {
    if (!isDesktopPinned || !pinSectionRef.current || !trackRef.current) return;

    const ctx = gsap.context(() => {
      const track = trackRef.current;
      if (!track) return;

      const totalScroll = track.scrollWidth - window.innerWidth + 120;

      gsap.to(track, {
        x: -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: pinSectionRef.current,
          pin: true,
          scrub: 1,
          start: "top top+=80",
          end: () => `+=${totalScroll}`,
          invalidateOnRefresh: true,
        },
      });
    }, pinSectionRef);

    return () => ctx.revert();
  }, [isDesktopPinned]);

  return (
    <section
      ref={pinSectionRef}
      className={`relative border-b border-white/5 py-24 ${
        isDesktopPinned ? "overflow-hidden" : ""
      }`}
    >
      <div className="container-custom">
        <div ref={headingRef}>
          <SectionHeader
            badge="FEATURED CASE STUDIES"
            title="Architectural Highlights & Production Systems"
            description="A selection of high-scale SaaS products, real-time engines, and mission-critical applications delivered by our studio."
          />
        </div>

        {/* Desktop Pinned Horizontal Scroll Track */}
        {isDesktopPinned ? (
          <div className="mt-12 overflow-visible">
            <div
              ref={trackRef}
              className="flex gap-8 w-max items-stretch pb-8"
              style={{ willChange: "transform" }}
            >
              {PROJECTS.map((project) => (
                <div key={project.title} className="w-[520px] shrink-0">
                  <ProjectCard {...project} span="small" />
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Mobile Normal Stacking Bento Grid */
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        )}

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
      </div>
    </section>
  );
}
