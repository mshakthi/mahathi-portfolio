// components/sections/profile-section.tsx
import Image from "next/image";
import { Button } from "@/components/ui/button";
import profileImage from "@/app/public/profile.jpeg";

export function ProfileSection() {
  return (
    <section className="flex flex-col gap-8 md:flex-row md:items-center">
      <div className="flex-1 space-y-4">
        <p className="text-xs uppercase tracking-[0.25em] text-sky-400">
          Software Engineer · Backend · AWS
        </p>
        <h1 className="text-3xl font-semibold sm:text-4xl">
          I build reliable backend systems and thoughtful developer experiences.
        </h1>
        <p className="text-sm text-slate-300">
          I'm Mahathi Shakthidharan, a Senior Software Engineer with 10+ years of experience building scalable micro services and distributed systems.
At Amazon, led backend development across Digital Commerce, Alexa Shopping, and Dash Cart teams, powering millions
of daily transactions for products including Kindle, Prime Video, and Alexa devices. Deep expertise in Java, Python, and
AWS cloud-native services, with a strong track record in reliability, performance, and operational excellence. Passionate
about mentoring, scaling platforms, and delivering secure, high-impact customer experiences.
        </p>
        <div className="flex gap-3">
          <Button asChild>
            <a href="/projects">View projects</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="/experience">View experience</a>
          </Button>
        </div>
      </div>

      <div className="flex justify-center md:flex-1">
        <div className="relative h-40 w-40 overflow-hidden rounded-full border border-slate-700">
          <Image
            src={profileImage}
            alt="Mahathi headshot"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
