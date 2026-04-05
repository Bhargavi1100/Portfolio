"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BarChart3, Target, TrendingUp, Search } from "lucide-react";
import { Container, SectionHeading, Button } from "@/components/ui";
import { personalInfo } from "@/data";

const highlights = [
  { icon: BarChart3, label: "Data-Driven Decision Making" },
  { icon: Target, label: "Pattern Recognition & Insights" },
  { icon: TrendingUp, label: "Interactive Dashboard Design" },
  { icon: Search, label: "Statistical Analysis & ML" },
];

const quickFacts = [
  { emoji: "🎓", label: "Department Topper" },
  { emoji: "📊", label: "3+ Analytics Projects" },
  { emoji: "🏆", label: "9.3 CGPA" },
  { emoji: "💡", label: "Always Learning" },
];

function About() {
  return (
    <section id="about" className="py-20 bg-slate-50/50 dark:bg-slate-950/50">
      <Container>
        <SectionHeading title="About Me" subtitle="Get to know my professional journey and passion for data" />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-2xl overflow-hidden">
              <Image
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-72 h-72 sm:w-80 sm:h-80 rounded-2xl border-2 border-blue-600/20 dark:border-blue-400/20 -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              {personalInfo.bio}
            </p>
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              I recently graduated with a BCA degree from Kuvempu University and have completed projects like analyzing retail sales data to identify key product trends and developing an HR analytics dashboard to predict employee attrition. My technical skills, combined with a passion for problem-solving and data visualization, drive me to deliver impactful insights.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-6">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300"
                >
                  <h.icon className="h-4 w-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  {h.label}
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mb-6">
              {quickFacts.map((fact) => (
                <span
                  key={fact.label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-slate-800 rounded-full text-sm font-medium text-slate-700 dark:text-slate-300 shadow-sm border border-slate-200 dark:border-slate-700"
                >
                  {fact.emoji} {fact.label}
                </span>
              ))}
            </div>

            <a href={personalInfo.resumeUrl} download>
              <Button variant="primary">Download Full Resume</Button>
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export { About };
