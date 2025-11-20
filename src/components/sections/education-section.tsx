// components/sections/education-section.tsx
import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import education from "@/lib/education";

interface EducationSectionProps {
  limit?: number;
}

export function EducationSection({ limit }: EducationSectionProps) {
  const displayedEducation = limit ? education.slice(0, limit) : education;

  return (
    <section className="space-y-6">
      <SectionHeading
        title="Education"
        subtitle="Academic background and achievements."
      />

      <div className="space-y-4">
        {displayedEducation.map((item) => (
          <Card key={item.id}>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">{item.degree}</h2>
                <span className="text-xs text-slate-400">
                  {item.start} – {item.end ?? "Present"}
                </span>
              </div>
              <p className="text-sm text-slate-300">{item.field}</p>
              <p className="text-sm text-slate-300">{item.institution}</p>
              {item.location && (
                <p className="text-sm text-slate-400">{item.location}</p>
              )}
              {item.gpa && (
                <p className="text-sm text-slate-200">GPA: {item.gpa}</p>
              )}
              {item.highlights && item.highlights.length > 0 && (
                <ul className="list-disc space-y-1 pl-5 text-sm text-slate-200">
                  {item.highlights.map((h, index) => (
                    <li key={index}>{h}</li>
                  ))}
                </ul>
              )}
            </div>
          </Card>
        ))}
      </div>

      {limit && education.length > limit && (
        <div className="flex justify-center">
          <Button variant="outline" asChild>
            <Link href="/education">View all education</Link>
          </Button>
        </div>
      )}
    </section>
  );
}
