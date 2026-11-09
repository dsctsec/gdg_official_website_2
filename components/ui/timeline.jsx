"use client";

import { motion } from "motion/react";

export const Timeline = ({ data }) => (
  <section className="events-showcase mx-auto max-w-7xl px-2 py-12 md:px-8 md:py-20">
    <div className="events-intro mb-12 md:mb-16">
      <span className="eyebrow"><span className="eyebrow-icon">✳</span> OUR COMMUNITY’S JOURNEY</span>
      <div className="mt-5 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <h1 className="events-title">Events<span className="google-period">.</span></h1>
          <p className="events-tagline"><span>Build.</span> <span>Learn.</span> <span>Connect.</span></p>
        </div>
        <p className="events-description">A little film of the ideas, people, and moments that bring our community together.</p>
      </div>
    </div>
    <div className="film-reel-label"><span className="reel-led" /> GDG EVENT HUB</div>
    <div className="unwinding-reel">
      <div className="film-canister" aria-hidden="true"><img className="canister-logo" src="/Logo.png" alt="" /><span className="canister-label">GDG<br />EVENT<br />HUB</span><span className="canister-hub" /></div>
      <div className="event-reel" tabIndex={0} aria-label="Scrollable GDG TSEC event film strip" onWheel={(event) => { if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) { event.preventDefault(); event.currentTarget.scrollLeft += event.deltaY; } }}>
        <div className="film-perforations" aria-hidden="true" />
        <div className="event-reel-track">
        {[false, true].map((isDuplicate) => <div className="event-reel-run" key={isDuplicate ? "duplicate" : "original"} aria-hidden={isDuplicate || undefined}>
          {data.map((item, index) => {
            const Frame = item.href && !isDuplicate ? motion.a : motion.article;
            return <Frame key={`${isDuplicate ? "copy-" : ""}${item.key ?? index}`} href={item.href && !isDuplicate ? item.href : undefined} target={item.href && !isDuplicate ? "_blank" : undefined} rel={item.href && !isDuplicate ? "noopener noreferrer" : undefined} className={`event-frame ${item.href && !isDuplicate ? "event-frame-linked" : ""}`} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.45, delay: (index % 3) * 0.08 }}>
              <div className="event-frame-meta"><span>{String(index + 1).padStart(2, "0")} / {String(data.length).padStart(2, "0")}</span><span className={`event-status ${item.status === "UPCOMING" || item.status === "Register Now" ? "is-upcoming" : ""}`}>{item.status}</span></div>
              {item.image}
              <div className="event-frame-copy"><span className="event-date">{item.date}</span><h2>{item.title}</h2><p>{item.details}</p>{!isDuplicate && item.cta}</div>
            </Frame>;
          })}
        </div>)}
        </div>
        <div className="film-perforations" aria-hidden="true" />
      </div>
    </div>
    <div className="reel-footer"><span>REC ● COMMUNITY ARCHIVE</span><span>SCROLL OR SWIPE TO UNWIND <span aria-hidden="true">→</span></span><span>GDG TSEC · INDIA</span></div>
  </section>
);
