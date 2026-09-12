"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import ContactDropdown from "./ContactDropdown";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const isClickScrolling = useRef(false);

  const navItems = [
    { label: "Projects",   href: "#projects" },
    { label: "Skills",     href: "#skills" },
    { label: "Incidents",  href: "#casestudies" },
    { label: "Work",       href: "#experience" },
  ];

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      setActiveSection(window.location.hash);
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      if (isClickScrolling.current) return;

      // If at the top of the page, clear active indicator
      if (window.scrollY < 400) {
        setActiveSection("");
        return;
      }

      // DOM order: skills -> experience (work) -> projects -> casestudies (incidents)
      const sections = [
        { id: "#skills", el: document.querySelector("#skills") as HTMLElement | null },
        { id: "#experience", el: document.querySelector("#experience") as HTMLElement | null },
        { id: "#projects", el: document.querySelector("#projects") as HTMLElement | null },
        { id: "#casestudies", el: document.querySelector("#casestudies") as HTMLElement | null },
      ];

      const scrollPos = window.scrollY + 220;

      for (let i = sections.length - 1; i >= 0; i--) {
        const item = sections[i];
        if (item.el && item.el.offsetTop <= scrollPos) {
          setActiveSection(item.id);
          return;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setActiveSection(href);
    isClickScrolling.current = true;
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", href);
    }
    setTimeout(() => {
      isClickScrolling.current = false;
    }, 850);
  };

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
            title="DevOps Engineer 🚀"
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
            <span className="font-serif italic text-[15px] text-slate-400 transition-colors duration-300 group-hover:text-white">
              DevOps Engineer
            </span>
          </span>
        </a>

        {/* Center Nav Links with dynamic active state & animated indicator */}
        <div className="flex max-md:hidden gap-1 ml-auto text-[14.5px]">
          {navItems.map(({ label, href }) => {
            const isActive = activeSection === href;
            return (
              <a
                key={label}
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className={`relative px-3.5 py-2 rounded-full no-underline transition-colors duration-200 ${
                  isActive ? "text-white font-medium" : "text-slate-400 hover:text-white hover:bg-white/6"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavPill"
                    className="absolute inset-0 rounded-full bg-white/10 border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.08)] pointer-events-none"
                    transition={{ type: "spring", stiffness: 450, damping: 35 }}
                  />
                )}
                <span className="relative z-10">{label}</span>
              </a>
            );
          })}
        </div>

        {/* Resume Button — gradient pill */}
        <a
          href="/UmairCV.pdf"
          download="Umair CV.pdf"
          className="group flex max-md:hidden items-center gap-2 h-10 px-[18px] ml-2 rounded-full no-underline text-sm font-semibold whitespace-nowrap text-white"
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

        <ContactDropdown />

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden ml-auto flex flex-col justify-center items-center gap-[5px] w-10 h-10 bg-transparent border-0 cursor-pointer"
          aria-label="Open menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`block h-[1.5px] w-5 bg-white transition-transform duration-300 ${isOpen ? "translate-y-[6.5px] rotate-45" : ""}`} />
          <span className={`block h-[1.5px] w-5 bg-white transition-transform duration-300 ${isOpen ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
        </button>

      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div
          className="md:hidden border-b border-white/10 px-6 py-4 flex flex-col gap-2"
          style={{
            background: "rgba(10, 10, 15, 0.97)",
            backdropFilter: "blur(20px)",
          }}
        >
          {navItems.map(({ label, href }) => {
            const isActive = activeSection === href;
            return (
              <a
                key={label}
                href={href}
                onClick={(e) => {
                  handleNavClick(e, href);
                  setIsOpen(false);
                }}
                className={`px-4 py-2.5 rounded-lg text-sm transition-colors no-underline ${
                  isActive
                    ? "bg-white/10 text-white border border-white/10 font-medium"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {label}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
}
