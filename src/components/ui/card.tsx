// components/ui/card.tsx
import { ReactNode } from "react";
import clsx from "clsx";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-xl border border-slate-800 bg-slate-900/60 p-4 shadow-sm",
        className
      )}
    >
      {children}
    </div>
  );
}