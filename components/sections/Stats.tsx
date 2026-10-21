"use client";

import { useCounter } from "@/hooks/useCounter";
import { STATS } from "@/data";

export default function Stats() {
  const counterRef = useCounter();

  return (
    <section ref={counterRef} className="border-y border-white/5 bg-[#08080C] py-14">
      <div className="container-custom">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((item) => (
            <div
              key={item.label}
              className="group flex flex-col items-center justify-center text-center transition-all duration-300"
            >
              <h3
                className="counter font-syne text-4xl md:text-5xl font-extrabold tracking-tight text-white transition-colors duration-300 group-hover:text-[#A89BFF]"
                data-value={item.value}
              >
                {item.value}
              </h3>
              <p className="mt-2 text-xs font-mono uppercase tracking-[0.15em] text-neutral-400">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
