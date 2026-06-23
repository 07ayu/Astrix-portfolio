"use client";

import { memo } from "react";
import Image from "next/image";

type Props = {
  title: string;
  category: string;
  description: string;
  image: string;
  span: string;
};

const ProjectCard = memo(function ProjectCard({
  title,
  category,
  description,
  image,
  span,
}: Props) {
  return (
    <div
      className={`
        project-card
        group
        overflow-hidden
        rounded-[24px]
        border border-white/[0.05]
        bg-[#141414]
        ${span === "large" ? "md:col-span-2" : ""}
      `}
    >
      <div className="relative h-[320px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
      </div>

      <div className="p-6">
        <span className="text-xs uppercase tracking-[0.2em] text-[#6D5DFC]">
          {category}
        </span>

        <h3 className="mt-3 font-syne text-3xl font-bold">{title}</h3>

        <p className="mt-3 max-w-md text-neutral-400">{description}</p>
      </div>
    </div>
  );
});

export default ProjectCard;
