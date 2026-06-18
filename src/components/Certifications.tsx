export default function Certifications() {
  const certs = [
    { title: "Azure Fundamentals", code: "AZ-900", badge: "Microsoft", color: "from-blue-500 to-cyan-500", icon: "M13.05 4.5H6l-3 9h4.5l-3 6 10.5-9.5H11l2-5.5z" },
    { title: "Azure Administrator Associate", code: "AZ-104", badge: "Microsoft", color: "from-blue-500 to-cyan-500", icon: "M13.05 4.5H6l-3 9h4.5l-3 6 10.5-9.5H11l2-5.5z" },
    { title: "Azure Developer Associate", code: "AZ-204", badge: "Microsoft", color: "from-blue-500 to-cyan-500", icon: "M13.05 4.5H6l-3 9h4.5l-3 6 10.5-9.5H11l2-5.5z" },
    { title: "OCI DevOps Professional", code: "Oracle Cloud Infrastructure 2025", badge: "Oracle", color: "from-red-600 to-orange-500", oracle: true },
    { title: "OCI Multicloud Architect", code: "Oracle Cloud Infrastructure 2025", badge: "Oracle", color: "from-red-600 to-orange-500", oracle: true },
    { title: "OCI Networking Professional", code: "Oracle Cloud Infrastructure 2025", badge: "Oracle", color: "from-red-600 to-orange-500", oracle: true }
  ];

  return (
    <section id="certifications" className="section certs-section relative z-10 py-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="section-header text-center mb-16">
          <span className="section-tag inline-block bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full mb-4">Certifications</span>
          <h2 className="section-title text-3xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">My Credentials</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((c, i) => (
            <div key={i} className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 backdrop-blur-md hover:-translate-y-1 hover:border-indigo-500/40 transition-all flex items-center gap-4 relative overflow-hidden group">
              <div className={`absolute right-0 top-0 w-24 h-24 bg-gradient-to-br ${c.color} opacity-5 rounded-bl-full group-hover:scale-150 transition-transform duration-500`}></div>
              <div className={`w-14 h-14 shrink-0 rounded-full flex items-center justify-center bg-gradient-to-br ${c.color} shadow-lg`}>
                {c.oracle ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="2" y="8" width="20" height="8" rx="4" fill="white"/><rect x="6" y="10" width="4" height="4" rx="2" fill="#F80000"/></svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d={c.icon} fill="white"/></svg>
                )}
              </div>
              <div>
                <h4 className="font-bold text-slate-100 text-sm leading-tight mb-1">{c.title}</h4>
                <p className="text-xs text-slate-400 mb-2">{c.code}</p>
                <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full ${c.oracle ? 'bg-red-500/20 text-red-400' : 'bg-blue-500/20 text-blue-400'}`}>{c.badge}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
