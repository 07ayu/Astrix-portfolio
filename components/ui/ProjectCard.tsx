"use client";

import { memo } from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  category: string;
  description: string;
  image: string;
  span: "large" | "small";
  metrics?: string;
  stack?: string[];
  deliverables?: string[];
};

const ProjectCard = memo(function ProjectCard({
  title,
  category,
  description,
  image,
  span,
  metrics,
  stack,
  deliverables,
}: Props) {
  const isLarge = span === "large";

  return (
    <div
      className={`
        project-card
        group
        relative
        flex
        flex-col
        justify-between
        overflow-hidden
        rounded-[28px]
        border
        border-white/10
        bg-[#0D0D12]
        transition-all
        duration-500
        hover:border-[#6D5DFC]/40
        hover:bg-[#111019]
        ${isLarge ? "lg:col-span-2" : "lg:col-span-1"}
      `}
    >
      {/* Top Visual Preview Container */}
      <div className={`relative w-full overflow-hidden border-b border-white/5 ${isLarge ? "h-[340px]" : "h-[260px]"}`}>
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Subtle glass reflection gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D12] via-transparent to-black/30" />

        {/* Live Architecture Metric Chip */}
        {metrics && (
          <div className="absolute top-4 right-4 z-10 rounded-full border border-white/15 bg-black/70 px-3.5 py-1.5 backdrop-blur-md">
            <p className="font-mono text-xs font-semibold text-[#A89BFF]">
              {metrics}
            </p>
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-10 rounded-full border border-white/10 bg-black/60 px-3 py-1 backdrop-blur-md">
          <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-300">
            {category}
          </span>
        </div>
      </div>

      {/* Content & Case Study Storytelling */}
      <div className="p-7">
        <div className="flex flex-col">
          <h3 className="font-syne text-2xl font-bold text-white transition-colors group-hover:text-[#A89BFF] md:text-3xl">
            {title}
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-neutral-400">
            {description}
          </p>
        </div>

        {/* Tech Stack Pills */}
        {stack && stack.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {stack.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-white/5 bg-white/[0.03] px-2 py-0.5 font-mono text-[11px] text-neutral-300"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Deliverables / Architecture highlights */}
        {deliverables && isLarge && (
          <div className="mt-5 hidden sm:flex items-center gap-3 border-t border-white/5 pt-4 text-xs text-neutral-500">
            <span className="font-mono uppercase text-[10px] text-neutral-400">
              Core Deliverables:
            </span>
            {deliverables.map((item, idx) => (
              <span key={item} className="flex items-center gap-2">
                {idx > 0 && <span>•</span>}
                <span className="text-neutral-300">{item}</span>
              </span>
            ))}
          </div>
        )}

        {/* Footer Link */}
        <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4">
          <span className="text-xs text-neutral-500">Production Case Study</span>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#A89BFF] hover:text-white transition-colors"
          >
            <span>View Architecture</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
});

export default ProjectCard;
