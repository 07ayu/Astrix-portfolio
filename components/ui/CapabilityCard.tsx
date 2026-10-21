"use client";

import { ReactNode } from "react";

interface Props {
  title: string;
  description: string;
  icon?: ReactNode;
  points: string[];
  className?: string;
}

export default function CapabilityCard({
  title,
  description,
  points,
  className = "",
}: Props) {
  return (
    <div
      className={`${className} group rounded-[28px] border border-white/10 bg-[#0E0E14] p-8 transition-all duration-300 hover:border-[#6D5DFC]/40 hover:bg-[#12111A]`}
    >
      <div className="flex items-center justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#161422] text-[#A89BFF]">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        </div>
        <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-500 group-hover:text-[#A89BFF] transition-colors">
          ARCHITECTURE SPEC
        </span>
      </div>

      <h3 className="mt-6 mb-3 font-syne text-2xl font-bold text-white transition-colors group-hover:text-[#A89BFF]">
        {title}
      </h3>

      <p className="mb-6 text-sm leading-relaxed text-neutral-400">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 border-t border-white/5 pt-5">
        {points.map((item) => (
          <span
            key={item}
            className="rounded-lg border border-white/5 bg-white/[0.02] px-3 py-1 text-xs text-neutral-300"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
