"use client";

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

/* ---------------------------------------------------------
   ASSET NOTE:
   Place your 7 screenshots in /public/images/portfolio/ using
   the filenames below (rename as needed to match, or edit the
   `image` paths to match your actual filenames).
--------------------------------------------------------- */

const PROJECTS = [
  {
    title: "AI Agent for Facebook",
    tags: ["N8N", "AI AGENT"],
    image: "/images/portfolio/ai-agent-facebook.png",
    pain: "Businesses running Facebook pages were missing comments and messages during off hours, losing warm leads to slow response times.",
    solution:
      "I built an n8n AI agent that reads incoming messages, references a knowledge document held in memory, and replies automatically through the Facebook Graph API in real time.",
    benefit:
      "Response time dropped from hours to seconds, and the page now stays responsive 24/7 without hiring extra support staff.",
  },
  {
    title: "AI Content Repurposing",
    tags: ["ZAPIER", "CONTENT AI"],
    image: "/images/portfolio/ai-content-repurposing.png",
    pain: "A single recorded video was going unused after posting once — no blog content, no LinkedIn or Facebook follow-up.",
    solution:
      "I built a Zapier automation that detects new videos in Google Drive, transcribes them with AI, generates two blog posts, then auto-publishes to LinkedIn and Facebook Pages through parallel paths.",
    benefit:
      "One video now produces multiple ready-to-publish pieces of content automatically, multiplying reach without extra editing work.",
  },
  {
    title: "AI Facebook Messenger Knowledge Assistant",
    tags: ["N8N", "SUPPORT AI"],
    image: "/images/portfolio/ai-messenger-knowledge-assistant.png",
    pain: "Support was answering the same FAQs on repeat in Messenger, with no fallback if the primary AI model went down.",
    solution:
      "I built an n8n support agent that pulls answers from a knowledge base, uses Gemini 2.5 as the primary model with a Groq Llama backup for redundancy, and keeps conversation memory across messages.",
    benefit:
      "Customers get instant, accurate answers around the clock, with near-zero downtime thanks to automatic model failover.",
  },
  {
    title: "AI Job Scraper + Resume Optimizer",
    tags: ["N8N", "AI AUTOMATION"],
    image: "/images/portfolio/ai-job-scraper-resume-optimizer.png",
    pain: "Manually searching job boards and tailoring a resume and proposal for every listing was eating hours every week.",
    solution:
      "I built a Slack-triggered automation that searches job listings, validates matches with AI, then generates a tailored resume and proposal draft for each one.",
    benefit:
      "What used to take an hour per application now happens in minutes, with drafts delivered straight to Slack and Gmail.",
  },
  {
    title: "Email Attachment Sorting, Log & Summary",
    tags: ["MAKE", "GEMINI"],
    image: "/images/portfolio/email-attachment-sorting.png",
    pain: "Important email attachments were getting buried in an inbox with no organized record of what arrived or what it contained.",
    solution:
      "I built a Make.com automation that detects new attachments, uses Gemini to read and summarize each file, uploads it to Google Drive, logs it in a spreadsheet, and emails a summary.",
    benefit:
      "Every attachment is now automatically filed, searchable, and summarized — no more digging through inboxes.",
  },
  {
    title: "Xero Bank Statement to Asana Automation",
    tags: ["MAKE", "FINANCE OPS"],
    image: "/images/portfolio/xero-asana-automation.png",
    pain: "Bookkeeping data was split across Xero, Asana, and spreadsheets, requiring manual entry to keep everything in sync.",
    solution:
      "I built a Make.com integration that watches completed Asana tasks, pulls the relevant Xero data through its API, and routes it into Google Sheets and Asana attachments automatically.",
    benefit:
      "Financial data now stays in sync across all three tools without manual re-entry, cutting bookkeeping admin time significantly.",
  },
  {
    title: "YT Shorts & FB Reels Video Generation",
    tags: ["N8N", "VIDEO AI"],
    image: "/images/portfolio/yt-shorts-fb-reels-video-generation.png",
    pain: "Producing daily short-form video for YouTube Shorts and Facebook Reels was too time-consuming to sustain manually.",
    solution:
      "I built a fully automated n8n pipeline that generates a video prompt with AI, calls a video generation API, waits for rendering to finish, then uploads the finished video straight to Facebook and YouTube.",
    benefit:
      "A content channel now publishes new short-form video on a schedule, with zero manual editing or uploading.",
  },
];

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
  const wrapRef = useRef(null);
  const imgRef = useRef(null);

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
      type="button"
      onClick={() => onOpen(project)}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-light-border bg-light-surface text-left shadow-sm transition-colors hover:border-light-text/20 dark:border-white/10 dark:bg-base-900/60 dark:shadow-none dark:hover:border-white/20"
    >
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
          {project.pain}
        </p>
      </div>
    </button>
  );
}

function CaseStudyModal({ project, onClose, onPrev, onNext }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    }
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
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
        className="relative flex max-h-[88vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-base-900 shadow-2xl outline-none"
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

        <div className="overflow-y-auto">
          <div className="aspect-video w-full bg-black">
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-contain"
            />
          </div>

          <div className="p-6 sm:p-8">
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

export default function SelectedWork() {
  const [activeIndex, setActiveIndex] = useState(null);
  const reducedMotion = useReducedMotion();

  const close = useCallback(() => setActiveIndex(null), []);
  const prev = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i - 1 + PROJECTS.length) % PROJECTS.length)),
    []
  );
  const next = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i + 1) % PROJECTS.length)),
    []
  );

  const activeProject = activeIndex === null ? null : PROJECTS[activeIndex];

  return (
    <section id="selected-work" className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-light-border bg-light-surface px-4 py-1.5 text-xs font-medium tracking-wide text-light-muted shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-white/80 dark:shadow-none">
          <Search size={14} className="text-accent-teal" />
          SELECTED WORK
        </div>
        <h2 className="mt-6 font-display text-4xl font-extrabold leading-tight tracking-tight text-light-text dark:text-white lg:text-5xl">
          Workflows I&rsquo;ve{" "}
          <span className="bg-brand-gradient bg-clip-text text-transparent">actually built</span>
        </h2>
        <p className="mt-5 text-base leading-relaxed text-light-muted dark:text-white/60">
          Real automations, real problems solved. Click any screenshot to see the pain point, the build, and the result.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.title}
            project={project}
            reducedMotion={reducedMotion}
            onOpen={() => setActiveIndex(i)}
          />
        ))}
      </div>

      {activeProject && (
        <CaseStudyModal project={activeProject} onClose={close} onPrev={prev} onNext={next} />
      )}
    </section>
  );
}
