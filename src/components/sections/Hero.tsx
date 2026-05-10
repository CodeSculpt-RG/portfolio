import { Github, Linkedin, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedText } from "../common/AnimatedText";
import { Button } from "../common/Button";
import { MagneticButton } from "../common/MagneticButton";
import { profile } from "../../data/profile";
import { stagger, reveal } from "../../lib/animations";

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-4 pb-16 pt-32 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-grid opacity-55" />
      <motion.div
        className="absolute left-[14%] top-[10%] h-[34rem] w-[34rem] rounded-full bg-gold/10 blur-3xl"
        animate={{ x: [0, 24, 0], y: [0, -18, 0], opacity: [0.55, 0.85, 0.55] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black to-transparent" />
      <motion.div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]" variants={stagger} initial="hidden" animate="visible">
        <div className="max-w-4xl text-left">
          <motion.div variants={reveal} className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/[0.08] bg-white/[0.035] px-4 py-2 font-mono text-[0.64rem] uppercase tracking-[0.2em] text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald" /> Available for Projects
          </motion.div>
          <h1 className="font-display text-[clamp(4.8rem,15vw,12.5rem)] font-semibold leading-[0.78] tracking-[-0.035em] text-platinum">
            <AnimatedText text={profile.name} />
          </h1>
          <motion.p variants={reveal} className="mt-8 max-w-3xl font-display text-[clamp(1.85rem,4.2vw,4.4rem)] font-semibold leading-[0.95] tracking-[-0.025em] text-platinum/92">
            {profile.heroRole}
          </motion.p>
          <motion.p variants={reveal} className="mt-7 max-w-xl text-base leading-8 text-muted sm:text-lg">
            I design and engineer scalable web applications, AI-powered systems, and conversion-focused digital products. {profile.copy}
          </motion.p>
          <motion.div variants={reveal} className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <MagneticButton><Button href="#projects">View Work</Button></MagneticButton>
            <MagneticButton><Button href="#contact" variant="outline">Contact Me</Button></MagneticButton>
            <MagneticButton><Button href={profile.resumePath} variant="ghost" download>Download Resume</Button></MagneticButton>
          </motion.div>
          <motion.div variants={reveal} className="mt-8 flex gap-4">
            <a aria-label="GitHub" href={profile.github} target="_blank" rel="noreferrer" className="rounded-full border border-white/[0.08] p-3 text-muted transition hover:border-gold/50 hover:text-gold-bright"><Github size={19} /></a>
            <a aria-label="LinkedIn" href={profile.linkedin} target="_blank" rel="noreferrer" className="rounded-full border border-white/[0.08] p-3 text-muted transition hover:border-gold/50 hover:text-gold-bright"><Linkedin size={19} /></a>
          </motion.div>
        </div>
        <motion.div variants={reveal} className="relative hidden min-h-[32rem] lg:block">
          <div className="absolute inset-0 rounded-lg border border-white/[0.08] bg-navy-card/90 p-8 shadow-2xl">
            <div className="mb-10 flex items-center justify-between border-b border-white/[0.08] pb-6">
              <span className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-gold/75">System Snapshot</span>
              <Sparkles className="text-gold/70" size={18} />
            </div>
            {["React architecture", "AI workflows", "REST API design", "Production deployment", "Responsive interface"].map((item, index) => (
              <div key={item} className="mb-5 flex items-center justify-between border-b border-white/[0.08] pb-5 font-mono text-[0.82rem] text-muted">
                <span>0{index + 1} / {item}</span>
                <span className="text-emerald">ready</span>
              </div>
            ))}
            <div className="absolute bottom-8 left-8 right-8 rounded-md border border-white/[0.08] bg-surface p-5 font-mono text-xs leading-6 text-muted">
              const portfolio = buildPremiumExperience(&quot;React&quot;, &quot;GenAI&quot;, &quot;Motion&quot;);
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
