"use client";

import { motion } from "framer-motion";
import { Brain, Code2, Cpu, Users } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { SectionBadge } from "@/components/ui/Badge";
import { skillGroups } from "@/data/portfolio";

const iconMap = {
  Brain,
  Code2,
  Cpu,
  Users,
} as const;

const colorMap = {
  violet: {
    icon: "text-violet-400",
    bg: "bg-violet-500/10",
    pill: "bg-violet-500/[0.08] border-violet-500/20 text-violet-300 hover:bg-violet-500/15",
    header: "text-violet-400",
  },
  cyan: {
    icon: "text-cyan-400",
    bg: "bg-cyan-500/10",
    pill: "bg-cyan-500/[0.08] border-cyan-500/20 text-cyan-300 hover:bg-cyan-500/15",
    header: "text-cyan-400",
  },
  emerald: {
    icon: "text-emerald-400",
    bg: "bg-emerald-500/10",
    pill: "bg-emerald-500/[0.08] border-emerald-500/20 text-emerald-300 hover:bg-emerald-500/15",
    header: "text-emerald-400",
  },
  amber: {
    icon: "text-amber-400",
    bg: "bg-amber-500/10",
    pill: "bg-amber-500/[0.08] border-amber-500/20 text-amber-300 hover:bg-amber-500/15",
    header: "text-amber-400",
  },
};

type ColorKey = keyof typeof colorMap;

interface SkillGroupCardProps {
  group: (typeof skillGroups)[0];
  index: number;
}

function SkillGroupCard({ group, index }: SkillGroupCardProps) {
  const colors = colorMap[group.color as ColorKey] || colorMap.violet;
  const Icon = iconMap[group.icon as keyof typeof iconMap] || Brain;

  return (
    <Reveal delay={index * 0.12}>
      <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-white/[0.11] transition-all h-full">
        {/* Category header */}
        <div className="flex items-center gap-3 mb-5">
          <div className={`w-9 h-9 rounded-xl ${colors.bg} flex items-center justify-center shrink-0`}>
            <Icon className={`w-5 h-5 ${colors.icon}`} />
          </div>
          <h3 className={`text-sm font-bold uppercase tracking-wide ${colors.header}`}>
            {group.category}
          </h3>
        </div>

        {/* Skill pills */}
        <div className="flex flex-wrap gap-2">
          {group.skills.map((skill, si) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.85, y: 6 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.12 + si * 0.04,
                duration: 0.3,
                ease: "easeOut",
              }}
              whileHover={{ y: -2, scale: 1.04 }}
              className={`text-[11px] font-medium px-3 py-1.5 rounded-full border cursor-default transition-all ${colors.pill}`}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 sm:py-28 overflow-hidden">
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
            <SectionBadge className="mb-5">Technical Skills</SectionBadge>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
              Tools &{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #a78bfa 0%, #06b6d4 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Technologies.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-white/45 text-base max-w-lg">
              A focused stack built around ML engineering, RAG systems and production AI.
            </p>
          </Reveal>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-5">
          {skillGroups.map((group, i) => (
            <SkillGroupCard key={group.category} group={group} index={i} />
          ))}
        </div>

        {/* Bottom status */}
        <Reveal delay={0.5}>
          <div className="mt-10 flex justify-center">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.07] text-sm text-white/35">
              <motion.span
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-emerald-400 inline-block"
              />
              All skills actively used in live projects
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
