import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section className="container-custom py-32">
      <h2 className="mb-16 text-center font-syne text-5xl font-bold">
        Voices of Success
      </h2>

      <div className="grid gap-6 lg:grid-cols-3">
        {TESTIMONIALS.map((item) => (
          <div
            key={item.name}
            className="
              testimonial-card
              rounded-3xl
              border
              border-white/5
              bg-[#141414]
              p-8
            "
          >
            <p className="mb-8 text-neutral-300">"{item.quote}"</p>

            <div>
              <h4 className="font-semibold">{item.name}</h4>

              <p className="text-sm text-neutral-500">{item.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
