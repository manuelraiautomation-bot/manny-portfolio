"use client";

import { useState } from "react";

/* ---------------------------------------------------------
   Manny De Guzman — AI Tech VA & Automation Specialist
   Full landing page, recreated in code from the mockup.

   NOTE ON ASSETS (read before dropping this in):
   1. Hero character: this file expects /public/manny-hero.png —
      a cropped, transparent-background PNG of just your
      illustrated character (no orbit boxes, those are coded).
      Swap the placeholder <div class="hero-avatar-fallback">
      for an <img> once you have that asset exported.
   2. "Tools I work with" strip uses text wordmarks, not the
      official OpenAI/Google/Notion/Airtable/n8n/Make logo
      artwork — swap in official SVG logo files if/when you
      have permission to use them.
   3. Testimonial avatars and project thumbnails are placeholder
      initials/icons — swap in real photos and screenshots.
--------------------------------------------------------- */

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Skills", href: "#skills" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const TOOLS = ["OpenAI", "n8n", "Make", "Google Workspace", "Notion", "Airtable"];

const ORBIT_ITEMS = [
  { label: "AI Agents", icon: "sparkle", pos: "top-left" },
  { label: "Google Workspace", icon: "grid", pos: "top-right" },
  { label: "Workflow Automation", icon: "network", pos: "mid-left" },
  { label: "Notion Systems", icon: "book", pos: "mid-right" },
  { label: "Data & API Integration", icon: "database", pos: "bottom-left" },
  { label: "Reporting & Dashboards", icon: "bars", pos: "bottom-right" },
];

const TRAITS = [
  { title: "AI Automation Specialist", desc: "Building smart workflows with AI", icon: "sparkle" },
  { title: "Workflow Architect", desc: "Design automated systems that scale", icon: "network" },
  { title: "Tech-Savvy Problem Solver", desc: "I turn complex problems into simple solutions", icon: "bulb" },
  { title: "Detail-Oriented & Reliable", desc: "Committed to accuracy, efficiency & results", icon: "shield" },
];

const SERVICES = [
  { title: "AI Chatbots & Agents", desc: "Build intelligent AI agents that engage, assist, and convert.", icon: "bot" },
  { title: "Workflow Automation", desc: "Automate repetitive tasks and connect your apps seamlessly.", icon: "network" },
  { title: "API Integrations", desc: "Integrate APIs, tools, and platforms to improve efficiency.", icon: "plug" },
  { title: "Data & Reporting", desc: "Transform data into insights with automated reports & dashboards.", icon: "bars" },
  { title: "Google Workspace Automation", desc: "Automate Sheets, Docs, Forms, Gmail & more.", icon: "grid" },
  { title: "Notion Systems", desc: "Build Notion systems for projects, docs, CRM, and more.", icon: "book" },
];

const PROJECTS = [
  {
    tags: ["AI AGENT", "CHATBOT"],
    title: "AI Customer Support Bot",
    desc: "AI chatbot for FAQs, ticketing & automated customer support.",
    icon: "bot",
  },
  {
    tags: ["AUTOMATION", "N8N"],
    title: "Lead to Client Automation",
    desc: "End-to-end workflow: Facebook Lead Ads \u2192 CRM \u2192 AI Follow-up \u2192 Email.",
    icon: "flow",
  },
  {
    tags: ["DASHBOARD", "REPORTING"],
    title: "Business Dashboard",
    desc: "Real-time analytics dashboard with automated reporting system.",
    icon: "dashboard",
  },
  {
    tags: ["AI", "DOCUMENT AI"],
    title: "AI Document Processor",
    desc: "Smart document extraction, data capture & Google Sheets integration.",
    icon: "doc",
  },
];

const STATS = [
  { value: "50+", label: "Automations Built", icon: "bolt" },
  { value: "30+", label: "Tools Integrated", icon: "rocket" },
  { value: "1000+", label: "Hours Saved for Clients", icon: "clock" },
  { value: "20+", label: "Happy Clients Worldwide", icon: "globe" },
];

