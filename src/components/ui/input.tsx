// components/ui/input.tsx
import { InputHTMLAttributes } from "react";
import clsx from "clsx";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Input({ label, className, ...props }: InputProps) {
  return (
    <label className="block text-sm">
      {label && <span className="mb-1 block text-slate-200">{label}</span>}
      <input
        className={clsx(
          "w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500",
          className
        )}
        {...props}
      />
    </label>
  );
}