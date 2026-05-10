import { Reveal } from "../common/Reveal";

export function SectionHeader({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return (
    <Reveal className="mb-12 max-w-3xl sm:mb-14">
      <p className="mb-5 font-mono text-[0.64rem] uppercase tracking-[0.34em] text-gold/80">{eyebrow}</p>
      <div className="overflow-hidden">
        <h2 className="font-display text-[clamp(2.75rem,7vw,6.2rem)] font-semibold leading-[0.88] tracking-[-0.02em] text-platinum">{title}</h2>
      </div>
      {copy ? <p className="mt-6 max-w-2xl text-[0.98rem] leading-8 text-muted">{copy}</p> : null}
    </Reveal>
  );
}
