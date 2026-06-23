"use client";

import { useReveal } from "@/hooks/useReveal";

export default function ServicesHero() {
  const contentRef = useReveal({ direction: "up" });

  return (
    <section className="relative overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#6D5DFC20,transparent_55%)]" />

      <div className="container-custom pt-36 pb-24">
        <div ref={contentRef} className="max-w-4xl">
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-white/50">
            Expertise & Delivery
          </p>

          <h1 className="font-syne text-5xl font-extrabold leading-[0.9] tracking-[-0.04em] md:text-6xl lg:text-7xl">
            Expert
            <br />
            Solutions for
            <br />
            Complex
            <br />
            Problems.
          </h1>

          <p className="mt-8 max-w-lg text-lg leading-8 text-neutral-400">
            We bridge the gap between high-level business strategy and deep
            technical execution.
          </p>
        </div>
      </div>
    </section>
  );
}
