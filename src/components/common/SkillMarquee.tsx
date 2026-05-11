import { memo } from "react";
import { marqueeSkills } from "../../data/skills";

function SkillMarqueeComponent() {
  return (
    <div className="marquee overflow-hidden border-y border-white/10 bg-navy-card/60 py-4">
      <div className="mx-auto flex max-w-[1320px] flex-wrap justify-center gap-3 px-6">
        {marqueeSkills.map((skill) => (
          <span key={skill} className="rounded-full border border-white/10 bg-surface/70 px-5 py-2 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-muted">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export const SkillMarquee = memo(SkillMarqueeComponent);
