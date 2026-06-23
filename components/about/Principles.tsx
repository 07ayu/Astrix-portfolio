"use client";

import SectionContainer from "../shared/SectionContainer";
import SectionHeader from "@/components/ui/SectionHeader";
import { useReveal } from "@/hooks/useReveal";
import { useStagger } from "@/hooks/useStagger";
import { PRINCIPLES } from "@/data";

export default function Principles() {
  const headingRef = useReveal({ direction: "up" });
  const gridRef = useStagger(".principle-card");

  return (
    <SectionContainer>
      <div ref={headingRef}>
        <SectionHeader
          title="Core Engineering Principles"
          description="The values that guide every line of code we write."
        />
      </div>

      <div ref={gridRef} className="grid gap-6 md:grid-cols-2">
        {PRINCIPLES.map((item) => (
          <div
            key={item.title}
            className="principle-card rounded-2xl border border-white/10 bg-[#141414] p-8"
          >
            <h3 className="mb-4 font-syne text-2xl">{item.title}</h3>

            <p className="text-zinc-400">{item.desc}</p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
