"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, ChevronDown, ExternalLink } from "lucide-react";
import { Container, SectionHeading, Card, Badge } from "@/components/ui";
import { internships } from "@/data";

function Experience() {
  const [expandedId, setExpandedId] = useState<string | null>(internships[0]?.id ?? null);

  return (
    <section id="experience" className="py-20 bg-slate-50/50 dark:bg-slate-950/50">
      <Container size="lg">
        <SectionHeading
          title="Professional Experience"
          subtitle="Full-time roles and industry experiences that shaped my expertise"
        />

        <div className="space-y-4">
          {internships.map((intern, i) => {
            const isExpanded = expandedId === intern.id;
            return (
              <motion.div
                key={intern.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card hover={false} padding="none">
                  <button
                    onClick={() => setExpandedId(isExpanded ? null : intern.id)}
                    className="w-full text-left p-5 flex items-start gap-4"
                    aria-expanded={isExpanded}
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0 mt-1">
                      <Briefcase className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-grow min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-semibold text-slate-900 dark:text-white">{intern.role}</h3>
                        {intern.type && (
                          <Badge size="sm" variant={intern.type === "virtual-simulation" ? "secondary" : "primary"}>
                            {intern.type === "virtual-simulation" ? "Virtual Simulation" : intern.type === "remote" ? "Remote" : "On-site"}
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {intern.company} · {intern.startDate} — {intern.endDate}
                      </p>
                    </div>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      className="shrink-0 mt-2"
                    >
                      <ChevronDown className="h-5 w-5 text-slate-400" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pt-0 ml-14">
                          <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">{intern.description}</p>
                          <ul className="space-y-1.5 mb-4">
                            {intern.responsibilities.map((r) => (
                              <li key={r} className="text-sm text-slate-600 dark:text-slate-400 flex gap-2">
                                <span className="text-emerald-500 shrink-0">✓</span> {r}
                              </li>
                            ))}
                          </ul>
                          <div className="flex flex-wrap gap-1.5 mb-3">
                            {intern.skills.map((s) => (
                              <Badge key={s} size="sm">{s}</Badge>
                            ))}
                          </div>
                          {intern.certificateUrl && (
                            <a
                              href={intern.certificateUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                            >
                              View Certificate <ExternalLink className="h-3 w-3" />
                            </a>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export { Experience };
