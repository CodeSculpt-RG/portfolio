import { Quote } from "lucide-react";
import { Reveal } from "./Reveal";

export function TestimonialCard({ name, role, quote, index }: { name: string; role: string; quote: string; index: number }) {
  return (
    <Reveal delay={index * 0.06} className="rounded-lg border border-white/[0.08] bg-navy-card p-6 sm:p-7">
      <Quote className="text-gold/70" size={22} />
      <p className="mt-5 text-sm leading-7 text-muted">"{quote}"</p>
      <div className="mt-8 border-t border-white/[0.08] pt-5">
        <p className="font-ui text-sm font-semibold text-platinum">{name}</p>
        <p className="mt-1 font-mono text-[0.66rem] uppercase tracking-[0.2em] text-muted">{role}</p>
      </div>
    </Reveal>
  );
}
