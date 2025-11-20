// components/layout/nav-link.tsx
import Link from "next/link";
import clsx from "clsx";
import { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  active?: boolean;
  children: ReactNode;
}

export function NavLink({ href, active, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={clsx(
        "text-slate-300 hover:text-sky-400",
        active && "text-sky-400"
      )}
    >
      {children}
    </Link>
  );
}