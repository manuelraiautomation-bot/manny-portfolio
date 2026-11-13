export default function ProjectHighlights({ project }) {
  const labels = [["pain", "Pain", "#b45309"], ["solution", "Solution", "#0f766e"], ["benefit", "Benefit", "#4d7c0f"]];
  return (
    <dl className="mt-4 space-y-3 text-left">
      {labels.map(([key, label, color]) => (
        <div key={key}>
          <dt className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wide text-light-text dark:text-white/85" style={project.brand === "lanie" ? { color: "#173f31" } : undefined}>
            <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: color }} />{label}
          </dt>
          <dd className="mt-1 text-[13px] leading-relaxed text-light-muted dark:text-white/70" style={project.brand === "lanie" ? { color: "#4a6251" } : undefined}>{project.highlights[key]}</dd>
        </div>
      ))}
    </dl>
  );
}
