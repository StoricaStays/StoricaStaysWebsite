'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

interface HeroSlide {
  image: string;
  alt: string;
}

interface HeroSliderProps {
  slides: HeroSlide[];
  eyebrow?: string;
  title: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  badge?: string;
  compact?: boolean;
}

export default function HeroSlider({
  slides,
  eyebrow,
  title,
  description,
  primaryLabel = "Book A Room",
  primaryHref = "/book",
  secondaryLabel = "View Rooms",
  secondaryHref = "#rooms",
  badge,
  compact = false,
}: HeroSliderProps) {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAuto = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 6500);
  }, [slides.length]);

  const stopAuto = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    startAuto();
    return stopAuto;
  }, [startAuto, stopAuto]);

  const go = (index: number) => {
    setCurrent(index);
    startAuto();
  };

  return (
    <section
      className={`hero ${compact ? "hero-compact" : ""}`}
      onMouseEnter={stopAuto}
      onMouseLeave={startAuto}
      aria-roledescription="carousel"
    >
      {slides.map((slide, index) => (
        <div
          key={slide.image}
          className={`position-absolute top-0 start-0 w-100 h-100 ${index === current ? "" : "d-none"}`}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="hero-media"
            style={{ opacity: index === current ? 1 : 0, transition: "opacity 1.2s ease" }}
          />
        </div>
      ))}
      <div className="hero-overlay"></div>

      <div className="container hero-content">
        <div data-reveal>
          {badge && <span className="hero-badge">{badge}</span>}
          {eyebrow && <div className="hero-eyebrow">{eyebrow}</div>}
          <h1>{title}</h1>
          {description && <p>{description}</p>}
          <div className="d-flex flex-wrap gap-3">
            <a href={primaryHref} className="btn btn-brass btn-lg">
              {primaryLabel}
            </a>
            <a href={secondaryHref} className="btn btn-ghost-light btn-lg">
              {secondaryLabel}
            </a>
          </div>
        </div>
      </div>

      {slides.length > 1 && (
        <div className="position-absolute bottom-0 start-0 w-100 z-2" style={{ zIndex: 3 }}>
          <div className="container d-flex align-items-center justify-content-between pb-4">
            <div className="d-flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className="border-0 p-0"
                  style={{
                    width: index === current ? "34px" : "22px",
                    height: "3px",
                    background: index === current ? "var(--brass)" : "rgba(250,246,239,0.4)",
                    transition: "all 0.4s ease",
                  }}
                  onClick={() => go(index)}
                  aria-label={`Go to slide ${index + 1}`}
                ></button>
              ))}
            </div>
            <div className="text-ivory" style={{ fontSize: "0.78rem", letterSpacing: "0.25em" }}>
              0{current + 1} <span className="mx-1" style={{ color: "rgba(250,246,239,0.5)" }}>/</span> 0{slides.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}