"use client";

import React, { useRef, useState, useCallback } from "react";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  borderColor?: string;
}

export default function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(109, 93, 252, 0.12)",
  borderColor = "rgba(168, 155, 255, 0.3)",
  ...props
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    cardRef.current.style.setProperty("--mx", `${x}px`);
    cardRef.current.style.setProperty("--my", `${y}px`);
  }, []);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0E0E14] transition-all duration-300 ${className}`}
      {...props}
    >
      {/* Dynamic Cursor Spotlight Layer */}
      <div
        className="pointer-events-none absolute -inset-px rounded-[28px] opacity-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(450px circle at var(--mx, 50%) var(--my, 50%), ${spotlightColor}, transparent 80%)`,
        }}
      />

      {/* Dynamic Border Glow Layer */}
      <div
        className="pointer-events-none absolute -inset-px rounded-[28px] opacity-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          border: `1px solid transparent`,
          maskImage: `radial-gradient(220px circle at var(--mx, 50%) var(--my, 50%), black, transparent 80%)`,
          WebkitMaskImage: `radial-gradient(220px circle at var(--mx, 50%) var(--my, 50%), black, transparent 80%)`,
          boxShadow: `inset 0 0 0 1px ${borderColor}`,
        }}
      />

      {/* Card Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
