"use client";

import { motion } from "framer-motion";
import { GraduationCap, FolderGit2, Award, Target, TrendingUp, Database } from "lucide-react";
import { Container, AnimatedCounter } from "@/components/ui";

const stats = [
  { icon: GraduationCap, value: 9.3, label: "CGPA Score", suffix: "/10", decimals: 1 },
  { icon: FolderGit2, value: 3, label: "Projects Completed", suffix: "+", decimals: 0 },
  { icon: Award, value: 4, label: "Certifications Earned", suffix: "", decimals: 0 },
  { icon: Target, value: 85, label: "ML Model Accuracy", suffix: "%", decimals: 0 },
  { icon: TrendingUp, value: 12, label: "Revenue Impact", suffix: "%", decimals: 0 },
  { icon: Database, value: 7, label: "Datasets Analyzed", suffix: "", decimals: 0 },
];

function Stats() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-950 dark:to-violet-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      <Container className="relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <stat.icon className="h-6 w-6 text-white/80 mx-auto mb-2" />
              <div className="text-3xl font-bold text-white mb-1">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
              </div>
              <div className="text-sm text-white/70">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export { Stats };
