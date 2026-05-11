import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export function CustomCursor() {
  const reduced = useReducedMotion();
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 120, damping: 20 });
  const ringY = useSpring(y, { stiffness: 120, damping: 20 });

  useEffect(() => {
    if (reduced || window.matchMedia("(pointer: coarse)").matches) return;
    const move = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, [reduced, x, y]);

  if (reduced) return null;

  return (
    <div className="custom-cursor pointer-events-none fixed inset-0 z-[90] hidden mix-blend-screen lg:block">
      <motion.div className="absolute h-1.5 w-1.5 rounded-full bg-gold" style={{ x, y, translateX: "-50%", translateY: "-50%" }} />
      <motion.div
        className="absolute rounded-full border border-gold/40"
        aria-hidden="true"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%", width: 34, height: 34 }}
      />
    </div>
  );
}
