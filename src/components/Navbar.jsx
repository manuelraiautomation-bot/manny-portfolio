import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight, Sun, Moon } from "lucide-react";
import mbrLogo from "../assets/mbr-logo.jpg";
import { useTheme } from "../context/ThemeContext.jsx";

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
  const [activeId, setActiveId] = useState("home");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const sectionIds = LINKS.map((link) => link.toLowerCase());
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-light-border bg-light-bg/85 backdrop-blur-md transition-colors duration-300 dark:border-white/5 dark:bg-base-950/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-black shadow-glow">
            <img src={mbrLogo} alt="MBR logo" className="h-full w-full object-cover" />
          </div>
          <div className="leading-tight">
            <p className="font-display text-sm font-semibold text-light-text dark:text-white">
              Manuel Rebutido
            </p>
            <p className="text-xs text-light-muted dark:text-white/50">
              AI Tech VA &amp; Automation Specialist
            </p>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {LINKS.map((link) => {
            const id = link.toLowerCase();
            const isActive = id === activeId;
            return (
              <a
                key={link}
                href={`#${id}`}
                className={`text-sm transition-colors ${
                  isActive
                    ? "relative text-light-text after:absolute after:-bottom-4 after:left-0 after:h-0.5 after:w-full after:bg-brand-gradient dark:text-white"
                    : "text-light-muted hover:text-light-text dark:text-white/60 dark:hover:text-white"
                }`}
              >
                {link}
              </a>
            );
          })}
        </nav>

        {/* CTA + theme toggle */}
        <div className="hidden items-center gap-3 lg:flex">
          <button
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-light-border text-light-muted transition-colors hover:border-light-text/30 hover:text-light-text dark:border-white/15 dark:text-white/70 dark:hover:border-white/30 dark:hover:text-white"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-brand-gradient px-5 py-2.5 text-sm font-medium text-white shadow-glow transition-transform hover:scale-[1.03]"
          >
            Let&rsquo;s Work Together
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-light-border text-light-muted dark:border-white/15 dark:text-white/70"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            className="text-light-text dark:text-white"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-light-border px-6 pb-6 dark:border-white/5 lg:hidden">
          <nav className="flex flex-col gap-4 pt-4">
            {LINKS.map((link) => {
              const id = link.toLowerCase();
              const isActive = id === activeId;
              return (
                <a
                  key={link}
                  href={`#${id}`}
                  className={`text-sm transition-colors ${
                    isActive
                      ? "font-medium text-light-text dark:text-white"
                      : "text-light-muted hover:text-light-text dark:text-white/70 dark:hover:text-white"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {link}
                </a>
              );
            })}
            <a
              href="#contact"
              className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-full bg-brand-gradient px-5 py-2.5 text-sm font-medium text-white"
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
