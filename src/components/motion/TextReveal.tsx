"use client";

import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface WordRevealProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
  as?: React.ElementType;
  once?: boolean;
}

/**
 * Reveals text word-by-word with a clip-path slide-up.
 * Each word is wrapped in overflow:hidden so the slide stays contained.
 */
export function WordReveal({
  text,
  className = "",
  delay = 0,
  stagger = 0.08,
  duration = 0.65,
  as: Tag = "p",
  once = true,
}: WordRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, {
    once,
    margin: "-40px",
  });

  const words = text.split(" ");

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  };

  const wordVariants: Variants = {
    hidden: { y: "110%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: { duration, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.span
      // @ts-expect-error — polymorphic motion component
      as={Tag}
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`inline-flex flex-wrap gap-x-[0.25em] ${className}`}
      aria-label={text}
    >
      {words.map((word, i) => (
        <span key={i} style={{ overflow: "hidden", display: "inline-block" }}>
          <motion.span variants={wordVariants} style={{ display: "block" }}>
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

interface LineRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right";
  once?: boolean;
}

/** Single element clip-path reveal — slides in from a direction */
export function LineReveal({
  children,
  className = "",
  delay = 0,
  duration = 0.7,
  direction = "up",
  once = true,
}: LineRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-40px" });

  const initial = {
    up: { y: 32, opacity: 0 },
    down: { y: -32, opacity: 0 },
    left: { x: 32, opacity: 0 },
    right: { x: -32, opacity: 0 },
  }[direction];

  const animate = { y: 0, x: 0, opacity: 1 };

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={isInView ? animate : initial}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
}

/** Stagger-animates direct children on viewport entry */
export function StaggerContainer({
  children,
  className = "",
  delay = 0,
  stagger = 0.1,
  once = true,
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Child item for StaggerContainer */
export function StaggerItem({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
