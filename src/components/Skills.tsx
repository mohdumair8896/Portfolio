import { Badge } from "./ui/badge";

export default function Skills() {
  const categories = [
    {
      title: "Cloud Platforms",
      icon: <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z"/></svg>,
      color: "from-amber-500 to-red-500",
      skills: ["AWS", "Microsoft Azure", "OCI (Oracle Cloud)"]
    },
    {
      title: "Automation & CI/CD",
      icon: <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg>,
      color: "from-indigo-500 to-purple-500",
      skills: ["Jenkins", "GitLab CI", "Azure DevOps", "GitHub Actions", "Git"]
    },
    {
      title: "Containers & Orchestration",
      icon: <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>,
      color: "from-cyan-500 to-blue-500",
      skills: ["Docker", "Kubernetes", "Helm", "AWS EKS", "Amazon ECR"]
    },
    {
      title: "Infrastructure as Code",
      icon: <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
      color: "from-orange-500 to-red-500",
      skills: ["Terraform", "Ansible", "CloudFormation"]
    },
    {
      title: "Monitoring & Logging",
      icon: <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
      color: "from-emerald-500 to-green-600",
      skills: ["Prometheus", "Grafana", "ELK Stack", "Azure Monitor"]
    },
    {
      title: "Databases",
      icon: <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>,
      color: "from-sky-500 to-indigo-500",
      skills: ["MySQL", "PostgreSQL", "AWS RDS", "MariaDB"]
    }
  ];

  return (
    <section id="skills" className="section py-20 relative z-10 bg-gradient-to-b from-transparent via-indigo-900/5 to-transparent">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="section-header text-center mb-16">
          <span className="section-tag inline-block bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full mb-4">Technical Skills</span>
          <h2 className="section-title text-3xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">My Tech Stack</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 backdrop-blur-md hover:border-indigo-500/40 hover:-translate-y-1 transition-all shadow-lg hover:shadow-indigo-500/10">
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br ${cat.color} text-white`}>
                  {cat.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-200">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(skill => (
                  <span key={skill} className="px-3 py-1.5 bg-slate-950/50 border border-slate-800 rounded-md text-sm text-slate-300 font-medium tracking-wide">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
