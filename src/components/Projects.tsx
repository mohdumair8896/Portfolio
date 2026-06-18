export default function Projects() {
  const projects = [
    {
      title: "CloudFormation Infrastructure Pipeline",
      desc: "Built a fully automated Jenkins pipeline integrated with GitHub to deploy AWS resources via CloudFormation templates using the AWS CLI. Configured EC2-hosted Jenkins server and verified stack execution.",
      highlights: ["✓ Automated deployments", "✓ Infrastructure as Code", "✓ Stack monitoring"],
      tech: ["Jenkins", "AWS EC2", "CloudFormation", "AWS CLI", "GitHub"],
      link: "https://github.com/mohdumair8896",
      icon: <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M4 17l6-6 4 4 6-8"/><path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z" opacity="0.4"/></svg>,
      featured: false,
      enterprise: false
    },
    {
      title: "Cloud Native Resource Monitoring App on K8s",
      desc: "Developed a Python/Flask application to monitor real-time CPU, memory, and disk usage. Containerized with Docker, published to Amazon ECR, and deployed to AWS EKS with automated scaling.",
      highlights: ["✓ Real-time monitoring", "✓ Auto-scaling", "✓ Cloud-native deployment"],
      tech: ["Python / Flask", "Docker", "AWS EKS", "Amazon ECR", "Kubernetes", "boto3", "psutil"],
      link: "https://github.com/mohdumair8896",
      icon: <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>,
      featured: true,
      enterprise: false
    },
    {
      title: "Agridarshan Portal Infrastructure",
      desc: "Managed the entire CI/CD lifecycle for the Department of Agriculture portal. Automated deployments using Azure DevOps and Jenkins, and scaled containerized workloads with Docker and Terraform.",
      highlights: ["✓ Enterprise CI/CD", "✓ Multi-cloud", "✓ Zero-downtime deployments"],
      tech: ["Azure DevOps", "Terraform", "Docker", "Jenkins", "Ansible"],
      link: "https://github.com/mohdumair8896/agri-portal",
      icon: <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>,
      featured: false,
      enterprise: true
    },
    {
      title: "2048 Game CI/CD on AWS",
      desc: "Automated the deployment of the 2048 web game using a complete CI/CD pipeline on AWS. Orchestrated with Jenkins to build Docker images and deploy to EKS clusters.",
      highlights: ["✓ EKS Deployment", "✓ Container Orchestration", "✓ Automated Pipelines"],
      tech: ["AWS EKS", "Jenkins", "Docker", "GitHub"],
      link: "https://github.com/mohdumair8896/2048-Game-CICD-AWS",
      icon: <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>,
      featured: false,
      enterprise: false
    }
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Projects</span>
          <h2 className="section-title">What I&apos;ve Built</h2>
        </div>
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div key={idx} className={`project-card ${project.featured ? 'featured' : ''} ${project.enterprise ? 'enterprise' : ''}`}>
              {project.featured && <div className="project-featured-badge">Featured</div>}
              {project.enterprise && <div className="project-enterprise-badge" style={{position: 'absolute', top: 0, right: 0, background: '#6366f1', color: 'white', fontSize: '0.75rem', fontWeight: 'bold', padding: '4px 12px', borderBottomLeftRadius: '8px'}}>Enterprise</div>}
              
              <div className="project-header">
                <div className="project-icon">
                  {project.icon}
                </div>
                <div className="project-links">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="GitHub">
                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                  </a>
                </div>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>
              
              {project.highlights && project.highlights.length > 0 && (
                <div className="project-highlights">
                  {project.highlights.map((highlight, hIdx) => (
                    <span key={hIdx} className="highlight-tag">{highlight}</span>
                  ))}
                </div>
              )}
              
              <div className="project-tech">
                {project.tech.map(t => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
