import { useScrollProgress } from '@/lib/hooks';

export default function ScrollProgress() {
  const progress = useScrollProgress();
  return (
    <div
      id="scroll-progress"
      style={{ width: `${progress * 100}%`, transformOrigin: 'left' }}
    />
  );
}
