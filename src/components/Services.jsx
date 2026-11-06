import { useEffect, useRef } from "react";
import { Search, BookOpen, Settings, Rocket, ShieldCheck } from "lucide-react";

const STEPS = [
  {
    icon: Search,
    title: "Discovery Call",
    desc: "We map your current workflow bottlenecks and identify the highest-impact automation opportunities in your business.",
  },
  {
    icon: BookOpen,
    title: "Strategy Design",
    desc: "I architect your custom automation blueprint — no templates, no cookie-cutter solutions. Built around how your business actually works.",
  },
  {
    icon: Settings,
    title: "Build & Test",
    desc: "I build and rigorously test every workflow before it touches your real business. You see it working before we go live.",
  },
  {
    icon: Rocket,
    title: "Launch & Train",
    desc: "I deploy your system live and walk your team through operating it. I personally ensure a smooth handoff.",
  },
  {
    icon: ShieldCheck,
    title: "Ongoing Support",
    desc: "I monitor, optimize, and evolve your automations as your business grows. Your systems get smarter over time.",
  },
];

const PULSE_DURATION = "7s";

export default function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !("IntersectionObserver" in window)) return;
    const steps = section.querySelectorAll(".process-step");
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      section.classList.toggle("process-in-view", entry.isIntersecting);
    });
    steps.forEach((step) => revealObserver.observe(step));
    visibilityObserver.observe(section);
    return () => {
      revealObserver.disconnect();
      visibilityObserver.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} id="process" className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
      <style>{`
        @keyframes servicesPulseTravel {
          0% { left: 0%; opacity: 0; }
          8% { opacity: 1; }
          92% { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
        .servicesPulseDot {
          animation: servicesPulseTravel ${PULSE_DURATION} ease-in-out infinite;
        }
        @keyframes processReveal {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes processIconReveal {
          from { transform: scale(0.9); }
          to { transform: scale(1); }
        }
        @keyframes processLineTravel {
          0% { transform: translateY(-110%); opacity: 0; }
          15%, 75% { opacity: 0.8; }
          100% { transform: translateY(330%); opacity: 0; }
        }
        .process-step.is-revealed .process-content {
          animation: processReveal 600ms ease-out both;
        }
        .process-step.is-revealed .process-icon {
          animation: processIconReveal 600ms ease-out both;
        }
        .process-line-pulse {
          animation: processLineTravel 3.6s ease-in-out infinite;
        }
        #process .servicesPulseDot,
        #process .process-line-pulse { animation-play-state: paused; }
        #process.process-in-view .servicesPulseDot,
        #process.process-in-view .process-line-pulse { animation-play-state: running; }
        @media (prefers-reduced-motion: reduce) {
          #process .process-step .process-content,
          #process .process-step .process-icon { animation: none; }
          #process .servicesPulseDot,
          #process .process-line-pulse {
            animation: none;
            opacity: 0;
          }
        }
      `}</style>

      <div className="mx-auto max-w-2xl text-center">
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-accent-teal">
          <span className="h-px w-6 bg-accent-teal" />
          HOW IT WORKS
        </div>
        <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-light-text dark:text-white sm:text-4xl lg:text-5xl">
          Our 5-Step Process
        </h2>
      </div>

      <div className="relative mt-10 lg:mt-16">
        {/* Desktop connector; mobile connectors follow each step's height. */}
        <div aria-hidden="true" className="pointer-events-none absolute left-[10%] right-[10%] top-9 hidden h-px bg-light-border dark:bg-white/10 lg:block">
          <span className="servicesPulseDot absolute top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-teal shadow-glow" />
        </div>

        <ol className="grid gap-0 lg:grid-cols-5 lg:gap-6">
          {STEPS.map(({ icon: Icon, title, desc }, i) => (
            <li key={title} className="process-step relative flex min-w-0 gap-4 pb-6 last:pb-0 lg:flex-col lg:items-center lg:gap-0 lg:pb-0 lg:text-center">
              {i < STEPS.length - 1 && (
                <span aria-hidden="true" className="absolute bottom-0 left-6 top-12 w-px overflow-hidden bg-light-border dark:bg-accent-teal/25 lg:hidden">
                  <span className="process-line-pulse absolute inset-x-0 top-0 h-1/3 bg-accent-teal" />
                </span>
              )}
              <div className="process-icon relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-light-border bg-light-surface text-accent-tealDeep shadow-sm dark:border-white/10 dark:bg-base-900 dark:text-accent-teal lg:h-[4.5rem] lg:w-[4.5rem] lg:rounded-full">
                <Icon size={23} aria-hidden="true" />
                <span aria-hidden="true" className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-accent-tealDeep text-[10px] font-bold text-white ring-2 ring-light-bg dark:ring-base-950 lg:h-6 lg:w-6 lg:text-[11px]">
                  {i + 1}
                </span>
              </div>
              <div className="process-content min-w-0 flex-1 rounded-2xl border border-light-border bg-light-surface p-4 shadow-sm dark:border-white/10 dark:bg-base-900/60 lg:mt-5 lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none dark:lg:bg-transparent">
                <h3 className="font-display text-base font-semibold text-light-text dark:text-white">
                  <span className="sr-only">Step {i + 1}: </span>{title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-light-muted dark:text-white/70">
                  {desc}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
