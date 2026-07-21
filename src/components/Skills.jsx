"use client";

import { useEffect, useRef, useState } from "react";
import { Sparkles, MessagesSquare, Palette } from "lucide-react";
import {
  SiN8N,
  SiMake,
  SiZapier,
  SiClaude,
  SiGooglegemini,
  SiAirtable,
  SiGooglesheets,
  SiNotion,
  SiTelegram,
  SiGmail,
  SiGoogle,
} from "react-icons/si";

const TOOLS = [
  { name: "n8n", Icon: SiN8N, color: "#EA4B71" },
  { name: "Make", Icon: SiMake, color: "#6D00CC" },
  { name: "Zapier", Icon: SiZapier, color: "#FF4F00" },
  { name: "GoHighLevel", initials: "GHL", color: "#0EA5E9" },
  { name: "OpenAI", Icon: Sparkles, color: "#10A37F" },
  { name: "Claude", Icon: SiClaude, color: "#D97757" },
  { name: "Gemini", Icon: SiGooglegemini, color: "#8B5CF6" },
  { name: "Airtable", Icon: SiAirtable, color: "#FCB400" },
  { name: "Google Sheets", Icon: SiGooglesheets, color: "#188038" },
  { name: "Notion", Icon: SiNotion, color: "#111111", bg: "#ffffff" },
  { name: "Telegram Bot API", Icon: SiTelegram, color: "#26A5E4" },
  { name: "Slack", Icon: MessagesSquare, color: "#611F69" },
  { name: "Gmail", Icon: SiGmail, color: "#EA4335" },
  { name: "Google Workspace", Icon: SiGoogle, color: "#4285F4" },
  { name: "Canva", Icon: Palette, color: "#8B3DFF" },
];

// Max tilt angle in degrees, and how strong the glow spot is.
const MAX_TILT = 10;

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

function SkillCard({ name, Icon, initials, color, bg }) {
  const cardRef = useRef(null);
  const glowRef = useRef(null);
  const reducedMotion = useReducedMotion();

  function handleMouseMove(e) {
    if (reducedMotion) return;
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const px = ((e.clientX - rect.left) / rect.width) * 100;
    const py = ((e.clientY - rect.top) / rect.height) * 100;

    const rotateY = ((px - 50) / 50) * MAX_TILT;
    const rotateX = ((50 - py) / 50) * MAX_TILT;

    card.style.transition = "transform 0.05s linear";
    card.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;

    if (glowRef.current) {
      glowRef.current.style.background = `radial-gradient(circle at ${px}% ${py}%, ${color}33, transparent 65%)`;
      glowRef.current.style.opacity = "1";
    }
  }

  function handleMouseLeave() {
    const card = cardRef.current;
    if (!card) return;
    card.style.transition = "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)";
    card.style.transform = "perspective(700px) rotateX(0deg) rotateY(0deg) scale(1)";
    if (glowRef.current) {
      glowRef.current.style.opacity = "0";
    }
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative flex flex-col items-center gap-3 overflow-hidden rounded-2xl border border-light-border bg-light-surface p-5 text-center shadow-sm will-change-transform dark:border-white/10 dark:bg-base-900/60 dark:shadow-none dark:hover:border-white/20"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* cursor-tracking glow */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300"
        aria-hidden="true"
      />

      {/* subtle static ring that appears on hover, reduced-motion friendly */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 ring-1 ring-inset transition-opacity duration-300 group-hover:opacity-100"
        style={{ boxShadow: `inset 0 0 0 1px ${color}55`, ["--tw-ring-color"]: `${color}55` }}
        aria-hidden="true"
      />

      <div
        className="relative flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: bg ?? `${color}1A`, color, transform: "translateZ(30px)" }}
      >
        {initials ? (
          <span className="text-[11px] font-bold tracking-tight">{initials}</span>
        ) : (
          <Icon size={22} />
        )}
      </div>
      <span
        className="relative text-xs font-medium leading-tight text-light-muted dark:text-white/70"
        style={{ transform: "translateZ(20px)" }}
      >
        {name}
      </span>
    </div>
  );
}

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

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {TOOLS.map((tool) => (
            <SkillCard key={tool.name} {...tool} />
          ))}
        </div>
      </div>
    </section>
  );
}
