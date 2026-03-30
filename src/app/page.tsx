import BackgroundSystem from '../components/BackgroundSystem';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TechMarquee from '../components/TechMarquee';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Featured from '../components/Featured';
import Projects from '../components/Projects';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <BackgroundSystem />
      <Navbar />
      <main>
        <Hero />
        <TechMarquee />
        <About />
        <Experience />
        <Skills />
        <Featured />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
