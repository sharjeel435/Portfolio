"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { personal } from "@/data/portfolio";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["hero", "about", "experience", "projects", "skills", "education", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); });
      },
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
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? "color-mix(in srgb, var(--bg-base) 88%, transparent)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        }}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollTo("#hero")}
            className="group flex items-center gap-2 focus-visible:outline-none"
            aria-label="Back to top"
          >
            <motion.div
              className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold font-display"
              style={{ background: "var(--accent)", color: "var(--accent-fg)" }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              S
            </motion.div>
            <span
              className="text-sm font-semibold font-display tracking-tight hidden sm:block"
              style={{ color: "var(--text-primary)" }}
            >
              Sharjeel<span style={{ color: "var(--accent)" }}>.</span>
            </span>
          </button>

          {/* Desktop nav — sliding active indicator */}
          <nav className="hidden md:flex items-center gap-1" role="navigation">
            {navLinks.map(({ label, href }) => {
              const isActive = activeSection === href.replace("#", "");
              return (
                <button
                  key={label}
                  onClick={() => scrollTo(href)}
                  className="relative px-3.5 py-1.5 text-[13px] font-medium rounded-lg transition-colors duration-200 focus-visible:outline-accent"
                  style={{
                    color: isActive ? "var(--text-primary)" : "var(--text-secondary)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg"
                      style={{ background: "var(--bg-elevated)" }}
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10">{label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 text-[13px] font-semibold px-4 py-1.5 rounded-lg transition-all focus-visible:outline-accent"
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
              Résumé
            </a>
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden p-2 rounded-lg transition-colors focus-visible:outline-accent"
              style={{ color: "var(--text-secondary)" }}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 md:hidden"
            style={{
              background: "var(--bg-base)",
              borderBottom: "1px solid var(--border)",
              boxShadow: "var(--shadow-lg)",
            }}
          >
            <nav className="max-w-6xl mx-auto px-5 py-4 flex flex-col gap-1">
              {navLinks.map(({ label, href }, i) => (
                <motion.button
                  key={label}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => scrollTo(href)}
                  className="w-full text-left px-4 py-3 text-sm rounded-xl transition-colors"
                  style={{
                    color:
                      activeSection === href.replace("#", "")
                        ? "var(--accent)"
                        : "var(--text-secondary)",
                    background:
                      activeSection === href.replace("#", "")
                        ? "var(--accent-muted)"
                        : "transparent",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {label}
                </motion.button>
              ))}
              <div className="mt-2 pt-3" style={{ borderTop: "1px solid var(--border)" }}>
                <a
                  href={personal.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-3 text-center text-sm font-semibold rounded-xl"
                  style={{ background: "var(--accent)", color: "var(--accent-fg)" }}
                >
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
