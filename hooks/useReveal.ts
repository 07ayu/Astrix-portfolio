"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

type Direction = "up" | "down" | "left" | "right";

export function useReveal(options?: {
  direction?: Direction;
  distance?: number;
  duration?: number;
  delay?: number;
  once?: boolean;
  triggerStart?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const {
    direction = "up",
    distance = 60,
    duration = 0.8,
    delay = 0,
    once = true,
    triggerStart = "top 85%",
  } = options ?? {};

  useLayoutEffect(() => {
    if (!ref.current) return;

    const from: gsap.TweenVars = { opacity: 0 };
    if (direction === "up") from.y = distance;
    else if (direction === "down") from.y = -distance;
    else if (direction === "left") from.x = distance;
    else if (direction === "right") from.x = -distance;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        from,
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration,
          delay,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ref.current,
            start: triggerStart,
            once,
          },
        },
      );
    }, ref);

    return () => ctx.revert();
  }, [direction, distance, duration, delay, once, triggerStart]);

  return ref;
}
