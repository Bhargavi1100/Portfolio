"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
  id?: string;
}

function SectionHeading({ title, subtitle, align = "center", className, id }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={cn(
        "mb-12",
        align === "center" && "text-center",
        align === "right" && "text-right",
        className
      )}
      id={id}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3">
        {title}
      </h2>
      <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full mx-auto mb-4" />
      {subtitle && (
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

export { SectionHeading };
