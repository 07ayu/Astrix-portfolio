export default function ContactHero() {
  return (
    <section className="relative overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#6D5DFC20,transparent_55%)]" />

      <div className="container-custom pt-32 pb-20">
        <div className="max-w-5xl">
          <h1
            className="
              font-syne
              text-[64px]
              font-extrabold
              leading-[0.85]
              tracking-[-0.06em]
              md:text-[90px]
            "
          >
            Start a
            <br />
            <span className="text-[#A89BFF]">Conversation.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-400">
            Ready to transform your digital presence? We combine elite
            craftsmanship with technical precision to build software that
            scales.
          </p>
        </div>
      </div>
    </section>
  );
}
