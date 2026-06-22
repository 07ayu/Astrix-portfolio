import Image from "next/image";
import SectionContainer from "../shared/SectionContainer";

export default function Mission() {
  return (
    <SectionContainer>
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="mb-8 font-syne text-4xl font-bold">Our Mission</h2>

          <blockquote className="max-w-xl text-3xl italic leading-tight text-white">
            "To empower the next generation of global businesses by architecting
            software that is as reliable as it is revolutionary."
          </blockquote>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#141414]">
          <Image
            src="/images/about-chip.jpg"
            alt=""
            width={1200}
            height={800}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </SectionContainer>
  );
}
