"use client";

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const firstBackground = 'https://i.pinimg.com/1200x/6b/de/06/6bde060e5c6ac48fe399a9d795ba3a07.jpg';
const secondBackground = 'https://i.pinimg.com/1200x/14/ff/2d/14ff2dc4c30325c4fb33f8a61661ba42.jpg';

export default function BlogBackdrop() {
  const { scrollYProgress } = useScroll();

  // Premium Crossfade Logic
  const firstOpacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [1, 1, 0, 0]);
  const secondOpacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 0, 1, 1]);
  
  const firstScale = useTransform(scrollYProgress, [0, 1], [1, 1.03]);
  const secondScale = useTransform(scrollYProgress, [0, 1], [1.03, 1]);
  const firstY = useTransform(scrollYProgress, [0, 1], ['0%', '5%']);
  const secondY = useTransform(scrollYProgress, [0, 1], ['-4%', '2%']);

  return (
    <div className="fixed inset-0 -z-40 overflow-hidden bg-[#09080c] pointer-events-none">
      <motion.div style={{ opacity: firstOpacity, scale: firstScale, y: firstY }} className="absolute inset-0">
        <Image src={firstBackground} alt="" fill priority className="object-cover object-center" />
      </motion.div>

      <motion.div style={{ opacity: secondOpacity, scale: secondScale, y: secondY }} className="absolute inset-0">
        <Image src={secondBackground} alt="" fill priority className="object-cover object-center" />
      </motion.div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,rgba(211,188,255,0.12)_0%,rgba(211,188,255,0.04)_18%,transparent_48%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_22%,rgba(255,255,255,0.07)_0%,transparent_30%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,8,14,0.32)_0%,rgba(10,8,14,0.46)_52%,rgba(8,7,11,0.8)_100%)]" />
      <div className="noise-overlay absolute inset-0" />
    </div>
  );
}