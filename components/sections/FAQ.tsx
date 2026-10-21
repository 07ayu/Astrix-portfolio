"use client";

import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { FAQS } from "@/data";
import { useReveal } from "@/hooks/useReveal";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useReveal({ direction: "up" });

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section ref={sectionRef} className="container-custom py-28 border-b border-white/5">
      <SectionHeader
        badge="TRANSPARENT ENGAGEMENT"
        title="Frequently Answered Inquiries"
        description="Everything you need to know about our sprints, code delivery, and architecture partnerships."
      />

      <div className="mx-auto max-w-3xl space-y-4">
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={faq.question}
              className={`rounded-2xl border transition-all duration-300 ${
                isOpen
                  ? "border-[#6D5DFC]/40 bg-[#12111A]"
                  : "border-white/10 bg-[#0E0E12] hover:border-white/20"
              }`}
            >
              <button
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between p-6 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-syne text-base md:text-lg font-bold text-white">
                  {faq.question}
                </span>

                <div
                  className={`ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 transition-transform duration-300 ${
                    isOpen ? "rotate-45 border-[#6D5DFC] bg-[#6D5DFC]/20 text-[#A89BFF]" : "text-neutral-400"
                  }`}
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
              </button>

              {isOpen && (
                <div className="px-6 pb-6 text-sm leading-relaxed text-neutral-300 border-t border-white/5 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
