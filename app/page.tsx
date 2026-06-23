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

export default function Home() {
  return (
    <>
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
    </>
  );
}
