"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Slide = {
  img: string;
  title: string;
  subtitle: string;
};

const slides: Slide[] = [
  {
    img: "/wall_1.png",
    title: "NADSEC",
    subtitle: "Delivering peace of mind through disciplined expertise.",
  },
  {
    img: "/wall_1.png",
    title: "Security",
    subtitle: "Comprehensive protection for corporate, residential, and event needs.",
  },
  {
    img: "/wall_1.png",
    title: "Operations",
    subtitle: "Certified professionals safeguarding what matters most to you.",
  },
];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(
      () => setIndex((current) => (current + 1) % slides.length),
      6000
    );

    return () => window.clearInterval(timer);
  }, []);

  const goTo = (target: number) => setIndex((target + slides.length) % slides.length);
  const activeSlide = slides[index];

  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden border-b border-surfaceMuted/40 bg-gradient-to-br from-surface to-surfaceMuted"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_55%)]" />
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 px-6 pb-16 pt-32 md:flex-row md:items-start md:gap-16">
        <div className="flex-1 space-y-6 text-center md:text-left">
          <span className="inline-flex items-center rounded-full border border-accent/40 bg-accent/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Security Excellence
          </span>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            {activeSlide.title}
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-muted md:text-lg">
            {activeSlide.subtitle}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-surface transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Speak with us
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Learn more
            </a>
          </div>
        </div>
        <div className="flex-1">
          <div className="relative mx-auto h-[320px] w-[320px] overflow-hidden rounded-[2.5rem] border border-foreground/10 bg-surface shadow-elevated sm:h-[360px] sm:w-[360px]">
            <Image
              src={activeSlide.img}
              alt={activeSlide.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 320px, 360px"
              priority
            />
            <div className="absolute inset-x-6 bottom-6 rounded-2xl bg-surface/80 p-4 text-center shadow-lg backdrop-blur">
              <p className="text-sm font-medium text-muted">{activeSlide.subtitle}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-3">
        {slides.map((slide, slideIndex) => (
          <button
            key={slide.title}
            type="button"
            aria-label={`Go to slide ${slideIndex + 1}`}
            onClick={() => goTo(slideIndex)}
            className={`h-2.5 w-8 rounded-full transition ${
              slideIndex === index ? "bg-foreground/80" : "bg-foreground/20 hover:bg-foreground/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Carousel;
