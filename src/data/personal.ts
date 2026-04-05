import type { PersonalInfo, NavItem } from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Bhargavi K Pai",
  title: "Data Analyst",
  tagline:
    "Transforming raw data into actionable insights that drive strategic business decisions.",
  bio: "Data Analyst with a strong foundation in statistical analysis, data visualization, and business intelligence. BCA graduate (CGPA 9.3, Department Topper) from Kuvempu University with hands-on experience in Python, SQL, and Power BI. Passionate about uncovering patterns in data and building interactive dashboards that empower data-driven decision-making.",
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
  "Data Analyst",
  "BI Developer",
  "Problem Solver",
  "Insight Explorer",
];

export const quickStats = [
  { label: "CGPA", value: 9.3, suffix: "/10" },
  { label: "Projects", value: 3, suffix: "+" },
  { label: "Certifications", value: 4, suffix: "" },
];
