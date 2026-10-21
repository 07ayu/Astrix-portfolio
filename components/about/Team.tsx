"use client";

import Image from "next/image";
import SectionContainer from "../shared/SectionContainer";
import SectionHeader from "@/components/ui/SectionHeader";
import { useReveal } from "@/hooks/useReveal";
import { useStagger } from "@/hooks/useStagger";
import { team } from "@/data";

export default function Team() {
  const headingRef = useReveal({ direction: "up" });
  const gridRef = useStagger(".team-card", { stagger: 0.1 });

  return (
    <SectionContainer>
      <div ref={headingRef}>
        <SectionHeader
          badge="STUDIO LEADERSHIP"
          title="The Systems Architects"
          description="Experienced engineers and designers dedicated to building scalable digital platforms."
        />
      </div>

      <div ref={gridRef} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((member) => (
          <div
            key={member.name}
            className="team-card group overflow-hidden rounded-2xl border border-white/10 bg-[#0E0E14] transition-all duration-300 hover:border-[#6D5DFC]/40 hover:bg-[#12111A]"
          >
            <div className="aspect-[4/5] overflow-hidden bg-[#181622]/40">
              <Image
                src={member.image}
                alt={member.name}
                width={600}
                height={800}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>

            <div className="p-5">
              <h3 className="font-syne font-bold text-white transition-colors group-hover:text-[#A89BFF]">
                {member.name}
              </h3>
              <p className="mt-1 font-mono text-xs text-neutral-400">
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
