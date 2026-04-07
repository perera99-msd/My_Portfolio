"use client";

import { usePathname } from 'next/navigation';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function BackgroundSystem() {
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  const isHome = pathname === '/';

  // Premium Crossfade Logic
  const opacity1 = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [1, 1, 0, 0]);
  const opacity2 = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 0, 1, 1]);
  
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '6%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['-4%', '2%']);
  const scale1 = useTransform(scrollYProgress, [0, 1], [1, 1.02]);
  const scale2 = useTransform(scrollYProgress, [0, 1], [1.02, 1]);
  const ambientGlow = useTransform(scrollYProgress, [0, 1], [0.16, 0.28]);

  return (
    <div className="fixed inset-0 -z-50 h-full w-full overflow-hidden bg-[#030303] pointer-events-none">
      <motion.img
        src="https://i.pinimg.com/736x/68/a4/33/68a43387adc3975cf0ec51e64fbe2579.jpg"
        alt=""
        style={{ opacity: opacity1, scale: scale1, y: y1 }}
        className={`absolute inset-0 h-full w-full object-cover ${isHome ? 'grayscale contrast-125 saturate-0 brightness-75' : ''}`}
      />

      <motion.img
        src="https://i.pinimg.com/736x/38/ac/49/38ac4935679b41100e7c0263ff39ad9c.jpg"
        alt=""
        style={{ opacity: opacity2, scale: scale2, y: y2 }}
        className={`absolute inset-0 h-full w-full object-cover ${isHome ? 'grayscale contrast-125 saturate-0 brightness-75' : ''}`}
      />

      <div className={`absolute inset-0 ${isHome ? 'bg-[radial-gradient(circle_at_20%_18%,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.05)_18%,transparent_48%)]' : 'bg-[radial-gradient(circle_at_20%_18%,rgba(255,255,255,0.07)_0%,rgba(255,255,255,0.03)_18%,transparent_48%)]'}`} />
      <motion.div
        style={{ opacity: ambientGlow }}
        className={`absolute inset-0 ${isHome ? 'bg-[radial-gradient(circle_at_78%_20%,rgba(255,255,255,0.1)_0%,transparent_34%)]' : 'bg-[radial-gradient(circle_at_78%_20%,rgba(255,255,255,0.08)_0%,transparent_34%)]'}`}
      />
      
      {/* UPDATED: Reduced the black overlay opacity (from 44 to 20) 
        and reduced blur (from 2px to 1px) to make images clearer 
      */}
      <div className={`absolute inset-0 ${isHome ? 'bg-black/14 backdrop-blur-[0.5px]' : 'bg-black/6 backdrop-blur-[0.5px]'}`} />
      <div className="absolute inset-0 bg-[radial-gradient(140%_85%_at_50%_0%,transparent_0%,rgba(0,0,0,0.26)_70%,rgba(0,0,0,0.58)_100%)]" />
      
      {/* Reduced noise opacity slightly to compensate for clearer image */}
      <div className="noise-overlay absolute inset-0 opacity-[0.06]" />
    </div>
  );
}