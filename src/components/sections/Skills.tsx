"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Container, SectionHeading, Card, SkillBar } from "@/components/ui";
import { cn } from "@/lib/cn";
import { skillGroups } from "@/data";
import type { SkillCategory } from "@/types";

const tabs: { label: string; value: SkillCategory | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Analytics", value: "analytics" },
  { label: "Programming", value: "programming" },
  { label: "Web", value: "web" },
  { label: "Tools", value: "tools" },
];

function Skills() {
  const [activeTab, setActiveTab] = useState<SkillCategory | "all">("all");

  const filteredGroups = activeTab === "all"
    ? skillGroups
    : skillGroups.filter((g) => g.category === activeTab);

  return (
    <section id="skills" className="py-20">
      <Container>
        <SectionHeading
          title="Technical Skills"
          subtitle="Tools and technologies I work with to deliver data-driven insights"
        />

        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-slate-100 dark:bg-slate-800 rounded-lg p-1 gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium rounded-md transition-colors",
                  activeTab === tab.value
                    ? "text-white"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                )}
              >
                {activeTab === tab.value && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-blue-600 rounded-md"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {filteredGroups.map((group) => (
              <div key={group.category} className="mb-10 last:mb-0">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                  {group.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
                  {group.description}
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {group.skills.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Card className="h-full">
                        <div className="flex items-center gap-3 mb-3">
                          {skill.icon.startsWith("/") ? (
                            <Image src={skill.icon} alt={skill.name} width={32} height={32} className="rounded" />
                          ) : (
                            <div className="w-8 h-8 rounded bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 text-sm font-bold">
                              {skill.name.charAt(0)}
                            </div>
                          )}
                          <div>
                            <h4 className="font-medium text-slate-900 dark:text-white text-sm">{skill.name}</h4>
                            {skill.description && (
                              <p className="text-xs text-slate-500 dark:text-slate-400">{skill.description}</p>
                            )}
                          </div>
                        </div>
                        <SkillBar name="" proficiency={skill.proficiency} delay={i * 0.05} />
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}

export { Skills };
