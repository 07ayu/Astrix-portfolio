"use client";

import Navbar from "@/components/layout/Navbar";
import Hero from "../components/sections/Hero";
import Service from "../components/sections/Services";
import Stats from "@/components/sections/Stats";
import Projects from "@/components/sections/Projects";
import Methodology from "@/components/sections/Methodology";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";
import PersistentCanvas from "@/components/3d/PersistentCanvas";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#070707] text-white">
      {/* Single persistent 3D canvas fixed behind the entire scroll journey */}
      <PersistentCanvas />

      {/* Foreground interactive content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Stats />
        <Service />
        <Projects />
        <Methodology />
        <Testimonials />
        <FAQ />
        <CTA />
        <Footer />
      </div>
    </main>
  );
}
