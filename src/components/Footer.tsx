export default function Footer() {
  return (
    <footer className="relative z-10 w-full border-t border-slate-800/50 bg-transparent pt-32 pb-12 font-sans overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-[9px] md:text-[10px] font-mono text-slate-500 uppercase tracking-wider relative z-20">
        
        <div className="mb-4 md:mb-0 text-center md:text-left">
          &copy; {new Date().getFullYear()} Mohd Umair Shahid - release v4.0 - shipped from Remote, India
        </div>
        
        <div className="flex items-center gap-2 text-center md:text-right">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)] animate-pulse shrink-0"></span>
          <span>Agridarshan • Enterprise CI/CD • Verizon Cloud — all running in production right now</span>
        </div>
        
      </div>

      {/* Faint Background Text */}
      <div className="absolute bottom-[-2rem] md:bottom-[-4rem] left-0 w-full flex justify-center pointer-events-none select-none z-0 overflow-hidden opacity-30">
        <span className="text-[10rem] md:text-[18rem] font-bold text-slate-800/40 leading-none tracking-tighter" style={{ fontFamily: 'var(--font-sans)' }}>
          MOHDUMAIR
        </span>
      </div>
    </footer>
  );
}
