import { ArrowUp, Linkedin, Briefcase, Globe } from "lucide-react";
import mbrLogo from "../assets/mbr-logo.jpg";

const LINKS = [
  "Home",
  "About",
  "Experience",
  "Services",
  "Portfolio",
  "Skills",
  "Testimonials",
  "Contact",
];

const SOCIALS = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/manuel-rebutido-89b21b1a8/",
  },
  {
    icon: Briefcase,
    label: "Upwork",
    href: "https://www.upwork.com/freelancers/~015bf2b2e2fb5aa980?mp_source=share",
  },
  {
    icon: Globe,
    label: "OnlineJobs.ph",
    href: "https://v2.onlinejobs.ph/jobseekers/info/829881",
  },
];

export default function Footer() {
  return (
    <footer id="footer" className="border-t border-light-border dark:border-white/5">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          {/* Brand */}
          <div className="max-w-xs">
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
            <p className="mt-4 text-sm leading-relaxed text-light-muted/90 dark:text-white/45">
              Helping businesses save time and scale with AI automation,
              smart systems, and seamless integrations.
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm text-light-muted transition-colors hover:text-light-text dark:text-white/60 dark:hover:text-white"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Socials + back to top */}
          <div className="flex items-center gap-3">
            {SOCIALS.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-light-border bg-light-surface text-light-muted transition-colors hover:border-light-text/30 hover:text-light-text dark:border-white/10 dark:bg-white/5 dark:text-white/70 dark:hover:border-white/25 dark:hover:text-white"
              >
                <Icon size={17} />
              </a>
            ))}
            <a
              href="#home"
              aria-label="Back to top"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-gradient text-white shadow-glow transition-transform hover:scale-105"
            >
              <ArrowUp size={17} />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-light-border pt-6 text-xs text-light-muted/80 dark:border-white/5 dark:text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Manuel Rebutido. All rights reserved.</p>
          <p>Built with React, Vite &amp; Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
