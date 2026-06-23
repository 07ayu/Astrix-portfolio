"use client";

import { useReveal } from "@/hooks/useReveal";
import { useStagger } from "@/hooks/useStagger";

const projectTypes = ["Web App", "Mobile App", "AI Solution", "UI/UX"];

export default function ContactSection() {
  const formRef = useReveal({ direction: "left" });
  const sidebarRef = useStagger(".contact-card");
  return (
    <section className="py-24">
      <div className="container-custom">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          {/* FORM */}
          <div ref={formRef} className="rounded-[32px] border border-white/10 bg-[#141414] p-8">
            <form className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-3 block text-sm text-neutral-400">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-white/10 bg-[#0f0f0f] px-4 py-4 outline-none"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-sm text-neutral-400">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="john@company.com"
                    className="w-full rounded-xl border border-white/10 bg-[#0f0f0f] px-4 py-4 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="mb-3 block text-sm text-neutral-400">
                  Project Type
                </label>

                <div className="flex flex-wrap gap-3">
                  {projectTypes.map(
                    (item) => (
                      <button
                        type="button"
                        key={item}
                        className="rounded-xl border border-white/10 px-4 py-3 text-sm"
                      >
                        {item}
                      </button>
                    ),
                  )}
                </div>
              </div>

              <div>
                <label className="mb-3 block text-sm text-neutral-400">
                  Project Details
                </label>

                <textarea
                  rows={6}
                  placeholder="Tell us about your idea..."
                  className="w-full rounded-xl border border-white/10 bg-[#0f0f0f] p-4 outline-none"
                />
              </div>

              <button
                className="
                  h-14
                  rounded-xl
                  bg-[#6D5DFC]
                  px-8
                  font-medium
                "
              >
                Send Inquiry
              </button>
            </form>
          </div>

          {/* RIGHT SIDE */}
          <div ref={sidebarRef} className="space-y-6">
            <div className="contact-card rounded-[32px] border border-white/10 bg-[#141414] p-8">
              <h3 className="mb-6 font-syne text-3xl font-bold">Contact</h3>

              <div className="space-y-4 text-neutral-400">
                <p>hello@astrix.dev</p>
                <p>+91 99999 99999</p>
                <p>Remote Worldwide</p>
              </div>
            </div>

            <div className="contact-card grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/10 bg-[#141414] p-6">
                LinkedIn
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#141414] p-6">
                GitHub
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#141414] p-6">
                X
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#141414] p-6">
                Instagram
              </div>
            </div>

            <div className="contact-card rounded-[32px] border border-white/10 bg-[#141414] p-8">
              <h4 className="mb-6 font-syne text-xl">Need answers fast?</h4>

              <div className="space-y-4">
                <button className="flex w-full items-center justify-between rounded-xl border border-white/10 px-4 py-4">
                  Portfolio →
                </button>

                <button className="flex w-full items-center justify-between rounded-xl border border-white/10 px-4 py-4">
                  Services →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
