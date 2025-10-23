"use client";

import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-surface py-24"
    >
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,_rgba(56,189,248,0.08),_transparent_60%)]" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-[1fr_auto_1fr]">
        <div className="space-y-5">
          <span className="inline-flex items-center rounded-full bg-accent/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            About us
          </span>
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
            We blend military precision with client-first service.
          </h2>
          <p className="text-base leading-relaxed text-muted">
            NADSEC Agencies is a private security partner delivering end-to-end
            protection for businesses and communities. Our leadership draws
            from decorated military careers and decades in corporate security,
            giving us the insight to anticipate risks and the discipline to
            respond decisively.
          </p>
          <p className="text-base leading-relaxed text-muted">
            From executive protection to site operations, we invest in ongoing
            training, technology, and transparent communication to ensure every
            engagement reinforces our reputation for trust, professionalism, and
            integrity.
          </p>
        </div>
        <div className="hidden h-48 w-px self-stretch rounded-full bg-gradient-to-b from-accent/0 via-accent/40 to-accent/0 md:block" />
        <div className="relative h-[420px] w-full overflow-hidden rounded-3xl border border-foreground/10 bg-surface shadow-card transition duration-500 hover:-translate-y-1 hover:shadow-elevated">
          <Image
            src="/shield.png"
            alt="Security shield illustration"
            fill
            sizes="(max-width: 768px) 100vw, 32rem"
            className="object-cover"
            onError={(event) => {
              const target = event.currentTarget;
              target.onerror = null;
              target.src = "https://placehold.co/600x800/0f172a/ffffff?text=NADSEC";
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
