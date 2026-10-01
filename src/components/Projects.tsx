import { motion } from 'framer-motion';
import {
  Cloud, ShoppingCart, Globe, CheckSquare, Terminal, GitBranch,
  ExternalLink, Github, Folder,
  type LucideIcon,
} from 'lucide-react';
import { projects } from '@/lib/data';
import { fadeUp, stagger } from '@/lib/anim';

const icons: Record<string, LucideIcon> = {
  Cloud, ShoppingCart, Globe, CheckSquare, Terminal, GitBranch,
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} variants={stagger(0.1)}>
          <motion.span variants={fadeUp} className="section-tag"><Folder size={12} /> Featured Work</motion.span>
          <motion.h2 variants={fadeUp} className="section-heading mt-5">Projects I've <span className="gradient-text">built</span></motion.h2>
          <motion.p variants={fadeUp} className="section-sub">A selection of real, working applications — from responsive web apps to automation pipelines.</motion.p>
        </motion.div>

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }} variants={stagger(0.1)} className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => {
            const Icon = icons[p.icon] ?? Globe;
            return (
              <motion.article
                key={p.id}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl glass-card"
              >
                {/* Preview area */}
                <div className={`relative h-44 overflow-hidden bg-gradient-to-br ${p.gradient}`}>
                  <div className="absolute inset-0 bg-dots opacity-40" />
                  <div className="absolute inset-0 grid place-items-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="grid h-20 w-20 place-items-center rounded-2xl bg-white/5 backdrop-blur"
                    >
                      <Icon size={36} className="text-white/80" />
                    </motion.div>
                  </div>
                  <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
                    {p.tags.slice(0, 2).map((t) => (
                      <span key={t} className="rounded-full bg-black/30 px-2.5 py-1 font-mono text-[10px] text-white/80 backdrop-blur">{t}</span>
                    ))}
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-xl font-semibold text-white">{p.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{p.description}</p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span key={t} className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] text-muted">{t}</span>
                    ))}
                  </div>

                  <div className="mt-5 flex gap-3">
                    <a href={p.demoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-secondary transition-colors hover:text-secondary-light">
                      <ExternalLink size={15} /> Live Demo
                    </a>
                    <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-white">
                      <Github size={15} /> Code
                    </a>
                  </div>
                </div>

                {/* hover glow line */}
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-primary via-accent to-secondary opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
