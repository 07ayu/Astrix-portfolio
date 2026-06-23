"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import ServiceCard from "@/components/ui/ServiceCard";
import { useStagger } from "@/hooks/useStagger";
import { SERVICES } from "@/data";

export default function Services() {
  const sectionRef = useStagger(".service-card");
  return (
    <section ref={sectionRef} className="container-custom py-28">
      <SectionHeader
        badge="WHAT WE DO"
        title="Future-Ready Solutions for Modern Enterprises"
        description="We build specialized digital products using the world's most advanced technology stack."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {SERVICES.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
}
