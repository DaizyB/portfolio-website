import { motion } from 'framer-motion';
import {
  GraduationCap, Award, Star, Languages, Cloud,
  CheckCircle2, Clock, Loader2, type LucideIcon,
} from 'lucide-react';
import { certifications } from '@/lib/data';
import { fadeUp, stagger } from '@/lib/anim';

const icons: Record<string, LucideIcon> = { GraduationCap, Award, Star, Languages, Cloud };

const statusMap = {
  completed: { icon: CheckCircle2, label: 'Completed', color: '#34D399' },
  'in-progress': { icon: Loader2, label: 'In Progress', color: '#F59E0B' },
} as const;

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} variants={stagger(0.1)}>
          <motion.span variants={fadeUp} className="section-tag"><Award size={12} /> Certifications</motion.span>
          <motion.h2 variants={fadeUp} className="section-heading mt-5">Credentials & <span className="gradient-text">achievements</span></motion.h2>
        </motion.div>

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }} variants={stagger(0.08)} className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c) => {
            const Icon = icons[c.icon] ?? Award;
            const Status = statusMap[c.status as keyof typeof statusMap] ?? { icon: Clock, label: c.detail, color: c.color };
            const StatusIcon = Status.icon;
            return (
              <motion.div
                key={c.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl glass-card p-6"
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-30" style={{ background: c.color }} />

                <div className="flex items-start justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-xl" style={{ background: `${c.color}1a`, color: c.color }}>
                    <Icon size={24} />
                  </span>
                  <span className="font-mono text-xs text-muted">{c.year}</span>
                </div>

                <h3 className="mt-4 font-display text-lg font-semibold text-white">{c.title}</h3>
                <div className="text-sm text-muted">{c.issuer}</div>

                <div className="mt-4 flex items-center gap-2 text-xs" style={{ color: Status.color }}>
                  <StatusIcon size={14} className={c.status === 'in-progress' ? 'animate-spin' : ''} style={c.status === 'in-progress' ? { animationDuration: '3s' } : undefined} />
                  {c.detail}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
