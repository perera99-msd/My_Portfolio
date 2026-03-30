"use client";

import { useEffect } from "react";

export default function AnimationProvider() {
  useEffect(() => {
    // 1. Scroll Reveal Logic
    const revealElements = document.querySelectorAll(".scroll-reveal");
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.15 }
    );
    revealElements.forEach((el) => revealObserver.observe(el));

    // 2. Spotlight Logic
    const spotlightCards = document.querySelectorAll(
      ".project-card, .cert-card, .skill-card, .bento-card"
    );
    spotlightCards.forEach((card) => card.classList.add("spotlight"));

    const handleMouseMove = (e: MouseEvent) => {
      spotlightCards.forEach((card) => {
        const htmlCard = card as HTMLElement;
        const rect = htmlCard.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        htmlCard.style.setProperty("--mouse-x", `${x}px`);
        htmlCard.style.setProperty("--mouse-y", `${y}px`);
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    // Cleanup
    return () => {
      revealObserver.disconnect();
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return null;
}