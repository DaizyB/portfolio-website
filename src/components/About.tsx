import { motion } from 'framer-motion';
import { GraduationCap, Sparkles, MapPin } from 'lucide-react';
import { meta } from '@/lib/data';
import { fadeUp, stagger, slideLeft, slideRight } from '@/lib/anim';

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} variants={stagger(0.1)}>
          <motion.span variants={fadeUp} className="section-tag"><Sparkles size={12} /> About Me</motion.span>
          <motion.h2 variants={fadeUp} className="section-heading mt-5">Get to know <span className="gradient-text">Daizy</span></motion.h2>
        </motion.div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Left: photo / identity card */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} variants={slideLeft} className="relative">
            <div className="relative overflow-hidden rounded-3xl glass-card p-1">
              <img src="../images/my-image.jpg" alt="Daizy Cherotich" loading="lazy" className="aspect-[4/5] w-full rounded-[1.4rem] object-cover object-top" style={{ filter: 'brightness(0.9) contrast(1.06) saturate(1.12)' }} />
              <div className="absolute inset-0 rounded-[1.4rem] bg-gradient-to-t from-bg/60 to-transparent" />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 left-1/2 w-[88%] -translate-x-1/2 rounded-2xl glass-card p-5"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent text-white"><GraduationCap size={20} /></span>
                <div>
                  <div className="font-display text-lg font-semibold text-white">ICT Diploma — Distinction</div>
                  <div className="text-xs text-muted">Graduated 2026 · KNEC</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: story + focus tags */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} variants={stagger(0.1)}>
            <motion.h3 variants={slideRight} className="font-display text-2xl font-semibold text-white">Hi, I'm {meta.name.split(' ')[0]} —</motion.h3>
            {meta.bio.map((p, i) => (
              <motion.p key={i} variants={fadeUp} className="mt-4 text-pretty leading-relaxed text-muted">{p}</motion.p>
            ))}

            <motion.p variants={fadeUp} className="mt-6 font-mono text-sm text-secondary">Currently focusing on:</motion.p>
            <motion.div variants={fadeUp} className="mt-4 flex flex-wrap gap-2.5">
              {meta.currentFocus.map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/90 transition-colors hover:border-primary/50 hover:text-primary">{tag}</span>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-sm text-muted"><MapPin size={16} className="text-primary" /> {meta.location}</div>
              <div className="flex items-center gap-2 text-sm text-muted">
                <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" /><span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" /></span>
                Open to work
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
