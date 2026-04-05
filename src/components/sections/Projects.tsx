"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import { Container, SectionHeading, Card, Badge, AnimatedCounter } from "@/components/ui";
import { projects } from "@/data";

function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 bg-slate-50/50 dark:bg-slate-950/50">
      <Container>
        <SectionHeading
          title="Featured Projects"
          subtitle="Real-world data analysis and development projects"
        />

        <div className="space-y-8 mb-12">
          {featured.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card variant="elevated" padding="lg" className="overflow-hidden">
                <div className="grid md:grid-cols-5 gap-6">
                  <div className="md:col-span-2">
                    <div className="h-full min-h-[200px] rounded-lg bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center">
                      <span className="text-4xl font-bold text-white/20">{project.title.charAt(0)}</span>
                    </div>
                  </div>
                  <div className="md:col-span-3">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.techStack.map((tech) => (
                        <Badge key={tech} variant="primary" size="sm">{tech}</Badge>
                      ))}
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-6 mb-4">
                      {project.metrics.map((metric) => (
                        <div key={metric.label} className="text-center">
                          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                            <AnimatedCounter target={metric.value} suffix={metric.suffix} />
                          </div>
                          <div className="text-xs text-slate-500 dark:text-slate-400">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                    <ul className="space-y-1.5 mb-4">
                      {project.highlights.slice(0, 3).map((h) => (
                        <li key={h} className="text-sm text-slate-600 dark:text-slate-400 flex gap-2">
                          <span className="text-blue-600 dark:text-blue-400 shrink-0">▸</span> {h}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      <GithubIcon className="h-4 w-4" /> View on GitHub <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {others.length > 0 && (
          <>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">Other Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {others.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="h-full flex flex-col">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">{project.title}</h4>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.techStack.map((tech) => (
                        <Badge key={tech} size="sm">{tech}</Badge>
                      ))}
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 flex-grow">{project.description}</p>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      <GithubIcon className="h-4 w-4" /> GitHub
                    </a>
                  </Card>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </Container>
    </section>
  );
}

export { Projects };
