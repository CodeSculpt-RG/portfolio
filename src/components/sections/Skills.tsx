import { Brain, Check, Code2, Database, Server, Settings2, Sparkles } from "lucide-react";
import { skillGroups } from "../../data/skills";
import { Reveal } from "../common/Reveal";

const icons = [Code2, Server, Brain, Database, Settings2, Sparkles];

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="mb-10 max-w-2xl max-md:mx-auto max-md:text-center">
        <p className="mb-3 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-gold">Technical Ecosystem</p>
        <h2 className="font-ui text-[clamp(2.1rem,5vw,3.25rem)] font-extrabold leading-tight tracking-[-0.055em] text-platinum">Technical Ecosystem</h2>
        <p className="mt-3 text-sm leading-7 text-muted">A curated stack of technologies I use to build robust, AI-powered applications.</p>
      </div>
      <div className="mx-auto grid w-full gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, index) => (
          <Reveal key={group.title} delay={index * 0.04} className="glass flex min-h-[300px] flex-col rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-gold/35 hover:bg-slate-800/55">
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-slate-400/15 bg-slate-950/35 text-gold">
              {(() => {
                const Icon = icons[index] ?? Code2;
                return <Icon size={20} />;
              })()}
            </div>
            <h3 className="font-ui text-2xl font-bold tracking-[-0.04em] text-platinum">{group.title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted">{group.description}</p>
            <div className="mt-6 grid gap-2">
              {group.skills.map((skill) => (
                <div key={skill} className="flex items-center justify-between border-t border-slate-400/10 pt-2 text-sm text-soft">
                  <span>{skill}</span>
                  <Check size={14} className="text-gold" />
                </div>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
