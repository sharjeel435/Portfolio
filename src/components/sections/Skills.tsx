"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Brain, Code2, Cpu, Users } from "lucide-react";
import { LineReveal } from "@/components/motion/TextReveal";
import { skillGroups } from "@/data/portfolio";

const iconMap = { Brain, Code2, Cpu, Users };

const colorMap: Record<string, { accent: string; muted: string; border: string }> = {
  accent: { accent: "var(--accent)", muted: "var(--accent-muted)", border: "color-mix(in srgb, var(--accent) 20%, transparent)" },
  teal: { accent: "var(--teal)", muted: "var(--teal-muted)", border: "color-mix(in srgb, var(--teal) 20%, transparent)" },
  emerald: { accent: "#22c55e", muted: "rgba(34,197,94,0.1)", border: "rgba(34,197,94,0.2)" },
  amber: { accent: "#f59e0b", muted: "rgba(245,158,11,0.1)", border: "rgba(245,158,11,0.2)" },
};

function SkillPill({ skill, accent, muted, border, delay }: {
  skill: string; accent: string; muted: string; border: string; delay: number;
}) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.05, borderColor: accent, color: accent, background: muted }}
      className="inline-block text-xs px-3 py-1.5 rounded-full cursor-default transition-colors"
      style={{
        background: "var(--bg-base)",
        color: "var(--text-secondary)",
        border: "1px solid var(--border)",
        fontFamily: "var(--font-body)",
      }}
    >
      {skill}
    </motion.span>
  );
}

function SkillGroupCard({ group, index }: { group: typeof skillGroups[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-60px" });
  const Icon = iconMap[group.icon as keyof typeof iconMap] || Brain;
  const colors = colorMap[group.color] || colorMap.accent;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4, boxShadow: "var(--shadow-md)" }}
      className="rounded-2xl p-6"
      style={{
        background: "var(--bg-base)",
        border: "1px solid var(--border)",
        boxShadow: "var(--shadow-sm)",
        transition: "box-shadow 0.3s ease, transform 0.3s ease",
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: colors.muted }}
        >
          <Icon className="w-5 h-5" style={{ color: colors.accent }} />
        </div>
        <h3
          className="text-sm font-bold uppercase tracking-wide"
          style={{ color: colors.accent, fontFamily: "var(--font-display)", letterSpacing: "0.06em" }}
        >
          {group.category}
        </h3>
      </div>

      {/* Pills */}
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill, i) => (
          <SkillPill
            key={skill}
            skill={skill}
            accent={colors.accent}
            muted={colors.muted}
            border={colors.border}
            delay={isInView ? index * 0.05 + i * 0.03 : 0}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
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
                className="text-xs uppercase tracking-widest font-semibold"
                style={{ color: "var(--accent)", fontFamily: "var(--font-mono)" }}
              >
                Technical Skills
              </span>
            </div>
          </LineReveal>
          <LineReveal delay={0.1}>
            <h2
              className="font-display font-black tracking-tight"
              style={{
                fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.035em",
                color: "var(--text-primary)",
                fontFamily: "var(--font-display)",
              }}
            >
              The{" "}
              <span style={{ color: "var(--accent)" }}>Stack</span>{" "}
              Behind the Work.
            </h2>
          </LineReveal>
        </div>

        {/* 2×2 grid */}
        <div className="grid sm:grid-cols-2 gap-5 mb-10">
          {skillGroups.map((group, i) => (
            <SkillGroupCard key={group.category} group={group} index={i} />
          ))}
        </div>

        {/* Bottom strip */}
        <LineReveal delay={0.3}>
          <div
            className="flex items-center justify-center gap-3 py-4 px-6 rounded-xl"
            style={{
              background: "var(--bg-base)",
              border: "1px solid var(--border)",
            }}
          >
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full"
              style={{ background: "#22c55e" }}
            />
            <p
              className="text-sm"
              style={{ color: "var(--text-tertiary)", fontFamily: "var(--font-body)" }}
            >
              All skills actively used across shipped production projects.
            </p>
          </div>
        </LineReveal>
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
