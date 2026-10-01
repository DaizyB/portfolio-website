import { Github, Linkedin, Mail, Twitter, Instagram, Heart } from 'lucide-react';
import { meta } from '@/lib/data';

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

const socials = [
  { icon: Github, href: meta.socials.github, label: 'GitHub' },
  { icon: Linkedin, href: meta.socials.linkedin, label: 'LinkedIn' },
  { icon: Mail, href: meta.socials.email, label: 'Email' },
  { icon: Twitter, href: meta.socials.twitter, label: 'X' },
  { icon: Instagram, href: meta.socials.instagram, label: 'Instagram' },
];

export default function Footer() {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  return (
    <footer className="relative border-t border-white/5 py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          <div className="text-center md:text-left">
            <button onClick={() => go('home')} className="inline-flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-primary to-accent font-mono text-lg font-bold text-white">D</span>
              <span className="font-mono text-sm font-medium text-white">daizy<span className="text-primary">.dev</span></span>
            </button>
            <p className="mt-3 max-w-xs text-sm text-muted">{meta.headline}</p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {links.map((l) => (
              <button key={l.id} onClick={() => go(l.id)} className="text-sm text-muted transition-colors hover:text-primary">{l.label}</button>
            ))}
          </nav>

          <div className="flex gap-3">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="grid h-10 w-10 place-items-center rounded-xl glass text-muted transition-all hover:scale-110 hover:border-primary/50 hover:text-primary">
                <s.icon size={17} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-muted">© 2026 Daizy Cherotich. All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-xs text-muted">
            Built with <Heart size={12} className="text-primary" /> using React + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
