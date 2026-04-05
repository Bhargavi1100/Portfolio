import type { SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
  {
    category: "finance",
    title: "Financial & Domain",
    description: "FinTech domain expertise in fund administration, investment operations, and financial reporting",
    skills: [
      {
        name: "Fund Administration",
        icon: "landmark",
        proficiency: 88,
        category: "finance",
        description: "NAV calculation, fund accounting, investor reporting, regulatory compliance",
      },
      {
        name: "Trade Settlements & Reconciliation",
        icon: "arrow-left-right",
        proficiency: 90,
        category: "finance",
        description: "Trade lifecycle, settlement processing, break resolution, data reconciliation",
      },
      {
        name: "Asset Valuation & NAV",
        icon: "trending-up",
        proficiency: 85,
        category: "finance",
        description: "Net Asset Value computation, asset pricing, investment portfolio valuation",
      },
      {
        name: "Financial Reporting",
        icon: "file-bar-chart",
        proficiency: 88,
        category: "finance",
        description: "KPI tracking, SLA monitoring, regulatory submissions, large-scale reporting",
      },
      {
        name: "Data Quality & Governance",
        icon: "shield-check",
        proficiency: 92,
        category: "finance",
        description: "Data validation, quality assurance, discrepancy analysis, compliance checks",
      },
    ],
  },
  {
    category: "analytics",
    title: "Analytics & BI",
    description: "Data analysis, visualization, and business intelligence tools",
    skills: [
      {
        name: "Power BI",
        icon: "/images/skills/bi.png",
        proficiency: 85,
        category: "analytics",
        description: "Interactive dashboards, DAX, data modeling",
      },
      {
        name: "Excel",
        icon: "/images/skills/excel.png",
        proficiency: 90,
        category: "analytics",
        description: "VLOOKUP, pivot tables, data cleaning, charts",
      },
      {
        name: "Data Visualization",
        icon: "/images/skills/data-analysis.png",
        proficiency: 85,
        category: "analytics",
        description: "Chart design, storytelling with data, dashboard UX",
      },
      {
        name: "Regression Analysis",
        icon: "/images/skills/regression.png",
        proficiency: 75,
        category: "analytics",
        description: "Linear & logistic regression, model evaluation",
      },
      {
        name: "Statistical Analysis",
        icon: "bar-chart-3",
        proficiency: 78,
        category: "analytics",
        description: "Hypothesis testing, correlation, clustering",
      },
    ],
  },
  {
    category: "programming",
    title: "Programming",
    description: "Languages for data processing, analysis, and web development",
    skills: [
      {
        name: "Python",
        icon: "/images/skills/python.png",
        proficiency: 80,
        category: "programming",
        description: "Pandas, NumPy, scikit-learn, matplotlib",
      },
      {
        name: "SQL",
        icon: "/images/skills/sql.png",
        proficiency: 85,
        category: "programming",
        description: "Joins, aggregation, subqueries, window functions",
      },
      {
        name: "JavaScript",
        icon: "/images/skills/js.png",
        proficiency: 70,
        category: "programming",
        description: "DOM manipulation, ES6+, async/await",
      },
    ],
  },
  {
    category: "web",
    title: "Web Development",
    description: "Front-end technologies for building responsive web interfaces",
    skills: [
      {
        name: "HTML",
        icon: "/images/skills/html-5.png",
        proficiency: 85,
        category: "web",
        description: "Semantic HTML5, accessibility, SEO structure",
      },
      {
        name: "CSS",
        icon: "/images/skills/css.png",
        proficiency: 80,
        category: "web",
        description: "Flexbox, Grid, animations, responsive design",
      },
      {
        name: "Bootstrap",
        icon: "/images/skills/bootstrap.png",
        proficiency: 75,
        category: "web",
        description: "Responsive grid, components, utility classes",
      },
    ],
  },
  {
    category: "tools",
    title: "Tools & Platforms",
    description: "Productivity and collaboration tools",
    skills: [
      {
        name: "PowerPoint",
        icon: "/images/skills/office.png",
        proficiency: 85,
        category: "tools",
        description: "Data presentations, storytelling, executive decks",
      },
      {
        name: "Git & GitHub",
        icon: "github",
        proficiency: 70,
        category: "tools",
        description: "Version control, collaboration, repositories",
      },
      {
        name: "Kaggle",
        icon: "database",
        proficiency: 72,
        category: "tools",
        description: "Datasets, notebooks, competitions",
      },
    ],
  },
];

export const allSkills = skillGroups.flatMap((group) => group.skills);
