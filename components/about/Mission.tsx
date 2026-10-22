"use client";

import SectionContainer from "../shared/SectionContainer";
import { useReveal } from "@/hooks/useReveal";
import InteractiveChip from "@/components/3d/InteractiveChip";

export default function Mission() {
  const contentRef = useReveal({ direction: "left" });
  const imageRef = useReveal({ direction: "right" });

  return (
    <SectionContainer>
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div ref={contentRef}>
          <h2 className="mb-8 font-syne text-4xl font-bold">Our Mission</h2>

          <blockquote className="max-w-xl text-3xl italic leading-tight text-white">
            "To empower the next generation of global businesses by architecting
            software that is as reliable as it is revolutionary."
          </blockquote>
        </div>

        <div ref={imageRef} className="relative">
          <InteractiveChip />
        </div>
      </div>
    </SectionContainer>
  );
}
