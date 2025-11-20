// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <h1 className="text-3xl font-semibold">Page not found</h1>
      <p className="mt-2 text-sm text-slate-300">
        The page you’re looking for doesn’t exist.
      </p>
      <Link href="/" className="mt-4 underline underline-offset-4">
        Go back home
      </Link>
    </div>
  );
}