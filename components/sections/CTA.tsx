"use client";

import { useReveal } from "@/hooks/useReveal";

export default function CTA() {
  const sectionRef = useReveal({ direction: "up", distance: 80 });

  return (
    <section ref={sectionRef} className="container-custom py-20">
      <div
        className="
          rounded-[40px]
          bg-[#6D5DFC]
          px-10
          py-24
          text-center
        "
      >
        <h2 className="font-syne text-6xl font-bold text-black">
          Let's Create
          <br />
          Something Great
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-black/70">
          Ready to transform your vision into a premium digital experience?
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="rounded-xl bg-black px-8 py-4 text-white">
            Book A Strategy Call
          </button>

          <button className="rounded-xl border border-black/20 px-8 py-4 text-black">
            Email Us Directly
          </button>
        </div>
      </div>
    </section>
  );
}
