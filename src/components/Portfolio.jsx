import ProjectHighlights from "./ProjectHighlights.jsx";
import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import {
  Search,
  RotateCcw,
  ShieldAlert,
  X,
  ChevronLeft,
  ChevronRight,
  AlertCircle,
  Lightbulb,
  TrendingUp,
} from "lucide-react";

import FeaturedVideoCard from "./FeaturedVideoCard.jsx";
import FeaturedVideoDialog from "./FeaturedVideoDialog.jsx";
import FeaturedWorkflowPreview from "./FeaturedWorkflowPreview.jsx";

import { PROJECTS, FEATURED_PROJECTS, PROJECT_CATEGORIES, getCategoryAnchor, getCategoryFromHash } from "../data/projects.js";

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

function ProjectCard({ project, onOpen, reducedMotion, featuredIndex }) {
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
      className="group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-light-border bg-light-surface text-left shadow-sm transition-colors hover:border-accent-teal/40 dark:border-white/10 dark:bg-base-900/60 dark:shadow-none"
    >
      <div
        ref={glowRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300"
      />
      {featuredIndex !== undefined ? <FeaturedWorkflowPreview index={featuredIndex} /> : (
      <div
        ref={wrapRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative aspect-video w-full cursor-zoom-in overflow-hidden bg-black/40"
      >
        {project.image ? (
          <>
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
          </>
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-3 bg-light-surfaceMuted p-5 text-center dark:bg-base-850">
            <ShieldAlert size={44} aria-hidden="true" className="text-accent-tealDeep dark:text-accent-teal" />
            <span className="font-display text-sm font-semibold text-light-text dark:text-white">Error logging &amp; email alerts</span>
          </div>
        )}
      </div>
      )}
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
        <ProjectHighlights project={project} />
        <span className="mt-auto block pt-5 text-xs font-semibold text-accent-tealDeep dark:text-accent-tealLight">View Case Study →</span>
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

  useEffect(() => {
    setExpanded(false);
    setZoomed(false);
  }, [project]);

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

        {project.image && <div className="flex shrink-0 flex-wrap items-center gap-3 border-b border-white/10 py-4 pl-5 pr-16 text-sm text-white">
          <button type="button" onClick={() => { setExpanded((value) => !value); setZoomed(false); }} className="rounded-lg border border-white/20 px-3 py-2 hover:bg-white/10">
            {expanded ? "Back to case study" : "Enlarge screenshot"}
          </button>
          {expanded && <button type="button" onClick={() => setZoomed((value) => !value)} className="rounded-lg border border-white/20 px-3 py-2 hover:bg-white/10">{zoomed ? "Fit image" : "Zoom to full size"}</button>}
          <a href={project.image} target="_blank" rel="noopener noreferrer" className="text-white/80 underline underline-offset-4">Open original image</a>
        </div>}
        <div className={`min-h-0 overflow-auto ${expanded ? "flex-1" : ""}`}>
          {project.image ? <div className={expanded ? "flex min-h-full min-w-full items-start justify-start bg-black" : "aspect-video w-full bg-black"}>
            <img
              src={project.image}
              alt={project.title}
              className={expanded ? (zoomed ? "max-w-none shrink-0" : "h-full max-h-[72dvh] w-full object-contain") : "h-full w-full object-contain"}
            />
          </div> : <div className="flex justify-center bg-base-850 py-10"><ShieldAlert size={56} aria-hidden="true" className="text-accent-teal" /></div>}

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

            {project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-full bg-accent-tealDeep px-5 py-3 text-sm font-semibold text-white">{project.demoLabel || "Open website sample"} ↗</a>}
            {project.walkthrough && <a href={project.walkthrough.src} target="_blank" rel="noopener noreferrer" className="ml-3 mt-5 inline-flex rounded-full border border-[#c99e4f] px-5 py-3 text-sm font-semibold text-[#f3d18d]">Watch Walkthrough ↗</a>}
            {project.status && <p className="mt-5 rounded-xl border border-[#c99e4f]/50 bg-[#173f31] p-4 text-sm text-[#f7f7ef]">{project.status}</p>}
            {project.features && <section className="mt-6 rounded-xl bg-[#f7f7ef] p-5 text-[#203e32]"><h4 className="font-semibold">Main features</h4><ul className="mt-3 list-disc space-y-2 pl-5 text-sm">{project.features.map(feature => <li key={feature}>{feature}</li>)}</ul><h4 className="mt-5 font-semibold">Platforms</h4><p className="mt-2 text-sm">{project.platforms}</p><h4 className="mt-5 font-semibold">Technology</h4><p className="mt-2 text-sm">{project.technology}</p></section>}

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
  const sectionRef = useRef(null);
  const [videoIndex, setVideoIndex] = useState(null);
  const featuredStyle = typeof window !== "undefined" && new URLSearchParams(window.location.search).get("featuredStyle") === "neon" ? "neon" : "video";
  const [animationKey, setAnimationKey] = useState(0);
  useEffect(() => {
    if (!featured) return;
    const cards = sectionRef.current.querySelectorAll("[data-featured-card]");
    if (!("IntersectionObserver" in window)) {
      cards.forEach(card => card.classList.add("featured-revealed"));
      return;
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("featured-revealed");
          observer.unobserve(entry.target);
        }
      });
    }, {threshold: 0.15});
    cards.forEach(card => observer.observe(card));
    return () => observer.disconnect();
  }, [featured, animationKey]);
  const [category, setCategory] = useState(() => typeof window === "undefined" ? "All" : getCategoryFromHash(window.location.hash));
  const projects = useMemo(() => featured ? FEATURED_PROJECTS : category === "All" ? PROJECTS : PROJECTS.filter((project) => project.category === category), [featured, category]);
  const [activeIndex, setActiveIndex] = useState(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (featured) return;
    const syncCategory = () => {
      setActiveIndex(null);
      setCategory(getCategoryFromHash(window.location.hash));
    };
    window.addEventListener("hashchange", syncCategory);
    return () => window.removeEventListener("hashchange", syncCategory);
  }, [featured]);

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
    <section ref={sectionRef} id={featured ? "featured-work" : "portfolio"} className="relative overflow-hidden">
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
            {featured ? "Practical automation." : "Projects I’ve"}{" "}
            <span className="bg-brand-gradient bg-clip-text text-transparent">{featured ? "See it in action." : "actually built"}</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-light-muted dark:text-white/60">
            {featured ? (featuredStyle === "video" ? "Watch project walkthroughs or explore the case studies, including MealPilot, a meal-distribution management app." : "Explore selected automation and app projects. Select a project for its case study.") : `Explore all ${PROJECTS.length} projects. See the pain, solution, and benefit at a glance. Select View Case Study for the full explanation.`}
          </p>
        </div>

        {!featured && (
          <div className="mt-10">
            <div role="group" aria-label="Filter projects by category" className="flex flex-wrap justify-center gap-2">
              {["All", ...PROJECT_CATEGORIES].map((name) => (
                <button key={name} id={name === "All" ? undefined : getCategoryAnchor(name)} type="button" aria-pressed={category === name} aria-controls="portfolio-projects" onClick={() => {
                  setActiveIndex(null);
                  setCategory(name);
                  window.history.replaceState(null, "", `#${getCategoryAnchor(name)}`);
                }} className={`scroll-mt-28 rounded-full border px-4 py-2.5 text-sm font-medium transition-colors ${category === name ? "border-accent-tealDeep bg-accent-tealDeep text-white" : "border-light-border bg-light-surface text-light-muted hover:border-accent-tealDeep dark:border-white/15 dark:bg-base-900 dark:text-white/75 dark:hover:border-accent-teal"}`}>
                  {name} <span className="ml-1 opacity-75">({name === "All" ? PROJECTS.length : PROJECTS.filter((project) => project.category === name).length})</span>
                </button>
              ))}
            </div>
            <p role="status" aria-live="polite" aria-atomic="true" className="mt-5 text-center text-sm text-light-muted dark:text-white/65">Showing {projects.length} {projects.length === 1 ? "project" : "projects"}{category === "All" ? " across all categories" : ` in ${category}`}</p>
          </div>
        )}
        {featured && <div className="featured-replay mt-7 flex justify-center"><button type="button" onClick={() => setAnimationKey(value => value + 1)} className="inline-flex min-h-11 items-center gap-2 rounded-full border border-light-border px-4 py-2 text-xs font-medium text-light-muted hover:bg-light-surface dark:border-white/15 dark:text-white/65 dark:hover:bg-white/5"><RotateCcw size={13} aria-hidden="true" /> {featuredStyle === "video" ? "Replay card reveals" : "Replay workflow animations"}</button></div>}
        <div key={featured ? animationKey : "portfolio-grid"} id={featured ? undefined : "portfolio-projects"} className={`mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 ${featured ? "lg:grid-cols-2" : "lg:grid-cols-3"}`}>
          {projects.map((project, i) => {
            const card = featured && (featuredStyle === "video" || project.walkthrough || i >= 3) ? <FeaturedVideoCard key={project.title} project={project} index={i} onWatch={() => setVideoIndex(i)} onRead={() => setActiveIndex(i)} /> : <ProjectCard key={project.title} project={project} reducedMotion={reducedMotion} featuredIndex={featured ? i : undefined} onOpen={() => setActiveIndex(i)} />;
            return featured ? <div key={project.title} data-featured-card style={{"--reveal-delay":`${i*140}ms`}}>{card}</div> : card;
          })}
        </div>

        {featured && <div className="mt-8 text-center"><a href="#portfolio" className="inline-flex rounded-full border border-light-border px-6 py-3 text-sm font-semibold text-light-text hover:bg-light-surface dark:border-white/20 dark:text-white dark:hover:bg-white/5">Explore all {PROJECTS.length} projects →</a></div>}

        {featured && videoIndex !== null && <FeaturedVideoDialog project={projects[videoIndex]} index={videoIndex} onClose={() => setVideoIndex(null)} />}

        {activeProject && (
          <CaseStudyModal project={activeProject} onClose={close} onPrev={prev} onNext={next} />
        )}
      </div>
    </section>
  );
}
