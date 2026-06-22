import SectionContainer from "../shared/SectionContainer";
import { PRINCIPLES } from "@/lib/constants";

export default function Principles() {
  return (
    <SectionContainer>
      <h2 className="mb-12 text-center font-syne text-4xl font-bold">
        Core Engineering Principles
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {PRINCIPLES.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-white/10 bg-[#141414] p-8"
          >
            <h3 className="mb-4 font-syne text-2xl">{item.title}</h3>

            <p className="text-zinc-400">{item.desc}</p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
