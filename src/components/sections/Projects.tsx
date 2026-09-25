"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { LineReveal, StaggerContainer, StaggerItem } from "@/components/motion/TextReveal";
import { TiltCard } from "@/components/motion/MagneticTilt";
import { projects } from "@/data/portfolio";

/* ── Color map ───────────────────────────────────────────────── */
const colorMap: Record<string, { accent: string; muted: string; border: string }> = {
  accent: {
    accent: "var(--accent)",
    muted: "var(--accent-muted)",
    border: "color-mix(in srgb, var(--accent) 25%, transparent)",
  },
  teal: {
    accent: "var(--teal)",
    muted: "var(--teal-muted)",
    border: "color-mix(in srgb, var(--teal) 25%, transparent)",
  },
  emerald: {
    accent: "#22c55e",
    muted: "rgba(34,197,94,0.1)",
    border: "rgba(34,197,94,0.25)",
  },
  amber: {
    accent: "#f59e0b",
    muted: "rgba(245,158,11,0.1)",
    border: "rgba(245,158,11,0.25)",
  },
};

/* ── AQI Pipeline SVG Diagram ────────────────────────────────── */
function AQIPipelineDiagram() {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-60px" });

  const nodes = [
    { label: "Open-Meteo", sub: "4yr Data", x: 60, y: 50 },
    { label: "Feature Eng.", sub: "354 features", x: 200, y: 50 },
    { label: "Random Forest", sub: "R² 0.82", x: 340, y: 50 },
    { label: "FastAPI", sub: "REST Backend", x: 480, y: 50 },
    { label: "Dashboard", sub: "Next.js UI", x: 620, y: 50 },
  ];

  const paths = [
    { d: "M 110 50 L 160 50" },
    { d: "M 250 50 L 300 50" },
    { d: "M 390 50 L 440 50" },
    { d: "M 530 50 L 580 50" },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full p-4 sm:p-6">
      <p
        className="text-[10px] uppercase tracking-widest font-semibold mb-6"
        style={{ color: "var(--text-tertiary)", fontFamily: "var(--font-mono)" }}
      >
        AQI Forecasting Pipeline
      </p>
      <div className="w-full overflow-x-auto">
        <svg
          ref={ref}
          viewBox="0 0 700 100"
          className="w-full"
          style={{ minWidth: "400px", height: "100px" }}
          aria-label="AQI Forecasting Pipeline diagram"
        >
          {/* Connector lines */}
          {paths.map((p, i) => (
            <motion.path
              key={i}
              d={p.d}
              stroke="var(--border-strong)"
              strokeWidth="1.5"
              strokeDasharray="4 2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.25, ease: "easeOut" }}
            />
          ))}
          {/* Arrow heads */}
          {paths.map((_, i) => (
            <motion.polygon
              key={`arrow-${i}`}
              points={`${160 + i * 140},46 ${168 + i * 140},50 ${160 + i * 140},54`}
              fill="var(--border-strong)"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.9 + i * 0.25 }}
            />
          ))}

          {/* Nodes */}
          {nodes.map((node, i) => (
            <motion.g
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.18, ease: [0.16, 1, 0.3, 1] }}
            >
              <rect
                x={node.x - 48}
                y={node.y - 28}
                width="96"
                height="56"
                rx="8"
                fill="var(--bg-elevated)"
                stroke="var(--border-strong)"
                strokeWidth="1"
              />
              {/* Accent top bar on node */}
              <rect
                x={node.x - 48}
                y={node.y - 28}
                width="96"
                height="3"
                rx="2"
                fill="var(--accent)"
              />
              <text
                x={node.x}
                y={node.y - 5}
                textAnchor="middle"
                fontSize="8"
                fontWeight="700"
                fill="var(--text-primary)"
                fontFamily="var(--font-display)"
              >
                {node.label}
              </text>
              <text
                x={node.x}
                y={node.y + 9}
                textAnchor="middle"
                fontSize="7"
                fill="var(--text-tertiary)"
                fontFamily="var(--font-mono)"
              >
                {node.sub}
              </text>
            </motion.g>
          ))}
        </svg>
      </div>
    </div>
  );
}

