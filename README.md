# 🚀 Bhargavi's Portfolio

**A modern, performant developer portfolio built with Next.js 16 — featuring glassmorphism UI, smooth animations, and full dark/light mode support.**

[![Next.js](https://img.shields.io/badge/Next.js-16.2.2-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-latest-ff69b4?logo=framer)](https://www.framer.com/motion/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## 📸 Screenshots

<p align="center">
  <img src="docs/screenshots/light-mode.png" alt="Light Mode" width="45%" />
  &nbsp;&nbsp;
  <img src="docs/screenshots/dark-mode.png" alt="Dark Mode" width="45%" />
</p>

> _Replace the placeholder images above with actual screenshots of your portfolio._

---

## ✨ Features

- 🎨 **Modern UI** with glassmorphism and gradient accents
- 🌙 **Dark/Light mode** with system preference detection
- ✨ **Smooth scroll animations** powered by Framer Motion
- 📊 **Interactive data visualizations** with Recharts
- 📱 **Fully responsive** across all devices
- ⚡ **Optimized performance** with Next.js static export
- 🔍 **SEO optimized** with structured data
- ♿ **Accessible** with keyboard navigation and ARIA labels
- 📬 **Contact form** with Formspree integration

---

## 🛠️ Tech Stack

| Category | Technology |
| --- | --- |
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router, Static Export) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Charts** | [Recharts](https://recharts.org/) |
| **Validation** | [Zod](https://zod.dev/) + [React Hook Form](https://react-hook-form.com/) |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- npm 10+

### Installation

```bash
# Clone the repository
git clone https://github.com/bhargavi1100/Portfolio.git
cd Portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build & Deploy

```bash
# Create a production build (static export to out/)
npm run build

# Preview the production build locally
npx serve out
```

---

## 📁 Project Structure

```
src/
├── app/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Home page composing all sections
│   └── sitemap.ts          # Dynamic sitemap generation
├── components/
│   ├── animations/
│   │   └── ScrollReveal.tsx
│   ├── layout/
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── DataShowcase.tsx
│   │   ├── Education.tsx
│   │   ├── Experience.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   └── Stats.tsx
│   ├── ui/                 # Reusable UI primitives
│   │   ├── AnimatedCounter.tsx
│   │   ├── BackToTop.tsx
│   │   ├── Badge.tsx
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Container.tsx
│   │   ├── GradientText.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── SkillBar.tsx
│   │   ├── SocialIcons.tsx
│   │   └── index.ts
│   └── visualizations/
│       ├── AttritionPieChart.tsx
│       └── SalesChart.tsx
├── data/                   # All portfolio content lives here
│   ├── education.ts
│   ├── index.ts
│   ├── personal.ts
│   ├── projects.ts
│   ├── sample-charts.ts
│   └── skills.ts
├── hooks/
│   └── useReducedMotion.ts
├── lib/
│   ├── cn.ts
│   ├── theme-provider.tsx
│   ├── theme.ts
│   └── validations/
│       └── contact.ts
└── types/
    ├── common.ts
    ├── education.ts
    ├── index.ts
    ├── portfolio.ts
    ├── project.ts
    └── skill.ts
```

---

## 📖 Portfolio Sections

| Section | Description |
| --- | --- |
| **Hero** | Animated intro with name, title, and call-to-action buttons |
| **About** | Personal summary with animated counters for key stats |
| **Skills** | Categorized skill bars with proficiency levels |
| **Projects** | Filterable project cards with tech tags and live/repo links |
| **Data Showcase** | Interactive Recharts visualizations (sales trends, attrition analysis) |
| **Education** | Academic timeline with institution details |
| **Experience** | Professional experience with role highlights |
| **Contact** | Validated contact form powered by Formspree |

---

## 🎨 Customization

### Update Personal Info

All portfolio content is centralized in **`src/data/`**:

- **`personal.ts`** — Name, title, bio, social links
- **`projects.ts`** — Project entries (title, description, tech stack, links)
- **`skills.ts`** — Skill categories and proficiency levels
- **`education.ts`** — Academic background
- **`sample-charts.ts`** — Data for the visualization section

### Theme Colors

Edit **`src/lib/theme.ts`** to customize the color palette, or adjust Tailwind CSS variables in **`src/app/globals.css`**.

### Add a New Project

Add an entry to the projects array in **`src/data/projects.ts`**:

```ts
{
  title: "My New Project",
  description: "A brief description of the project.",
  image: "/projects/my-project.png",
  tags: ["React", "Node.js", "PostgreSQL"],
  liveUrl: "https://my-project.example.com",
  repoUrl: "https://github.com/username/my-project",
}
```

---

## 🌐 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/bhargavi1100/Portfolio)

### GitHub Pages

This repository includes a GitHub Actions workflow for automatic deployment to GitHub Pages.

1. Go to your repository **Settings → Pages**
2. Set **Source** to **GitHub Actions**
3. Push to the `main` branch — the workflow at `.github/workflows/deploy.yml` will build and deploy automatically

You can also trigger a manual deployment from the **Actions** tab using **workflow_dispatch**.

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 🙏 Credits

- **Original portfolio** by [Bhargavi K Pai](https://github.com/bhargavi1100)
- **Transformed** from a basic HTML/CSS/Bootstrap site into a modern Next.js 16 portfolio with the help of [GitHub Copilot](https://github.com/features/copilot)
