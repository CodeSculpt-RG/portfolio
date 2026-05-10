import { motion } from "framer-motion";
import type { Project } from "../../data/projects";
import { Button } from "./Button";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      className="group relative grid overflow-hidden rounded-lg border border-white/[0.08] bg-navy-card transition-colors duration-500 hover:border-gold/35 lg:grid-cols-[0.88fr_1.12fr]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.76, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
    >
      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="absolute inset-x-0 top-0 h-px origin-left bg-gradient-to-r from-gold/0 via-gold/75 to-gold/0" />
        <div className="absolute -right-20 top-10 h-56 w-56 rounded-full bg-gold/10 blur-3xl" />
      </div>
      <div className="relative min-h-64 overflow-hidden bg-surface">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(191,164,106,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(191,164,106,0.045)_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="absolute inset-0 bg-radial-gold" />
        <div className="relative flex h-full min-h-64 flex-col justify-between p-6 sm:p-8">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted">{String(index + 1).padStart(2, "0")}</span>
          <div>
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.26em] text-gold/75">{project.type}</p>
            <h3 className="mt-3 max-w-sm font-display text-[clamp(2.25rem,4vw,3.6rem)] font-semibold leading-[0.95] tracking-[-0.025em] text-platinum">{project.name}</h3>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col justify-between gap-9 p-6 sm:p-9 lg:p-10">
        <div>
          <p className="max-w-2xl text-[0.98rem] leading-8 text-muted">{project.description}</p>
          <div className="mt-7 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          {project.live ? (
            <Button href={project.live} target="_blank" rel="noreferrer" variant="gold">
              Live Site
            </Button>
          ) : null}
          {project.code ? (
            <Button href={project.code} target="_blank" rel="noreferrer" variant="outline">
              View Code
            </Button>
          ) : null}
          {!project.live && !project.code ? <Button href="#contact">View Project</Button> : null}
        </div>
      </div>
    </motion.article>
  );
}
