"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-5 sm:px-8 pt-[120px] sm:pt-[145px] pb-0 relative overflow-hidden"
    >
      {/* Radial glow */}
      <div
        className="absolute pointer-events-none w-[900px] h-[560px] rounded-full bottom-[-220px] left-1/2 ml-[-450px] blur-[70px]"
        style={{
          background: "radial-gradient(closest-side, rgba(142, 123, 255, 0.15), transparent)",
        }}
      />

      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-[1100px] mx-auto text-center relative"
      >
        {/* Eyebrow */}
        <div className="text-slate-500 text-[13px] font-mono uppercase tracking-widest mb-6 flex items-center justify-center gap-4">
          <span className="inline-block w-9 h-px bg-current opacity-60" />
          Open to the next hard problem
          <span className="inline-block w-9 h-px bg-current opacity-60" />
        </div>

        {/* Heading */}
        <h2 className="m-0 font-semibold text-white leading-[1.02] tracking-[-0.045em]"
          style={{ fontSize: "clamp(38px, 6.6vw, 92px)" }}
        >
          Let&apos;s build something
          <br />
          <span className="relative inline-block px-[0.25em]">
            <em
              className="font-serif not-italic"
              style={{
                background: "linear-gradient(135deg, #a78bff 0%, #ef9fe4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontStyle: "italic",
              }}
            >
              reliable
            </em>
            {/* Ellipse outline around "reliable" */}
            <svg
              className="absolute pointer-events-none"
              style={{ inset: "-14% -6%", width: "112%", height: "128%" }}
              viewBox="0 0 200 80"
              fill="none"
              aria-hidden="true"
            >
              <ellipse
                cx="100" cy="40" rx="96" ry="34"
                stroke="url(#orbitGrad)"
                strokeWidth="1.4"
                transform="rotate(-4 100 40)"
                opacity="1"
                strokeDasharray="1 1"
                strokeDashoffset="0"
              />
              <defs>
                <linearGradient id="orbitGrad" x1="0" y1="0" x2="200" y2="80" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#A78BFF" />
                  <stop offset="1" stopColor="#EF9FE4" stopOpacity="0.6" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          .
        </h2>

        {/* Subtitle */}
        <p className="mt-6 mx-auto mb-0 max-w-[500px] text-[16.5px] text-slate-400 leading-relaxed">
          If it keeps engineers shipping — platforms, reliability, developer
          experience, AI operations — I&apos;d love to talk about it.
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center items-center gap-3 mt-10 flex-wrap">

          {/* Email — gradient pill */}
          <motion.div whileHover={{ scale: 1.03 }} className="inline-block">
            <a
              href="mailto:mohdumair8896@gmail.com"
              className="inline-flex items-center gap-2.5 font-semibold text-[14.5px] px-[28px] py-3.5 rounded-full no-underline text-white"
              style={{
                background: "linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)",
                boxShadow: "0 0 24px rgba(124,58,237,0.3)",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
                <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
              </svg>
              mohdumair8896@gmail.com
            </a>
          </motion.div>

          {/* LinkedIn — border pill */}
          <motion.div whileHover={{ scale: 1.03 }} className="inline-block">
            <a
              href="https://linkedin.com/in/mohd-umair-shahid"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 text-white font-medium text-[14.5px] px-[26px] py-3.5 rounded-full border border-white/16 no-underline transition-colors duration-200 hover:bg-white/7 hover:border-blue-400/40"
            >
              <span className="text-blue-400">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </span>
              LinkedIn
            </a>
          </motion.div>

          {/* GitHub — border pill */}
          <motion.div whileHover={{ scale: 1.03 }} className="inline-block">
            <a
              href="https://github.com/mohdumair8896"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 text-white font-medium text-[14.5px] px-[26px] py-3.5 rounded-full border border-white/16 no-underline transition-colors duration-200 hover:bg-white/7 hover:border-white/40"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              GitHub
            </a>
          </motion.div>

        </div>

        {/* Location tag */}
        <div className="font-mono text-[12px] text-slate-500 mt-6">
          Remote, India · IST
        </div>
      </motion.div>

      {/* Footer bar */}
      <div className="relative max-w-[1280px] mx-auto mt-[100px] pt-7 border-t border-white/8 flex flex-wrap gap-x-6 gap-y-2.5 justify-between font-mono text-[11.5px] text-slate-500">
        <span>© {new Date().getFullYear()} Mohd Umair Shahid · release v1.0 — shipped from Remote, India</span>
        <span className="inline-flex items-center gap-2">
          <span
            className="w-1.5 h-1.5 rounded-full bg-emerald-500"
            style={{ animation: "2.4s ease-out 0s infinite normal none running pulsedot" }}
          />
          Azure · AWS · Kubernetes · Terraform — all running in production right now
        </span>
      </div>

      {/* Giant ghost watermark */}
      <div
        aria-hidden="true"
        className="relative block text-center font-semibold tracking-[-0.04em] leading-[0.78] mt-10 -mb-[0.16em] whitespace-nowrap overflow-hidden select-none"
        style={{
          fontSize: "clamp(60px, 11.5vw, 180px)",
          color: "transparent",
          WebkitTextStroke: "1px rgba(255,255,255,0.06)",
        }}
      >
        MOHDUMAIR
      </div>

    </section>
  );
}
