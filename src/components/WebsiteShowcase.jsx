import { Globe2, ArrowUpRight, Check, Smartphone } from "lucide-react";

export default function WebsiteShowcase() {
  return (
    <section id="websites" aria-labelledby="websites-heading" className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent-tealDeep dark:text-accent-tealLight"><Globe2 size={16} aria-hidden="true" /> Website design & development</p>
          <h2 id="websites-heading" className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-tight text-light-text dark:text-white sm:text-4xl lg:text-5xl">Your business.<br /><span className="bg-brand-gradient bg-clip-text text-transparent">A website that fits.</span></h2>
          <p className="mt-5 text-base leading-relaxed text-light-muted dark:text-white/70">I create responsive business websites for local and international clients, combining clear messaging, brand-led design, and straightforward ways for customers to get in touch.</p>
          <ul className="mt-6 space-y-3 text-sm text-light-muted dark:text-white/70">
            {["Layouts made for phones, tablets, and desktop", "Easy-to-update menus, services, and business information", "Accessible navigation, search-friendly structure, and contact links"].map(item => <li key={item} className="flex gap-3"><Check size={18} aria-hidden="true" className="mt-0.5 shrink-0 text-accent-tealDeep dark:text-accent-teal" /><span>{item}</span></li>)}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3"><a href="/samples/chill-treats/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-accent-tealDeep px-6 py-3 text-sm font-semibold text-white">View website sample <ArrowUpRight size={16} aria-hidden="true" /></a><a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-light-border px-6 py-3 text-sm font-semibold text-light-text hover:bg-light-surface dark:border-white/20 dark:text-white dark:hover:bg-white/5">Discuss your website</a></div>
        </div>
        <article className="min-w-0 overflow-hidden rounded-3xl border border-light-border bg-light-surface shadow-sm dark:border-white/10 dark:bg-base-900/60">
          <div className="flex items-center gap-2 border-b border-light-border px-5 py-3 dark:border-white/10"><span className="h-2 w-2 rounded-full bg-rose-400" /><span className="h-2 w-2 rounded-full bg-amber-400" /><span className="h-2 w-2 rounded-full bg-emerald-400" /><span className="ml-2 min-w-0 truncate text-xs text-light-muted dark:text-white/60">CHILL Treats · Website concept</span></div>
          <a href="/samples/chill-treats/" target="_blank" rel="noopener noreferrer" aria-label="Open the CHILL Treats website concept"><img src="/images/portfolio/chill-treats-website.png" alt="CHILL Treats website concept with purple branding, yellow highlights, and photorealistic dessert imagery" width="1440" height="1000" loading="lazy" decoding="async" className="aspect-[1.44] w-full object-cover" /></a>
          <div className="p-6"><div className="flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-wide text-accent-tealDeep dark:text-accent-tealLight"><span>Concept sample</span><span aria-hidden="true">·</span><span className="inline-flex items-center gap-1"><Smartphone size={13} aria-hidden="true" /> Responsive HTML / CSS / JavaScript</span></div><h3 className="mt-3 font-display text-xl font-bold text-light-text dark:text-white">CHILL Treats — dessert shop website</h3><p className="mt-3 text-sm leading-relaxed text-light-muted dark:text-white/65">A brand-focused concept for a dessert shop in Allen, Northern Samar, featuring a filterable menu, gallery, map, and phone/Facebook contact links.</p><p className="mt-3 text-xs leading-relaxed text-light-muted dark:text-white/50">Portfolio concept, not a verified client launch. Food imagery is AI-generated; official photos, menu prices, and hours are pending confirmation.</p></div>
        </article>
      </div>
    </section>
  );
}
