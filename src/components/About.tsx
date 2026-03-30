import React from 'react';

const About: React.FC = () => (
  <section id="about" className="section-padding">
    <div className="container">
      <div className="row g-4">
        <div className="col-lg-7 scroll-reveal">
          <div className="bento-card premium-glass hover-premium">
            <div className="card-content">
              <h2 className="section-heading">About Me</h2>
              <p className="text-secondary-light">
                Motivated and detail-oriented Software Engineering student. I bridge the gap between design and engineering, combining a strong foundation in <span className="highlight">Algorithms</span> with a passion for <span className="highlight">modern web technologies</span>.
              </p>
              <a href="/DimalshaPerera_Resume.pdf" className="link-arrow" download>
                Download Resume <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-5 scroll-reveal delay-1">
          <div className="bento-card premium-glass dark-bg hover-premium">
            <div className="card-content">
              <h3 className="card-title mb-4">
                <i className="fas fa-graduation-cap text-gradient"></i> Education
              </h3>
              <div className="timeline-modern compact">
                <div className="timeline-line"></div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-date">2026</div>
                  <div className="timeline-content">
                    <h4>BSc (Hons) Computer Science</h4>
                    <p className="text-secondary-light small mb-0">University of Bedfordshire (UK)</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-date">2025</div>
                  <div className="timeline-content">
                    <h4>Higher Diploma in IT</h4>
                    <p className="text-secondary-light small mb-0">SLIIT City Uni</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-date">2019</div>
                  <div className="timeline-content">
                    <h4>G.C.E Advanced Level</h4>
                    <p className="text-secondary-light small mb-0">Maris Stella College</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
