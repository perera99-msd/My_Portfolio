"use client";

import { motion } from 'framer-motion';
import { Bot, Code2, PenTool, Cloud, ArrowUpRight, MapPin } from 'lucide-react';
import Reveal from '../Reveal';

export default function ProfileOverview() {
  return (
    <section className="relative z-10 mx-auto w-full max-w-[1600px] px-4 py-10 sm:px-6 lg:px-12 lg:py-24">
      
      {/* PREMIUM BENTO GRID 
          Left: Massive Profile Anchor (Span 2)
          Right: Services & Status Column (Span 1)
      */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
        
        {/* === LEFT CARD: THE IDENTITY (Span 2) === */}
        <Reveal delay={0.1} className="lg:col-span-2 h-full">
          <motion.div 
            whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.03)" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="group relative flex h-full min-h-[340px] flex-col justify-between overflow-hidden rounded-[2rem] border border-white/[0.04] bg-white/[0.01] p-6 sm:p-8 lg:p-14 backdrop-blur-[50px] shadow-[0_20px_80px_-20px_rgba(0,0,0,0.5),inset_0_0_0_1px_rgba(255,255,255,0.02)]"
          >
            {/* Deep Ambient Glow */}
            <div className="absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-white/[0.02] blur-[120px] transition-all duration-700 group-hover:bg-white/[0.04]" />

            <div className="relative z-10">
              <span className="text-[0.65rem] font-bold uppercase tracking-[0.4em] text-white/50">
                Introduction
              </span>
              <h2 className="mt-6 font-serif text-4xl leading-[1.05] tracking-wide text-white uppercase sm:text-5xl lg:mt-8 lg:text-7xl">
                Dimalsha <br className="hidden lg:block"/>
                <span className="text-white/40 italic font-light">Perera</span>
              </h2>
              
              <div className="mt-6 flex items-center gap-3 sm:mt-8 sm:gap-4">
                <div className="h-[1px] w-12 bg-white/30" />
                <span className="text-xs lg:text-sm font-bold uppercase tracking-[0.25em] text-white/80">
                  Full-Stack Software Engineer
                </span>
              </div>
            </div>

            <div className="relative z-10 mt-10 sm:mt-14 lg:mt-16">
              <p className="max-w-2xl text-base font-medium leading-[1.8] text-white/60 sm:text-lg lg:text-xl">
                &ldquo;Crafting scalable architectures and exceptional digital experiences. I bridge the gap between complex machine logic and intuitive, human-centered UI design.&rdquo;
              </p>
            </div>

            {/* Giant Architectural Background Text */}
            <div className="absolute bottom-[-12%] right-[-5%] z-0 hidden select-none opacity-[0.02] mix-blend-overlay transition-opacity duration-700 pointer-events-none group-hover:opacity-[0.04] sm:block">
              <span className="font-serif text-[10rem] lg:text-[14rem] uppercase leading-none font-bold">
                ENGINEER
              </span>
            </div>
          </motion.div>
        </Reveal>

        {/* === RIGHT COLUMN: SERVICES & STATUS === */}
        <div className="lg:col-span-1 flex flex-col gap-4 lg:gap-6 h-full">
          
          {/* TOP RIGHT CARD: WHAT I DO */}
          <Reveal delay={0.2} className="flex-1">
            <motion.div 
              whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.03)" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/[0.04] bg-white/[0.01] p-6 sm:p-8 backdrop-blur-[50px] shadow-[0_20px_80px_-20px_rgba(0,0,0,0.5),inset_0_0_0_1px_rgba(255,255,255,0.02)]"
            >
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/[0.02] blur-[80px] transition-all duration-700 group-hover:bg-white/[0.04]" />
              
              <h3 className="relative z-10 text-xs font-bold uppercase tracking-[0.3em] text-white/50 mb-8">
                Core Disciplines
              </h3>
              
              <ul className="relative z-10 flex flex-col gap-5 mt-auto">
                <li className="flex items-center gap-4 group/item cursor-default">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] transition-colors duration-300 group-hover/item:bg-white group-hover/item:text-black text-white/70">
                    <Bot className="h-4 w-4" />
                  </div>
                  <span className="text-[0.8rem] font-bold tracking-[0.15em] text-white/70 uppercase transition-colors duration-300 group-hover/item:text-white">AI Automations</span>
                </li>
                <li className="flex items-center gap-4 group/item cursor-default">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] transition-colors duration-300 group-hover/item:bg-white group-hover/item:text-black text-white/70">
                    <Code2 className="h-4 w-4" />
                  </div>
                  <span className="text-[0.8rem] font-bold tracking-[0.15em] text-white/70 uppercase transition-colors duration-300 group-hover/item:text-white">Web Development</span>
                </li>
                <li className="flex items-center gap-4 group/item cursor-default">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] transition-colors duration-300 group-hover/item:bg-white group-hover/item:text-black text-white/70">
                    <PenTool className="h-4 w-4" />
                  </div>
                  <span className="text-[0.8rem] font-bold tracking-[0.15em] text-white/70 uppercase transition-colors duration-300 group-hover/item:text-white">UI/UX Designing</span>
                </li>
                <li className="flex items-center gap-4 group/item cursor-default">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] transition-colors duration-300 group-hover/item:bg-white group-hover/item:text-black text-white/70">
                    <Cloud className="h-4 w-4" />
                  </div>
                  <span className="text-[0.8rem] font-bold tracking-[0.15em] text-white/70 uppercase transition-colors duration-300 group-hover/item:text-white">Cloud Deployments</span>
                </li>
              </ul>
            </motion.div>
          </Reveal>

          {/* BOTTOM RIGHT CARD: STATUS / LOCATION */}
          <Reveal delay={0.3} className="h-auto">
            <motion.div 
              whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.03)" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-[2rem] border border-white/[0.04] bg-white/[0.01] p-6 sm:p-8 backdrop-blur-[50px] shadow-[0_20px_80px_-20px_rgba(0,0,0,0.5),inset_0_0_0_1px_rgba(255,255,255,0.02)]"
            >
              <div className="mb-6 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex flex-col gap-2">
                  <span className="text-[0.55rem] font-bold uppercase tracking-[0.3em] text-white/50">
                    Location Base
                  </span>
                  <div className="flex items-center gap-2 text-white/80">
                    <MapPin className="h-4 w-4" />
                    <span className="font-serif tracking-widest text-lg">Sri Lanka</span>
                  </div>
                </div>
                
                {/* Live Availability Status Ping */}
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 backdrop-blur-md">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-[0.55rem] uppercase tracking-widest text-emerald-400 font-bold">
                    Available
                  </span>
                </div>
              </div>

              {/* Seamless Action Link */}
              <a 
                href="https://cal.com/msd-perera" 
                target="_blank" 
                rel="noreferrer"
                className="group/btn flex items-center justify-between border-t border-white/[0.05] pt-5 transition-colors"
              >
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white/60 group-hover/btn:text-white transition-colors duration-300">
                  Book a Discovery Call
                </span>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.03] border border-white/10 transition-all duration-300 group-hover/btn:bg-white group-hover/btn:border-white group-hover/btn:scale-110">
                  <ArrowUpRight className="h-3 w-3 text-white/60 group-hover/btn:text-black transition-colors" />
                </div>
              </a>
            </motion.div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}