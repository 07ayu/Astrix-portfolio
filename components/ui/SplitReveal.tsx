"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

interface SplitRevealProps {
  children: string;
  className?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
}

export default function SplitReveal({
  children,
  className = "",
  delay = 0,
  duration = 0.8,
  stagger = 0.03,
}: SplitRevealProps) {
  const containerRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    // Check prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const words = containerRef.current.querySelectorAll(".split-word");
    if (!words.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        { y: "115%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
          duration,
          stagger,
          delay,
          ease: "power4.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 88%",
            once: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [delay, duration, stagger]);

  // Split text into words safely
  const words = children.split(" ");

  return (
    <span ref={containerRef} className={`inline-block ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-1 align-top mr-[0.25em] last:mr-0">
          <span className="split-word inline-block will-change-transform">
            {word}
          </span>
        </span>
      ))}
    </span>
  );
}
