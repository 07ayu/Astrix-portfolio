"use client";

import Link from "next/link";
import { useReveal } from "@/hooks/useReveal";
import { CONTACT_INFO } from "@/data";

export default function CTA() {
  const sectionRef = useReveal({ direction: "up", distance: 60 });

  return (
    <section ref={sectionRef} className="container-custom py-24">
      <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[#0E0E14] px-8 py-20 text-center md:px-16 md:py-24">
        {/* Ambient violet spotlight */}
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[350px] w-[600px] rounded-full bg-[#6D5DFC]/20 blur-[140px]" />

        <div className="relative z-10 mx-auto max-w-2xl">
          <span className="inline-block rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-[#A89BFF]">
            {CONTACT_INFO.motto}
          </span>

          <h2 className="mt-6 font-syne text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
            {CONTACT_INFO.tagline}
          </h2>

          <p className="mt-6 text-sm md:text-base leading-relaxed text-neutral-400">
            From web and mobile applications to desktop software, augmented reality, and artificial intelligence integration — let’s build together.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex h-13 items-center justify-center rounded-xl bg-[#6D5DFC] px-8 text-sm font-semibold text-white shadow-[0_0_30px_rgba(109,93,252,0.4)] transition-all duration-300 hover:scale-[1.02] hover:bg-[#7b6dff] active:scale-[0.98]"
            >
              Start a Project
            </Link>

            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="inline-flex h-13 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] px-8 text-sm font-medium text-neutral-300 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
            >
              {CONTACT_INFO.email}
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400">
            <span>• Call: {CONTACT_INFO.phone}</span>
            <span>• {CONTACT_INFO.phoneActionText}</span>
            <span>• {CONTACT_INFO.emailActionText}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
