"use client";

import { useState } from "react";
import Image from "next/image";
import SectionContainer from "../shared/SectionContainer";
import SectionHeader from "@/components/ui/SectionHeader";
import { useReveal } from "@/hooks/useReveal";
import { useStagger } from "@/hooks/useStagger";
import { team } from "@/data";

const TEAM_DETAILS: Record<string, { bio: string; skills: string[]; badge: string }> = {
  "Alex Wilson": {
    bio: "Specializes in high-throughput distributed systems, fault-tolerant consensus, and scalable cloud architectures.",
    skills: ["Distributed Systems", "TypeScript", "Microservices", "ClickHouse"],
    badge: "SYSTEMS ARCHITECT",
  },
  "Sarah Chen": {
    bio: "Pioneering creative WebGL shaders, fluid micro-interactions, and 60fps React application architectures.",
    skills: ["Next.js 16", "R3F / Three.js", "GSAP", "Tailwind CSS"],
    badge: "UI / CREATIVE LEAD",
  },
  "Clara Rodriguez": {
    bio: "Obsessed with cognitive load reduction, design system tokens, and editorial aesthetic precision.",
    skills: ["Design Systems", "Prototyping", "Design Tokens", "Typography"],
    badge: "PRODUCT DESIGN",
  },
  "Marcus Thorne": {
    bio: "Focuses on zero-downtime CI/CD pipelines, multi-region edge clusters, and strict zero-trust security postures.",
    skills: ["Kubernetes", "AWS / Cloudflare", "Terraform", "Edge CDN"],
    badge: "INFRASTRUCTURE LEAD",
  },
};

export default function Team() {
  const headingRef = useReveal({ direction: "up" });
  const gridRef = useStagger(".team-card", { stagger: 0.1 });
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

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
        {team.map((member, index) => {
          const details = TEAM_DETAILS[member.name] || {
            bio: "Core engineering architect building high-performance systems.",
            skills: ["Engineering", "Architecture"],
            badge: "STUDIO LEAD",
          };
          const isFlipped = flippedIndex === index;

          return (
            <div
              key={member.name}
              onMouseEnter={() => setFlippedIndex(index)}
              onMouseLeave={() => setFlippedIndex(null)}
              className="team-card h-[420px] [perspective:1200px]"
            >
              <div
                style={{
                  transformStyle: "preserve-3d",
                  transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
                className="relative h-full w-full rounded-2xl transition-transform duration-700 ease-out"
              >
                {/* FRONT FACE */}
                <div
                  style={{ backfaceVisibility: "hidden" }}
                  className="absolute inset-0 flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#0E0E14] shadow-xl"
                >
                  <div className="relative h-[310px] w-full overflow-hidden bg-[#181622]/40">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={600}
                      height={800}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E14] via-transparent to-transparent opacity-90" />
                    <div className="absolute top-3 left-3 rounded-full border border-white/10 bg-black/60 px-2.5 py-0.5 backdrop-blur-md">
                      <span className="font-mono text-[9px] uppercase tracking-widest text-[#A89BFF]">
                        {details.badge}
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="font-syne font-bold text-white text-lg">
                      {member.name}
                    </h3>
                    <p className="mt-0.5 font-mono text-xs text-neutral-400">
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* BACK FACE (REVEALED ON HOVER) */}
                <div
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                  className="absolute inset-0 flex flex-col justify-between rounded-2xl border border-[#6D5DFC]/40 bg-[#12101F] p-6 shadow-[0_0_35px_rgba(109,93,252,0.25)]"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[#6D5DFC] animate-pulse" />
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#A89BFF]">
                        {details.badge}
                      </span>
                    </div>

                    <h3 className="mt-4 font-syne text-xl font-bold text-white">
                      {member.name}
                    </h3>
                    <p className="mt-1 font-mono text-xs text-[#A89BFF]">
                      {member.role}
                    </p>

                    <p className="mt-5 text-xs leading-relaxed text-neutral-300">
                      {details.bio}
                    </p>
                  </div>

                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-neutral-500 mb-2">
                      Core Specializations:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {details.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[10px] text-neutral-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </SectionContainer>
  );
}
