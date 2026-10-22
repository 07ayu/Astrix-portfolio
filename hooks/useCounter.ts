"use client";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export function useCounter() {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (!ref.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const counters = ref.current?.querySelectorAll("[data-value]");
      if (!counters) return;

      counters.forEach((counter) => {
        const target = counter.getAttribute("data-value");
        if (!target) return;

        const isDecimal = target.includes(".");
        const numericMatch = target.match(/[\d.]+/);
        if (!numericMatch) return;

        const targetValue = parseFloat(numericMatch[0]);
        const obj = { value: 0 };

        gsap.to(obj, {
          value: targetValue,
          duration: 2.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 88%",
            once: true,
          },
          onUpdate: () => {
            const currentFormatted = isDecimal
              ? obj.value.toFixed(2)
              : Math.floor(obj.value).toString();

            if (target.includes("%")) {
              counter.textContent = `${currentFormatted}%`;
            } else if (target.includes("+")) {
              counter.textContent = `${currentFormatted}+`;
            } else {
              counter.textContent = currentFormatted;
            }
          },
        });
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return ref;
}
