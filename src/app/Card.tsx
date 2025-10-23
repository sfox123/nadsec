"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";

type CardItem = {
  icon: string;
  subtitle: string;
  title: string;
};

type CardProps = CardItem & {
  scale: MotionValue<number>;
  opacity: MotionValue<number>;
  rotateY: MotionValue<number>;
};

const cardItems: CardItem[] = [
  {
    icon: "/icon_1.svg",
    subtitle: "Guards in guard's nature",
    title: "Committed, well-disciplined professionals with unwavering integrity.",
  },
  {
    icon: "/icon_2.svg",
    subtitle: "Guard persona",
    title: "Soft-skills coaching that nurtures empathy, awareness, and courtesy.",
  },
  {
    icon: "/icon_3.svg",
    subtitle: "Technical competency",
    title: "Emergency readiness through ongoing fire, first-aid, and tactical training.",
  },
];

const Card = ({ icon, subtitle, title, scale, opacity, rotateY }: CardProps) => (
  <motion.div
    style={{ scale, opacity }}
    className="absolute flex w-[90%] max-w-2xl flex-col items-center justify-center gap-5 rounded-3xl border border-foreground/10 bg-surface px-8 py-10 text-center shadow-elevated"
  >
    <motion.div style={{ perspective: 800 }} className="flex items-center justify-center">
      <motion.div
        style={{ rotateY }}
        className="flex h-24 w-24 items-center justify-center rounded-full bg-accent/10"
      >
        <Image
          src={icon}
          alt=""
          width={72}
          height={72}
          className="object-contain"
        />
      </motion.div>
    </motion.div>
    <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">
      {subtitle}
    </h3>
    <p className="text-lg font-medium text-foreground">{title}</p>
  </motion.div>
);

const CardDisplay = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start start", "end end"] });

  const scale1 = useTransform(scrollYProgress, [0, 0.165, 0.33], [0.8, 1, 0.85]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.165, 0.33], [0, 1, 0]);
  const rotateY1 = useTransform(scrollYProgress, [0, 0.33, 0.34], [0, 360, 360]);

  const scale2 = useTransform(scrollYProgress, [0.33, 0.495, 0.66], [0.8, 1, 0.85]);
  const opacity2 = useTransform(scrollYProgress, [0.33, 0.495, 0.66], [0, 1, 0]);
  const rotateY2 = useTransform(scrollYProgress, [0.33, 0.66, 0.67], [0, 360, 360]);

  const scale3 = useTransform(scrollYProgress, [0.66, 0.825, 1], [0.8, 1, 1]);
  const opacity3 = useTransform(scrollYProgress, [0.66, 0.825, 1], [0, 1, 1]);
  const rotateY3 = useTransform(scrollYProgress, [0.66, 1], [0, 360]);

  const cards = [
    { item: cardItems[0], scale: scale1, opacity: opacity1, rotateY: rotateY1 },
    { item: cardItems[1], scale: scale2, opacity: opacity2, rotateY: rotateY2 },
    { item: cardItems[2], scale: scale3, opacity: opacity3, rotateY: rotateY3 },
  ];

  return (
    <section
      id="values"
      className="relative bg-surface py-32"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(79,70,229,0.12),_transparent_60%)]" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-accent/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Core values
          </span>
          <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-4xl">
            The principles that keep every operation consistent and dependable.
          </h2>
        </div>
      </div>
      <div ref={targetRef} className="relative mt-20 h-[280vh]">
        <div className="sticky top-24 flex h-[520px] items-center justify-center overflow-visible">
          {cards.map(({ item, scale, opacity, rotateY }, idx) => (
            <Card key={idx} {...item} scale={scale} opacity={opacity} rotateY={rotateY} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardDisplay;
