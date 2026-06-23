"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import { FEATURES, PROCESS_STEPS } from "@/data";
import { useReveal } from "@/hooks/useReveal";
import { useStagger } from "@/hooks/useStagger";

import ProcessStep from "@/components/ui/ProcessStep";
import FeatureCard from "@/components/ui/FeatureCard";

export default function Methodology() {
  const headingRef = useReveal({ direction: "up" });
  const processRef = useStagger(".process-step");
  const featuresRef = useStagger(".feature-card");

  return (
    <section className="container-custom py-28">
      <div ref={headingRef}>
        <SectionHeader
          title="Our Methodology"
          description="How we turn complex architectural challenges into seamless digital reality."
        />
      </div>
      {/* PROCESS */}
      <div ref={processRef} className="relative mb-24">
        <div className="absolute left-0 right-0 top-7 hidden h-px bg-white/10 lg:block" />

        <div className="grid gap-12 lg:grid-cols-4">
          {PROCESS_STEPS.map((step) => (
            <ProcessStep key={step.number} {...step} />
          ))}
        </div>
      </div>

      {/* FEATURES */}
      <div ref={featuresRef} className="grid gap-6 lg:grid-cols-3">
        {FEATURES.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  );
}
