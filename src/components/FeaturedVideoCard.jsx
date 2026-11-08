import { Play, ArrowUpRight, Volume2, VolumeX } from "lucide-react";

export const FEATURED_DEMOS = [
  {src:"/demos/ai-receptionist.mp4",poster:"/images/portfolio/demos/ai-receptionist.jpg",sound:true,captions:"/demos/ai-receptionist.vtt"},
  {src:"/demos/property-enquiry.mp4",poster:"/images/portfolio/demos/property-enquiry.jpg",sound:true,captions:"/demos/property-enquiry.vtt"},
  {src:"/demos/facebook-ai-agent.mp4",poster:"/images/portfolio/demos/facebook-ai-agent.jpg",sound:true,captions:"/demos/facebook-ai-agent.vtt"},
];

export default function FeaturedVideoCard({project,index,onWatch,onRead}) {
  const demo=FEATURED_DEMOS[index];
  return (
    <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-light-border bg-light-surface shadow-sm transition-colors hover:border-accent-teal/40 dark:border-white/10 dark:bg-base-900/60 dark:shadow-none">
      <button type="button" onClick={onWatch} aria-haspopup="dialog" aria-label={`Watch demo: ${project.title}`} className="relative aspect-video w-full overflow-hidden bg-base-950 text-white">
        <img src={demo.poster} alt={`${project.title} demo preview`} width="960" height="540" loading="lazy" decoding="async" className="h-full w-full object-cover" />
        <span className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/35" />
        <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-black/65 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wider">Featured demo</span>
        <span className="absolute inset-0 flex items-center justify-center"><span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-accent-tealDeep shadow-lg transition-transform group-hover:scale-105"><Play size={23} fill="currentColor" aria-hidden="true" className="ml-1" /></span></span>
        <span className="absolute bottom-3 right-3 rounded-md bg-black/70 px-2 py-1 text-[10px] font-medium">0:30</span>
      </button>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap gap-1.5">{project.tags.map(tag=><span key={tag} className="rounded-full bg-accent-teal/10 px-2.5 py-0.5 text-[10px] font-bold tracking-wide text-accent-tealDeep dark:text-accent-tealLight">{tag}</span>)}</div>
        <h3 className="mt-3 font-display text-base font-semibold leading-snug text-light-text dark:text-white">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-light-muted dark:text-white/65">{project.summary}</p>
        <p className="mt-3 inline-flex items-center gap-1.5 text-[10px] text-light-muted dark:text-white/50">{demo.sound?<Volume2 size={12} aria-hidden="true"/>:<VolumeX size={12} aria-hidden="true"/>}{demo.sound?"Narration · Music · Sound FX":"Silent walkthrough"} · Illustrative demo</p>
        <div className="mt-auto flex flex-wrap items-center gap-4 pt-5"><button type="button" onClick={onWatch} aria-haspopup="dialog" aria-label={`Play 30-second demo: ${project.title}`} className="inline-flex min-h-11 items-center gap-2 rounded-full bg-accent-tealDeep px-4 py-2.5 text-xs font-semibold text-white"><Play size={13} fill="currentColor" aria-hidden="true"/> Watch demo</button><button type="button" onClick={onRead} aria-haspopup="dialog" aria-label={`Read case study: ${project.title}`} className="inline-flex min-h-11 items-center gap-1 text-xs font-semibold text-light-muted underline-offset-4 hover:underline dark:text-white/70">Case study <ArrowUpRight size={13} aria-hidden="true"/></button></div>
      </div>
    </article>
  );
}
