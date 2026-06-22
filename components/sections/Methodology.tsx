import { FEATURES, PROCESS_STEPS } from "@/lib/constants";

import ProcessStep from "@/components/ui/ProcessStep";
import FeatureCard from "@/components/ui/FeatureCard";

export default function Methodology() {
  return (
    <section className="container-custom py-32">
      <h2 className="mb-20 text-center font-syne text-5xl font-bold">
        Our Methodology
      </h2>

      {/* PROCESS */}
      <div className="relative mb-24">
        <div className="absolute left-0 right-0 top-7 hidden h-px bg-white/10 lg:block" />

        <div className="grid gap-12 lg:grid-cols-4">
          {PROCESS_STEPS.map((step) => (
            <ProcessStep key={step.number} {...step} />
          ))}
        </div>
      </div>

      {/* FEATURES */}
      <div className="grid gap-6 lg:grid-cols-3">
        {FEATURES.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  );
}
