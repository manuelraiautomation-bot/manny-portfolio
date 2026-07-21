import { Clock, Workflow, Users, TrendingUp } from "lucide-react";

const STATS = [
  { icon: Clock, value: "7+", label: "Years of Experience" },
  { icon: Workflow, value: "40+", label: "Workflows Delivered" },
  { icon: Users, value: "20+", label: "Businesses Supported" },
  { icon: TrendingUp, value: "95%", label: "Client Satisfaction" },
];

export default function Stats() {
  return (
    <section id="stats" className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
      <div className="rounded-3xl border border-light-border bg-light-surface p-8 shadow-sm dark:border-white/10 dark:bg-base-900/60 dark:shadow-none lg:p-10">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {STATS.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-light-border bg-light-surfaceMuted dark:border-white/10 dark:bg-white/5">
                <Icon size={20} className="text-accent-teal" />
              </div>
              <p className="mt-4 font-display text-3xl font-extrabold text-light-text dark:text-white lg:text-4xl">
                {value}
              </p>
              <p className="mt-1 text-sm text-light-muted dark:text-white/50">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
