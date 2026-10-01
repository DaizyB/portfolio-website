import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useActiveSection } from '@/lib/hooks';

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(links.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 top-0 z-50 transition-all duration-500"
        style={{
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          backgroundColor: scrolled ? 'rgba(5,8,22,0.7)' : 'transparent',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
          paddingTop: scrolled ? '0.75rem' : '1.25rem',
          paddingBottom: scrolled ? '0.75rem' : '1.25rem',
        }}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
          <button onClick={() => go('home')} className="group flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-primary to-accent font-mono text-lg font-bold text-white shadow-purple-glow">D</span>
            <span className="font-mono text-sm font-medium text-white">daizy<span className="text-primary">.dev</span></span>
          </button>

          <ul className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <li key={l.id}>
                <button
                  onClick={() => go(l.id)}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${active === l.id ? 'text-white' : 'text-muted hover:text-white'}`}
                >
                  {l.label}
                  {active === l.id && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-full bg-primary/15"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <button
              onClick={() => go('contact')}
              className="hidden rounded-full bg-gradient-to-r from-primary to-accent px-5 py-2.5 text-sm font-medium text-white shadow-purple-glow transition-all hover:scale-105 sm:inline-flex"
            >
              Let's Talk
            </button>
            <button
              onClick={() => setOpen(true)}
              className="grid h-10 w-10 place-items-center rounded-lg glass text-white md:hidden"
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className="fixed right-0 top-0 z-50 h-full w-72 border-l border-white/10 bg-card p-6 shadow-2xl md:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-medium text-white">daizy<span className="text-primary">.dev</span></span>
                <button onClick={() => setOpen(false)} aria-label="Close" className="grid h-10 w-10 place-items-center rounded-lg glass text-white">
                  <X size={20} />
                </button>
              </div>
              <motion.ul className="mt-12 flex flex-col gap-2" initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } } }}>
                {links.map((l) => (
                  <motion.li
                    key={l.id}
                    variants={{ hidden: { opacity: 0, x: 30 }, show: { opacity: 1, x: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } } }}
                  >
                    <button
                      onClick={() => go(l.id)}
                      className={`w-full rounded-xl px-4 py-3.5 text-left font-display text-xl ${active === l.id ? 'bg-primary/15 text-white' : 'text-muted hover:bg-white/5 hover:text-white'}`}
                    >
                      {l.label}
                    </button>
                  </motion.li>
                ))}
              </motion.ul>
              <button onClick={() => go('contact')} className="mt-8 w-full rounded-full bg-gradient-to-r from-primary to-accent py-3.5 text-sm font-medium text-white shadow-purple-glow">
                Let's Talk
              </button>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
