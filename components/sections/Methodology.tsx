"use client";

import { useLayoutEffect, useRef } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { FEATURES, PROCESS_STEPS } from "@/data";
import { useReveal } from "@/hooks/useReveal";
import FeatureCard from "@/components/ui/FeatureCard";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export default function Methodology() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useReveal({ direction: "up" });
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<SVGLineElement>(null);

  useLayoutEffect(() => {
    if (!timelineRef.current || !lineRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const path = lineRef.current;
    const pathLength = 1000;
    path.style.strokeDasharray = `${pathLength}`;
    path.style.strokeDashoffset = `${pathLength}`;

    const steps = timelineRef.current.querySelectorAll(".timeline-step");

    const ctx = gsap.context(() => {
      // Scrub conduit line
      gsap.to(path, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 75%",
          end: "bottom 70%",
          scrub: 0.6,
        },
      });

      // Illuminate each step as the scrub passes
      steps.forEach((step, idx) => {
        ScrollTrigger.create({
          trigger: step,
          start: "top 78%",
          onEnter: () => {
            step.classList.add("border-[#6D5DFC]/70", "bg-[#141220]");
            const node = step.querySelector(".step-node");
            if (node) {
              node.classList.add("border-[#6D5DFC]", "text-[#A89BFF]", "shadow-[0_0_20px_rgba(109,93,252,0.4)]");
            }
          },
          onLeaveBack: () => {
            step.classList.remove("border-[#6D5DFC]/70", "bg-[#141220]");
            const node = step.querySelector(".step-node");
            if (node) {
              node.classList.remove("border-[#6D5DFC]", "text-[#A89BFF]", "shadow-[0_0_20px_rgba(109,93,252,0.4)]");
            }
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="container-custom py-28 border-b border-white/5">
      <div ref={headingRef}>
        <SectionHeader
          badge="SPRINT DELIVERY LIFECYCLE"
          title="Predictable Architecture. Measured Velocity."
          description="We minimize risk through transparent discovery sprints, production design systems, and weekly milestone releases."
        />
      </div>

      {/* REFINED METHODOLOGY TIMELINE WITH SVG SCROLL-SCRUB CONDUIT LINE */}
      <div ref={timelineRef} className="relative mb-24">
        {/* SVG Conduit Line */}
        <div className="absolute left-10 right-10 top-12 hidden h-4 lg:block pointer-events-none z-0">
          <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
            {/* Background track line */}
            <line
              x1="0%"
              y1="50%"
              x2="100%"
              y2="50%"
              stroke="rgba(255, 255, 255, 0.08)"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            {/* Animated glowing violet conduit line */}
            <line
              ref={lineRef}
              x1="0%"
              y1="50%"
              x2="100%"
              y2="50%"
              stroke="#6D5DFC"
              strokeWidth="2.5"
              className="filter drop-shadow-[0_0_8px_rgba(109,93,252,0.8)]"
            />
          </svg>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 relative z-10">
          {PROCESS_STEPS.map((step) => (
            <SpotlightCard
              key={step.number}
              className="timeline-step group p-7 transition-all duration-500"
            >
              {/* Step indicator node */}
              <div className="flex items-center justify-between">
                <div className="step-node flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#15141E] font-syne text-sm font-bold text-white transition-all duration-500 group-hover:border-[#6D5DFC] group-hover:text-[#A89BFF]">
                  {step.number}
                </div>
                {step.details && (
                  <span className="font-mono text-[10px] text-neutral-400">
                    {step.details.split("•")[0]?.trim()}
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="mt-6 font-syne text-xl font-bold text-white transition-colors group-hover:text-[#A89BFF]">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                {step.description}
              </p>

              {/* Detail badge */}
              {step.details && (
                <div className="mt-6 border-t border-white/5 pt-4">
                  <span className="font-mono text-xs text-[#A89BFF]">
                    ↳ {step.details.split("•")[1]?.trim() || step.details}
                  </span>
                </div>
              )}
            </SpotlightCard>
          ))}
        </div>
      </div>

      {/* ENGINEERING PILLARS */}
      <div className="grid gap-6 md:grid-cols-3">
        {FEATURES.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  );
}
