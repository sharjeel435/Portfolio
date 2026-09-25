"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  as?: "button" | "a";
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
  loading?: boolean;
}

export function Button({
  variant = "primary",
  size = "md",
  as = "button",
  href,
  target,
  rel,
  children,
  className,
  loading,
  disabled,
  ...props
}: ButtonProps) {
  const baseClass = cn(
    "inline-flex items-center justify-center gap-2.5 font-semibold rounded-xl transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/50",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    {
      "bg-violet-600 hover:bg-violet-500 text-white shadow-[0_0_24px_rgba(124,58,237,0.35)] hover:shadow-[0_0_36px_rgba(124,58,237,0.5)]":
        variant === "primary",
      "bg-white/[0.06] hover:bg-white/[0.10] text-white/80 hover:text-white border border-white/10 hover:border-white/20":
        variant === "secondary",
      "bg-transparent hover:bg-white/[0.06] text-white/60 hover:text-white":
        variant === "ghost",
    },
    {
      "text-xs px-4 py-2": size === "sm",
      "text-sm px-5 py-2.5": size === "md",
      "text-sm px-6 py-3": size === "lg",
    },
    className
  );

  const inner = (
    <motion.span
      className={baseClass}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
    >
      {loading ? (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
        />
      ) : (
        children
      )}
    </motion.span>
  );

  if (as === "a" && href) {
    return (
      <a href={href} target={target} rel={rel} className="inline-block">
        {inner}
      </a>
    );
  }

  return (
    <button disabled={disabled || loading} {...props} className="inline-block">
      {inner}
    </button>
  );
}
