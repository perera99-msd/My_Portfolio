import { useRef, useEffect } from 'react';

export function useTilt(options = { max: 5, speed: 1000, glare: true, maxGlare: 0.1 }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const px = (x / rect.width) * 2 - 1;
      const py = (y / rect.height) * 2 - 1;
      el.style.transform = `rotateY(${-px * options.max}deg) rotateX(${py * options.max}deg)`;
      if (options.glare) {
        el.style.setProperty('--glare-x', `${x}px`);
        el.style.setProperty('--glare-y', `${y}px`);
      }
    };
    const handleMouseLeave = () => {
      el.style.transform = '';
    };
    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [options]);
  return ref;
}
