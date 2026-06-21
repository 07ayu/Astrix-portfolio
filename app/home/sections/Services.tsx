"use client";

import { services } from "@/app/services/service-data";
import ServiceCard from "@/components/ui/ServiceCard";

import { motion } from "motion/react";

export default function Service() {
  return (
    <section id="services" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-indigo-400 mb-4">Service</p>
        <h2 className="text-5xl font-bold max-w-2xl">
          Building Products That Move Businesses Forward
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mt-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
