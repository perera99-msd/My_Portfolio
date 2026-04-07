"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { MoveRight } from 'lucide-react';

// --- PERSONALIZED SLIDE DATA ---
const slides = [
  {
    id: 0,
    image: "/Hero/1.png", 
    giantText: "VISION",
    leftTitle: "PHASE I",
    leftSubtitle: "CRAFTED IN CODE",
    leftDesc: "Engineering premium web experiences where absolute performance, clarity, and visual storytelling harmonize from the very first interaction.",
    rightTitle: "FRONTEND",
    rightSubtitle: "NEXT.JS & REACT",
    rightDesc: "Delivering cinematic performance, strict layouts, and pixel-perfect execution at an uncompromising 60 frames per second."
  },
  {
    id: 1,
    image: "/Hero/2.png", 
    giantText: "LOGIC",
    leftTitle: "PHASE II",
    leftSubtitle: "SYSTEM ARCHITECTURE",
    leftDesc: "From high-end web platforms to highly scalable SaaS infrastructures. Engineering the deep relational logic that powers flawless execution.",
    rightTitle: "BACKEND",
    rightSubtitle: "MERN STACK",
    rightDesc: "Architecting secure environments, robust data modeling, and precise API endpoint orchestration with Node and MongoDB."
  },
  {
    id: 2,
    image: "/Hero/3.png", 
    giantText: "FUTURE",
    leftTitle: "PHASE III",
    leftSubtitle: "INNOVATION DRIVEN",
    leftDesc: "Integrating advanced technologies and modern digital entrepreneurship. Pushing the absolute boundaries of full-stack product engineering.",
    rightTitle: "PASSION",
    rightSubtitle: "INTELLIGENT SYSTEMS",
    rightDesc: "Bridging complex machine logic with intuitive, human-centered UI design. Continuous evolution for the modern web."
  }
];

// --- PREMIUM ANIMATION VARIANTS (Untouched) ---
const customEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

const slideTransition = {
  initial: { opacity: 0, filter: "blur(16px)", scale: 0.95, zIndex: 1 },
  animate: { opacity: 1, filter: "blur(0px)", scale: 1, zIndex: 1, transition: { duration: 1.8, ease: customEase } },
  exit: { opacity: 0, filter: "blur(12px)", scale: 1.25, zIndex: 10, transition: { duration: 1.6, ease: customEase } }
};

const textContainerVariants = {
  animate: { transition: { staggerChildren: 0.15, delayChildren: 0.4 } }
};

