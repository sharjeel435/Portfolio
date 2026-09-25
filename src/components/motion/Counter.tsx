"use client";

import { useEffect, useRef } from "react";
import { useMotionValue, useSpring, animate, useInView } from "framer-motion";

interface CounterProps {
  to: number;
  decimals?: number;
  duration?: number;
  className?: string;
  suffix?: string;
  prefix?: string;
}

/** Animated number counter — counts from 0 to `to` when scrolled into view */
export function Counter({
  to,
  decimals = 0,
  duration = 1.8,
  className = "",
  suffix = "",
  prefix = "",
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const count = useMotionValue(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(count, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(latest) {
        if (ref.current) {
          ref.current.textContent =
            prefix + latest.toFixed(decimals) + suffix;
        }
      },
    });
    return controls.stop;
  }, [isInView, to, decimals, duration, count, prefix, suffix]);

  return (
    <span ref={ref} className={className} aria-label={`${prefix}${to}${suffix}`}>
      {prefix}0{suffix}
    </span>
  );
}
