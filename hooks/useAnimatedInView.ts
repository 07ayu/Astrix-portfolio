"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

type Direction = "up" | "down" | "left" | "right";

type Options = {
  direction?: Direction;
  distance?: number;
  duration?: number;
  delay?: number;
  once?: boolean;
  stagger?: number;
  triggerStart?: string;
};

const defaults: Options = {
  direction: "up",
  distance: 60,
  duration: 0.8,
  delay: 0,
  once: true,
  triggerStart: "top 85%",
};

function getOffset(direction: Direction, distance: number) {
  switch (direction) {
    case "up": return { y: distance };
    case "down": return { y: -distance };
    case "left": return { x: distance };
    case "right": return { x: -distance };
  }
}

export function useReveal(options: Options = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const opts = { ...defaults, ...options };

  useLayoutEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { opacity: 0, ...getOffset(opts.direction!, opts.distance!) },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: opts.duration,
          delay: opts.delay,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ref.current,
            start: opts.triggerStart,
            once: opts.once,
          },
        },
      );
    }, ref);

    return () => ctx.revert();
  }, [opts.direction, opts.distance, opts.duration, opts.delay, opts.once, opts.triggerStart]);

  return ref;
}

export function useStaggeredReveal(selector: string, options: Options = {}) {
  const ref = useRef<HTMLElement>(null);
  const opts = { ...defaults, stagger: 0.12, ...options };

  useLayoutEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      const items = ref.current?.querySelectorAll(selector);
      if (!items?.length) return;

      gsap.fromTo(
        items,
        { opacity: 0, ...getOffset(opts.direction!, opts.distance!) },
        {
          opacity: 1,
          x: 0,
          y: 0,
          stagger: opts.stagger,
          duration: opts.duration,
          delay: opts.delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: opts.triggerStart,
            once: opts.once,
          },
        },
      );
    }, ref);

    return () => ctx.revert();
  }, [selector, opts.direction, opts.distance, opts.duration, opts.stagger, opts.delay, opts.once, opts.triggerStart]);

  return ref;
}
