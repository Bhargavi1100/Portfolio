"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import Image from "next/image";
import { Container, GradientText, AnimatedCounter, Button } from "@/components/ui";
import { personalInfo, roles, quickStats } from "@/data";

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
          if (displayText.length === currentRole.length) {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          setDisplayText(currentRole.slice(0, displayText.length - 1));
          if (displayText.length === 0) {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const socialIcons: Record<string, React.FC<{ className?: string }>> = {
    github: GithubIcon,
    linkedin: LinkedinIcon,
    email: Mail,
  };

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100 via-transparent to-transparent dark:from-blue-950/30 dark:via-transparent" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] dark:opacity-[0.05]" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.p variants={item} className="text-blue-600 dark:text-blue-400 font-medium mb-2">
              Hello, I&apos;m
            </motion.p>

            <motion.h1 variants={item} className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              <GradientText className="leading-tight">{personalInfo.name}</GradientText>
            </motion.h1>

            <motion.div variants={item} className="h-10 mb-6">
              <span className="text-xl sm:text-2xl text-slate-700 dark:text-slate-300">
                {displayText}
                <span className="animate-pulse text-blue-600">|</span>
              </span>
            </motion.div>

            <motion.p variants={item} className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-lg">
              {personalInfo.tagline}
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-3 mb-8">
              <a href={personalInfo.resumeUrl} download>
                <Button variant="primary" size="lg">Download CV</Button>
              </a>
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                View Projects
              </Button>
              <Button
                variant="ghost"
                size="lg"
                onClick={() => {
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Contact Me
              </Button>
            </motion.div>

            <motion.div variants={item} className="flex items-center gap-4 mb-8">
              {personalInfo.socialLinks.map((link) => {
                const Icon = socialIcons[link.platform as keyof typeof socialIcons];
                if (!Icon) return null;
                return (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors"
                    aria-label={link.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </motion.div>

            <motion.div variants={item} className="flex gap-6">
              {quickStats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-slate-900 dark:text-white">
                    <AnimatedCounter target={stat.value} decimals={stat.value % 1 !== 0 ? 1 : 0} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full opacity-20 blur-2xl animate-pulse" />
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden ring-4 ring-blue-600/20 dark:ring-blue-400/20">
                <Image
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <ArrowDown className="h-6 w-6 text-slate-400" />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

export { Hero };
