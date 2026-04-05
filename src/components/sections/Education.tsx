"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, ExternalLink } from "lucide-react";
import { Container, SectionHeading, Card, Badge } from "@/components/ui";
import { education, certifications } from "@/data";

function Education() {
  return (
    <section id="education" className="py-20">
      <Container>
        <SectionHeading
          title="Education & Certifications"
          subtitle="My academic journey and professional development"
        />

        <div className="relative mb-16">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700 hidden md:block" />

          <div className="space-y-8">
            {education.map((edu, i) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative md:pl-20"
              >
                <div className="hidden md:flex absolute left-5 top-2 w-7 h-7 rounded-full bg-blue-600 items-center justify-center z-10">
                  <GraduationCap className="h-3.5 w-3.5 text-white" />
                </div>

                <Card variant="elevated">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">{edu.degree}</h3>
                    <Badge variant="success">{edu.grade}</Badge>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 font-medium mb-1">{edu.institution}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">
                    <time>{edu.startYear}</time> — <time>{edu.endYear}</time>
                    {edu.location && ` · ${edu.location}`}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">{edu.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((a) => (
                      <span key={a} className="text-xs text-blue-600 dark:text-blue-400">🏆 {a}</span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6 text-center">
          Professional Certifications
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="h-4 w-4 text-amber-500 shrink-0" />
                  <h4 className="font-semibold text-sm text-slate-900 dark:text-white">{cert.title}</h4>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">{cert.issuer} · {cert.issueDate}</p>
                <div className="flex flex-wrap gap-1 mb-3 flex-grow">
                  {cert.skills.slice(0, 3).map((s) => (
                    <Badge key={s} size="sm" variant="outline">{s}</Badge>
                  ))}
                </div>
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View Certificate <ExternalLink className="h-3 w-3" />
                </a>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export { Education };
