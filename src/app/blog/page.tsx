import { SectionHeading } from "@/components/ui/section-heading";

export default function BlogPage() {
  return (
    <section className="space-y-4">
      <SectionHeading
        title="Notes & Writing"
        subtitle="System design walkthroughs, cheat sheets, and learning notes."
      />
      <p className="text-sm text-slate-300">
        Coming soon. I’ll be sharing short writeups on topics like distributed
        systems, AWS patterns, and interview prep.
      </p>
    </section>
  );
}