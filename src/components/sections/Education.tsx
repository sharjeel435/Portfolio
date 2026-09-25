"use client";

import { GraduationCap, Calendar, BookOpen } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { SectionBadge, Badge } from "@/components/ui/Badge";
import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0a14]" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
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
            <SectionBadge className="mb-5">Education</SectionBadge>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
              Academic{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #a78bfa 0%, #06b6d4 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Foundation.
              </span>
            </h2>
          </Reveal>
        </div>

        {/* Education cards */}
        <div className="space-y-5">
          {education.map((edu, i) => (
            <Reveal key={edu.institution} delay={i * 0.12}>
              <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-white/[0.11] transition-all">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-violet-500/10 flex items-center justify-center shrink-0">
                      <GraduationCap className="w-5 h-5 text-violet-400" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white/90">{edu.institution}</h3>
                      <p className="text-sm text-violet-400 font-medium">{edu.degree}</p>
                      {edu.grade && (
                        <p className="text-xs text-emerald-400 font-semibold mt-0.5">{edu.grade}</p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-white/35 shrink-0">
                    <Calendar className="w-3.5 h-3.5" />
                    {edu.period}
                  </div>
                </div>

                {edu.coursework.length > 0 && (
                  <div className="mt-5 pt-5 border-t border-white/[0.06]">
                    <div className="flex items-center gap-2 mb-3">
                      <BookOpen className="w-3.5 h-3.5 text-white/30" />
                      <p className="text-xs text-white/35 uppercase tracking-widest font-semibold">
                        Relevant Coursework
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course) => (
                        <Badge key={course} variant="outline">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
