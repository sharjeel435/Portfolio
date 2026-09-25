"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap, Briefcase } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { SectionBadge } from "@/components/ui/Badge";
import { personal } from "@/data/portfolio";

const highlights = [
  {
    icon: GraduationCap,
    label: "CS Graduate",
    sub: "FAST University",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
  },
  {
    icon: Briefcase,
    label: "AI / ML Engineer",
    sub: "RAG & Production AI",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    icon: MapPin,
    label: "Karachi, Pakistan",
    sub: "Open to Remote",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Section background */}
      <div className="absolute inset-0 bg-[#0a0a14]" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(124,58,237,0.35), rgba(6,182,212,0.25), transparent)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-center">
          {/* Left column — text */}
          <div>
            <Reveal>
              <SectionBadge className="mb-5">About Me</SectionBadge>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.1] mb-6 text-white">
                From Experiments{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #a78bfa 0%, #06b6d4 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  to Production.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-white/55 leading-relaxed text-base sm:text-lg mb-5">
                {personal.descriptionLong}
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="text-white/40 leading-relaxed text-sm sm:text-base">
                Currently open to{" "}
                <span className="text-violet-400 font-medium">AI engineering</span>,{" "}
                <span className="text-cyan-400 font-medium">machine-learning</span> and{" "}
                <span className="text-emerald-400 font-medium">RAG-focused roles</span>.
              </p>
            </Reveal>
          </div>

          {/* Right column — highlight cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3">
            {highlights.map((item, i) => (
              <Reveal key={item.label} delay={0.1 + i * 0.1} direction="left">
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-white/[0.12] transition-colors"
                >
                  <div
                    className={`w-11 h-11 rounded-xl ${item.bg} flex items-center justify-center shrink-0`}
                  >
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white/85">{item.label}</p>
                    <p className="text-xs text-white/40">{item.sub}</p>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
