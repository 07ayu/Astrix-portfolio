"use client";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.05]">
      <div className="container-custom py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <h3 className="font-syne text-2xl font-bold">ASTRIX</h3>

            <p className="mt-4 text-neutral-500">
              Building future-ready digital experiences.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Navigation</h4>

            <div className="space-y-2 text-neutral-400">
              <p>About</p>
              <p>Services</p>
              <p>Portfolio</p>
              <p>Blog</p>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Contact</h4>

            <div className="space-y-2 text-neutral-400">
              <p>hello@astrix.dev</p>
              <p>+91 9876543210</p>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Newsletter</h4>

            <input
              placeholder="Email address"
              className="
                w-full
                rounded-xl
                border
                border-white/10
                bg-[#141414]
                p-3
              "
            />
          </div>
        </div>

        <div className="mt-12 border-t border-white/[0.05] pt-8 text-sm text-neutral-500">
          © 2026 Astrix. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
