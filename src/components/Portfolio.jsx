import { useEffect, useRef, useState, useCallback } from "react";
import {
  Search,
  X,
  ChevronLeft,
  ChevronRight,
  AlertCircle,
  Lightbulb,
  TrendingUp,
} from "lucide-react";

import { PROJECTS, FEATURED_PROJECTS } from "../data/projects.js";

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

function ProjectCard({ project, onOpen, reducedMotion }) {
  const cardRef = useRef(null);
  const wrapRef = useRef(null);
  const imgRef = useRef(null);
  const glowRef = useRef(null);

  function handleCardMouseMove(e) {
    if (reducedMotion) return;
    const card = cardRef.current;
    const glow = glowRef.current;
    if (!card || !glow) return;
    const rect = card.getBoundingClientRect();
    const px = ((e.clientX - rect.left) / rect.width) * 100;
    const py = ((e.clientY - rect.top) / rect.height) * 100;
    glow.style.background = `radial-gradient(280px circle at ${px}% ${py}%, rgba(45,212,191,0.16), transparent 70%)`;
    glow.style.opacity = "1";
  }

  function handleCardMouseLeave() {
    const glow = glowRef.current;
    if (glow) glow.style.opacity = "0";
  }

  function handleMouseMove(e) {
    if (reducedMotion) return;
    const wrap = wrapRef.current;
    const img = imgRef.current;
    if (!wrap || !img) return;
    const rect = wrap.getBoundingClientRect();
    const px = ((e.clientX - rect.left) / rect.width) * 100;
    const py = ((e.clientY - rect.top) / rect.height) * 100;
    img.style.transformOrigin = `${px}% ${py}%`;
    img.style.transform = "scale(1.5)";
  }

  function handleMouseLeave() {
    const img = imgRef.current;
    if (!img) return;
    img.style.transform = "scale(1)";
  }

  return (
    <button
      ref={cardRef}
      type="button"
      onClick={() => onOpen(project)}
      onMouseMove={handleCardMouseMove}
      onMouseLeave={handleCardMouseLeave}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-light-border bg-light-surface text-left shadow-sm transition-colors hover:border-accent-teal/40 dark:border-white/10 dark:bg-base-900/60 dark:shadow-none"
    >
      <div
        ref={glowRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300"
      />
      <div
        ref={wrapRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative aspect-video w-full cursor-zoom-in overflow-hidden bg-black/40"
      >
        <img
          ref={imgRef}
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-300 ease-out"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-200 group-hover:bg-black/20 group-hover:opacity-100">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-black shadow-lg">
            <Search size={18} />
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-accent-teal/10 px-2.5 py-0.5 text-[10px] font-bold tracking-wide text-accent-teal"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-sm font-semibold text-light-text dark:text-white">
          {project.title}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-xs text-light-muted dark:text-white/55">
          {project.summary ?? project.pain}
        </p>
      </div>
    </button>
  );
}

function CaseStudyModal({ project, onClose, onPrev, onNext }) {
  const dialogRef = useRef(null);
  const [expanded, setExpanded] = useState(false);
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    function handleKey(e) {
      if (e.key === "Tab") {
        const controls = dialogRef.current?.querySelectorAll('button, a[href], [tabindex="0"]');
        const first = controls?.[0];
        const last = controls?.[controls.length - 1];
        if (e.shiftKey && (document.activeElement === first || document.activeElement === dialogRef.current)) {
          e.preventDefault(); last?.focus();
        } else if (!e.shiftKey && (document.activeElement === last || document.activeElement === dialogRef.current)) {
          e.preventDefault(); first?.focus();
        }
      }
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    }
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, [onClose, onPrev, onNext]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        className={`relative flex w-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-base-900 shadow-2xl outline-none ${expanded ? "h-[92dvh] max-w-[1600px]" : "max-h-[88dvh] max-w-3xl"}`}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70"
        >
          <X size={18} />
        </button>

        <button
          type="button"
          onClick={onPrev}
          aria-label="Previous project"
          className="absolute left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          type="button"
          onClick={onNext}
          aria-label="Next project"
          className="absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70"
        >
          <ChevronRight size={18} />
        </button>

        <div className="flex shrink-0 flex-wrap items-center gap-3 border-b border-white/10 py-4 pl-5 pr-16 text-sm text-white">
          <button type="button" onClick={() => { setExpanded((value) => !value); setZoomed(false); }} className="rounded-lg border border-white/20 px-3 py-2 hover:bg-white/10">
            {expanded ? "Back to case study" : "Enlarge screenshot"}
          </button>
          {expanded && <button type="button" onClick={() => setZoomed((value) => !value)} className="rounded-lg border border-white/20 px-3 py-2 hover:bg-white/10">{zoomed ? "Fit image" : "Zoom to full size"}</button>}
          <a href={project.image} target="_blank" rel="noopener noreferrer" className="text-white/80 underline underline-offset-4">Open original image</a>
        </div>
        <div className={`min-h-0 overflow-auto ${expanded ? "flex-1" : ""}`}>
          <div className={expanded ? "flex min-h-full min-w-full items-start justify-start bg-black" : "aspect-video w-full bg-black"}>
            <img
              src={project.image}
              alt={project.title}
              className={expanded ? (zoomed ? "max-w-none shrink-0" : "h-full max-h-[72dvh] w-full object-contain") : "h-full w-full object-contain"}
            />
          </div>

          <div className={`p-6 sm:p-8 ${expanded ? "hidden" : ""}`}>
            <div className="mb-2 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-accent-teal/10 px-2.5 py-0.5 text-[10px] font-bold tracking-wide text-accent-teal"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="font-display text-2xl font-extrabold text-white">
              {project.title}
            </h3>

            <div className="mt-6 grid gap-5">
              <div className="flex gap-3">
                <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-red-500/15 text-red-400">
                  <AlertCircle size={16} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wide text-white/50">Pain</div>
                  <p className="mt-1 text-sm leading-relaxed text-white/80">{project.pain}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-amber-500/15 text-amber-400">
                  <Lightbulb size={16} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wide text-white/50">Solution</div>
                  <p className="mt-1 text-sm leading-relaxed text-white/80">{project.solution}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-accent-teal/15 text-accent-teal">
                  <TrendingUp size={16} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wide text-white/50">Benefit</div>
                  <p className="mt-1 text-sm leading-relaxed text-white/80">{project.benefit}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Portfolio({ featured = false }) {
  const projects = featured ? FEATURED_PROJECTS : PROJECTS;
  const [activeIndex, setActiveIndex] = useState(null);
  const reducedMotion = useReducedMotion();

  const close = useCallback(() => setActiveIndex(null), []);
  const prev = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i - 1 + projects.length) % projects.length)),
    [projects]
  );
  const next = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i + 1) % projects.length)),
    [projects]
  );

  const activeProject = activeIndex === null ? null : projects[activeIndex];

  return (
    <section id={featured ? "featured-work" : "portfolio"} className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-0 top-0 h-[24rem] w-[24rem] rounded-full bg-accent-teal/10 opacity-70 blur-[120px] dark:opacity-100" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-light-border bg-light-surface px-4 py-1.5 text-xs font-medium tracking-wide text-light-muted shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-white/80 dark:shadow-none">
            <Search size={14} className="text-accent-teal" />
            {featured ? "FEATURED PROJECTS" : "SELECTED WORK"}
          </div>
          <h2 className="mt-6 font-display text-4xl font-extrabold leading-tight tracking-tight text-light-text dark:text-white lg:text-5xl">
            {featured ? "Practical automation." : "Workflows I’ve"}{" "}
            <span className="bg-brand-gradient bg-clip-text text-transparent">{featured ? "See it in action." : "actually built"}</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-light-muted dark:text-white/60">
            {featured ? "Explore three examples of how I connect tools to handle bookings, enquiries, and customer conversations. Select a project for the details." : "Explore all nine projects. Select a card to read the problem, approach, and benefit, or enlarge the workflow screenshot."}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              reducedMotion={reducedMotion}
              onOpen={() => setActiveIndex(i)}
            />
          ))}

        </div>

        {featured && <div className="mt-8 text-center"><a href="#portfolio" className="inline-flex rounded-full border border-light-border px-6 py-3 text-sm font-semibold text-light-text hover:bg-light-surface dark:border-white/20 dark:text-white dark:hover:bg-white/5">Explore all {PROJECTS.length} projects →</a></div>}

        {activeProject && (
          <CaseStudyModal project={activeProject} onClose={close} onPrev={prev} onNext={next} />
        )}
      </div>
    </section>
  );
}
