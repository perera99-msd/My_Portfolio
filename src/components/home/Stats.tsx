"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Bot, Code2, PenTool, Cloud, ArrowUpRight, MapPin } from 'lucide-react';
import Reveal from '../Reveal';

const disciplines = [
  { icon: Bot, label: 'AI Automations' },
  { icon: Code2, label: 'Web Development' },
  { icon: PenTool, label: 'UI/UX Designing' },
  { icon: Cloud, label: 'Cloud Deployments' },
];

export default function ProfileOverview() {
  return (
    <section className="relative z-10 mx-auto w-full max-w-400 px-4 py-10 sm:px-6 lg:px-12 lg:py-24">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
        <Reveal delay={0.1} className="lg:col-span-2 h-full">
          <motion.div
            whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.045)' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="group relative flex h-full min-h-105 flex-col justify-between overflow-hidden rounded-[2.2rem] border border-white/8 bg-[rgba(255,255,255,0.015)] p-5 shadow-[0_28px_90px_-36px_rgba(0,0,0,0.95),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-[34px] sm:p-8 lg:p-14"
          >
            <div className="absolute -left-20 -top-24 h-105 w-105 rounded-full bg-white/8 blur-[130px] transition-all duration-700 group-hover:bg-white/12" />
            <div className="absolute right-[-8%] top-[22%] h-65 w-65 rounded-full bg-white/6 blur-[120px] transition-all duration-700 group-hover:bg-white/10" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black/35 to-transparent" />

            <div className="relative z-10 flex flex-col gap-5 sm:gap-7">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center rounded-full border border-white/12 bg-white/6 px-3 py-1 text-[0.55rem] font-bold uppercase tracking-[0.28em] text-white/68 backdrop-blur-md">
                  Introduction
                </span>
                <span className="inline-flex items-center rounded-full border border-white/12 bg-white/6 px-3 py-1 text-[0.55rem] font-bold uppercase tracking-[0.22em] text-white/72 backdrop-blur-md">
                  Full-Stack Software Engineer
                </span>
              </div>

              <div>
                <h2 className="max-w-4xl font-serif text-[clamp(3rem,7vw,6.6rem)] leading-[0.9] tracking-[-0.03em] text-white uppercase">
                  Dimalsha <span className="block text-white/45 italic font-light">Perera</span>
                </h2>

                <div className="mt-5 h-px w-20 bg-linear-to-r from-white/55 to-transparent sm:mt-7" />
              </div>
            </div>

            <div className="relative z-10 mt-10 max-w-3xl sm:mt-14">
              <p className="text-[0.98rem] leading-[1.9] text-white/68 sm:text-[1.08rem] lg:text-[1.15rem]">
                &ldquo;Crafting scalable architectures and exceptional digital experiences. I bridge the gap between complex machine logic and intuitive, human-centered UI design.&rdquo;
              </p>
            </div>

            <div className="relative z-10 mt-8 grid gap-3 sm:mt-10 sm:grid-cols-[1fr_auto] sm:items-center">
              <div className="flex flex-wrap items-center gap-2 text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-white/48 sm:gap-3">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">Next.js</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">React</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">MERN Stack</span>
              </div>

              <Link
                href="/projects"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-3 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:border-white/30 hover:bg-white/16 hover:shadow-[0_0_28px_rgba(255,255,255,0.08)] sm:px-5"
              >
                <span className="relative pb-1 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-white/45 transition-all group-hover:after:bg-white">
                  Explore Work
                </span>
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>

            <div className="absolute bottom-[-14%] right-[-4%] hidden select-none opacity-[0.03] mix-blend-overlay transition-opacity duration-700 pointer-events-none sm:block group-hover:opacity-[0.055]">
              <span className="font-serif text-[9rem] leading-none font-bold uppercase lg:text-[13rem]">
                ENGINEER
              </span>
            </div>
          </motion.div>
        </Reveal>

        <div className="flex flex-col gap-4 lg:gap-6">
          <Reveal delay={0.2} className="flex-1">
            <motion.div
              whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.04)' }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="group relative flex h-full flex-col overflow-hidden rounded-4xl border border-white/8 bg-[rgba(255,255,255,0.015)] p-5 shadow-[0_24px_80px_-34px_rgba(0,0,0,0.95),inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-[34px] sm:p-8"
            >
              <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-white/6 blur-[100px] transition-all duration-700 group-hover:bg-white/10" />
              <div className="relative z-10 mb-6 flex items-center justify-between gap-4">
                <h3 className="text-[0.66rem] font-bold uppercase tracking-[0.3em] text-white/52">
                  Core Disciplines
                </h3>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.52rem] font-semibold uppercase tracking-[0.22em] text-white/45">
                  04 Focus Areas
                </span>
              </div>

              <ul className="relative z-10 mt-auto grid gap-3 sm:gap-4">
                {disciplines.map(({ icon: Icon, label }) => (
                  <li key={label} className="group/item flex items-center gap-3 rounded-2xl border border-white/8 bg-white/3 px-4 py-3 transition-all duration-300 hover:border-white/18 hover:bg-white/8">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/75 transition-all duration-300 group-hover/item:border-white/20 group-hover/item:bg-white group-hover/item:text-black">
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="text-[0.76rem] font-bold uppercase tracking-[0.16em] text-white/72 transition-colors duration-300 group-hover/item:text-white sm:text-[0.82rem]">
                      {label}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </Reveal>

          <Reveal delay={0.3} className="h-auto">
            <motion.div
              whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.04)' }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="group relative overflow-hidden rounded-4xl border border-white/8 bg-[rgba(255,255,255,0.015)] p-5 shadow-[0_24px_80px_-34px_rgba(0,0,0,0.95),inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-[34px] sm:p-8"
            >
              <div className="absolute -left-20 top-8 h-48 w-48 rounded-full bg-white/8 blur-[90px] transition-all duration-700 group-hover:bg-white/12" />

              <div className="relative z-10 flex flex-col gap-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex flex-col gap-2">
                    <span className="text-[0.55rem] font-bold uppercase tracking-[0.3em] text-white/48">
                      Location Base
                    </span>
                    <div className="flex items-center gap-2 text-white/84">
                      <MapPin className="h-4 w-4 text-white/60" />
                      <span className="font-serif text-lg tracking-[0.2em] sm:text-xl">Sri Lanka</span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 self-start rounded-full border border-white/12 bg-white/6 px-3 py-1.5 backdrop-blur-md sm:px-3.5">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/70 opacity-70" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
                    </span>
                    <span className="text-[0.55rem] font-bold uppercase tracking-[0.26em] text-white/72">
                      Available
                    </span>
                  </div>
                </div>

                <Link
                  href="https://cal.com/msd-perera"
                  target="_blank"
                  rel="noreferrer"
                  className="group/btn flex items-center justify-between rounded-2xl border border-white/8 bg-white/3 px-4 py-4 transition-all duration-300 hover:border-white/18 hover:bg-white/8"
                >
                  <span className="text-[0.64rem] font-bold uppercase tracking-[0.22em] text-white/64 transition-colors duration-300 group-hover/btn:text-white sm:text-[0.68rem]">
                    Book a Discovery Call
                  </span>
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/6 text-white/70 transition-all duration-300 group-hover/btn:border-white group-hover/btn:bg-white group-hover/btn:text-black group-hover/btn:scale-110">
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </div>
                </Link>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}