import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, BookOpen, Clock3, Sparkles } from 'lucide-react';

import BlogBackdrop from '../../components/BlogBackdrop';
import { blogPosts } from '../../lib/portfolio-data';

export const metadata = {
  title: 'Blog | Dimalsha Perera',
  description: 'Build notes, design thinking, and portfolio experiments.',
};

export default function BlogPage() {
  const featuredPost = blogPosts[0];
  const secondaryPosts = blogPosts.slice(1);

  return (
    <main className="page-shell relative isolate">
      <BlogBackdrop />

      <section className="grid gap-6 lg:grid-cols-12" data-reveal>
        <article className="glass-panel blog-panel lg:col-span-7 p-6 lg:p-8">
          <span className="section-kicker text-[#e2d5ff]">Blog</span>
          <h1 className="display-title" style={{ maxWidth: '10ch', color: '#f7f2ff' }}>
            Build notes, systems, and design thinking.
          </h1>
          <p className="section-copy mt-5 text-base lg:text-lg" style={{ color: 'rgba(239, 230, 255, 0.75)' }}>
            Real writeups from internship and freelance execution, including performance tradeoffs, component architecture, and practical glass UI decisions.
          </p>
          <div className="mt-7 hero-links">
            <Link href="/projects" className="btn-ghost blog-ghost">
              Browse work
            </Link>
            <a href="https://www.linkedin.com/in/msdimalsha-perera" target="_blank" rel="noreferrer" className="btn-ghost blog-ghost">
              LinkedIn
            </a>
            <a href="mailto:msdperera99@gmail.com" className="btn-solid">
              Subscribe by email <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <article className="mt-8 glass-panel-soft blog-panel-soft p-5 lg:p-6">
            <span className="pill blog-chip">Featured article</span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#f7f2ff]">{featuredPost.title}</h2>
            <p className="mt-4 text-sm leading-7" style={{ color: 'rgba(239, 230, 255, 0.74)' }}>{featuredPost.summary}</p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs uppercase tracking-[0.24em]" style={{ color: 'rgba(223, 209, 247, 0.68)' }}>
              <span>{featuredPost.category}</span>
              <span>{featuredPost.date}</span>
              <span>{featuredPost.readTime}</span>
            </div>
          </article>
        </article>

        <article className="glass-panel blog-panel lg:col-span-5 p-5 lg:p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="glass-panel-soft blog-panel-soft p-3 sm:col-span-2">
              <div className="relative h-56 overflow-hidden rounded-2xl lg:h-64">
                <Image
                  src="/blog/bda8fecca8c21f14bb624a0dad62b25b-removebg-preview.png"
                  alt="Blog visual layer"
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 1024px) 100vw, 32vw"
                  priority
                />
              </div>
            </div>
            <div className="glass-panel-soft blog-panel-soft p-4">
              <BookOpen className="h-5 w-5 text-[#d6c2ff]" />
              <h3 className="mt-3 text-base font-semibold text-[#f7f2ff]">Writing style</h3>
              <p className="mt-2 text-sm leading-6" style={{ color: 'rgba(239, 230, 255, 0.72)' }}>
                Concise notes, actionable details, and direct implementation takeaways.
              </p>
            </div>
            <div className="glass-panel-soft blog-panel-soft p-4">
              <Clock3 className="h-5 w-5 text-[#d6c2ff]" />
              <h3 className="mt-3 text-base font-semibold text-[#f7f2ff]">Reading pace</h3>
              <p className="mt-2 text-sm leading-6" style={{ color: 'rgba(239, 230, 255, 0.72)' }}>
                Short, skimmable entries designed for practical reference.
              </p>
            </div>
            <div className="glass-panel-soft blog-panel-soft p-3 sm:col-span-2">
              <div className="relative h-40 overflow-hidden rounded-2xl lg:h-44">
                <Image
                  src="/blog/fdd8880c4fb8a5defe10c4906c35508a-removebg-preview.png"
                  alt="Blog secondary visual layer"
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 1024px) 100vw, 32vw"
                />
              </div>
            </div>
          </div>
        </article>
      </section>

      <section className="section-shell" data-reveal>
        <div className="section-bar">
          <span className="section-kicker text-[#e2d5ff]">Latest articles</span>
          <h2 className="section-title text-[#f7f2ff]">Current notes from the build process.</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {secondaryPosts.map((post) => (
            <article key={post.title} className="glass-panel blog-panel p-5">
              <span className="pill blog-chip">{post.category}</span>
              <h3 className="mt-4 text-lg font-semibold leading-tight text-[#f7f2ff]">{post.title}</h3>
              <p className="mt-3 text-sm leading-6" style={{ color: 'rgba(239, 230, 255, 0.74)' }}>{post.summary}</p>
              <div className="mt-5 flex items-center justify-between text-xs uppercase tracking-[0.2em]" style={{ color: 'rgba(223, 209, 247, 0.66)' }}>
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell" data-reveal>
        <div className="glass-panel blog-panel cta-band">
          <div>
            <span className="section-kicker text-[#e2d5ff]">Want updates?</span>
            <h2 className="section-title" style={{ marginTop: '0.8rem', color: '#f7f2ff' }}>
              Need a technical writeup for your product or portfolio launch?
            </h2>
            <p className="section-copy mt-4" style={{ color: 'rgba(239, 230, 255, 0.74)' }}>
              I can document your build decisions and turn implementation details into clear, professional case studies.
            </p>
          </div>
          <div className="hero-links">
            <a href="mailto:msdperera99@gmail.com" className="btn-solid">
              Email me <ArrowUpRight className="h-4 w-4" />
            </a>
            <Link href="/about" className="btn-ghost blog-ghost">
              About me
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
