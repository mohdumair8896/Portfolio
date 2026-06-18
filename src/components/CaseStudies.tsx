"use client";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ServerCrash, Database, HardDrive, Box, GitMerge } from "lucide-react";

export default function CaseStudies() {
  const cases = [
    {
      title: "Jenkins Pipeline Troubleshooting",
      description: "Resolved broken CI/CD pipelines caused by dependency conflicts and node disconnects.",
      icon: <GitMerge className="h-6 w-6 text-indigo-500" />,
      solution: "Implemented pipeline-as-code with declarative syntax, added robust error handling, and configured auto-scaling Jenkins agents using Docker, reducing build failures by 85%.",
      tags: ["Jenkins", "Groovy", "Docker"]
    },
    {
      title: "Production Image API Resolution",
      description: "Diagnosed and fixed critical image rendering API failures in production.",
      icon: <ServerCrash className="h-6 w-6 text-red-500" />,
      solution: "Traced logs across microservices using ELK stack, identified memory leaks in the image processing pod, and optimized Kubernetes resource limits & requests.",
      tags: ["Kubernetes", "ELK Stack", "Microservices"]
    },
    {
      title: "PostgreSQL Backup & Restore",
      description: "Recovered a corrupted database without data loss under strict SLA.",
      icon: <Database className="h-6 w-6 text-blue-500" />,
      solution: "Executed point-in-time recovery (PITR) using WAL files, and subsequently automated daily pg_dump backups to AWS S3 with lifecycle policies.",
      tags: ["PostgreSQL", "AWS S3", "Bash"]
    },
    {
      title: "Disk Space Issue Resolution",
      description: "Prevented production outages due to 100% disk utilization on critical nodes.",
      icon: <HardDrive className="h-6 w-6 text-amber-500" />,
      solution: "Automated log rotation and cleanup scripts via Ansible, and configured Prometheus/Grafana alerts to trigger at 80% capacity.",
      tags: ["Ansible", "Prometheus", "Linux"]
    },
    {
      title: "Docker Volume Management",
      description: "Fixed persistent data loss issues across container restarts.",
      icon: <Box className="h-6 w-6 text-cyan-500" />,
      solution: "Migrated ephemeral local storage to named Docker volumes and mapped them to managed EBS volumes, ensuring data persistence and easy backup.",
      tags: ["Docker", "AWS EBS", "Storage"]
    }
  ];

  return (
    <section id="casestudies" className="section bg-slate-950/50 py-20 relative z-10">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="section-header text-center mb-16">
          <span className="section-tag inline-block bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full mb-4">Real World Scenarios</span>
          <h2 className="section-title text-3xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400 mb-4">DevOps Case Studies</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Hands-on troubleshooting and architecture optimization from production environments.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((study, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="project-card visible h-full flex flex-col">
                <div className="mb-4 bg-slate-800/50 w-12 h-12 rounded-lg flex items-center justify-center border border-slate-700">
                  {study.icon}
                </div>
                <h3 className="text-slate-100 text-lg font-bold mb-2">{study.title}</h3>
                <p className="text-slate-400 text-sm mb-6">{study.description}</p>
                <div className="bg-slate-950/50 p-4 rounded-md border border-slate-800/50 mb-6 flex-1">
                  <p className="text-sm text-slate-300">
                    <strong className="text-indigo-400 block mb-1">Solution:</strong>
                    {study.solution}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {study.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="bg-slate-800 text-slate-300 hover:bg-slate-700">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
