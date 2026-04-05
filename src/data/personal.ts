import type { PersonalInfo, NavItem } from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Bhargavi K Pai",
  title: "FinTech Data Analyst",
  tagline:
    "FinTech-focused Data Analyst driving accuracy, automation, and insights in financial operations.",
  bio: "FinTech-focused Data Analyst with experience in financial data processing, validation, and automation within asset servicing and fund administration. Proficient in Python (Pandas, NumPy), SQL/MySQL, Advanced Excel, and Power BI for KPI tracking, SLA monitoring, and large-scale financial reporting. Currently an Analyst at Northern Trust with a strong foundation in data quality assurance and financial operations.",
  email: "bhargavikpai@example.com",
  location: {
    city: "Karnataka",
    country: "India",
  },
  profileImage: "/images/profile.jpg",
  resumeUrl: "/files/Bhargavi_K_Pai_Resume.pdf",
  socialLinks: [
    {
      platform: "github",
      url: "https://github.com/Bhargavi1100",
      label: "GitHub",
    },
    {
      platform: "linkedin",
      url: "https://www.linkedin.com/in/bhargavi-k-pai-b44423287/",
      label: "LinkedIn",
    },
    {
      platform: "email",
      url: "mailto:bhargavikpai@example.com",
      label: "Email",
    },
  ],
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const roles = [
  "FinTech Data Analyst",
  "Automation Enthusiast",
  "Financial Data Specialist",
  "BI & Reporting Expert",
];

export const quickStats = [
  { label: "Accuracy Rate", value: 99, suffix: "%" },
  { label: "Efficiency Gain", value: 25, suffix: "%" },
  { label: "Certifications", value: 4, suffix: "+" },
];
