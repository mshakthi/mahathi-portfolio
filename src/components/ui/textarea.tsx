// components/ui/textarea.tsx
import { TextareaHTMLAttributes } from "react";
import clsx from "clsx";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export function Textarea({ label, className, ...props }: TextareaProps) {
  return (
    <label className="block text-sm">
      {label && <span className="mb-1 block text-slate-200">{label}</span>}
      <textarea
        className={clsx(
          "w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500",
          className
        )}
        {...props}
      />
    </label>
  );
}