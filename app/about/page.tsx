"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import PageHero from "@/components/shared/PageHero";
import { useReveal } from "@/hooks/useReveal";

import Mission from "@/components/about/Mission";
import Principles from "@/components/about/Principles";
import Team from "@/components/about/Team";

export default function AboutPage() {
  const headingRef = useReveal({ direction: "up" });
  return (
    <>
      <Navbar />

      <div ref={headingRef}>
        <PageHero
          eyebrow="STRATEGIC DESIGN STUDIO"
        title={
          <>
            We Are Astrix.
            <br />
            <span className="text-[#A89BFF]">We Build Excellence.</span>
          </>
        }
          description="A boutique strategy and software design firm crafting digital experiences through precision code and bold performance vision."
        />
      </div>

      <Mission />

      <Principles />

      <Team />

      <Footer />
    </>
  );
}

