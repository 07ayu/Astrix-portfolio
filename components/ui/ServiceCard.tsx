"use client";

import { memo } from "react";

type Props = {
  title: string;
  description: string;
};

const ServiceCard = memo(function ServiceCard({ title, description }: Props) {
  return (
    <div className="service-card group rounded-3xl border border-white/5 bg-[#161616] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-[#6D5DFC]/30 hover:bg-[#1A1A1A]">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#202020] text-xl">
        <div className="h-6 w-6 rounded-lg bg-[#6D5DFC]/30" />
      </div>

      <h3 className="mb-4 font-syne text-xl font-bold">{title}</h3>

      <p className="leading-6 text-neutral-400">{description}</p>
    </div>
  );
});

export default ServiceCard;
