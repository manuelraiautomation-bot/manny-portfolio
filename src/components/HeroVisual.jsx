import { useEffect, useRef, useState } from "react";
import { Bot, Workflow, FileText, ShieldCheck, Pause, Play } from "lucide-react";
import "./HeroVisual.css";

import { PROJECTS, PROJECT_CATEGORIES, getCategoryAnchor } from "../data/projects.js";

const CATEGORY_ICONS = [Bot, Workflow, FileText, ShieldCheck];
const MODULES = PROJECT_CATEGORIES.filter(category => category !== "Website Design").map((label, index) => ({
  label,
  Icon: CATEGORY_ICONS[index],
  count: PROJECTS.filter((project) => project.category === label).length,
}));

export default function HeroVisual() {
  const sceneRef = useRef(null);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(([entry]) => {
      scene.classList.toggle("is-in-view", entry.isIntersecting);
    });
    observer.observe(scene);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const scene = sceneRef.current;
    const stage = scene?.querySelector(".ai-stage");
    if (!stage) return;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame;
    const reset = () => {
      cancelAnimationFrame(frame);
      stage.style.setProperty("--tilt-x", "0deg");
      stage.style.setProperty("--tilt-y", "0deg");
    };
    const move = (event) => {
      if (paused || !finePointer.matches || reducedMotion.matches) return;
      const bounds = scene.getBoundingClientRect();
      const x = Math.max(-1, Math.min(1, (event.clientX - bounds.left) / bounds.width * 2 - 1));
      const y = Math.max(-1, Math.min(1, (event.clientY - bounds.top) / bounds.height * 2 - 1));
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        stage.style.setProperty("--tilt-x", `${-y * 5}deg`);
        stage.style.setProperty("--tilt-y", `${x * 7}deg`);
      });
    };
    scene.addEventListener("pointermove", move);
    scene.addEventListener("pointerleave", reset);
    reducedMotion.addEventListener("change", reset);
    finePointer.addEventListener("change", reset);
    return () => {
      reset();
      scene.removeEventListener("pointermove", move);
      scene.removeEventListener("pointerleave", reset);
      reducedMotion.removeEventListener("change", reset);
      finePointer.removeEventListener("change", reset);
    };
  }, [paused]);

  return (
    <div ref={sceneRef} className="ai-scene mx-auto w-full max-w-xl" data-paused={paused}>
      <div className="ai-stage" role="group" aria-label="Futuristic AI robot with a glowing visor and energy core, connected to four portfolio categories: AI Agents, Business Operations, Content, and Monitoring">
        <div className="ai-grid" aria-hidden="true" />
        <div className="ai-scene-caption" aria-hidden="true"><span /> AI + AUTOMATION</div>
        <svg className="ai-machine" viewBox="0 0 600 600" fill="none" aria-hidden="true">
          <defs>
            <radialGradient id="ai-shell" cx=".28" cy=".18" r=".9"><stop stopColor="#d8edf4"/><stop offset=".22" stopColor="#7b9bae"/><stop offset=".48" stopColor="#3b566e"/><stop offset=".76" stopColor="#142336"/><stop offset="1" stopColor="#080f20"/></radialGradient>
            <radialGradient id="ai-head" cx=".3" cy=".12" r="1"><stop stopColor="#f0faff"/><stop offset=".22" stopColor="#b5cddc"/><stop offset=".48" stopColor="#5c7a94"/><stop offset=".76" stopColor="#20344b"/><stop offset="1" stopColor="#0c172a"/></radialGradient>
            <linearGradient id="ai-side" x2="1" y2="1"><stop stopColor="#49768e"/><stop offset=".5" stopColor="#122339"/><stop offset="1" stopColor="#07101f"/></linearGradient>
            <linearGradient id="ai-reflection" x2=".7" y2="1"><stop stopColor="#f0ffff" stopOpacity=".5"/><stop offset=".4" stopColor="#b9edff" stopOpacity=".1"/><stop offset="1" stopColor="#fff" stopOpacity="0"/></linearGradient>
            <radialGradient id="ai-lens" cx=".35" cy=".15" r=".9"><stop stopColor="#376078"/><stop offset=".4" stopColor="#0b233b"/><stop offset=".8" stopColor="#020817"/><stop offset="1" stopColor="#114451"/></radialGradient>
            <filter id="ai-depth" x="-30%" y="-20%" width="170%" height="160%"><feDropShadow dx="6" dy="12" stdDeviation="7" floodColor="#000a16" floodOpacity=".65"/></filter>
            <linearGradient id="ai-glass" x1="225" y1="190" x2="375" y2="290" gradientUnits="userSpaceOnUse"><stop stopColor="#193645"/><stop offset="0.5" stopColor="#050d1d"/><stop offset="1" stopColor="#102a38"/></linearGradient>
            <linearGradient id="ai-edge"><stop stopColor="#99f6e4"/><stop offset="0.5" stopColor="#14b8a6"/><stop offset="1" stopColor="#38bdf8"/></linearGradient>
            <radialGradient id="ai-aura"><stop stopColor="#14b8a6" stopOpacity=".22"/><stop offset="1" stopColor="#14b8a6" stopOpacity="0"/></radialGradient>
            <filter id="ai-glow" x="-80%" y="-80%" width="260%" height="260%"><feGaussianBlur stdDeviation="4"/></filter>
          </defs>
          <circle cx="300" cy="300" r="260" fill="url(#ai-aura)"/>
          <g className="ai-orbit ai-orbit-outer"><circle cx="300" cy="300" r="225" stroke="#2dd4bf" strokeOpacity=".13" strokeDasharray="2 12"/><path d="M300 75 A225 225 0 0 1 525 300" stroke="url(#ai-edge)" strokeWidth="2" strokeLinecap="round"/><circle cx="525" cy="300" r="4" fill="#5eead4"/></g>
          <g className="ai-orbit ai-orbit-inner"><circle cx="300" cy="300" r="190" stroke="#2dd4bf" strokeOpacity=".15"/><path d="M110 300 A190 190 0 0 1 300 110" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="12 8"/></g>
          <g stroke="#2dd4bf" strokeOpacity=".3" strokeWidth="1.2" className="ai-data-paths">
            <path d="M110 157 H170 L221 207 M490 157 H430 L379 207 M105 295 H194 M495 295 H406 M110 432 H172 L234 389 M490 432 H428 L366 389"/>
          </g>
          <ellipse className="ai-platform-glow" cx="300" cy="495" rx="94" ry="14" fill="#2dd4bf" opacity=".12" filter="url(#ai-glow)"/>
          <ellipse cx="300" cy="495" rx="100" ry="18" stroke="#2dd4bf" strokeOpacity=".4"/>
          <ellipse cx="300" cy="495" rx="72" ry="11" stroke="#2dd4bf" strokeOpacity=".2"/>
          <g className="ai-robot" filter="url(#ai-depth)">
            <path d="M277 300 H323 V329 H277 Z" fill="#102638" stroke="#54828e"/>
            {/* Jointed arms and floating chassis */}
            <path d="M233 337 Q199 337 192 378 L181 411 Q177 430 193 435 Q209 439 215 422 L233 389" fill="url(#ai-shell)" stroke="#5a8494" strokeWidth="1.5"/>
            <path d="M367 337 Q401 337 408 378 L419 411 Q423 430 407 435 Q391 439 385 422 L367 389" fill="url(#ai-shell)" stroke="#5a8494" strokeWidth="1.5"/>
            <circle cx="211" cy="369" r="10" fill="#09182b" stroke="#2dd4bf"/><circle cx="389" cy="369" r="10" fill="#09182b" stroke="#2dd4bf"/>
            <path d="M244 326 Q307 305 370 326 L383 369 Q385 424 336 451 Q307 468 278 451 Q229 424 231 369 Z" fill="url(#ai-side)" stroke="#12293d" strokeWidth="2"/>
            <path d="M237 322 Q300 301 363 322 L376 365 Q378 420 329 447 Q300 464 271 447 Q222 420 224 365 Z" fill="url(#ai-shell)" stroke="#638c9d" strokeWidth="1.5"/>
            <path d="M240 332 Q275 320 296 325 L279 349 Q243 370 237 401 Q222 362 240 332Z" fill="url(#ai-reflection)"/>
            <path d="M244 335 Q300 318 356 335" stroke="#99f6e4" strokeOpacity=".6"/>
            <path d="M251 420 Q300 455 349 420" stroke="#2dd4bf" strokeOpacity=".35"/>
            <circle cx="300" cy="381" r="41" fill="#071421" stroke="#2dd4bf" strokeOpacity=".5"/>
            <g className="ai-core-ring"><circle cx="300" cy="381" r="33" stroke="url(#ai-edge)" strokeWidth="2" strokeDasharray="43 12 8 12"/></g>
            <path className="ai-core" d="M300 359 L319 370 V392 L300 403 L281 392 V370 Z" fill="#14b8a6" fillOpacity=".15" stroke="#5eead4" strokeWidth="1.5"/>
            <text x="300" y="388" textAnchor="middle" fill="#99f6e4" fontSize="19" fontFamily="monospace" fontWeight="700">AI</text>
            {/* Head, ears, visor, and face */}
            <rect x="190" y="207" width="24" height="65" rx="12" fill="#142b40" stroke="#6a98a7"/><rect x="386" y="207" width="24" height="65" rx="12" fill="#142b40" stroke="#6a98a7"/>
            <path d="M201 222 V255 M399 222 V255" stroke="#2dd4bf" strokeWidth="4" strokeLinecap="round"/>
            <path d="M219 215 Q221 166 261 154 Q310 137 359 154 Q399 166 401 215 L397 270 Q393 306 357 314 H263 Q227 306 223 270 Z" fill="url(#ai-side)" stroke="#223e56"/>
            <path d="M209 211 Q211 162 251 150 Q300 133 349 150 Q389 162 391 211 L387 266 Q383 302 347 310 H253 Q217 302 213 266 Z" fill="url(#ai-head)" stroke="#b1d0de" strokeWidth="1.5"/>
            <path d="M220 201 Q223 163 265 154 Q293 145 319 151 Q248 163 235 199Z" fill="url(#ai-reflection)"/>
            <path d="M228 192 Q300 165 372 192" stroke="#c3e6ec" strokeOpacity=".55" strokeWidth="2" strokeLinecap="round"/>
            <path d="M226 213 Q300 188 374 213 L371 261 Q368 284 346 289 H254 Q232 284 229 261 Z" fill="url(#ai-lens)" stroke="#2dd4bf" strokeOpacity=".65"/>
            <path d="M232 217 Q300 196 368 217 L365 229 Q292 207 236 238Z" fill="url(#ai-reflection)"/>
            <path d="M233 260 Q239 279 256 282 H344 Q363 279 368 260" stroke="#2dd4bf" strokeOpacity=".25" strokeWidth="3"/>
            <path d="M238 220 Q300 199 362 220" stroke="#93e9e4" strokeOpacity=".12" strokeWidth="7"/>
            <g className="ai-eyes"><rect x="255" y="230" width="18" height="31" rx="9" fill="#38bdf8" filter="url(#ai-glow)"/><rect x="327" y="230" width="18" height="31" rx="9" fill="#38bdf8" filter="url(#ai-glow)"/><rect x="257" y="231" width="14" height="28" rx="7" fill="#67e8f9"/><rect x="329" y="231" width="14" height="28" rx="7" fill="#67e8f9"/></g>
            <path d="M287 272 Q300 280 313 272" stroke="#5eead4" strokeWidth="2" strokeLinecap="round"/>
            <path d="M300 147 V129" stroke="#7cbdc8" strokeWidth="3"/><circle className="ai-core" cx="300" cy="123" r="5" fill="#5eead4"/>
          </g>
          <g fill="#5eead4" className="ai-particles"><circle cx="168" cy="225" r="2"/><circle cx="433" cy="210" r="3"/><circle cx="156" cy="386" r="2"/><circle cx="443" cy="377" r="2"/></g>
        </svg>
        <div className="ai-modules">
          {MODULES.map(({label, Icon, count}, index) => <a key={label} href={`#${getCategoryAnchor(label)}`} aria-label={`View ${label} projects (${count})`} className={`ai-module ai-module-${index}`} style={{"--module-delay": `${index * -.65}s`}}><Icon size={20} aria-hidden="true"/><span>{label} <b className="ai-module-count">({count})</b></span><i aria-hidden="true"/></a>)}
        </div>
        <div className="ai-scene-footer" aria-hidden="true"><span>CONNECT</span><i/><span>AUTOMATE</span><i/><span>DELIVER</span></div>
      </div>
      <button type="button" className="ai-motion-control mx-auto mt-2 flex items-center gap-2 rounded-full border border-light-border px-3 py-2 text-xs text-light-muted dark:border-white/15 dark:text-white/60" onClick={() => setPaused(value => !value)} aria-label={paused ? "Play robot animation" : "Pause robot animation"}>{paused ? <Play size={12}/> : <Pause size={12}/>} {paused ? "Resume animation" : "Pause animation"}</button>
    </div>
  );
}
