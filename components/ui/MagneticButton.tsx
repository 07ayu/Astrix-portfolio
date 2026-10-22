"use client";

import React, { useRef, useCallback } from "react";
import { gsap } from "@/lib/gsap";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  onClick?: () => void;
}

export default function MagneticButton({
  children,
  className = "",
  strength = 0.3,
  onClick,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!ref.current) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distanceX = (e.clientX - centerX) * strength;
      const distanceY = (e.clientY - centerY) * strength;

      gsap.to(ref.current, {
        x: distanceX,
        y: distanceY,
        duration: 0.3,
        ease: "power2.out",
        overwrite: "auto",
      });
    },
    [strength]
  );

  const handleMouseLeave = useCallback(() => {
    if (!ref.current) return;
    gsap.to(ref.current, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: "elastic.out(1, 0.3)",
      overwrite: "auto",
    });
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`inline-block will-change-transform ${className}`}
    >
      {children}
    </div>
  );
}
