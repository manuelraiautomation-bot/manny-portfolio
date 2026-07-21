"use client";

import { useEffect, useRef, useState } from "react";

/**
 * HeroVisual — Animated terminal / log window
 * Drop-in replacement for app/HeroVisual.js (same export, same filename).
 * Types out real automation events line-by-line like a live process log.
 */

const LOG_SCRIPT = [
  { t: "info", text: "$ automation-engine --watch" },
  { t: "sys", text: "connecting to workflow runtime..." },
  { t: "ok", text: "connected · 6 workflows live" },
  { t: "gap" },
  { t: "event", text: "[webhook] lead.created received" },
  { t: "proc", text: "→ scoring lead with AI agent..." },
  { t: "ok", text: "✓ lead scored: 87/100 (hot)" },
  { t: "gap" },
  { t: "event", text: "[messenger] inbound message from customer" },
  { t: "proc", text: "→ generating contextual reply..." },
  { t: "ok", text: "✓ reply sent · 1.2s response time" },
  { t: "gap" },
  { t: "event", text: "[render] video-gen job #4471 queued" },
  { t: "proc", text: "→ rendering 1080p export..." },
  { t: "ok", text: "✓ video ready · uploaded to drive" },
  { t: "gap" },
  { t: "event", text: "[xero] invoice #2291 marked paid" },
  { t: "proc", text: "→ syncing ledger + notifying client..." },
  { t: "ok", text: "✓ sync complete · 0 errors" },
  { t: "gap" },
  { t: "sys", text: "uptime 99.9% · 1,240+ tasks automated" },
];

const COLORS = {
  info: "#8b9bff",
  sys: "#7dd3fc",
  ok: "#34d399",
  event: "#c4b5fd",
  proc: "#93c5fd",
};

const PREFIX = {
  info: "",
  sys: "· ",
  ok: "",
  event: "",
  proc: "",
};

