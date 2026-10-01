import { motion } from 'framer-motion';
import {
  GraduationCap, Briefcase, Rocket, Target, type LucideIcon,
} from 'lucide-react';
import { timeline } from '@/lib/data';
import { fadeUp, stagger } from '@/lib/anim';
import { useInView } from '@/lib/hooks';

const icons: Record<string, LucideIcon> = { GraduationCap, Briefcase, Rocket, Target };

export default function Experience() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 });
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-12">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} variants={stagger(0.1)}>
          <motion.span variants={fadeUp} className="section-tag"><Rocket size={12} /> Experience</motion.span>
          <motion.h2 variants={fadeUp} className="section-heading mt-5">The <span className="gradient-text">journey</span> so far</motion.h2>
        </motion.div>

        <div ref={ref} className="relative mt-14">
          {/* Center line */}
          <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-primary/60 via-secondary/40 to-transparent sm:left-1/2 sm:-translate-x-1/2" />
          <motion.div
            className="absolute left-5 top-0 w-px bg-gradient-to-b from-primary to-secondary sm:left-1/2 sm:-translate-x-1/2"
            initial={{ height: 0 }}
            animate={inView ? { height: '100%' } : {}}
            transition={{ duration: 2, ease: 'easeInOut' }}
          />

          <div className="space-y-10">
            {timeline.map((item, i) => {
              const Icon = icons[item.icon] ?? Rocket;
              const right = i % 2 === 1;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: right ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.05 }}
                  className={`relative flex items-start gap-5 sm:w-1/2 ${right ? 'sm:ml-auto sm:flex-row' : 'sm:mr-auto sm:flex-row-reverse sm:text-right'}`}
                >
                  {/* Glowing node */}
                  <div className="absolute left-5 top-1 z-10 -translate-x-1/2 sm:left-auto sm:right-auto sm:left-1/2" style={{}}>
                    <div className="timeline-dot grid h-10 w-10 place-items-center rounded-full border-2 bg-bg" style={{ borderColor: item.color, color: item.color }}>
                      <Icon size={18} />
                    </div>
                  </div>
                  <div className="ml-14 sm:ml-0" />
                  {/* Card */}
                  <div className="flex-1 rounded-2xl glass-card p-6 transition-colors hover:border-white/20">
                    <span className="font-mono text-xs uppercase tracking-widest" style={{ color: item.color }}>{item.year}</span>
                    <h3 className="mt-2 font-display text-lg font-semibold text-white">{item.title}</h3>
                    <div className="text-xs text-muted">{item.org}</div>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
