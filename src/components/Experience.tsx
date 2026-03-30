import React from 'react';

const Experience: React.FC = () => (
  <section id="experience" className="section-padding">
    <div className="container">
      <h2 className="section-heading mb-5 scroll-reveal">Experience</h2>
      <div className="timeline-modern scroll-reveal delay-1">
        <div className="timeline-line"></div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">Dec 2025 - Present</div>
          <div className="timeline-content glass-hover">
            <div className="timeline-header">
              <h3>Development Intern</h3>
              <span className="company text-gradient">OCTICK (PVT) LTD</span>
            </div>
            <p className="timeline-desc">Full-stack engineering (React/Next.js, Node.js), API development, and MongoDB optimization in an agile remote environment.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
