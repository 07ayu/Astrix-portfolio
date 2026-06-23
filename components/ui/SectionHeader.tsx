"use client";

import { memo } from "react";

type Props = {
  badge?: string;
  title: string;
  description?: string;
};

const SectionHeader = memo(function SectionHeader({ badge, title, description }: Props) {
  return (
    <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
      <div>
        {badge && (
          <span className="mb-4 inline-block text-xs uppercase tracking-[0.25em] text-[#6D5DFC]">
            {badge}
          </span>
        )}

        <h2 className="max-w-150 font-syne text-4xl font-bold leading-tight md:text-5xl">
          {title}
        </h2>
      </div>

      {description && (
        <p className="max-w-sm text-sm leading-7 text-neutral-400">
          {description}
        </p>
      )}
    </div>
  );
});

export default SectionHeader;
