// src/components/Carousel.tsx
"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

type Slide = {
  img: string;
  title: string;
  subtitle: string;
};

const slides: Slide[] = [
  {
    img: "/wall_1.png",
    title: "NADSEC",
    subtitle: "WE DELIVER SKILL\nTHROUGH THE WILL",
  },
  {
    img: "/wall_1.png",
    title: "SECURITY",
    subtitle: "24/7 RELIABILITY\nNATIONWIDE",
  },
  {
    img: "/wall_1.png",
    title: "OPERATIONS",
    subtitle: "PROFESSIONAL • CERTIFIED\nTRUSTED TEAMS",
  },
];

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const handleScroll = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  // (Optional) autoplay
  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);

  const goTo = (i: number) => setIndex((i + slides.length) % slides.length);

  const s = slides[index];

  return (
    <section className="relative overflow-hidden w-full bg-white">
      {/* Gray side gutters (desktop only) */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-60 bg-gray-500 hidden md:block" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-60 bg-gray-500 hidden md:block" />

      {/* Slide content */}
      <div className="relative mx-auto max-w-6xl px-4 md:px-8">
        <div className="flex items-center justify-between gap-6 md:gap-10 h-[360px] md:h-[480px]">
          {/* Left: Image */}
          <div className="flex-1 flex items-center justify-start">
            <div className="relative w-[320px] h-[320px] md:w-[480px] md:h-[480px]">
              <Image
                src={s.img}
                alt={s.title}
                fill
                priority
                className="object-contain"
                sizes="(max-width: 768px) 320px, 480px"
              />
            </div>
          </div>

          {/* Center: vertical line + mouse icon */}
          <div
            onClick={handleScroll}
            className="hidden md:flex flex-col items-center justify-center"
          >
            <div className="h-24 w-[2px] bg-gray-800 rounded-full" />
            {/* Mouse icon */}
            <div
              className="mt-3 h-8 w-5 rounded-full border border-gray-800 flex items-start justify-center cursor-pointer
             active:translate-y-[2px] transition-transform duration-150"
            >
              {/* Middle dot */}
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gray-800 animate-scrollDot" />
            </div>
          </div>

          {/* Right: Title + subtitle */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-3xl text-neutral-900 md:text-5xl font-extrabold tracking-wide">
              NADSEC
            </h2>
            <p className="mt-3 text-sm md:text-base tracking-wider font-semibold text-gray-800 whitespace-pre-line">
              {s.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2.5 w-2.5 rounded-full transition
              ${i === index ? "bg-gray-900" : "bg-gray-300"}`}
          />
        ))}
      </div>
    </section>
  );
}
