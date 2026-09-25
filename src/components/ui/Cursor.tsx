"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Custom cursor — a small dot that follows with spring physics.
 * Expands on hover over interactive elements.
 * Hidden on touch devices.
 */
export function Cursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  const springX = useSpring(cursorX, { stiffness: 600, damping: 40, mass: 0.4 });
  const springY = useSpring(cursorY, { stiffness: 600, damping: 40, mass: 0.4 });
  const dotSpringX = useSpring(dotX, { stiffness: 200, damping: 25 });
  const dotSpringY = useSpring(dotY, { stiffness: 200, damping: 25 });

  const scale = useMotionValue(1);
  const scaleSpring = useSpring(scale, { stiffness: 400, damping: 28 });
  const opacity = useMotionValue(0);

  useEffect(() => {
    // Hide on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e: MouseEvent) => {
      cursorX.set(e.clientX - 5);
      cursorY.set(e.clientY - 5);
      dotX.set(e.clientX - 18);
      dotY.set(e.clientY - 18);
      opacity.set(1);
    };

    const onHover = () => scale.set(2.5);
    const onLeave = () => scale.set(1);

    const interactives = document.querySelectorAll(
      "a, button, [role='button'], [data-cursor-expand]"
    );

    interactives.forEach((el) => {
      el.addEventListener("mouseenter", onHover);
      el.addEventListener("mouseleave", onLeave);
    });

    window.addEventListener("mousemove", onMove);

    return () => {
      window.removeEventListener("mousemove", onMove);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", onHover);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, [cursorX, cursorY, dotX, dotY, scale, opacity]);

  return (
    <>
      {/* Small dot — fast follower */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] rounded-full pointer-events-none mix-blend-difference hidden lg:block"
        style={{
          x: springX,
          y: springY,
          width: 10,
          height: 10,
          backgroundColor: "var(--accent)",
          opacity,
        }}
      />
      {/* Larger ring — slower follower */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] rounded-full pointer-events-none border border-current hidden lg:block"
        style={{
          x: dotSpringX,
          y: dotSpringY,
          width: 36,
          height: 36,
          scale: scaleSpring,
          color: "var(--accent)",
          opacity: useSpring(opacity, { stiffness: 200, damping: 30 }),
        }}
      />
    </>
  );
}
