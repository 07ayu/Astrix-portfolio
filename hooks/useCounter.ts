"use client";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export function useCounter() {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (!ref.current) return;

    const counters = ref.current.querySelectorAll("[data-value]");

    counters.forEach((counter) => {
      const target = counter.getAttribute("data-value" || "0");

      const numericValue = parseInt(target?.replace(/\D/g, ""));

      const obj = { value: 0 };

      gsap.to(obj, {
        value: numericValue,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          once: true,
        },
        onUpdate: () => {
          const current = Math.floor(obj.value);

          if (target?.includes("%")) {
            counter.textContent = `${current}%`;
          } else if (target?.includes("+")) {
            counter.textContent = `${current}+`;
          } else {
            counter.textContent = `${current}`;
          }
        },
      });
    });
  }, []);
  return ref;
}
