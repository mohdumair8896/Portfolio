"use client";

export default function Projects() {
  const projects = [
    {
      title: "Precision Logistics Management System (LMS)",
      desc: "Enterprise Fleet Intelligence & Logistics Management platform built with Next.js 15+ (App Router), React 19, TypeScript, and Zustand. Features real-time telematics HUD, smart dispatch vehicle allocation engine with capacity scoring, warehouse staging with dynamic axle weight balance gauge, and live corridor simulation with fast-forward journey playback.",
      highlights: [
        "✓ Real-time Telematics HUD",
        "✓ Smart Dispatch Allocation",
        "✓ Corridor Journey Simulation",
        "✓ Dynamic Axle Weight Gauge"
      ],
      tech: ["Next.js 15+", "React 19", "TypeScript", "TailwindCSS", "Zustand", "Framer Motion", "Vercel"],
      link: "https://github.com/mohdumair8896/Logistics_System",
      live: "https://logistics-system-chi.vercel.app",
      icon: (
        <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <rect x="1" y="3" width="15" height="13" rx="2" />
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      ),
      badge: "Latest Project",
      badgeType: "badge-latest",
      featured: true,
      latest: true,
      enterprise: false
    },
    {
      title: "AgriPortal — Agriculture Dept Microservices Platform",
      desc: "Enterprise microservices architecture for the Department of Agriculture handling farmer registration, crop cycles, and subsidy schemes. Implemented independent Node.js backend services, NGINX API Gateway, Angular 17 UI, PostgreSQL, Docker Compose, Kubernetes orchestration, and declarative Jenkins CI/CD.",
      highlights: [
        "✓ Microservices Architecture",
        "✓ Kubernetes Orchestration",
        "✓ NGINX API Gateway",
        "✓ Declarative Jenkins CI/CD"
      ],
      tech: ["Kubernetes", "Docker", "NGINX Gateway", "Node.js", "Angular 17", "PostgreSQL", "Jenkins"],
      link: "https://github.com/mohdumair8896/agri-portal",
      icon: (
        <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M12 2a10 10 0 0 1 10 10c0 5.5-4.5 10-10 10S2 17.5 2 12A10 10 0 0 1 12 2z" opacity="0.3" />
          <path d="M12 6v12M8 10l4-4 4 4M7 15c2-2 4-3 5-3s3 1 5 3" />
        </svg>
      ),
      badge: "Enterprise",
      badgeType: "badge-enterprise",
      featured: true,
      latest: false,
      enterprise: true
    },
    {
      title: "DevSecOps Cloud Deployment with GitOps",
      desc: "Production-grade DevSecOps pipeline on AWS integrating automated static analysis and container vulnerability scanning with SonarQube & Trivy, Docker image publishing, Kubernetes deployment on EKS, and GitOps continuous delivery via ArgoCD with Prometheus/Grafana observability.",
      highlights: [
        "✓ GitOps via ArgoCD",
        "✓ Security (Trivy & SonarQube)",
        "✓ Prometheus & Grafana Monitoring"
      ],
      tech: ["Jenkins", "ArgoCD", "Kubernetes", "AWS EKS", "SonarQube", "Trivy", "Docker", "Prometheus"],
      link: "https://github.com/mohdumair8896/Netflix-Clone",
      icon: (
        <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
      badge: "DevSecOps",
      badgeType: "badge-devsecops",
      featured: false,
      latest: false,
      enterprise: false
    },
    {
      title: "Cloud Native Resource Monitoring App on K8s",
      desc: "Developed a Python/Flask application to monitor real-time CPU, memory, and disk usage. Containerized with Docker, published to Amazon ECR, and deployed to AWS EKS with automated scaling.",
      highlights: [
        "✓ Real-time monitoring",
        "✓ Auto-scaling",
        "✓ Cloud-native deployment"
      ],
      tech: ["Python / Flask", "Docker", "AWS EKS", "Amazon ECR", "Kubernetes", "boto3", "psutil"],
      link: "https://github.com/mohdumair8896/Cloud_Native_Monitoring_Application",
      icon: (
        <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
        </svg>
      ),
      badge: "Cloud Native",
      badgeType: "badge-featured",
      featured: false,
      latest: false,
      enterprise: false
    },
    {
      title: "CloudFormation Infrastructure Pipeline",
      desc: "Built a fully automated Jenkins pipeline integrated with GitHub to deploy AWS resources via CloudFormation templates using the AWS CLI. Configured EC2-hosted Jenkins server and verified stack execution.",
      highlights: [
        "✓ Automated deployments",
        "✓ Infrastructure as Code",
        "✓ Stack monitoring"
      ],
      tech: ["Jenkins", "AWS EC2", "CloudFormation", "AWS CLI", "GitHub"],
      link: "https://github.com/mohdumair8896/Cloudformation",
      icon: (
        <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M4 17l6-6 4 4 6-8" />
          <path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z" opacity="0.4" />
        </svg>
      ),
      featured: false,
      latest: false,
      enterprise: false
    },
    {
      title: "2048 Game CI/CD on AWS",
      desc: "Automated the deployment of the 2048 web game using a complete CI/CD pipeline on AWS. Orchestrated with Jenkins to build Docker images and deploy to EKS clusters with security and quality scanning.",
      highlights: [
        "✓ EKS Deployment",
        "✓ Container Orchestration",
        "✓ Automated Pipelines"
      ],
      tech: ["AWS EKS", "Jenkins", "Docker", "Trivy", "SonarQube", "GitHub"],
      link: "https://github.com/mohdumair8896/2048-Game-CICD-AWS",
      icon: (
        <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
      featured: false,
      latest: false,
      enterprise: false
    }
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Projects</span>
          <h2 className="section-title">What I&apos;ve Built</h2>
          <p className="section-subtitle">
            Enterprise cloud platforms, automated CI/CD pipelines, and microservices architectures built for scale and reliability.
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div
              key={idx}
              onClick={() => {
                window.open(project.live || project.link, "_blank", "noopener,noreferrer");
              }}
              className={`project-card group cursor-pointer ${project.featured ? 'featured' : ''} ${project.latest ? 'latest' : ''} ${project.enterprise ? 'enterprise' : ''}`}
            >
              {project.badge && (
                <div className={`project-badge ${project.badgeType || 'badge-featured'}`}>
                  {project.latest && (
                    <span
                      style={{
                        width: '7px',
                        height: '7px',
                        borderRadius: '50%',
                        backgroundColor: '#34d399',
                        boxShadow: '0 0 8px #34d399',
                        display: 'inline-block'
                      }}
                    />
                  )}
                  {project.badge}
                </div>
              )}

              <div className="project-header">
                <div className="project-icon group-hover:scale-110 transition-transform duration-300">
                  {project.icon}
                </div>
                <div className="project-links" onClick={(e) => e.stopPropagation()}>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="View Live Demo"
                      title="View Live Demo"
                    >
                      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  )}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label="GitHub Repository"
                    title="GitHub Repository"
                  >
                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>

              <h3 className="project-title group-hover:text-indigo-400 transition-colors">
                {project.title}
              </h3>
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

              <div className="mt-5 pt-4 border-t border-white/8 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-indigo-400 group-hover:text-indigo-300 font-semibold transition-colors">
                  {project.live ? "Explore Live Demo" : "View Source Code"}
                  <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </span>
                <span className="text-slate-500 group-hover:text-slate-300 transition-colors">
                  Click to open ↗
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
