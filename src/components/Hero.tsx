import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Github, Linkedin, Mail, Twitter, Instagram, Folder, Download, Sparkles,
} from 'lucide-react';
import { useTyping, useCountUp, useInView } from '@/lib/hooks';
import { meta, stats, floatingSnippets } from '@/lib/data';
import { fadeUp, stagger } from '@/lib/anim';

function MagneticButton({
  children, variant = 'primary', onClick, icon,
}: {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  icon?: React.ReactNode;
}) {
  const ref = useRef<HTMLButtonElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    const btn = ref.current;
    if (!btn) return;
    const r = btn.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    btn.style.transform = `translate(${x * 0.2}px, ${y * 0.25}px)`;
  };
  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = 'translate(0,0)';
  };

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileTap={{ scale: 0.96 }}
      className={variant === 'primary' ? 'btn-primary' : 'btn-secondary'}
      style={{ transition: 'transform 0.2s ease' }}
    >
      {icon}
      {children}
    </motion.button>
  );
}

function StatItem({ value, suffix, label, active }: { value: number; suffix: string; label: string; active: boolean }) {
  const n = useCountUp(value, active);
  return (
    <div className="text-center sm:text-left">
      <div className="font-display text-3xl font-bold text-white sm:text-4xl">
        {n}<span className="gradient-text">{suffix}</span>
      </div>
      <div className="mt-1 text-xs uppercase tracking-wider text-muted">{label}</div>
    </div>
  );
}

const socials = [
  { icon: Github, href: meta.socials.github, label: 'GitHub' },
  { icon: Linkedin, href: meta.socials.linkedin, label: 'LinkedIn' },
  { icon: Mail, href: meta.socials.email, label: 'Email' },
  { icon: Twitter, href: meta.socials.twitter, label: 'X' },
  { icon: Instagram, href: meta.socials.instagram, label: 'Instagram' },
];

export default function Hero() {
  const typed = useTyping(['DevOps Engineer', 'Frontend Developer', 'Automation Enthusiast', 'Cloud Learner']);
  const { ref: statRef, inView } = useInView<HTMLDivElement>({ threshold: 0.5 });
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const yPhoto = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" ref={ref} className="relative min-h-screen overflow-hidden pt-28 pb-20 sm:pt-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_1fr] lg:gap-8 lg:px-12">
        {/* Left: text */}
        <motion.div style={{ opacity }}>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="section-tag"
          >
            <Sparkles size={12} /> Available for opportunities
          </motion.span>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-6 font-mono text-sm text-muted"
          >
            Hi, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="mt-2 font-display text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl"
          >
            Daizy<br />
            <span className="gradient-text glow-text">Cherotich</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.7 }}
            className="mt-5 flex h-8 items-center font-display text-xl font-medium text-white sm:text-2xl"
          >
            <span>Future&nbsp;</span>
            <span className="text-secondary">{typed}</span>
            <span className="cursor-blink ml-0.5 h-6" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="mt-6 max-w-xl text-pretty leading-relaxed text-muted"
          >
            Building clean, responsive websites, automation workflows and cloud-ready
            applications while continuously mastering DevOps technologies.
          </motion.p>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-7 flex items-center gap-3"
          >
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="grid h-11 w-11 place-items-center rounded-xl glass text-muted transition-all hover:scale-110 hover:border-primary/50 hover:text-primary hover:shadow-purple-glow"
              >
                <s.icon size={18} />
              </a>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <MagneticButton variant="primary" onClick={() => go('projects')} icon={<Folder size={16} />}>
              View Projects
            </MagneticButton>
            <MagneticButton variant="secondary" onClick={() => window.open('#', '_blank')} icon={<Download size={16} />}>
              Download CV
            </MagneticButton>
          </motion.div>

          {/* Stats */}
          <motion.div
            ref={statRef}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger(0.12, 0.2)}
            className="mt-12 grid max-w-lg grid-cols-2 gap-6 rounded-2xl glass-card p-6 sm:grid-cols-4"
          >
            {stats.map((s) => (
              <motion.div key={s.label} variants={fadeUp}>
                <StatItem {...s} active={inView} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: photo with ambient glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{ y: yPhoto }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          {/* Ambient glow behind photo */}
          <div className="absolute inset-0 -z-10 grid place-items-center">
            <motion.div
              className="h-[80%] w-[80%] rounded-full bg-purple-glow blur-3xl"
              animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0.9, 0.6] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
          <div className="absolute inset-0 -z-10 grid place-items-center">
            <motion.div
              className="h-[60%] w-[60%] rounded-full bg-blue-glow blur-3xl"
              animate={{ scale: [1.1, 1, 1.1], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            />
          </div>

          {/* Photo frame */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] glass-card">
            <img
              src="/images/my-image.jpg"
              alt="Daizy Cherotich — developer portrait"
              className="h-full w-full object-cover object-top"
              style={{ filter: 'brightness(0.9) contrast(1.06) saturate(1.12)' }}
              fetchPriority="high"
            />
            {/* Blend photo edges into dark context */}
            <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/25 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-secondary/15" style={{ mixBlendMode: 'soft-light' }} />

            {/* Floating code snippets */}
            {floatingSnippets.slice(0, 4).map((s, i) => (
              <div
                key={i}
                className="floating-code absolute hidden font-mono text-[10px] text-secondary/70 lg:block"
                style={{
                  ['--rot' as string]: s.rot,
                  ['--delay' as string]: s.delay,
                  left: i % 2 === 0 ? '-8%' : 'auto',
                  right: i % 2 === 1 ? '-6%' : 'auto',
                  top: `${20 + i * 22}%`,
                }}
              >
                <span className="rounded-md border border-white/10 bg-card/80 px-2 py-1 backdrop-blur">{s.code}</span>
              </div>
            ))}
          </div>

          {/* Floating tech badge */}
          <motion.div
            className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-2xl glass-card px-5 py-3"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="flex items-center gap-2 text-xs">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
              </span>
              <span className="font-mono text-white">Currently learning</span>
              <span className="text-secondary">AWS Cloud</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:block"
      >
        <div className="flex h-9 w-5.5 items-start justify-center rounded-full border border-white/20 p-1.5">
          <motion.div className="h-2 w-1 rounded-full bg-primary" animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }} transition={{ duration: 1.6, repeat: Infinity }} />
        </div>
      </motion.div>
    </section>
  );
}
