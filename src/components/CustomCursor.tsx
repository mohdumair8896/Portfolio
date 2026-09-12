"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run on desktop devices with a fine pointer (mouse / trackpad)
    if (typeof window === "undefined" || !window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isVisible = false;
    let isHovered = false;
    let isClicked = false;
    let rafId: number;

    const updateVisibility = (visible: boolean) => {
      isVisible = visible;
      const opacity = visible ? "1" : "0";
      dot.style.opacity = opacity;
      ring.style.opacity = opacity;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        updateVisibility(true);
        // Instantly sync initial ring position so it doesn't fly across screen
        ringX = mouseX;
        ringY = mouseY;
      }

      // Dot moves instantly with mouse (zero lag, GPU accelerated)
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) scale(${
        isClicked ? 0.75 : isHovered ? 1.4 : 1
      })`;
    };

    // Smooth spring physics for outer ring
    const animateRing = () => {
      const ease = 0.18; // snappy, smooth response
      ringX += (mouseX - ringX) * ease;
      ringY += (mouseY - ringY) * ease;

      const scale = isClicked ? 0.7 : isHovered ? 1.5 : 1;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(${scale})`;

      rafId = requestAnimationFrame(animateRing);
    };

    const isInteractive = (target: Element | null): boolean => {
      if (!target) return false;
      return Boolean(
        target.closest(
          'a, button, [role="button"], input, textarea, select, label, .project-card, .skill-tag, .achievement-card, .cert-card, .footer-links a, .footer-socials a, [data-cursor-hover]'
        )
      );
    };

    const handleMouseOver = (e: MouseEvent) => {
      const interactive = isInteractive(e.target as Element);
      if (interactive !== isHovered) {
        isHovered = interactive;
        if (isHovered) {
          document.body.classList.add("cursor-hover");
        } else {
          document.body.classList.remove("cursor-hover");
        }
      }
    };

    const handleMouseDown = () => {
      isClicked = true;
      document.body.classList.add("cursor-click");
    };

    const handleMouseUp = () => {
      isClicked = false;
      document.body.classList.remove("cursor-click");
    };

    const handleMouseLeave = () => {
      updateVisibility(false);
    };

    const handleMouseEnter = () => {
      updateVisibility(true);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    window.addEventListener("mousedown", handleMouseDown, { passive: true });
    window.addEventListener("mouseup", handleMouseUp, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("blur", handleMouseLeave);

    rafId = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("blur", handleMouseLeave);
      cancelAnimationFrame(rafId);
      document.body.classList.remove("cursor-hover", "cursor-click");
    };
  }, []);

  return (
    <>
      <div
        id="cursor-dot"
        ref={dotRef}
        aria-hidden="true"
        className="cursor-dot"
      />
      <div
        id="cursor-ring"
        ref={ringRef}
        aria-hidden="true"
        className="cursor-ring"
      />
    </>
  );
}
