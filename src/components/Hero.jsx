import {
  Sparkles,
  ArrowRight,
  Download,
  Bot,
  Workflow,
  Database,
  BarChart3,
  Repeat2,
  Wand2,
  Cog,
  ShieldCheck,
} from "lucide-react";
import robotCharacter from "../assets/robot-character.png";

const TOOLS = ["OpenAI", "n8n", "Make", "Google Workspace", "Notion", "Airtable"];

const ORBIT_CARDS = [
  { label: "AI Agents", icon: Bot, className: "left-2 top-4 lg:left-6 lg:top-6" },
  { label: "Workflow Automation", icon: Workflow, className: "left-0 top-40 lg:left-0 lg:top-44" },
  { label: "Data & API Integration", icon: Database, className: "left-4 top-72 lg:left-8 lg:top-80" },
  { label: "Google Workspace", icon: Wand2, className: "right-2 top-2 lg:right-6 lg:top-4" },
  { label: "Notion Systems", icon: Cog, className: "right-0 top-36 lg:right-0 lg:top-40" },
  { label: "Reporting & Dashboards", icon: BarChart3, className: "right-2 top-72 lg:right-4 lg:top-80" },
];

const INTRO_CHIPS = [
  {
    icon: Sparkles,
    title: "AI Automation Specialist",
    desc: "Building smart workflows with AI.",
  },
  {
    icon: Repeat2,
    title: "Workflow Architect",
    desc: "Design automated systems that scale.",
  },
  {
    icon: Wand2,
    title: "Tech-Savvy Problem Solver",
    desc: "I turn complex problems into simple solutions.",
  },
  {
    icon: ShieldCheck,
    title: "Detail-Oriented & Reliable",
    desc: "Committed to accuracy, efficiency & results.",
  },
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10rem] h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-accent-blue/20 blur-[120px]" />
        <div className="absolute right-0 top-1/3 h-[24rem] w-[24rem] rounded-full bg-accent-violet/20 blur-[110px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-16 pt-14 lg:px-10 lg:pt-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left: copy */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-white/80">
              <Sparkles size={14} className="text-accent-blue" />
              AI-POWERED SOLUTIONS THAT DRIVE RESULTS
            </div>

            <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.05] tracking-tight lg:text-6xl">
              I Automate.
              <br />
              You{" "}
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                Elevate.
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/60">
              I help businesses save time, reduce costs, and scale faster with
              AI automation, smart systems, and seamless integrations.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold shadow-glow transition-transform hover:scale-[1.03]"
              >
                View My Work
                <ArrowRight size={16} />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white/90 transition-colors hover:border-white/30 hover:bg-white/5"
              >
                Download CV
                <Download size={16} />
              </a>
            </div>

            <div className="mt-12">
              <p className="text-xs uppercase tracking-wide text-white/40">
                Trusted by tools I work with
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-3">
                {TOOLS.map((tool) => (
                  <span
                    key={tool}
                    className="text-sm font-medium text-white/50 transition-colors hover:text-white/80"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: illustration + orbit cards */}
          <div className="relative mx-auto h-[26rem] w-full max-w-md lg:h-[30rem]">
            {/* Character illustration */}
            <div className="absolute left-1/2 top-1/2 flex h-72 w-72 -translate-x-1/2 -translate-y-1/2 items-center justify-center lg:h-80 lg:w-80">
              <img
                src={robotCharacter}
                alt="AI assistant character"
                className="h-full w-full object-contain drop-shadow-[0_0_40px_rgba(56,132,255,0.35)]"
              />
            </div>
            {/* Glow ring beneath character */}
            <div className="absolute bottom-6 left-1/2 h-6 w-40 -translate-x-1/2 rounded-full bg-accent-blue/40 blur-2xl" />

            {ORBIT_CARDS.map(({ label, icon: Icon, className }) => (
              <div
                key={label}
                className={`absolute flex w-28 flex-col items-center gap-2 rounded-2xl border border-white/10 bg-base-850/90 px-3 py-4 text-center shadow-lg backdrop-blur-sm ${className}`}
              >
                <Icon size={20} className="text-accent-blue" />
                <span className="text-[11px] font-medium leading-tight text-white/80">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Intro strip */}
        <div className="mt-16 rounded-3xl border border-white/10 bg-base-900/60 p-6 lg:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-8">
            <div className="flex items-start gap-4 lg:w-96 lg:shrink-0">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-base-700 to-base-900 ring-1 ring-white/10">
                <span className="font-display text-lg font-bold text-white/40">
                  M
                </span>
              </div>
              <div>
                <p className="font-display text-base font-semibold">
                  Hi, I&rsquo;m Manuel! 👋
                </p>
                <p className="mt-1 text-sm leading-relaxed text-white/50">
                  An AI Tech VA &amp; Automation Specialist passionate about
                  building intelligent systems that streamline workflows and
                  empower businesses to focus on what truly matters.
                </p>
                <a
                  href="#about"
                  className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-white/15 px-4 py-1.5 text-xs font-medium text-white/80 hover:bg-white/5"
                >
                  More About Me
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>

            <div className="grid flex-1 grid-cols-2 gap-4 lg:grid-cols-4">
              {INTRO_CHIPS.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10 bg-base-850/60 p-4"
                >
                  <Icon size={18} className="text-accent-violet" />
                  <p className="mt-3 text-sm font-semibold text-white">
                    {title}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-white/45">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
