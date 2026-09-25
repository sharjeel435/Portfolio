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
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Brand */}
          <button
            onClick={scrollTop}
            className="group flex items-center gap-2"
            aria-label="Back to top"
          >
            <div
              className="w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold"
              style={{
                background: "var(--accent)",
                color: "var(--accent-fg)",
                fontFamily: "var(--font-display)",
              }}
            >
              S
            </div>
            <span
              className="text-sm font-semibold"
              style={{ color: "var(--text-secondary)", fontFamily: "var(--font-display)" }}
            >
              Sharjeel<span style={{ color: "var(--accent)" }}>.</span>
            </span>
          </button>

          {/* Copyright */}
          <p
            className="text-xs text-center"
            style={{ color: "var(--text-tertiary)", fontFamily: "var(--font-body)" }}
          >
            © {new Date().getFullYear()} Sharjeel Safdar ·{" "}
            <span style={{ fontFamily: "var(--font-mono)" }}>
              Next.js · Tailwind · Framer Motion
            </span>
          </p>

          {/* Icons */}
          <div className="flex items-center gap-1">
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
                whileHover={{ scale: 1.1, color: "var(--accent)" }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-lg transition-colors"
                style={{
                  color: "var(--text-tertiary)",
                  background: "transparent",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "var(--bg-surface)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                }}
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            ))}
            <motion.button
              onClick={scrollTop}
              aria-label="Scroll to top"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-lg ml-1 transition-colors"
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
