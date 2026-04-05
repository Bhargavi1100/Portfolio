import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "retail-sales-analysis",
    title: "Retail Sales Analysis — Consumer Goods",
    description:
      "Comprehensive analysis of retail sales data using K-Means clustering to identify top-selling products and customer segments, with an interactive Power BI dashboard.",
    longDescription:
      "Conducted a thorough analysis of historical sales data from various sources, meticulously cleaning and merging datasets to build a complete picture of retail sales performance. Leveraged K-Means clustering to identify top-selling products and key customer segments, enabling more targeted marketing strategies and efficient inventory management. Visualized critical metrics such as total revenue, sales growth rate, and profit margins. Developed an interactive Power BI dashboard that empowers the executive team to make informed, data-driven decisions.",
    techStack: ["Python", "Power BI", "Excel", "Kaggle"],
    category: "data-analysis",
    githubUrl: "https://github.com/Bhargavi1100/Retail-Sales-Analysis",
    highlights: [
      "Cleaned and merged multiple datasets for comprehensive analysis",
      "Applied K-Means clustering to segment customers and products",
      "Built interactive Power BI dashboard for executive decision-making",
      "Identified actionable insights to boost revenue by up to 12%",
    ],
    metrics: [
      { label: "Revenue Impact", value: 12, suffix: "%" },
      { label: "Datasets Merged", value: 7, suffix: "" },
      { label: "Key Segments", value: 5, suffix: "" },
    ],
    startDate: "2024",
    status: "completed",
    featured: true,
  },
  {
    id: "hr-analytics",
    title: "HR Analytics — Employee Attrition & Performance",
    description:
      "In-depth HR data analysis using logistic regression and decision trees to predict employee attrition with 85%+ accuracy and develop retention strategies.",
    longDescription:
      "Conducted an in-depth analysis of HR data, focusing on employee attrition, performance, and satisfaction to uncover key factors influencing turnover and productivity. Leveraged logistic regression and decision tree models to predict attrition with an accuracy rate of over 85%, identifying crucial drivers such as job satisfaction, overtime, and compensation. Applied clustering techniques to categorize employees based on engagement and performance, enabling targeted retention strategies.",
    techStack: ["Python", "Power BI", "Excel", "GitHub"],
    category: "data-analysis",
    githubUrl:
      "https://github.com/Bhargavi1100/HR-Analytics-Attrition-Performance",
    highlights: [
      "Built predictive models with 85%+ accuracy for attrition forecasting",
      "Identified key drivers: job satisfaction, overtime, compensation",
      "Applied clustering for employee engagement segmentation",
      "Created Power BI dashboard reducing potential turnover by 10%",
    ],
    metrics: [
      { label: "Model Accuracy", value: 85, suffix: "%" },
      { label: "Turnover Reduction", value: 10, suffix: "%" },
      { label: "Features Analyzed", value: 15, suffix: "+" },
    ],
    startDate: "2024",
    status: "completed",
    featured: true,
  },
  {
    id: "ecommerce-website",
    title: "E-Commerce Website",
    description:
      "Responsive e-commerce website with product catalog, shopping cart, and modern UI built with HTML, CSS, JavaScript, and Bootstrap.",
    longDescription:
      "Developed a responsive and user-friendly eCommerce website using HTML, CSS, and JavaScript to provide an optimized shopping experience across devices. Leveraged Bootstrap for layout and design, ensuring a sleek and modern user interface with features such as a product catalog, shopping cart, and checkout system.",
    techStack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    category: "web-development",
    githubUrl: "https://github.com/Bhargavi1100/E-Commerce",
    highlights: [
      "Fully responsive design optimized for all devices",
      "Product catalog with filtering and search functionality",
      "Shopping cart with dynamic price calculation",
      "Clean, modern UI following Bootstrap best practices",
    ],
    metrics: [
      { label: "Pages Built", value: 5, suffix: "+" },
      { label: "Responsive", value: 100, suffix: "%" },
    ],
    startDate: "2024",
    status: "completed",
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);
