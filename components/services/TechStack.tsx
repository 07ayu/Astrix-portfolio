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
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React", icon: SiReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Nest.js", icon: SiNestjs },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Docker", icon: SiDocker },
  { name: "Cloudflare", icon: SiCloudflare },
];

export default function TechStack() {
  const gridRef = useStagger(".tech-item", { stagger: 0.08 });

  return (
    <section className="border-y border-white/5 bg-[#08080C] py-18">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#A89BFF]">
            PROVEN ENGINEERING STACK
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-2 gap-6 sm:grid-cols-4 md:grid-cols-7">
          {stack.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.name}
                className="tech-item group flex flex-col items-center gap-3.5"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-[#0E0E14] text-neutral-400 transition-all duration-300 group-hover:border-[#6D5DFC]/60 group-hover:bg-[#141220] group-hover:text-white group-hover:shadow-[0_0_25px_rgba(109,93,252,0.3)]">
                  <Icon size={26} />
                </div>

                <span className="font-mono text-xs text-neutral-400 group-hover:text-neutral-200 transition-colors">
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
