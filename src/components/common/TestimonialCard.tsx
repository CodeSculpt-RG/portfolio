import { memo } from "react";
import { Quote } from "lucide-react";
import { Reveal } from "./Reveal";

function TestimonialCardComponent({ name, role, quote, index }: { name: string; role: string; quote: string; index: number }) {
  return (
    <Reveal delay={index * 0.06} className="glass rounded-[22px] p-6 transition duration-300 hover:-translate-y-1 hover:border-gold/35 sm:p-7">
      <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-xl border border-slate-400/15 bg-slate-950/35 text-gold">
        <Quote size={20} />
      </div>
      <p className="text-sm leading-7 text-soft">&quot;{quote}&quot;</p>
      <div className="mt-8 flex items-center gap-3 border-t border-slate-400/10 pt-5">
        <span className="flex h-10 w-10 items-center justify-center rounded-full accent-gradient font-ui text-sm font-bold text-slate-950">
          {name.split(" ").map((part) => part[0]).join("").slice(0, 2)}
        </span>
        <span>
          <p className="font-ui text-sm font-semibold text-platinum">{name}</p>
          <p className="mt-1 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-muted">{role}</p>
        </span>
      </div>
    </Reveal>
  );
}

export const TestimonialCard = memo(TestimonialCardComponent);
