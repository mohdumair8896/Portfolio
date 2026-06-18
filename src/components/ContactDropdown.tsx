"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    {
      label: "Email",
      subLabel: "mohdumair8896@gmail.com",
      href: "mailto:mohdumair8896@gmail.com",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      subLabel: "in/mohdumair8896",
      href: "https://linkedin.com/in/mohdumair8896",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
    {
      label: "GitHub",
      subLabel: "@mohdumair8896",
      href: "https://github.com/mohdumair8896",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      ),
    },
    {
      label: "Resume",
      subLabel: "Download",
      href: "/UmairCV.pdf",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" x2="12" y1="15" y2="3" />
        </svg>
      ),
    },
  ];

  return (
    <div 
      className="relative block max-md:hidden"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <a
        href="mailto:mohdumair8896@gmail.com"
        className="inline-flex items-center gap-1.5 font-semibold text-sm px-5 py-2.5 rounded-full no-underline whitespace-nowrap transition-all duration-200 hover:shadow-[0_8px_24px_-8px_rgba(255,255,255,.4)]"
        style={{ color: "#000000", backgroundColor: "#ffffff" }}
      >
        Get in touch
        <span className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </span>
      </a>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-[calc(100%+12px)] right-0 w-[240px] bg-white/95 backdrop-blur-xl border border-black/5 rounded-[20px] p-2.5 shadow-[0_8px_30px_rgb(0,0,0,0.12)] z-50"
          >
            <div className="flex flex-col gap-[2px]">
              {links.map((link) => {
                // Determine icon color based on label
                let iconColorClass = "text-slate-600 group-hover:text-black";
                let iconBgClass = "bg-black/5 border-black/5";
                
                if (link.label === "Email") {
                  iconColorClass = "text-pink-500";
                  iconBgClass = "bg-pink-500/10 border-pink-500/20";
                } else if (link.label === "LinkedIn") {
                  iconColorClass = "text-blue-500";
                  iconBgClass = "bg-blue-500/10 border-blue-500/20";
                } else if (link.label === "GitHub") {
                  iconColorClass = "text-slate-700";
                  iconBgClass = "bg-slate-200 border-slate-300";
                } else if (link.label === "Resume") {
                  iconColorClass = "text-violet-500";
                  iconBgClass = "bg-violet-500/10 border-violet-500/20";
                }

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.label !== "Email" ? "_blank" : undefined}
                    rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-3.5 p-2.5 rounded-xl hover:bg-black/5 transition-colors duration-200 no-underline group"
                    download={link.label === "Resume" ? "Umair CV.pdf" : undefined}
                  >
                    <div className={`flex items-center justify-center w-[38px] h-[38px] rounded-xl border transition-colors duration-200 ${iconBgClass} ${iconColorClass}`}>
                      {link.icon}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[14.5px] font-semibold text-black leading-tight">
                        {link.label}
                      </span>
                      <span className="text-[12px] font-mono text-slate-500 leading-tight mt-[3px]">
                        {link.subLabel}
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
