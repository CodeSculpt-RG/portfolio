import { motion, useMotionValue, useSpring } from "framer-motion";
import type { PropsWithChildren } from "react";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export function MagneticButton({ children }: PropsWithChildren) {
  const reduced = useReducedMotion();
  const x = useSpring(useMotionValue(0), { stiffness: 180, damping: 18 });
  const y = useSpring(useMotionValue(0), { stiffness: 180, damping: 18 });

  return (
    <motion.span
      style={{ x, y }}
      onMouseMove={(event) => {
        if (reduced) return;
        const rect = event.currentTarget.getBoundingClientRect();
        x.set((event.clientX - rect.left - rect.width / 2) * 0.18);
        y.set((event.clientY - rect.top - rect.height / 2) * 0.18);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className="inline-flex"
    >
      {children}
    </motion.span>
  );
}
