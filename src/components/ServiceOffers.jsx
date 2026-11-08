import { PhoneCall, Bot, Workflow, Plug, Globe2, Check, ArrowUpRight } from "lucide-react";

const OFFERS = [
  {
    icon: PhoneCall,
    title: "AI Voice Receptionists",
    description: "Help callers book appointments and leave messages while your team focuses on customers.",
    deliverables: ["Calendar availability, booking, and rescheduling flows", "Caller-message capture and email notifications", "Connected call records and a documented handoff"],
    fit: "Appointment-based businesses and service teams",
  },
  {
    icon: Bot,
    title: "AI Support Agents",
    description: "Give customers answers grounded in your business information through the channels they already use.",
    deliverables: ["A knowledge-connected assistant for your chosen channel", "Conversation memory and fallback handling where needed", "Test scenarios and guidance for maintaining answers"],
    fit: "Teams handling recurring customer questions",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Connect repetitive tasks into a workflow your team can run, understand, and maintain.",
    deliverables: ["A mapped workflow built in n8n, Make, or Zapier", "Task, file, and data routing with validation", "Error logging, alerts, and operating instructions"],
    fit: "Founders and small teams juggling manual admin",
  },
  {
    icon: Plug,
    title: "CRM & API Integrations",
    description: "Keep enquiries and follow-ups connected across your CRM and business tools.",
    deliverables: ["GHL or other CRM connections scoped to your process", "API and webhook integrations between agreed tools", "Field mapping, end-to-end checks, and handoff notes"],
    fit: "Businesses coordinating leads across multiple tools",
  },
  {
    icon: Globe2,
    title: "Business Website Design",
    description: "Present your business clearly online with a brand-focused website designed for your customers and devices.",
    deliverables: ["Responsive page design with clear service or product information", "Contact links, location details, and accessible navigation", "Search-friendly structure and editable business content"],
    fit: "Local and international businesses building their online presence",
  },
];

export default function ServiceOffers({ onDiscuss }) {
  return (
    <section id="services" aria-labelledby="services-heading" className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent-tealDeep dark:text-accent-tealLight">How I can help</p>
        <h2 id="services-heading" className="mt-4 font-display text-3xl font-extrabold tracking-tight text-light-text dark:text-white sm:text-4xl lg:text-5xl">
          Less manual work. <span className="bg-brand-gradient bg-clip-text text-transparent">More room to grow.</span>
        </h2>
        <p className="mt-5 text-base leading-relaxed text-light-muted dark:text-white/65">Choose the area you need help with. We’ll agree on your tools, requirements, and deliverables before the build starts.</p>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:mt-14">
        {OFFERS.map(({ icon: Icon, title, description, deliverables, fit }) => (
          <article key={title} className="flex min-w-0 flex-col rounded-3xl border border-light-border bg-light-surface p-6 shadow-sm dark:border-white/10 dark:bg-base-900/60 lg:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-teal/10 text-accent-tealDeep dark:text-accent-tealLight"><Icon size={24} aria-hidden="true" /></div>
            <h3 className="mt-5 font-display text-xl font-bold text-light-text dark:text-white">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-light-muted dark:text-white/70">{description}</p>
            <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-light-text dark:text-white/85">Typical deliverables</p>
            <ul className="mt-3 space-y-3">
              {deliverables.map((item) => <li key={item} className="flex gap-3 text-sm leading-relaxed text-light-muted dark:text-white/70"><Check size={17} aria-hidden="true" className="mt-1 shrink-0 text-accent-tealDeep dark:text-accent-teal" /><span>{item}</span></li>)}
            </ul>
            <p className="mb-6 mt-6 text-xs leading-relaxed text-light-muted dark:text-white/60"><span className="font-semibold">Best for:</span> {fit}</p>
            <button type="button" onClick={() => onDiscuss(title)} aria-haspopup="dialog" className="mt-auto inline-flex items-center gap-2 self-start rounded-full border border-light-border px-5 py-3 text-sm font-semibold text-light-text hover:bg-light-surfaceMuted dark:border-white/20 dark:text-white dark:hover:bg-white/5" aria-label={`Discuss ${title}`}>Discuss this service <ArrowUpRight size={16} aria-hidden="true" /></button>
          </article>
        ))}
      </div>
      <p className="mt-8 text-center text-sm text-light-muted dark:text-white/65">Not sure where to start? <a href="#contact" className="font-semibold underline underline-offset-4">Book a free discovery call</a> or <a href="#process" className="font-semibold underline underline-offset-4">see the five-step process</a>.</p>
    </section>
  );
}
