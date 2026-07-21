import { useState } from "react";
import {
  Sparkles,
  Mail,
  MapPin,
  Clock3,
  Send,
  Linkedin,
  Briefcase,
  Globe,
} from "lucide-react";

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
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

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
            Tell me what&rsquo;s eating up your time and I&rsquo;ll get back
            to you with how I&rsquo;d approach it.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-5">
          {/* Info panel */}
          <div className="flex flex-col justify-between rounded-3xl border border-light-border bg-light-surface p-7 shadow-sm dark:border-white/10 dark:bg-base-900/60 dark:shadow-none lg:col-span-2">
            <div className="space-y-6">
              {CONTACT_INFO.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-3">
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

            <div className="mt-8 flex gap-3 border-t border-light-border pt-6 dark:border-white/10">
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
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-light-border bg-light-surface p-7 shadow-sm dark:border-white/10 dark:bg-base-900/60 dark:shadow-none lg:col-span-3"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className="text-xs font-medium text-light-muted dark:text-white/60" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="mt-2 w-full rounded-xl border border-light-border bg-light-surfaceMuted px-4 py-3 text-sm text-light-text placeholder:text-light-muted/60 outline-none transition-colors focus:border-accent-teal/60 dark:border-white/10 dark:bg-base-850/80 dark:text-white dark:placeholder:text-white/30"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-light-muted dark:text-white/60" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  className="mt-2 w-full rounded-xl border border-light-border bg-light-surfaceMuted px-4 py-3 text-sm text-light-text placeholder:text-light-muted/60 outline-none transition-colors focus:border-accent-teal/60 dark:border-white/10 dark:bg-base-850/80 dark:text-white dark:placeholder:text-white/30"
                />
              </div>
            </div>

            <div className="mt-5">
              <label className="text-xs font-medium text-light-muted dark:text-white/60" htmlFor="message">
                What do you need automated?
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me a bit about your workflow, tools, and where things break down..."
                className="mt-2 w-full resize-none rounded-xl border border-light-border bg-light-surfaceMuted px-4 py-3 text-sm text-light-text placeholder:text-light-muted/60 outline-none transition-colors focus:border-accent-teal/60 dark:border-white/10 dark:bg-base-850/80 dark:text-white dark:placeholder:text-white/30"
              />
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.03]"
            >
              {sent ? "Message Sent — Thank You!" : "Send Message"}
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
