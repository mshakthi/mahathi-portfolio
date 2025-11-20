// app/page.tsx
import { ProfileSection } from "@/components/sections/profile-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { EducationSection } from "@/components/sections/education-section";
import { SkillsSection } from "@/components/sections/skills-section";

export default function HomePage() {
  return (
    <div className="space-y-16">
      <ProfileSection />
      <ExperienceSection limit={3} />
      <EducationSection limit={3} />
      <SkillsSection />
    </div>
  );
}