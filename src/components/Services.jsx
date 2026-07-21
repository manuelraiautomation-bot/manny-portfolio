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
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
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
        @media (prefers-reduced-motion: reduce) {
          .servicesPulseDot {
            animation: none;
            opacity: 0;
          }
        }
        .servicesScroll {
          scrollbar-width: thin;
        }
        .servicesScroll::-webkit-scrollbar {
          height: 6px;
        }
        .servicesScroll::-webkit-scrollbar-thumb {
          background: rgba(148, 163, 184, 0.35);
          border-radius: 999px;
        }
      `}</style>

      <div className="mx-auto max-w-2xl text-center">
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-accent-teal">
          <span className="h-px w-6 bg-accent-teal" />
          HOW IT WORKS
        </div>
        <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight tracking-tight text-white lg:text-5xl">
          Our 5-Step Process
        </h2>
      </div>

      <div className="servicesScroll mt-16 snap-x snap-mandatory overflow-x-auto pb-4 lg:overflow-visible lg:pb-0">
        <div className="relative flex min-w-max gap-10 px-2 sm:gap-14 lg:min-w-0 lg:justify-between lg:gap-6">
          {/* static connecting line */}
          <div className="pointer-events-none absolute left-11 right-11 top-9 h-px bg-white/10" />

          {/* traveling pulse, confined to the same track as the line */}
          <div className="pointer-events-none absolute left-11 right-11 top-9 h-px overflow-visible">
            <span className="servicesPulseDot absolute top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-teal shadow-glow" />
          </div>

          {STEPS.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className="relative z-10 flex w-40 flex-shrink-0 snap-center flex-col items-center text-center sm:w-48 lg:w-40"
            >
              <div className="relative flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full border border-white/10 bg-base-900 shadow-sm">
                <Icon size={26} className="text-accent-teal" />
                <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-brand-gradient text-[11px] font-bold text-white shadow-glow">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-5 font-display text-base font-semibold text-white">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-3 text-center text-xs text-white/40 lg:hidden">
        Swipe to see all 5 steps →
      </p>
    </section>
  );
}
