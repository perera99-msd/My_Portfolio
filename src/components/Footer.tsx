"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Phone } from 'lucide-react';
import { FaGithub, FaLinkedinIn, FaInstagram, FaFacebookF, FaXTwitter, FaBluesky } from 'react-icons/fa6';
import Reveal from './Reveal';

const glass =
  "relative overflow-hidden border border-white/8 bg-white/2 backdrop-blur-[24px] shadow-[0_24px_70px_-26px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.08)]";

const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blog' },
];

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/msdimalsha-perera',
    icon: FaLinkedinIn,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/dimalshxperera/',
    icon: FaInstagram,
  },
  {
    label: 'X',
    href: 'https://x.com/dimalshaxperera',
    icon: FaXTwitter,
  },
  {
    label: 'Facebook',
    href: 'https://web.facebook.com/sanchana.perera.10/',
    icon: FaFacebookF,
  },
  {
    label: 'Bluesky',
    href: 'https://bsky.app/profile/perera99.bsky.social',
    icon: FaBluesky,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/perera99-msd',
    icon: FaGithub,
  },
];

export default function Footer() {
  return (
    <footer className="relative z-10 w-full overflow-hidden px-3 pb-8 pt-22 sm:px-4 sm:pb-12 sm:pt-20 lg:px-8 lg:pt-20">
      <Reveal className="mx-auto w-full max-w-375">
        <div className={`${glass} rounded-[1.8rem] p-3.5 sm:rounded-[2.2rem] sm:p-6 lg:p-10`}>
          <div className="grid gap-4 sm:gap-5 lg:grid-cols-[1.2fr_0.8fr_0.85fr] lg:gap-6">
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-[1.4rem] border border-white/6 bg-white/1 p-5 sm:rounded-[1.6rem] sm:p-6 lg:p-8"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-3 py-1 text-[0.56rem] font-bold uppercase tracking-[0.2em] text-white/72">
                <span className="h-1.5 w-1.5 rounded-full bg-white/70" /> Available for freelance work
              </span>
              <h2 className="mt-4 font-serif text-[clamp(1.55rem,8.8vw,3.2rem)] uppercase leading-[1.04] tracking-[0.035em] text-white lg:text-5xl">
                Let&apos;s Build
                <span className="mt-1 block font-light italic text-white/48 sm:ml-2 sm:mt-0 sm:inline">Something Sharp</span>
              </h2>
              <p className="mt-4 max-w-xl text-[0.82rem] leading-[1.9] text-white/64 sm:text-sm">
                Full-stack product engineering with premium UI systems, automation workflows, and performance-minded architecture.
              </p>
              <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2">
                <a
                  href="mailto:msdperera99@gmail.com"
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white px-4 py-3 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-black transition-all duration-300 hover:bg-white/90"
                >
                  Email me <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
                <a
                  href="tel:+94766055480"
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/16 bg-white/2 px-4 py-3 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-white/82 transition-all duration-300 hover:border-white/24 hover:bg-white/5 hover:text-white"
                >
                  <Phone className="h-3.5 w-3.5" /> Call now
                </a>
              </div>
            </motion.div>

            <div className="rounded-[1.4rem] border border-white/6 bg-white/1 p-5 sm:rounded-[1.6rem] sm:p-6 lg:p-8">
              <span className="text-[0.56rem] font-bold uppercase tracking-[0.24em] text-white/46 sm:text-[0.58rem] sm:tracking-[0.28em]">Directory</span>
              <div className="mt-5 grid gap-2.5 sm:mt-6 sm:gap-3">
                {footerLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="group flex items-center justify-between rounded-xl border border-white/6 bg-white/1 px-4 py-3 text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-white/62 transition-all duration-300 hover:border-white/16 hover:bg-white/4 hover:text-white sm:text-[0.68rem] sm:tracking-[0.2em]"
                  >
                    {item.label}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-55 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="relative rounded-[1.4rem] border border-white/6 bg-white/1 p-5 sm:rounded-[1.6rem] sm:p-6 lg:p-8">
              <span className="text-[0.56rem] font-bold uppercase tracking-[0.24em] text-white/46 sm:text-[0.58rem] sm:tracking-[0.28em]">Social + Resume</span>
              <div className="mt-5 grid grid-cols-2 gap-2.5 sm:mt-6 sm:gap-3">
                {socialLinks.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center justify-between rounded-xl border border-white/6 bg-white/1 px-3 py-3 text-[0.62rem] font-semibold uppercase tracking-[0.15em] text-white/62 transition-all duration-300 hover:border-white/16 hover:bg-white/4 hover:text-white sm:px-4 sm:text-[0.68rem] sm:tracking-[0.18em]"
                    >
                      <span className="inline-flex min-w-0 items-center gap-2 truncate">
                        <Icon className="h-3.5 w-3.5 shrink-0" />
                        <span className="truncate">{item.label}</span>
                      </span>
                      <ArrowUpRight className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  );
                })}
                <a
                  href="/DimalshaPerera_Resume.pdf"
                  download
                  className="group col-span-2 inline-flex items-center justify-between rounded-xl border border-white/6 bg-white/1 px-4 py-3 text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-white/62 transition-all duration-300 hover:border-white/16 hover:bg-white/4 hover:text-white sm:text-[0.68rem] sm:tracking-[0.2em]"
                >
                  <span className="inline-flex items-center gap-2"><Mail className="h-3.5 w-3.5" /> Resume</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>

              <div className="pointer-events-none absolute -bottom-6 right-0 hidden h-24 w-24 opacity-85 sm:block lg:h-28 lg:w-28">
                <Image
                  src="/Footer/footer.png"
                  alt="Footer accent"
                  fill
                  className="object-contain drop-shadow-[0_16px_30px_rgba(255,255,255,0.08)]"
                />
              </div>
            </div>
          </div>

          <div className="mt-5 flex flex-col items-center justify-between gap-3 border-t border-white/6 pt-4 text-center text-[0.52rem] font-semibold uppercase tracking-[0.18em] text-white/38 sm:mt-6 sm:gap-4 sm:pt-5 sm:text-[0.58rem] sm:tracking-[0.2em] md:flex-row md:items-center md:text-left">
            <span>© {new Date().getFullYear()} Dimalsha Perera</span>
            <span>All rights reserved</span>
          </div>
        </div>
      </Reveal>
    </footer>
  );
}