"use client";

import { memo } from "react";

type Props = {
  title: string;
  description: string;
};

const FeatureCard = memo(function FeatureCard({ title, description }: Props) {
  return (
    <div
      className="
        feature-card
        group
        rounded-3xl
        border
        border-white/10
        bg-[#0E0E12]
        p-8
        transition-all
        duration-300
        hover:border-[#6D5DFC]/40
        hover:bg-[#12111A]
      "
    >
      <h3 className="mb-3 font-syne text-xl font-bold text-white transition-colors group-hover:text-[#A89BFF]">
        {title}
      </h3>

      <p className="text-sm leading-relaxed text-neutral-400">{description}</p>
    </div>
  );
});

export default FeatureCard;
