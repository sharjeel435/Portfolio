"use client";

import { motion } from "framer-motion";
import { Mail, GitBranch } from "lucide-react";
import { LineReveal } from "@/components/motion/TextReveal";
import { Magnetic } from "@/components/motion/MagneticTilt";
import { personal } from "@/data/portfolio";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden"
      style={{ paddingTop: "8rem", paddingBottom: "8rem" }}
    >
      <div className="absolute inset-0" style={{ background: "var(--bg-surface)" }} />
      <div className="absolute inset-0 bg-grid opacity-30" />

      {/* Ambient accent glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at bottom, color-mix(in srgb, var(--accent) 10%, transparent), transparent 70%)",
          filter: "blur(20px)",
        }}
      />

      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="relative z-10 max-w-2xl mx-auto px-5 sm:px-8 text-center">
        {/* Availability badge */}
        <LineReveal delay={0}>
          <div className="inline-flex items-center gap-2 mb-8">
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full"
              style={{ background: "#22c55e" }}
            />
            <span
              className="text-xs uppercase tracking-widest font-semibold"
              style={{ color: "#22c55e", fontFamily: "var(--font-mono)" }}
            >
              {personal.status}
            </span>
          </div>
        </LineReveal>

        {/* Headline */}
        <LineReveal delay={0.1}>
          <h2
            className="font-display font-black mb-5 tracking-tight"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.035em",
              color: "var(--text-primary)",
              fontFamily: "var(--font-display)",
            }}
          >
            Have an AI problem{" "}
            <span style={{ color: "var(--accent)" }}>worth solving?</span>
          </h2>
        </LineReveal>

        <LineReveal delay={0.2}>
          <p
            className="text-base sm:text-lg leading-relaxed mb-10"
            style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)" }}
          >
            I build the engineering layer between a model and a user — from forecasting
            pipelines and RAG systems to the FastAPI backend that holds them in production.
            Let&apos;s talk.
          </p>
        </LineReveal>

        {/* CTAs */}
        <LineReveal delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Magnetic strength={0.3}>
              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-sm font-semibold w-full sm:w-auto justify-center transition-all"
                style={{
                  background: "var(--accent)",
                  color: "var(--accent-fg)",
                  fontFamily: "var(--font-body)",
                  boxShadow: "var(--shadow-accent)",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.background = "var(--accent-hover)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.background = "var(--accent)")
                }
              >
                <Mail className="w-4 h-4" />
                Get in Touch
              </a>
            </Magnetic>

            <Magnetic strength={0.3}>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-sm font-semibold w-full sm:w-auto justify-center transition-all"
                style={{
                  background: "var(--bg-base)",
                  color: "var(--text-primary)",
                  border: "1px solid var(--border-strong)",
                  fontFamily: "var(--font-body)",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <GitBranch className="w-4 h-4" />
                View GitHub
              </a>
            </Magnetic>
          </div>
        </LineReveal>

        {/* Email mono display */}
        <LineReveal delay={0.4}>
          <a
            href={`mailto:${personal.email}`}
            className="inline-block text-sm transition-colors"
            style={{
              color: "var(--text-tertiary)",
              fontFamily: "var(--font-mono)",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "var(--accent)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "var(--text-tertiary)")
            }
          >
            {personal.email}
          </a>
        </LineReveal>
      </div>
    </section>
  );
}
