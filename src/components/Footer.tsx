import React from 'react';

const Footer: React.FC = () => (
  <footer>
    <div className="container text-center">
      <div className="social-footer mb-4">
        <a href="https://github.com/perera99-msd" target="_blank" className="footer-icon"><i className="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/msdimalsha-perera" target="_blank" className="footer-icon"><i className="fab fa-linkedin-in"></i></a>
      </div>
      <p className="text-white mb-1">© 2026 Dimalsha Perera. All Rights Reserved.</p>
      <p className="text-secondary-light small" style={{ fontSize: '0.8rem' }}>Designed & Developed in Sri Lanka.</p>
    </div>
  </footer>
);

export default Footer;
