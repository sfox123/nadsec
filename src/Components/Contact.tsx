"use client";

const Contact = () => {
  return (
    <section id="contact" className="bg-surface py-24">
      <div className="mx-auto max-w-5xl rounded-3xl border border-foreground/10 bg-surface px-6 py-16 shadow-card backdrop-blur sm:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-accent/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Contact us
          </span>
          <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-4xl">
            Partner with a team who takes your security as seriously as you do.
          </h2>
          <p className="mt-4 text-base text-muted">
            Share your requirements and our operations team will respond within one business day with next steps tailored to your environment.
          </p>
        </div>
        <form className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label htmlFor="first-name" className="text-sm font-medium text-foreground">
              First name
            </label>
            <input
              id="first-name"
              type="text"
              placeholder="Jane"
              className="rounded-2xl border border-foreground/10 bg-surface px-4 py-3 text-sm text-foreground shadow-inner transition focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="last-name" className="text-sm font-medium text-foreground">
              Last name (optional)
            </label>
            <input
              id="last-name"
              type="text"
              placeholder="Doe"
              className="rounded-2xl border border-foreground/10 bg-surface px-4 py-3 text-sm text-foreground shadow-inner transition focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium text-foreground">
              Email address
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="you@company.com"
              className="rounded-2xl border border-foreground/10 bg-surface px-4 py-3 text-sm text-foreground shadow-inner transition focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="phone" className="text-sm font-medium text-foreground">
              Mobile (optional)
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="(+94) 70 000 0000"
              className="rounded-2xl border border-foreground/10 bg-surface px-4 py-3 text-sm text-foreground shadow-inner transition focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40"
            />
          </div>
          <div className="md:col-span-2 flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-medium text-foreground">
              How can we help?
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Share key details about your environment, concerns, and desired outcomes."
              className="rounded-2xl border border-foreground/10 bg-surface px-4 py-3 text-sm text-foreground shadow-inner transition focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40"
            />
          </div>
          <div className="md:col-span-2 flex justify-center md:justify-end">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-3 text-sm font-semibold text-surface transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Submit inquiry
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
