"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';

import { siteNavigation } from '../lib/portfolio-data';

export default function FloatingNav() {
  const pathname = usePathname();
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);

  return (
    <motion.div
      className="fixed left-1/2 top-3 z-50 w-[calc(100%-1rem)] -translate-x-1/2 px-1 sm:top-6 sm:w-fit sm:px-0"
      initial={{ y: -60, opacity: 0, filter: 'blur(10px)', scale: 0.95 }}
      animate={{ y: 0, opacity: 1, filter: 'blur(0px)', scale: 1 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
    >
      <nav className="glass-nav relative flex w-full min-w-0 items-center justify-between gap-2 rounded-full border border-white/18 bg-[rgba(8,8,8,0.7)] p-1.5 shadow-[0_28px_70px_-18px_rgba(0,0,0,0.9),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-[28px] sm:w-fit sm:bg-[rgba(8,8,8,0.58)]">

        {/* === PRIMARY NAVIGATION LINKS === */}
        <div className="hide-scrollbar flex min-w-0 flex-1 items-center justify-center gap-0.5 overflow-x-auto sm:gap-1">
          {siteNavigation.map((item) => {
            const isActive = pathname === item.href;
            const isHovered = hoveredPath === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onMouseEnter={() => setHoveredPath(item.href)}
                onMouseLeave={() => setHoveredPath(null)}
                className="relative shrink-0 rounded-full px-2.5 py-2 text-[0.53rem] font-semibold uppercase tracking-[0.16em] transition-colors sm:px-5 sm:py-2.5 sm:text-[0.65rem] sm:tracking-[0.25em]"
              >
                <span className={`relative z-10 transition-colors duration-300 ${isActive || isHovered ? 'text-white' : 'text-white/72'}`}>
                  {item.label}
                </span>

                {/* Active Pill (Bright Frosted Core) */}
                {isActive && (
                  <motion.div
                    layoutId="nav-active-pill"
                    className="absolute inset-0 z-0 rounded-full border border-white/15 bg-white/14 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.18),0_0_0_1px_rgba(255,255,255,0.05)]"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.6 }}
                  />
                )}

                {/* Hover Pill (Subtle glow when not active) */}
                {isHovered && !isActive && (
                  <motion.div
                    layoutId="nav-hover-pill"
                    className="absolute inset-0 z-0 rounded-full bg-white/8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Elegant Minimalist Separator */}
        <div className="mx-1 hidden h-6 w-px bg-white/10 sm:block" />

        {/* === SOCIAL ICONS & CTA === */}
        <div className="ml-1 flex shrink-0 items-center gap-1 pr-0.5 sm:gap-2 sm:pr-1">
          
          {/* LinkedIn Icon */}
          <a
            href="https://linkedin.com/in/msdimalsha-perera"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="group relative hidden h-9 w-9 items-center justify-center rounded-full border border-white/18 bg-white/8 text-white/78 transition-all duration-300 hover:border-white/28 hover:bg-white/16 hover:text-white md:flex"
          >
            <FaLinkedinIn className="h-3.75 w-3.75 transition-transform duration-300 group-hover:scale-110" />
          </a>

          {/* GitHub Icon */}
          <a
            href="https://github.com/perera99-msd"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="group relative hidden h-9 w-9 items-center justify-center rounded-full border border-white/18 bg-white/8 text-white/78 transition-all duration-300 hover:border-white/28 hover:bg-white/16 hover:text-white md:flex"
          >
            <FaGithub className="h-3.75 w-3.75 transition-transform duration-300 group-hover:scale-110" />
          </a>

          {/* Resume Button (High Contrast CTA) */}
          <a
            href="/DimalshaPerera_Resume.pdf"
            download
            className="group relative flex h-8 items-center gap-1.5 rounded-full border border-white/30 bg-white px-2.5 text-black shadow-[0_12px_26px_rgba(255,255,255,0.12)] transition-all duration-300 hover:scale-105 hover:bg-white/94 hover:shadow-[0_0_22px_rgba(255,255,255,0.25)] sm:ml-1 sm:h-9 sm:gap-2 sm:px-4"
          >
            <span className="mt-px text-[0.52rem] font-bold uppercase tracking-[0.14em] sm:text-[0.6rem] sm:tracking-[0.2em]">Resume</span>
            <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:h-3.5 sm:w-3.5" />
          </a>
          
        </div>

      </nav>
    </motion.div>
  );
}