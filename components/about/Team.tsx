import Image from "next/image";
import SectionContainer from "../shared/SectionContainer";
import { team } from "@/lib/constants";

export default function Team() {
  return (
    <SectionContainer>
      <h2 className="mb-12 text-center font-syne text-4xl font-bold">
        The Architects
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {team.map((member) => (
          <div
            key={member.name}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-[#141414]"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                width={600}
                height={800}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>

            <div className="p-5">
              <h3 className="font-semibold text-white">{member.name}</h3>

              <p className="text-sm text-zinc-500">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
