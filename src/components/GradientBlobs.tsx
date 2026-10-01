import { motion } from 'framer-motion';

/** Animated 3D gradient blobs that sit behind the whole page */
export default function GradientBlobs() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute -left-32 top-[-10%] h-[500px] w-[500px] rounded-full bg-purple-glow blur-3xl"
        animate={{ x: [0, 60, 0], y: [0, 40, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-[-15%] top-[30%] h-[600px] w-[600px] rounded-full bg-blue-glow blur-3xl"
        animate={{ x: [0, -80, 0], y: [0, 60, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
      <motion.div
        className="absolute left-[20%] bottom-[-20%] h-[450px] w-[450px] rounded-full bg-purple-glow blur-3xl opacity-60"
        animate={{ x: [0, 50, 0], y: [0, -40, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
      />
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-30" />
    </div>
  );
}
