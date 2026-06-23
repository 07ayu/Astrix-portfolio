"use client";

import { ReactNode } from "react";

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
}

export default function SectionContainer({
  children,
  className,
}: SectionContainerProps) {
  return (
    <section className={`py-20 ${className || ""}`}>
      <div className="container-custom">{children}</div>
    </section>
  );
}
