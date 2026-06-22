"use client";

import { useState } from "react";
import { FAQS } from "@/lib/constants";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="container-custom py-32">
      <h2 className="mb-16 text-center font-syne text-5xl font-bold">
        Questions?
      </h2>

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
              onClick={() => setOpen(open === index ? null : index)}
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
