"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Download, GitBranch, Mail, ArrowDown } from "lucide-react";
import { Magnetic } from "@/components/motion/MagneticTilt";
import { Counter } from "@/components/motion/Counter";
import { personal } from "@/data/portfolio";

/* ── Animated dot-matrix ambient background ────────────────── */
function AmbientBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base */}
      <div className="absolute inset-0" style={{ background: "var(--bg-base)" }} />

      {/* Dot grid motif */}
      <div className="absolute inset-0 bg-dots opacity-60" />

      {/* Slow-drifting radial gradient */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(ellipse 80% 60% at 50% -10%, color-mix(in srgb, var(--accent) 10%, transparent) 0%, transparent 65%)",
            "radial-gradient(ellipse 80% 60% at 55% -5%, color-mix(in srgb, var(--accent) 8%, transparent) 0%, transparent 65%)",
            "radial-gradient(ellipse 80% 60% at 45% -10%, color-mix(in srgb, var(--accent) 12%, transparent) 0%, transparent 65%)",
            "radial-gradient(ellipse 80% 60% at 50% -10%, color-mix(in srgb, var(--accent) 10%, transparent) 0%, transparent 65%)",
          ],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Secondary teal accent, bottom-right */}
      <motion.div
        className="absolute bottom-0 right-0 w-[500px] h-[400px]"
        animate={{
          background: [
            "radial-gradient(ellipse at bottom right, color-mix(in srgb, var(--teal) 8%, transparent) 0%, transparent 70%)",
            "radial-gradient(ellipse at bottom right, color-mix(in srgb, var(--teal) 6%, transparent) 0%, transparent 70%)",
            "radial-gradient(ellipse at bottom right, color-mix(in srgb, var(--teal) 10%, transparent) 0%, transparent 70%)",
          ],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />
    </div>
  );
}

/* ── Stat block in hero ─────────────────────────────────────── */
function StatBlock({
  stat,
  delay,
}: {
  stat: { value: number; display: string; label: string; suffix: string };
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col gap-1"
    >
      <div
        className="metric-block text-2xl sm:text-3xl font-bold tabular-nums leading-none"
        style={{ color: "var(--accent)", fontFamily: "var(--font-mono)" }}
      >
        <Counter
          to={typeof stat.value === "number" && stat.value < 1000 ? stat.value : stat.value}
          decimals={stat.value < 10 ? 2 : 0}
          suffix={stat.suffix}
          className="tabular-nums"
        />
      </div>
      <p
        className="text-xs uppercase tracking-widest font-medium"
        style={{ color: "var(--text-tertiary)", fontFamily: "var(--font-body)" }}
      >
        {stat.label}
      </p>
    </motion.div>
  );
}

