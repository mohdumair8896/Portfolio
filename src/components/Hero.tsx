"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-24 md:pt-32 pb-10 px-6 z-10 font-sans">
      
      {/* Centered container for top content */}
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-5xl mx-auto text-center mt-10">
        
        {/* Top Pill */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center justify-center gap-2 md:gap-3 px-4 py-1.5 rounded-full bg-slate-900/40 border border-slate-700/50 backdrop-blur-md mb-8 md:mb-12"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse shrink-0"></span>
          <span className="text-[10px] md:text-xs font-semibold text-slate-200">DevOps & Cloud Professional</span>
          <span className="text-slate-600">|</span>
          <span className="text-[10px] md:text-xs text-slate-400">@ Akal Info Sys</span>
          <span className="text-slate-600 hidden sm:inline">|</span>
          <span className="text-[10px] md:text-xs text-slate-400 hidden sm:inline">2+ yrs</span>
        </motion.div>

        {/* Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-white mb-6 leading-[1.1] text-center"
        >
          <span className="inline-block">I build the</span> <span className="relative inline-block font-serif italic text-[#e9d5ff] font-normal px-2">
            infrastructure
            <svg className="absolute w-[115%] h-[140%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-80" viewBox="0 0 220 70" preserveAspectRatio="none">
               <path d="M20,35 C40,5 180,5 200,35 C220,65 40,65 20,35 Z" fill="none" stroke="#d8b4fe" strokeWidth="2.5" style={{filter: 'blur(2px)'}} />
               <path d="M20,35 C40,5 180,5 200,35 C220,65 40,65 20,35 Z" fill="none" stroke="#f3e8ff" strokeWidth="1" />
            </svg>
          </span><br className="hidden md:block" />
          <span className="inline-block mt-2 md:mt-0">engineers ship on.</span>
        </motion.h1>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate-400 text-sm md:text-base max-w-3xl mb-8 leading-relaxed px-4 mx-auto text-center"
        >
          Platforms designed, pipelines automated, production kept standing at scale — <strong>enterprise workloads on Azure & AWS at 99.99%</strong>. And when something breaks at 2am, I find the mechanism, not the symptom. Managed mission-critical CI/CD pipelines and infrastructure for the Department of Agriculture and Verizon.
        </motion.p>

        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-row items-center justify-center gap-4 mb-4"
        >
          <a href="#projects" className="px-6 py-2.5 rounded-full bg-[#d8b4fe] text-[#3b0764] text-sm font-semibold hover:bg-[#e9d5ff] transition-colors">
            See the work
          </a>
          <a href="mailto:mohdumair8896@gmail.com" className="px-5 py-2.5 rounded-full bg-transparent border border-slate-700 text-slate-300 text-sm font-medium hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            mohdumair8896@gmail.com
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center justify-center gap-6 text-xs font-mono text-slate-500 mb-16"
        >
          <a href="https://github.com/mohdumair8896" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors flex items-center gap-1.5">
            <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
            github ↗
          </a>
          <a href="https://www.linkedin.com/in/mohd-umair-shahid" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors flex items-center gap-1.5">
            <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            linkedin ↗
          </a>
        </motion.div>
      </div>

      {/* Bottom Metrics Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="w-full max-w-[1200px] mx-auto mt-auto"
      >
        <div className="grid grid-cols-2 md:grid-cols-6 border-y border-slate-800/40 bg-[#080810]/50 backdrop-blur-md">
          <div className="py-6 px-4 md:px-8 border-b md:border-b-0 border-r border-slate-800/40 text-left flex flex-col justify-center">
            <h4 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">2+ yrs</h4>
            <p className="text-[9px] md:text-[10px] font-mono text-slate-500 uppercase tracking-[0.2em] leading-relaxed">HANDS-ON<br/>EXPERIENCE</p>
          </div>
          <div className="py-6 px-4 md:px-8 border-b md:border-b-0 border-r md:border-r border-slate-800/40 text-left flex flex-col justify-center">
            <h4 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">6</h4>
            <p className="text-[9px] md:text-[10px] font-mono text-slate-500 uppercase tracking-[0.2em] leading-relaxed">CLOUD<br/>CERTIFICATIONS</p>
          </div>
          <div className="py-6 px-4 md:px-8 border-b md:border-b-0 border-r md:border-r border-slate-800/40 text-left flex flex-col justify-center">
            <h4 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">48</h4>
            <p className="text-[9px] md:text-[10px] font-mono text-slate-500 uppercase tracking-[0.2em] leading-relaxed">ORACLE<br/>WORLD RANK</p>
          </div>
          <div className="py-6 px-4 md:px-8 border-b md:border-b-0 border-r border-slate-800/40 text-left flex flex-col justify-center">
            <h4 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">99.99%</h4>
            <p className="text-[9px] md:text-[10px] font-mono text-slate-500 uppercase tracking-[0.2em] leading-relaxed">INFRA<br/>UPTIME</p>
          </div>
          <div className="py-6 px-4 md:px-8 border-r border-slate-800/40 text-left flex flex-col justify-center">
            <h4 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">70%</h4>
            <p className="text-[9px] md:text-[10px] font-mono text-slate-500 uppercase tracking-[0.2em] leading-relaxed">FASTER<br/>RELEASES</p>
          </div>
          <div className="py-6 px-4 md:px-8 text-left flex flex-col justify-center">
            <h4 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">40%</h4>
            <p className="text-[9px] md:text-[10px] font-mono text-slate-500 uppercase tracking-[0.2em] leading-relaxed">MTTR<br/>REDUCTION</p>
          </div>
        </div>
      </motion.div>
      
    </section>
  );
}
