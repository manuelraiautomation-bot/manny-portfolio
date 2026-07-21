import { Sparkles, Quote, Star } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "Manny mapped our entire client check-in process and automated it in about a week. What used to eat two hours a day now runs on its own.",
    name: "Sarah Whitfield",
    role: "Founder, Online Coaching Studio",
  },
  {
    quote:
      "He doesn't just build the automation — he explains exactly how it works and why. That made handing off ownership of the system painless.",
    name: "Daniel Ortiz",
    role: "Operations Lead, D2C Brand",
  },
  {
    quote:
      "Our lead response time dropped from hours to minutes after Manny put the routing workflow in place. Genuinely changed how the team works.",
    name: "Priya Nair",
    role: "Growth Manager, SaaS Startup",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-light-border bg-light-surface px-4 py-1.5 text-xs font-medium tracking-wide text-light-muted shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-white/80 dark:shadow-none">
          <Sparkles size={14} className="text-accent-teal" />
          CLIENT WORDS
        </div>
        <h2 className="mt-6 font-display text-4xl font-extrabold leading-tight tracking-tight text-light-text dark:text-white lg:text-5xl">
          Trusted by teams who{" "}
          <span className="bg-brand-gradient bg-clip-text text-transparent">
            hate busywork
          </span>{" "}
          too
        </h2>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
        {TESTIMONIALS.map(({ quote, name, role }) => (
          <div
            key={name}
            className="flex flex-col rounded-3xl border border-light-border bg-light-surface p-7 shadow-sm dark:border-white/10 dark:bg-base-900/60 dark:shadow-none"
          >
            <Quote size={22} className="text-accent-orange" />
            <p className="mt-5 flex-1 text-sm leading-relaxed text-light-muted dark:text-white/70">
              &ldquo;{quote}&rdquo;
            </p>
            <div className="mt-6 flex items-center gap-1 text-accent-teal">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <div className="mt-4 flex items-center gap-3 border-t border-light-border pt-4 dark:border-white/10">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-b from-light-surface to-light-surfaceMuted ring-1 ring-light-border dark:from-base-700 dark:to-base-900 dark:ring-white/10">
                <span className="font-display text-sm font-bold text-light-text/40 dark:text-white/40">
                  {name.charAt(0)}
                </span>
              </div>
              <div>
                <p className="text-sm font-semibold text-light-text dark:text-white">{name}</p>
                <p className="text-xs text-light-muted dark:text-white/45">{role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
