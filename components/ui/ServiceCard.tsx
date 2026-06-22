"use client";
// import { ArrowUpRight } from "lucide-react";

// interface Props {
//   title: string;
//   description: string;
// }

// export default function ServiceCard({ title, description }: Props) {
//   return (
//     <div className="group rounded-3xl border border-white/10 p-6 hover:border-indigo-500 transition-all duration-300">
//       <div className="flex justify-between items-start">
//         <h3 className="text-2xl font-semibold">{title}</h3>
//         <ArrowUpRight className="group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
//       </div>

//       <p className="mt-4 text-zinc-400">{description}</p>
//     </div>
//   );
// }

type Props = {
  title: string;
  description: string;
  // icon: string;
};

export default function ServiceCard({ title, description, icon }: Props) {
  return (
    <div className="service-card group rounded-3xl border border-white/5 bg-[#161616] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-[#6D5DFC]/30 hover:bg-[#1A1A1A]">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#202020] text-xl">
        {icon}
      </div>

      <h3 className="mb-4 font-syne text-xl font-bold">{title}</h3>

      <p className="leading-6 text-neutral-400">{description}</p>
    </div>
  );
}
