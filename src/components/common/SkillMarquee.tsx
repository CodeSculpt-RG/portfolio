import { motion } from "framer-motion";
import { marqueeSkills } from "../../data/skills";

export function SkillMarquee() {
  const items = [...marqueeSkills, ...marqueeSkills];
  return (
    <div className="overflow-hidden border-y border-white/[0.08] bg-navy-mid/50 py-4">
      <motion.div
        className="flex w-max gap-4"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 35, ease: "linear", repeat: Infinity }}
      >
        {items.map((skill, index) => (
          <span key={`${skill}-${index}`} className="rounded-full border border-white/10 px-5 py-2 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-muted">
            {skill}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
