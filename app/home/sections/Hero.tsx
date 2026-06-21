"use client";

import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-8">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-indigo-400 mb-4"
        >
          SaaS + MVP + Web Application
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl font-bold max-w-4xl"
        >
          Building Digital Products That Scale
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-8 max-w-2xl text-zinc-400"
        >
          Astrix helps startups launch SaaS products, MVPs, and modern web
          applications.
        </motion.p>
      </div>
    </section>
  );
}
