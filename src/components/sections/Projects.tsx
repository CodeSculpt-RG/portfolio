import { projects } from "../../data/projects";
import { ProjectCard } from "../common/ProjectCard";
import { SectionHeader } from "../layout/SectionHeader";

export function Projects() {
  return (
    <section id="projects" className="section">
      <SectionHeader eyebrow="04 - Projects" title="Selected Work" copy="Production websites, AI systems, and responsive applications crafted with clarity and performance." />
      <div className="space-y-7">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
