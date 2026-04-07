"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Phone } from 'lucide-react';
import Reveal from './Reveal';

const glass =
  "relative overflow-hidden border border-white/[0.12] bg-white/[0.03] backdrop-blur-[24px] shadow-[0_24px_70px_-26px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.16)]";

export default function Footer() {
  return (
    <footer className="relative z-10 w-full overflow-hidden px-4 pb-12 pt-20 lg:px-8">
      <Reveal className="mx-auto w-full max-w-[1500px]">
        <div className={`${glass} rounded-[2.2rem] p-6 lg:p-10`}>
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr_0.85fr]">
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-[1.6rem] border border-white/[0.1] bg-white/[0.02] p-6 lg:p-8"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-[0.56rem] font-bold uppercase tracking-[0.2em] text-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" /> Available for freelance work
              </span>
              <h2 className="mt-6 font-serif text-4xl uppercase tracking-[0.08em] text-white lg:text-5xl">
                Let&apos;s Build
                <span className="ml-2 font-light italic text-white/48">Something Sharp</span>
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/64">
                Full-stack product engineering with premium UI systems, automation workflows, and performance-minded architecture.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="mailto:msdperera99@gmail.com" className="btn-solid text-[0.62rem]">
                  Email me <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
                <a href="tel:+94766055480" className="btn-ghost text-[0.62rem]">
                  <Phone className="h-3.5 w-3.5" /> Call now
                </a>
              </div>
            </motion.div>

            <div className="rounded-[1.6rem] border border-white/[0.1] bg-white/[0.02] p-6 lg:p-8">
              <span className="text-[0.58rem] font-bold uppercase tracking-[0.28em] text-white/46">Directory</span>
              <div className="mt-6 grid gap-3">
                {[
                  { label: 'Home', href: '/' },
                  { label: 'About', href: '/about' },
                  { label: 'Projects', href: '/projects' },
                  { label: 'Blog', href: '/blog' },
                ].map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="group flex items-center justify-between rounded-xl border border-white/[0.08] bg-white/[0.015] px-4 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-white/62 transition-all duration-300 hover:border-white/[0.2] hover:bg-white/[0.06] hover:text-white"
                  >
                    {item.label}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-55 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="relative rounded-[1.6rem] border border-white/[0.1] bg-white/[0.02] p-6 lg:p-8">
              <span className="text-[0.58rem] font-bold uppercase tracking-[0.28em] text-white/46">Social + Resume</span>
              <div className="mt-6 flex flex-col gap-3">
                <a
                  href="https://www.linkedin.com/in/msdimalsha-perera"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center justify-between rounded-xl border border-white/[0.1] bg-white/[0.02] px-4 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-white/62 transition-all duration-300 hover:border-white/[0.2] hover:bg-white/[0.06] hover:text-white"
                >
                  <span className="inline-flex items-center gap-2">in LinkedIn</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <a
                  href="https://github.com/perera99-msd"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center justify-between rounded-xl border border-white/[0.1] bg-white/[0.02] px-4 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-white/62 transition-all duration-300 hover:border-white/[0.2] hover:bg-white/[0.06] hover:text-white"
                >
                  <span className="inline-flex items-center gap-2">gh GitHub</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <a
                  href="/DimalshaPerera_Resume.pdf"
                  download
                  className="group inline-flex items-center justify-between rounded-xl border border-white/[0.1] bg-white/[0.02] px-4 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-white/62 transition-all duration-300 hover:border-white/[0.2] hover:bg-white/[0.06] hover:text-white"
                >
                  <span className="inline-flex items-center gap-2"><Mail className="h-3.5 w-3.5" /> Resume</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>

              <div className="pointer-events-none absolute -bottom-6 right-0 h-24 w-24 opacity-85 lg:h-28 lg:w-28">
                <Image
                  src="/Footer/footer.png"
                  alt="Footer accent"
                  fill
                  className="object-contain drop-shadow-[0_16px_30px_rgba(255,255,255,0.08)]"
                />
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col items-start justify-between gap-4 border-t border-white/[0.09] pt-5 text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-white/38 md:flex-row md:items-center">
            <span>© {new Date().getFullYear()} Dimalsha Perera</span>
            <span>Built with Next.js, Tailwind CSS, Framer Motion</span>
          </div>
        </div>
      </Reveal>
    </footer>
  );
}