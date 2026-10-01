import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Loader2, CheckCircle2, Mail, MapPin, BadgeCheck } from 'lucide-react';
import { supabase, type ContactMessage } from '@/lib/supabase';
import { meta } from '@/lib/data';
import { fadeUp, stagger, slideRight } from '@/lib/anim';

type Form = { name: string; email: string; subject: string; message: string };
type Errors = Partial<Record<keyof Form, string>>;

const initial: Form = { name: '', email: '', subject: '', message: '' };

function validate(v: Form): Errors {
  const e: Errors = {};
  if (!v.name.trim()) e.name = 'Please enter your name';
  if (!v.email.trim()) e.email = 'Email is required';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) e.email = 'Enter a valid email';
  if (!v.subject.trim()) e.subject = 'Add a subject';
  if (!v.message.trim()) e.message = 'Write a message';
  return e;
}

const inputBase = 'w-full rounded-xl bg-white/5 border px-4 py-3 text-sm text-white placeholder-muted/60 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-primary/50';

export default function Contact() {
  const [form, setForm] = useState<Form>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const set = (k: keyof Form, val: string) => {
    setForm((f) => ({ ...f, [k]: val }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length) return;

    setStatus('loading');
    const payload: ContactMessage = {
      name: form.name.trim(),
      email: form.email.trim(),
      subject: form.subject.trim(),
      message: form.message.trim(),
    };
    const { error } = await supabase.from('contact_messages').insert(payload);
    if (error) { setStatus('error'); return; }
    setStatus('success');
    setForm(initial);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} variants={stagger(0.1)}>
          <motion.span variants={fadeUp} className="section-tag"><Mail size={12} /> Contact</motion.span>
          <motion.h2 variants={fadeUp} className="section-heading mt-5">Let's build <span className="gradient-text">something</span></motion.h2>
          <motion.p variants={fadeUp} className="section-sub">Have a role, a project or just want to connect? Drop me a message — I reply within a day.</motion.p>
        </motion.div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.3fr_1fr]">
          {/* Form */}
          <motion.form
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger(0.08)}
            onSubmit={onSubmit}
            noValidate
            className="rounded-3xl glass-card p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <motion.div variants={fadeUp}>
                <label htmlFor="c-name" className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-muted">Name</label>
                <input id="c-name" type="text" value={form.name} onChange={(e) => set('name', e.target.value)} className={`${inputBase} ${errors.name ? 'border-red-500/60' : 'border-white/10'}`} placeholder="Your name" />
                {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>}
              </motion.div>
              <motion.div variants={fadeUp}>
                <label htmlFor="c-email" className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-muted">Email</label>
                <input id="c-email" type="email" value={form.email} onChange={(e) => set('email', e.target.value)} className={`${inputBase} ${errors.email ? 'border-red-500/60' : 'border-white/10'}`} placeholder="you@email.com" />
                {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
              </motion.div>
            </div>
            <motion.div variants={fadeUp} className="mt-5">
              <label htmlFor="c-subject" className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-muted">Subject</label>
              <input id="c-subject" type="text" value={form.subject} onChange={(e) => set('subject', e.target.value)} className={`${inputBase} ${errors.subject ? 'border-red-500/60' : 'border-white/10'}`} placeholder="What's this about?" />
              {errors.subject && <p className="mt-1.5 text-xs text-red-400">{errors.subject}</p>}
            </motion.div>
            <motion.div variants={fadeUp} className="mt-5">
              <label htmlFor="c-message" className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-muted">Message</label>
              <textarea id="c-message" rows={5} value={form.message} onChange={(e) => set('message', e.target.value)} className={`${inputBase} ${errors.message ? 'border-red-500/60' : 'border-white/10'} resize-none`} placeholder="Tell me about the role or project…" />
              {errors.message && <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>}
            </motion.div>

            <motion.button
              variants={fadeUp}
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              whileTap={{ scale: 0.97 }}
              className="group mt-7 inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-primary to-accent px-8 py-4 text-sm font-medium text-white shadow-purple-glow transition-all hover:scale-[1.02] disabled:opacity-70"
            >
              {status === 'loading' ? (
                <><Loader2 size={16} className="animate-spin" /> Sending…</>
              ) : (
                <>
                  Send Message
                  <Send size={16} className="transition-transform group-hover:translate-x-1" />
                </>
              )}
            </motion.button>

            {status === 'error' && <p className="mt-4 text-sm text-red-400">Something went wrong. Please try again or email me directly.</p>}
          </motion.form>

          {/* Info side */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }} variants={slideRight} className="flex flex-col gap-5">
            {[
              { icon: Mail, label: 'Email', value: meta.email, href: `mailto:${meta.email}` },
              { icon: MapPin, label: 'Location', value: meta.location, href: '#' },
              { icon: BadgeCheck, label: 'Availability', value: meta.availability, href: '#' },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4 rounded-2xl glass-card p-5">
                <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-primary/15 text-primary"><item.icon size={20} /></span>
                <div>
                  <div className="text-xs uppercase tracking-wide text-muted">{item.label}</div>
                  <div className="mt-1 text-sm text-white">{item.value}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Success overlay */}
      <AnimatePresence>
        {status === 'success' && (
          <motion.div
            className="fixed inset-0 z-[90] grid place-items-center bg-black/70 p-6 backdrop-blur-md"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setStatus('idle')}
          >
            <motion.div
              className="w-full max-w-sm rounded-3xl glass-card p-8 text-center"
              initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.15, type: 'spring', stiffness: 200, damping: 12 }} className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-green-500/20 text-green-400">
                <CheckCircle2 size={36} />
              </motion.div>
              <h3 className="mt-5 font-display text-2xl font-semibold text-white">Message sent!</h3>
              <p className="mt-3 text-sm text-muted">Thanks for reaching out. I'll get back to you within a day.</p>
              <button onClick={() => setStatus('idle')} className="mt-6 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-medium text-white">Close</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
