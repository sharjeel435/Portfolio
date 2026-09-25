"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ChevronDown } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { SectionBadge } from "@/components/ui/Badge";
import { Badge } from "@/components/ui/Badge";
import { experiences } from "@/data/portfolio";

interface ExperienceItemProps {
  exp: (typeof experiences)[0];
  index: number;
}

function ExperienceItem({ exp, index }: ExperienceItemProps) {
  const [expanded, setExpanded] = useState(index === 0);

  return (
    <Reveal delay={index * 0.1}>
      <div className="relative">
        {/* Timeline connector */}
        <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-white/[0.06]" />
        <div className="hidden md:block absolute left-[-4px] top-6 w-2 h-2 rounded-full bg-violet-500" />

        <div className="md:pl-10">
          <div
            className="p-5 sm:p-7 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-white/[0.11] transition-all cursor-pointer"
            onClick={() => setExpanded((v) => !v)}
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Briefcase className="w-5 h-5 text-violet-400" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white/90 leading-tight">
                    {exp.role}
                  </h3>
                  <p className="text-sm font-semibold text-violet-400">{exp.company}</p>
                  <p className="text-xs text-white/35 mt-0.5">{exp.project}</p>
                </div>
              </div>
              <div className="flex flex-row sm:flex-col items-center sm:items-end gap-2 shrink-0">
                <div className="flex items-center gap-1.5 text-xs text-white/35">
                  <Calendar className="w-3 h-3" />
                  {exp.period}
                </div>
                {exp.location && (
                  <div className="flex items-center gap-1.5 text-xs text-white/30">
                    <MapPin className="w-3 h-3" />
                    {exp.location}
                  </div>
                )}
              </div>
            </div>

            <p className="text-sm text-white/50 leading-relaxed mb-4">{exp.description}</p>

            {/* Metrics row */}
            {exp.metrics.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {exp.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="flex flex-col items-center px-4 py-2 rounded-xl bg-violet-500/[0.08] border border-violet-500/20"
                  >
                    <span className="text-sm font-black text-violet-300">{m.value}</span>
                    <span className="text-[10px] text-white/40 uppercase tracking-wide">{m.label}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Expand toggle */}
            <button className="flex items-center gap-1.5 text-xs text-white/35 hover:text-white/60 transition-colors">
              <motion.div
                animate={{ rotate: expanded ? 180 : 0 }}
                transition={{ duration: 0.25 }}
              >
                <ChevronDown className="w-3.5 h-3.5" />
              </motion.div>
              {expanded ? "Show less" : "Show details"}
            </button>

            {/* Expanded details */}
            <motion.div
              initial={false}
              animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="mt-4 pt-4 border-t border-white/[0.06]">
                <ul className="space-y-2">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-white/45">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-500 shrink-0 mt-1.5" />
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {exp.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 sm:py-28 overflow-hidden">
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

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="mb-14">
          <Reveal>
            <SectionBadge className="mb-5">Work Experience</SectionBadge>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
              Where I&apos;ve{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #a78bfa 0%, #06b6d4 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Built Things.
              </span>
            </h2>
          </Reveal>
        </div>

        {/* Experience list */}
        <div className="md:ml-4 space-y-6">
          {experiences.map((exp, i) => (
            <ExperienceItem key={exp.id} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
