import { Linkedin } from "lucide-react";
import { profile } from "../../data/profile";

export function Footer() {
  return (
    <footer className="border-t border-slate-400/15 px-5 py-8 sm:px-6">
      <div className="mx-auto flex max-w-[1240px] flex-col items-center gap-5 text-center text-sm text-muted md:flex-row md:justify-between md:text-left">
        <p className="font-ui text-sm font-bold text-platinum">G Rahul</p>
        <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em]">Copyright 2026 G Rahul.</p>
        <div className="flex flex-wrap items-center justify-center gap-4 font-mono text-[0.62rem] uppercase tracking-[0.14em]">
          <a className="transition hover:text-gold" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a
            className="inline-flex items-center gap-2 rounded-full border border-slate-400/15 bg-slate-900/70 px-3 py-2 normal-case tracking-normal text-soft transition hover:border-gold/35 hover:bg-slate-800/60 hover:text-platinum"
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="G Rahul LinkedIn Profile"
          >
            <Linkedin size={14} className="text-gold" />
            <span className="font-ui text-xs font-semibold">G Rahul | LinkedIn</span>
          </a>
          <a className="transition hover:text-gold" href={`mailto:${profile.email}`}>Email</a>
        </div>
      </div>
    </footer>
  );
}
