"use client";

import { motion } from "framer-motion";
import { Mail, GitBranch, ArrowRight, Send } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { personal } from "@/data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#07070f]" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(124,58,237,0.3), rgba(6,182,212,0.2), transparent)",
        }}
      />

      {/* Ambient violet glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(109,40,217,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">
        {/* Centered content */}
        <div className="max-w-2xl mx-auto text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-violet-500/20 text-[11px] font-semibold uppercase tracking-widest text-violet-400 mb-6">
              <Send className="w-3.5 h-3.5" />
              Get In Touch
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-5 leading-[1.05]">
              Have an AI problem{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #a78bfa 0%, #06b6d4 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                worth solving?
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-white/45 text-base sm:text-lg leading-relaxed mb-10">
              I&apos;m open to AI engineering, machine-learning, RAG and data-focused
              opportunities. Let&apos;s build something intelligent.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <motion.a
                href={`mailto:${personal.email}`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold shadow-[0_0_28px_rgba(124,58,237,0.4)] hover:shadow-[0_0_40px_rgba(124,58,237,0.55)] transition-all w-full sm:w-auto justify-center"
              >
                <Mail className="w-4 h-4" />
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              <motion.a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.09] text-white/70 hover:text-white text-sm font-semibold border border-white/[0.09] hover:border-white/[0.18] transition-all w-full sm:w-auto justify-center"
              >
                <GitBranch className="w-4 h-4" />
                View GitHub
              </motion.a>
            </div>
          </Reveal>

          {/* Email display */}
          <Reveal delay={0.4}>
            <div className="mt-8">
              <a
                href={`mailto:${personal.email}`}
                className="text-sm text-white/30 hover:text-white/55 transition-colors font-mono"
              >
                {personal.email}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
