"use client";

import React, { useRef, useState } from 'react';

const featuredItems = [
  {
    video: '/Featured/SPHYNX BLACK.mp4',
    poster: '/sphynxblack.png',
    title: 'SPHYNX BLACK',
    badge: 'Luxury MERN',
    link: 'https://sphinx-black.vercel.app',
  },
  {
    video: '/Featured/SOUL SYNC.mp4',
    poster: '/soulsync.jpeg',
    title: 'Soul Sync',
    badge: 'Vite Event App',
    link: 'https://soulsyncevents.com.au/',
  },
  {
    video: '/Featured/SPHYNX-FLICKS.mp4',
    poster: '/Flux_Dev_I_need_a_premium_logo_for_my_movie_site_SPHNXFllicks__3.jpg',
    title: 'SphynxFlicks',
    badge: 'TMDB React',
    link: 'https://sphynx-flicks.pages.dev/',
  },
  {
    image: '/hardware.jpg',
    title: 'Hardware Hub',
    badge: 'PHP Inventory',
    link: 'https://anuradhahardware.wuaze.com/',
  },
];

const Featured: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  // Drag logic for 3D carousel (rotation can be added for advanced effect)
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX);
    if (carouselRef.current) {
      carouselRef.current.style.cursor = 'grabbing';
      carouselRef.current.style.animationPlayState = 'paused';
    }
  };
  const handleMouseUp = () => {
    setIsDragging(false);
    if (carouselRef.current) {
      carouselRef.current.style.cursor = 'grab';
      carouselRef.current.style.animationPlayState = 'running';
    }
  };
  // Touch events for mobile
  const handleTouchStart = () => {
    setIsDragging(true);
    if (carouselRef.current) {
      carouselRef.current.style.animationPlayState = 'paused';
    }
  };
  const handleTouchEnd = () => {
    setIsDragging(false);
    if (carouselRef.current) {
      carouselRef.current.style.animationPlayState = 'running';
    }
  };

  return (
    <section id="featured" className="section-padding overflow-hidden">
      <div className="container text-center mb-5">
        <h2 className="section-heading text-gradient scroll-reveal">Featured Masterpieces</h2>
        <p className="text-secondary-light scroll-reveal">Drag to explore • Auto-rotates</p>
      </div>
      <div
        className="carousel-container scroll-reveal delay-1"
        ref={carouselRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        style={{ cursor: 'grab' }}
      >
        <div className="carousel-3d" id="carousel3D">
          {featuredItems.map((item, idx) => (
            <div
              className="carousel-item-3d"
              key={item.title}
              style={{
                transform: `rotateY(${idx * 90}deg) translateZ(450px)`
              }}
              onClick={() => window.open(item.link, '_blank')}
            >
              <div className="carousel-card-inner premium-glass">
                {item.video ? (
                  <video
                    className="card-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster={item.poster}
                  >
                    <source src={item.video} type="video/mp4" />
                  </video>
                ) : (
                  <img src={item.image} alt={item.title} className="card-image-default" />
                )}
                <div className="card-overlay-3d">
                  <h4>{item.title}</h4>
                  <span className="badge-premium">{item.badge}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;