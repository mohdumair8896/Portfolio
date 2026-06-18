"use client";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState, useEffect } from "react";

const WORDS = ["I", "build", "the"];

export default function Hero() {
  const [scrollPct, setScrollPct] = useState(0);
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setScrollPct(Math.round(v * 100));
  });

  const stats = [
    { value: "2+ yrs",  label: "hands-on · experience" },
    { value: "6",       label: "cloud certifications" },
    { value: "48",      label: "oracle world rank" },
    { value: "99.99%",  label: "infra uptime" },
    { value: "70%",     label: "faster releases" },
    { value: "40%",     label: "MTTR reduction" },
  ];

  return (
    <header id="home" className="relative min-h-svh flex flex-col overflow-hidden">

      {/* ── Scroll progress bar (top, full-width gradient) ── */}
      <motion.div
        aria-hidden="true"
        className="fixed top-0 inset-x-0 z-[150] h-[2px] origin-left"
        style={{
          background: "linear-gradient(to right, #a78bfa, #ec4899, #60a5fa)",
          scaleX: scrollYProgress,
        }}
      />

      {/* ── Terminal overlay (bottom corners, fixed) ── */}
      <div
        aria-hidden="true"
        className="hidden lg:block pointer-events-none fixed inset-0 z-[180] font-mono text-[10px] tracking-[0.18em] uppercase text-slate-500"
      >
        <div className="absolute left-5 bottom-4 flex items-center gap-2.5">
          <span className="block w-3 h-3 border-l border-b border-white/25 -mb-1.5" />
          <span className="text-slate-400">stage:</span>
          <span className="text-violet-400">automate</span>
        </div>
        <div className="absolute right-5 bottom-4 flex items-center gap-2.5">
          <span className="text-slate-400">deploying ▸ {scrollPct}%</span>
          <span className="block w-3 h-3 border-r border-b border-white/25 -mb-1.5" />
        </div>
        <div
          className="absolute right-4 top-1/2 -translate-y-1/2 origin-center whitespace-nowrap text-[10px] tracking-[0.32em]"
          style={{ writingMode: "vertical-rl", transform: "translateY(-50%) rotate(90deg)" }}
        >
          <span className="text-white/55">mohdumair@prod</span>
          <span className="text-white/30"> · </span>
          <span className="text-violet-400/70">ap-south-1</span>
          <span className="text-white/30"> · </span>
          <span className="text-white/55">{new Date().toLocaleTimeString("en-US", { hour12: false })} ist</span>
        </div>
      </div>

      {/* ── Floating Resume button (bottom-right, fixed) ── */}
      <a
        href="/UmairCV.pdf"
        download="Umair CV.pdf"
        target="_blank"
        rel="noopener"
        className="group fixed bottom-12 right-5 z-[170] flex items-center gap-2.5 h-12 px-5 rounded-full no-underline text-sm font-semibold whitespace-nowrap text-white"
        style={{
          background: "linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)",
          boxShadow: "0 20px 50px -14px rgba(167,139,255,.55)",
        }}
        aria-label="Download resume"
      >
        <span className="flex-none group-hover:[animation:dlbounce_.7s_ease-in-out_infinite]">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3v12m0 0 4.5-4.5M12 15l-4.5-4.5" />
            <path d="M4 17v2.5A1.5 1.5 0 0 0 5.5 21h13a1.5 1.5 0 0 0 1.5-1.5V17" />
          </svg>
        </span>
        Resume
      </a>

      {/* ── Background: dot grid + gradient blobs ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* dot grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* top-center violet blob */}
        <div className="absolute w-[1100px] h-[700px] top-[-260px] left-1/2 -ml-[550px]">
          <div
            className="w-full h-full rounded-full blur-[70px]"
            style={{
              background: "radial-gradient(closest-side, rgba(142,123,255,0.17), transparent)",
              animation: "16s ease-in-out 0s infinite alternate none running drift",
            }}
          />
        </div>
        {/* bottom-right pink blob */}
        <div className="absolute w-[700px] h-[520px] bottom-[-220px] right-[-140px]">
          <div
            className="w-full h-full rounded-full blur-[70px]"
            style={{
              background: "radial-gradient(closest-side, rgba(239,159,228,0.09), transparent)",
              animation: "20s ease-in-out 0s infinite alternate none running drift2",
            }}
          />
        </div>
        {/* left blue blob */}
        <div
          className="absolute w-[500px] h-[500px] rounded-full top-[20%] left-[-180px] blur-[80px]"
          style={{ background: "radial-gradient(closest-side, rgba(127,168,255,0.07), transparent)" }}
        />
      </div>

      {/* ── Main hero content ── */}
      <div
        className="relative max-w-6xl w-full mx-auto flex flex-col items-center text-center px-5 sm:px-8 pt-28 sm:pt-32 flex-1"
      >
        {/* Badge pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex flex-wrap justify-center items-center gap-x-3 gap-y-2 text-[14px] sm:text-[15.5px] font-medium tracking-[-0.01em] border border-white/14 rounded-full px-6 py-3 mb-9"
          style={{
            background: "rgba(18,18,28,.65)",
            backdropFilter: "blur(12px)",
            boxShadow: "0 10px 50px -16px rgba(142,123,255,.45)",
          }}
        >
          <span className="flex items-center gap-2.5 text-white font-semibold">
            <span
              className="w-2 h-2 rounded-full bg-emerald-500"
              style={{ animation: "2.4s ease-out 0s infinite normal none running pulsedot" }}
            />
            DevOps
          </span>
          <span className="flex items-center gap-2">
            <span className="font-semibold" style={{ color: "rgb(182,163,255)" }}>Cloud</span>
            <span className="text-slate-500">·</span>
            <span className="font-semibold" style={{ color: "rgb(143,179,255)" }}>Azure</span>
            <span className="text-slate-500">·</span>
            <span className="font-semibold" style={{ color: "rgb(127,227,172)" }}>SRE</span>
          </span>
          <span className="text-white font-semibold">Engineer</span>
          <span className="hidden sm:block w-px h-4 bg-white/15 mx-1" aria-hidden="true" />
          <span className="text-slate-400 font-medium">@ Akal Info Sys</span>
          <span className="text-slate-500">·</span>
          <span className="text-slate-400 font-medium">2+ yrs</span>
        </motion.div>

        {/* H1 — word-by-word animation */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="m-0 font-semibold text-white leading-[1.0] tracking-[-0.045em]"
          style={{ fontSize: "clamp(40px,6.7vw,98px)" }}
        >
          {WORDS.map((w) => (
            <span key={w} className="inline-block overflow-hidden align-bottom pb-[0.08em] -mb-[0.08em]">
              <span className="inline-block">{w}</span>&nbsp;
            </span>
          ))}
          {/* Italic "infrastructure" with gradient shimmer + ellipse */}
          <span className="relative inline-block align-bottom whitespace-nowrap">
            <em
              className="font-serif inline-block pr-[0.07em]"
              style={{
                fontStyle: "italic",
                background: "linear-gradient(135deg, #a78bff 0%, #ef9fe4 60%, #a78bff 100%)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "shimmer 3s linear infinite",
              }}
            >
              infrastructure
            </em>
            {/* Ellipse outline */}
            <span aria-hidden="true" className="absolute pointer-events-none" style={{ inset: "-13% -4%" }}>
              <svg className="w-full h-full" viewBox="0 0 200 80" fill="none" preserveAspectRatio="none">
                <ellipse cx="100" cy="40" rx="97" ry="35" stroke="url(#heroOrbit)" strokeWidth="1.2" transform="rotate(-3.5 100 40)" strokeDasharray="1 1" strokeDashoffset="0" />
                <defs>
                  <linearGradient id="heroOrbit" x1="0" y1="0" x2="200" y2="80" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#A78BFF" />
                    <stop offset="1" stopColor="#EF9FE4" stopOpacity="0.6" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </span>
          <br />
          <span className="inline-block overflow-hidden align-bottom pb-[0.08em] -mb-[0.08em]">
            <span className="inline-block">engineers</span>&nbsp;
          </span>
          <span className="inline-block overflow-hidden align-bottom pb-[0.08em] -mb-[0.08em]">
            <span className="inline-block">ship</span>&nbsp;
          </span>
          <span className="inline-block overflow-hidden align-bottom pb-[0.08em] -mb-[0.08em]">
            <span className="inline-block">on.</span>
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-7 mx-auto max-w-[700px] text-[16.5px] sm:text-[18.5px] leading-[1.7] text-slate-400"
        >
          Platforms designed, pipelines automated, production kept standing at scale —{" "}
          <b className="text-white font-semibold">enterprise workloads on Azure & AWS at 99.99%</b>.
          And when something breaks at 2am, I find the mechanism, not the symptom. Managed mission-critical
          CI/CD pipelines and infrastructure for the <b className="text-white font-semibold">Department of Agriculture and Verizon</b>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex justify-center items-center gap-3.5 mt-9 flex-wrap"
        >
          <div className="inline-block">
            <a
              href="#projects"
              className="inline-block font-semibold text-[15.5px] px-[34px] py-4 rounded-full no-underline text-white"
              style={{
                background: "linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)",
                boxShadow: "0 0 24px rgba(124,58,237,0.35)",
              }}
            >
              See the work
            </a>
          </div>
          <div className="inline-block">
            <a
              href="mailto:mohdumair8896@gmail.com"
              className="inline-flex items-center gap-2.5 text-white font-medium text-[15.5px] px-[30px] py-4 rounded-full border border-white/16 no-underline transition-colors duration-200 hover:bg-white/7"
              style={{ backdropFilter: "blur(8px)" }}
            >
              <span className="text-pink-400">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
                  <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
                </svg>
              </span>
              mohdumair8896@gmail.com
            </a>
          </div>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex justify-center gap-[26px] mt-6 font-mono text-[12.5px]"
        >
          <a href="https://github.com/mohdumair8896" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-slate-500 no-underline transition-colors hover:text-white">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
            github
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M9 7h8v8" /></svg>
          </a>
          <a href="https://linkedin.com/in/mohd-umair-shahid" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-slate-500 no-underline transition-colors hover:text-white">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" /></svg>
            linkedin
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M9 7h8v8" /></svg>
          </a>
        </motion.div>
      </div>

      {/* ── Stats grid ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.55 }}
        className="relative max-w-6xl w-full mx-auto mt-12 mb-8 px-5 sm:px-8"
      >
        <div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-t border-white/8"
          style={{ background: "rgba(10,10,15,0.4)", backdropFilter: "blur(8px)" }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className="group pt-[26px] px-[22px] pb-4 border-l border-white/8 transition-colors duration-300 hover:bg-white/[0.03]"
            >
              <div
                className="text-[26px] font-semibold tracking-[-0.02em] text-white transition-colors duration-300 group-hover:text-violet-300"
              >
                {s.value}
              </div>
              <div className="font-mono text-[10.5px] tracking-[0.14em] uppercase text-slate-500 mt-1.5">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll arrow */}
        <div className="flex justify-center mt-9" aria-hidden="true">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 no-underline text-slate-500"
            style={{ animation: "2.6s ease-in-out 0s infinite normal none running floaty" }}
          >
            <span className="font-mono text-[10px] tracking-[0.22em] uppercase">scroll</span>
            <span className="block w-px h-9" style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.5), transparent)" }} />
          </a>
        </div>
      </motion.div>

    </header>
  );
}
