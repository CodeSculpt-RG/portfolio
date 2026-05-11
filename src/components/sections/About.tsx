import { stats } from "../../data/profile";
import { Reveal } from "../common/Reveal";
import { SectionHeader } from "../layout/SectionHeader";

export function About() {
  return (
    <section id="about" className="section">
      <SectionHeader eyebrow="01 - About" title="Engineering with clarity and polish." />
      <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
        <Reveal className="glass rounded-[22px] p-6 sm:p-8">
          <p className="max-w-3xl text-[1.05rem] leading-8 text-platinum/90 sm:text-[1.18rem]">
            I&apos;m G Rahul, a Full-Stack Developer and Gen AI Engineer focused on building scalable web applications, AI-powered workflows, and premium digital products. I work across React, TypeScript, Node.js, Python, REST APIs, and GenAI systems to create fast, reliable, and business-ready software experiences.
          </p>
          <p className="mt-6 max-w-2xl text-[0.98rem] leading-8 text-muted">
            My work combines clean engineering, thoughtful UI design, and practical automation - helping brands, startups, and teams turn ideas into polished production-ready products.
          </p>
        </Reveal>
        <div className="glass-strong grid grid-cols-2 gap-4 rounded-[22px] p-4 sm:p-5">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.05} className="rounded-2xl border border-slate-400/15 bg-slate-950/30 p-5 sm:p-6">
              <p className="font-ui text-4xl font-extrabold tracking-[-0.04em] text-platinum">{stat.value}</p>
              <p className="mt-3 font-mono text-[0.62rem] uppercase leading-5 tracking-[0.12em] text-muted">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
