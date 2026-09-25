"use client";

import { motion } from "framer-motion";
import { GitBranch, Mail, ArrowUp } from "lucide-react";
import { personal } from "@/data/portfolio";

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      className="relative"
      style={{
        background: "var(--bg-base)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">

          {/* Brand — matches navbar */}
          <button
            onClick={scrollTop}
            className="flex items-center gap-2.5 focus-visible:outline-none"
            aria-label="Back to top"
          >
            <div
              className="relative flex items-center justify-center shrink-0"
              style={{
                width: 28,
                height: 28,
                borderRadius: 8,
                background: "var(--accent)",
                boxShadow: "0 2px 8px rgba(200,75,49,0.25), inset 0 1px 0 rgba(255,255,255,0.15)",
              }}
            >
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  borderRadius: 8,
                  background: "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, transparent 60%)",
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "12px",
                  color: "#fff",
                  letterSpacing: "-0.03em",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                S
              </span>
            </div>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "0.95rem",
                letterSpacing: "-0.04em",
                color: "var(--text-secondary)",
                lineHeight: 1,
              }}
            >
              Sharjeel<span style={{ color: "var(--accent)" }}>.</span>
            </span>
          </button>

          {/* Copyright */}
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.75rem",
              fontWeight: 400,
              letterSpacing: "-0.003em",
              color: "var(--text-tertiary)",
              textAlign: "center",
            }}
          >
            © {new Date().getFullYear()} Sharjeel Safdar ·{" "}
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                letterSpacing: "0.01em",
              }}
            >
              Next.js · Tailwind · Framer Motion
            </span>
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-0.5">
            {[
              { icon: GitBranch, href: personal.github, label: "GitHub" },
              { icon: Mail, href: `mailto:${personal.email}`, label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                className="p-2 rounded-lg"
                style={{ color: "var(--text-tertiary)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "var(--bg-surface)";
                  (e.currentTarget as HTMLElement).style.color = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                  (e.currentTarget as HTMLElement).style.color = "var(--text-tertiary)";
                }}
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            ))}

            {/* Scroll to top */}
            <motion.button
              onClick={scrollTop}
              aria-label="Scroll to top"
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.92, y: 0 }}
              className="p-2 rounded-lg ml-0.5"
              style={{ color: "var(--text-tertiary)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--bg-surface)";
                (e.currentTarget as HTMLElement).style.color = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
                (e.currentTarget as HTMLElement).style.color = "var(--text-tertiary)";
              }}
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
