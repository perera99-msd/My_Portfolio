import React from 'react';

const Hero: React.FC = () => (
  <section className="hero" id="home">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 hero-text-col scroll-reveal">
          <div className="hero-badge">Available for Work <span className="pulse"></span></div>
          <h1 className="hero-title">Engineering <br /> <span className="text-gradient">Digital Reality</span></h1>
          <p className="hero-subtitle">I'm a Full Stack Developer building accessible, pixel-perfect, and performant web experiences.</p>
          <div className="hero-actions">
            <a href="#featured" className="btn-primary-glow">View Masterpieces</a>
            <div className="social-hero">
              <a href="https://github.com/perera99-msd" target="_blank"><i className="fab fa-github"></i></a>
              <a href="https://www.linkedin.com/in/msdimalsha-perera" target="_blank"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 d-none d-lg-block hero-visual-col scroll-reveal delay-1">
          <div className="hero-stage">
            <div className="float-card card-react premium-glass" data-tilt>
              <div className="icon-circle"><i className="fab fa-react"></i></div>
              <div className="card-text">
                <span>React</span>
                <small>Frontend</small>
              </div>
            </div>
            <div className="code-block premium-glass" data-tilt>
              <div className="glow-effect"></div>
              <div className="dot-row"><span className="dot red"></span><span className="dot yellow"></span><span className="dot green"></span></div>
              <div className="code-content">
                <code><span className="c-purple">const</span> <span className="c-blue">developer</span> = {'{'}</code>
                <code>&nbsp;&nbsp;name: <span className="c-green">"Dimalsha"</span>,</code>
                <code>&nbsp;&nbsp;stack: [<span className="c-orange">"Next.js"</span>, <span className="c-orange">"MERN"</span>],</code>
                <code>&nbsp;&nbsp;status: <span className="c-blue">"Building"</span></code>
                <code>{'}'};</code>
              </div>
            </div>
            <div className="float-card card-backend premium-glass" data-tilt>
              <div className="icon-circle"><i className="fas fa-server"></i></div>
              <div className="card-text">
                <span>Backend</span>
                <small>Robust APIs</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
