"use client";

import { useStagger } from "@/hooks/useStagger";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiPostgresql,
  SiDocker,
  SiCloudflare,
  SiNestjs,
} from "react-icons/si";

const stack = [
  {
    name: "Next.js",
    icon: SiNextdotjs,
  },
  {
    name: "React",
    icon: SiReact,
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
  },
  {
    name: "Nest.js",
    icon: SiNestjs,
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
  },
  {
    name: "Docker",
    icon: SiDocker,
  },
  {
    name: "AWS",
    icon: SiCloudflare,
  },
];

export default function TechStack() {
  const gridRef = useStagger(".tech-item", { stagger: 0.08 });

  return (
    <section className="border-y border-white/5 bg-[#0c0c0c] py-16">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-white/40">
            THE TECH STACK
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {stack.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.name}
                className="tech-item group flex flex-col items-center gap-4"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-[#141414] transition-all duration-300 group-hover:border-[#6D5DFC]/40 group-hover:bg-[#181818]">
                  <Icon size={28} />
                </div>

                <span className="text-sm text-neutral-400">{item.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
