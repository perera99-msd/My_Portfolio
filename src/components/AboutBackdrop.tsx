"use client";

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const firstBackground = 'https://i.pinimg.com/1200x/81/e2/c2/81e2c25404c8d9fe2ab8e3e1dbc7c7d9.jpg';
const secondBackground = 'https://i.pinimg.com/736x/d5/4c/45/d54c459a76a4f8ae8dd67e8796cd575a.jpg';

export default function AboutBackdrop() {
  const { scrollYProgress } = useScroll();

  // Premium Crossfade Logic
  const firstOpacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [1, 1, 0, 0]);
  const secondOpacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 0, 1, 1]);
  
  const firstScale = useTransform(scrollYProgress, [0, 1], [1, 1.03]);
  const secondScale = useTransform(scrollYProgress, [0, 1], [1.03, 1]);
  const firstY = useTransform(scrollYProgress, [0, 1], ['0%', '6%']);
  const secondY = useTransform(scrollYProgress, [0, 1], ['-4%', '2%']);

  return (
    <div className="fixed inset-0 -z-40 overflow-hidden bg-[#0f0d0a] pointer-events-none">
      <motion.div style={{ opacity: firstOpacity, scale: firstScale, y: firstY }} className="absolute inset-0">
        <Image src={firstBackground} alt="" fill priority className="object-cover object-center" />
      </motion.div>

      <motion.div style={{ opacity: secondOpacity, scale: secondScale, y: secondY }} className="absolute inset-0">
        <Image src={secondBackground} alt="" fill priority className="object-cover object-center" />
      </motion.div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(242,191,143,0.18)_0%,rgba(242,191,143,0.05)_16%,transparent_46%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_24%,rgba(255,255,255,0.08)_0%,transparent_30%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,8,6,0.34)_0%,rgba(10,8,6,0.48)_52%,rgba(8,7,6,0.72)_100%)]" />
      <div className="noise-overlay absolute inset-0" />
    </div>
  );
}