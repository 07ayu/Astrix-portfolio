"use client";

import { gsap } from "@/lib/gsap";
import { useLayoutEffect, useRef } from "react";

export function useStagger(selector: string) {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      const container = ref.current;

      if (!container) return;

      const items = container.querySelectorAll(selector);

      gsap.fromTo(
        items,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            once: true,
          },
        },
      );
    }, ref);

    return () => ctx.revert();
  }, [selector]);

  return ref;
}
