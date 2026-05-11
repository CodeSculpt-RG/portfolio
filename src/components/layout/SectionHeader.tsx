import { Reveal } from "../common/Reveal";

export function SectionHeader({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return (
    <Reveal className="mb-10 max-w-3xl sm:mb-12 max-md:mx-auto max-md:text-center">
      <p className="mb-3 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-gold">{eyebrow}</p>
      <div className="overflow-hidden">
        <h2 className="font-ui text-[clamp(2rem,5vw,3.25rem)] font-extrabold leading-tight tracking-[-0.055em] text-platinum">{title}</h2>
      </div>
      {copy ? <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">{copy}</p> : null}
    </Reveal>
  );
}
