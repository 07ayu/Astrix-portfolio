"use client";

import { memo, useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import SpotlightCard from "./SpotlightCard";
import MagneticButton from "./MagneticButton";

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
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rx = -((y - centerY) / centerY) * 6; // max 6 deg
    const ry = ((x - centerX) / centerX) * 6;
    setTilt({ rx, ry });
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setTilt({ rx: 0, ry: 0 });
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) scale3d(${isHovered ? 1.015 : 1}, ${isHovered ? 1.015 : 1}, 1)`,
        transition: isHovered ? "transform 0.1s ease-out" : "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)",
      }}
      className={`
        project-card
        ${isLarge ? "lg:col-span-2" : "lg:col-span-1"}
        h-full
      `}
    >
      <SpotlightCard
        className="group flex flex-col justify-between h-full"
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
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E14] via-transparent to-black/30" />

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

        {/* Footer Link with Magnetic attraction */}
        <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4">
          <span className="text-xs text-neutral-500">Production Case Study</span>
          <MagneticButton strength={0.35}>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[#A89BFF] hover:text-white transition-colors px-2 py-1 rounded-md"
            >
              <span>View Architecture</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </MagneticButton>
        </div>
      </div>
    </SpotlightCard>
  </div>
);
});

export default ProjectCard;
