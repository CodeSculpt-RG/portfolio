import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export function CustomCursor() {
  const reduced = useReducedMotion();
  const [active, setActive] = useState(false);
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
    const enter = () => setActive(true);
    const leave = () => setActive(false);
    window.addEventListener("mousemove", move);
    document.querySelectorAll("a, button, input, textarea").forEach((node) => {
      node.addEventListener("mouseenter", enter);
      node.addEventListener("mouseleave", leave);
    });
    return () => {
      window.removeEventListener("mousemove", move);
      document.querySelectorAll("a, button, input, textarea").forEach((node) => {
        node.removeEventListener("mouseenter", enter);
        node.removeEventListener("mouseleave", leave);
      });
    };
  }, [reduced, x, y]);

  if (reduced) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[90] hidden mix-blend-screen lg:block">
      <motion.div className="absolute h-1.5 w-1.5 rounded-full bg-gold/80" style={{ x, y, translateX: "-50%", translateY: "-50%" }} />
      <motion.div
        className="absolute rounded-full border border-gold/35"
        animate={{ width: active ? 54 : 34, height: active ? 54 : 34 }}
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
      />
    </div>
  );
}