const textItemVariants = {
  initial: { opacity: 0, y: 15, filter: "blur(4px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1.4, ease: customEase } }
};

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play carousel timer 
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-3 pb-10 pt-22 perspective-[1200px] sm:px-4 sm:pb-12 sm:pt-24">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[50%] bg-white/[0.03] blur-[150px] rounded-full pointer-events-none" />

      {/* ULTRA-CLEAN GLASS CONTAINER */}
      <motion.div 
        animate={{ y: [-8, 8, -8] }} 
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="glass-panel relative h-[88vh] min-h-[620px] w-full max-w-[1400px] overflow-hidden rounded-[1.7rem] sm:h-[82vh] sm:min-h-[680px] sm:rounded-[2rem] lg:h-[80vh] lg:min-h-[700px]"
      >
        <AnimatePresence>
          <motion.div
            key={currentIndex}
            variants={slideTransition}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute inset-0 h-full w-full"
          >
            {/* === 1. THE GIANT BACKGROUND TEXT (Z-0) === */}
            {/* UPDATED: Pushed to the top (behind the head) and slightly reduced in size */}
            <div className="absolute left-0 right-0 top-[9%] z-0 flex items-center justify-center overflow-hidden pointer-events-none sm:top-[12%] lg:top-[18%]">
              <motion.h1 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2, ease: customEase, delay: 0.2 }}
                className="font-serif uppercase tracking-[0.1em] text-white/10 select-none whitespace-nowrap"
                style={{ fontSize: 'clamp(3.8rem, 19vw, 15rem)', lineHeight: 0.8 }}
              >
                {slides[currentIndex].giantText}
              </motion.h1>
            </div>

            {/* === 2. THE IMAGE (Z-10) - Locked to Bottom Center === */}
            <div className="absolute inset-x-0 bottom-0 top-14 z-10 flex items-end justify-center pointer-events-none sm:top-10">
              <motion.div
                initial={{ scale: 0.95, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                transition={{ duration: 2, delay: 0.2, ease: customEase }}
                className="relative h-full w-[104%] sm:w-[85%] lg:w-[45%]"
              >
                <Image 
                  src={slides[currentIndex].image} 
                  alt="Showcase Profile" 
                  fill 
                  priority
                  className="object-contain object-bottom drop-shadow-[0_0_80px_rgba(255,255,255,0.08)]" 
                />
              </motion.div>
            </div>

            {/* === MOBILE CONTENT PANEL (Z-20) === */}
            <motion.div
              variants={textContainerVariants}
              initial="initial"
              animate="animate"
              className="absolute inset-x-3 bottom-12 z-20 lg:hidden"
            >
              <div className="rounded-2xl border border-white/14 bg-black/42 p-4 backdrop-blur-xl">
                <motion.span variants={textItemVariants} className="text-[0.56rem] font-bold uppercase tracking-[0.24em] text-white/70">
                  {slides[currentIndex].leftTitle} · {slides[currentIndex].rightTitle}
                </motion.span>

                <motion.h2 variants={textItemVariants} className="mt-3 text-lg font-serif uppercase tracking-[0.12em] text-white">
                  {slides[currentIndex].leftSubtitle}
                </motion.h2>

                <motion.p variants={textItemVariants} className="mt-3 text-[0.76rem] leading-[1.65] text-white/80">
                  {slides[currentIndex].leftDesc}
                </motion.p>

                <motion.div variants={textItemVariants} className="mt-4 flex items-center justify-between gap-4">
                  <span className="text-[0.56rem] font-semibold uppercase tracking-[0.18em] text-white/66">
                    {slides[currentIndex].rightSubtitle}
                  </span>
                  <Link href="/projects" className="group flex items-center gap-2 text-[0.58rem] font-bold uppercase tracking-[0.18em] text-white/90 transition-all hover:text-white">
                    <span className="relative pb-1 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-white/50 transition-all group-hover:after:bg-white">
                      Explore Work
                    </span>
                    <MoveRight className="h-3 w-3 transition-transform duration-500 group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            {/* === 3. LEFT CONTENT (Z-20) === */}
            <motion.div 
              variants={textContainerVariants} 
              initial="initial" 
              animate="animate" 
              className="absolute left-6 top-12 z-20 hidden w-[85%] max-w-[280px] flex-col justify-start lg:left-12 lg:top-1/2 lg:flex lg:w-max lg:-translate-y-1/2"
            >
              {/* UPDATED: text-white/40 -> text-white/60 for better brightness */}
              <motion.span variants={textItemVariants} className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-white/60 mb-2">
                {slides[currentIndex].leftTitle}
              </motion.span>
              
              <motion.h2 variants={textItemVariants} className="text-xl lg:text-2xl font-serif tracking-[0.15em] text-white uppercase mb-4 leading-snug drop-shadow-sm">
                {slides[currentIndex].leftSubtitle}
              </motion.h2>
              
              {/* UPDATED: from-white/30 -> from-white/50 */}
              <motion.div variants={textItemVariants} className="h-[1px] w-12 bg-gradient-to-r from-white/50 to-transparent mb-5" />
              
              {/* UPDATED: text-white/50 -> text-white/80 for highly legible paragraph text */}
              <motion.p variants={textItemVariants} className="text-[0.8rem] leading-[1.8] text-white/80 font-medium tracking-wide">
                {slides[currentIndex].leftDesc}
              </motion.p>

              <motion.div variants={textItemVariants} className="mt-8">
                {/* UPDATED: text-white/80 -> text-white/90 */}
                <Link href="/projects" className="group flex items-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white/90 transition-all hover:text-white w-max">
                  <span className="relative pb-1 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-white/50 transition-all group-hover:after:bg-white">
                    Explore Work
                  </span>
                  <MoveRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1.5" />
                </Link>
              </motion.div>
            </motion.div>

            {/* === 4. RIGHT CONTENT (Z-20) === */}
            <motion.div 
              variants={textContainerVariants} 
              initial="initial" 
              animate="animate"
              className="absolute right-12 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-end text-right w-max max-w-[280px]"
            >
              {/* UPDATED: text-white/40 -> text-white/60 */}
              <motion.span variants={textItemVariants} className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-white/60 mb-2">
                {slides[currentIndex].rightTitle}
              </motion.span>
              
              <motion.h2 variants={textItemVariants} className="text-xl lg:text-2xl font-serif tracking-[0.15em] text-white uppercase mb-4 leading-snug drop-shadow-sm">
                {slides[currentIndex].rightSubtitle}
              </motion.h2>
              
              {/* UPDATED: from-white/30 -> from-white/50 */}
              <motion.div variants={textItemVariants} className="h-[1px] w-12 bg-gradient-to-l from-white/50 to-transparent mb-5" />
              
              {/* UPDATED: text-white/50 -> text-white/80 */}
              <motion.p variants={textItemVariants} className="text-[0.8rem] leading-[1.8] text-white/80 font-medium tracking-wide">
                {slides[currentIndex].rightDesc}
              </motion.p>
            </motion.div>

          </motion.div>
        </AnimatePresence>

        {/* Minimalist Line Indicators */}
        <div className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 gap-4 sm:bottom-8 sm:gap-6">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className="group relative flex h-6 cursor-pointer items-center justify-center"
              aria-label={`Go to slide ${i + 1}`}
            >
              <div className={`h-[1px] transition-all duration-700 ease-[0.22,1,0.36,1] ${
                i === currentIndex ? "w-9 bg-white sm:w-12" : "w-4 bg-white/20 group-hover:bg-white/60 group-hover:w-7 sm:group-hover:w-8"
              }`} />
            </button>
          ))}
        </div>

      </motion.div>
    </section>
  );
}