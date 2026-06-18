"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 inset-x-0 z-[100] border-b border-white/7"
      style={{
        background: scrolled ? "rgba(10,10,15,0.72)" : "transparent",
        backdropFilter: scrolled ? "blur(20px) saturate(1.3)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px) saturate(1.3)" : "none",
        transition: "background 0.3s, backdrop-filter 0.3s",
        borderBottomColor: scrolled ? "rgba(255,255,255,0.07)" : "transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-[68px] flex items-center gap-7">

        {/* Brand */}
        <a href="#home" className="flex items-baseline gap-2.5 no-underline">
          <span className="font-serif italic text-2xl tracking-[-0.01em] text-white">
            Mohd Umair
          </span>
          <span
            className="group hidden sm:inline-flex items-baseline leading-none cursor-default select-none"
            title="DevOps & Cloud Engineer 🚀"
          >
            <span
              className="text-[12px] leading-none mr-1.5 transition-transform duration-300 group-hover:scale-125"
              style={{
                animation: "2.6s ease-in-out 0s infinite normal none running heartbeat",
                filter: "drop-shadow(rgba(167,139,250,0.5) 0px 0px 5px)",
              }}
            >
              ☁️
            </span>
            <span className="inline-flex items-baseline overflow-hidden">
              <span
                className="font-serif italic text-[15px] max-w-0 opacity-0 whitespace-nowrap transition-all duration-500 ease-[cubic-bezier(.2,.8,.3,1)] group-hover:max-w-[60px] group-hover:opacity-100 group-hover:mr-1.5"
                style={{ color: "rgb(167,139,250)" }}
              >
                builder
              </span>
              <span className="font-serif italic text-[15px] text-slate-400 transition-colors duration-300 group-hover:text-white">
                SRE
              </span>
            </span>
          </span>
        </a>

        {/* Center Nav Links */}
        <div className="hidden md:flex gap-1 ml-auto text-[14.5px]">
          {[
            { label: "Home",       href: "#home" },
            { label: "About",      href: "#about" },
            { label: "Skills",     href: "#skills" },
            { label: "Experience", href: "#experience" },
            { label: "Projects",   href: "#projects" },
            { label: "Contact",    href: "#contact" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="relative px-3.5 py-2 rounded-full no-underline transition-colors duration-200 text-slate-400 hover:text-white hover:bg-white/6"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Resume Button — gradient pill */}
        <a
          href="/UmairCV.pdf"
          download="Umair CV.pdf"
          className="group hidden md:flex items-center gap-2 h-10 px-[18px] ml-2 rounded-full no-underline text-sm font-semibold whitespace-nowrap text-white"
          style={{
            background: "linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)",
            boxShadow: "0 0 20px rgba(124,58,237,0.35)",
          }}
        >
          <span className="flex-none group-hover:[animation:dlbounce_.7s_ease-in-out_infinite]">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3v12m0 0 4.5-4.5M12 15l-4.5-4.5" />
              <path d="M4 17v2.5A1.5 1.5 0 0 0 5.5 21h13a1.5 1.5 0 0 0 1.5-1.5V17" />
            </svg>
          </span>
          Resume
        </a>

        {/* Get in touch Button — white pill */}
        <div className="relative hidden md:block">
          <a
            href="mailto:mohdumair8896@gmail.com"
            className="inline-flex items-center gap-1.5 bg-white text-slate-900 font-semibold text-sm px-5 py-2.5 rounded-full no-underline whitespace-nowrap transition-all duration-200 hover:shadow-[0_8px_24px_-8px_rgba(244,244,240,0.4)]"
          >
            Get in touch
            <span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          aria-label="Open menu"
          className="md:hidden ml-auto flex flex-col justify-center gap-[5px] w-10 h-10 bg-transparent border-0 cursor-pointer"
        >
          <span className="block h-[1.5px] w-5 bg-white transition-transform duration-300" />
          <span className="block h-[1.5px] w-5 bg-white transition-transform duration-300" />
        </button>

      </div>
    </nav>
  );
}
