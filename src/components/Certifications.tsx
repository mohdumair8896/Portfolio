export default function Certifications() {
  const certs = [
    { title: "Azure Fundamentals", code: "AZ-900", badge: "MICROSOFT", type: "azure", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M13.05 4.5H6l-3 9h4.5l-3 6 10.5-9.5H11l2-5.5z" fill="currentColor"/></svg> },
    { title: "Azure Administrator Associate", code: "AZ-104", badge: "MICROSOFT", type: "azure", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M13.05 4.5H6l-3 9h4.5l-3 6 10.5-9.5H11l2-5.5z" fill="currentColor"/></svg> },
    { title: "Azure Developer Associate", code: "AZ-204", badge: "MICROSOFT", type: "azure", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M13.05 4.5H6l-3 9h4.5l-3 6 10.5-9.5H11l2-5.5z" fill="currentColor"/></svg> },
    { title: "OCI DevOps Professional", code: "Oracle Cloud Infrastructure 2025", badge: "ORACLE", type: "oracle", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="2" y="8" width="20" height="8" rx="4" fill="currentColor"/><rect x="6" y="10" width="4" height="4" rx="2" fill="currentColor"/></svg> },
    { title: "OCI Multicloud Architect", code: "Oracle Cloud Infrastructure 2025", badge: "ORACLE", type: "oracle", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="2" y="8" width="20" height="8" rx="4" fill="currentColor"/><rect x="6" y="10" width="4" height="4" rx="2" fill="currentColor"/></svg> },
    { title: "OCI Networking Professional", code: "Oracle Cloud Infrastructure 2025", badge: "ORACLE", type: "oracle", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="2" y="8" width="20" height="8" rx="4" fill="currentColor"/><rect x="6" y="10" width="4" height="4" rx="2" fill="currentColor"/></svg> }
  ];

  return (
    <section id="certifications" className="section certs-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Certifications</span>
          <h2 className="section-title">My Credentials</h2>
        </div>
        <div className="certs-grid">
          {certs.map((c, i) => (
            <div key={i} className="cert-card">
              <div className={`cert-logo ${c.type === 'azure' ? 'azure' : 'oracle'}`}>
                {c.icon}
              </div>
              <div className="cert-info">
                <h4>{c.title}</h4>
                <p>{c.code}</p>
              </div>
              <span className={`cert-badge ${c.type === 'oracle' ? 'oracle-badge' : ''}`}>{c.badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

