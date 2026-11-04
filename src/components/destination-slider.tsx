"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import type { DestinationSlide } from "@/config/content";
import { useLanguage } from "@/context/language-context";
import styles from "./destination-slider.module.css";

export function DestinationSlider({ slides }: { slides: DestinationSlide[] }) {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");
  const touchStart = useRef<number | null>(null);
  const active = slides[activeIndex];

  const moveTo = useCallback((nextIndex: number) => {
    const nextIndexInRange = (nextIndex + slides.length) % slides.length;
    if (nextIndexInRange === activeIndex) return;
    const isForward = (nextIndexInRange - activeIndex + slides.length) % slides.length <= slides.length / 2;
    setDirection(isForward ? "forward" : "backward");
    setPreviousIndex(activeIndex);
    setActiveIndex(nextIndexInRange);
  }, [activeIndex, slides.length]);

  const previous = useCallback(() => moveTo(activeIndex - 1), [activeIndex, moveTo]);
  const next = useCallback(() => moveTo(activeIndex + 1), [activeIndex, moveTo]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") previous();
      if (event.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [next, previous]);

  useEffect(() => {
    if (previousIndex === null) return;
    const timeout = window.setTimeout(() => setPreviousIndex(null), 900);
    return () => window.clearTimeout(timeout);
  }, [previousIndex]);

  const previews = [1, 2, 3].map((offset) => slides[(activeIndex + offset) % slides.length]);

  return (
    <section className={styles.slider} aria-roledescription="carousel" aria-label={t.nav.destinations}
      onTouchStart={(event) => { touchStart.current = event.changedTouches[0]?.clientX ?? null; }}
      onTouchEnd={(event) => {
        const start = touchStart.current;
        const end = event.changedTouches[0]?.clientX;
        touchStart.current = null;
        if (start !== null && end !== undefined && Math.abs(start - end) > 45) {
          if (start > end) next();
          else previous();
        }
      }}>
      <div className={styles.background} aria-hidden="true">
        {previousIndex !== null && <Image className={`${styles.backgroundImage} ${direction === "forward" ? styles.backgroundExitForward : styles.backgroundExitBackward}`} src={slides[previousIndex].image} alt="" fill sizes="100vw" />}
        <Image key={active.slug} className={`${styles.backgroundImage} ${previousIndex !== null ? (direction === "forward" ? styles.backgroundEnterForward : styles.backgroundEnterBackward) : ""}`} src={active.image} alt="" fill sizes="100vw" priority />
      </div>
      <div className={styles.veil} aria-hidden="true" />
      <div className={styles.content}>
        <div className={styles.copy} aria-live="polite">
          <p className={styles.eyebrow}>{active.eyebrow}</p>
          <div className={styles.titleWrap}><h1 key={active.slug} className={styles.title}>{active.name}</h1></div>
          <p key={`${active.slug}-summary`} className={styles.summary}>{active.summary}</p>
          <Link className={styles.cta} href={`/packages/${active.slug}`}>{t.common.explorePackage} <span aria-hidden="true">↗</span></Link>
          <div className={styles.footer}>
            <span className={styles.counter}>{String(activeIndex + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</span>
            <div className={styles.progress} aria-hidden="true"><span style={{ width: `${((activeIndex + 1) / slides.length) * 100}%` }} /></div>
            <div className={styles.controls}>
              <button className={styles.control} type="button" onClick={previous} aria-label={`${t.common.previousDestination}: ${active.name}`}>←</button>
              <button className={styles.control} type="button" onClick={next} aria-label={`${t.common.nextDestination}: ${active.name}`}>→</button>
            </div>
          </div>
        </div>
        <aside className={styles.previews} aria-label={t.common.continueJourney}>
          <p className={styles.previewLabel}>{t.common.continueJourney}</p>
          <div className={`${styles.rail} ${direction === "forward" ? styles.railForward : styles.railBackward}`} key={active.slug}>
            {previews.map((slide) => <Link key={slide.slug} href={`/packages/${slide.slug}`} className={styles.card}>
              <Image className={styles.cardImage} src={slide.image} alt="" fill sizes="(max-width: 767px) 33vw, 480px" />
              <span className={styles.cardShade} />
              <span className={styles.cardText}><small>{slide.eyebrow}</small><strong>{slide.name}</strong></span>
            </Link>)}
          </div>
          <div className={styles.dots} aria-label={t.common.chooseDestination}>
            {slides.map((slide, index) => <button key={slide.slug} type="button" className={`${styles.dot} ${index === activeIndex ? styles.dotActive : ""}`} onClick={() => moveTo(index)} aria-label={`Show ${slide.name}`} aria-current={index === activeIndex ? "true" : undefined} />)}
          </div>
        </aside>
      </div>
    </section>
  );
}
