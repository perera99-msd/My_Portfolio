import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, BriefcaseBusiness, GraduationCap, ShieldCheck, Sparkles } from 'lucide-react';

import AboutBackdrop from '../../components/AboutBackdrop';
import { certifications, skillGroups, timeline } from '../../lib/portfolio-data';

const principles = [
  {
    icon: Sparkles,
    title: 'Sharp hierarchy',
    body: 'Every section should answer one question quickly, then reveal depth through motion and layout.',
  },
  {
    icon: ShieldCheck,
    title: 'Performance with taste',
    body: 'Fancy effects are isolated, lazy-loaded, and balanced by strong defaults so the page still feels immediate.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Production thinking',
    body: 'Routing, component ownership, and reusable data keep the site maintainable as it grows into a bigger portfolio.',
  },
  {
    icon: GraduationCap,
    title: 'Learning in public',
    body: 'The portfolio documents the work, the experiments, and the path so future updates have a clear foundation.',
  },
];

export const metadata = {
  title: 'About | Dimalsha Perera',
  description: 'Story, timeline, skills, and design principles behind the portfolio.',
};

export default function AboutPage() {
  return (
    <main className="page-shell relative isolate">
      <AboutBackdrop />

      <section className="grid gap-6 lg:grid-cols-12" data-reveal>
        <article className="glass-panel about-panel lg:col-span-7 p-6 lg:p-8">
          <span className="section-kicker text-[#f2bf8f]">About</span>
          <h1 className="display-title" style={{ maxWidth: '11ch', color: '#fff8ef' }}>
            Calm product interfaces with strong architecture.
          </h1>
          <p className="section-copy mt-5 text-base lg:text-lg" style={{ color: 'rgba(255, 240, 227, 0.76)' }}>
            Final-year Computer Science undergraduate and Software Development Intern at OCTICK, focused on full-stack products with premium visual systems, practical performance, and clean maintainable code.
          </p>
          <div className="mt-7 hero-links">
            <Link href="/projects" className="btn-solid">
              See projects <ArrowUpRight className="h-4 w-4" />
            </Link>
            <a href="https://www.linkedin.com/in/msdimalsha-perera" target="_blank" rel="noreferrer" className="btn-ghost">
              LinkedIn
            </a>
            <a href="/DimalshaPerera_Resume.pdf" download className="btn-ghost">
              Download resume
            </a>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              'React + Next.js builds',
              'Node + MongoDB systems',
              'UI architecture + motion',
            ].map((item) => (
              <div key={item} className="glass-panel-soft about-panel-soft px-4 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[#fff2e4]/78">
                {item}
              </div>
            ))}
          </div>
        </article>

        <article className="glass-panel about-panel lg:col-span-5 p-5 lg:p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="glass-panel-soft about-panel-soft p-3 sm:col-span-2">
              <div className="relative h-56 overflow-hidden rounded-2xl lg:h-64">
                <Image src="/about/1.png" alt="About layer one" fill className="object-contain object-center" sizes="(max-width: 1024px) 100vw, 32vw" priority />
              </div>
            </div>
            <div className="glass-panel-soft about-panel-soft p-4">
              <span className="pill about-chip">Current role</span>
              <p className="mt-4 text-sm leading-6" style={{ color: 'rgba(255, 240, 227, 0.74)' }}>
                Software Development Intern at OCTICK, building scalable web apps and REST APIs.
              </p>
            </div>
            <div className="glass-panel-soft about-panel-soft p-3">
              <div className="relative h-full min-h-36 overflow-hidden rounded-2xl">
                <Image src="/about/2.png" alt="About layer two" fill className="object-contain object-bottom" sizes="(max-width: 1024px) 100vw, 16vw" />
              </div>
            </div>
          </div>
        </article>
      </section>

      <section className="section-shell grid gap-5 lg:grid-cols-12" data-reveal>
        <article className="glass-panel about-panel lg:col-span-7 p-6 lg:p-7">
          <div className="section-bar">
            <span className="section-kicker text-[#f2bf8f]">Principles</span>
            <h2 className="section-title text-[#fff8ef]">How I keep glass interfaces usable and production-safe.</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {principles.map((principle) => {
              const Icon = principle.icon;
              return (
                <div key={principle.title} className="glass-panel-soft about-panel-soft p-4">
                  <Icon className="h-5 w-5 text-[#f2bf8f]" />
                  <h3 className="mt-3 text-base font-semibold text-[#fff8ef]">{principle.title}</h3>
                  <p className="mt-2 text-sm leading-6" style={{ color: 'rgba(255, 240, 227, 0.68)' }}>
                    {principle.body}
                  </p>
                </div>
              );
            })}
          </div>
        </article>

        <article className="glass-panel about-panel lg:col-span-5 p-6 lg:p-7">
          <div className="section-bar">
            <span className="section-kicker text-[#f2bf8f]">Timeline</span>
            <h2 className="section-title text-[#fff8ef]">Education and work progression.</h2>
          </div>
          <div className="space-y-3">
            {timeline.map((item) => (
              <article key={item.title} className="timeline-item glass-panel-soft about-panel-soft">
                <span className="timeline-year" style={{ color: 'rgba(255, 218, 185, 0.74)' }}>{item.year}</span>
                <h3 className="timeline-title text-[#fff8ef]">{item.title}</h3>
                <p className="timeline-body" style={{ color: 'rgba(255, 240, 227, 0.68)' }}>{item.body}</p>
              </article>
            ))}
          </div>
        </article>
      </section>

      <section className="section-shell grid gap-5 lg:grid-cols-12" data-reveal>
        <article className="glass-panel about-panel lg:col-span-6 p-6 lg:p-7">
          <span className="section-kicker text-[#f2bf8f]">Skill groups</span>
          <h2 className="section-title text-[#fff8ef]">Core capabilities grouped by delivery layer.</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.title} className="glass-panel-soft about-panel-soft p-4">
                <h3 className="text-base font-semibold text-[#fff8ef]">{group.title}</h3>
                <div className="mt-3 tag-row">
                  {group.items.map((item) => (
                    <span key={item} className="tag about-chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="glass-panel about-panel lg:col-span-6 p-6 lg:p-7">
          <span className="section-kicker text-[#f2bf8f]">Credentials</span>
          <h2 className="section-title text-[#fff8ef]">Verified learning and certifications.</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {certifications.slice(0, 4).map((certificate) => (
              <a key={certificate.title} href={certificate.href} target="_blank" rel="noreferrer" className="glass-panel-soft about-panel-soft p-3">
                <div className="project-media h-44">
                  <Image src={certificate.image} alt={certificate.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 25vw" />
                </div>
                <div className="mt-3 space-y-1.5">
                  <h3 className="text-sm font-semibold text-[#fff8ef]">{certificate.title}</h3>
                  <p className="text-xs" style={{ color: 'rgba(255, 240, 227, 0.7)' }}>{certificate.org}</p>
                </div>
              </a>
            ))}
          </div>
        </article>
      </section>

      <section className="section-shell mb-16" data-reveal>
        <div className="glass-panel about-panel cta-band">
          <div>
            <span className="section-kicker text-[#f2bf8f]">Next step</span>
            <h2 className="section-title mt-2 text-[#fff8ef]">
              Need a premium product interface with clean full-stack delivery?
            </h2>
            <p className="section-copy mt-4" style={{ color: 'rgba(255, 240, 227, 0.7)' }}>
              Available for selected freelance and contract work focused on performance, design systems, and maintainable architecture.
            </p>
          </div>
          <div className="hero-links">
            <a href="mailto:msdperera99@gmail.com" className="btn-solid">
              Email me <ArrowUpRight className="h-4 w-4" />
            </a>
            <Link href="/projects" className="btn-ghost" style={{ color: 'rgba(255, 244, 231, 0.88)' }}>
              View projects
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
