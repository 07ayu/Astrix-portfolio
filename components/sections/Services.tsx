"use client";

// export default function Service() {
//   return (
//     <section id="services" className="py-32">
//       <div className="max-w-7xl mx-auto px-6">
//         <p className="text-indigo-400 mb-4">Service</p>
//         <h2 className="text-5xl font-bold max-w-2xl">
//           Building Products That Move Businesses Forward
//         </h2>

//         <div className="grid md:grid-cols-2 gap-6 mt-16">
//           {SERVICES.map((service, index) => (
//             <motion.div
//               key={service.title}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.15 }}
//             >
//               <ServiceCard
//                 title={service.title}
//                 description={service.description}
//               />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import SectionHeader from "@/components/ui/SectionHeader";
import ServiceCard from "@/components/ui/ServiceCard";
import { useStagger } from "@/hooks/useStagger";
import { SERVICES } from "@/lib/constants";

export default function Services() {
  // const revealRef = useReveal();

  const sectionRef = useStagger(".service-card");
  return (
    <section ref={sectionRef} className="container-custom py-28">
      <SectionHeader
        badge="WHAT WE DO"
        title="Future-Ready Solutions for Modern Enterprises"
        description="We build specialized digital products using the world's most advanced technology stack."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {SERVICES.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </section>
  );
}
