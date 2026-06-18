"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    if ("ontouchstart" in window) {
      dot.style.display = "none";
      ring.style.display = "none";
      return;
    }

    let mouseX = -100, mouseY = -100;
    let ringX = -100, ringY = -100;
    let rafId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
    };

    const animateRing = () => {
      const lerp = 0.12;
      ringX += (mouseX - ringX) * lerp;
      ringY += (mouseY - ringY) * lerp;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      rafId = requestAnimationFrame(animateRing);
    };

    const handleMouseEnterInteractive = () => document.body.classList.add("cursor-hover");
    const handleMouseLeaveInteractive = () => document.body.classList.remove("cursor-hover");
    const handleMouseDown = () => document.body.classList.add("cursor-click");
    const handleMouseUp = () => document.body.classList.remove("cursor-click");
    
    const handleMouseLeaveWindow = () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };
    const handleMouseEnterWindow = () => {
      dot.style.opacity = "1";
      ring.style.opacity = "1";
    };

    document.addEventListener("mousemove", handleMouseMove);
    animateRing();

    // Event delegation for interactive elements
    const interactiveSelectors = [
      "a", "button", "input", "textarea", "label",
      ".btn", ".btn-resume", ".btn-download", ".nav-link",
      ".project-card", ".cert-card", ".achievement-card",
      ".social-link", ".contact-card", ".skill-tag",
      ".back-to-top", '[role="button"]'
    ].join(",");

    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as Element).closest(interactiveSelectors)) {
        handleMouseEnterInteractive();
      } else {
        handleMouseLeaveInteractive();
      }
    };

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeaveWindow);
    document.addEventListener("mouseenter", handleMouseEnterWindow);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeaveWindow);
      document.removeEventListener("mouseenter", handleMouseEnterWindow);
    };
  }, []);

  return (
    <>
      <div id="cursor-dot" ref={dotRef} className="cursor-dot"></div>
      <div id="cursor-ring" ref={ringRef} className="cursor-ring"></div>
    </>
  );
}
