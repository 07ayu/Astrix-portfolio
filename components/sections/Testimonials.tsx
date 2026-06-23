"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import { TESTIMONIALS } from "@/data";
import { useReveal } from "@/hooks/useReveal";
import { useStagger } from "@/hooks/useStagger";

export default function Testimonials() {
  const headingRef = useReveal({ direction: "up" });
  const gridRef = useStagger(".testimonial-card");

  return (
    <section className="container-custom py-28">
      <div ref={headingRef}>
        <SectionHeader
          title="Voices of Success"
          description="Hear from the teams and leaders we've partnered with."
        />
      </div>

      <div ref={gridRef} className="grid gap-6 lg:grid-cols-3">
        {TESTIMONIALS.map((item) => (
          <div
            key={item.name}
            className="
              testimonial-card
              rounded-3xl
              border
              border-white/5
              bg-[#141414]
              p-8
            "
          >
            <p className="mb-8 text-neutral-300">"{item.quote}"</p>

            <div>
              <h4 className="font-semibold">{item.name}</h4>

              <p className="text-sm text-neutral-500">{item.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
