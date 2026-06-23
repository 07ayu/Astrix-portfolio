"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import ContactHero from "@/components/contact/ContactHero";
import ContactSection from "@/components/contact/ContactSection";
import { useReveal } from "@/hooks/useReveal";

export default function ContactPage() {
  const headingRef = useReveal({ direction: "up" });

  return (
    <>
      <Navbar />

      <main>
        <div ref={headingRef}>
          <ContactHero />
        </div>
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
