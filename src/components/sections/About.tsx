import { stats } from "../../data/profile";
import { SectionHeader } from "../layout/SectionHeader";
import { Reveal } from "../common/Reveal";

export function About() {
  return (
    <section id="about" className="section">
      <SectionHeader eyebrow="01 - About" title="Engineering with clarity and polish." />
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal className="rounded-lg border border-white/[0.08] bg-navy-card p-6 sm:p-9">
          <p className="text-lg leading-9 text-platinum/82">
            I’m a Full-Stack Developer focused on building scalable web applications, AI-powered workflows, and refined digital interfaces. My work blends clean engineering, thoughtful design, and practical automation to create products that feel fast, reliable, and business-ready.
          </p>
          <p className="mt-6 text-sm leading-8 text-muted">
            I work across React, Node.js, Python, REST APIs, GenAI, LLM workflows, and RAG systems, with a strong bias toward maintainable architecture and polished user experience.
          </p>
        </Reveal>
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.05} className="rounded-lg border border-white/[0.08] bg-surface p-5 sm:p-6">
              <p className="font-display text-5xl font-semibold tracking-[-0.02em] text-platinum">{stat.value}</p>
              <p className="mt-3 font-mono text-[0.66rem] uppercase tracking-[0.2em] text-muted">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
