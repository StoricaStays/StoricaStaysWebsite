'use client';

import { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "./ui/Button";

interface Slide {
  image: string;
  alt: string;
}

const DEFAULT_SLIDES: Slide[] = [
  { image: "/img/hero-slider/CKC04015-HDR.jpg", alt: "Storica Stays rooftop restaurant with fort views" },
  { image: "/img/hero-slider/CKC03767.jpg", alt: "Heritage architecture at Storica Stays" },
  { image: "/img/hero-slider/CKC03841-HDR.jpg", alt: "Rooftop restaurant seating at Storica Stays" },
];

interface HeroCarouselProps {
  readonly slides?: Slide[];
  readonly eyebrow?: string;
  readonly heading?: string;
  readonly primaryCta?: { label: string; href: string };
  readonly secondaryCta?: { label: string; href: string };
}

export default function HeroCarousel({
  slides = DEFAULT_SLIDES,
  eyebrow = "Jodhpur · Udaipur, Rajasthan",
  heading = "Heritage stays in the Blue City, rooftop views over the fort",
  primaryCta = { label: "Our Rooms", href: "/#Rooms" },
  secondaryCta = { label: "Book A Room", href: "/book" },
}: HeroCarouselProps) {
  const [index, setIndex] = useState(0);

  const goTo = useCallback((i: number) => {
    setIndex((i + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6000);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <section className="relative h-[85vh] min-h-[560px] max-h-[820px] w-full overflow-hidden bg-ink-900">
      {slides.map((slide, i) => (
        <img
          key={slide.image}
          src={slide.image}
          alt={slide.alt}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-ink-900/20 to-ink-900/10" />

      <div className="relative h-full flex items-end">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12 pb-16 sm:pb-20">
          <span className="inline-flex items-center gap-2 font-sans text-xs font-semibold tracking-[0.2em] uppercase text-primary-200">
            <span className="h-px w-6 bg-current" />
            {eyebrow}
          </span>
          <h1 className="mt-4 max-w-2xl font-display text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.05] text-white">
            {heading}
          </h1>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={primaryCta.href} size="lg">{primaryCta.label}</Button>
            <Button href={secondaryCta.href} variant="outline" size="lg">{secondaryCta.label}</Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 sm:right-12 flex items-center gap-3">
        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => goTo(index - 1)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white hover:bg-white hover:text-ink-900 transition-colors"
        >
          <ChevronLeft size={18} />
        </button>
        <div className="flex gap-2">
          {slides.map((slide, i) => (
            <button
              key={slide.image}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goTo(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-6 bg-white" : "w-1.5 bg-white/40"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="Next slide"
          onClick={() => goTo(index + 1)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white hover:bg-white hover:text-ink-900 transition-colors"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
}
