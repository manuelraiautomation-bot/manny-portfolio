import { useEffect, useRef } from "react";
import { CalendarDays, Mail, ArrowUpRight, X } from "lucide-react";
import { CALENDLY_URL, CONTACT_EMAIL, getInquiryEmailUrl } from "../data/contact.js";

export default function InquiryDialog({ topic, onClose }) {
  const dialogRef = useRef(null);
  useEffect(() => {
    const dialog = dialogRef.current;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, []);

  return (
    <dialog ref={dialogRef} aria-labelledby="inquiry-title" aria-describedby="inquiry-description" onCancel={event => { event.preventDefault(); onClose(); }} onClick={event => { if (event.target === dialogRef.current) { const bounds = dialogRef.current.getBoundingClientRect(); if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) onClose(); } }} className="m-auto max-h-[92dvh] max-w-5xl overflow-y-auto rounded-3xl border border-light-border bg-light-surface p-0 text-light-text shadow-2xl backdrop:bg-black/70 backdrop:backdrop-blur-sm dark:border-white/10 dark:bg-base-900 dark:text-white" style={{ width: "calc(100% - 2rem)" }}>
      <div className="relative border-b border-light-border p-5 pr-16 dark:border-white/10 sm:p-7 sm:pr-16">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent-tealDeep dark:text-accent-tealLight">Let’s discuss your project</p>
        <h2 id="inquiry-title" className="mt-3 font-display text-2xl font-bold tracking-tight sm:text-3xl">{topic}</h2>
        <p id="inquiry-description" className="mt-3 max-w-2xl text-sm leading-relaxed text-light-muted dark:text-white/65">Choose a time below and share what you’d like to discuss in Calendly. Prefer to write first? Send your project details by email.</p>
        <a href={getInquiryEmailUrl(topic)} className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-accent-tealDeep underline underline-offset-4 dark:text-accent-tealLight lg:hidden"><Mail size={16} aria-hidden="true" /> Email your inquiry instead</a>
        <button type="button" onClick={onClose} aria-label="Close project inquiry" className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-light-border hover:bg-light-surfaceMuted dark:border-white/15 dark:hover:bg-white/10"><X size={20} aria-hidden="true" /></button>
      </div>
      <div className="grid gap-5 p-4 sm:p-6 lg:grid-cols-[minmax(0,1fr)_17rem]">
        <section aria-label="Book a discovery call" className="min-w-0">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2 text-sm"><h3 className="inline-flex items-center gap-2 font-semibold"><CalendarDays size={17} aria-hidden="true" className="text-accent-tealDeep dark:text-accent-tealLight" /> Book a discovery call</h3><a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-light-muted underline underline-offset-4 dark:text-white/65">Open booking page <ArrowUpRight size={13} aria-hidden="true" /></a></div>
          <iframe title="Schedule a discovery call with Manuel Rebutido" src={`${CALENDLY_URL}?embed_type=Inline&hide_landing_page_details=1&background_color=ffffff&text_color=1a1a1a&primary_color=0d9488`} className="h-[680px] w-full rounded-2xl border-0 bg-white" />
          <p className="mt-3 text-xs leading-relaxed text-light-muted dark:text-white/55">If the calendar doesn’t load, <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">open Calendly directly</a> or use the email option.</p>
        </section>
        <aside className="min-w-0 self-start rounded-2xl border border-light-border bg-light-surfaceMuted p-5 dark:border-white/10 dark:bg-base-850">
          <Mail size={24} aria-hidden="true" className="text-accent-tealDeep dark:text-accent-tealLight" />
          <h3 className="mt-4 font-display text-lg font-bold">Prefer email?</h3>
          <p className="mt-3 text-sm leading-relaxed text-light-muted dark:text-white/65">Tell me about your business, what you’d like to build, and your timeline. You can send an inquiry without booking a call.</p>
          <a href={getInquiryEmailUrl(topic)} className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-accent-tealDeep px-5 py-3 text-sm font-semibold text-white">Email your inquiry <ArrowUpRight size={16} aria-hidden="true" /></a>
          <a href={`mailto:${CONTACT_EMAIL}`} className="mt-4 block break-all text-xs text-light-muted underline underline-offset-4 dark:text-white/60">{CONTACT_EMAIL}</a>
        </aside>
      </div>
    </dialog>
  );
}
