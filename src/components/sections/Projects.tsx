"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight, Star } from "lucide-react";
import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { SectionBadge } from "@/components/ui/Badge";
import { projects } from "@/data/portfolio";

const colorMap = {
  violet: {
    glow: "rgba(124,58,237,0.18)",
    border: "rgba(124,58,237,0.35)",
    badge: "bg-violet-500/10 border-violet-500/25 text-violet-300",
    metric: "text-violet-300",
    metricBg: "bg-violet-500/[0.08] border-violet-500/20",
    tag: "bg-violet-500/10 border-violet-500/20 text-violet-300",
  },
  cyan: {
    glow: "rgba(6,182,212,0.15)",
    border: "rgba(6,182,212,0.3)",
    badge: "bg-cyan-500/10 border-cyan-500/25 text-cyan-300",
    metric: "text-cyan-300",
    metricBg: "bg-cyan-500/[0.08] border-cyan-500/20",
    tag: "bg-cyan-500/10 border-cyan-500/20 text-cyan-300",
  },
  emerald: {
    glow: "rgba(16,185,129,0.15)",
    border: "rgba(16,185,129,0.3)",
    badge: "bg-emerald-500/10 border-emerald-500/25 text-emerald-300",
    metric: "text-emerald-300",
    metricBg: "bg-emerald-500/[0.08] border-emerald-500/20",
    tag: "bg-emerald-500/10 border-emerald-500/20 text-emerald-300",
  },
  amber: {
    glow: "rgba(245,158,11,0.12)",
    border: "rgba(245,158,11,0.28)",
    badge: "bg-amber-500/10 border-amber-500/25 text-amber-300",
    metric: "text-amber-300",
    metricBg: "bg-amber-500/[0.08] border-amber-500/20",
    tag: "bg-amber-500/10 border-amber-500/20 text-amber-300",
  },
};

type ColorKey = keyof typeof colorMap;

interface ProjectCardProps {
  project: (typeof projects)[0];
  index: number;
  featured?: boolean;
}

function ProjectCard({ project, index, featured }: ProjectCardProps) {
  const colors = colorMap[project.color as ColorKey] || colorMap.violet;

  if (featured) {
    return (
      <Reveal delay={index * 0.1}>
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="group relative rounded-2xl border border-white/[0.08] overflow-hidden bg-white/[0.02] hover:border-white/[0.13] transition-all duration-400"
          style={{
            boxShadow: `0 4px 40px rgba(0,0,0,0.4)`,
          }}
        >
          {/* Hover glow overlay */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
            style={{
              boxShadow: `inset 0 0 0 1px ${colors.border}, 0 0 60px ${colors.glow}`,
            }}
          />

          <div className="flex flex-col lg:flex-row">
            {/* Image panel */}
            <div className="relative lg:w-[45%] h-56 sm:h-64 lg:h-auto overflow-hidden bg-white/[0.03] shrink-0">
              <div
                className="absolute inset-0 z-10"
                style={{
                  background: `linear-gradient(to right, transparent 60%, rgba(10,10,20,0.95)), linear-gradient(to bottom, transparent 70%, rgba(10,10,20,0.9))`,
                }}
              />
              {/* Background gradient for when no image */}
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(135deg, ${colors.glow} 0%, rgba(0,0,0,0.3) 100%)`,
                }}
              />
              {/* Project image */}
              <Image
                src={project.image}
                alt={project.name}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
              />
              {/* Overlay icon when no image */}
              <div className="absolute inset-0 flex items-center justify-center z-0">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{ background: colors.glow }}
                >
                  <Star className={`w-7 h-7 ${colors.metric}`} />
                </div>
              </div>

              {/* Featured badge */}
              <div className="absolute top-4 left-4 z-20">
                <span
                  className={`text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full border ${colors.badge} backdrop-blur-md`}
                >
                  ★ Featured
                </span>
              </div>
            </div>

            {/* Content panel */}
            <div className="flex-1 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div>
                    <p className="text-xs text-white/35 uppercase tracking-widest font-semibold mb-1">
                      {project.label}
                    </p>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight">
                      {project.name}
                    </h3>
                  </div>
                </div>

                <p className="text-white/50 leading-relaxed text-sm lg:text-base mb-5 mt-3">
                  {project.description}
                </p>

                {/* Metrics */}
                {project.metrics.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.metrics.map((m) => (
                      <div
                        key={m.label}
                        className={`flex flex-col items-center px-3.5 py-2 rounded-xl border ${colors.metricBg}`}
                      >
                        <span className={`text-sm font-black ${colors.metric}`}>{m.value}</span>
                        <span className="text-[10px] text-white/35 uppercase tracking-wide leading-none mt-0.5">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-[10px] font-semibold px-2.5 py-1 rounded-full border ${colors.tag}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex items-center gap-3">
                {project.url && (
                  <motion.a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 3 }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.05] border border-white/[0.10] hover:border-white/[0.20] text-sm font-semibold text-white/70 hover:text-white transition-all"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Live Demo
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </Reveal>
    );
  }

  // Standard card
  return (
    <Reveal delay={index * 0.1}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="group relative rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:border-white/[0.12] transition-all duration-300 overflow-hidden h-full"
      >
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
          style={{ background: `radial-gradient(ellipse at top, ${colors.glow} 0%, transparent 65%)` }}
        />

        <div className="relative p-6 flex flex-col h-full">
          {/* Label */}
          <span className={`text-[10px] font-bold uppercase tracking-widest ${colors.metric} opacity-70 mb-3`}>
            {project.label}
          </span>

          {/* Title */}
          <h3 className="text-lg font-bold text-white/90 mb-2">{project.name}</h3>

          {/* Description */}
          <p className="text-sm text-white/45 leading-relaxed mb-4 flex-1">{project.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.slice(0, 5).map((tag) => (
              <span
                key={tag}
                className={`text-[10px] font-semibold px-2.5 py-1 rounded-full border ${colors.tag}`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/40 hover:text-white/70 transition-colors"
            >
              <ExternalLink className="w-3 h-3" />
              View Project
            </a>
          )}
        </div>

        {/* Bottom accent line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-400"
          style={{
            background: `linear-gradient(90deg, transparent, ${colors.border}, transparent)`,
          }}
        />
      </motion.div>
    </Reveal>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0a14]" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(124,58,237,0.3), rgba(6,182,212,0.2), transparent)",
        }}
      />
      {/* Ambient glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(109,40,217,0.09) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="mb-14">
          <Reveal>
            <SectionBadge className="mb-5">Selected Work</SectionBadge>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
              Projects That{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #a78bfa 0%, #06b6d4 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Ship.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-white/45 text-base sm:text-lg max-w-xl">
              ML systems, RAG pipelines, and AI-powered applications built end-to-end.
            </p>
          </Reveal>
        </div>

        {/* Featured project */}
        <div className="mb-8">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} featured />
          ))}
        </div>

        {/* Grid of other projects */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
