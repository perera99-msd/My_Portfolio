import React from 'react';

const projects = [
  {
    images: [
      '/Project Images/SPHYNX-BLACK/1.png',
      '/Project Images/SPHYNX-BLACK/2.png',
      '/Project Images/SPHYNX-BLACK/3.png',
    ],
    title: 'SPHYNX BLACK',
    desc: 'High-fidelity luxury e-commerce ecosystem. Cinematic UX with full-stack MERN architecture.',
    tags: ['React', 'Redux', 'MongoDB'],
    live: 'https://sphinx-black.vercel.app',
    github: 'https://github.com/perera99-msd/SPHINX-BLACK',
  },
  {
    images: [
      '/Project Images/SOUL-SYNC/Clean Minimal Launching Soon Instagram Post.png',
      '/Project Images/SOUL-SYNC/2.png',
      '/Project Images/SOUL-SYNC/3.png',
    ],
    title: 'Soul Sync Events',
    desc: 'Event management platform for Australian client. Built for high performance and seamless user experience.',
    tags: ['React', 'Vite', 'Responsive'],
    live: 'https://soulsyncevents.com.au/',
    github: 'https://github.com/perera99-msd/Soul-Sync',
  },
  {
    images: [
      '/Project Images/SPHYNX-FLICKS/Orange Brown and Black Modern Yoga Website Launch Instagram Post.png',
      '/Project Images/SPHYNX-FLICKS/2.png',
      '/Project Images/SPHYNX-FLICKS/3.png',
    ],
    title: 'SphynxFlicks',
    desc: 'Premium movie discovery app integrating TMDb API with smooth animations and dark mode.',
    tags: ['React', 'API', 'Framer Motion'],
    live: 'https://sphynx-flicks.pages.dev/',
    github: 'https://github.com/perera99-msd/Sphynx-Flicks',
  },
  {
    images: ['/hardware.jpg', '/hardware.jpg', '/hardware.jpg'],
    title: 'Anuradha Hardware',
    desc: 'Full-stack e-commerce solution including a custom admin panel for inventory management.',
    tags: ['PHP', 'MySQL', 'HTML/CSS'],
    live: 'https://anuradhahardware.wuaze.com/',
    github: 'https://github.com/perera99-msd/Anuradha-Hardware',
  },
];

const Projects: React.FC = () => (
  <section id="projects" className="section-padding">
    <div className="container">
      <h2 className="section-heading mb-5 scroll-reveal">Selected Works</h2>
      <div className="row g-4">
        {projects.map((project, idx) => (
          <div className={`col-md-6 col-lg-4 scroll-reveal${idx > 0 ? ` delay-${idx}` : ''}`} key={project.title}>
            <div className="project-card">
              <div className="project-slider">
                {project.images.map((img, i) => (
                  <img src={img} alt={`Img ${i + 1}`} key={i} />
                ))}
              </div>
              <div className="project-overlay">
                <div className="project-info">
                  <h4>{project.title}</h4>
                  <p>{project.desc}</p>
                  <div className="tags">
                    {project.tags.map(tag => <span key={tag}>{tag}</span>)}
                  </div>
                  <div className="project-links">
                    <a href={project.live} target="_blank" className="btn-project-link" title="Live Demo"><i className="fas fa-external-link-alt"></i></a>
                    <a href={project.github} target="_blank" className="btn-project-link secondary" title="GitHub"><i className="fab fa-github"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