/* ── Hero typographic monogram ──────────────────────────────── */
function Monogram() {
  return (
    <div className="absolute right-[-6%] top-1/2 -translate-y-1/2 select-none pointer-events-none hidden xl:block overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative"
      >
        <span
          className="text-[22vw] font-black font-display leading-none tracking-tight select-none"
          style={{
            color: "transparent",
            WebkitTextStroke: "1px var(--border-strong)",
            letterSpacing: "-0.06em",
          }}
        >
          SS
        </span>
        {/* Accent fill overlay — partial */}
        <span
          className="absolute inset-0 text-[22vw] font-black font-display leading-none tracking-tight select-none"
          style={{
            color: "transparent",
            background: `linear-gradient(135deg, var(--accent) 0%, transparent 55%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            letterSpacing: "-0.06em",
          }}
          aria-hidden
        >
          SS
        </span>
      </motion.div>
    </div>
  );
}

/* ── Main Hero ──────────────────────────────────────────────── */
export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const ySpring = useSpring(y, { stiffness: 80, damping: 20 });

  const words1 = ["Most ML", "portfolios"];
  const words2 = ["demo."];
  const words3 = ["Mine deploy."];

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ paddingTop: "80px" }}
    >
      <AmbientBackground />
      <Monogram />

      {/* Section divider bottom */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />

      <motion.div
        style={{ opacity }}
        className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-8 py-20 sm:py-32"
      >
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: -16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide mb-8 uppercase"
          style={{
            background: "var(--accent-muted)",
            border: "1px solid color-mix(in srgb, var(--accent) 30%, transparent)",
            color: "var(--accent)",
            fontFamily: "var(--font-mono)",
          }}
        >
          <span className="relative flex h-2 w-2">
            <span
              className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
              style={{ background: "var(--accent)" }}
            />
            <span
              className="relative inline-flex rounded-full h-2 w-2"
              style={{ background: "var(--accent)" }}
            />
          </span>
          {personal.status}
        </motion.div>

        {/* Headline — word-by-word clip reveal */}
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "clamp(3.2rem, 9vw, 6.5rem)",
            lineHeight: 0.98,
            letterSpacing: "-0.05em",
            color: "var(--text-primary)",
            marginBottom: "1.5rem",
          }}
        >
          {/* Line 1 */}
          <div className="flex flex-wrap gap-x-[0.2em] mb-1">
            {words1.map((word, i) => (
              <div key={i} style={{ overflow: "hidden" }}>
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.75,
                    delay: 0.1 + i * 0.12,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  style={{ display: "block" }}
                >
                  {word}
                </motion.span>
              </div>
            ))}
          </div>
          {/* Line 2 — muted */}
          <div className="flex flex-wrap gap-x-[0.2em] mb-1">
            {words2.map((word, i) => (
              <div key={i} style={{ overflow: "hidden" }}>
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.75,
                    delay: 0.3 + i * 0.12,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  style={{
                    display: "block",
                    color: "var(--text-secondary)",
                  }}
                >
                  {word}
                </motion.span>
              </div>
            ))}
          </div>
          {/* Line 3 — accent */}
          <div className="flex flex-wrap gap-x-[0.2em]">
            {words3.map((word, i) => (
              <div key={i} style={{ overflow: "hidden" }}>
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.75,
                    delay: 0.48 + i * 0.12,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  style={{ display: "block", color: "var(--accent)" }}
                >
                  {word}
                </motion.span>
              </div>
            ))}
          </div>
        </h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(1.05rem, 2vw, 1.2rem)",
            fontWeight: 400,
            lineHeight: 1.65,
            letterSpacing: "-0.01em",
            color: "var(--text-secondary)",
            maxWidth: "36rem",
            marginBottom: "2.5rem",
          }}
        >
          {personal.description}
        </motion.p>

        {/* CTAs — magnetic buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center gap-3 mb-16"
        >
          <Magnetic strength={0.25}>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-semibold transition-all"
              style={{
                background: "var(--accent)",
                color: "var(--accent-fg)",
                fontFamily: "var(--font-body)",
                boxShadow: "var(--shadow-accent)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--accent-hover)";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 12px 40px rgba(200,75,49,0.4)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--accent)";
                (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-accent)";
              }}
            >
              View Projects
              <ArrowRight className="w-4 h-4" />
            </a>
          </Magnetic>

          <Magnetic strength={0.25}>
            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-semibold transition-all"
              style={{
                background: "var(--bg-surface)",
                color: "var(--text-primary)",
                border: "1px solid var(--border-strong)",
                fontFamily: "var(--font-body)",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <Download className="w-4 h-4" />
              Résumé
            </a>
          </Magnetic>

          <div className="flex items-center gap-4 ml-2">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex items-center gap-1.5 text-xs transition-colors"
              style={{ color: "var(--text-tertiary)", fontFamily: "var(--font-body)" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--text-primary)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--text-tertiary)")
              }
            >
              <GitBranch className="w-3.5 h-3.5" />
              GitHub
            </a>
            <a
              href={`mailto:${personal.email}`}
              aria-label="Email"
              className="flex items-center gap-1.5 text-xs transition-colors"
              style={{ color: "var(--text-tertiary)", fontFamily: "var(--font-body)" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--text-primary)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--text-tertiary)")
              }
            >
              <Mail className="w-3.5 h-3.5" />
              Email
            </a>
          </div>
        </motion.div>

        {/* Live stat counters */}
        <div
          className="flex flex-wrap gap-x-10 gap-y-6"
          style={{ borderTop: "1px solid var(--border)", paddingTop: "2rem" }}
        >
          {personal.stats.map((stat, i) => (
            <StatBlock key={stat.label} stat={stat} delay={1.1 + i * 0.1} />
          ))}
        </div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ color: "var(--text-tertiary)" }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
