"use client";

import { useState } from "react";
import Link from "next/link";
import { useReveal } from "@/hooks/useReveal";
import { useStagger } from "@/hooks/useStagger";
import { CONTACT_INFO } from "@/data";

const projectTypes = [
  "Web Development",
  "App Development",
  "Desktop Application",
  "Software Solutions",
  "Augmented Reality",
  "AI Integration",
];

export default function ContactSection() {
  const formRef = useReveal({ direction: "left" });
  const sidebarRef = useStagger(".contact-card");

  const [selectedTypes, setSelectedTypes] = useState<string[]>(["Web Development"]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    details: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const toggleType = (type: string) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", details: "" });
    }, 800);
  };

  return (
    <section className="py-24">
      <div className="container-custom">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          {/* FORM */}
          <div
            ref={formRef}
            className="rounded-[32px] border border-white/10 bg-[#0E0E14] p-8 md:p-10"
          >
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="mt-6 font-syne text-2xl font-bold text-white">
                  Inquiry Received
                </h3>
                <p className="mt-2 max-w-md text-sm text-neutral-400">
                  Thank you for reaching out to Astrix. We will review your project requirements and connect with you shortly.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-8 rounded-xl border border-white/10 bg-white/5 px-6 py-2.5 text-xs font-semibold text-white hover:bg-white/10 transition"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2.5 block text-xs font-semibold uppercase tracking-wider text-neutral-400">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full rounded-xl border border-white/10 bg-[#08080C] px-4 py-3.5 text-sm text-white placeholder-neutral-500 outline-none transition focus:border-[#6D5DFC]/80"
                    />
                  </div>

                  <div>
                    <label className="mb-2.5 block text-xs font-semibold uppercase tracking-wider text-neutral-400">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full rounded-xl border border-white/10 bg-[#08080C] px-4 py-3.5 text-sm text-white placeholder-neutral-500 outline-none transition focus:border-[#6D5DFC]/80"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2.5 block text-xs font-semibold uppercase tracking-wider text-neutral-400">
                    Services of Interest (Select all that apply)
                  </label>
                  <div className="flex flex-wrap gap-2.5">
                    {projectTypes.map((item) => {
                      const isSelected = selectedTypes.includes(item);
                      return (
                        <button
                          type="button"
                          key={item}
                          onClick={() => toggleType(item)}
                          className={`rounded-xl border px-3.5 py-2 text-xs font-medium transition-all ${
                            isSelected
                              ? "border-[#6D5DFC] bg-[#6D5DFC]/20 text-[#A89BFF]"
                              : "border-white/10 bg-[#08080C] text-neutral-400 hover:border-white/20 hover:text-white"
                          }`}
                        >
                          {item}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="mb-2.5 block text-xs font-semibold uppercase tracking-wider text-neutral-400">
                    Project Goals & Requirements *
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    placeholder="Tell us about your idea, required technology, expected timeline, or features you want to build..."
                    className="w-full rounded-xl border border-white/10 bg-[#08080C] p-4 text-sm text-white placeholder-neutral-500 outline-none transition focus:border-[#6D5DFC]/80"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex h-13 items-center justify-center rounded-xl bg-[#6D5DFC] px-8 text-sm font-semibold text-white shadow-[0_0_25px_rgba(109,93,252,0.35)] transition-all duration-300 hover:scale-[1.02] hover:bg-[#7b6dff] active:scale-[0.98] disabled:opacity-50"
                >
                  {status === "submitting" ? "Submitting Inquiry..." : "Submit Project Inquiry"}
                </button>
              </form>
            )}
          </div>

          {/* RIGHT SIDE CONTACT INFORMATION */}
          <div ref={sidebarRef} className="space-y-6">
            <div className="contact-card rounded-[32px] border border-white/10 bg-[#0E0E14] p-8">
              <h3 className="font-syne text-2xl font-bold text-white">Direct Channels</h3>
              <p className="mt-1 text-xs text-[#A89BFF] font-medium">{CONTACT_INFO.motto} — {CONTACT_INFO.tagline}</p>

              <div className="mt-6 space-y-5 text-sm text-neutral-400">
                {/* Phone */}
                <div>
                  <p className="text-xs uppercase tracking-wider text-neutral-500">Call / WhatsApp</p>
                  <a href={`tel:${CONTACT_INFO.phone}`} className="mt-1 block font-syne text-lg font-bold text-white hover:text-[#A89BFF]">
                    {CONTACT_INFO.phone}
                  </a>
                  <p className="text-xs text-neutral-400">{CONTACT_INFO.phoneActionText}</p>
                </div>

                {/* Email */}
                <div>
                  <p className="text-xs uppercase tracking-wider text-neutral-500">Email Address</p>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="mt-1 block font-mono text-sm text-white hover:text-[#A89BFF] break-all">
                    {CONTACT_INFO.email}
                  </a>
                  <p className="text-xs text-neutral-400">{CONTACT_INFO.emailActionText}</p>
                </div>

                {/* Philosophy */}
                <div className="border-t border-white/5 pt-4">
                  <p className="text-xs uppercase tracking-wider text-neutral-500">Philosophy</p>
                  <p className="mt-1 text-white font-medium">{CONTACT_INFO.motto}</p>
                  <p className="text-xs text-neutral-400">{CONTACT_INFO.tagline}</p>
                </div>
              </div>
            </div>

            {/* QUICK SHORTCUTS */}
            <div className="contact-card rounded-[32px] border border-white/10 bg-[#0E0E14] p-8">
              <h4 className="font-syne text-lg font-bold text-white">Explore Solutions</h4>

              <div className="mt-5 space-y-3">
                <Link
                  href="/services"
                  className="flex w-full items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3.5 text-xs font-medium text-neutral-300 transition hover:border-[#6D5DFC]/40 hover:text-white"
                >
                  <span>View All 6 Core Service Offerings</span>
                  <span>→</span>
                </Link>

                <Link
                  href="/portfolio"
                  className="flex w-full items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3.5 text-xs font-medium text-neutral-300 transition hover:border-[#6D5DFC]/40 hover:text-white"
                >
                  <span>Explore Featured Case Studies</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
