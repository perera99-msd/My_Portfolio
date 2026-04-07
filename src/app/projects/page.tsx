import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ExternalLink, Play } from 'lucide-react';

import ProjectsBackdrop from '../../components/ProjectsBackdrop';
import { featuredProjects, projects } from '../../lib/portfolio-data';

export const metadata = {
  title: 'Projects | Dimalsha Perera',
  description: 'Selected projects and case studies from the portfolio.',
};

export default function ProjectsPage() {
  return (
    <main className="page-shell relative isolate">
      <ProjectsBackdrop />

      <section className="grid gap-6 lg:grid-cols-12" data-reveal>
        <article className="glass-panel project-panel lg:col-span-8 p-5 lg:p-7">
          <span className="section-kicker text-[#dce8ff]">Projects</span>
          <h1 className="display-title" style={{ maxWidth: '11ch', color: '#f5f8ff' }}>
            Flagship builds with premium execution.
          </h1>
          <p className="section-copy mt-5 text-base lg:text-lg" style={{ color: 'rgba(232, 238, 247, 0.74)' }}>
            Production and freelance projects designed for strong visual storytelling, conversion flow, and clean full-stack architecture.
          </p>
          <div className="mt-7 hero-links">
            <a href="https://github.com/perera99-msd" target="_blank" rel="noreferrer" className="btn-ghost" style={{ color: 'rgba(235, 240, 248, 0.9)' }}>
              GitHub profile
            </a>
            <a href="mailto:msdperera99@gmail.com" className="btn-solid">
              Start a project <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-8 glass-panel-soft project-panel-soft p-3">
            <div className="relative h-64 overflow-hidden rounded-2xl lg:h-80">
              <Image src={featuredProjects[0].poster} alt={featuredProjects[0].title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 55vw" priority />
              <div className="absolute inset-0 bg-linear-to-t from-black/62 via-black/22 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                <div>
                  <span className="text-[0.6rem] uppercase tracking-[0.24em] text-white/70">Featured</span>
                  <h2 className="mt-1 text-2xl font-semibold text-[#f5f8ff]">{featuredProjects[0].title}</h2>
                </div>
                <a href={featuredProjects[0].href} target="_blank" rel="noreferrer" className="btn-ghost project-ghost text-[0.62rem]">
                  Live <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </article>

        <article className="glass-panel project-panel lg:col-span-4 p-5 lg:p-6">
          <span className="section-kicker text-[#dce8ff]">Studio Layer</span>
          <div className="glass-panel-soft project-panel-soft p-3">
            <div className="relative h-48 overflow-hidden rounded-2xl lg:h-56">
              <Image
                src="/projects/03213cab6a044a3965cc9afe604baa93-removebg-preview.png"
                alt="Projects visual layer"
                fill
                className="object-contain object-center"
                sizes="(max-width: 1024px) 100vw, 28vw"
              />
            </div>
          </div>
          <p className="mt-5 text-sm leading-7" style={{ color: 'rgba(232, 238, 247, 0.74)' }}>
            Every case study is structured as a story: context, system decisions, and final interface quality.
          </p>
          <div className="mt-5 grid gap-3">
            {['Commercial websites', 'Product UI', 'Portfolio systems'].map((item) => (
              <div key={item} className="glass-panel-soft project-panel-soft px-4 py-3 text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-[#e8effd]/76">
                {item}
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="section-shell" data-reveal>
        <div className="section-bar">
          <span className="section-kicker text-[#dce8ff]">Featured set</span>
          <h2 className="section-title text-[#f5f8ff]">Primary showcases from the current portfolio.</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <article key={project.title} className="glass-panel project-panel p-4">
              <div className="project-media">
                <Image src={project.poster} alt={project.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-linear-to-t from-black/54 to-transparent" />
                <span className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/26 px-3 py-1 text-[0.62rem] uppercase tracking-[0.2em] text-white/78 backdrop-blur-sm">
                  <Play className="h-3 w-3" /> Showcase
                </span>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-[#f5f8ff]">{project.title}</h3>
                <p className="mt-2 text-sm" style={{ color: 'rgba(232, 238, 247, 0.72)' }}>{project.summary}</p>
                <div className="mt-4 tag-row">
                  {project.stack.map((item) => (
                    <span key={item} className="tag project-chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell grid gap-5 lg:grid-cols-12" data-reveal>
        <article className="glass-panel project-panel lg:col-span-8 p-5 lg:p-6">
          <div className="section-bar">
            <span className="section-kicker text-[#dce8ff]">Project library</span>
            <h2 className="section-title text-[#f5f8ff]">Detailed cards with stack, metrics, and live links.</h2>
          </div>
          <div className="space-y-4">
            {projects.map((project) => (
              <article key={project.title} className="glass-panel-soft project-panel-soft p-4">
                <div className="grid gap-4 md:grid-cols-[0.88fr_1.12fr] md:items-center">
                  <div className="project-media h-52 md:h-44">
                    <Image src={project.media} alt={project.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 40vw" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#f5f8ff]">{project.title}</h3>
                    <p className="mt-2 text-sm leading-6" style={{ color: 'rgba(232, 238, 247, 0.72)' }}>{project.description}</p>
                    <div className="mt-3 tag-row">
                      {project.metrics.map((metric) => (
                        <span key={metric} className="tag project-chip">
                          {metric}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 flex flex-wrap gap-3">
                      <a href={project.href} target="_blank" rel="noreferrer" className="btn-solid text-sm">
                        Live site <ExternalLink className="h-4 w-4" />
                      </a>
                      <a href={project.github} target="_blank" rel="noreferrer" className="btn-ghost text-sm project-ghost">
                        GitHub <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </article>

        <article className="glass-panel project-panel lg:col-span-4 p-5 lg:p-6">
          <span className="section-kicker text-[#dce8ff]">Secondary layer</span>
          <div className="glass-panel-soft project-panel-soft p-3">
            <div className="relative h-64 overflow-hidden rounded-2xl">
              <Image
                src="/projects/289133d87566aee5700ffb768ca16d0f-removebg-preview.png"
                alt="Projects secondary visual"
                fill
                className="object-contain object-center"
                sizes="(max-width: 1024px) 100vw, 30vw"
              />
            </div>
          </div>
          <p className="mt-5 text-sm leading-7" style={{ color: 'rgba(232, 238, 247, 0.72)' }}>
            Freelance and product work focused on quality motion, responsive architecture, and maintainable implementations.
          </p>
          <div className="mt-6 hero-links">
            <Link href="/about" className="btn-ghost project-ghost">
              About process
            </Link>
            <a href="mailto:msdperera99@gmail.com" className="btn-solid">
              Contact me <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </article>
      </section>
    </main>
  );
}
