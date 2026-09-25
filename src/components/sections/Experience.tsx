"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Briefcase, Calendar, MapPin, ChevronDown } from "lucide-react";
import { LineReveal } from "@/components/motion/TextReveal";
import { Counter } from "@/components/motion/Counter";
import { experiences } from "@/data/portfolio";

type ExperienceType = typeof experiences[number];

function MetricCard({ metric, delay }: { metric: { label: string; value: string; raw: number }; delay: number }) {
  const isDecimal = metric.raw < 10 && metric.raw > 0;
  const isLarge = metric.raw > 1000;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      className="metric-block flex flex-col items-center text-center px-4 py-3 min-w-[80px]"
    >
      <span
        className="text-lg font-bold tabular-nums leading-none"
        style={{ color: "var(--accent)", fontFamily: "var(--font-mono)" }}
      >
        {isLarge ? (
          metric.value
        ) : (
          <Counter to={metric.raw} decimals={isDecimal ? 2 : 0} duration={1.5} />
        )}
      </span>
      <span
        className="text-[10px] uppercase tracking-wider mt-1 leading-tight"
        style={{ color: "var(--text-tertiary)", fontFamily: "var(--font-body)" }}
      >
        {metric.label}
      </span>
    </motion.div>
  );
}

function TimelineLine() {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, { once: true });

  return (
    <svg
      ref={ref}
      className="absolute left-0 top-0 h-full"
      width="2"
      aria-hidden="true"
    >
      <motion.line
        x1="1" y1="0" x2="1" y2="100%"
        stroke="var(--border-strong)"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
    </svg>
  );
}

function ExperienceCard({ exp, index }: { exp: ExperienceType; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-60px" });

  const accentColor = exp.color === "accent" ? "var(--accent)" : "var(--teal)";
  const accentMuted = exp.color === "accent" ? "var(--accent-muted)" : "var(--teal-muted)";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 24 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 24 }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-2xl overflow-hidden"
      style={{
        background: "var(--bg-base)",
        border: "1px solid var(--border)",
        boxShadow: "var(--shadow-sm)",
      }}
    >
      {/* Accent top bar */}
      <div className="h-1 w-full" style={{ background: accentColor }} />

      <div className="p-6 sm:p-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
          <div className="flex items-start gap-4">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
              style={{ background: accentMuted }}
            >
              <Briefcase className="w-5 h-5" style={{ color: accentColor }} />
            </div>
            <div>
              <h3
                className="text-base sm:text-lg font-bold leading-tight"
                style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)" }}
              >
                {exp.role}
              </h3>
              <p
                className="text-sm font-semibold mt-0.5"
                style={{ color: accentColor, fontFamily: "var(--font-body)" }}
              >
                {exp.company}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" style={{ color: "var(--text-tertiary)" }} />
              <span
                className="text-xs"
                style={{ color: "var(--text-tertiary)", fontFamily: "var(--font-mono)" }}
              >
                {exp.period}
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" style={{ color: "var(--text-tertiary)" }} />
              <span
                className="text-xs"
                style={{ color: "var(--text-tertiary)", fontFamily: "var(--font-body)" }}
              >
                {exp.location}
              </span>
            </div>
          </div>
        </div>

        {/* Project tag */}
        <div className="mb-4">
          <span
            className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full"
            style={{
              background: accentMuted,
              color: accentColor,
              fontFamily: "var(--font-mono)",
              border: `1px solid color-mix(in srgb, ${accentColor} 20%, transparent)`,
            }}
          >
            ◆ {exp.project}
          </span>
        </div>

        {/* Description */}
        <p
          className="mb-5"
          style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", lineHeight: 1.7, letterSpacing: "-0.005em" }}
        >
          {exp.description}
        </p>

        {/* Metrics */}
        {exp.metrics.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-5">
            {exp.metrics.map((m, i) => (
              <MetricCard key={m.label} metric={m} delay={0.3 + i * 0.1} />
            ))}
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {exp.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full"
              style={{
                background: "var(--bg-surface)",
                color: "var(--text-secondary)",
                border: "1px solid var(--border)",
                fontFamily: "var(--font-body)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Expandable highlights */}
        {exp.highlights.length > 0 && (
          <>
            <button
              onClick={() => setExpanded((v) => !v)}
              className="flex items-center gap-1.5 text-xs font-semibold transition-colors py-1"
              style={{ color: accentColor, fontFamily: "var(--font-body)" }}
            >
              <motion.span
                animate={{ rotate: expanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-4 h-4" />
              </motion.span>
              {expanded ? "Hide" : "Show"} highlights
            </button>

            <AnimatePresence>
              {expanded && (
                <motion.ul
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden mt-3 space-y-2"
                >
                  {exp.highlights.map((h, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 }}
                      className="flex gap-2.5 text-sm leading-snug"
                      style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", lineHeight: 1.7, letterSpacing: "-0.005em" }}
                    >
                      <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: accentColor }} />
                      {h}
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </>
        )}
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden"
      style={{ paddingTop: "7rem", paddingBottom: "7rem" }}
    >
      <div className="absolute inset-0" style={{ background: "var(--bg-surface)" }} />
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="mb-14">
          <LineReveal delay={0}>
            <div className="inline-flex items-center gap-2 mb-5">
              <div className="w-5 h-px" style={{ background: "var(--accent)" }} />
              <span
                style={{ fontFamily: "var(--font-mono)", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent)" }}
              >
                Work Experience
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
              Where I&apos;ve{" "}
              <span style={{ color: "var(--accent)" }}>Built Things.</span>
            </h2>
          </LineReveal>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop timeline line */}
          <div className="hidden md:block absolute left-0 top-4 bottom-4 w-px">
            <TimelineLine />
          </div>

          <div className="md:pl-8 space-y-6">
            {experiences.map((exp, i) => (
              <div key={exp.id} className="relative">
                {/* Timeline dot */}
                <motion.div
                  className="hidden md:block absolute -left-[2.25rem] top-7 w-2.5 h-2.5 rounded-full border-2"
                  style={{
                    background: "var(--bg-surface)",
                    borderColor: "var(--accent)",
                  }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.2 }}
                />
                <ExperienceCard exp={exp} index={i} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
