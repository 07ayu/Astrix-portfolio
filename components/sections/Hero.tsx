"use client";

import Link from "next/link";
import { useReveal } from "@/hooks/useReveal";
import { STATS } from "@/data";
import MagneticButton from "@/components/ui/MagneticButton";
import SplitReveal from "@/components/ui/SplitReveal";

export default function Hero() {
  const contentRef = useReveal({ direction: "up", delay: 0.1 });
  const visualRef = useReveal({ direction: "left", delay: 0.2 });

  return (
    <section className="relative min-h-[92vh] overflow-hidden border-b border-white/5 pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Restrained architectural ambient gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,#6D5DFC18,transparent_50%)]" />
      <div className="pointer-events-none absolute right-10 top-1/4 h-[500px] w-[500px] rounded-full bg-[#6D5DFC]/10 blur-[180px]" />

      <div className="container-custom relative">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* LEFT EDITORIAL CONTENT (Column 7) */}
          <div ref={contentRef} className="lg:col-span-7">
            {/* EYEBROW BADGE */}
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-[#6D5DFC] animate-pulse" />
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-300">
                Software Architecture & Engineering Studio
              </span>
            </div>

            {/* EDITORIAL HEADING WITH SPLIT REVEAL */}
            <h1 className="font-syne text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-extrabold tracking-[-0.03em] text-white leading-[1.05] sm:leading-[0.95]">
              <SplitReveal>Engineering</SplitReveal>
              <br />
              <SplitReveal delay={0.1}>Excellence</SplitReveal>
              <br />
              <span className="bg-gradient-to-r from-[#A89BFF] via-[#8a6dff] to-[#6D5DFC] bg-clip-text text-transparent">
                <SplitReveal delay={0.2}>at Scale.</SplitReveal>
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-8 max-w-xl text-base md:text-lg leading-relaxed text-neutral-400">
              We design and build production-grade web systems, high-throughput cloud infrastructure, and modern SaaS products for ambitious tech companies.
            </p>

            {/* CALL TO ACTION BUTTONS WITH MAGNETIC ATTRACTION */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <MagneticButton strength={0.25}>
                <Link
                  href="/contact"
                  className="group inline-flex h-13 items-center justify-center rounded-xl bg-[#6D5DFC] px-7 text-sm font-semibold text-white shadow-[0_0_25px_rgba(109,93,252,0.35)] transition-all duration-300 hover:scale-[1.02] hover:bg-[#7c6dff] hover:shadow-[0_0_35px_rgba(109,93,252,0.55)] active:scale-[0.98]"
                >
                  <span>Start a Project</span>
                  <svg
                    className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </MagneticButton>

              <MagneticButton strength={0.25}>
                <Link
                  href="/portfolio"
                  className="inline-flex h-13 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] px-7 text-sm font-medium text-neutral-300 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
                >
                  View Case Studies
                </Link>
              </MagneticButton>
            </div>

            {/* KEY METRICS */}
            <div className="mt-14 grid grid-cols-2 gap-6 border-t border-white/5 pt-8 sm:grid-cols-4">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="font-syne text-2xl font-bold text-white md:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[11px] uppercase tracking-wider text-neutral-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT 3D INTERACTIVE VISUAL (Column 5) */}
          <div ref={visualRef} className="relative lg:col-span-5">
            <div className="relative mx-auto h-[440px] w-full max-w-[500px] lg:h-[560px] lg:max-w-none">
              {/* Telemetry Badge Top */}
              <div className="absolute top-4 left-0 z-20 rounded-2xl border border-white/10 bg-[#0B0B0E]/85 p-4 backdrop-blur-xl shadow-2xl">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-neutral-400">
                    Core Runtime
                  </p>
                </div>
                <p className="mt-1 font-syne text-xl font-bold text-white">
                  99.98% <span className="text-xs font-normal text-neutral-400">SLA</span>
                </p>
                <p className="text-[11px] text-[#A89BFF]">Sub-15ms Edge Latency</p>
              </div>

              {/* Glass Aperture Window: looks directly through to the persistent 3D canvas on desktop */}
              <div className="group relative h-full w-full rounded-3xl border border-white/[0.1] bg-[#0A0A0E]/30 p-2 backdrop-blur-[2px] transition-all duration-500 hover:border-[#6D5DFC]/40 shadow-[0_0_50px_rgba(109,93,252,0.12)]">
                {/* Tech Reticles & Crosshairs */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl overflow-hidden">
                  {/* Subtle Grid overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />
                  
                  {/* Corner Tech Brackets */}
                  <span className="absolute top-3 left-3 text-[10px] font-mono text-white/30">+</span>
                  <span className="absolute top-3 right-3 text-[10px] font-mono text-white/30">+</span>
                  <span className="absolute bottom-3 left-3 text-[10px] font-mono text-white/30">+</span>
                  <span className="absolute bottom-3 right-3 text-[10px] font-mono text-white/30">+</span>

                  {/* Axis coordinate tags */}
                  <span className="absolute top-4 right-10 font-mono text-[9px] uppercase tracking-widest text-[#A89BFF]/60">
                    AXIS_V.01 // CORE
                  </span>
                  <span className="absolute bottom-4 left-6 font-mono text-[9px] uppercase tracking-widest text-neutral-500">
                    SYSTEM_STABLE: 60FPS
                  </span>
                </div>

                {/* Mobile / Low-power Vector Fallback (visible on small screens where persistent 3D is disabled) */}
                <div className="relative flex h-full w-full items-center justify-center lg:hidden">
                  <div className="relative flex items-center justify-center">
                    <div className="h-56 w-56 rounded-full border border-white/10 animate-[spin_30s_linear_infinite]" />
                    <div className="absolute h-72 w-72 rounded-full border border-dashed border-[#6D5DFC]/30 animate-[spin_45s_linear_infinite_reverse]" />
                    <div className="absolute h-40 w-40 rounded-full border border-[#A89BFF]/30" />
                    <div className="absolute flex h-24 w-24 items-center justify-center rounded-2xl border border-white/20 bg-[#12101e]/85 backdrop-blur-xl shadow-[0_0_40px_rgba(109,93,252,0.4)]">
                      <div className="h-8 w-8 rotate-45 border-2 border-[#A89BFF] bg-[#6D5DFC]/40 shadow-[0_0_15px_#6D5DFC]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Telemetry Badge Bottom */}
              <div className="absolute -bottom-4 right-0 z-20 rounded-2xl border border-white/10 bg-[#0B0B0E]/85 p-4 backdrop-blur-xl shadow-2xl">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-neutral-400">
                  Engineering Standard
                </p>
                <p className="mt-1 font-syne text-lg font-bold text-white">
                  Zero-Downtime Deployments
                </p>
                <div className="mt-2 flex items-center gap-2 text-[11px] text-neutral-400">
                  <span className="rounded bg-white/5 px-2 py-0.5 font-mono text-[10px] text-[#A89BFF]">
                    Next.js 16
                  </span>
                  <span>•</span>
                  <span className="rounded bg-white/5 px-2 py-0.5 font-mono text-[10px] text-[#A89BFF]">
                    Microservices
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
