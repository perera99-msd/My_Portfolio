import Hero from '../components/home/Hero';
import Stats from '../components/home/Stats';
import Expertise from '../components/home/Expertise';
import Projects from '../components/home/Projects';
import Marquee from '../components/home/Marquee';
import CTA from '../components/home/CTA';

export default function Home() {
  return (
    <main className="relative isolate w-full overflow-hidden pb-24">
      <Hero />
      <Stats />
      <Expertise />
      <Projects />
      <Marquee />
      <CTA />
    </main>
  );
}