import type { Education, Certification, Internship } from "@/types";

export const education: Education[] = [
  {
    id: "bca-kuvempu",
    institution: "Kuvempu University",
    degree: "Bachelor of Computer Applications",
    field: "Computer Applications",
    startYear: 2021,
    endYear: 2024,
    grade: "CGPA: 9.3",
    description:
      "Achieved the position of Department Topper in Computer Applications, consistently maintaining academic excellence throughout the entire degree program.",
    achievements: [
      "Department Topper — highest CGPA in the batch",
      "Consistent academic excellence across all semesters",
      "Strong foundation in programming, databases, and data structures",
    ],
    location: "Karnataka, India",
  },
  {
    id: "class12-science",
    institution: "Government Pre-University College, Thirthahalli",
    degree: "Class 12 (Pre-University)",
    field: "Science (PCMCs)",
    startYear: 2018,
    endYear: 2020,
    grade: "77.33%",
    description:
      "Completed pre-university education with a strong science foundation.",
    achievements: ["Science stream with solid academic performance"],
    location: "Thirthahalli, Karnataka",
  },
];

export const certifications: Certification[] = [
  {
    id: "mysql-basics",
    title: "MySQL Basics",
    issuer: "Great Learning",
    issueDate: "July 2024",
    credentialUrl: "https://www.mygreatlearning.com/certificate/BSTHCLIN",
    skills: ["SQL", "Joins", "Aggregation", "Data Manipulation", "Database Management"],
    description: "Comprehensive MySQL covering joins, aggregation, and database management.",
  },
  {
    id: "data-analysis-excel",
    title: "Data Analysis Using Excel",
    issuer: "Great Learning",
    issueDate: "July 2024",
    credentialUrl: "https://www.mygreatlearning.com/certificate/OOHWILET",
    skills: ["Excel", "VLOOKUP", "HLOOKUP", "Pivot Tables", "Data Cleaning"],
    description: "Advanced Excel techniques for data analysis including pivot tables and lookups.",
  },
  {
    id: "seo-strategies",
    title: "SEO Strategies",
    issuer: "Great Learning",
    issueDate: "November 2024",
    credentialUrl: "https://www.mygreatlearning.com/certificate/VCNDNDXH",
    skills: ["SEO", "Keyword Analysis", "SERP Analysis"],
    description: "Search engine optimization strategies and keyword analysis.",
  },
  {
    id: "search-engine-marketing",
    title: "Search Engine Marketing",
    issuer: "Great Learning",
    issueDate: "November 2024",
    credentialUrl: "https://www.mygreatlearning.com/certificate/UDDUSORR",
    skills: ["SEM", "Google Ads", "CTR Optimization"],
    description: "Search engine marketing with Google Ads and CTR optimization.",
  },
];

export const internships: Internship[] = [
  {
    id: "northern-trust",
    company: "Northern Trust – India",
    role: "Analyst I",
    startDate: "May 2025",
    endDate: "Present",
    type: "on-site",
    description:
      "Asset Servicing / Fund Administration / Data Delivery team — processing and validating high-volume financial datasets with a focus on accuracy, automation, and SLA compliance.",
    responsibilities: [
      "Processed and validated high-volume financial datasets (trade settlements, fund NAV, asset valuations) with 98–99% accuracy, ensuring full SLA compliance within fund administration operations",
      "Performed data cleaning, structuring, and validation to maintain high-quality datasets for daily financial reporting and regulatory submissions",
      "Tracked KPIs and monitored SLA performance across multiple fund administration workflows, identifying bottlenecks and ensuring on-time delivery",
      "Conducted root cause analysis on data discrepancies and reconciliation failures, implementing corrective measures that reduced rework by 20%",
      "Developed Python-based automation scripts (Pandas, NumPy) for data validation and reconciliation workflows, improving efficiency by 20–25% and reducing manual intervention",
      "Leveraged Microsoft Copilot to accelerate report summarization, automate repetitive analytical tasks, and draft structured data commentary — significantly reducing turnaround time on deliverables",
      "Collaborated with cross-functional teams including operations, compliance, and technology to improve data workflows and reporting accuracy",
    ],
    skills: ["Python", "Pandas", "NumPy", "SQL", "Power BI", "Excel", "Fund Administration", "Data Reconciliation", "Microsoft Copilot"],
  },
  {
    id: "accenture-forage",
    company: "Accenture North America",
    role: "Data Analytics & Visualization — Job Simulation",
    startDate: "August 2024",
    endDate: "August 2024",
    type: "virtual-simulation",
    description:
      "Completed a simulation focused on advising a hypothetical social media client as a Data Analyst at Accenture via Forage.",
    responsibilities: [
      "Advised a hypothetical social media client on content strategy using data insights",
      "Cleaned, modelled, and analyzed 7 datasets to uncover content trends",
      "Prepared a PowerPoint deck and video presentation communicating key insights",
      "Delivered strategic recommendations to internal stakeholders",
    ],
    skills: ["Data Analysis", "Data Visualization", "PowerPoint", "Data Cleaning", "Storytelling"],
    certificateUrl:
      "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Accenture%20North%20America/hzmoNKtzvAzXsEqx8_Accenture%20North%20America_8ed3Tob2pDySKK4Wb_1724409098204_completion_certificate.pdf",
  },
  {
    id: "internship-studio",
    company: "Internship Studio",
    role: "Web Development Intern",
    startDate: "February 2024",
    endDate: "February 2024",
    type: "remote",
    description:
      "Developed features for an e-commerce platform, enhancing responsiveness and user experience.",
    responsibilities: [
      "Developed front-end features for an e-commerce platform",
      "Enhanced responsiveness and user experience using HTML, CSS, JS, and Bootstrap",
      "Gained experience in version control and team collaboration on web projects",
    ],
    skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "Git"],
  },
];
