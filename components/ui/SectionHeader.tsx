"use client";

import { memo } from "react";
import SplitReveal from "./SplitReveal";

type Props = {
  badge?: string;
  title: string;
  description?: string;
  className?: string;
};

const SectionHeader = memo(function SectionHeader({
  badge,
  title,
  description,
  className = "",
}: Props) {
  return (
    <div className={`mb-16 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between ${className}`}>
      <div>
        {badge && (
          <div className="mb-4 inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6D5DFC] shadow-[0_0_8px_#6D5DFC]" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#A89BFF]">
              {badge}
            </span>
          </div>
        )}

        <h2 className="max-w-2xl font-syne text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">
          <SplitReveal>{title}</SplitReveal>
        </h2>
      </div>

      {description && (
        <p className="max-w-md text-sm leading-relaxed text-neutral-400">
          {description}
        </p>
      )}
    </div>
  );
});

export default SectionHeader;
