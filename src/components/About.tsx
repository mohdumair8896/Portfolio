import { Badge } from "./ui/badge";

export default function About() {
  return (
    <section id="about" className="section about-section relative z-10">
      <div className="container">
        <div className="section-header text-center mb-16">
          <span className="section-tag inline-block bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full mb-4">About Me</span>
          <h2 className="section-title text-3xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400 mb-4">Who I Am</h2>
        </div>
        <div className="about-grid grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="about-text">
            <p className="about-lead text-lg text-slate-200 mb-4 font-medium leading-relaxed">
              I&apos;m a <strong>DevOps & Cloud Professional</strong> based in Lucknow, India, with a passion for building scalable, reliable, and automated cloud infrastructure.
            </p>
            <p className="text-slate-400 mb-4 leading-relaxed">
              With over <strong>2 years of hands-on experience</strong>, I specialize in bridging the gap between development and operations — automating CI/CD pipelines, managing containerized workloads, and implementing enterprise-grade monitoring solutions.
            </p>
            <p className="text-slate-400 mb-6 leading-relaxed">
              I&apos;ve worked on major enterprise projects at <strong>Akal Information Systems</strong> and <strong>HCLTech</strong>, handling mission-critical infrastructure for clients like Verizon and the Department of Agriculture. My achievements include a <strong>Rank 48 Worldwide</strong> in Oracle&apos;s Race to Certification.
            </p>
            <div className="about-info flex flex-col gap-3 mt-8">
              <div className="flex items-center gap-3 text-slate-300">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" className="text-indigo-400" viewBox="0 0 24 24"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0116 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>Lucknow, India</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" className="text-indigo-400" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"/></svg>
                <span>mohdumair8896@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" className="text-indigo-400" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/></svg>
                <span>+91-8896211006</span>
              </div>
            </div>
          </div>
          <div className="about-achievements">
            <h3 className="text-xl font-bold text-slate-200 mb-6">Key Achievements</h3>
            <div className="flex flex-col gap-4">
              <div className="achievement-card flex items-center gap-4 bg-slate-900/60 p-4 border border-slate-800 rounded-xl hover:border-indigo-500/50 transition-all hover:translate-x-1">
                <div className="achievement-icon flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-amber-500 to-red-500 text-white">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-200 text-sm">Top Performer 2024</h4>
                  <p className="text-xs text-slate-400">Recognized at Startek for exceeding operational KPIs</p>
                </div>
              </div>
              <div className="achievement-card flex items-center gap-4 bg-slate-900/60 p-4 border border-slate-800 rounded-xl hover:border-indigo-500/50 transition-all hover:translate-x-1">
                <div className="achievement-icon flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-500 text-white">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-200 text-sm">Rank 48 Worldwide</h4>
                  <p className="text-xs text-slate-400">Oracle&apos;s Race to Certification</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
