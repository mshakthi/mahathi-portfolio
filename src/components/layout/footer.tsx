import Link from "next/link";
import { config } from "@/lib/config";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-sm text-slate-400">
            © {currentYear} Mahathi Shakthidharan. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link
              href={config.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 transition-colors hover:text-sky-400"
            >
              GitHub
            </Link>
            <Link
              href={config.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 transition-colors hover:text-sky-400"
            >
              LinkedIn
            </Link>
            <Link
              href="/contact"
              className="text-slate-400 transition-colors hover:text-sky-400"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
