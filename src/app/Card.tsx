'use client';
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from 'next/image'; // Recommended for Next.js

// --- 1. Data and Types ---

type CardItem = {
    icon: string;
    subtitle: string;
    title: string;
};

const cardItems: CardItem[] = [
    {
        icon: '/icon_1.svg',
        subtitle: "guards in guard's nature",
        title: 'Committed, Well Disciplined with High levels of Integrity'
    },
    {
        icon: '/icon_2.svg',
        subtitle: 'guards persona',
        title: 'Developed through frequent soft skills development initiatives'
    },
    {
        icon: '/icon_3.svg',
        subtitle: 'technical competency',
        title: 'periodic emergency response training viz fire, first aid, physical defensive techniques'
    },
];

// --- 2. Card Component ---

// Note: 'any' is used for Framer Motion's motion values (scale, opacity) for simplicity.
const Card: React.FC<CardItem & { scale: any; opacity: any }> = ({ icon, subtitle, title, scale, opacity }) => {
    return (
        <motion.div
            style={{ scale, opacity }}
            // absolute is key for stacking and positioning within the sticky container
            className="absolute flex flex-col w-[90%] max-w-[700px] p-5 text-white text-center bg-gradient-to-b from-[#08084F] to-[#646464] border border-solid rounded-2xl justify-center items-center shadow-2xl"
        >
            <motion.div
                style={{ perspective: 800 }}
                className="mb-4 flex justify-center items-center w-28 h-28"
            >
                <motion.div
                    className="flex justify-center items-center w-full h-full bg-white/10 backdrop-blur-md rounded-full"
                    initial={{ rotateY: 0 }}
                    // We keep whileInView here for the individual card's icon spin when it enters view
                    whileInView={{ rotateY: 360 }}
                    transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    {/* Use Next.js Image component for optimization */}
                    <Image
                        src={icon}
                        alt="icon"
                        width={80}
                        height={80}
                        className="object-contain"
                        // Error handler for local development if images aren't found
                        onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://placehold.co/80x80/ffffff/000000?text=Icon'; }}
                    />
                </motion.div>
            </motion.div>
            <h3 className="text-lg capitalize font-semibold mb-4">
                {subtitle}
            </h3>
            <h1 className="text-xl font-medium">{title}</h1>
        </motion.div>
    );
};

// --- 3. Main Display Component ---

const CardDisplay: React.FC = () => {
    const targetRef = useRef(null);

    // FIX 1: The useScroll offset is set to 'start start' and 'end end'
    // This ensures the 0 to 1 progress tracks the entire scroll distance of the h-[300vh] container.
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"],
    });

    // --- Animation Logic (Sequential Fade/Scale) ---

    // Card 1: 0% to 33%
    const scale1 = useTransform(scrollYProgress, [0, 0.165, 0.33], [0.8, 1, 0.8]);
    const opacity1 = useTransform(scrollYProgress, [0, 0.165, 0.33], [0, 1, 0]);

    // Card 2: 33% to 66%
    const scale2 = useTransform(scrollYProgress, [0.33, 0.495, 0.66], [0.8, 1, 0.8]);
    const opacity2 = useTransform(scrollYProgress, [0.33, 0.495, 0.66], [0, 1, 0]);

    // Card 3: 66% to 100% (stays visible at the end)
    const scale3 = useTransform(scrollYProgress, [0.66, 0.825, 1], [0.8, 1, 1]);
    const opacity3 = useTransform(scrollYProgress, [0.66, 0.825, 1], [0, 1, 1]);

    const cards = [
        { item: cardItems[0], scale: scale1, opacity: opacity1 },
        { item: cardItems[1], scale: scale2, opacity: opacity2 },
        { item: cardItems[2], scale: scale3, opacity: opacity3 },
    ];

    return (
        <section className="bg-gray-100 py-12">
            
            {/* The outer container: Creates the scroll distance (3x screen height) */}
            <div ref={targetRef} className="relative h-[300vh]">

                {/* FIX 2: Sticky container adjusted.
                  - top-0: Sticks it to the top of the viewport.
                  - h-[500px]: Gives it a fixed height that fits the card.
                  - pt-8: Pushes the card down from the 'Core Values' heading, removing the large gap.
                  */}
                <div className="sticky top-16 h-[500px] pt-8 flex justify-center overflow-hidden">
                  <h1 className="uppercase --font-poppins absolute top-[-5] mb-6 text-center font-bold text-3xl mb-12 text-black">Core Values</h1>
                    {cards.map(({ item, scale, opacity }, idx) => (
                        <Card key={idx} {...item} scale={scale} opacity={opacity} />
                    ))}
                </div>
            </div>

            {/* Optional: Add a placeholder div below the scroll engine to allow
               the final card to remain in view before scrolling to other content. */}
             <div className="h-[50vh]"></div>
        </section>
    );
}

export default CardDisplay;