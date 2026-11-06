import {
  Sparkles,
  ArrowRight,
  Download,
} from "lucide-react";
import HeroVisual from "./HeroVisual.jsx";

const TOOLS = ["n8n", "Make", "Zapier", "GHL"];

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

          <HeroVisual />
        </div>




      </div>
    </section>
  );
}
