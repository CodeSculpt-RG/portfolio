import { experience } from "../../data/experience";
import { SectionHeader } from "../layout/SectionHeader";
import { Reveal } from "../common/Reveal";

export function Experience() {
  return (
    <section id="experience" className="section">
      <SectionHeader
        eyebrow="03 - Experience"
        title="Professional Experience"
        copy="Hands-on development across scalable web apps, automation workflows, REST APIs, and AI-integrated systems."
      />
      <div className="relative space-y-6 before:absolute before:left-4 before:top-0 before:hidden before:h-full before:w-px before:bg-white/[0.08] md:before:block">
        {experience.map((item, index) => (
          <Reveal
            key={item.company}
            delay={index * 0.08}
            className="relative grid gap-6 rounded-lg border border-white/[0.08] bg-navy-card p-6 sm:p-8 md:ml-14 md:grid-cols-[0.75fr_1.25fr]"
          >
            <span className="absolute -left-[3.95rem] top-8 hidden h-4 w-4 rounded-full border border-gold/60 bg-black shadow-gold md:block" />
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-gold/80">{item.period}</p>
              {item.current ? (
                <span className="mt-4 inline-flex rounded-full border border-emerald/20 px-3 py-1 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-emerald">
                  Current
                </span>
              ) : null}
            </div>
            <div>
              <h3 className="font-display text-3xl font-semibold tracking-[-0.01em] text-platinum">{item.role}</h3>
              <p className="mt-1 font-ui text-sm text-muted">{item.company}</p>
              <ul className="mt-6 space-y-3">
                {item.points.map((point) => (
                  <li key={point} className="text-sm leading-7 text-muted">
                    - {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
