"use client";

import { useState, useMemo } from 'react';
import { AnimatePresence, motion, type Variants } from 'framer-motion';
import { Zap, Code2, Wrench, Layers } from 'lucide-react';
import Reveal from '../Reveal'; 

// --- Types & Data ---
type TechItem = {
  label: string;
  skillId: string; // Used to fetch from skillicons.dev
};

type TechCategory = {
  id: 'languages' | 'frameworks' | 'tools';
  title: string;
  icon: React.ElementType;
  description: string;
  items: TechItem[];
};

// Mapped exactly to your GitHub README tech stack
const techCategories: TechCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    icon: Code2,
    description: 'The foundational syntaxes used to build logic and structure.',
    items: [
      { label: 'Java', skillId: 'java' },
      { label: 'JavaScript', skillId: 'js' },
      { label: 'TypeScript', skillId: 'ts' },
      { label: 'Python', skillId: 'py' },
      { label: 'C++', skillId: 'cpp' },
      { label: 'PHP', skillId: 'php' },
      { label: 'C', skillId: 'c' },
    ],
  },
  {
    id: 'frameworks',
    title: 'Frameworks & Databases',
    icon: Layers,
    description: 'The architectural layer for shipping robust interfaces and storing data.',
    items: [
      { label: 'React', skillId: 'react' },
      { label: 'Next.js', skillId: 'nextjs' },
      { label: 'Node.js', skillId: 'nodejs' },
      { label: 'Express', skillId: 'express' },
      { label: 'MySQL', skillId: 'mysql' },
      { label: 'MongoDB', skillId: 'mongodb' },
      { label: 'PostgreSQL', skillId: 'postgres' },
      { label: 'Firebase', skillId: 'firebase' },
      { label: 'Spring Boot', skillId: 'spring' },
      { label: 'Tailwind CSS', skillId: 'tailwind' },
      { label: 'Redis', skillId: 'redis' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    icon: Wrench,
    description: 'The production environment, deployment pipelines, and design utilities.',
    items: [
      { label: 'Git', skillId: 'git' },
      { label: 'GitHub', skillId: 'github' },
      { label: 'Docker', skillId: 'docker' },
      { label: 'AWS', skillId: 'aws' },
      { label: 'Figma', skillId: 'figma' },
      { label: 'IntelliJ IDEA', skillId: 'idea' },
      { label: 'VS Code', skillId: 'vscode' },
      { label: 'Linux', skillId: 'linux' },
      { label: 'Azure', skillId: 'azure' },
      { label: 'Supabase', skillId: 'supabase' },
      { label: 'Vercel', skillId: 'vercel' },
      { label: 'GCP', skillId: 'gcp' },
      { label: 'Cloudflare', skillId: 'cloudflare' },
      { label: 'Netlify', skillId: 'netlify' },
    ],
  },
];

// Mapped exactly to your README Current Focus
const currentFocusItems: TechItem[] = [
  { label: 'Azure', skillId: 'azure' },
  { label: 'Docker', skillId: 'docker' },
  { label: 'AWS', skillId: 'aws' },
  { label: 'Python', skillId: 'py' },
  { label: 'GCP', skillId: 'gcp' },
];

// --- PREMIUM ANIMATION VARIANTS ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 }
  },
  exit: {
    opacity: 0,
    transition: { staggerChildren: 0.03, staggerDirection: -1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.9, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", transition: { type: "spring", bounce: 0.3, duration: 0.8 } },
  exit: { opacity: 0, y: -10, scale: 0.95, filter: "blur(4px)", transition: { duration: 0.3 } }
};

// --- PREMIUM GLASS ICON TILE ---
function RealIconTile({ item, size = 'lg', showLabel = true }: { item: TechItem; size?: 'md' | 'lg', showLabel?: boolean }) {
  const sizeClasses = {
    md: 'w-16 h-16',
    lg: 'w-24 h-24 lg:w-[110px] lg:h-[110px]',
  };
  
  const iconSizes = {
    md: 'w-8 h-8',
    lg: 'w-12 h-12 lg:w-14 lg:h-14',
  };

  return (
    <div className={`group relative flex flex-col items-center justify-center rounded-[1.25rem] border border-white/[0.04] bg-white/[0.01] backdrop-blur-[50px] shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5),inset_0_0_0_1px_rgba(255,255,255,0.02)] transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.04] hover:border-white/[0.1] hover:shadow-[0_20px_80px_-20px_rgba(255,255,255,0.1)] ${sizeClasses[size]}`}>
      
      {/* Skillicons API Image - Using standard img to bypass Next.js SVG blocking */}
      <div className={`relative ${iconSizes[size]} transition-transform duration-500 group-hover:scale-110 ${showLabel ? '-mt-3' : ''}`}>
        <img
          src={`https://skillicons.dev/icons?i=${item.skillId}`}
          alt={item.label}
          className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
          draggable={false}
        />
      </div>

      {/* Elegant Internal Label */}
      {showLabel && (
        <span className="absolute bottom-3 text-[0.55rem] lg:text-[0.6rem] font-bold uppercase tracking-[0.2em] text-white/40 transition-colors duration-500 group-hover:text-white/90 text-center w-full px-2 truncate">
          {item.label}
        </span>
      )}
      
      {/* Tooltip for small sizes without internal label */}
      {!showLabel && (
        <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap rounded-lg bg-[#050505] px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-widest text-white/90 border border-white/10 pointer-events-none shadow-2xl z-50">
          {item.label}
        </div>
      )}
    </div>
  );
}

export default function TechStackArch() {
  const [activeCategory, setActiveCategory] = useState<TechCategory['id']>('frameworks');
  const selectedData = useMemo(() => techCategories.find(c => c.id === activeCategory) || techCategories[0], [activeCategory]);

  return (
    <section className="relative z-10 w-full max-w-[1600px] mx-auto px-4 py-20 lg:px-12 lg:py-32">
      
      {/* Site-Consistent Header */}
      <Reveal>
        <div className="mb-12 flex flex-col items-center justify-center text-center px-2">
          <div className="mb-6 flex items-center justify-center gap-4">
            <div className="h-[1px] w-8 bg-white/30" />
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-white/50">Tech Stack & Tools</span>
            <div className="h-[1px] w-8 bg-white/30" />
          </div>
          <h2 className="text-white font-serif tracking-[0.05em] leading-[1.1] uppercase mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
            The Engineering <span className="text-white/40 italic font-light">Ecosystem</span>
          </h2>
          <p className="max-w-xl text-[0.85rem] leading-[1.8] text-white/50 font-medium pb-2 text-center mx-auto">
            {selectedData.description}
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="relative mx-auto flex min-h-[500px] lg:min-h-[600px] w-full flex-col items-center overflow-hidden rounded-[2.5rem] border border-white/[0.04] bg-white/[0.01] backdrop-blur-[20px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8),inset_0_0_0_1px_rgba(255,255,255,0.02)] pt-10 pb-28 lg:pb-32 px-4 lg:px-12">
          
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.04),transparent_56%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,255,255,0.03),transparent_45%)]" />
          <div className="noise-overlay absolute inset-0 opacity-[0.06]" />

          {/* Premium Glass Category Selector */}
          <div className="relative z-30 flex flex-wrap justify-center gap-2 rounded-full border border-white/10 bg-[#050505]/50 p-1.5 backdrop-blur-3xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8),inset_0_1px_0_0_rgba(255,255,255,0.1)] mb-12">
            {techCategories.map((cat) => {
              const isActive = cat.id === activeCategory;
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className="relative flex items-center gap-2 rounded-full px-5 py-2.5 text-[0.6rem] font-bold uppercase tracking-[0.2em] transition-colors"
                >
                  <span className={`relative z-10 flex items-center gap-2 transition-colors duration-300 ${isActive ? 'text-white' : 'text-white/40 group-hover:text-white/70'}`}>
                    <Icon className="h-3.5 w-3.5" />
                    {cat.title}
                  </span>

                  {isActive && (
                    <motion.div
                      layoutId="category-active-pill"
                      className="absolute inset-0 z-0 rounded-full bg-white/10 border border-white/5 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.15)]"
                      transition={{ type: "spring", bounce: 0.25, duration: 0.6 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* DYNAMIC FLOATING GLASS GRID */}
          <div className="relative z-20 w-full max-w-5xl mx-auto flex flex-wrap justify-center gap-4 lg:gap-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedData.id}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="flex flex-wrap justify-center gap-4 lg:gap-6"
              >
                {selectedData.items.map((item) => (
                  <motion.div key={item.label} variants={itemVariants}>
                    <RealIconTile item={item} size="lg" showLabel={true} />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Central Core (Current Focus) */}
          <div className="absolute bottom-8 lg:bottom-12 left-0 right-0 flex flex-col items-center z-20">
            <div className="mb-4 flex items-center gap-2">
              <Zap className="h-3 w-3 text-[#dce8ff]" />
              <span className="text-[0.6rem] font-bold uppercase tracking-[0.3em] text-[#dce8ff]/70">
                Current Focus
              </span>
            </div>
            
            <div className="flex items-center gap-3 rounded-[1.4rem] border border-white/12 bg-[#06080d]/68 p-3 backdrop-blur-xl shadow-[0_20px_40px_rgba(0,0,0,0.55)]">
              {currentFocusItems.map((item) => (
                <div key={`focus-${item.label}`} className="relative group">
                  <RealIconTile item={item} size="md" showLabel={false} />
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </Reveal>
    </section>
  );
}