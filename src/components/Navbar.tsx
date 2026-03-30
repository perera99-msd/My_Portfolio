"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top${scrolled ? ' scrolled' : ''}`}>
      <div className="container">
        <Link className="navbar-brand" href="#">
          <span className="brand-bracket">&lt;</span>Dimalsha<span className="brand-slash">/</span>Perera<span className="brand-bracket">&gt;</span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <i className="fas fa-bars text-white"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" href="#about">About</Link></li>
            <li className="nav-item"><Link className="nav-link" href="#experience">History</Link></li>
            <li className="nav-item"><Link className="nav-link" href="#skills">Stack</Link></li>
            <li className="nav-item"><Link className="nav-link" href="#featured">Featured</Link></li>
            <li className="nav-item"><Link className="nav-link" href="#projects">Work</Link></li>
            <li className="nav-item"><Link className="nav-link" href="#certifications">Certs</Link></li>
            <li className="nav-item"><Link className="nav-link btn-cta" href="#contact">Let's Talk</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;