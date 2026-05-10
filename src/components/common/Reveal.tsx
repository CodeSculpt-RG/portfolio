import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";
import { reveal } from "../../lib/animations";

type RevealProps = PropsWithChildren<{ className?: string; delay?: number; as?: "div" | "section" }>;

export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const Component = motion[as];
  return (
    <Component
      className={className}
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      transition={{ delay }}
    >
      {children}
    </Component>
  );
}
