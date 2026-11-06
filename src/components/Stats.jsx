import { Clock, Workflow, Layers, FolderOpen } from "lucide-react";
import { WORKFLOWS_BUILT } from "../data/profile.js";
import { PROJECTS } from "../data/projects.js";

const platforms = new Set(
  PROJECTS.flatMap((project) => project.tags).filter((tag) =>
    ["N8N", "MAKE", "ZAPIER"].includes(tag)
  )
);

const STATS = [
  { icon: Clock, value: "Since 2019", label: "Remote operations experience" },
  { icon: Workflow, value: WORKFLOWS_BUILT, label: "Workflows built" },
  { icon: FolderOpen, value: PROJECTS.length, label: "Projects showcased" },
  { icon: Layers, value: platforms.size, label: "Automation platforms represented" },
];

export default function Stats() {
  return (
    <section id="stats" aria-label="Experience and portfolio at a glance" className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
      <div className="rounded-3xl border border-light-border bg-light-surface p-8 shadow-sm dark:border-white/10 dark:bg-base-900/60 dark:shadow-none lg:p-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-light-border bg-light-surfaceMuted dark:border-white/10 dark:bg-white/5">
                <Icon size={20} className="text-accent-teal" />
              </div>
              <p className="mt-4 font-display text-3xl font-extrabold text-light-text dark:text-white">{value}</p>
              <p className="mt-1 text-sm text-light-muted dark:text-white/70">{label}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 border-t border-light-border pt-4 text-xs leading-relaxed text-light-muted dark:border-white/10 dark:text-white/60">
          I’ve built {WORKFLOWS_BUILT} workflows; {PROJECTS.length} selected projects are showcased here. The showcased work spans n8n, Make, and Zapier.
        </p>
      </div>
    </section>
  );
}
