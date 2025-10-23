const footerLinks = [
  {
    heading: "Company",
    items: [
      { label: "About", href: "#about" },
      { label: "Vision & Mission", href: "#board" },
      { label: "Core Values", href: "#values" },
    ],
  },
  {
    heading: "Services",
    items: [
      { label: "Corporate security", href: "#contact" },
      { label: "Event protection", href: "#contact" },
      { label: "Security consulting", href: "#contact" },
    ],
  },
  {
    heading: "Contact",
    items: [
      { label: "+94 70 000 0000", href: "tel:+94700000000" },
      { label: "info@nadsec.lk", href: "mailto:info@nadsec.lk" },
      { label: "Colombo, Sri Lanka", href: "https://maps.app.goo.gl" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-surfaceMuted/40 bg-surface py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div className="max-w-sm space-y-4">
            <p className="text-2xl font-semibold text-foreground">NADSEC</p>
            <p className="text-sm text-muted">
              Secure today. Confident tomorrow. We partner with organizations to
              design and deliver resilient security ecosystems across Sri Lanka.
            </p>
          </div>
          <div className="grid flex-1 grid-cols-1 gap-10 text-sm sm:grid-cols-2 md:grid-cols-3">
            {footerLinks.map(({ heading, items }) => (
              <div key={heading} className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                  {heading}
                </p>
                <ul className="space-y-2 text-muted">
                  {items.map(({ label, href }) => (
                    <li key={label}>
                      <a
                        href={href}
                        className="transition hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-surfaceMuted/40 pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} NADSEC Agencies. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/privacy"
              className="transition hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Privacy
            </a>
            <a
              href="/terms"
              className="transition hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
