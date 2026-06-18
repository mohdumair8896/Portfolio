"use client";
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      id: 1,
      date: "2026 — now",
      company: "akal info sys",
      title: "DevOps Engineer",
      description: "Own production operations for the Department of Agriculture (Agridarshan Portal). Automated end-to-end CI/CD workflows using Azure DevOps and Jenkins. Scaled and managed containerized workloads using Docker, Terraform, and Ansible. Established enterprise monitoring with Prometheus, Grafana, and Azure Monitor.",
      active: true,
    },
    {
      id: 2,
      date: "2025 — 2025",
      company: "hcltech",
      title: "Senior Analyst",
      description: "Managed DevOps operations, CI/CD pipelines, and monitoring for Verizon enterprise applications. Implemented Infrastructure as Code using Terraform and Ansible, and configured Prometheus and Grafana dashboards for proactive monitoring.",
      active: false,
    },
    {
      id: 3,
      date: "2024 — 2025",
      company: "startek",
      title: "Executive — Operations",
      description: "Delivered operational support for Flipkart's cloud and on-premise systems. Coordinated the implementation of automation scripts and developed basic CI/CD workflows for in-house applications.",
      active: false,
    }
  ];

  return (
    <section id="experience" className="relative z-10 py-24 md:py-32 font-sans w-full flex justify-center">
      {/* Explicitly centered wrapper box */}
      <div className="w-full max-w-[1000px] px-6 md:px-12 flex flex-col">
        
        {/* Header */}
        <div className="mb-20 md:mb-28">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 text-[10px] md:text-xs font-mono text-[#a78bfa] uppercase tracking-[0.2em] mb-8"
          >
            <div className="w-8 md:w-12 h-[1px] bg-[#a78bfa]/50"></div>
            The Journey
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05]"
          >
            Executive to <span className="font-serif italic font-normal text-[#e9d5ff]">owning the<br className="hidden md:block" /> infrastructure</span> in two years.
          </motion.h2>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-slate-800/60 ml-2 md:ml-4 flex flex-col pt-4">
        
        {experiences.map((exp, index) => (
          <motion.div 
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="relative pl-6 md:pl-20 group"
          >
            {/* Dot */}
            <div 
              className={`absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full ${
                exp.active 
                  ? "bg-[#a78bfa] shadow-[0_0_10px_rgba(167,139,250,0.6)]" 
                  : "bg-slate-600"
              }`}
            ></div>
            
            <div className="flex flex-col md:flex-row gap-2 md:gap-16">
              {/* Left Col (Date & Company) */}
              <div className="md:w-32 shrink-0 flex flex-col md:pt-1">
                <span className={`text-xs md:text-sm font-mono mb-1 ${exp.active ? "text-[#a78bfa]" : "text-slate-400"}`}>
                  {exp.date}
                </span>
                <span className="text-[10px] md:text-xs font-mono text-slate-600 lowercase tracking-wider">
                  {exp.company}
                </span>
              </div>
              
              {/* Right Col (Title & Desc) */}
              <div className="flex-1 pb-12 md:pb-16 border-b border-slate-800/40 group-last:border-0 group-last:pb-0 mt-2 md:mt-0">
                <h3 className="text-lg md:text-2xl font-bold text-slate-100 mb-3 md:mb-4 tracking-tight">
                  {exp.title}
                </h3>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}

        </div>
      </div>
    </section>
  );
}
