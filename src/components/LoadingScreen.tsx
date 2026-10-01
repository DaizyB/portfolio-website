import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [done, setDone] = useState(false);
  const [lines, setLines] = useState<string[]>([]);

  const messages = [
    '> initializing portfolio module…',
    '> loading Daizy.Cherotich — version 2026.1',
    '> compiling components [████████] 100%',
    '> mounting UI ✓',
  ];

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setLines((prev) => [...prev, messages[i]]);
      i++;
      if (i >= messages.length) {
        clearInterval(interval);
        setTimeout(() => setDone(true), 600);
      }
    }, 380);
    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[200] grid place-items-center bg-[#050816]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-glow blur-3xl opacity-50" />

          <div className="relative w-full max-w-sm px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-6 text-center"
            >
              <div className="font-mono text-5xl font-bold gradient-text glow-text">D</div>
              <div className="mt-2 text-xs uppercase tracking-[0.4em] text-muted">daizy.dev</div>
            </motion.div>

            <div className="rounded-xl glass-card p-4 font-mono text-xs text-muted">
              {lines.map((l, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-green-400/80"
                >
                  {l}
                </motion.div>
              ))}
              <span className="inline-block h-3 w-2 animate-pulse bg-primary align-middle" />
            </div>

            <div className="mt-5 h-1 overflow-hidden rounded-full bg-white/5">
              <motion.div
                className="h-full bg-gradient-to-r from-primary via-accent to-secondary"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.8, ease: 'easeInOut' }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
