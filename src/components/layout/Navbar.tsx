"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { personal } from "@/data/portfolio";

const navLinks = [
  { label: "About",      href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects",   href: "#projects" },
  { label: "Skills",     href: "#skills" },
  { label: "Education",  href: "#education" },
  { label: "Contact",    href: "#contact" },
];

/* ── Logo mark ─────────────────────────────────────────────── */
function LogoMark({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group flex items-center gap-3 focus-visible:outline-none"
      aria-label="Back to top"
    >
      {/* Icon */}
      <motion.div
        whileHover={{ scale: 1.08, rotate: -6 }}
        whileTap={{ scale: 0.92 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        className="relative flex items-center justify-center shrink-0"
        style={{
          width: 34,
          height: 34,
          borderRadius: 10,
          background: "var(--accent)",
          boxShadow: "0 2px 12px rgba(200,75,49,0.35), inset 0 1px 0 rgba(255,255,255,0.15)",
        }}
      >
        {/* Inner highlight */}
        <div
          className="absolute inset-0 rounded-[10px] opacity-40"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, transparent 60%)",
          }}
        />
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "15px",
            color: "#fff",
            letterSpacing: "-0.04em",
            lineHeight: 1,
            position: "relative",
            zIndex: 1,
          }}
        >
          S
        </span>
      </motion.div>

      {/* Wordmark */}
      <div className="hidden sm:flex items-baseline gap-0">
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "1.05rem",
            letterSpacing: "-0.04em",
            color: "var(--text-primary)",
            lineHeight: 1,
          }}
        >
          Sharjeel
        </span>
        <motion.span
          animate={{ opacity: [1, 0.4, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "1.05rem",
            letterSpacing: "-0.02em",
            color: "var(--accent)",
            lineHeight: 1,
          }}
        >
          .
        </motion.span>
      </div>
    </button>
  );
}

/* ── Nav link with sliding indicator ───────────────────────── */
function NavLink({
  label,
  isActive,
  onClick,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="relative px-3 py-1.5 rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      style={{
        fontFamily: "var(--font-body)",
        fontSize: "0.8125rem",
        fontWeight: isActive ? 600 : 450,
        letterSpacing: "-0.01em",
        color: isActive ? "var(--text-primary)" : "var(--text-secondary)",
      }}
    >
      {isActive && (
        <motion.div
          layoutId="nav-pill"
          className="absolute inset-0 rounded-lg"
          style={{ background: "var(--bg-elevated)" }}
          transition={{ type: "spring", stiffness: 500, damping: 38 }}
        />
      )}
      <span className="relative z-10">{label}</span>
    </button>
  );
}

/* ── Main Navbar ────────────────────────────────────────────── */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["hero", "about", "experience", "projects", "skills", "education", "contact"];
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); }),
      { rootMargin: "-50% 0px -50% 0px" }
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (href: string) => {
    document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: scrolled ? "var(--bg-base)" : "transparent",
          backdropFilter: scrolled ? "blur(24px) saturate(160%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(24px) saturate(160%)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
          opacity: scrolled ? 0.97 : 1,
          transition: "background 0.4s ease, border-color 0.4s ease, opacity 0.4s ease",
        }}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between" style={{ height: 64 }}>

          {/* Logo */}
          <LogoMark onClick={() => scrollTo("#hero")} />

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5" role="navigation" aria-label="Main navigation">
            {navLinks.map(({ label, href }) => (
              <NavLink
                key={label}
                label={label}
                isActive={activeSection === href.replace("#", "")}
                onClick={() => scrollTo(href)}
              />
            ))}
          </nav>

          {/* Right: theme + résumé */}
          <div className="flex items-center gap-2">
            <ThemeToggle />

            {/* Résumé button */}
            <motion.a
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.8125rem",
                fontWeight: 600,
                letterSpacing: "-0.01em",
                padding: "0.4rem 0.875rem",
                borderRadius: 8,
                background: "var(--accent)",
                color: "#fff",
                boxShadow: "0 1px 8px rgba(200,75,49,0.3), inset 0 1px 0 rgba(255,255,255,0.12)",
              }}
              whileHover={{
                background: "var(--accent-hover)",
                boxShadow: "0 4px 16px rgba(200,75,49,0.4), inset 0 1px 0 rgba(255,255,255,0.12)",
                y: -1,
              }}
              whileTap={{ scale: 0.97, y: 0 }}
              transition={{ duration: 0.15 }}
            >
              <Download className="w-3.5 h-3.5 opacity-80" />
              Résumé
            </motion.a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden p-2 rounded-lg focus-visible:outline-none"
              style={{ color: "var(--text-secondary)" }}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    style={{ display: "block" }}
                  >
                    <X className="w-5 h-5" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    style={{ display: "block" }}
                  >
                    <Menu className="w-5 h-5" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-16 left-0 right-0 z-40 md:hidden"
            style={{
              background: "var(--bg-base)",
              borderBottom: "1px solid var(--border)",
              boxShadow: "var(--shadow-lg)",
            }}
          >
            <nav className="max-w-6xl mx-auto px-5 py-3 flex flex-col gap-0.5">
              {navLinks.map(({ label, href }, i) => {
                const isActive = activeSection === href.replace("#", "");
                return (
                  <motion.button
                    key={label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.035, ease: [0.16, 1, 0.3, 1] }}
                    onClick={() => scrollTo(href)}
                    className="w-full text-left px-4 py-2.5 rounded-xl transition-colors"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.9rem",
                      fontWeight: isActive ? 600 : 400,
                      letterSpacing: "-0.01em",
                      color: isActive ? "var(--accent)" : "var(--text-secondary)",
                      background: isActive ? "var(--accent-muted)" : "transparent",
                    }}
                  >
                    {label}
                  </motion.button>
                );
              })}

              <div className="mt-2 pt-2" style={{ borderTop: "1px solid var(--border)" }}>
                <a
                  href={personal.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold"
                  style={{
                    background: "var(--accent)",
                    color: "#fff",
                    fontFamily: "var(--font-body)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  <Download className="w-4 h-4" />
                  Download Résumé
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
