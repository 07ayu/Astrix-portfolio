"use client";

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#6D5DFC20,transparent_55%)]" />

      <div className="container-custom pt-32 pb-24">
        <div className="max-w-5xl">
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-white/50">
            Expertise & Delivery
          </p>

          <h1
            className="
              font-syne
              text-[64px]
              font-extrabold
              leading-[0.9]
              tracking-[-0.05em]
              md:text-[88px]
              xl:text-[110px]
            "
          >
            Expert
            <br />
            Solutions for
            <br />
            Complex
            <br />
            Problems.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-400">
            We bridge the gap between high-level business strategy and deep
            technical execution.
          </p>
        </div>
      </div>
    </section>
  );
}
