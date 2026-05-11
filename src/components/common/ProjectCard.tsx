import { memo } from "react";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Bot, ExternalLink, Film, Globe2, Search } from "lucide-react";
import type { Project } from "../../data/projects";
import { ease } from "../../lib/animations";

function ProjectCardComponent({ project, index, featured = false }: { project: Project; index: number; featured?: boolean }) {
  return (
    <motion.article
      className={`project-card group overflow-hidden rounded-[22px] border border-slate-400/15 bg-slate-900/60 shadow-[0_12px_32px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-1.5 hover:border-gold/35 ${featured ? "min-h-[430px]" : "min-h-[190px]"}`}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.04, ease }}
    >
      {featured ? (
        <>
          <Preview project={project} featured />
          <ProjectContent project={project} />
        </>
      ) : (
        <div className="flex h-full flex-col p-6">
          <div className="mb-7 flex items-start justify-between">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-400/15 bg-slate-950/35 text-gold">
              <ProjectIcon project={project} />
            </div>
            <span className="rounded-full border border-slate-400/15 bg-slate-950/35 px-3 py-1 font-mono text-[0.58rem] uppercase tracking-[0.1em] text-gold">
              {project.type.split("/")[0].trim()}
            </span>
          </div>
          <h3 className="font-ui text-2xl font-bold tracking-[-0.04em] text-platinum">{project.name}</h3>
          <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted">{project.description}</p>
          <div className="mt-auto flex flex-wrap gap-2 pt-5">
            {project.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="rounded-md border border-slate-400/10 bg-slate-950/35 px-2 py-1 font-mono text-[0.62rem] text-soft-muted">
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </motion.article>
  );
}

export const ProjectCard = memo(ProjectCardComponent);

function ProjectContent({ project }: { project: Project }) {
  return (
    <div className="p-6">
      <div className="mb-3 flex flex-wrap gap-2">
        {project.tags.slice(0, 2).map((tag) => (
          <span key={tag} className="rounded-full border border-slate-400/15 bg-slate-950/35 px-3 py-1 font-mono text-[0.58rem] uppercase tracking-[0.1em] text-muted">
            {tag}
          </span>
        ))}
      </div>
      <h3 className="font-ui text-3xl font-bold tracking-[-0.045em] text-platinum">{project.name}</h3>
      <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted">{project.description}</p>
      <div className="mt-5 flex flex-wrap gap-4">
        {project.live ? (
          <a href={project.live} target="_blank" rel="noreferrer" className="group/link inline-flex items-center gap-2 text-sm font-semibold text-gold transition hover:text-platinum">
            Live Site <ExternalLink size={14} className="transition group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </a>
        ) : null}
        {project.code ? (
          <a href={project.code} target="_blank" rel="noreferrer" className="group/link inline-flex items-center gap-2 text-sm font-semibold text-soft transition hover:text-platinum">
            View Code <ArrowRight size={14} className="transition group-hover/link:translate-x-1" />
          </a>
        ) : null}
      </div>
    </div>
  );
}

function Preview({ project, featured }: { project: Project; featured?: boolean }) {
  const name = project.name.toLowerCase();
  const variant = name.includes("layer")
    ? "analytics"
    : name.includes("space")
      ? "space"
      : name.includes("genai") || name.includes("learning")
        ? "ai"
        : name.includes("movie")
          ? "movie"
          : name.includes("wiki")
            ? "wiki"
            : "dashboard";

  return (
    <div className={`relative overflow-hidden border-b border-slate-400/10 bg-slate-950/45 ${featured ? "h-[265px]" : "h-40"}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_10%,rgba(147,197,253,0.20),transparent_35%),radial-gradient(circle_at_90%_80%,rgba(167,139,250,0.22),transparent_34%)]" />
      <div className="project-preview absolute inset-5 rounded-2xl border border-slate-400/15 bg-slate-950/55 p-4 transition duration-300 group-hover:scale-[1.025]">
        {variant === "analytics" ? <AnalyticsMock /> : null}
        {variant === "space" ? <SpaceMock /> : null}
        {variant === "ai" ? <AiMock /> : null}
        {variant === "movie" ? <MovieMock /> : null}
        {variant === "wiki" ? <WikiMock /> : null}
        {variant === "dashboard" ? <DashboardMock project={project} /> : null}
      </div>
    </div>
  );
}

function ProjectIcon({ project }: { project: Project }) {
  const name = project.name.toLowerCase();
  if (name.includes("genai") || name.includes("learning")) return <Bot size={18} />;
  if (name.includes("movie")) return <Film size={18} />;
  if (name.includes("wiki")) return <Search size={18} />;
  if (name.includes("space")) return <Globe2 size={18} />;
  return <BarChart3 size={18} />;
}

function AnalyticsMock() {
  return (
    <div className="h-full">
      <div className="mb-4 flex h-5 items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-gold" />
        <span className="h-2 w-14 rounded-full bg-slate-500/40" />
        <span className="ml-auto h-2 w-20 rounded-full bg-slate-500/30" />
      </div>
      <div className="grid h-[calc(100%-2rem)] grid-cols-8 items-end gap-3 rounded-xl bg-slate-900/55 p-5">
        {[28, 55, 74, 44, 80, 62, 92, 76].map((height, index) => (
          <span key={index} className="rounded-t-md bg-gradient-to-t from-gold/20 to-gold-bright/75" style={{ height: `${height}%` }} />
        ))}
      </div>
    </div>
  );
}

function SpaceMock() {
  return (
    <div className="grid h-full grid-cols-[0.32fr_0.68fr] gap-4">
      <div className="space-y-2 rounded-xl bg-slate-950/70 p-3">
        {[1, 2, 3, 4, 5].map((item) => <span key={item} className="block h-2 rounded-full bg-slate-600/45" />)}
      </div>
      <div className="rounded-xl bg-[radial-gradient(circle_at_50%_35%,rgba(196,181,253,0.95),rgba(15,23,42,0.2)_24%,rgba(2,6,23,0.8)_60%)] p-4">
        <div className="h-3 w-28 rounded-full bg-white/70" />
        <div className="mt-16 grid grid-cols-3 gap-2">
          {[1, 2, 3].map((item) => <span key={item} className="h-12 rounded-lg bg-slate-950/45" />)}
        </div>
      </div>
    </div>
  );
}

function AiMock() {
  return (
    <div className="flex h-full flex-col gap-3">
      <div className="ml-auto max-w-[70%] rounded-xl bg-gold/20 p-3 text-xs text-soft">Search my knowledge base.</div>
      <div className="max-w-[78%] rounded-xl border border-slate-400/15 bg-slate-900/80 p-3 text-xs text-soft">3 relevant chunks retrieved.</div>
      <div className="mt-auto grid grid-cols-3 gap-2">
        {["Query", "Vector", "Answer"].map((item) => <span key={item} className="rounded-lg bg-slate-800/70 p-2 text-center font-mono text-[0.55rem] text-muted">{item}</span>)}
      </div>
    </div>
  );
}

function MovieMock() {
  return (
    <div>
      <div className="mb-4 rounded-full border border-slate-400/15 bg-slate-900/75 px-4 py-2 text-xs text-muted">Search movies...</div>
      <div className="grid grid-cols-3 gap-3">
        {[1, 2, 3].map((item) => <span key={item} className="h-28 rounded-xl bg-gradient-to-br from-slate-700 to-violet-400/40" />)}
      </div>
    </div>
  );
}

function WikiMock() {
  return (
    <div className="space-y-3">
      {[1, 2, 3].map((item) => (
        <div key={item} className="rounded-xl border border-slate-400/15 bg-slate-900/75 p-3">
          <div className="h-2 w-24 rounded-full bg-gold/60" />
          <div className="mt-3 h-2 w-full rounded-full bg-slate-500/30" />
        </div>
      ))}
    </div>
  );
}

function DashboardMock({ project }: { project: Project }) {
  return (
    <div className="flex h-full flex-col justify-between">
      <div className="h-28 rounded-xl bg-gradient-to-br from-gold/25 to-gold-bright/30" />
      <div>
        <p className="font-mono text-[0.58rem] uppercase tracking-[0.12em] text-muted">{project.type}</p>
        <div className="mt-3 h-2 w-2/3 rounded-full bg-slate-500/35" />
      </div>
    </div>
  );
}
