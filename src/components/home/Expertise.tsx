"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Bot, Server, MonitorSmartphone, PenTool, Cpu } from 'lucide-react';
import Reveal from '../Reveal';

export default function Expertise() {
  return (
    <section className="relative z-10 mx-auto w-full max-w-[1600px] px-4 pb-24 pt-18 sm:px-6 lg:px-12 lg:pb-56 lg:pt-32">
      
      {/* Section Header */}
      <Reveal>
        <div className="mb-12 flex flex-col items-start justify-between gap-5 px-1 sm:px-2 md:flex-row md:items-end lg:mb-16">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-white/30" />
              <span className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-white/50">Engineering Arsenal</span>
            </div>
            <h2 className="text-white font-serif tracking-[0.05em] leading-[1.1] uppercase" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
              Systems <span className="text-white/40 italic font-light">&</span> Solutions
            </h2>
          </div>
            <p className="max-w-md pb-1 text-[0.8rem] font-medium leading-[1.75] text-white/50 lg:pb-2 lg:text-right lg:text-[0.85rem] lg:leading-[1.8]">
            Architecting end-to-end digital ecosystems. From deep backend logic and intelligent automation to cinematic front-end user experiences.
          </p>
        </div>
      </Reveal>

      {/* PREMIUM BENTO GRID (3x3 Layout)
        Row 1: AI (Span 2) | UI Design (Span 1)
        Row 2: Frontend (Span 1) | FLOATING IMAGE (Span 1) | Backend (Span 1)
        Row 3: API Integrations (Span 3 - Full Width)
      */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        
        {/* === CARD 1: AI & AUTOMATION (Span 2) === */}
        <Reveal delay={0.1} className="md:col-span-2">
          <motion.div 
            whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.03)" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="glass-panel group relative flex h-full min-h-[320px] flex-col justify-between rounded-[2rem] p-6 sm:p-8 lg:min-h-[360px] lg:p-12"
          >
            {/* Ambient Glow */}
            <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-white/[0.02] blur-[100px] transition-all duration-700 group-hover:bg-white/[0.04]" />
            
            {/* === IMAGE UPLOAD SPACE (RIGHT SIDE) === */}
            <div className="absolute inset-y-0 right-0 w-[45%] z-10 hidden lg:block opacity-60 transition-opacity duration-500 group-hover:opacity-100">
              <Image 
                src="/Expertice/AI.png" // <--- ADD YOUR IMAGE HERE
                alt="AI System" 
                fill 
                className="object-contain object-center drop-shadow-[0_0_40px_rgba(255,255,255,0.1)]" 
              />
            </div>

            {/* Content (Left Side constrained to 60% width) */}
            <div className="relative z-20 flex flex-col h-full w-full lg:w-[55%]">
              <div className="mb-10 flex items-start justify-between sm:mb-16">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-white shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.1)] transition-colors duration-500 group-hover:bg-white group-hover:text-black">
                  <Bot className="h-5 w-5 stroke-[1.5]" />
                </div>
              </div>

              <div className="mt-auto">
                <h3 className="mb-4 text-2xl font-serif tracking-wide text-white sm:text-3xl">AI & Business Automation</h3>
                <p className="mb-6 text-[0.8rem] leading-[1.75] text-white/50 sm:mb-8 sm:text-[0.85rem] sm:leading-[1.8]">
                  Transforming complex operational bottlenecks into seamless, hands-free pipelines. I build and integrate intelligent agents and automated workflows that scale.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["n8n Workflows", "Custom AI Agents", "Social Automation"].map(tag => (
                    <span key={tag} className="rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-2 text-[0.6rem] font-bold tracking-[0.2em] text-white/60 uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </Reveal>

        {/* === CARD 2: UI DESIGNING === */}
        <Reveal delay={0.2} className="md:col-span-1">
          <motion.div 
            whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.03)" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="glass-panel group relative flex h-full min-h-[300px] flex-col justify-between rounded-[2rem] p-6 sm:p-8 lg:min-h-[360px] lg:p-10"
          >
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-white shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.1)] transition-colors duration-500 group-hover:bg-white group-hover:text-black">
              <PenTool className="h-5 w-5 stroke-[1.5]" />
            </div>

            <div className="relative z-10 mt-auto pt-10 sm:pt-16">
              <h3 className="mb-3 text-2xl font-serif tracking-wide text-white">UI Designing</h3>
              <p className="text-[0.85rem] leading-[1.8] text-white/50 mb-6">
                Crafting pixel-perfect, highly converting visual languages before a single line of code is written.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-1.5 text-[0.55rem] font-bold tracking-[0.2em] text-white/60 uppercase">
                  Figma / Prototyping
                </span>
              </div>
            </div>
          </motion.div>
        </Reveal>

        {/* === CARD 3: MODERN FRONTENDS === */}
        <Reveal delay={0.3} className="md:col-span-1">
          <motion.div 
            whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.03)" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="glass-panel group relative flex h-full min-h-[300px] flex-col justify-between rounded-[2rem] p-6 sm:p-8 lg:min-h-[360px] lg:p-10"
          >
            <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-white/[0.02] blur-[80px] transition-all duration-700 group-hover:bg-white/[0.04]" />
            
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-white shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.1)] transition-colors duration-500 group-hover:bg-white group-hover:text-black">
              <MonitorSmartphone className="h-5 w-5 stroke-[1.5]" />
            </div>

            <div className="relative z-10 mt-auto pt-10 sm:pt-16">
              <h3 className="mb-3 text-2xl font-serif tracking-wide text-white">Stable Frontends</h3>
              <p className="text-[0.85rem] leading-[1.8] text-white/50 mb-6">
                Cinematic, fluid interfaces built for peak performance and physical-feeling interactions.
              </p>
              <div className="flex flex-wrap gap-2">
                 <span className="rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-1.5 text-[0.55rem] font-bold tracking-[0.2em] text-white/60 uppercase">
                  React / Next.js
                </span>
              </div>
            </div>
          </motion.div>
        </Reveal>

        {/* === CENTER FLOATING IMAGE SPACE === */}
        <Reveal delay={0.4} className="md:col-span-1 hidden lg:flex items-center justify-center relative min-h-[420px] overflow-visible group">
          <motion.div 
            animate={{ y: [-15, 15, -15] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="relative flex h-[420px] w-full max-w-[680px] items-center justify-center z-30 pointer-events-none"
          >
            {/* <--- ADD YOUR CENTERPIECE IMAGE HERE ---> */}
            <Image 
              src="/Expertice/MAIN.png" 
              alt="Floating Centerpiece" 
              fill 
              className="object-contain object-center grayscale group-hover:grayscale-0 brightness-75 group-hover:brightness-100 contrast-110 opacity-100 drop-shadow-[0_0_60px_rgba(255,255,255,0.12)] transition-all duration-700" 
            />
          </motion.div>
        </Reveal>

        {/* === CARD 4: BACKEND ARCHITECTURE === */}
        <Reveal delay={0.5} className="md:col-span-1">
           <motion.div 
            whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.03)" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="glass-panel group relative flex h-full min-h-[300px] flex-col justify-between rounded-[2rem] p-6 sm:p-8 lg:min-h-[360px] lg:p-10"
          >
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-white shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.1)] transition-colors duration-500 group-hover:bg-white group-hover:text-black">
              <Server className="h-5 w-5 stroke-[1.5]" />
            </div>

            <div className="relative z-10 mt-auto pt-10 sm:pt-16">
              <h3 className="mb-3 text-2xl font-serif tracking-wide text-white">Backend Systems</h3>
              <p className="text-[0.85rem] leading-[1.8] text-white/50 mb-6">
                Architecting secure, highly scalable server-side environments and robust relational databases.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-1.5 text-[0.55rem] font-bold tracking-[0.2em] text-white/60 uppercase">
                  Node / Express
                </span>
              </div>
            </div>
          </motion.div>
        </Reveal>

        {/* === CARD 5: API INTEGRATIONS (Span 3 Full Width Banner) === */}
        <Reveal delay={0.6} className="md:col-span-2 lg:col-span-3">
           <motion.div 
            whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.03)" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="glass-panel group relative flex h-full min-h-[260px] flex-col items-center justify-between rounded-[2rem] p-6 sm:p-8 lg:min-h-[300px] lg:flex-row lg:p-12"
          >
            {/* Ambient Glow */}
            <div className="absolute -right-20 -bottom-20 h-96 w-96 rounded-full bg-white/[0.02] blur-[120px] transition-all duration-700 group-hover:bg-white/[0.04]" />
            
            {/* Content (Left Side) */}
            <div className="relative z-20 flex flex-col h-full w-full lg:w-[50%]">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-white shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.1)] transition-colors duration-500 group-hover:bg-white group-hover:text-black sm:mb-10">
                <Cpu className="h-5 w-5 stroke-[1.5]" />
              </div>

              <div className="mt-auto">
                <h3 className="mb-3 text-2xl font-serif tracking-wide text-white sm:mb-4 sm:text-3xl">API Integrations</h3>
                <p className="mb-6 max-w-lg text-[0.8rem] leading-[1.75] text-white/50 sm:mb-8 sm:text-[0.85rem] sm:leading-[1.8]">
                  Seamlessly connecting disparate platforms, webhooks, and external engines into unified, functional ecosystems tailored for enterprise efficiency.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-2 text-[0.6rem] font-bold tracking-[0.2em] text-white/60 uppercase">
                    External Engines / REST APIs
                  </span>
                </div>
              </div>
            </div>

            {/* === IMAGE UPLOAD SPACE (RIGHT SIDE BANNER) === */}
            <div className="absolute right-0 bottom-0 top-0 w-[45%] z-10 hidden lg:block opacity-60 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100">
              <Image 
                src="/Expertice/API.png" // <--- ADD YOUR IMAGE HERE
                alt="API Graphic" 
                fill 
                className="object-contain object-right drop-shadow-[0_0_60px_rgba(255,255,255,0.1)]" 
              />
            </div>

          </motion.div>
        </Reveal>

      </div>
    </section>
  );
}