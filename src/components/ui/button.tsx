// components/ui/button.tsx
import { ButtonHTMLAttributes, cloneElement, isValidElement, ReactElement } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "outline";
  asChild?: boolean;
}

export function Button({ variant = "primary", className, asChild, children, ...props }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950";

  const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
    primary: "bg-sky-500 hover:bg-sky-400 text-white",
    ghost: "bg-transparent hover:bg-slate-800 text-slate-100",
    outline:
      "border border-slate-700 bg-transparent hover:bg-slate-900 text-slate-100"
  };

  const classes = clsx(base, variants[variant], className);

  if (asChild && isValidElement(children)) {
    const childProps = children.props as Record<string, unknown>;
    const mergedProps = {
      ...childProps,
      ...props,
      className: clsx(classes, childProps.className as string | undefined),
    };
    return cloneElement(children as ReactElement<Record<string, unknown>>, mergedProps as Record<string, unknown>);
  }

  return (
    <button
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
}