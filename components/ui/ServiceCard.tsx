import { ArrowUpRight } from "lucide-react";

interface Props {
  title: string;
  description: string;
}

export default function ServiceCard({ title, description }: Props) {
  return (
    <div className="group rounded-3xl border border-white/10 p-6 hover:border-indigo-500 transition-all duration-300">
      <div className="flex justify-between items-start">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <ArrowUpRight className="group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
      </div>

      <p className="mt-4 text-zinc-400">{description}</p>
    </div>
  );
}
