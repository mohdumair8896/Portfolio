export default function Experience() {
  return (
    <section id="experience" className="section experience-section relative z-10 py-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="section-header text-center mb-16">
          <span className="section-tag inline-block bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full mb-4">Work Experience</span>
          <h2 className="section-title text-3xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">My Journey</h2>
        </div>
        <div className="timeline relative max-w-4xl mx-auto before:absolute before:inset-0 before:ml-4 md:before:ml-[50%] before:-translate-x-px before:w-0.5 before:bg-slate-800">
          
          <div className="timeline-item relative flex flex-col md:flex-row justify-between mb-12">
            <div className="md:w-5/12 mb-4 md:mb-0 text-right pr-8 md:pr-12 hidden md:block">
              <h3 className="job-title text-xl font-bold text-slate-200">DevOps Engineer</h3>
              <p className="company-name text-indigo-400 font-medium">Akal Information Systems Ltd.</p>
              <div className="job-meta flex justify-end gap-3 items-center mt-2 text-slate-400 text-sm">
                <span className="job-date flex items-center gap-1">
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                  May 2026 – Present
                </span>
              </div>
            </div>
            <div className="timeline-marker absolute left-4 md:left-1/2 -translate-x-1/2 mt-1.5 w-4 h-4 rounded-full border-4 border-slate-950 bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.5)] z-10"></div>
            <div className="timeline-card md:w-5/12 bg-slate-900/60 border border-slate-800 rounded-2xl p-6 backdrop-blur-md ml-12 md:ml-0 shadow-lg">
              <div className="md:hidden mb-4">
                <h3 className="job-title text-xl font-bold text-slate-200">DevOps Engineer</h3>
                <p className="company-name text-indigo-400 font-medium">Akal Information Systems Ltd.</p>
                <div className="text-sm text-slate-400 mt-1">May 2026 – Present</div>
              </div>
              <span className="inline-block bg-indigo-500/20 text-indigo-300 text-xs px-2 py-1 rounded mb-4 border border-indigo-500/20">Project: Department of Agriculture (Agridarshan Portal)</span>
              <ul className="space-y-2 text-slate-300 text-sm list-disc list-inside mb-4">
                <li>Automated end-to-end CI/CD workflows using Azure DevOps and Jenkins</li>
                <li>Scaled and managed containerized workloads using Docker, Terraform, and Ansible</li>
                <li>Established enterprise monitoring with Prometheus, Grafana, and Azure Monitor</li>
                <li>Owned production operations for the Agridarshan Portal</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-slate-950 border border-slate-800 rounded text-xs text-slate-400">Azure DevOps</span>
                <span className="px-2 py-1 bg-slate-950 border border-slate-800 rounded text-xs text-slate-400">Jenkins</span>
                <span className="px-2 py-1 bg-slate-950 border border-slate-800 rounded text-xs text-slate-400">Docker</span>
                <span className="px-2 py-1 bg-slate-950 border border-slate-800 rounded text-xs text-slate-400">Terraform</span>
              </div>
            </div>
          </div>

          <div className="timeline-item relative flex flex-col md:flex-row justify-between mb-12 flex-row-reverse">
            <div className="md:w-5/12 mb-4 md:mb-0 pl-8 md:pl-12 hidden md:block">
              <h3 className="job-title text-xl font-bold text-slate-200">Senior Analyst</h3>
              <p className="company-name text-cyan-400 font-medium">HCLTech</p>
              <div className="job-meta flex justify-start gap-3 items-center mt-2 text-slate-400 text-sm">
                <span className="job-date flex items-center gap-1">
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                  May 2025 – Oct 2025
                </span>
              </div>
            </div>
            <div className="timeline-marker absolute left-4 md:left-1/2 -translate-x-1/2 mt-1.5 w-4 h-4 rounded-full border-4 border-slate-950 bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.5)] z-10"></div>
            <div className="timeline-card md:w-5/12 bg-slate-900/60 border border-slate-800 rounded-2xl p-6 backdrop-blur-md ml-12 md:ml-0 md:mr-auto shadow-lg text-left">
              <div className="md:hidden mb-4">
                <h3 className="job-title text-xl font-bold text-slate-200">Senior Analyst</h3>
                <p className="company-name text-cyan-400 font-medium">HCLTech</p>
                <div className="text-sm text-slate-400 mt-1">May 2025 – Oct 2025</div>
              </div>
              <span className="inline-block bg-cyan-500/20 text-cyan-300 text-xs px-2 py-1 rounded mb-4 border border-cyan-500/20">Project: Verizon</span>
              <ul className="space-y-2 text-slate-300 text-sm list-disc list-inside mb-4">
                <li>Managed DevOps operations, CI/CD pipelines, monitoring for enterprise applications</li>
                <li>Implemented Infrastructure as Code using Terraform and Ansible</li>
                <li>Configured Prometheus and Grafana dashboards for proactive monitoring</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-slate-950 border border-slate-800 rounded text-xs text-slate-400">Terraform</span>
                <span className="px-2 py-1 bg-slate-950 border border-slate-800 rounded text-xs text-slate-400">Ansible</span>
                <span className="px-2 py-1 bg-slate-950 border border-slate-800 rounded text-xs text-slate-400">Prometheus</span>
              </div>
            </div>
          </div>

          <div className="timeline-item relative flex flex-col md:flex-row justify-between mb-12">
            <div className="md:w-5/12 mb-4 md:mb-0 text-right pr-8 md:pr-12 hidden md:block">
              <h3 className="job-title text-xl font-bold text-slate-200">Executive – Operations</h3>
              <p className="company-name text-amber-500 font-medium">Startek</p>
              <div className="job-meta flex justify-end gap-3 items-center mt-2 text-slate-400 text-sm">
                <span className="job-date flex items-center gap-1">
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                  Apr 2024 – Apr 2025
                </span>
              </div>
            </div>
            <div className="timeline-marker absolute left-4 md:left-1/2 -translate-x-1/2 mt-1.5 w-4 h-4 rounded-full border-4 border-slate-950 bg-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.5)] z-10"></div>
            <div className="timeline-card md:w-5/12 bg-slate-900/60 border border-slate-800 rounded-2xl p-6 backdrop-blur-md ml-12 md:ml-0 shadow-lg">
              <div className="md:hidden mb-4">
                <h3 className="job-title text-xl font-bold text-slate-200">Executive – Operations</h3>
                <p className="company-name text-amber-500 font-medium">Startek</p>
                <div className="text-sm text-slate-400 mt-1">Apr 2024 – Apr 2025</div>
              </div>
              <span className="inline-block bg-amber-500/20 text-amber-300 text-xs px-2 py-1 rounded mb-4 border border-amber-500/20">Project: Flipkart</span>
              <ul className="space-y-2 text-slate-300 text-sm list-disc list-inside mb-4">
                <li>Delivered operational support for cloud and on-premise systems</li>
                <li>Coordinated to implement automation scripts</li>
                <li>Developed basic CI/CD workflows for in-house applications</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-slate-950 border border-slate-800 rounded text-xs text-slate-400">CI/CD</span>
                <span className="px-2 py-1 bg-slate-950 border border-slate-800 rounded text-xs text-slate-400">Cloud Infrastructure</span>
                <span className="px-2 py-1 bg-slate-950 border border-slate-800 rounded text-xs text-slate-400">Automation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
