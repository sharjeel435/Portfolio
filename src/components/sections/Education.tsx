"use client";

import { LineReveal, StaggerContainer, StaggerItem } from "@/components/motion/TextReveal";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";
import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden"
      style={{ paddingTop: "7rem", paddingBottom: "7rem" }}
    >
      <div className="absolute inset-0" style={{ background: "var(--bg-base)" }} />
      <div className="absolute inset-0 bg-dots opacity-40" />
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
                Education
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
              Academic{" "}
              <span style={{ color: "var(--accent)" }}>Foundation.</span>
            </h2>
          </LineReveal>
        </div>

        <StaggerContainer className="space-y-5" stagger={0.15} delay={0.1}>
          {education.map((edu, i) => (
            <StaggerItem key={edu.institution}>
              <motion.div
                whileHover={{ y: -3, boxShadow: "var(--shadow-md)" }}
                transition={{ duration: 0.25 }}
                className="rounded-2xl overflow-hidden"
                style={{
                  background: "var(--bg-surface)",
                  border: "1px solid var(--border)",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                {/* Accent top bar */}
                <div
                  className="h-1 w-full"
                  style={{ background: i === 0 ? "var(--accent)" : "var(--teal)" }}
                />

                <div className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-5">
                    {/* Icon */}
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        background: i === 0 ? "var(--accent-muted)" : "var(--teal-muted)",
                      }}
                    >
                      {i === 0 ? (
                        <GraduationCap
                          className="w-5 h-5"
                          style={{ color: "var(--accent)" }}
                        />
                      ) : (
                        <BookOpen
                          className="w-5 h-5"
                          style={{ color: "var(--teal)" }}
                        />
                      )}
                    </div>

                    {/* Details */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
                        <div>
                          <h3
                            className="font-display font-bold text-lg"
                            style={{
                              color: "var(--text-primary)",
                              fontFamily: "var(--font-display)",
                              letterSpacing: "-0.02em",
                            }}
                          >
                            {edu.institution}
                          </h3>
                          <p
                            className="text-sm mt-0.5"
                            style={{
                              color: "var(--text-secondary)",
                              fontFamily: "var(--font-body)",
                            }}
                          >
                            {edu.degree}
                          </p>
                        </div>

                        {/* Badges */}
                        <div className="flex flex-wrap gap-2">
                          <span
                            className="text-[11px] px-2.5 py-1 rounded-full font-semibold"
                            style={{
                              background: "rgba(34,197,94,0.1)",
                              color: "#22c55e",
                              border: "1px solid rgba(34,197,94,0.25)",
                              fontFamily: "var(--font-mono)",
                            }}
                          >
                            ✓ {edu.status}
                          </span>
                          {edu.grade && (
                            <span
                              className="text-[11px] px-2.5 py-1 rounded-full font-semibold"
                              style={{
                                background: "var(--accent-muted)",
                                color: "var(--accent)",
                                border: "1px solid color-mix(in srgb, var(--accent) 25%, transparent)",
                                fontFamily: "var(--font-mono)",
                              }}
                            >
                              {edu.grade}
                            </span>
                          )}
                        </div>
                      </div>

                      <span
                        className="text-xs"
                        style={{ color: "var(--text-tertiary)", fontFamily: "var(--font-mono)" }}
                      >
                        {edu.period}
                      </span>
                    </div>
                  </div>

                  {/* Coursework */}
                  {edu.coursework.length > 0 && (
                    <div>
                      <p
                        className="text-[10px] uppercase tracking-widest mb-3 font-semibold"
                        style={{
                          color: "var(--text-tertiary)",
                          fontFamily: "var(--font-mono)",
                        }}
                      >
                        Key Coursework
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((c) => (
                          <span
                            key={c}
                            className="text-xs px-3 py-1 rounded-full"
                            style={{
                              background: "var(--bg-elevated)",
                              color: "var(--text-secondary)",
                              border: "1px solid var(--border)",
                              fontFamily: "var(--font-body)",
                            }}
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
