"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import ServicesHero from "@/components/services/ServicesHero";
import Capabilities from "@/components/services/Capabilities";
import TechStack from "@/components/services/TechStack";
import Methodology from "@/components/sections/Methodology";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main>
        <ServicesHero />
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
