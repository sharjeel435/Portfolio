"use client";

import { useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { GraduationCap, Briefcase, MapPin } from "lucide-react";
import { LineReveal, StaggerContainer, StaggerItem } from "@/components/motion/TextReveal";
import { TiltCard } from "@/components/motion/MagneticTilt";
import { personal } from "@/data/portfolio";

const highlights = [
  {
    icon: GraduationCap,
    label: "CS Graduate, FAST University",
    sub: "Computer Science · Jun 2026",
    color: "var(--accent)",
    bg: "var(--accent-muted)",
  },
  {
    icon: Briefcase,
    label: "AI / ML Engineer",
    sub: "RAG · Forecasting · Production",
    color: "var(--teal)",
    bg: "var(--teal-muted)",
  },
  {
    icon: MapPin,
    label: "Karachi, Pakistan",
    sub: "Open to Remote · Global",
    color: "var(--teal)",
    bg: "var(--teal-muted)",
  },
];

function TerminalBlock() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const lines = [
    { type: "cmd", text: "python train.py --data aqi_dataset.csv" },
    { type: "out", text: "Features engineered: ", highlight: "354", hl: "teal" },
    { type: "out", text: "Model: ", highlight: "RandomForest", hl: "accent" },
    { type: "out", text: "R² @ 24h: ", highlight: "0.82 ✓", hl: "teal" },
    { type: "out", text: "Deploying to FastAPI..." },
    { type: "status", text: "SHIPPED", hl: "green" },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-xl overflow-hidden mt-6"
      style={{
        background: "var(--bg-inverse)",
        border: "1px solid var(--border-strong)",
        boxShadow: "var(--shadow-md)",
      }}
    >
      {/* Terminal title bar */}
      <div
        className="flex items-center gap-1.5 px-4 py-2.5"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
      >
        {["#ef4444", "#f59e0b", "#22c55e"].map((c, i) => (
          <div key={i} className="w-3 h-3 rounded-full" style={{ background: c }} />
        ))}
        <span
          className="ml-3 text-[10px] uppercase tracking-widest"
          style={{ color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-mono)" }}
        >
          pipeline.sh
        </span>
      </div>

      {/* Lines */}
      <div className="p-4 space-y-1">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }}
            transition={{ duration: 0.4, delay: 0.6 + i * 0.15, ease: "easeOut" }}
            className="flex items-center gap-2 text-xs"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {line.type === "cmd" && (
              <>
                <span style={{ color: "var(--accent)" }}>$</span>
                <span style={{ color: "rgba(255,255,255,0.75)" }}>{line.text}</span>
              </>
            )}
            {line.type === "out" && (
              <>
                <span style={{ color: "rgba(255,255,255,0.2)" }}>›</span>
                <span style={{ color: "rgba(255,255,255,0.45)" }}>{line.text}</span>
                {line.highlight && (
                  <span
                    style={{
                      color: line.hl === "teal" ? "var(--teal)" : "var(--accent)",
                      fontWeight: 600,
                    }}
                  >
                    {line.highlight}
                  </span>
                )}
              </>
            )}
            {line.type === "status" && (
              <span
                className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded text-xs font-bold"
                style={{ background: "rgba(34,197,94,0.15)", color: "#22c55e", border: "1px solid rgba(34,197,94,0.3)" }}
              >
                ✓ STATUS: {line.text}
              </span>
            )}
          </motion.div>
        ))}
        {/* Blinking cursor */}
        <motion.div
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1.2, repeat: Infinity }}
          className="inline-block w-2 h-4 ml-4"
          style={{ background: "var(--accent)" }}
        />
      </div>
    </motion.div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden"
      style={{ paddingTop: "7rem", paddingBottom: "7rem" }}
    >
      {/* Background */}
      <div className="absolute inset-0" style={{ background: "var(--bg-base)" }} />
      <div className="absolute inset-0 bg-dots opacity-50" />

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left */}
          <div>
            <LineReveal delay={0}>
              <div className="inline-flex items-center gap-2 mb-5">
                <div className="w-5 h-px" style={{ background: "var(--accent)" }} />
                <span
                  className="text-xs uppercase tracking-widest font-semibold"
                  style={{ color: "var(--accent)", fontFamily: "var(--font-mono)" }}
                >
                  About Me
                </span>
              </div>
            </LineReveal>

            <LineReveal delay={0.1}>
              <h2
                className="font-display font-black tracking-tight mb-6"
                style={{
                  fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.035em",
                  color: "var(--text-primary)",
                  fontFamily: "var(--font-display)",
                }}
              >
                From Experiments{" "}
                <span style={{ color: "var(--accent)" }}>to Production.</span>
              </h2>
            </LineReveal>

            <LineReveal delay={0.2}>
              <p
                className="text-base sm:text-lg leading-relaxed mb-4"
                style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)" }}
              >
                {personal.descriptionLong}
              </p>
            </LineReveal>

            <LineReveal delay={0.3}>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--text-tertiary)", fontFamily: "var(--font-body)" }}
              >
                Currently open to{" "}
                <span style={{ color: "var(--accent)", fontWeight: 600 }}>AI engineering</span>,{" "}
                <span style={{ color: "var(--teal)", fontWeight: 600 }}>ML research</span>, and{" "}
                <span style={{ color: "var(--accent)", fontWeight: 600 }}>RAG-focused roles</span>{" "}
                — remote or Karachi-based.
              </p>
            </LineReveal>

            <TerminalBlock />
          </div>

          {/* Right — highlight cards */}
          <div className="flex flex-col gap-4">
            {highlights.map((item, i) => (
              <LineReveal key={item.label} delay={0.15 + i * 0.12} direction="left">
                <TiltCard maxTilt={4} glare={false} className="w-full">
                  <motion.div
                    className="flex items-center gap-4 rounded-2xl p-5 transition-all"
                    style={{
                      background: "var(--bg-surface)",
                      border: "1px solid var(--border)",
                    }}
                    whileHover={{
                      borderColor: "var(--border-strong)",
                      boxShadow: "var(--shadow-md)",
                    }}
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: item.bg }}
                    >
                      <item.icon className="w-5 h-5" style={{ color: item.color }} />
                    </div>
                    <div>
                      <p
                        className="text-sm font-semibold"
                        style={{ color: "var(--text-primary)", fontFamily: "var(--font-body)" }}
                      >
                        {item.label}
                      </p>
                      <p
                        className="text-xs mt-0.5"
                        style={{ color: "var(--text-tertiary)", fontFamily: "var(--font-body)" }}
                      >
                        {item.sub}
                      </p>
                    </div>
                  </motion.div>
                </TiltCard>
              </LineReveal>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