/* ── Featured Project Card ───────────────────────────────────── */
function FeaturedCard({ project }: { project: typeof projects[0] }) {
  const colors = colorMap[project.color] || colorMap.accent;

  return (
    <LineReveal delay={0.2}>
      <TiltCard maxTilt={3} glare className="w-full">
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            background: "var(--bg-surface)",
            border: `1px solid ${colors.border}`,
            boxShadow: `var(--shadow-md), 0 0 0 1px ${colors.border}`,
          }}
        >
          {/* Featured label */}
          <div
            className="flex items-center justify-between px-6 py-3"
            style={{ borderBottom: "1px solid var(--border)" }}
          >
            <span
              className="text-[10px] uppercase tracking-widest font-bold"
              style={{ color: colors.accent, fontFamily: "var(--font-mono)" }}
            >
              ★ Featured Project
            </span>
            <span
              className="text-[10px] px-2 py-0.5 rounded-full"
              style={{ background: colors.muted, color: colors.accent, fontFamily: "var(--font-mono)" }}
            >
              {project.label}
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-0">
            {/* Content */}
            <div className="p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <h3
                  style={{
                    fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)",
                    lineHeight: 1.1,
                    letterSpacing: "-0.03em",
                    color: "var(--text-primary)",
                    fontFamily: "var(--font-display)",
                  }}
                >
                  {project.name}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)" }}
                >
                  {project.longDescription}
                </p>

                {/* Metrics */}
                {project.metrics.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="metric-block flex flex-col items-center px-3 py-2"
                      >
                        <span
                          className="text-sm font-bold"
                          style={{ color: colors.accent, fontFamily: "var(--font-mono)" }}
                        >
                          {m.value}
                        </span>
                        <span
                          className="text-[10px] mt-0.5"
                          style={{ color: "var(--text-tertiary)", fontFamily: "var(--font-body)" }}
                        >
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 6).map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2 py-0.5 rounded-full"
                      style={{
                        background: "var(--bg-elevated)",
                        color: "var(--text-tertiary)",
                        border: "1px solid var(--border)",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Link */}
              {project.url && (
                <motion.a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 text-sm font-semibold self-start"
                  style={{ color: colors.accent, fontFamily: "var(--font-body)" }}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </motion.a>
              )}
            </div>

            {/* Diagram / visual */}
            <div
              className="relative min-h-[200px] lg:min-h-0 flex items-center justify-center"
              style={{ borderLeft: "1px solid var(--border)" }}
            >
              {project.image ? (
                <div className="absolute inset-0">
                  <Image
                    src={project.image}
                    alt={`${project.name} screenshot`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover opacity-60"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to bottom, transparent 30%, var(--bg-surface) 100%)",
                    }}
                  />
                </div>
              ) : (
                <AQIPipelineDiagram />
              )}
            </div>
          </div>
        </div>
      </TiltCard>
    </LineReveal>
  );
}

/* ── Standard Project Card ───────────────────────────────────── */
function ProjectCard({
  project,
  index,
}: {
  project: typeof projects[0];
  index: number;
}) {
  const colors = colorMap[project.color] || colorMap.accent;

  return (
    <StaggerItem>
      <TiltCard maxTilt={6} glare>
        <motion.div
          className="h-full rounded-2xl overflow-hidden flex flex-col"
          style={{
            background: "var(--bg-surface)",
            border: "1px solid var(--border)",
            boxShadow: "var(--shadow-sm)",
          }}
          whileHover={{ boxShadow: "var(--shadow-lg)" }}
          transition={{ duration: 0.25 }}
        >
          {/* Top accent bar */}
          <div className="h-1 w-full" style={{ background: colors.accent }} />

          <div className="p-6 sm:p-7 flex flex-col flex-1">
            {/* Label */}
            <p
              className="text-[10px] uppercase tracking-widest font-semibold mb-3"
              style={{ color: colors.accent, fontFamily: "var(--font-mono)" }}
            >
              {project.label}
            </p>

            {/* Title */}
            <h3
              className="font-display font-bold mb-3"
              style={{
                fontSize: "1.2rem",
                lineHeight: 1.2,
                letterSpacing: "-0.025em",
                color: "var(--text-primary)",
                fontFamily: "var(--font-display)",
              }}
            >
              {project.name}
            </h3>

            {/* Description */}
            <p
              className="text-sm leading-relaxed flex-1 mb-4"
              style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)" }}
            >
              {project.description}
            </p>

            {/* Metrics if any */}
            {project.metrics.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {project.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="metric-block flex flex-col items-center px-2.5 py-1.5"
                  >
                    <span
                      className="text-xs font-bold"
                      style={{ color: colors.accent, fontFamily: "var(--font-mono)" }}
                    >
                      {m.value}
                    </span>
                    <span
                      className="text-[9px]"
                      style={{ color: "var(--text-tertiary)", fontFamily: "var(--font-body)" }}
                    >
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tags.slice(0, 5).map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] px-2 py-0.5 rounded-full"
                  style={{
                    background: "var(--bg-elevated)",
                    color: "var(--text-tertiary)",
                    border: "1px solid var(--border)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Link */}
            {project.url && (
              <motion.a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold"
                style={{ color: colors.accent, fontFamily: "var(--font-body)" }}
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                <ExternalLink className="w-3.5 h-3.5" />
                View Project
              </motion.a>
            )}
          </div>
        </motion.div>
      </TiltCard>
    </StaggerItem>
  );
}

/* ── Main Section ────────────────────────────────────────────── */
export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="relative overflow-hidden"
      style={{ paddingTop: "7rem", paddingBottom: "7rem" }}
    >
      <div className="absolute inset-0" style={{ background: "var(--bg-base)" }} />
      <div className="absolute inset-0 bg-dots opacity-50" />
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="mb-14">
          <LineReveal delay={0}>
            <div className="inline-flex items-center gap-2 mb-5">
              <div className="w-5 h-px" style={{ background: "var(--accent)" }} />
              <span
                className="text-xs uppercase tracking-widest font-semibold"
                style={{ color: "var(--accent)", fontFamily: "var(--font-mono)" }}
              >
                Selected Work
              </span>
            </div>
          </LineReveal>
          <LineReveal delay={0.1}>
            <h2
              style={{
                fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
                lineHeight: 1.02,
                letterSpacing: "-0.04em",
                color: "var(--text-primary)",
                fontFamily: "var(--font-display)",
              }}
            >
              Things I&apos;ve{" "}
              <span style={{ color: "var(--accent)" }}>Shipped.</span>
            </h2>
          </LineReveal>
        </div>

        {/* Featured */}
        {featured.map((p) => (
          <div key={p.id} className="mb-8">
            <FeaturedCard project={p} />
          </div>
        ))}

        {/* Grid */}
        <StaggerContainer
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          stagger={0.1}
          delay={0.1}
        >
          {rest.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </StaggerContainer>
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
