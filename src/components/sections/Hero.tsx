"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Download, GitBranch, Mail, Cpu } from "lucide-react";
import { personal } from "@/data/portfolio";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden"
    >
      {/* Background layers */}
      <motion.div style={{ y }} className="absolute inset-0 pointer-events-none">
        {/* Base dark */}
        <div className="absolute inset-0 bg-[#07070f]" />

        {/* Fine grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Hero glow — violet center */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 50% 15%, rgba(109,40,217,0.22) 0%, transparent 70%)",
          }}
        />

        {/* Secondary glow — cyan bottom right */}
        <div
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px]"
          style={{
            background: "radial-gradient(ellipse, rgba(6,182,212,0.08) 0%, transparent 70%)",
          }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 text-center"
      >
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: -16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.04] border border-violet-500/25 text-xs font-medium text-violet-300 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500" />
          </span>
          <Cpu className="w-3.5 h-3.5" />
          {personal.status}
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-[2.6rem] xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.0] mb-6"
        >
          <span className="block text-white">Building Intelligent</span>
          <span className="block text-white">Systems with</span>
          <span
            className="block"
            style={{
              background: "linear-gradient(135deg, #a78bfa 0%, #7c3aed 45%, #06b6d4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            AI, ML & RAG.
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed mb-4"
        >
          {personal.description}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-sm sm:text-base text-white/35 max-w-xl mx-auto leading-relaxed mb-10"
        >
          Experienced with Python, FastAPI, Next.js, LLM integration, feature engineering and
          production-oriented AI systems.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12"
        >
          <motion.a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold transition-all shadow-[0_0_28px_rgba(124,58,237,0.4)] hover:shadow-[0_0_40px_rgba(124,58,237,0.55)] w-full sm:w-auto justify-center"
          >
            View Projects
            <ArrowRight className="w-4 h-4" />
          </motion.a>

          <motion.a
            href={personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.10] text-white/80 hover:text-white text-sm font-semibold border border-white/10 hover:border-white/20 transition-all w-full sm:w-auto justify-center"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </motion.a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex items-center justify-center gap-4"
        >
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex items-center gap-2 text-white/35 hover:text-white/70 transition-colors text-xs font-medium"
          >
            <GitBranch className="w-4 h-4" />
            GitHub
          </a>
          <span className="w-px h-4 bg-white/10" />
          <a
            href={`mailto:${personal.email}`}
            aria-label="Email"
            className="flex items-center gap-2 text-white/35 hover:text-white/70 transition-colors text-xs font-medium"
          >
            <Mail className="w-4 h-4" />
            Email
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-16 flex flex-col items-center gap-2"
        >
          <motion.span
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="text-[10px] text-white/20 uppercase tracking-[0.2em]"
          >
            Scroll
          </motion.span>
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border border-white/15 flex items-start justify-center pt-1.5"
          >
            <motion.div
              animate={{ height: ["30%", "60%", "30%"], opacity: [0.4, 0.9, 0.4] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="w-0.5 bg-violet-400 rounded-full"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
