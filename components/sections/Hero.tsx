"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/5">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#6D5DFC20,transparent_55%)]" />

      <div className="absolute left-1/2 top-20 -translate-x-1/2 h-[650px] w-[900px] rounded-full bg-[#6D5DFC]/15 blur-[220px]" />

      <div className="container-custom relative pt-32 pb-28">
        <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
          {/* LEFT */}
          <div>
            {/* EYEBROW */}
            <div className="mb-8">
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[11px] uppercase tracking-[0.25em] text-white/70">
                Elite Software Studio
              </span>
            </div>

            {/* HEADING */}
            <h1
              className="
                max-w-[760px]
                font-syne
                text-[64px]
                font-extrabold
                leading-[0.86]
                tracking-[-0.06em]
                md:text-[88px]
                xl:text-[110px]
              "
            >
              Engineering
              <br />
              Excellence
              <br />
              <span className="text-[#A89BFF]">at Scale.</span>
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-8 max-w-[580px] text-[17px] leading-8 text-neutral-400">
              We architect high-performance software ecosystems for startups,
              enterprises, and ambitious founders seeking uncompromising
              technical execution.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap gap-4">
              <button className="h-14 rounded-2xl bg-[#6D5DFC] px-8 font-medium transition hover:scale-[1.02]">
                Start a Project
              </button>

              <button className="h-14 rounded-2xl border border-white/10 px-8 font-medium transition hover:bg-white/5">
                View Portfolio
              </button>
            </div>

            {/* STATS */}
            <div className="mt-14 flex flex-wrap gap-10 border-t border-white/5 pt-10">
              <div>
                <p className="font-syne text-4xl font-bold">50+</p>
                <p className="mt-2 text-sm text-neutral-500">
                  Projects Delivered
                </p>
              </div>

              <div>
                <p className="font-syne text-4xl font-bold">12</p>
                <p className="mt-2 text-sm text-neutral-500">
                  Countries Served
                </p>
              </div>

              <div>
                <p className="font-syne text-4xl font-bold">99%</p>
                <p className="mt-2 text-sm text-neutral-500">
                  Client Retention
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative">
            {/* floating card */}
            <div className="absolute -left-8 top-10 z-20 rounded-3xl border border-white/10 bg-black/70 p-6 backdrop-blur-xl">
              <p className="text-xs uppercase tracking-widest text-neutral-500">
                PERFORMANCE
              </p>

              <p className="mt-2 font-syne text-4xl font-bold text-[#A89BFF]">
                +400%
              </p>

              <p className="text-sm text-neutral-400">Throughput Increase</p>
            </div>

            {/* image */}
            <div className="overflow-hidden rounded-[32px] border border-white/10 bg-[#111]">
              <Image
                src="/hero/server-room.jpg"
                alt="Astrix Infrastructure"
                width={1200}
                height={1600}
                className="h-[680px] w-full object-cover"
                priority
              />
            </div>

            {/* bottom card */}
            <div className="absolute -bottom-8 right-6 rounded-3xl border border-white/10 bg-black/80 p-6 backdrop-blur-xl">
              <p className="font-syne text-3xl font-bold">99.99%</p>

              <p className="mt-1 text-sm text-neutral-400">Uptime Guaranteed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
