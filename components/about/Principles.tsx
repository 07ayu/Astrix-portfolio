"use client";

import SectionContainer from "../shared/SectionContainer";
import SectionHeader from "@/components/ui/SectionHeader";
import { useReveal } from "@/hooks/useReveal";
import { useStagger } from "@/hooks/useStagger";
import { PRINCIPLES } from "@/data";

export default function Principles() {
  const headingRef = useReveal({ direction: "up" });
  const gridRef = useStagger(".principle-card", { stagger: 0.1 });

  return (
    <SectionContainer>
      <div ref={headingRef}>
        <SectionHeader
          badge="FOUNDATIONAL PHILOSOPHY"
          title="Core Engineering Principles"
          description="The non-negotiable architectural tenets that guide every system we design and deliver."
        />
      </div>

      <div ref={gridRef} className="grid gap-6 md:grid-cols-2">
        {PRINCIPLES.map((item, idx) => (
          <div
            key={item.title}
            className="principle-card group rounded-2xl border border-white/10 bg-[#0E0E14] p-8 transition-all duration-300 hover:border-[#6D5DFC]/40 hover:bg-[#12111A]"
          >
            <div className="font-mono text-xs uppercase text-[#A89BFF]">
              0{idx + 1} // TENET
            </div>
            <h3 className="mt-3 mb-3 font-syne text-2xl font-bold text-white transition-colors group-hover:text-[#A89BFF]">
              {item.title}
            </h3>
            <p className="text-sm leading-relaxed text-neutral-400">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
