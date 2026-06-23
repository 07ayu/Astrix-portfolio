"use client";

import { gsap } from "@/lib/gsap";
import { useLayoutEffect, useRef } from "react";

export function useStagger(selector: string, options?: {
  stagger?: number;
  duration?: number;
  distance?: number;
  triggerStart?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const {
    stagger = 0.12,
    duration = 0.8,
    distance = 40,
    triggerStart = "top 85%",
  } = options ?? {};

  useLayoutEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      const container = ref.current;

      if (!container) return;

      const items = container.querySelectorAll(selector);

      gsap.fromTo(
        items,
        { opacity: 0, y: distance },
        {
          opacity: 1,
          y: 0,
          stagger,
          duration,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: triggerStart,
            once: true,
          },
        },
      );
    }, ref);

    return () => ctx.revert();
  }, [selector, stagger, duration, distance, triggerStart]);

  return ref;
}
