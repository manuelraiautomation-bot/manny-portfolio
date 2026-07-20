import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Bot,
  Workflow,
  Database,
  MessageSquare,
} from "lucide-react";

const HIGHLIGHTS = [
  "7+ years remote-ops experience, the last several spent building AI-driven automation systems",
  "Background in Amazon account management — I understand operations, not just tools",
  "I build, test, and document every workflow myself, end to end",
  "Comfortable across n8n, Make, Airtable, Notion, and the Google Workspace stack",
];

const SKILL_TAGS = [
  "AI Agent Design",
  "n8n Workflows",
  "Telegram Bots",
  "API Integrations",
  "Airtable Systems",
  "Google Workspace",
  "Process Documentation",
  "Client Ops Support",
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-1/4 h-[22rem] w-[22rem] rounded-full bg-accent-violet/10 blur-[110px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
          {/* Left: portrait block */}
          <div className="relative mx-auto w-full max-w-sm lg:mx-0">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-base-800 to-base-900 shadow-glow">
              <div className="flex h-full w-full items-center justify-center">
                <span className="font-display text-8xl font-extrabold text-white/10">
                  M
                </span>
              </div>
              <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/10 bg-base-950/80 p-4 backdrop-blur-sm">
                <p className="font-display text-sm font-semibold text-white">
                  Manny De Guzman
                </p>
                <p className="mt-0.5 text-xs text-white/50">
                  AI Tech VA &amp; Automation Specialist
                </p>
              </div>
            </div>
            {/* Floating stat chip, echoes the hero's orbit cards */}
            <div className="absolute -right-4 -top-4 flex items-center gap-2 rounded-2xl border border-white/10 bg-base-850/90 px-4 py-3 shadow-lg backdrop-blur-sm lg:-right-8">
              <Workflow size={18} className="text-accent-blue" />
              <div>
                <p className="text-sm font-semibold text-white">40+</p>
                <p className="text-[11px] text-white/50">workflows shipped</p>
              </div>
            </div>
          </div>

          {/* Right: copy */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-white/80">
              <Sparkles size={14} className="text-accent-blue" />
              ABOUT ME
            </div>

            <h2 className="mt-6 font-display text-4xl font-extrabold leading-tight tracking-tight lg:text-5xl">
              I turn manual busywork into{" "}
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                systems that run themselves
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/60">
              I&rsquo;m Manny — an AI Tech VA and automation specialist who
              spent years inside real business operations before moving into
              automation. That background means I don&rsquo;t just connect
              tools; I understand the workflow behind them, so what I build
              actually fits how your business runs.
            </p>

            <ul className="mt-8 space-y-3">
              {HIGHLIGHTS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-accent-cyan"
                  />
                  <span className="text-sm leading-relaxed text-white/70">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-2">
              {SKILL_TAGS.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/70"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold shadow-glow transition-transform hover:scale-[1.03]"
            >
              Let&rsquo;s Build Something
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
