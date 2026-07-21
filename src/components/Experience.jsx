import { Sparkles, Award } from "lucide-react";

const JOBS = [
  {
    dates: "2026 — Present",
    title: "AI Automation Specialist / Tech VA",
    company: "Independent — Global Clients",
    bullets: [
      "Design and ship production automations across n8n, Make.com, and Zapier for founders and small teams.",
      "Build AI agents with memory, RAG, and multi-model fallbacks integrated into Messenger, Telegram, and custom webhooks.",
      "Deliver documented handoffs so clients own and can extend the systems.",
    ],
    tools: ["n8n", "Make.com", "Zapier", "Claude", "OpenAI"],
  },
  {
    dates: "2019 — 2025",
    title: "Amazon Account Manager & Virtual Assistant",
    company: "E-commerce Clients",
    bullets: [
      "Managed Amazon Seller Central operations: listings, inventory, PPC oversight, and case management.",
      "Layered automation on top of daily operations — pricing checks, review tracking, and reporting to Sheets.",
      "Built the operations fluency behind today's automation work.",
    ],
    tools: ["Amazon Seller Central", "PPC", "Inventory Ops"],
  },
];

const CERTIFICATIONS = [
  {
    title: "n8n Automation Specialist",
    issuer: "TARA AI Community · n8n",
    date: "Issued July 2026",
  },
  {
    title: "No-Code Automation with Make.com",
    issuer: "TARA AI Community · n8n",
    date: "Issued July 2026",
  },
  {
    title: "No-Code Automation with Zapier",
    issuer: "TARA AI Community · n8n",
    date: "Issued July 2026",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-0 top-0 h-[24rem] w-[24rem] rounded-full bg-accent-teal/10 opacity-70 blur-[120px] dark:opacity-100" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="inline-flex items-center gap-2 rounded-full border border-light-border bg-light-surface px-4 py-1.5 text-xs font-medium tracking-wide text-light-muted shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-white/80 dark:shadow-none">
          <Sparkles size={14} className="text-accent-teal" />
          EXPERIENCE
        </div>

        <h2 className="mt-6 max-w-3xl font-display text-4xl font-extrabold leading-tight tracking-tight text-light-text dark:text-white lg:text-5xl">
          Seven years of shipping —{" "}
          <span className="bg-brand-gradient bg-clip-text text-transparent">
            from Amazon ops to autonomous agents.
          </span>
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-10">
          {/* Timeline */}
          <div className="relative lg:col-span-3">
            <div className="absolute bottom-0 left-[5px] top-2 w-px bg-light-border dark:bg-white/10" />

            <div className="space-y-12">
              {JOBS.map((job) => (
                <div key={job.title} className="relative pl-8">
                  <span className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full bg-accent-teal shadow-[0_0_0_4px_rgba(20,184,166,0.15)]" />

                  <p className="text-xs font-medium uppercase tracking-wide text-light-muted/70 dark:text-white/40">
                    {job.dates}
                  </p>
                  <h3 className="mt-1 font-display text-lg font-bold text-light-text dark:text-white">
                    {job.title}
                  </h3>
                  <p className="mt-0.5 text-sm font-medium text-accent-teal">
                    {job.company}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {job.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-light-muted dark:text-white/60"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-light-muted/50 dark:bg-white/30" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-lg border border-light-border bg-light-surfaceMuted px-2.5 py-1 text-xs font-medium text-light-text dark:border-white/10 dark:bg-base-850/80 dark:text-white/70"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications panel */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 text-sm font-semibold text-light-text dark:text-white">
              <Award size={16} className="text-accent-teal" />
              Certifications
            </div>

            <div className="mt-4 space-y-3">
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.title}
                  className="flex items-start gap-3 rounded-2xl border border-light-border bg-light-surface p-4 shadow-sm dark:border-white/10 dark:bg-base-900/60 dark:shadow-none"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-light-border bg-light-surfaceMuted dark:border-white/10 dark:bg-white/5">
                    <Award size={16} className="text-accent-teal" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold leading-tight text-light-text dark:text-white">
                      {cert.title}
                    </p>
                    <p className="mt-0.5 text-xs text-light-muted dark:text-white/50">
                      {cert.issuer}
                    </p>
                    <p className="mt-0.5 text-xs text-light-muted/70 dark:text-white/35">
                      {cert.date}
                    </p>
                  </div>
                </div>
              ))}

              <div className="rounded-2xl border border-accent-teal/25 bg-accent-teal/5 px-4 py-3 text-xs text-light-muted dark:border-accent-teal/20 dark:bg-accent-teal/10 dark:text-white/60">
                Issued by{" "}
                <span className="font-semibold text-accent-teal">
                  TARA AI Community · n8n
                </span>{" "}
                — July 2026
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
