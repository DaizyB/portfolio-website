import { motion } from 'framer-motion';
import {
  Monitor, Code2, Zap, Cloud, Globe, Cpu, type LucideIcon,
} from 'lucide-react';
import { skillGroups } from '@/lib/data';
import { fadeUp, stagger } from '@/lib/anim';
import { useInView } from '@/lib/hooks';

const icons: Record<string, LucideIcon> = { Monitor, Code2, Zap, Cloud, Globe, Cpu };

function ProgressBar({ name, level, color, active }: { name: string; level: number; color: string; active: boolean }) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <span className="text-white/90">{name}</span>
        <span className="font-mono text-xs text-muted">{level}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}aa)`, boxShadow: `0 0 10px ${color}66` }}
          initial={{ width: 0 }}
          animate={active ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </div>
  );
}

function SkillCard({ group, active }: { group: typeof skillGroups[number]; active: boolean }) {
  const Icon = icons[group.icon] ?? Cpu;
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl glass-card p-6 transition-colors hover:border-white/20"
    >
      <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-40" style={{ background: group.color }} />
      <div className="flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-xl" style={{ background: `${group.color}1a`, color: group.color }}>
          <Icon size={22} />
        </span>
        <h3 className="font-display text-lg font-semibold text-white">{group.category}</h3>
      </div>
      <div className="mt-5 space-y-4">
        {group.skills.map((s) => (
          <ProgressBar key={s.name} name={s.name} level={s.level} color={group.color} active={active} />
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.2 });
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} variants={stagger(0.1)}>
          <motion.span variants={fadeUp} className="section-tag"><Cpu size={12} /> Skills</motion.span>
          <motion.h2 variants={fadeUp} className="section-heading mt-5">Technologies I <span className="gradient-text">work with</span></motion.h2>
          <motion.p variants={fadeUp} className="section-sub">A growing toolkit spanning frontend, automation and the DevOps path I'm actively walking.</motion.p>
        </motion.div>

        <motion.div ref={ref} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }} variants={stagger(0.08)} className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g) => (
            <SkillCard key={g.category} group={g} active={inView} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
