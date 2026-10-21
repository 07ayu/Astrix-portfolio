"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import { TESTIMONIALS } from "@/data";
import { useReveal } from "@/hooks/useReveal";
import { useStagger } from "@/hooks/useStagger";

export default function Testimonials() {
  const headingRef = useReveal({ direction: "up" });
  const gridRef = useStagger(".testimonial-card", { stagger: 0.12 });

  return (
    <section className="container-custom py-28 border-b border-white/5">
      <div ref={headingRef}>
        <SectionHeader
          badge="PARTNER VERIFICATION"
          title="Engineered for Founders & Technical Leaders"
          description="Direct feedback from the CTOs and founders who partner with Astrix to ship critical software systems."
        />
      </div>

      <div ref={gridRef} className="grid gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((item) => (
          <div
            key={item.name}
            className="testimonial-card flex flex-col justify-between rounded-3xl border border-white/10 bg-[#0E0E12] p-8 transition-all duration-300 hover:border-[#6D5DFC]/40 hover:bg-[#12111A]"
          >
            <div>
              {/* Quotation icon */}
              <div className="mb-6 font-syne text-4xl font-black text-[#6D5DFC]/40">
                “
              </div>
              <p className="text-sm md:text-base leading-relaxed text-neutral-300">
                {item.quote}
              </p>
            </div>

            <div className="mt-8 border-t border-white/5 pt-6">
              <h4 className="font-syne font-bold text-white">{item.name}</h4>
              <p className="mt-0.5 text-xs text-neutral-400">{item.role}</p>
              {item.company && (
                <p className="mt-0.5 font-mono text-xs text-[#A89BFF]">
                  {item.company}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