export default function HeroVisual() {
  const [lines, setLines] = useState([]); // completed lines: {t, text}
  const [typing, setTyping] = useState({ t: "info", text: "" }); // current line being typed
  const [reduced, setReduced] = useState(false);
  const containerRef = useRef(null);
  const scriptIndexRef = useRef(0);
  const charIndexRef = useRef(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e) => setReduced(e.matches);
    mq.addEventListener?.("change", handler);
    return () => mq.removeEventListener?.("change", handler);
  }, []);

  useEffect(() => {
    if (reduced) {
      // Static: show the full script instantly, no animation loop.
      setLines(LOG_SCRIPT.filter((l) => l.text));
      setTyping(null);
      return;
    }

    function step() {
      const entry = LOG_SCRIPT[scriptIndexRef.current % LOG_SCRIPT.length];

      if (!entry.text) {
        // blank spacer line, no typing needed
        setLines((prev) => {
          const next = [...prev, entry];
          return next.length > 12 ? next.slice(next.length - 12) : next;
        });
        scriptIndexRef.current += 1;
        charIndexRef.current = 0;
        timeoutRef.current = setTimeout(step, 260);
        return;
      }

      if (charIndexRef.current <= entry.text.length) {
        setTyping({ t: entry.t, text: entry.text.slice(0, charIndexRef.current) });
        charIndexRef.current += 1;
        const speed = entry.t === "proc" ? 18 : 22;
        timeoutRef.current = setTimeout(step, speed);
      } else {
        // line finished, push to completed lines, move on after a pause
        setLines((prev) => {
          const next = [...prev, entry];
          return next.length > 12 ? next.slice(next.length - 12) : next;
        });
        setTyping({ t: entry.t, text: "" });
        scriptIndexRef.current += 1;
        charIndexRef.current = 0;
        const pause = entry.t === "ok" ? 650 : entry.t === "event" ? 200 : 380;
        timeoutRef.current = setTimeout(step, pause);
      }
    }

    timeoutRef.current = setTimeout(step, 400);
    return () => clearTimeout(timeoutRef.current);
  }, [reduced]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [lines, typing]);

  return (
    <div className="hv-wrap">
      <style>{`
        .hv-wrap {
          position: relative;
          width: 100%;
          max-width: 560px;
          margin: 0 auto;
        }
        .hv-glow {
          position: absolute;
          inset: -40px;
          background: radial-gradient(circle at 30% 20%, rgba(124,58,237,0.35), transparent 60%),
                      radial-gradient(circle at 80% 80%, rgba(56,189,248,0.28), transparent 60%);
          filter: blur(30px);
          z-index: 0;
          pointer-events: none;
        }
        .hv-card {
          position: relative;
          z-index: 1;
          border-radius: 14px;
          background: linear-gradient(180deg, #0f1220 0%, #0a0c16 100%);
          border: 1px solid rgba(139, 155, 255, 0.18);
          box-shadow: 0 20px 60px rgba(20, 10, 60, 0.55), 0 0 0 1px rgba(255,255,255,0.02) inset;
          overflow: hidden;
          font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
        }
        .hv-titlebar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 14px;
          background: linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01));
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .hv-dots {
          display: flex;
          gap: 7px;
        }
        .hv-dot {
          width: 11px;
          height: 11px;
          border-radius: 50%;
        }
        .hv-dot.red { background: #ff5f56; }
        .hv-dot.yellow { background: #ffbd2e; }
        .hv-dot.green { background: #27c93f; }
        .hv-titletext {
          font-size: 12px;
          color: rgba(255,255,255,0.45);
          letter-spacing: 0.02em;
        }
        .hv-live {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          color: #34d399;
          font-weight: 600;
          letter-spacing: 0.04em;
        }
        .hv-live-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #34d399;
          box-shadow: 0 0 8px #34d399;
        }
        @media (prefers-reduced-motion: no-preference) {
          .hv-live-dot { animation: hv-pulse 1.6s ease-in-out infinite; }
        }
        @keyframes hv-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.85); }
        }
        .hv-body {
          height: 320px;
          padding: 16px 18px;
          overflow-y: hidden;
          display: flex;
          flex-direction: column;
          gap: 3px;
        }
        .hv-line {
          font-size: 13px;
          line-height: 1.6;
          white-space: pre-wrap;
          word-break: break-word;
        }
        .hv-line.gap { height: 6px; }
        .hv-caret {
          display: inline-block;
          width: 7px;
          height: 14px;
          margin-left: 2px;
          background: #93c5fd;
          vertical-align: text-bottom;
          transform: translateY(1px);
        }
        @media (prefers-reduced-motion: no-preference) {
          .hv-caret { animation: hv-blink 1s steps(1) infinite; }
        }
        @keyframes hv-blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        .hv-footer {
          padding: 10px 18px 14px;
          border-top: 1px solid rgba(255,255,255,0.06);
          display: flex;
          gap: 18px;
        }
        .hv-stat {
          font-size: 11px;
          color: rgba(255,255,255,0.4);
        }
        .hv-stat b {
          color: rgba(255,255,255,0.85);
          font-weight: 600;
        }
      `}</style>

      <div className="hv-glow" aria-hidden="true" />
      <div className="hv-card" role="img" aria-label="Animated terminal showing live automation workflow events">
        <div className="hv-titlebar">
          <div className="hv-dots">
            <span className="hv-dot red" />
            <span className="hv-dot yellow" />
            <span className="hv-dot green" />
          </div>
          <div className="hv-titletext">workflow-engine — automation.log</div>
          <div className="hv-live">
            <span className="hv-live-dot" />
            LIVE
          </div>
        </div>

        <div className="hv-body" ref={containerRef}>
          {lines.map((l, i) =>
            l.text ? (
              <div key={i} className="hv-line" style={{ color: COLORS[l.t] }}>
                {PREFIX[l.t]}
                {l.text}
              </div>
            ) : (
              <div key={i} className="hv-line gap" />
            )
          )}
          {typing && typing.text !== undefined && (
            <div className="hv-line" style={{ color: COLORS[typing.t] }}>
              {PREFIX[typing.t]}
              {typing.text}
              <span className="hv-caret" />
            </div>
          )}
        </div>

        <div className="hv-footer">
          <div className="hv-stat"><b>1,240+</b> tasks automated</div>
          <div className="hv-stat"><b>38 hrs</b>/week saved</div>
          <div className="hv-stat"><b>99.9%</b> uptime</div>
        </div>
      </div>
    </div>
  );
}