const TESTIMONIALS = [
  {
    quote:
      "Manny is incredibly skilled, reliable, and easy to work with. He automated our entire workflow and saved countless hours!",
    name: "Sarah Johnson",
    role: "Founder, Digital Brand",
  },
  {
    quote:
      "The automation system he built is amazing! Our processes are now faster, smoother, and 100% reliable.",
    name: "James Carter",
    role: "CEO, Ecomm Solutions",
  },
  {
    quote:
      "Manny's attention to detail and problem-solving skills are top-notch. Highly recommended!",
    name: "Emily Davis",
    role: "Operations Manager",
  },
];

/* ---------------- icon set (original line icons, no third-party artwork) ---------------- */
function Icon({ name, size = 20 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  switch (name) {
    case "sparkle":
      return (
        <svg {...common}>
          <path d="M12 3l1.8 4.9L18.5 9.7 13.8 11.5 12 16.4 10.2 11.5 5.5 9.7 10.2 7.9 12 3z" />
          <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15z" />
        </svg>
      );
    case "network":
      return (
        <svg {...common}>
          <circle cx="5" cy="6" r="2.3" />
          <circle cx="19" cy="6" r="2.3" />
          <circle cx="12" cy="18" r="2.3" />
          <path d="M6.9 7.5L11 16.2M17.1 7.5L13 16.2M7.3 6H16.7" />
        </svg>
      );
    case "grid":
      return (
        <svg {...common}>
          <rect x="3.5" y="3.5" width="7" height="7" rx="1.3" />
          <rect x="13.5" y="3.5" width="7" height="7" rx="1.3" />
          <rect x="3.5" y="13.5" width="7" height="7" rx="1.3" />
          <rect x="13.5" y="13.5" width="7" height="7" rx="1.3" />
        </svg>
      );
    case "book":
      return (
        <svg {...common}>
          <path d="M4 4.5h9a2 2 0 012 2V20H6a2 2 0 01-2-2V4.5z" />
          <path d="M20 4.5v14a1 1 0 01-1 1h-4" />
        </svg>
      );
    case "database":
      return (
        <svg {...common}>
          <ellipse cx="12" cy="5.5" rx="7" ry="2.5" />
          <path d="M5 5.5V18c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V5.5" />
          <path d="M5 11.8c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5" />
        </svg>
      );
    case "bars":
      return (
        <svg {...common}>
          <rect x="4" y="12" width="3.4" height="8" rx="0.8" />
          <rect x="10.3" y="7" width="3.4" height="13" rx="0.8" />
          <rect x="16.6" y="3.5" width="3.4" height="16.5" rx="0.8" />
        </svg>
      );
    case "bulb":
      return (
        <svg {...common}>
          <path d="M9 18h6M10 21h4M7 10a5 5 0 1110 0c0 2-1.2 3-2 4-.6.7-1 1.3-1 2H10c0-.7-.4-1.3-1-2-.8-1-2-2-2-4z" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 3l7 3v6c0 4.5-3 7.7-7 9-4-1.3-7-4.5-7-9V6l7-3z" />
          <path d="M9 12l2 2 4-4.5" />
        </svg>
      );
    case "bot":
      return (
        <svg {...common}>
          <rect x="5" y="9" width="14" height="10" rx="2.5" />
          <path d="M12 9V5.5" />
          <circle cx="12" cy="4" r="1.3" />
          <circle cx="9" cy="14" r="1.2" fill="currentColor" stroke="none" />
          <circle cx="15" cy="14" r="1.2" fill="currentColor" stroke="none" />
          <path d="M2.5 13H5M19 13h2.5" />
        </svg>
      );
    case "plug":
      return (
        <svg {...common}>
          <path d="M9 3v5M15 3v5M7 8h10v3a5 5 0 01-10 0V8z" />
          <path d="M12 16v5" />
        </svg>
      );
    case "flow":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="5" height="5" rx="1.2" />
          <rect x="16" y="4" width="5" height="5" rx="1.2" />
          <rect x="9.5" y="15" width="5" height="5" rx="1.2" />
          <path d="M8 6.5h8M5.5 9v4.5a2 2 0 002 2H9M18.5 9v4.5a2 2 0 01-2 2H14" />
        </svg>
      );
    case "dashboard":
      return (
        <svg {...common}>
          <rect x="3.5" y="4" width="17" height="16" rx="2" />
          <path d="M8 15v-3.5M12 15V8M16 15v-6" />
        </svg>
      );
    case "doc":
      return (
        <svg {...common}>
          <path d="M7 3.5h7l4 4V20a1 1 0 01-1 1H7a1 1 0 01-1-1V4.5a1 1 0 011-1z" />
          <path d="M14 3.5V8h4M9 12h6M9 15.5h6M9 19h3.5" />
        </svg>
      );
    case "bolt":
      return (
        <svg {...common}>
          <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
        </svg>
      );
    case "rocket":
      return (
        <svg {...common}>
          <path d="M12 2.5c3 1.7 5 5 5 8.8 0 2-1 4-2.3 5.4L12 19l-2.7-2.3C8 15.3 7 13.3 7 11.3c0-3.8 2-7.1 5-8.8z" />
          <circle cx="12" cy="10.5" r="1.6" />
          <path d="M8.3 16.3L6 21l4.2-1.7M15.7 16.3L18 21l-4.2-1.7" />
        </svg>
      );
    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.3" />
          <path d="M12 7.5V12l3 2" />
        </svg>
      );
    case "globe":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.3" />
          <path d="M3.7 12h16.6M12 3.7c2.2 2.2 3.4 5.2 3.4 8.3s-1.2 6.1-3.4 8.3c-2.2-2.2-3.4-5.2-3.4-8.3S9.8 5.9 12 3.7z" />
        </svg>
      );
    case "mail":
      return (
        <svg {...common}>
          <rect x="3" y="5.5" width="18" height="13" rx="2" />
          <path d="M4 7l8 6 8-6" />
        </svg>
      );
    case "phone":
      return (
        <svg {...common}>
          <path d="M6 3.5h3L10.5 8 8 9.5c1 2.4 2.6 4 5 5l1.5-2.5 4.5 1.5v3c0 1-1 1.5-2 1.5C10.5 18 6 13.5 4.5 7c0-1 .5-2 1.5-3.5z" />
        </svg>
      );
    case "send":
      return (
        <svg {...common}>
          <path d="M21 3L11 13M21 3l-6.5 18-3.5-8-8-3.5L21 3z" />
        </svg>
      );
    case "arrow":
      return (
        <svg {...common}>
          <path d="M4 12h15M13 6l6 6-6 6" />
        </svg>
      );
    case "download":
      return (
        <svg {...common}>
          <path d="M12 3v12M7 10l5 5 5-5M4 19h16" />
        </svg>
      );
    case "star":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.4l-5.9 3.2 1.3-6.6-4.9-4.6 6.6-.8L12 2.5z" />
        </svg>
      );
    case "chevronL":
      return (
        <svg {...common}>
          <path d="M15 5l-7 7 7 7" />
        </svg>
      );
    case "chevronR":
      return (
        <svg {...common}>
          <path d="M9 5l7 7-7 7" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Home() {
  const [projectIdx, setProjectIdx] = useState(0);

  return (
    <div className="ld-root">
      <style>{`
        :root {
          --bg: #05070f;
          --panel: #0c1020;
          --panel-2: #10142a;
          --border: rgba(148,163,255,0.14);
          --text: #f2f4ff;
          --text-dim: rgba(226,230,255,0.62);
          --text-faint: rgba(226,230,255,0.4);
          --accent-a: #6d5bff;
          --accent-b: #38bdf8;
          --accent-grad: linear-gradient(90deg, #6d5bff, #38bdf8);
          --radius: 16px;
        }
        * { box-sizing: border-box; }
        .ld-root {
          background: var(--bg);
          color: var(--text);
          font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif;
          line-height: 1.5;
        }
        .ld-container { max-width: 1180px; margin: 0 auto; padding: 0 24px; }
        section { padding: 72px 0; }
        a { color: inherit; text-decoration: none; }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.06em;
          color: #b3b8ff;
          text-transform: uppercase;
          margin-bottom: 14px;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 22px;
          border-radius: 999px;
          font-size: 14.5px;
          font-weight: 600;
          border: 1px solid transparent;
          cursor: pointer;
        }
        .btn-primary { background: var(--accent-grad); color: white; box-shadow: 0 10px 30px rgba(109,91,255,0.35); }
        .btn-outline { background: transparent; border-color: rgba(255,255,255,0.18); color: var(--text); }

        /* ---------- Navbar ---------- */
        .ld-nav {
          position: sticky; top: 0; z-index: 50;
          background: rgba(5,7,15,0.85);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--border);
        }
        .ld-nav-inner { display: flex; align-items: center; justify-content: space-between; padding: 14px 24px; max-width: 1180px; margin: 0 auto; }
        .ld-brand { display: flex; align-items: center; gap: 10px; }
        .ld-brand-mark {
          width: 40px; height: 40px; border-radius: 11px;
          background: var(--accent-grad);
          display: flex; align-items: center; justify-content: center;
          font-weight: 800; font-size: 18px; color: white; flex-shrink: 0;
        }
        .ld-brand-name { font-weight: 700; font-size: 15px; }
        .ld-brand-sub { font-size: 11.5px; color: var(--text-faint); }
        .ld-nav-links { display: flex; gap: 28px; }
        .ld-nav-links a { font-size: 14px; color: var(--text-dim); }
        .ld-nav-links a.active { color: white; }
        @media (max-width: 900px) { .ld-nav-links { display: none; } }

        /* ---------- Hero ---------- */
        .hero { padding-top: 64px; }
        .hero-grid { display: grid; grid-template-columns: 1.05fr 0.95fr; gap: 48px; align-items: center; }
        @media (max-width: 900px) { .hero-grid { grid-template-columns: 1fr; } }
        .hero-title { font-size: 54px; line-height: 1.05; font-weight: 800; letter-spacing: -0.02em; margin: 0 0 18px; }
        .hero-title .accent { background: var(--accent-grad); -webkit-background-clip: text; background-clip: text; color: transparent; }
        .hero-desc { font-size: 16px; color: var(--text-dim); max-width: 480px; margin-bottom: 28px; }
        .hero-ctas { display: flex; gap: 12px; margin-bottom: 34px; flex-wrap: wrap; }
        .hero-tools-label { font-size: 12px; color: var(--text-faint); margin-bottom: 10px; }
        .hero-tools { display: flex; flex-wrap: wrap; gap: 18px; align-items: center; }
        .hero-tool { font-size: 13.5px; font-weight: 600; color: var(--text-dim); opacity: 0.85; }

        .hero-orbit-wrap { position: relative; width: 100%; aspect-ratio: 1 / 1; max-width: 480px; margin: 0 auto; }
        .hero-orbit-glow {
          position: absolute; inset: 8%;
          background: radial-gradient(circle, rgba(109,91,255,0.35), transparent 65%);
          filter: blur(24px);
        }
        .hero-avatar-fallback {
          position: absolute; inset: 14%;
          border-radius: 50%;
          background: linear-gradient(160deg, #171b34, #0a0d1c);
          border: 1px solid var(--border);
          display: flex; align-items: center; justify-content: center;
          font-size: 13px; color: var(--text-faint); text-align: center; padding: 20px;
        }
        .orbit-node {
          position: absolute;
          width: 108px;
          background: var(--panel-2);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 10px 8px;
          text-align: center;
          box-shadow: 0 12px 28px rgba(0,0,0,0.45);
        }
        .orbit-node .icon-wrap {
          width: 30px; height: 30px; border-radius: 8px;
          background: var(--accent-grad);
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 6px; color: white;
        }
        .orbit-node span { font-size: 10.5px; font-weight: 700; letter-spacing: 0.02em; color: var(--text-dim); display: block; }
        .pos-top-left { top: 2%; left: -6%; }
        .pos-top-right { top: 2%; right: -6%; }
        .pos-mid-left { top: 38%; left: -12%; }
        .pos-mid-right { top: 38%; right: -12%; }
        .pos-bottom-left { bottom: 4%; left: -6%; }
        .pos-bottom-right { bottom: 4%; right: -6%; }
        @media (max-width: 560px) {
          .orbit-node { width: 84px; padding: 8px 6px; }
          .pos-top-left, .pos-top-right { top: -2%; }
          .pos-mid-left { left: -4%; } .pos-mid-right { right: -4%; }
          .pos-bottom-left, .pos-bottom-right { bottom: -2%; }
        }

        /* ---------- Intro card ---------- */
        .intro-card {
          background: var(--panel);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 28px;
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 24px;
          align-items: center;
        }
        @media (max-width: 900px) { .intro-card { grid-template-columns: 1fr; } }
        .intro-avatar {
          width: 64px; height: 64px; border-radius: 50%;
          background: var(--accent-grad);
          display: flex; align-items: center; justify-content: center;
          font-weight: 700; font-size: 22px; color: white;
        }
        .intro-left { display: flex; gap: 16px; align-items: flex-start; }
        .intro-left h3 { margin: 0 0 6px; font-size: 17px; }
        .intro-left p { margin: 0 0 14px; font-size: 14px; color: var(--text-dim); max-width: 360px; }
        .link-more { font-size: 13.5px; font-weight: 600; display: inline-flex; gap: 6px; align-items: center; color: var(--text); }
        .trait-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }
        @media (max-width: 900px) { .trait-row { grid-template-columns: repeat(2, 1fr); } }
        .trait-card { background: var(--panel-2); border: 1px solid var(--border); border-radius: 12px; padding: 14px; }
        .trait-card .icon-wrap {
          width: 30px; height: 30px; border-radius: 8px; margin-bottom: 10px;
          background: rgba(109,91,255,0.18); color: #a9b0ff;
          display: flex; align-items: center; justify-content: center;
        }
        .trait-card h4 { margin: 0 0 4px; font-size: 13.5px; }
        .trait-card p { margin: 0; font-size: 11.5px; color: var(--text-faint); }

        /* ---------- Section headers ---------- */
        .sec-head { display: flex; align-items: flex-end; justify-content: space-between; margin-bottom: 32px; flex-wrap: wrap; gap: 12px; }
        .sec-head h2 { font-size: 30px; margin: 0; font-weight: 800; letter-spacing: -0.01em; }

        /* ---------- Services ---------- */
        .services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
        @media (max-width: 900px) { .services-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 560px) { .services-grid { grid-template-columns: 1fr; } }
        .service-card { background: var(--panel); border: 1px solid var(--border); border-radius: var(--radius); padding: 24px; transition: border-color 0.2s, transform 0.2s; }
        .service-card:hover { border-color: rgba(109,91,255,0.5); transform: translateY(-3px); }
        .service-card .icon-wrap {
          width: 44px; height: 44px; border-radius: 11px; margin-bottom: 16px;
          background: var(--accent-grad); color: white;
          display: flex; align-items: center; justify-content: center;
        }
        .service-card h3 { margin: 0 0 8px; font-size: 16px; }
        .service-card p { margin: 0; font-size: 13.5px; color: var(--text-dim); }

        /* ---------- Portfolio ---------- */
        .portfolio-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }
        @media (max-width: 980px) { .portfolio-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 560px) { .portfolio-grid { grid-template-columns: 1fr; } }
        .proj-card { background: var(--panel); border: 1px solid var(--border); border-radius: var(--radius); overflow: hidden; }
        .proj-thumb {
          height: 130px;
          background: linear-gradient(150deg, #171c38, #0a0d1c);
          display: flex; align-items: center; justify-content: center; color: #7c86ff;
          position: relative;
        }
        .proj-body { padding: 18px; }
        .proj-tags { display: flex; gap: 6px; margin-bottom: 10px; }
        .proj-tag { font-size: 9.5px; font-weight: 700; letter-spacing: 0.04em; padding: 3px 8px; border-radius: 999px; background: rgba(109,91,255,0.16); color: #b3b8ff; }
        .proj-body h3 { margin: 0 0 6px; font-size: 15px; }
        .proj-body p { margin: 0; font-size: 12.5px; color: var(--text-dim); }
        .icon-btn {
          width: 34px; height: 34px; border-radius: 999px; border: 1px solid var(--border);
          display: flex; align-items: center; justify-content: center; color: var(--text-dim); background: transparent; cursor: pointer;
        }
        .sec-head-actions { display: flex; align-items: center; gap: 10px; }

        /* ---------- Stats ---------- */
        .stats-bar {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px;
          background: var(--panel); border: 1px solid var(--border); border-radius: var(--radius);
          padding: 28px;
        }
        @media (max-width: 700px) { .stats-bar { grid-template-columns: repeat(2, 1fr); } }
        .stat-item { display: flex; align-items: center; gap: 12px; }
        .stat-item .icon-wrap {
          width: 42px; height: 42px; border-radius: 11px; background: rgba(109,91,255,0.16); color: #a9b0ff;
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .stat-value { font-size: 21px; font-weight: 800; }
        .stat-label { font-size: 12px; color: var(--text-faint); }

        /* ---------- Testimonials ---------- */
        .testi-grid { display: grid; grid-template-columns: 1.6fr 1fr; gap: 24px; align-items: stretch; }
        @media (max-width: 900px) { .testi-grid { grid-template-columns: 1fr; } }
        .testi-cards { display: grid; gap: 16px; }
        .testi-card { background: var(--panel); border: 1px solid var(--border); border-radius: var(--radius); padding: 20px; }
        .stars { display: flex; gap: 3px; color: #ffb020; margin-bottom: 10px; }
        .testi-card p.quote { margin: 0 0 16px; font-size: 13.5px; color: var(--text-dim); }
        .testi-person { display: flex; align-items: center; gap: 10px; }
        .testi-avatar {
          width: 36px; height: 36px; border-radius: 50%;
          background: var(--accent-grad); color: white; font-weight: 700; font-size: 13px;
          display: flex; align-items: center; justify-content: center;
        }
        .testi-name { font-size: 13px; font-weight: 700; }
        .testi-role { font-size: 11.5px; color: var(--text-faint); }
        .testi-visual {
          border-radius: var(--radius);
          background: linear-gradient(160deg, #1c2450, #0a0d1c);
          border: 1px solid var(--border);
          display: flex; align-items: center; justify-content: center;
          position: relative; overflow: hidden; min-height: 260px;
        }
        .testi-visual .icon-wrap { color: #7c86ff; opacity: 0.6; }

        /* ---------- Contact ---------- */
        .contact-card {
          background: linear-gradient(160deg, var(--panel-2), var(--panel));
          border: 1px solid var(--border); border-radius: var(--radius);
          padding: 36px;
        }
        .contact-top { display: flex; align-items: flex-end; justify-content: space-between; flex-wrap: wrap; gap: 20px; margin-bottom: 28px; }
        .contact-top h2 { margin: 8px 0; font-size: 28px; }
        .contact-top p { margin: 0; color: var(--text-dim); font-size: 14px; max-width: 420px; }
        .contact-methods { display: grid; grid-template-columns: repeat(3, 1fr) auto; gap: 14px; align-items: center; }
        @media (max-width: 900px) { .contact-methods { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 560px) { .contact-methods { grid-template-columns: 1fr; } }
        .contact-method {
          display: flex; align-items: center; gap: 10px;
          background: var(--panel); border: 1px solid var(--border); border-radius: 12px;
          padding: 12px 14px;
        }
        .contact-method .icon-wrap {
          width: 34px; height: 34px; border-radius: 9px; background: rgba(109,91,255,0.18); color: #a9b0ff;
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .contact-method .label { font-size: 12.5px; font-weight: 700; }
        .contact-method .value { font-size: 11.5px; color: var(--text-faint); }

        /* ---------- Footer ---------- */
        .ld-footer { border-top: 1px solid var(--border); padding: 28px 0; }
        .footer-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px; }
        .footer-brand { display: flex; align-items: center; gap: 10px; }
        .footer-copy { font-size: 12.5px; color: var(--text-faint); }
        .footer-social { display: flex; gap: 10px; }
      `}</style>

      {/* NAVBAR */}
      <header className="ld-nav">
        <div className="ld-nav-inner">
          <div className="ld-brand">
            <div className="ld-brand-mark">M</div>
            <div>
              <div className="ld-brand-name">Manny De Guzman</div>
              <div className="ld-brand-sub">AI Tech VA &amp; Automation Specialist</div>
            </div>
          </div>
          <nav className="ld-nav-links">
            {NAV_LINKS.map((l, i) => (
              <a key={l.href} href={l.href} className={i === 0 ? "active" : ""}>{l.label}</a>
            ))}
          </nav>
          <a href="#contact" className="btn btn-primary">
            <Icon name="send" size={15} /> Let&apos;s Work Together
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="ld-container hero-grid">
          <div>
            <div className="eyebrow"><Icon name="sparkle" size={13} /> AI-Powered Solutions That Drive Results</div>
            <h1 className="hero-title">I Automate.<br />You <span className="accent">Elevate.</span></h1>
            <p className="hero-desc">
              I help businesses save time, reduce costs, and scale faster with AI automation, smart systems, and seamless integrations.
            </p>
            <div className="hero-ctas">
              <a href="#portfolio" className="btn btn-primary">View My Work <Icon name="arrow" size={15} /></a>
              <a href="#" className="btn btn-outline">Download CV <Icon name="download" size={15} /></a>
            </div>
            <div className="hero-tools-label">Trusted by tools I work with</div>
            <div className="hero-tools">
              {TOOLS.map((t) => (
                <span key={t} className="hero-tool">{t}</span>
              ))}
            </div>
          </div>

          <div className="hero-orbit-wrap">
            <div className="hero-orbit-glow" aria-hidden="true" />
            {/* Swap this fallback for <img src="/manny-hero.png" alt="Manny De Guzman" /> once exported */}
            <div className="hero-avatar-fallback">
              Drop in your cropped character render here (manny-hero.png)
            </div>
            {ORBIT_ITEMS.map((o) => (
              <div key={o.label} className={`orbit-node pos-${o.pos}`}>
                <div className="icon-wrap"><Icon name={o.icon} size={16} /></div>
                <span>{o.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section id="about">
        <div className="ld-container intro-card">
          <div className="intro-left">
            <div className="intro-avatar">M</div>
            <div>
              <h3>Hi, I&apos;m Manny! \u{1F44B}</h3>
              <p>
                An AI Tech VA &amp; Automation Specialist passionate about building intelligent systems that streamline workflows and empower businesses to focus on what truly matters.
              </p>
              <a href="#about" className="link-more">More About Me <Icon name="download" size={13} /></a>
            </div>
          </div>
          <div className="trait-row">
            {TRAITS.map((t) => (
              <div key={t.title} className="trait-card">
                <div className="icon-wrap"><Icon name={t.icon} size={15} /></div>
                <h4>{t.title}</h4>
                <p>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services">
        <div className="ld-container">
          <div className="sec-head">
            <div>
              <div className="eyebrow">What I Do</div>
              <h2>Services I Offer</h2>
            </div>
            <a href="#services" className="btn btn-outline">View All Services</a>
          </div>
          <div className="services-grid">
            {SERVICES.map((s) => (
              <div key={s.title} className="service-card">
                <div className="icon-wrap"><Icon name={s.icon} size={20} /></div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio">
        <div className="ld-container">
          <div className="sec-head">
            <div>
              <div className="eyebrow">Featured Projects</div>
              <h2>Some Things I&apos;ve Built</h2>
            </div>
            <div className="sec-head-actions">
              <a href="#portfolio" className="btn btn-outline">View All Projects</a>
              <button className="icon-btn" onClick={() => setProjectIdx((i) => Math.max(0, i - 1))} aria-label="Previous">
                <Icon name="chevronL" size={16} />
              </button>
              <button className="icon-btn" onClick={() => setProjectIdx((i) => Math.min(PROJECTS.length - 1, i + 1))} aria-label="Next">
                <Icon name="chevronR" size={16} />
              </button>
            </div>
          </div>
          <div className="portfolio-grid">
            {PROJECTS.map((p) => (
              <div key={p.title} className="proj-card">
                <div className="proj-thumb"><Icon name={p.icon} size={34} /></div>
                <div className="proj-body">
                  <div className="proj-tags">
                    {p.tags.map((t) => <span key={t} className="proj-tag">{t}</span>)}
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section>
        <div className="ld-container">
          <div className="stats-bar">
            {STATS.map((s) => (
              <div key={s.label} className="stat-item">
                <div className="icon-wrap"><Icon name={s.icon} size={20} /></div>
                <div>
                  <div className="stat-value">{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials">
        <div className="ld-container">
          <div className="eyebrow">What Clients Say</div>
          <h2 style={{ marginTop: 0, marginBottom: 28 }}>Kind Words from Clients</h2>
          <div className="testi-grid">
            <div className="testi-cards" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))", display: "grid" }}>
              {TESTIMONIALS.map((t) => (
                <div key={t.name} className="testi-card">
                  <div className="stars">
                    {Array.from({ length: 5 }).map((_, i) => <Icon key={i} name="star" size={13} />)}
                  </div>
                  <p className="quote">&ldquo;{t.quote}&rdquo;</p>
                  <div className="testi-person">
                    <div className="testi-avatar">{t.name.split(" ").map((n) => n[0]).join("")}</div>
                    <div>
                      <div className="testi-name">{t.name}</div>
                      <div className="testi-role">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="testi-visual">
              <Icon name="mail" size={64} />
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="ld-container">
          <div className="contact-card">
            <div className="contact-top">
              <div>
                <div className="eyebrow">Let&apos;s Work Together</div>
                <h2>Have a Project in Mind?</h2>
                <p>Let&apos;s connect and build something amazing together.</p>
              </div>
              <a href="mailto:manny.deguzman@email.com" className="btn btn-primary">
                <Icon name="send" size={15} /> Let&apos;s Work Together
              </a>
            </div>
            <div className="contact-methods">
              <div className="contact-method">
                <div className="icon-wrap"><Icon name="mail" size={16} /></div>
                <div><div className="label">Email Me</div><div className="value">manny.deguzman@email.com</div></div>
              </div>
              <div className="contact-method">
                <div className="icon-wrap"><Icon name="phone" size={16} /></div>
                <div><div className="label">Book a Call</div><div className="value">calendly.com/mannydeguzman</div></div>
              </div>
              <div className="contact-method">
                <div className="icon-wrap"><Icon name="send" size={16} /></div>
                <div><div className="label">Send a Message</div><div className="value">Click the button to reach out</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="ld-footer">
        <div className="ld-container footer-inner">
          <div className="footer-brand">
            <div className="ld-brand-mark" style={{ width: 34, height: 34, fontSize: 15 }}>M</div>
            <div>
              <div className="ld-brand-name" style={{ fontSize: 13.5 }}>Manny De Guzman</div>
              <div className="ld-brand-sub">AI Tech VA &amp; Automation Specialist</div>
            </div>
          </div>
          <div className="footer-copy">\u00A9 {new Date().getFullYear()} Manny De Guzman. All rights reserved.</div>
          <div className="footer-social">
            <a className="icon-btn" href="#" aria-label="LinkedIn">in</a>
            <a className="icon-btn" href="#" aria-label="Facebook">f</a>
            <a className="icon-btn" href="#" aria-label="X">X</a>
            <a className="icon-btn" href="#" aria-label="YouTube">\u25B6</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
