import { Sparkles, ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    title: "Client Check-In & Alerting System",
    desc: "A Telegram + n8n + Google Sheets pipeline that delivers daily check-ins, captures replies, and flags anything urgent to the team in real time.",
    tags: ["Telegram", "n8n", "Google Sheets"],
  },
  {
    title: "AI Lead Scoring & Reply Classifier",
    desc: "An AI-powered pipeline that reads inbound cold email replies, classifies intent, and scores leads automatically before they hit the CRM.",
    tags: ["Claude API", "Email", "Lead Scoring"],
  },
  {
    title: "Airtable Lead Routing Engine",
    desc: "A budget-based branching workflow that routes new leads to the right owner and pipeline stage the moment they come in.",
    tags: ["Airtable", "Automation", "CRM"],
  },
  {
    title: "Weekly Digest Reporting",
    desc: "Automated per-client summary reports pulled from live data, formatted and delivered on a schedule with zero manual pulling.",
    tags: ["n8n", "Reporting", "Google Sheets"],
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-0 top-0 h-[24rem] w-[24rem] rounded-full bg-accent-cyan/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-white/80">
              <Sparkles size={14} className="text-accent-blue" />
              SELECTED WORK
            </div>
            <h2 className="mt-6 font-display text-4xl font-extrabold leading-tight tracking-tight lg:text-5xl">
              Real systems, built and{" "}
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                shipped
              </span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-white/55">
            A few of the automations I&rsquo;ve designed, built, and
            documented from scratch — each solving a specific operational
            bottleneck.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {PROJECTS.map(({ title, desc, tags }) => (
            <div
              key={title}
              className="group flex flex-col justify-between rounded-3xl border border-white/10 bg-base-900/60 p-7 transition-colors hover:border-white/20 hover:bg-base-850/80"
            >
              <div>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-white">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/55">
                  {desc}
                </p>
              </div>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-white/80 transition-colors group-hover:text-white"
              >
                View case study
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
