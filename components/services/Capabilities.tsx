"use client";

import CapabilityCard from "../ui/CapabilityCard";
import SectionHeader from "@/components/ui/SectionHeader";
import { useReveal } from "@/hooks/useReveal";
import { useStagger } from "@/hooks/useStagger";
import { SERVICES } from "@/data";

export default function Capabilities() {
  const headingRef = useReveal({ direction: "up" });
  const gridRef = useStagger(".capability-card", { stagger: 0.1 });

  return (
    <section className="py-28">
      <div className="container-custom">
        <div ref={headingRef}>
          <SectionHeader
            badge="END-TO-END CAPABILITIES"
            title="Comprehensive Technology Solutions"
            description="From scalable web and mobile software to desktop tools, interactive AR, and artificial intelligence integration."
          />
        </div>

        <div ref={gridRef} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <CapabilityCard
              key={service.title}
              title={service.title}
              description={service.description}
              points={service.capabilities}
              className="capability-card"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
