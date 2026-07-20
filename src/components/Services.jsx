import {
  Sparkles,
  Bot,
  Workflow,
  Database,
  BarChart3,
  Headphones,
  Settings2,
  ArrowUpRight,
} from "lucide-react";

const SERVICES = [
  {
    icon: Bot,
    title: "AI Agent & Chatbot Builds",
    desc: "Custom AI agents and Telegram/WhatsApp bots that handle real conversations — check-ins, FAQs, lead capture, and client replies.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    desc: "End-to-end n8n and Make automations that connect your tools and remove the manual steps between them.",
  },
  {
    icon: Database,
    title: "CRM & Data Integration",
    desc: "Airtable and Google Sheets systems that keep leads, clients, and data flowing cleanly between every platform you use.",
  },
  {
    icon: BarChart3,
    title: "Reporting & Dashboards",
    desc: "Automated digests and dashboards that turn raw activity into a summary you can actually act on.",
  },
  {
    icon: Headphones,
    title: "Virtual Assistance & Ops",
    desc: "Day-to-day operational support — inbox, scheduling, and admin — run with the same systems mindset as my automations.",
  },
  {
    icon: Settings2,
    title: "Systems Consulting",
    desc: "An audit of your current process and a clear roadmap for what to automate first, and what the ROI looks like.",
  },
];

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-white/80">
          <Sparkles size={14} className="text-accent-blue" />
          WHAT I DO
        </div>
        <h2 className="mt-6 font-display text-4xl font-extrabold leading-tight tracking-tight lg:text-5xl">
          Services built around{" "}
          <span className="bg-brand-gradient bg-clip-text text-transparent">
            fewer manual steps
          </span>
        </h2>
        <p className="mt-5 text-base leading-relaxed text-white/60">
          Whether you need one workflow fixed or an entire ops layer built,
          here&rsquo;s where I typically start.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-base-900/60 p-6 transition-colors hover:border-white/20 hover:bg-base-850/80"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient shadow-glow">
              <Icon size={20} />
            </div>
            <h3 className="mt-5 font-display text-lg font-semibold text-white">
              {title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/55">
              {desc}
            </p>
            <a
              href="#contact"
              className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-white/70 opacity-0 transition-opacity group-hover:opacity-100"
            >
              Get started
              <ArrowUpRight size={14} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
