import type { AnchorHTMLAttributes, PropsWithChildren } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "../../lib/utils";

type ButtonProps = PropsWithChildren<
  AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: "gold" | "outline" | "ghost"; icon?: boolean }
>;

export function Button({ children, className, variant = "gold", icon = true, ...props }: ButtonProps) {
  return (
    <a
      className={cn(
        "group relative inline-flex min-h-11 items-center justify-center gap-2 overflow-hidden rounded-xl px-5 py-3 font-ui text-[0.78rem] font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-gold/50",
        variant === "gold" && "accent-gradient text-slate-950 shadow-[0_14px_34px_rgba(147,197,253,0.18)] hover:-translate-y-0.5",
        variant === "outline" && "border border-slate-400/20 bg-slate-950/35 text-platinum shadow-[0_10px_24px_rgba(0,0,0,0.18)] hover:-translate-y-0.5 hover:border-gold/45 hover:bg-slate-800/55",
        variant === "ghost" && "border border-slate-400/15 bg-transparent px-4 text-soft hover:border-gold/35 hover:text-platinum",
        className,
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {icon ? <ArrowUpRight size={16} className="relative z-10 transition group-hover:translate-x-1 group-hover:-translate-y-1" /> : null}
    </a>
  );
}
