"use client";

import { useEffect } from "react";

export default function AnimationProvider() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('[data-reveal]');

    if (!revealElements.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: '60px 0px -10px 0px' }
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}