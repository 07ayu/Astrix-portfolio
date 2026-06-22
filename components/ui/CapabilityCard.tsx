import { ReactNode } from "react";

interface Props {
  title: string;
  description: string;
  icon: ReactNode;
  points: string[];
}

export default function CapabilityCard({
  title,
  description,
  icon,
  points,
}: Props) {
  return (
    <div className="group rounded-[28px] border border-white/10 bg-[#141414] p-8 transition-all duration-300 hover:border-[#6D5DFC]/40">
      <div className="mb-6">{icon}</div>

      <h3 className="mb-4 font-syne text-2xl font-bold">{title}</h3>

      <p className="mb-8 text-sm leading-7 text-neutral-400">{description}</p>

      <ul className="space-y-3">
        {points.map((item) => (
          <li key={item} className="text-sm text-neutral-300">
            • {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
