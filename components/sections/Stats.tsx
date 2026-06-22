"use client";

import { useCounter } from "@/hooks/useCounter";
import { STATS } from "@/lib/constants";

export default function Stats() {
  const counterRef = useCounter();

  return (
    <section ref={counterRef} className="border-y border-white/5 bg-[#0B0B0B]">
      <div className="container-custom">
        <div className="grid grid-cols-2 gap-y-10 py-10 md:grid-cols-4">
          {STATS.map((item) => (
            <div
              key={item.label}
              className="group text-center transition-all duration-300 hover"
            >
              <div key={item.label} className="text-center">
                <h3
                  className="
    counter
    font-syne
    text-6xl
    md:text-7xl
    font-bold
    transition-colors
    duration-300
    group-hover:text-[#6D5DFC]
  "
                  data-value={item.value}
                >
                  {item.value}
                </h3>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-neutral-500">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
