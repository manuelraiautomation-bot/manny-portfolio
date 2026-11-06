import {
  Sparkles,
  ArrowRight,
  Download,
  Bot,
  Workflow,
  Database,
  BarChart3,
  Wand2,
  Cog,
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

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10rem] h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-accent-teal/10 opacity-70 blur-[120px] dark:bg-accent-teal/20 dark:opacity-100" />
        <div className="absolute right-0 top-1/3 h-[24rem] w-[24rem] rounded-full bg-accent-tealLight/10 opacity-70 blur-[110px] dark:bg-accent-tealLight/15 dark:opacity-100" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-16 pt-14 lg:px-10 lg:pt-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left: copy */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-light-border bg-light-surface px-4 py-1.5 text-xs font-medium tracking-wide text-light-muted shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-white/80 dark:shadow-none">
              <Sparkles size={14} className="text-accent-teal" />
              AI-POWERED SOLUTIONS THAT DRIVE RESULTS
            </div>

            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-light-text dark:text-white sm:text-5xl lg:text-6xl">
              AI Agents &amp; Workflow Automation for{" "}
              <span className="hero-businesses inline-block bg-clip-text text-transparent">Small Businesses</span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-light-muted dark:text-white/60">
              I’m Manuel. I build AI receptionists, customer-support agents,
              and connected workflows that take repetitive tasks off your team’s plate.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.03]"
              >
                Book a Discovery Call
                <ArrowRight size={16} />
              </a>
              <a
                href="#featured-work"
                className="inline-flex items-center gap-2 rounded-full border border-light-border bg-light-surface px-6 py-3 text-sm font-semibold text-light-text transition-colors hover:border-light-text/30 dark:border-white/15 dark:bg-transparent dark:text-white/90 dark:hover:border-white/30 dark:hover:bg-white/5"
              >
                View Featured Work
                <ArrowRight size={16} />
              </a>
            </div>

            <a href="/Manuel_Rebutido_Resume.pdf" download className="mt-5 inline-flex items-center gap-2 text-sm text-light-muted underline underline-offset-4 dark:text-white/70">Download CV <Download size={14} /></a>

            <div className="mt-12">
              <p className="text-xs uppercase tracking-wide text-light-muted/80 dark:text-white/40">
                Tools I work with
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-3">
                {TOOLS.map((tool) => (
                  <span
                    key={tool}
                    className="text-sm font-medium text-light-muted transition-colors hover:text-light-text dark:text-white/50 dark:hover:text-white/80"
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
                className="h-full w-full object-contain drop-shadow-[0_0_40px_rgba(20,184,166,0.35)]"
              />
            </div>
            {/* Glow ring beneath character */}
            <div className="absolute bottom-6 left-1/2 h-6 w-40 -translate-x-1/2 rounded-full bg-accent-teal/30 blur-2xl dark:bg-accent-teal/40" />

            {ORBIT_CARDS.map(({ label, icon: Icon, className }, i) => (
              <div
                key={label}
                style={{
                  animation: `orbit-float 4.5s ease-in-out ${i * 0.35}s infinite`,
                }}
                className={`absolute ${className}`}
              >
                <div
                  className="hologram-card group relative flex w-28 flex-col items-center gap-2 overflow-hidden rounded-2xl border border-light-border px-3 py-4 text-center shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:scale-105 dark:border-white/10"
                  style={{ animationDelay: `${i * 0.6}s` }}
                >
                  {/* Holographic gradient border */}
                  <span className="hologram-border" aria-hidden="true" />
                  {/* Diagonal light sweep */}
                  <span className="hologram-scan" aria-hidden="true" />
                  {/* Fine scanlines */}
                  <span className="hologram-lines" aria-hidden="true" />

                  <Icon
                    size={20}
                    className="hologram-icon relative z-10 transition-transform duration-300 group-hover:scale-110"
                  />
                  <span className="relative z-10 text-[11px] font-medium leading-tight text-light-text transition-colors duration-300 dark:text-white/85 dark:group-hover:text-white">
                    {label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes orbit-float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }

          /* --- Hologram card effect: teal only, elegant not busy --- */
          .hologram-card {
            background:
              linear-gradient(135deg, rgba(20,184,166,0.16), rgba(20,184,166,0.07) 40%, rgba(45,212,191,0.16) 70%, rgba(20,184,166,0.16)),
              rgba(241, 244, 248, 0.6);
            background-size: 300% 300%, 100% 100%;
            background-blend-mode: normal;
            animation: hologram-shift 7s ease-in-out infinite;
          }

          .dark .hologram-card {
            background:
              linear-gradient(135deg, rgba(20,184,166,0.18), rgba(20,184,166,0.08) 40%, rgba(45,212,191,0.18) 70%, rgba(20,184,166,0.18)),
              rgba(10, 14, 26, 0.55);
          }

          .hologram-card:hover {
            border-color: rgba(20,184,166,0.35);
          }

          /* Animated iridescent border ring */
          .hologram-border {
            position: absolute;
            inset: 0;
            border-radius: inherit;
            padding: 1px;
            background: linear-gradient(115deg,
              rgba(20,184,166,0.95),
              rgba(20,184,166,0.5),
              rgba(45,212,191,0.9),
              rgba(20,184,166,0.5),
              rgba(20,184,166,0.95));
            background-size: 300% 300%;
            animation: hologram-shift 5s ease-in-out infinite;
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            opacity: 0.55;
            transition: opacity 0.3s ease;
            pointer-events: none;
          }

          .group:hover .hologram-border {
            opacity: 1;
          }

          /* Diagonal glossy light sweep, like a hologram catching light */
          .hologram-scan {
            position: absolute;
            top: -60%;
            left: -40%;
            width: 60%;
            height: 220%;
            background: linear-gradient(
              75deg,
              transparent 0%,
              rgba(255,255,255,0.05) 35%,
              rgba(255,255,255,0.28) 50%,
              rgba(255,255,255,0.05) 65%,
              transparent 100%
            );
            transform: rotate(8deg);
            animation: hologram-sweep 3.6s ease-in-out infinite;
            mix-blend-mode: screen;
            pointer-events: none;
          }

          /* Faint horizontal scanlines for a projected-display feel */
          .hologram-lines {
            position: absolute;
            inset: 0;
            background: repeating-linear-gradient(
              0deg,
              rgba(255,255,255,0.05) 0px,
              rgba(255,255,255,0.05) 1px,
              transparent 1px,
              transparent 3px
            );
            opacity: 0.35;
            mix-blend-mode: overlay;
            pointer-events: none;
          }

          .hologram-icon {
            color: #14b8a6;
            filter: drop-shadow(0 0 6px rgba(20,184,166,0.65));
            animation: hologram-hue 6s linear infinite;
          }

          @keyframes hologram-shift {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }

          @keyframes hologram-sweep {
            0% { left: -60%; }
            50% { left: 110%; }
            100% { left: 110%; }
          }

          @keyframes hologram-hue {
            0% { filter: drop-shadow(0 0 6px rgba(20,184,166,0.65)) hue-rotate(0deg); }
            50% { filter: drop-shadow(0 0 8px rgba(20,184,166,0.5)) hue-rotate(25deg); }
            100% { filter: drop-shadow(0 0 6px rgba(20,184,166,0.65)) hue-rotate(360deg); }
          }

          @media (prefers-reduced-motion: reduce) {
            #home [style*="orbit-float"],
            .hologram-card,
            .hologram-border,
            .hologram-scan,
            .hologram-icon {
              animation: none !important;
            }
          }
        `}</style>


      </div>
    </section>
  );
}
