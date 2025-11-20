// app/layout.tsx
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Mahathi Shakthidharan | Software Engineer",
  description: "Personal portfolio showcasing backend engineering, distributed systems, and project work."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-screen bg-slate-950 text-slate-100">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1 px-4 py-8 sm:px-8 lg:px-16">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}