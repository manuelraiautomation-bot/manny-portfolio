import { Sparkles, Workflow, Bot, Database, MessageCircle, LayoutGrid } from "lucide-react";

const SKILL_GROUPS = [
  {
    icon: Workflow,
    title: "Automation Platforms",
    tools: ["n8n", "Make", "Zapier", "GoHighLevel"],
  },
  {
    icon: Bot,
    title: "AI & LLMs",
    tools: ["OpenAI", "Claude", "Gemini"],
  },
  {
    icon: Database,
    title: "Data & CRM",
    tools: ["Airtable", "Google Sheets", "Notion"],
  },
  {
    icon: MessageCircle,
    title: "Communication",
    tools: ["Telegram Bot API", "Slack", "Gmail"],
  },
  {
    icon: LayoutGrid,
    title: "Productivity & Design",
    tools: ["Google Workspace", "Canva"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-1/4 top-0 h-[22rem] w-[22rem] rounded-full bg-accent-teal/10 opacity-70 blur-[120px] dark:bg-accent-teal/15 dark:opacity-100" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-light-border bg-light-surface px-4 py-1.5 text-xs font-medium tracking-wide text-light-muted shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-white/80 dark:shadow-none">
            <Sparkles size={14} className="text-accent-teal" />
            SKILL STACK
          </div>
          <h2 className="mt-6 font-display text-4xl font-extrabold leading-tight tracking-tight text-light-text dark:text-white lg:text-5xl">
            Tools I build{" "}
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              with daily
            </span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-light-muted dark:text-white/60">
            The platforms and apps behind every workflow, agent, and system
            I&rsquo;ve shipped.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map(({ icon: Icon, title, tools }) => (
            <div
              key={title}
              className="rounded-2xl border border-light-border bg-light-surface p-6 shadow-sm transition-colors hover:border-light-text/20 dark:border-white/10 dark:bg-base-900/60 dark:shadow-none dark:hover:border-white/20"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient shadow-glow">
                <Icon size={20} className="text-white" />
              </div>
              <h3 className="mt-5 font-display text-base font-semibold text-light-text dark:text-white">
                {title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-light-border bg-light-surfaceMuted px-3 py-1 text-xs font-medium text-light-muted dark:border-white/10 dark:bg-white/5 dark:text-white/70"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
