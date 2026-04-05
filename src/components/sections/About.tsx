"use client";

import { motion } from "framer-motion";
import { BarChart3, Target, TrendingUp, Zap, Shield, Bot } from "lucide-react";
import { Container, SectionHeading, Button } from "@/components/ui";
import { personalInfo } from "@/data";

const highlights = [
  { icon: BarChart3, label: "KPI Tracking & SLA Monitoring" },
  { icon: Shield, label: "Data Quality Assurance" },
  { icon: TrendingUp, label: "Financial Reporting & Reconciliation" },
  { icon: Zap, label: "Python Automation (Pandas, NumPy)" },
  { icon: Target, label: "Fund Administration Operations" },
  { icon: Bot, label: "AI-Powered Workflow Optimization" },
];

const quickFacts = [
  { emoji: "🏦", label: "Northern Trust — Analyst I" },
  { emoji: "📊", label: "98–99% Data Accuracy" },
  { emoji: "⚡", label: "20–25% Efficiency Gains" },
  { emoji: "🤖", label: "Automation Enthusiast" },
  { emoji: "🎓", label: "BCA — 9.3 CGPA, Dept. Topper" },
  { emoji: "💡", label: "Microsoft Copilot Power User" },
];

function About() {
  return (
    <section id="about" className="py-20 bg-slate-50/50 dark:bg-slate-950/50">
      <Container>
        <SectionHeading title="About Me" subtitle="FinTech-focused Data Analyst driving accuracy, automation, and insights" />

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative mb-8">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-violet-600 rounded-full" />
              <div className="pl-6">
                <p className="text-lg text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                  {personalInfo.bio}
                </p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  At Northern Trust, I process and validate high-volume financial datasets — trade settlements, fund NAV, 
                  and asset valuations — maintaining 98–99% accuracy across fund administration workflows. I build Python-based 
                  automation scripts that have improved reconciliation efficiency by 20–25%, and leverage Microsoft Copilot to 
                  accelerate report summarization and analytical tasks.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-950/50 flex items-center justify-center shrink-0">
                    <h.icon className="h-4.5 w-4.5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{h.label}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2.5 mb-8">
              {quickFacts.map((fact) => (
                <span
                  key={fact.label}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white dark:bg-slate-800 rounded-full text-sm font-medium text-slate-700 dark:text-slate-300 shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow"
                >
                  {fact.emoji} {fact.label}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a href={personalInfo.resumeUrl} download>
                <Button variant="primary">Download Full Resume</Button>
              </a>
              <Button
                variant="outline"
                onClick={() => {
                  document.querySelector("#experience")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                View Experience
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export { About };
