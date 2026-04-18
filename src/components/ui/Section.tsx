import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  label: string;
  title: string;
  description: string;
  children: ReactNode;
};

export function Section({
  id,
  label,
  title,
  description,
  children,
}: SectionProps) {
  return (
    <section id={id} className="px-4 py-10 sm:px-6 sm:py-14">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 max-w-2xl">
          <span className="section-label">{label}</span>
          <h2 className="section-heading">{title}</h2>
          <p className="section-copy mt-3">{description}</p>
        </div>
        {children}
      </div>
    </section>
  );
}
