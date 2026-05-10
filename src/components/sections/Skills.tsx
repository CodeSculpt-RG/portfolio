import { skillGroups } from "../../data/skills";
import { SkillMarquee } from "../common/SkillMarquee";
import { Reveal } from "../common/Reveal";
import { SectionHeader } from "../layout/SectionHeader";

export function Skills() {
  return (
    <section id="skills" className="section px-0">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="02 - Skills" title="A focused technical toolkit." copy="Grouped by how the work is delivered: interfaces, backend logic, AI engineering, data, tooling, and product-ready development practices." />
      </div>
      <SkillMarquee />
      <div className="mx-auto mt-10 grid max-w-7xl gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
        {skillGroups.map((group, index) => (
          <Reveal key={group.title} delay={index * 0.04} className="rounded-lg border border-white/[0.08] bg-navy-card p-6 transition duration-500 hover:border-gold/30">
            <h3 className="font-display text-2xl font-semibold tracking-[-0.01em] text-platinum">{group.title}</h3>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {group.skills.map((skill) => (
                <span key={skill} className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-2 font-mono text-[0.66rem] uppercase tracking-[0.16em] text-muted transition hover:border-gold/35 hover:text-platinum">
                  {skill}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
