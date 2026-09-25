import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "outline" | "solid";
  size?: "sm" | "md";
}

export function Badge({ children, className, variant = "default", size = "sm" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center font-medium rounded-full border transition-colors",
        {
          "bg-violet-500/10 border-violet-500/25 text-violet-300": variant === "default",
          "bg-transparent border-white/10 text-white/50": variant === "outline",
          "bg-violet-600 border-transparent text-white": variant === "solid",
        },
        {
          "text-[10px] px-2.5 py-0.5 tracking-wide": size === "sm",
          "text-xs px-3 py-1 tracking-wide": size === "md",
        },
        className
      )}
    >
      {children}
    </span>
  );
}

interface SectionBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionBadge({ children, className }: SectionBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-4 py-1.5 rounded-full",
        "bg-white/[0.04] border border-violet-500/20 text-violet-400",
        "text-[11px] font-semibold uppercase tracking-widest",
        className
      )}
    >
      {children}
    </div>
  );
}
