import { projects } from "@/lib/projects";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Tag } from "@/components/ui/tag";

export default function ProjectsPage() {
  return (
    <section className="space-y-8">
      <SectionHeading
        title="Projects"
        subtitle="A selection of projects that highlight my backend, distributed systems, and UI work."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.id}>
            <div className="space-y-3">
              <h2 className="text-lg font-semibold">{project.name}</h2>
              <p className="text-sm text-slate-300">
                {project.shortDescription}
              </p>
              <div className="flex gap-3 text-sm">
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-400 underline underline-offset-4 hover:text-sky-300"
                  >
                    Code
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-400 underline underline-offset-4 hover:text-sky-300"
                  >
                    Live demo
                  </a>
                )}
              </div>
              {project.techStack && project.techStack.length > 0 && (
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-slate-200">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Tag key={tech} label={tech} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}