"use client";

import { useCallback, useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { FAQS } from "@/data";
import { useReveal } from "@/hooks/useReveal";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const sectionRef = useReveal({ direction: "up" });
  const toggle = useCallback((index: number) => {
    setOpen((prev) => (prev === index ? null : index));
  }, []);

  return (
    <section ref={sectionRef} className="container-custom py-28">
      <div className="mb-16 text-center">
        <SectionHeader
          title="Questions?"
          description="Find answers to common inquiries about our process and partnerships."
        />
      </div>

      <div className="mx-auto max-w-4xl space-y-4">
        {FAQS.map((faq, index) => (
          <div
            key={faq.question}
            className="
              rounded-2xl
              border
              border-white/5
              bg-[#141414]
            "
          >
            <button
              onClick={() => toggle(index)}
              className="
                flex
                w-full
                items-center
                justify-between
                p-6
                text-left
              "
            >
              <span>{faq.question}</span>

              <span>{open === index ? "−" : "+"}</span>
            </button>

            {open === index && (
              <div className="px-6 pb-6 text-neutral-400">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
