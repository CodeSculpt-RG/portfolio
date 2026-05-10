import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { profile } from "../../data/profile";
import { useScrollProgress } from "../../hooks/useScrollProgress";

const navItems = ["about", "skills", "experience", "projects", "testimonials", "contact"];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const progress = useScrollProgress();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition duration-500 ${scrolled ? "border-b border-white/[0.08] bg-black/72 shadow-2xl backdrop-blur-2xl" : "bg-gradient-to-b from-black/80 to-transparent"}`}>
      <motion.div className="absolute bottom-0 left-0 h-px bg-gold/70" style={{ scaleX: progress, transformOrigin: "0 50%" }} />
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <a href="#home" className="font-display text-2xl font-semibold tracking-[-0.01em] text-platinum">
          G Rahul
        </a>
        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a key={item} href={`#${item}`} className="relative font-ui text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted transition after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold/70 after:transition-all after:duration-300 hover:text-platinum hover:after:w-full">
              {item}
            </a>
          ))}
          <a href={profile.github} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 px-4 py-2 font-ui text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-platinum/80 transition hover:border-gold/50 hover:text-gold-bright">
            GitHub
          </a>
        </div>
        <button className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-platinum lg:hidden" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {open ? (
        <div className="border-t border-white/[0.08] bg-black/95 px-4 pb-6 pt-2 backdrop-blur-xl lg:hidden">
          {navItems.map((item) => (
            <a key={item} href={`#${item}`} onClick={() => setOpen(false)} className="block border-b border-white/[0.08] py-4 font-ui text-xs uppercase tracking-[0.2em] text-muted">
              {item}
            </a>
          ))}
        </div>
      ) : null}
    </header>
  );
}
