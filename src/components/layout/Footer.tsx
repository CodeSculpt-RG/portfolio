import { profile } from "../../data/profile";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <p className="font-display text-2xl font-semibold text-platinum">G Rahul</p>
        <p className="font-mono text-[0.66rem] uppercase tracking-[0.22em]">© 2026 · Engineered for motion</p>
        <a className="font-mono text-[0.66rem] uppercase tracking-[0.22em] transition hover:text-gold-bright" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
      </div>
    </footer>
  );
}
