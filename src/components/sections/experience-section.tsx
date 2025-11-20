import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tag } from "@/components/ui/tag";
import experience from "@/lib/experiences";

interface ExperienceSectionProps {
  limit?: number;
}

export function ExperienceSection({ limit }: ExperienceSectionProps) {
  const displayedExperience = limit ? experience.slice(0, limit) : experience;

  return (
    <section className="space-y-6">
      <SectionHeading
        title="Experience"
        subtitle="My journey as a software engineer."
      />

      <div className="space-y-4">
        {displayedExperience.map((item) => (
          <Card key={item.id}>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <span className="text-xs text-slate-400">
                  {item.start} – {item.end ?? "Present"}
                </span>
              </div>
              <p className="text-sm text-slate-300">{item.company}</p>
              {item.summary && (
                <p className="text-sm text-slate-200 leading-relaxed">
                  {item.summary}
                </p>
              )}
              <ul className="list-disc space-y-1 pl-5 text-sm text-slate-200">
                {item.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
              {item.techStack && item.techStack.length > 0 && (
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-slate-200">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {item.techStack.map((tech) => (
                      <Tag key={tech} label={tech} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>

      {limit && experience.length > limit && (
        <div className="flex justify-center">
          <Button variant="outline" asChild>
            <Link href="/experience">View all experience</Link>
          </Button>
        </div>
      )}
    </section>
  );
}