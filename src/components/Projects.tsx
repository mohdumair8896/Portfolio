export default function Projects() {
  return (
    <section id="projects" className="section projects-section relative z-10 py-20 bg-slate-950/30">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="section-header text-center mb-16">
          <span className="section-tag inline-block bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full mb-4">Projects</span>
          <h2 className="section-title text-3xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">What I&apos;ve Built</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 backdrop-blur-md hover:border-indigo-500/50 transition-all group shadow-xl">
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M4 17l6-6 4 4 6-8"/></svg>
              </div>
              <a href="https://github.com/mohdumair8896" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
              </a>
            </div>
            <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-indigo-400 transition-colors">CloudFormation Infrastructure Pipeline</h3>
            <p className="text-slate-400 mb-6 text-sm leading-relaxed">
              Built a fully automated Jenkins pipeline integrated with GitHub to deploy AWS resources via CloudFormation templates using the AWS CLI. Configured EC2-hosted Jenkins server and verified stack execution.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs font-mono text-indigo-300 bg-indigo-500/10 px-2 py-1 rounded">Jenkins</span>
              <span className="text-xs font-mono text-indigo-300 bg-indigo-500/10 px-2 py-1 rounded">AWS EC2</span>
              <span className="text-xs font-mono text-indigo-300 bg-indigo-500/10 px-2 py-1 rounded">CloudFormation</span>
            </div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 backdrop-blur-md hover:border-cyan-500/50 transition-all group shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-cyan-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-bl-lg">Featured</div>
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>
              </div>
              <a href="https://github.com/mohdumair8896" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors mr-16">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
              </a>
            </div>
            <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-cyan-400 transition-colors">Cloud Native Resource Monitoring App on K8s</h3>
            <p className="text-slate-400 mb-6 text-sm leading-relaxed">
              Developed a Python/Flask application to monitor real-time CPU, memory, and disk usage. Containerized with Docker, published to Amazon ECR, and deployed to AWS EKS with automated scaling.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs font-mono text-cyan-300 bg-cyan-500/10 px-2 py-1 rounded">Python / Flask</span>
              <span className="text-xs font-mono text-cyan-300 bg-cyan-500/10 px-2 py-1 rounded">Docker</span>
              <span className="text-xs font-mono text-cyan-300 bg-cyan-500/10 px-2 py-1 rounded">AWS EKS</span>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
