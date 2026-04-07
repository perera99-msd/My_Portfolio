"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  GitBranch,
  MoveRight,
} from 'lucide-react';
import Reveal from '../Reveal';
import { featuredProjects } from '../../lib/portfolio-data';

const customEase = [0.22, 1, 0.36, 1] as const;

const textVariants = {
  initial: { opacity: 0, y: 24, filter: 'blur(10px)' },
  animate: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 1, ease: customEase },
  },
  exit: {
    opacity: 0,
    y: -20,
    filter: 'blur(8px)',
    transition: { duration: 0.7, ease: customEase },
  },
};

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const projects = featuredProjects.slice(0, 4);

  useEffect(() => {
    if (isHovered || projects.length < 2) {
      return;
    }

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 8000);

    return () => clearInterval(timer);
  }, [isHovered, projects.length]);

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const getBackgroundImage = (project: (typeof projects)[number]) => {
    return project.backgroundImage ?? project.poster;
  };

  const getCardImage = (project: (typeof projects)[number]) => {
    return project.cardImage ?? project.poster;
  };

  return (
    <section className="relative z-10 mx-auto w-full max-w-[1600px] px-3 pb-16 pt-24 sm:px-4 sm:pt-28 lg:px-12 lg:py-32">
      <Reveal>
        <div className="mb-10 flex flex-col items-start justify-between gap-5 px-1 sm:px-2 md:flex-row md:items-end lg:mb-12 lg:px-6">
          <div>
            <div className="mb-4 flex items-center gap-4">
              <div className="h-[1px] w-12 bg-white/30" />
              <span className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-white/50">Selected Works</span>
            </div>
            <h2
              className="font-serif uppercase leading-[1.05] tracking-[0.05em] text-white"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
            >
              Signature <span className="font-light italic text-white/40">Builds</span>
            </h2>
          </div>
          <Link
            href="/projects"
            className="group mb-2 hidden items-center gap-4 text-xs font-semibold uppercase tracking-[0.25em] text-white/70 transition-colors hover:text-white md:flex"
          >
            <span className="relative pb-1 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-white/30 transition-all group-hover:after:bg-white">
              View Complete Archive
            </span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </Reveal>

      <Reveal delay={0.2}>
        <>
          <div className="relative overflow-hidden rounded-[1.8rem] border border-white/[0.1] bg-[#050505] shadow-[0_35px_85px_-30px_rgba(0,0,0,0.9)] lg:hidden">
            <div className="absolute inset-0 z-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0.2, scale: 1.04 }}
                  animate={{ opacity: 0.92, scale: 1, transition: { duration: 0.9, ease: customEase } }}
                  exit={{ opacity: 0.2, scale: 0.98, transition: { duration: 0.5, ease: customEase } }}
                  className="absolute inset-0"
                >
                  <Image src={getBackgroundImage(projects[activeIndex])} alt={projects[activeIndex].title} fill className="object-cover object-center" />
                </motion.div>
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-[#07080d] via-[#07080d]/84 to-[#07080d]/34" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#07080d]/95 via-[#07080d]/66 to-[#07080d]/26" />
            </div>

            <div className="relative z-20 p-4">
              <span className="inline-flex items-center rounded-full border border-white/18 bg-white/8 px-3 py-1 text-[0.52rem] font-semibold uppercase tracking-[0.18em] text-white/82">
                {projects[activeIndex].category}
              </span>

              <h3 className="mt-3 font-serif text-[clamp(2rem,11vw,3.2rem)] uppercase leading-[0.93] tracking-[0.03em] text-white">
                {projects[activeIndex].title}
              </h3>

              <p className="mt-3 text-[0.88rem] leading-[1.7] text-white/78">
                {projects[activeIndex].summary}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {projects[activeIndex].stack.map((tech) => (
                  <span key={tech} className="rounded-full border border-white/16 bg-white/7 px-2.5 py-1 text-[0.52rem] font-semibold uppercase tracking-[0.14em] text-white/80">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-4 grid gap-2.5">
                <Link
                  href={projects[activeIndex].href}
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-3 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-white"
                >
                  <ArrowUpRight className="h-4 w-4" /> Explore Build
                </Link>
                <Link
                  href={projects[activeIndex].github}
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/6 px-4 py-3 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-white"
                >
                  <GitBranch className="h-4 w-4" /> GitHub
                </Link>
              </div>

              <div className="mt-4 border-t border-white/12 pt-4">
                <div className="hide-scrollbar -mx-1 flex gap-2.5 overflow-x-auto px-1 pb-1">
                  {projects.map((project, idx) => {
                    const isActive = idx === activeIndex;

                    return (
                      <button
                        key={project.title}
                        type="button"
                        onClick={() => setActiveIndex(idx)}
                        className={`relative h-[170px] w-[116px] shrink-0 overflow-hidden rounded-[1rem] border transition-all duration-500 ${
                          isActive ? 'border-white/38' : 'border-white/14 opacity-85'
                        }`}
                      >
                        <Image src={getCardImage(project)} alt={project.title} fill className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 p-2.5 text-left">
                          <span className="text-[0.5rem] font-semibold uppercase tracking-[0.2em] text-white/68">0{idx + 1}</span>
                          <h4 className="mt-1 line-clamp-2 font-serif text-[0.78rem] uppercase leading-[1.15] tracking-[0.04em] text-white">
                            {project.title}
                          </h4>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between gap-3 rounded-2xl border border-white/14 bg-white/8 p-3.5 backdrop-blur-xl">
                <p className="text-[0.73rem] leading-[1.55] text-white/76">
                  Story-driven interfaces with premium glass layering and clear product-focused UX.
                </p>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={goPrev}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white"
                    aria-label="Show previous project"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white"
                    aria-label="Show next project"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative hidden h-[84vh] min-h-[700px] w-full max-h-[940px] flex-col overflow-visible rounded-[2.65rem] border border-white/[0.08] shadow-[0_44px_110px_-25px_rgba(0,0,0,0.9)] lg:flex"
          >
            <div className="absolute inset-0 z-0 overflow-hidden rounded-[2.65rem] bg-[#050505]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 0.85, scale: 1, transition: { duration: 1.6, ease: customEase } }}
                  exit={{ opacity: 0, scale: 0.94, transition: { duration: 1, ease: customEase } }}
                  className="absolute inset-0 h-full w-full"
                >
                  <Image src={getBackgroundImage(projects[activeIndex])} alt={projects[activeIndex].title} fill priority className="object-cover object-center" />
                </motion.div>
              </AnimatePresence>

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_22%,rgba(173,222,255,0.24),transparent_50%),radial-gradient(circle_at_78%_16%,rgba(255,218,176,0.2),transparent_40%)]" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#06080d]/95 via-[#06080d]/76 to-[#06080d]/40" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06080d] via-[#06080d]/40 to-[#06080d]/10" />
              <div className="absolute inset-0 opacity-[0.12] [background:radial-gradient(rgba(255,255,255,0.6)_0.55px,transparent_0.55px)] [background-size:3px_3px]" />
            </div>

            <div className="relative z-40 flex h-full flex-col px-14 pb-14 pt-10">
              <div className="mt-4 grid flex-1 gap-8 lg:grid-cols-[1.18fr_0.82fr] lg:items-end">
                <div className="flex flex-col justify-end">
                  <AnimatePresence mode="wait">
                    <motion.div key={activeIndex} variants={textVariants} initial="initial" animate="animate" exit="exit" className="max-w-[38rem]">
                      <span className="mb-4 inline-flex items-center rounded-full border border-white/22 bg-white/[0.06] px-4 py-1.5 text-[0.58rem] font-semibold uppercase tracking-[0.24em] text-white/80 backdrop-blur-xl">
                        {projects[activeIndex].category}
                      </span>

                      <h3 className="font-serif uppercase leading-[0.95] tracking-[0.02em] text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.55)]" style={{ fontSize: 'clamp(2.2rem,7vw,5.9rem)' }}>
                        {projects[activeIndex].title}
                      </h3>

                      <p className="mt-6 max-w-[55ch] text-[0.9rem] leading-[1.85] tracking-[0.06em] text-white/74">
                        {projects[activeIndex].summary}
                      </p>

                      <div className="mt-8 flex flex-wrap gap-2.5">
                        {projects[activeIndex].stack.map((tech) => (
                          <span key={tech} className="rounded-full border border-white/16 bg-white/[0.05] px-3 py-1.5 text-[0.56rem] font-bold uppercase tracking-[0.2em] text-white/78 backdrop-blur-md">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="mt-9 flex items-center gap-4">
                        <Link href={projects[activeIndex].href} target="_blank" className="group/btn inline-flex items-center gap-3 rounded-full border border-white/22 bg-white/[0.08] px-4 py-3 text-[0.62rem] font-bold uppercase tracking-[0.22em] text-white transition-all duration-500 hover:border-white/35 hover:bg-white/16">
                          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/[0.07] transition-all duration-500 group-hover/btn:rotate-45 group-hover/btn:bg-white group-hover/btn:text-black">
                            <ArrowUpRight className="h-4 w-4" />
                          </span>
                          Explore Build
                        </Link>

                        <Link href={projects[activeIndex].github} target="_blank" className="group/git inline-flex items-center gap-3 rounded-full border border-white/22 bg-white/[0.08] px-4 py-3 text-[0.62rem] font-bold uppercase tracking-[0.22em] text-white transition-all duration-500 hover:border-white/35 hover:bg-white/16">
                          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/[0.07] transition-all duration-500 group-hover/git:bg-white group-hover/git:text-black">
                            <GitBranch className="h-4 w-4" />
                          </span>
                          GitHub
                        </Link>

                        <span className="text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-white/55">No. 0{activeIndex + 1}</span>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="flex flex-col justify-end">
                  <div className="hide-scrollbar -mx-1 flex gap-3 overflow-x-auto px-1 pb-1 lg:justify-end lg:translate-x-28 xl:translate-x-36">
                    {projects.map((project, idx) => {
                      const isActive = idx === activeIndex;

                      return (
                        <button
                          key={project.title}
                          type="button"
                          onClick={() => setActiveIndex(idx)}
                          className={`group/card relative h-[290px] w-[168px] shrink-0 overflow-hidden rounded-[1.1rem] border text-left transition-all duration-700 ease-[0.22,1,0.36,1] ${
                            isActive
                              ? 'translate-y-[-4px] border-white/38 shadow-[0_18px_40px_rgba(0,0,0,0.48)]'
                              : 'border-white/14 opacity-80 hover:translate-y-[-4px] hover:border-white/26 hover:opacity-100'
                          }`}
                        >
                          <Image src={getCardImage(project)} alt={project.title} fill className="object-cover transition-transform duration-[1800ms] group-hover/card:scale-110" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/32 to-transparent" />

                          {isActive && (
                            <motion.div initial={{ width: '0%' }} animate={{ width: '100%' }} transition={{ duration: 8, ease: 'linear' }} className="absolute left-0 top-0 z-30 h-[2px] bg-white" />
                          )}

                          <div className="absolute inset-x-0 bottom-0 z-20 p-3.5">
                            <span className="text-[0.52rem] font-semibold uppercase tracking-[0.25em] text-white/66">0{idx + 1}</span>
                            <h4 className="mt-1 line-clamp-2 font-serif text-[0.92rem] uppercase leading-[1.14] tracking-[0.06em] text-white">
                              {project.title}
                            </h4>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-end justify-between gap-4">
                <div className="max-w-[25rem] rounded-2xl border border-white/18 bg-white/[0.08] p-4 backdrop-blur-xl">
                  <div className="mb-3 flex -space-x-2.5">
                    {projects.slice(0, 4).map((project, idx) => (
                      <div key={project.title} className="relative h-8 w-8 overflow-hidden rounded-full border border-white/30" style={{ zIndex: 10 - idx }}>
                        <Image src={getCardImage(project)} alt={project.title} fill className="object-cover" />
                      </div>
                    ))}
                  </div>
                  <p className="text-[0.76rem] leading-[1.65] text-white/78">Story-driven interfaces with premium glass layering, cinematic motion, and clear product-focused UX.</p>
                </div>

                <div className="flex items-center gap-2.5">
                  <button type="button" onClick={goPrev} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/[0.08] text-white transition-all duration-500 hover:border-white/34 hover:bg-white/16" aria-label="Show previous project">
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button type="button" onClick={goNext} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/[0.08] text-white transition-all duration-500 hover:border-white/34 hover:bg-white/16" aria-label="Show next project">
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      </Reveal>

      <div className="mt-12 flex justify-center md:hidden">
        <Link href="/projects" className="group flex items-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white/70 transition-all hover:text-white">
          <span className="relative pb-1 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-white/30 transition-all group-hover:after:bg-white">
            View All Projects
          </span>
          <MoveRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1.5" />
        </Link>
      </div>
    </section>
  );
}