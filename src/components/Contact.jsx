import { useEffect } from "react";
import {
  Sparkles,
  Mail,
  MapPin,
  Clock3,
  Linkedin,
  Briefcase,
  Globe,
} from "lucide-react";

// Your live Calendly event
const CALENDLY_URL = "https://calendly.com/manuelr-aiautomation/your-automation-assistant";

const CONTACT_INFO = [
  { icon: Mail, label: "Email", value: "manuelr.aiautomation@gmail.com" },
  { icon: MapPin, label: "Based in", value: "Philippines · Remote-first" },
  { icon: Clock3, label: "Availability", value: "Open for new projects" },
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

export default function Contact() {
  useEffect(() => {
    // Load Calendly's widget script once when this section mounts
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-accent-teal/10 opacity-70 blur-[130px] dark:opacity-100" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-light-border bg-light-surface px-4 py-1.5 text-xs font-medium tracking-wide text-light-muted shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-white/80 dark:shadow-none">
            <Sparkles size={14} className="text-accent-teal" />
            LET&rsquo;S TALK
          </div>
          <h2 className="mt-6 font-display text-4xl font-extrabold leading-tight tracking-tight text-light-text dark:text-white lg:text-5xl">
            Got a process that needs{" "}
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              automating?
            </span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-light-muted dark:text-white/60">
            Grab a free 30-minute discovery call — pick a time below and
            answer a few quick questions so I can prep beforehand.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {CONTACT_INFO.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="flex items-start gap-3 rounded-3xl border border-light-border bg-light-surface p-6 shadow-sm dark:border-white/10 dark:bg-base-900/60 dark:shadow-none"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-light-border bg-light-surfaceMuted dark:border-white/10 dark:bg-white/5">
                <Icon size={17} className="text-accent-teal" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-light-muted/80 dark:text-white/40">
                  {label}
                </p>
                <p className="mt-0.5 text-sm font-medium text-light-text dark:text-white/85">
                  {value}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Socials row */}
        <div className="mt-6 flex justify-center gap-3">
          {SOCIALS.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-light-border bg-light-surfaceMuted text-light-muted transition-colors hover:border-light-text/30 hover:text-light-text dark:border-white/10 dark:bg-white/5 dark:text-white/70 dark:hover:border-white/25 dark:hover:text-white"
            >
              <Icon size={17} />
            </a>
          ))}
        </div>

        {/* Calendly booking widget — rendered in its native light theme
            inside a white card, since Calendly's internal form elements
            (dropdowns, checkboxes) aren't designed to work on a dark
            background and break visually if forced dark. */}
        <div className="mt-10 overflow-hidden rounded-3xl border border-light-border bg-white p-2 shadow-sm dark:border-white/10">
          <div
            className="calendly-inline-widget"
            data-url={`${CALENDLY_URL}?hide_gdpr_banner=1&hide_landing_page_details=1&background_color=ffffff&text_color=1a1a1a&primary_color=14b8a6`}
            style={{ minWidth: "280px", height: "700px" }}
          />
        </div>
      </div>
    </section>
  );
}
