"use client";

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const firstBackground = 'https://i.pinimg.com/1200x/1a/a7/7f/1aa77f6419e59f427065ffc2259034ec.jpg';
const secondBackground = 'https://i.pinimg.com/1200x/1e/db/cf/1edbcf469cb3e66c918efd836dbd39bf.jpg';

export default function ProjectsBackdrop() {
  const { scrollYProgress } = useScroll();

  // Premium Crossfade Logic
  const firstOpacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [1, 1, 0, 0]);
  const secondOpacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 0, 1, 1]);
  
  const firstScale = useTransform(scrollYProgress, [0, 1], [1, 1.03]);
  const secondScale = useTransform(scrollYProgress, [0, 1], [1.03, 1]);
  const firstY = useTransform(scrollYProgress, [0, 1], ['0%', '5%']);
  const secondY = useTransform(scrollYProgress, [0, 1], ['-4%', '2%']);

  return (
    <div className="fixed inset-0 -z-40 overflow-hidden bg-[#090909] pointer-events-none">
      <motion.div style={{ opacity: firstOpacity, scale: firstScale, y: firstY }} className="absolute inset-0">
        <Image src={firstBackground} alt="" fill priority className="object-cover object-center" />
      </motion.div>

      <motion.div style={{ opacity: secondOpacity, scale: secondScale, y: secondY }} className="absolute inset-0">
        <Image src={secondBackground} alt="" fill priority className="object-cover object-center" />
      </motion.div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.03)_16%,transparent_46%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_84%_20%,rgba(255,255,255,0.06)_0%,transparent_30%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,9,10,0.34)_0%,rgba(9,9,10,0.48)_50%,rgba(7,7,7,0.82)_100%)]" />
      <div className="noise-overlay absolute inset-0" />
    </div>
  );
}