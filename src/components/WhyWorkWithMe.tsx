import { motion } from 'framer-motion';
import { Zap, Puzzle, TrendingUp, Quote, type LucideIcon } from 'lucide-react';
import { whyMe, philosophy } from '@/lib/data';
import { fadeUp, stagger, scaleIn } from '@/lib/anim';

const icons: Record<string, LucideIcon> = { Zap, Puzzle, TrendingUp };

export default function WhyWorkWithMe() {
  return (
    <section id="why-me" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} variants={stagger(0.1)}>
          <motion.span variants={fadeUp} className="section-tag"><Zap size={12} /> Why Me</motion.span>
          <motion.h2 variants={fadeUp} className="section-heading mt-5">Why work <span className="gradient-text">with me</span></motion.h2>
        </motion.div>

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }} variants={stagger(0.12)} className="mt-14 grid gap-6 md:grid-cols-3">
          {whyMe.map((item) => {
            const Icon = icons[item.icon] ?? Zap;
            return (
              <motion.div
                key={item.title}
                variants={scaleIn}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-3xl glass-card p-8 text-center"
              >
                <div className="pointer-events-none absolute inset-x-0 -top-16 mx-auto h-32 w-32 rounded-full blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-40" style={{ background: item.color }} />

                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="mx-auto grid h-16 w-16 place-items-center rounded-2xl"
                  style={{ background: `${item.color}1a`, color: item.color, boxShadow: `0 0 30px ${item.color}33` }}
                >
                  <Icon size={30} />
                </motion.div>

                <h3 className="mt-6 font-display text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Philosophy quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-20 overflow-hidden rounded-3xl glass-card p-10 text-center sm:p-16"
        >
          <Quote className="mx-auto text-primary/40" size={48} />
          <p className="mx-auto mt-6 max-w-3xl font-display text-2xl font-medium leading-snug text-white text-balance sm:text-3xl">
            {philosophy}
          </p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '6rem' }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mx-auto mt-6 h-0.5 bg-gradient-to-r from-primary to-secondary"
          />
          <p className="mt-4 font-mono text-xs uppercase tracking-[0.3em] text-muted">— Daily Philosophy</p>
        </motion.div>
      </div>
    </section>
  );
}
