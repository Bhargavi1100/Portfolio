"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/cn";

interface CardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  variant?: "default" | "elevated" | "outlined" | "glass";
  padding?: "none" | "sm" | "md" | "lg";
  hover?: boolean;
  children?: React.ReactNode;
}

function Card({ className, variant = "default", padding = "md", hover = true, children, ...props }: CardProps) {
  const variants = {
    default: "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800",
    elevated: "bg-white dark:bg-slate-900 shadow-lg dark:shadow-slate-900/50",
    outlined: "border-2 border-slate-200 dark:border-slate-700",
    glass: "bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-white/20 dark:border-slate-700/50",
  };

  const paddings = {
    none: "",
    sm: "p-3",
    md: "p-5",
    lg: "p-7",
  };

  return (
    <motion.div
      whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : undefined}
      className={cn(
        "rounded-xl transition-shadow",
        variants[variant],
        paddings[padding],
        hover && "hover:shadow-xl dark:hover:shadow-slate-900/60",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export { Card, type CardProps };
