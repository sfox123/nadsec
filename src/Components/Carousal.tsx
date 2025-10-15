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
        img: "/wall_1.png", // Assuming this is your main feature image, not the background pattern
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

    useEffect(() => {
        const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5000);
        return () => clearInterval(t);
    }, []);

    const goTo = (i: number) => setIndex((i + slides.length) % slides.length);
    const s = slides[index];

    return (
        // Main Section with Clip-Path, Background Pattern, and Rounded Corners
        <section
            className="relative overflow-hidden w-full 
                       bg-opacity-0 text-white p-4 md:p-8 rounded-3xl carousel-clip-path" // Added text-white, padding
            style={{
                backgroundImage: 'url(/wall_2.png)', // Your pattern image
                backgroundRepeat: 'repeat',
                backgroundSize: 'auto', // Ensures the pattern repeats
                backgroundColor: '#2D3748', // Fallback background color if image fails or is transparent
            }}
        >
            {/* Gray side gutters (desktop only) - adjusted for new background, might need removal */}
            {/* These might now be redundant or need adjustment due to the full background image */ }
            <div className="pointer-events-none absolute inset-y-0 left-0 w-60 hidden md:block" style={{background: 'linear-gradient(to right, rgba(45,55,72,0.8), transparent)'}} />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-60 hidden md:block" style={{background: 'linear-gradient(to left, rgba(45,55,72,0.8), transparent)'}} />


            {/* Slide content - Adjusted margin/padding for mobile, text color is now white */}
            <div className="relative mx-auto max-w-6xl px-4 md:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 h-[550px] md:h-[480px] py-8">
                    
                    {/* Left: Image */}
                    <div className="flex-1 flex items-center justify-center">
                        <div className="relative w-full h-[300px] md:w-[480px] md:h-[480px] max-w-sm flex-shrink-0">
                            <Image
                                src={s.img}
                                alt={s.title}
                                fill
                                priority
                                className="object-contain"
                                sizes="(max-width: 768px) 100vw, 480px" 
                            />
                        </div>
                    </div>

                    {/* Center: vertical line + mouse icon - Hidden on mobile, adjusted colors */}
                    <div
                        onClick={handleScroll}
                        className="hidden md:flex flex-col items-center justify-center"
                    >
                        <div className="h-24 w-[2px] bg-gray-200 rounded-full" /> {/* Changed to light gray */}
                        <div
                            className="mt-3 h-8 w-5 rounded-full border border-gray-200 flex items-start justify-center cursor-pointer
                            active:translate-y-[2px] transition-transform duration-150"
                        >
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gray-200 animate-scrollDot" />
                        </div>
                    </div>

                    {/* Right: Title + subtitle - Text color set to white via parent */}
                    <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left mt-6 md:mt-0">
                        <h2 className="text-3xl md:text-5xl font-extrabold tracking-wide">
                            {s.title}
                        </h2>
                        <p className="mt-3 text-sm md:text-base tracking-wider font-semibold whitespace-pre-line">
                            {s.subtitle}
                        </p>
                    </div>
                </div>
            </div>

            {/* Dots - adjusted colors */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-3">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goTo(i)}
                        aria-label={`Go to slide ${i + 1}`}
                        className={`h-2.5 w-2.5 rounded-full transition
                          ${i === index ? "bg-gray-200" : "bg-gray-600"}`}
                    />
                ))}
            </div>
        </section>
    );
}