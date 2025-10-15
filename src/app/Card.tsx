'use client';
import { motion, useScroll, useTransform } from "framer-motion";
import type { MotionValue } from "framer-motion";
import { useRef } from "react";
import Image from 'next/image';

// --- 1. Data and Types ---

type CardItem = {
    icon: string;
    subtitle: string;
    title: string;
};

// Update Card props to include rotateY
type CardProps = CardItem & { scale: MotionValue<number>; opacity: MotionValue<number>; rotateY: MotionValue<number> };

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

const Card: React.FC<CardProps> = ({ icon, subtitle, title, scale, opacity, rotateY }) => {
    return (
        <motion.div
            style={{ scale, opacity }}
            className="absolute flex flex-col w-[90%] max-w-[700px] p-5 text-white text-center bg-gradient-to-b from-[#08084F] to-[#646464] border border-solid rounded-2xl justify-center items-center shadow-2xl"
        >
            <motion.div
                style={{ perspective: 800 }}
                className="mb-4 flex justify-center items-center w-28 h-28"
            >
                <motion.div
                    // Apply the scroll-driven rotation here
                    style={{ rotateY }}
                    className="flex justify-center items-center w-full h-full bg-white/10 backdrop-blur-md rounded-full"
                >
                    <Image
                        src={icon}
                        alt="icon"
                        width={80}
                        height={80}
                        className="object-contain"
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

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"],
    });

    // --- Animation Logic (Sequential Fade/Scale) ---
    // Card 1: 0% to 33%
    const scale1 = useTransform(scrollYProgress, [0, 0.165, 0.33], [0.8, 1, 0.8]);
    const opacity1 = useTransform(scrollYProgress, [0, 0.165, 0.33], [0, 1, 0]);
    const rotateY1 = useTransform(scrollYProgress, [0, 0.33, 0.34], [0, 360, 360]); // New rotation logic

    // Card 2: 33% to 66%
    const scale2 = useTransform(scrollYProgress, [0.33, 0.495, 0.66], [0.8, 1, 0.8]);
    const opacity2 = useTransform(scrollYProgress, [0.33, 0.495, 0.66], [0, 1, 0]);
    const rotateY2 = useTransform(scrollYProgress, [0.33, 0.66, 0.67], [0, 360, 360]); // New rotation logic

    // Card 3: 66% to 100%
    const scale3 = useTransform(scrollYProgress, [0.66, 0.825, 1], [0.8, 1, 1]);
    const opacity3 = useTransform(scrollYProgress, [0.66, 0.825, 1], [0, 1, 1]);
    const rotateY3 = useTransform(scrollYProgress, [0.66, 1], [0, 360]); // New rotation logic

    const cards = [
        { item: cardItems[0], scale: scale1, opacity: opacity1, rotateY: rotateY1 },
        { item: cardItems[1], scale: scale2, opacity: opacity2, rotateY: rotateY2 },
        { item: cardItems[2], scale: scale3, opacity: opacity3, rotateY: rotateY3 },
    ];

    return (
        <section className="bg-gray-100 py-12">
            
            {/* The outer container: Creates the scroll distance (3x screen height) */}
            <div ref={targetRef} className="relative h-[300vh]">

                {/* Sticky container adjusted:
                    - top-16: Sticks it 4rem (top-16) down from the viewport edge.
                    - The Heading is now inside the sticky container, but positioned absolutely 
                      to stay above the cards. 
                */}
                <div className="sticky top-16 h-[500px] pt-8 flex justify-center overflow-hidden">
                    <h1 className="uppercase --font-poppins absolute top-[-5] mb-6 text-center font-bold text-3xl text-black">Core Values</h1>
                    {cards.map(({ item, scale, opacity, rotateY }, idx) => (
                        <Card key={idx} {...item} scale={scale} opacity={opacity} rotateY={rotateY} />
                    ))}
                </div>
            </div>

            {/* Placeholder for content below */}
            <div className="h-[50vh]"></div>
        </section>
    );
}

export default CardDisplay;