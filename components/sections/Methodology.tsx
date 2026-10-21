"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import { FEATURES, PROCESS_STEPS } from "@/data";
import { useReveal } from "@/hooks/useReveal";
import { useStagger } from "@/hooks/useStagger";
import FeatureCard from "@/components/ui/FeatureCard";

export default function Methodology() {
  const headingRef = useReveal({ direction: "up" });
  const processRef = useStagger(".timeline-step", { stagger: 0.12 });
  const featuresRef = useStagger(".feature-card", { stagger: 0.1 });

  return (
    <section className="container-custom py-28 border-b border-white/5">
      <div ref={headingRef}>
        <SectionHeader
          badge="SPRINT DELIVERY LIFECYCLE"
          title="Predictable Architecture. Measured Velocity."
          description="We minimize risk through transparent discovery sprints, production design systems, and weekly milestone releases."
        />
      </div>

      {/* REFINED METHODOLOGY TIMELINE */}
      <div ref={processRef} className="relative mb-24">
        {/* Horizontal conduit line connecting steps */}
        <div className="absolute left-8 right-8 top-8 hidden h-[2px] bg-gradient-to-r from-transparent via-[#6D5DFC]/30 to-transparent lg:block" />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.number}
              className="timeline-step group relative flex flex-col rounded-3xl border border-white/10 bg-[#0E0E12] p-7 transition-all duration-300 hover:border-[#6D5DFC]/40 hover:bg-[#12111A]"
            >
              {/* Step indicator node */}
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#15141E] font-syne text-sm font-bold text-white transition-all group-hover:border-[#6D5DFC] group-hover:text-[#A89BFF]">
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
            </div>
          ))}
        </div>
      </div>

      {/* ENGINEERING PILLARS */}
      <div ref={featuresRef} className="grid gap-6 md:grid-cols-3">
        {FEATURES.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  );
}
