import { CASE_STUDIES } from "../data/case-studies.js";

export default function ProjectCaseStudy({ project }) {
  const study = CASE_STUDIES[project.title];
  const heading = "font-display text-base font-semibold text-white";
  const paragraph = "mt-2 text-sm leading-7 text-white/80";
  return (
    <div className="mt-7 space-y-7 text-left">
      <section><h4 className={heading}>Project overview</h4><p className={paragraph}>{study.overview}</p><p className="mt-3 text-sm leading-6 text-white/65"><strong className="text-white/85">Who it is for:</strong> {study.audience}</p></section>
      <section className="rounded-xl border border-white/10 bg-white/5 p-5"><h4 className={heading}>My role</h4><p className={paragraph}>{study.role}</p></section>
      <section><h4 className={heading}>Pain</h4><p className={paragraph}>{project.pain}</p></section>
      <section><h4 className={heading}>Solution</h4><p className={paragraph}>{project.solution}</p></section>
      <section><h4 className={heading}>Example workflow</h4><ol className="mt-3 list-decimal space-y-3 pl-5 text-sm leading-7 text-white/80 marker:font-bold marker:text-accent-tealLight">{study.workflow.map(step => <li className="pl-1" key={step}>{step}</li>)}</ol></section>
      <section><h4 className={heading}>Key design decisions</h4><ul className="mt-3 list-disc space-y-3 pl-5 text-sm leading-7 text-white/80 marker:text-accent-tealLight">{study.decisions.map(decision => <li key={decision}>{decision}</li>)}</ul></section>
      <section><h4 className={heading}>Benefit</h4><p className={paragraph}>{project.benefit}</p><ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-white/80 marker:text-accent-tealLight">{study.benefits.map(benefit => <li key={benefit}>{benefit}</li>)}</ul></section>
      {project.features && <details className="rounded-xl border border-[#c99e4f]/50 bg-[#173f31] p-5 text-[#f7f7ef]"><summary className="cursor-pointer font-semibold">Full feature list</summary><ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7">{project.features.map(feature => <li key={feature}>{feature}</li>)}</ul></details>}
      <section><h4 className={heading}>Technology & platforms</h4><ul aria-label="Project technology" className="mt-3 flex flex-wrap gap-2">{study.technology.map(tool => <li className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-white/80" key={tool}>{tool}</li>)}</ul>{study.platforms && <p className={paragraph}>{study.platforms}</p>}</section>
      <section><h4 className={heading}>Project status</h4><p className={paragraph}>{study.status}</p></section>
      <section><h4 className={heading}>Scope & considerations</h4><p className={paragraph}>{study.considerations}</p></section>
      {project.demoUrl && <div className="border-t border-white/10 pt-5"><a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center rounded-full bg-accent-tealDeep px-5 py-3 text-sm font-semibold text-white">{project.demoLabel || "Explore website sample"} ↗</a><p className="mt-3 text-xs leading-6 text-white/60">Explore the portfolio sample separately from this case study.</p></div>}
    </div>
  );
}
