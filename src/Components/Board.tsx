"use client";

import Image from "next/image";

const insights = [
  {
    id: "vision",
    title: "Vision",
    description:
      "Satisfy clients with tailored security solutions while creating meaningful careers for ex-military professionals and specialists with exceptional benefits.",
    image: "/vision.svg",
    fallback: "https://placehold.co/96x96/38BDF8/0f172a?text=V",
  },
  {
    id: "mission",
    title: "Mission",
    description:
      "Deploy disciplined, highly trained personnel through systematic administration to deliver premium security services and unmatched client confidence.",
    image: "/mission.svg",
    fallback: "https://placehold.co/96x96/6366F1/0f172a?text=M",
  },
];

const Board = () => {
  return (
    <section id="board" className="bg-surfaceMuted py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-6 text-center">
          <span className="inline-flex items-center rounded-full bg-accent/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Leadership charter
          </span>
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
            Guided by a clear purpose and measurable outcomes.
          </h2>
          <p className="max-w-2xl text-base text-muted">
            Our directors translate experience from national service and corporate operations into a governance model that keeps our teams responsive, ethical, and ready.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {insights.map(({ id, title, description, image, fallback }) => (
            <article
              key={id}
              className="group relative overflow-hidden rounded-3xl border border-foreground/10 bg-surface p-8 shadow-card transition duration-500 hover:-translate-y-1 hover:shadow-elevated"
            >
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.14),_transparent_65%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="flex items-start gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10">
                  <Image
                    src={image}
                    alt={`${title} icon`}
                    width={48}
                    height={48}
                    className="h-12 w-12 object-contain"
                    onError={(event) => {
                      const target = event.currentTarget;
                      target.onerror = null;
                      target.src = fallback;
                    }}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Board;
