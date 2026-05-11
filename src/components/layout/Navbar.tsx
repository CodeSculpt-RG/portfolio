import { AnimatePresence, motion } from "framer-motion";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { profile } from "../../data/profile";
import { ease } from "../../lib/animations";

const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const overlayItems = [
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-4 z-50 px-5 sm:top-6"
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease }}
      >
        <nav className="mx-auto hidden h-[62px] w-fit max-w-[980px] items-center gap-8 rounded-full border border-slate-400/20 bg-slate-900/70 px-10 shadow-[0_18px_50px_rgba(0,0,0,0.28)] backdrop-blur-[16px] lg:flex" aria-label="Main navigation">
          <a href="#home" className="rounded-full py-2 font-ui text-[19px] font-bold tracking-[-0.02em] text-platinum">
            G Rahul
          </a>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full py-2 font-ui text-[15px] font-medium text-muted transition hover:bg-slate-700/45 hover:text-platinum"
            >
              {item.label}
            </a>
          ))}
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-400/15 bg-slate-800/45 text-muted transition hover:bg-slate-700/45 hover:text-platinum">
            <Github size={18} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="G Rahul LinkedIn Profile" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-400/15 bg-slate-800/45 text-muted transition hover:bg-slate-700/45 hover:text-platinum">
            <Linkedin size={18} />
          </a>
        </nav>

        <nav className="mx-auto flex min-h-14 w-full max-w-[430px] items-center justify-between gap-4 rounded-[22px] border border-slate-400/20 bg-slate-900/72 px-4 shadow-[0_18px_50px_rgba(0,0,0,0.28)] backdrop-blur-[16px] lg:hidden" aria-label="Mobile navigation">
          <a href="#home" className="flex items-center gap-2.5">
            <span className="font-ui text-[18px] font-semibold tracking-[-0.025em] text-platinum">Rahul</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex h-10 shrink-0 items-center gap-2 rounded-xl border border-slate-400/20 bg-slate-800/70 px-4 text-[14px] font-semibold text-platinum"
            aria-label="Open menu"
          >
            <Menu size={17} />
            Menu
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open ? <MenuOverlay onClose={() => setOpen(false)} /> : null}
      </AnimatePresence>
    </>
  );
}

function MenuOverlay({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-[80] overflow-hidden bg-[#030712] px-5 py-8 backdrop-blur-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease }}
    >
      <div className="absolute right-[-8rem] top-[-8rem] h-[34rem] w-[34rem] rounded-full bg-violet-400/25 blur-[90px]" />
      <div className="absolute left-[-10rem] top-56 h-[26rem] w-[26rem] rounded-full bg-blue-300/15 blur-[80px]" />
      <div className="absolute inset-0 bg-grid opacity-30" />

      <motion.div
        className="relative mx-auto flex h-16 max-w-[820px] items-center justify-between gap-4 rounded-full border border-slate-400/20 bg-slate-900/82 px-5 shadow-[0_18px_70px_rgba(0,0,0,0.38)] backdrop-blur-2xl sm:h-[76px] sm:px-7"
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.5, ease }}
      >
        <span className="font-ui text-2xl font-bold tracking-[-0.04em] text-platinum sm:text-4xl">G Rahul</span>
        <button onClick={onClose} className="flex shrink-0 items-center gap-2 text-base text-platinum/90 sm:gap-3 sm:text-xl" aria-label="Close menu">
          Close
          <X className="h-7 w-7 sm:h-[34px] sm:w-[34px]" strokeWidth={1.7} />
        </button>
      </motion.div>

      <div className="relative flex min-h-[calc(100vh-10rem)] flex-col items-center justify-center gap-12">
        <motion.div
          className="grid gap-5 text-center"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.055, delayChildren: 0.12 } } }}
        >
          {overlayItems.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="font-ui text-[clamp(2.6rem,6vw,4.7rem)] font-extrabold leading-none tracking-[-0.055em] text-platinum drop-shadow-[0_0_22px_rgba(147,197,253,0.35)] transition hover:text-gold"
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.58, ease } } }}
            >
              {item.label}
            </motion.a>
          ))}
        </motion.div>

        <div className="text-center">
          <div className="mb-5 flex justify-center gap-7 text-muted">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="transition hover:text-platinum"><Github size={28} /></a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="G Rahul LinkedIn Profile" className="transition hover:text-platinum"><Linkedin size={28} /></a>
            <a href={`mailto:${profile.email}`} aria-label="Email Rahul" className="transition hover:text-platinum"><Mail size={28} /></a>
          </div>
          <a href={`mailto:${profile.email}`} className="break-all text-[clamp(1.1rem,6vw,1.5rem)] font-semibold tracking-[-0.03em] text-soft transition hover:text-platinum">{profile.email}</a>
          <p className="mt-5 text-lg text-muted">Available for projects</p>
        </div>
      </div>
    </motion.div>
  );
}
