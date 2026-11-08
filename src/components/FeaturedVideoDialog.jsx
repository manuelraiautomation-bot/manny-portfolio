import {useEffect,useRef,useState} from "react";
import {X,ExternalLink} from "lucide-react";
import {FEATURED_DEMOS} from "./FeaturedVideoCard.jsx";

export default function FeaturedVideoDialog({project,index,onClose}) {
  const ref=useRef(null),videoRef=useRef(null);
  const [failed,setFailed]=useState(false);
  const demo=FEATURED_DEMOS[index];
  useEffect(()=>{
    const video=videoRef.current;
    const dialog=ref.current,previousFocus=document.activeElement,overflow=document.body.style.overflow;
    dialog.showModal();document.body.style.overflow="hidden";
    return()=>{video?.pause();dialog.close();document.body.style.overflow=overflow;previousFocus?.focus();};
  },[]);
  return <dialog ref={ref} aria-labelledby="featured-video-title" onCancel={event=>{event.preventDefault();onClose();}} onClick={event=>{if(event.target===ref.current){const r=ref.current.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)onClose();}}} style={{width:"calc(100% - 2rem)"}} className="m-auto max-h-[92dvh] max-w-5xl overflow-y-auto rounded-2xl border border-light-border bg-light-surface p-0 text-light-text shadow-2xl backdrop:bg-black/75 backdrop:backdrop-blur-sm dark:border-white/10 dark:bg-base-900 dark:text-white">
    <div className="relative p-5 pr-16"><p className="text-[10px] font-semibold uppercase tracking-widest text-accent-tealDeep dark:text-accent-tealLight">Featured project · 30-second demo</p><h2 id="featured-video-title" className="mt-2 font-display text-lg font-bold sm:text-2xl">{project.title}</h2><button type="button" onClick={onClose} aria-label="Close demo video" className="absolute right-3 top-3 flex h-11 w-11 items-center justify-center rounded-full border border-light-border hover:bg-light-surfaceMuted dark:border-white/15 dark:hover:bg-white/10"><X size={19} aria-hidden="true"/></button></div>
    <video ref={videoRef} src={demo.src} poster={demo.poster} controls playsInline autoPlay preload="metadata" onError={()=>setFailed(true)} className="aspect-video w-full bg-black" aria-label={`${project.title} illustrative video demo`}>{demo.captions && <track kind="captions" src={demo.captions} srcLang="en" label="English" />}</video>
    <div className="p-5"><p className="text-sm leading-relaxed text-light-muted dark:text-white/70">{project.summary}</p><p className="mt-2 text-xs leading-relaxed text-light-muted dark:text-white/50">Designed screens and sample data illustrate the workflow; this is not a live integration recording. {demo.sound?"Includes male narration.":"This walkthrough has no audio."}</p>{failed&&<p role="alert" className="mt-3 text-sm">The video couldn’t load. Use the direct video link below.</p>}<a href={demo.src} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex min-h-11 items-center gap-2 text-xs font-semibold text-accent-tealDeep underline underline-offset-4 dark:text-accent-tealLight">Open video directly <ExternalLink size={13} aria-hidden="true"/></a></div>
  </dialog>;
}
