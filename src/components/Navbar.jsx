import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const LINKS = [
  "Home",
  "About",
  "Services",
  "Portfolio",
  "Skills",
  "Testimonials",
  "Contact",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-base-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gradient font-display text-lg font-bold shadow-glow">
            M
          </div>
          <div className="leading-tight">
            <p className="font-display text-sm font-semibold text-white">
              Manny De Guzman
            </p>
            <p className="text-xs text-white/50">
              AI Tech VA &amp; Automation Specialist
            </p>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {LINKS.map((link, i) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`text-sm transition-colors hover:text-white ${
                i === 0
                  ? "relative text-white after:absolute after:-bottom-4 after:left-0 after:h-0.5 after:w-full after:bg-brand-gradient"
                  : "text-white/60"
              }`}
            >
              {link}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden items-center gap-1.5 rounded-full bg-brand-gradient px-5 py-2.5 text-sm font-medium shadow-glow transition-transform hover:scale-[1.03] lg:inline-flex"
        >
          Let&rsquo;s Work Together
          <ArrowUpRight size={16} />
        </a>

        {/* Mobile toggle */}
        <button
          className="text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/5 px-6 pb-6 lg:hidden">
          <nav className="flex flex-col gap-4 pt-4">
            {LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm text-white/70 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {link}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-full bg-brand-gradient px-5 py-2.5 text-sm font-medium"
              onClick={() => setOpen(false)}
            >
              Let&rsquo;s Work Together
              <ArrowUpRight size={16} />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
