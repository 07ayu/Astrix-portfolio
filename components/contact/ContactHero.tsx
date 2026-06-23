"use client";

import { useReveal } from "@/hooks/useReveal";

export default function ContactHero() {
  const contentRef = useReveal({ direction: "up" });

  return (
    <section className="relative overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#6D5DFC20,transparent_55%)]" />

      <div className="container-custom pt-36 pb-20">
        <div ref={contentRef} className="max-w-4xl">
          <h1 className="font-syne text-5xl font-extrabold leading-[0.9] tracking-[-0.04em] md:text-6xl lg:text-7xl">
            Start a
            <br />
            <span className="text-[#A89BFF]">Conversation.</span>
          </h1>

          <p className="mt-8 max-w-lg text-lg leading-8 text-neutral-400">
            Ready to transform your digital presence? We combine elite
            craftsmanship with technical precision to build software that
            scales.
          </p>
        </div>
      </div>
    </section>
  );
}
