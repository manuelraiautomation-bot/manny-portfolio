"use client";

import { useEffect, useRef, useState } from "react";
import { Clock, Workflow, Users, TrendingUp } from "lucide-react";

const STATS = [
  { icon: Clock, value: "7+", label: "Years of Experience" },
  { icon: Workflow, value: "10+", label: "Workflows Delivered" },
  { icon: Users, value: "5+", label: "Businesses Supported" },
  { icon: TrendingUp, value: "95%", label: "Client Satisfaction" },
];

const DURATION = 1600; // ms

function easeOutExpo(t) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

// "95%" -> { prefix: "", number: 95, suffix: "%" }; "7+" -> { number: 7, suffix: "+" }
function parseValue(raw) {
  const match = raw.match(/^([^\d]*)(\d+(?:\.\d+)?)([^\d]*)$/);
  if (!match) return { prefix: "", number: 0, suffix: raw, decimals: 0 };
  const [, prefix, numStr, suffix] = match;
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
  return { prefix, number: parseFloat(numStr), suffix, decimals };
}

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e) => setReduced(e.matches);
    mq.addEventListener?.("change", handler);
    return () => mq.removeEventListener?.("change", handler);
  }, []);
  return reduced;
}

function CountUpValue({ value, active, reducedMotion }) {
  const { prefix, number, suffix, decimals } = parseValue(value);
  const [display, setDisplay] = useState(reducedMotion ? number : 0);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!active) return;
    if (reducedMotion) {
      setDisplay(number);
      return;
    }
    const start = performance.now();
    function tick(now) {
      const elapsed = now - start;
      const t = Math.min(elapsed / DURATION, 1);
      const eased = easeOutExpo(t);
      setDisplay(number * eased);
      if (t < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setDisplay(number);
      }
    }
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, reducedMotion]);

  const shown = decimals > 0 ? display.toFixed(decimals) : Math.round(display);

  return (
    <>
      {prefix}
      {shown}
      {suffix}
    </>
  );
}

export default function Stats() {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.35 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats" ref={sectionRef} className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
      <div className="rounded-3xl border border-light-border bg-light-surface p-8 shadow-sm dark:border-white/10 dark:bg-base-900/60 dark:shadow-none lg:p-10">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {STATS.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-light-border bg-light-surfaceMuted dark:border-white/10 dark:bg-white/5">
                <Icon size={20} className="text-accent-teal" />
              </div>
              <p className="mt-4 font-display text-3xl font-extrabold text-light-text dark:text-white lg:text-4xl">
                <CountUpValue value={value} active={active} reducedMotion={reducedMotion} />
              </p>
              <p className="mt-1 text-sm text-light-muted dark:text-white/50">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
