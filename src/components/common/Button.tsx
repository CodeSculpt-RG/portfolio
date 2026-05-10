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
        "group inline-flex min-h-12 items-center justify-center gap-3 rounded-sm px-5 py-3 font-ui text-[0.68rem] font-semibold uppercase tracking-[0.18em] transition duration-500 focus:outline-none focus:ring-2 focus:ring-gold/50",
        variant === "gold" && "bg-gold text-black shadow-gold hover:-translate-y-0.5 hover:bg-gold-bright",
        variant === "outline" && "border border-white/10 bg-transparent text-platinum/82 hover:-translate-y-0.5 hover:border-gold/60 hover:text-gold-bright",
        variant === "ghost" && "border border-transparent text-muted hover:border-white/10 hover:text-gold-bright",
        className,
      )}
      {...props}
    >
      <span>{children}</span>
      {icon ? <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /> : null}
    </a>
  );
}
