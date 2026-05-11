import { projects } from "../../data/projects";
import { ProjectCard } from "../common/ProjectCard";
import { ArrowUpRight } from "lucide-react";

export function Projects() {
  const featured = projects.slice(0, 2);
  const rest = projects.slice(2);

  return (
    <section id="projects" className="section overflow-hidden">
      <div className="heavy-glow pointer-events-none absolute left-[-10rem] top-48 h-[28rem] w-[28rem] rounded-full bg-gold/10 blur-[72px]" />
      <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between max-md:items-center max-md:text-center">
        <div>
          <h2 className="font-ui text-[clamp(2.1rem,5vw,3.3rem)] font-extrabold leading-tight tracking-[-0.055em] text-platinum">Selected Projects</h2>
          <p className="mt-2 max-w-xl text-sm leading-6 text-muted">Deep dives into engineering challenges and activities.</p>
        </div>
        <a href="https://github.com/CodeSculpt-RG" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-soft transition hover:text-gold" aria-label="Browse all GitHub projects">
          Browse Archive <ArrowUpRight size={15} />
        </a>
      </div>
      <div className="relative mx-auto grid w-full gap-5 lg:grid-cols-2">
        {featured.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} featured />
        ))}
      </div>
      <div className="relative mx-auto mt-5 grid w-full gap-5 md:grid-cols-2 lg:grid-cols-3">
        {rest.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index + 2} />
        ))}
      </div>
    </section>
  );
}
