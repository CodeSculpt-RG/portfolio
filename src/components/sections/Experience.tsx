import { experience } from "../../data/experience";
import { Reveal } from "../common/Reveal";

export function Experience() {
  return (
    <section id="experience" className="section">
      <div className="mb-10 max-md:text-center">
        <h2 className="font-ui text-[clamp(2.1rem,5vw,3.25rem)] font-extrabold tracking-[-0.055em] text-platinum">Professional Odyssey</h2>
      </div>
      <div className="relative mx-auto max-w-[960px] py-4 before:absolute before:left-4 before:top-0 before:h-full before:w-px before:bg-gradient-to-b before:from-gold before:via-gold-bright before:to-cyan-300 md:before:left-1/2">
        {experience.map((item, index) => (
          <Reveal
            key={item.company}
            delay={index * 0.08}
            className={`relative mb-9 pl-12 md:w-[47%] md:pl-0 ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}
          >
            <span className={`absolute top-7 h-3 w-3 rounded-full border border-white bg-gold shadow-[0_0_22px_rgba(147,197,253,0.8)] md:top-8 ${index % 2 === 0 ? "left-[0.7rem] md:left-[calc(100%+1.15rem)]" : "left-[0.7rem] md:left-[calc(-6.2%)]"}`} />
            <div className="glass rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-gold/35">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-gold">{item.period}</p>
                {item.current ? <span className="rounded-full border border-emerald/30 px-3 py-1 font-mono text-[0.58rem] uppercase tracking-[0.12em] text-emerald">Current</span> : null}
              </div>
              <h3 className="font-ui text-2xl font-bold tracking-[-0.04em] text-platinum">{item.role}</h3>
              <p className="mt-1 text-sm font-semibold text-soft">{item.company}</p>
              <p className="mt-4 text-sm leading-7 text-muted">{item.points.slice(0, 2).join(" ")}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
