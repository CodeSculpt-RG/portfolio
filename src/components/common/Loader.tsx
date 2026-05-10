import { AnimatePresence, motion } from "framer-motion";

export function Loader({ done }: { done: boolean }) {
  return (
    <AnimatePresence>
      {!done ? (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-7 bg-black"
          exit={{ opacity: 0, y: -18, transition: { duration: 0.72, ease: [0.16, 1, 0.3, 1] } }}
        >
          <motion.div
            className="font-display text-[clamp(4rem,12vw,9rem)] font-semibold leading-none tracking-[-0.03em] text-platinum"
            initial={{ opacity: 0, filter: "blur(14px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            G Rahul
          </motion.div>
          <div className="h-px w-64 overflow-hidden bg-white/[0.08]">
            <motion.div className="h-full bg-gold/80 shadow-gold" initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 1.25, ease: [0.16, 1, 0.3, 1] }} />
          </div>
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.32em] text-muted">Initializing Portfolio</p>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
