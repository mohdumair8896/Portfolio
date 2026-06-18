"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="hero-tag"
        >
          <span className="pulse-dot"></span>
          <span>Available for Opportunities</span>
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hero-title"
        >
          Hi, I&apos;m <span className="gradient-text">Mohd Umair</span><br />
          <span className="typed-wrapper">
            <span className="typed-text">AWS & Azure Pro</span><span className="typed-cursor">|</span>
          </span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hero-desc"
        >
          DevOps & Cloud Professional with <strong>2+ years of experience</strong> in cloud infrastructure, automation, CI/CD, containers, and monitoring. Skilled in <span className="highlight">AWS</span>, <span className="highlight">Azure</span>, and modern DevOps tools.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="hero-stats"
        >
          <div className="stat-item">
            <span className="stat-number">2+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">6</span>
            <span className="stat-label">Certifications</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">48</span>
            <span className="stat-label">Oracle World Rank</span>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="hero-cta"
        >
          <a href="#contact" className="btn btn-primary">
            <span>Get in Touch</span>
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a href="/MagicalCV__1_.pdf" download="Mohd_Umair_Shahid_Resume.pdf" className="btn btn-download">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            <span>Download CV</span>
          </a>
          <a href="#projects" className="btn btn-outline">View Projects</a>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="hero-socials"
        >
          <a href="https://www.linkedin.com/in/mohd-umair-shahid" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a href="https://github.com/mohdumair8896" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
          </a>
          <a href="mailto:mohdumair8896@gmail.com" className="social-link" aria-label="Email">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"/></svg>
          </a>
        </motion.div>
      </div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="hero-visual"
      >
        <div className="avatar-container">
          <div className="avatar-ring ring-1"></div>
          <div className="avatar-ring ring-2"></div>
          <div className="avatar-ring ring-3"></div>
          <div className="avatar-inner">
            <svg className="avatar-icon" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="75" r="40" fill="url(#avatarGrad)"/>
              <path d="M30 180 Q30 130 100 130 Q170 130 170 180" fill="url(#avatarGrad2)"/>
              <defs>
                <linearGradient id="avatarGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#6366f1"/>
                  <stop offset="100%" stopColor="#8b5cf6"/>
                </linearGradient>
                <linearGradient id="avatarGrad2" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#6366f1"/>
                  <stop offset="100%" stopColor="#06b6d4"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="floating-badge badge-aws">
            <img src="https://img.shields.io/badge/AWS-FF9900?logo=amazon-aws&logoColor=white&style=flat" alt="AWS" />
          </div>
          <div className="floating-badge badge-azure">
            <img src="https://img.shields.io/badge/Azure-0078D4?logo=microsoft-azure&logoColor=white&style=flat" alt="Azure" />
          </div>
          <div className="floating-badge badge-k8s">
            <img src="https://img.shields.io/badge/K8s-326CE5?logo=kubernetes&logoColor=white&style=flat" alt="Kubernetes" />
          </div>
          <div className="floating-badge badge-docker">
            <img src="https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white&style=flat" alt="Docker" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
