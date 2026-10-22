"use client";

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
  return (
    <section className="border-y border-white/5 bg-[#08080C] py-20 overflow-hidden">
      <div className="container-custom mb-10 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#A89BFF]">
          PROVEN ENGINEERING ECOSYSTEM
        </p>
      </div>

      {/* Infinite Seamless Marquee track */}
      <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <div className="flex w-max animate-[marquee_30s_linear_infinite] hover:[animation-play-state:paused] gap-8 py-4">
          {[...stack, ...stack, ...stack].map((item, idx) => {
            const Icon = item.icon;

            return (
              <div
                key={`${item.name}-${idx}`}
                className="group flex flex-col items-center gap-3.5 px-6 select-none cursor-pointer"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-[#0E0E14] text-neutral-400 transition-all duration-300 group-hover:scale-110 group-hover:border-[#6D5DFC] group-hover:bg-[#141220] group-hover:text-white group-hover:shadow-[0_0_30px_rgba(109,93,252,0.45)]">
                  <Icon size={32} />
                </div>

                <span className="font-mono text-xs text-neutral-400 group-hover:text-white transition-colors">
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
