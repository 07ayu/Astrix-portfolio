"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import ServicesHero from "@/components/services/ServicesHero";
import Capabilities from "@/components/services/Capabilities";
import TechStack from "@/components/services/TechStack";
import Methodology from "@/components/sections/Methodology";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import { useReveal } from "@/hooks/useReveal";

export default function ServicesPage() {
  const headingRef = useReveal({ direction: "up" });

  return (
    <>
      <Navbar />

      <main>
        <div ref={headingRef}>
          <ServicesHero />
        </div>
        <Capabilities />
        <TechStack />
        <Methodology />
        <FAQ />
        <CTA />
      </main>

      <Footer />
    </>
  );
}
