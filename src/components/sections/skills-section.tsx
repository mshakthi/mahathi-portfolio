// components/sections/skills-section.tsx
import { SectionHeading } from "@/components/ui/section-heading";
import { Tag } from "@/components/ui/tag";
import { skills } from "@/lib/skills";

export function SkillsSection() {
  return (
    <section className="space-y-6">
      <SectionHeading
        title="Skills"
        subtitle="Technologies and tools I work with to build scalable systems."
      />

      <div className="space-y-6">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="space-y-2">
            <h3 className="text-sm font-medium text-slate-200">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <Tag key={skill} label={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
