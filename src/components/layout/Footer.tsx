"use client";

import { GitBranch, Mail, ArrowUp } from "lucide-react";
import { personal } from "@/data/portfolio";

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-white/[0.06] bg-[#07070f]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <button
            onClick={scrollTop}
            className="text-sm font-bold text-white/40 hover:text-white/70 transition-colors"
          >
            <span className="text-violet-400">S</span>harjeel Safdar
            <span className="text-violet-400">.</span>
          </button>
          <span className="text-white/15">·</span>
          <span className="text-xs text-white/25">AI & ML Engineer</span>
        </div>

        {/* Center — copyright */}
        <p className="text-xs text-white/20 order-3 sm:order-2">
          © {new Date().getFullYear()} Sharjeel Safdar. Built with Next.js & Tailwind.
        </p>

        {/* Right — links */}
        <div className="flex items-center gap-3 order-2 sm:order-3">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-lg text-white/30 hover:text-white/60 hover:bg-white/[0.05] transition-all"
          >
            <GitBranch className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${personal.email}`}
            aria-label="Email"
            className="p-2 rounded-lg text-white/30 hover:text-white/60 hover:bg-white/[0.05] transition-all"
          >
            <Mail className="w-4 h-4" />
          </a>
          <button
            onClick={scrollTop}
            aria-label="Scroll to top"
            className="p-2 rounded-lg text-white/30 hover:text-white/60 hover:bg-white/[0.05] transition-all"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
