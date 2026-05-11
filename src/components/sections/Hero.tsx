import { Boxes, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../common/Button";
import { MagneticButton } from "../common/MagneticButton";
import { profile, stats } from "../../data/profile";
import { ease, reveal, stagger } from "../../lib/animations";

const capabilities = ["React Architecture", "AI Workflow", "REST APIs", "Production Build", "Responsive UI"];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-5 pb-16 pt-28 sm:px-6 md:pt-32 lg:pt-36">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <div className="animated-blob pointer-events-none absolute left-[10%] top-28 h-[26rem] w-[26rem] rounded-full bg-blue-300/10 blur-[70px]" />
      <div className="animated-blob pointer-events-none absolute right-[10%] top-28 h-[30rem] w-[30rem] rounded-full bg-violet-400/20 blur-[80px]" />

      <motion.div
        className="relative z-10 mx-auto grid min-h-[620px] w-full max-w-[1240px] items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <div className="max-md:text-center">
          <motion.div variants={reveal} className="glass mb-7 inline-flex items-center gap-2 rounded-full px-3 py-2 font-ui text-xs font-medium text-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald" />
            Available for projects
          </motion.div>

          <motion.h1 variants={reveal} className="max-w-[760px] font-ui text-[clamp(36px,10vw,48px)] font-extrabold leading-[1] tracking-[-0.055em] text-platinum sm:text-[clamp(48px,7vw,84px)] sm:leading-[0.95] max-md:mx-auto">
            Full-Stack Developer &<br />
            <span className="text-gradient">Gen AI Engineer</span>
          </motion.h1>

          <motion.p variants={reveal} className="mt-6 max-w-[560px] text-base leading-7 text-soft sm:text-lg sm:leading-8 max-md:mx-auto">
            Crafting high-performance digital ecosystems where precision code meets advanced machine learning. Specializing in architecture that scales.
          </motion.p>

          <motion.div variants={reveal} className="mt-8 flex flex-col gap-3 sm:flex-row max-md:items-center max-md:justify-center">
            <MagneticButton><Button href="#projects">View Selected Work</Button></MagneticButton>
            <MagneticButton><Button href={profile.resumePath} variant="outline" download>Download Resume</Button></MagneticButton>
          </motion.div>

          <motion.div variants={reveal} className="mt-10 grid grid-cols-2 gap-3 sm:max-w-[560px] sm:grid-cols-4 max-md:mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-slate-400/15 bg-slate-900/40 p-4 sm:border-transparent sm:bg-transparent sm:p-0">
                <p className="font-ui text-3xl font-extrabold tracking-[-0.04em] text-platinum">{stat.value}</p>
                <p className="mt-1 font-mono text-[0.62rem] uppercase leading-4 tracking-[0.08em] text-muted">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div variants={reveal} className="relative mx-auto w-full max-w-[430px]">
          <div className="absolute -inset-12 rounded-full bg-gradient-to-br from-gold/25 via-gold-bright/15 to-cyan-300/10 blur-[70px]" />
          <motion.div
            className="glass-strong relative overflow-hidden rounded-[28px] p-7"
            animate={{ y: [-4, 4, -4] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_0%,rgba(147,197,253,0.20),transparent_35%),radial-gradient(circle_at_100%_100%,rgba(167,139,250,0.18),transparent_32%)]" />
            <div className="relative">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h2 className="font-ui text-2xl font-bold tracking-[-0.04em] text-platinum">Capability Console</h2>
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-400/20 bg-slate-950/35 text-muted">
                  <Boxes size={17} />
                </div>
              </div>

              <div className="space-y-3">
                {capabilities.map((item, index) => (
                  <motion.div
                    key={item}
                    className="rounded-xl border border-slate-400/15 bg-slate-950/30 px-4 py-3"
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.45 + index * 0.05, ease }}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-mono text-[0.72rem] text-soft">{item}</span>
                      <span className="flex gap-1">
                        {[0, 1, 2, 3].map((dot) => (
                          <span key={dot} className={`h-1.5 w-1.5 rounded-full ${index === 3 ? "bg-emerald" : dot < 3 ? "bg-gold-bright" : "bg-slate-500/60"}`} />
                        ))}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-slate-400/15 bg-slate-950/30 p-4">
                <div className="flex items-center justify-between">
                  <span className="font-ui text-sm font-semibold text-soft">Build Quality</span>
                  <span className="rounded-md bg-emerald/20 px-2 py-1 font-mono text-[0.68rem] font-bold text-emerald">96</span>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <Sparkles size={14} className="text-gold" />
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-800">
                    <div className="h-full w-[96%] rounded-full accent-gradient" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
