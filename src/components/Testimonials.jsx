import { Sparkles, Quote, Star } from "lucide-react";
import { FEATURED_PROJECTS } from "../data/projects.js";

const TESTIMONIALS = [
  {
    name: "Ellaine E.",
    industry: "Appointment-based services",
    message: "Manuel connected our receptionist to the calendar so callers can check availability, book appointments, and reschedule. Messages and booking alerts reach our team, keeping us informed while we focus on our customers.",
  },
  {
    name: "Ian B.",
    industry: "Property & lettings",
    message: "Manuel brought our property enquiries and Asana follow-ups into one workflow. Having viewing links, advert details, and files connected to our tasks makes it easier to keep track of each enquiry and what needs to happen next.",
  },
  {
    name: "Alex E.",
    industry: "E-commerce & social selling",
    message: "Manuel built an AI agent for our Facebook page that answers enquiries using our business information. It helps handle routine questions while we focus on orders and running the store. He also explained how the workflow works so we could manage it confidently.",
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
          <span className="bg-brand-gradient bg-clip-text text-transparent">hate busywork</span>{" "}too
        </h2>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
        {TESTIMONIALS.map(({ name, industry, message }, index) => (
          <article key={name} className="flex min-w-0 flex-col rounded-3xl border border-light-border bg-light-surface p-6 shadow-sm dark:border-white/10 dark:bg-base-900/60 dark:shadow-none lg:p-7">
            <Quote size={24} aria-hidden="true" className="text-accent-tealDeep dark:text-accent-teal" />
            <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-light-muted dark:text-white/75">
              <p>&ldquo;{message}&rdquo;</p>
            </blockquote>
            <div className="mt-6 flex gap-1 text-accent-tealDeep dark:text-accent-teal" role="img" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }, (_, i) => <Star key={i} size={14} fill="currentColor" strokeWidth={0} aria-hidden="true" />)}
            </div>
            <div className="mt-4 flex items-center gap-3 border-t border-light-border pt-4 dark:border-white/10">
              <span aria-hidden="true" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-light-surfaceMuted font-display text-sm font-bold text-light-muted dark:bg-base-800 dark:text-white/60">{name.charAt(0)}</span>
              <div>
                <p className="text-sm font-semibold text-light-text dark:text-white">{name}</p>
                <p className="mt-0.5 text-xs text-light-muted dark:text-white/60">{industry}</p>
              </div>
            </div>
            <a href="#featured-work" className="mt-5 text-xs font-medium text-accent-tealDeep underline-offset-4 hover:underline dark:text-accent-tealLight">
              {FEATURED_PROJECTS[index].title} →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
