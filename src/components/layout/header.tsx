"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavLink } from "./nav-link";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/blog", label: "Writing" },
  { href: "/contact", label: "Contact" }
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-8">
        <Link href="/" className="text-sm font-semibold">
          Mahathi<span className="text-sky-400">.dev</span>
        </Link>
        <nav className="flex gap-4 text-sm">
          {links.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              active={pathname === link.href}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}