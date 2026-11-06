"use client";

import { useState } from "react";
import { Sparkles, MessagesSquare, Palette, Pause, Play } from "lucide-react";
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

function SkillCard({ name, Icon, initials, color, bg }) {
  return (
    <li className="flex w-40 shrink-0 flex-col items-center gap-3 rounded-2xl border border-light-border bg-light-surface p-5 text-center shadow-sm dark:border-white/10 dark:bg-base-900/60">
      <div aria-hidden="true" className="flex h-12 w-12 items-center justify-center rounded-xl" style={{ backgroundColor: bg ?? `${color}1A`, color }}>
        {initials ? <span className="text-[11px] font-bold">{initials}</span> : <Icon size={24} />}
      </div>
      <span className="text-xs font-medium leading-tight text-light-muted dark:text-white/80">{name}</span>
    </li>
  );
}

export default function Skills() {
  const [paused, setPaused] = useState(false);

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

        <div className="skills-marquee mt-10 overflow-hidden py-4" data-paused={paused}>
          <div className="skills-track flex w-max">
            {[false, true].map((duplicate) => (
              <ul key={String(duplicate)} aria-label={duplicate ? undefined : "Tools and platforms"} aria-hidden={duplicate || undefined} className={`skills-group flex shrink-0 gap-4 pr-4 ${duplicate ? "skills-duplicate" : ""}`}>
                {TOOLS.map((tool) => <SkillCard key={tool.name} {...tool} />)}
              </ul>
            ))}
          </div>
        </div>
        <div className="skills-motion-control mt-4 flex justify-center">
          <button type="button" onClick={() => setPaused((value) => !value)} aria-label={paused ? "Play skill animation" : "Pause skill animation"} className="inline-flex items-center gap-2 rounded-full border border-light-border px-4 py-2 text-xs font-medium text-light-muted hover:bg-light-surface dark:border-white/15 dark:text-white/70 dark:hover:bg-white/5">
            {paused ? <Play size={14} aria-hidden="true" /> : <Pause size={14} aria-hidden="true" />}
            {paused ? "Resume scrolling" : "Pause scrolling"}
          </button>
        </div>
      </div>
    </section>
  );
}
