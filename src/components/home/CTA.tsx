"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, Cloud } from 'lucide-react';
import { FaInstagram, FaXTwitter, FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import Reveal from '../Reveal';

const customEase = [0.22, 1, 0.36, 1] as const;

// Reusable premium glass class for the 3 individual cards
const glassCardClass = "glass-panel relative overflow-hidden rounded-[2.5rem]";

export default function CTA() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate network request (Replace with actual EmailJS logic later)
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);

    // Auto-reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section className="relative z-10 mx-auto w-full max-w-400 px-4 py-20 sm:px-6 lg:px-12 lg:py-40">
      <Reveal>
        
        {/* GRID LAYOUT: Splits into 3 distinct cards */}
        <div className="grid gap-4 lg:grid-cols-12 lg:gap-6">
          
          {/* === LEFT COLUMN: 2 STACKED CARDS === */}
          <div className="flex flex-col gap-4 lg:col-span-5 lg:gap-6">
            
            {/* CARD 1: CONTACT INFO (TOP LEFT) */}
            <div className={`${glassCardClass} flex-1 p-6 sm:p-8 lg:p-12`}>
              <div className="absolute -left-40 -top-40 h-100 w-100 rounded-full bg-white/2 blur-[100px] pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px w-12 bg-white/30" />
                  <span className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-white/50">Initiate Connection</span>
                </div>
                
                <h2 className="mb-5 font-serif uppercase leading-[1.1] tracking-[0.05em] text-white sm:mb-6" style={{ fontSize: 'clamp(1.7rem, 8.8vw, 3.5rem)' }}>
                  Let&apos;s Build <br />
                  <span className="text-white/40 italic font-light">The Future</span>
                </h2>
                
                <p className="mb-7 max-w-md text-[0.8rem] font-medium leading-[1.75] text-white/50 sm:mb-10 sm:text-[0.85rem] sm:leading-[1.8]">
                  Available for freelance opportunities, AI integrations, and full-stack enterprise builds. Reach out anytime—I strive to respond within 24 hours.
                </p>

                {/* Contact List */}
                <ul className="flex flex-col gap-5 sm:gap-6">
                  <li className="flex items-start gap-4 group">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/2 text-white/60 transition-colors duration-500 group-hover:bg-white group-hover:text-black">
                      <Mail className="h-5 w-5 stroke-[1.5]" />
                    </div>
                    <div className="flex flex-col pt-1">
                      <span className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-white/40 mb-1">Direct Email</span>
                      <a href="mailto:msdperera99@gmail.com" className="break-all font-serif text-base text-white/80 transition-colors hover:text-white sm:text-lg lg:text-xl">msdperera99@gmail.com</a>
                    </div>
                  </li>

                  <li className="flex items-start gap-4 group">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/2 text-white/60 transition-colors duration-500 group-hover:bg-white group-hover:text-black">
                      <Phone className="h-5 w-5 stroke-[1.5]" />
                    </div>
                    <div className="flex flex-col pt-1">
                      <span className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-white/40 mb-1">WhatsApp / Phone</span>
                      <a href="tel:+94766055480" className="font-serif text-base text-white/80 transition-colors hover:text-white sm:text-lg lg:text-xl">+94 76 605 5480</a>
                    </div>
                  </li>

                  <li className="flex items-start gap-4 group">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/2 text-white/60 transition-colors duration-500 group-hover:bg-white group-hover:text-black">
                      <MapPin className="h-5 w-5 stroke-[1.5]" />
                    </div>
                    <div className="flex flex-col pt-1">
                      <span className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-white/40 mb-1">Base Location</span>
                      <span className="font-serif text-base text-white/80 sm:text-lg lg:text-xl">Ja Ela, Sri Lanka</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* CARD 2: SOCIAL MEDIA (BOTTOM LEFT) */}
            <div className={`${glassCardClass} p-6 sm:p-8 lg:p-12`}>
              <div className="relative z-10">
                <span className="block text-[0.6rem] font-bold uppercase tracking-[0.3em] text-white/40 mb-6">Digital Presence</span>
                <div className="flex flex-wrap items-center gap-4">
                  {[
                    { icon: FaInstagram, href: "https://www.instagram.com/dimalshxperera/", label: "Instagram" },
                    { icon: FaXTwitter, href: "https://x.com/dimalshaxperera", label: "X" },
                    { icon: FaGithub, href: "https://github.com/perera99-msd", label: "GitHub" },
                    { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/msdimalsha-perera", label: "LinkedIn" }
                  ].map((social, i) => {
                    const Icon = social.icon;
                    return (
                      <a 
                        key={i} 
                        href={social.href} 
                        target="_blank" 
                        rel="noreferrer"
                        aria-label={social.label}
                        className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/2 text-white/60 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-black hover:shadow-[0_10px_20px_rgba(255,255,255,0.1)]"
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

          </div>

          {/* === RIGHT COLUMN: THE FORM CARD === */}
          <div className="h-full lg:col-span-7">
            <div className={`${glassCardClass} flex h-full min-h-130 flex-col justify-center p-6 sm:p-8 lg:min-h-150 lg:p-16`}>
              <div className="absolute -right-40 -bottom-40 h-125 w-125 rounded-full bg-white/2 blur-[120px] pointer-events-none" />

              <div className="relative z-10">
                <AnimatePresence mode="wait">
                  
                  {!isSubmitted ? (
                    <motion.form 
                      key="form"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20, filter: "blur(8px)" }}
                      transition={{ duration: 0.8, ease: customEase }}
                      onSubmit={handleSubmit}
                      className="flex flex-col gap-5 sm:gap-6"
                    >
                      <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white/50 pl-2">Client Name</label>
                        <input 
                          type="text" 
                          id="name"
                          required
                          placeholder="John Doe"
                          className="w-full rounded-2xl border border-white/10 bg-black/20 px-5 py-3.5 text-sm text-white placeholder:text-white/20 outline-none backdrop-blur-md transition-all focus:border-white/30 focus:bg-white/3 sm:px-6 sm:py-4"
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white/50 pl-2">Email Address</label>
                        <input 
                          type="email" 
                          id="email"
                          required
                          placeholder="john@company.com"
                          className="w-full rounded-2xl border border-white/10 bg-black/20 px-5 py-3.5 text-sm text-white placeholder:text-white/20 outline-none backdrop-blur-md transition-all focus:border-white/30 focus:bg-white/3 sm:px-6 sm:py-4"
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label htmlFor="message" className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white/50 pl-2">Project Details</label>
                        <textarea 
                          id="message"
                          required
                          rows={5}
                          placeholder="Tell me about your vision, timeline, and scope..."
                          className="w-full resize-none rounded-2xl border border-white/10 bg-black/20 px-5 py-3.5 text-sm text-white placeholder:text-white/20 outline-none backdrop-blur-md transition-all focus:border-white/30 focus:bg-white/3 sm:px-6 sm:py-4"
                        />
                      </div>

                      <button 
                        type="submit"
                        disabled={isSubmitting}
                        className="group relative mt-2 flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-white px-7 py-3.5 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-black transition-all hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100 sm:mt-4 sm:px-8 sm:py-4 sm:text-xs sm:tracking-[0.2em]"
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          {isSubmitting ? 'Transmitting...' : 'Send Message'}
                          {!isSubmitting && <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />}
                        </span>
                        <div className="absolute inset-0 z-0 bg-linear-to-r from-white via-white/80 to-white opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      </button>
                    </motion.form>
                  ) : (
                    // --- SUCCESS STATE POPUP ---
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0, scale: 0.9, filter: "blur(8px)" }}
                      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                      transition={{ duration: 0.8, ease: customEase }}
                      className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 z-20"
                    >
                      <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-white/12 bg-white/6 text-white/80 shadow-[0_0_60px_rgba(255,255,255,0.12)]">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", delay: 0.2, bounce: 0.5 }}
                        >
                          <CheckCircle2 className="h-10 w-10" />
                        </motion.div>
                      </div>
                      <h3 className="text-3xl font-serif text-white mb-4 tracking-wide">Transmission Successful</h3>
                      <p className="text-white/50 text-sm leading-relaxed max-w-sm">
                        Your message has been securely delivered to my inbox. I will review your details and respond shortly.
                      </p>
                    </motion.div>
                  )}

                </AnimatePresence>
              </div>
            </div>
          </div>

        </div>
      </Reveal>
    </section>
  );
}