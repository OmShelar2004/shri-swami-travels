"use client";

import { useEffect } from "react";

/** Adds progressive visual polish without changing the document structure. */
export function VisualEnhancements() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>("main section, main article, main form, footer > div, main > div > div");
    targets.forEach((element, index) => {
      if (element.closest("[aria-roledescription='carousel']")) return;
      element.dataset.reveal = "";
      element.style.setProperty("--reveal-delay", `${Math.min(index % 5, 4) * 55}ms`);
    });
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(({ target, isIntersecting }) => {
        if (isIntersecting) {
          target.setAttribute("data-revealed", "");
          observer.unobserve(target);
        }
      }),
      { threshold: 0.08, rootMargin: "0px 0px -36px" },
    );
    targets.forEach((target) => !target.closest("[aria-roledescription='carousel']") && observer.observe(target));
    return () => observer.disconnect();
  }, []);
  return null;
}
