import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`glass-panel rounded-[28px] p-5 sm:p-6 ${className}`.trim()}
    >
      {children}
    </div>
  );
}
