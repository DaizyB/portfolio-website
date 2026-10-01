import { motion } from 'framer-motion';
import {
  Terminal, Network, Code2, Hash, Box, Cloud, Layers, Share2, RefreshCw,
  ChevronDown, type LucideIcon,
} from 'lucide-react';
import { learningRoadmap } from '@/lib/data';
import { fadeUp, stagger } from '@/lib/anim';
import { useInView } from '@/lib/hooks';

const icons: Record<string, LucideIcon> = {
  Terminal, Network, Code2, Hash, Box, Cloud, Layers, Share2, RefreshCw,
};

const statusStyle: Record<string, { ring: string; label: string; dot: string }> = {
  learning: { ring: 'border-primary', label: 'text-primary', dot: 'bg-primary' },
  upcoming: { ring: 'border-secondary/50', label: 'text-secondary', dot: 'bg-secondary' },
  future: { ring: 'border-white/20', label: 'text-muted', dot: 'bg-white/40' },
};

export default function LearningJourney() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 });
  return (
    <section id="learning" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-12">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} variants={stagger(0.1)}>
          <motion.span variants={fadeUp} className="section-tag"><Terminal size={12} /> Roadmap</motion.span>
          <motion.h2 variants={fadeUp} className="section-heading mt-5">My DevOps <span className="gradient-text">learning path</span></motion.h2>
          <motion.p variants={fadeUp} className="section-sub">A deliberate, sequential journey from Linux fundamentals to full CI/CD pipelines.</motion.p>
        </motion.div>

        <div ref={ref} className="relative mt-14 flex flex-col items-center">
          {learningRoadmap.map((node, i) => {
            const Icon = icons[node.icon] ?? Terminal;
            const style = statusStyle[node.status];
            const isLast = i === learningRoadmap.length - 1;
            return (
              <motion.div
                key={node.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.12, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex w-full max-w-sm flex-col items-center"
              >
                {/* connector */}
                {!isLast && (
                  <div className="relative h-12 w-px overflow-hidden bg-white/10">
                    <motion.div
                      className="absolute inset-0 w-px bg-gradient-to-b from-primary to-secondary"
                      initial={{ y: '-100%' }}
                      animate={inView ? { y: '100%' } : {}}
                      transition={{ delay: i * 0.12 + 0.3, duration: 0.6 }}
                    />
                  </div>
                )}

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`group flex w-full items-center gap-4 rounded-2xl glass-card border-2 p-4 ${style.ring} transition-all`}
                >
                  <span className={`grid h-12 w-12 flex-shrink-0 place-items-center rounded-xl bg-white/5 ${style.label}`}>
                    <Icon size={22} />
                  </span>
                  <div className="flex-1">
                    <div className="font-display text-lg font-semibold text-white">{node.label}</div>
                    <div className={`text-xs uppercase tracking-widest ${style.label}`}>
                      {node.status === 'learning' ? 'In progress' : node.status === 'upcoming' ? 'Up next' : 'Future goal'}
                    </div>
                  </div>
                  <span className={`flex h-2.5 w-2.5 rounded-full ${style.dot}`}>
                    {node.status === 'learning' && <span className={`absolute h-2.5 w-2.5 animate-ping rounded-full ${style.dot} opacity-75`} />}
                  </span>
                </motion.div>
              </motion.div>
            );
          })}

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 rounded-full glass-card px-5 py-2.5 text-sm text-muted"
          >
            <span className="gradient-text font-semibold">CI/CD</span> — the destination
          </motion.div>
        </div>
      </div>
    </section>
  );
}
