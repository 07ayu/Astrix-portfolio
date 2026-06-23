"use client";

import Image from "next/image";
import SectionContainer from "../shared/SectionContainer";
import SectionHeader from "@/components/ui/SectionHeader";
import { useReveal } from "@/hooks/useReveal";
import { useStagger } from "@/hooks/useStagger";
import { team } from "@/data";

export default function Team() {
  const headingRef = useReveal({ direction: "up" });
  const gridRef = useStagger(".team-card");

  return (
    <SectionContainer>
      <div ref={headingRef}>
        <SectionHeader
          title="The Architects"
          description="Meet the minds behind the machine."
        />
      </div>

      <div ref={gridRef} className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {team.map((member) => (
          <div
            key={member.name}
            className="team-card group overflow-hidden rounded-2xl border border-white/10 bg-[#141414]"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                width={600}
                height={800}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>

            <div className="p-5">
              <h3 className="font-semibold text-white">{member.name}</h3>

              <p className="text-sm text-zinc-500">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
