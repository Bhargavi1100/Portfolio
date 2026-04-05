# 🚀 Bhargavi Portfolio — Professional Copilot Prompts for Complete Transformation

> **User Preference**: After every response, Copilot should offer 2-4 actionable next-step options as a numbered list. This keeps workflow momentum.

## How to Use This Document

Each prompt is designed to be **copy-pasted directly into GitHub Copilot Chat**.
The prompts are structured to:
1. Give Copilot full context about the existing portfolio and the transformation goal
2. Specify the exact tech stack and patterns to follow
3. Define acceptance criteria so the output is production-grade
4. Prevent common mistakes with explicit constraints

### Prompt Structure Convention
```
[CONTEXT] → What the project is and what's already built
[TASK] → What exactly to build now
[CONSTRAINTS] → What rules to follow
[OUTPUT] → What files/code to produce
```

---

## 📊 Current Portfolio Analysis

**Owner:** Bhargavi K Pai — Aspiring Data Analyst
**Current Tech:** HTML, CSS (vanilla), Bootstrap 5, vanilla JS, Formspree contact form
**Current Sections:** Navbar, Carousel, Home, Skills, Education, Projects, Internships, Certificates, About, Contact, Footer
**Issues Found:**
- No responsive design beyond basic Bootstrap breakpoints
- Inline styles scattered throughout HTML
- No animations or micro-interactions
- Basic black background with rgb(218, 96, 96) accent — not a professional color system
- No dark/light mode toggle
- No SEO optimization or meta tags
- No interactive data visualizations (critical for a data analyst)
- No project case-study detail pages
- No blog/insights section
- Carousel images are generic stock photos
- Contact form uses Formspree with no validation
- No accessibility (ARIA labels, keyboard navigation)
- Certificate links include local `file:///` paths (broken)
- Footer lacks proper social links styling
- No loading animations or skeleton screens
- Back-to-top button logic is the only JS

**Transformation Goal:** Modern, animated, responsive professional portfolio using Next.js 15 + TypeScript + Tailwind CSS + Framer Motion — showcasing data analytics skills with interactive charts, scroll animations, bento grid layouts, and dark mode.

---

## 📋 Prompt Index

| Issue | Title | Phase |
|-------|-------|-------|
| **Phase 0: Foundation** | | |
| PF-001 | Initialize Next.js Project & Configure | Phase 0 |
| PF-002 | Design System & Professional Theme | Phase 0 |
| PF-003 | TypeScript Types & Portfolio Data Models | Phase 0 |
| PF-004 | Portfolio Content Data Files | Phase 0 |
| **Phase 1: Core Layout & Navigation** | | |
| PF-010 | Responsive Navbar with Scroll Effects | Phase 1 |
| PF-011 | Hero Section with Animated Introduction | Phase 1 |
| PF-012 | About Me Section with Professional Bio | Phase 1 |
| **Phase 2: Content Sections** | | |
| PF-020 | Skills Section with Animated Competency Visualization | Phase 2 |
| PF-021 | Projects Section with Interactive Case Study Cards | Phase 2 |
| PF-022 | Education & Certifications Timeline | Phase 2 |
| PF-023 | Experience & Internships Section | Phase 2 |
| PF-024 | Achievements & Stats Counter Section | Phase 2 |
| **Phase 3: Interactive Features** | | |
| PF-030 | Contact Form with Validation & API Route | Phase 3 |
| PF-031 | Scroll Animations & Micro-interactions (Global) | Phase 3 |
| PF-032 | Dark Mode Toggle & Theme Persistence | Phase 3 |
| PF-033 | Interactive Data Visualization Showcase | Phase 3 |
| PF-034 | Blog / Insights Section (Optional) | Phase 3 |
| **Phase 4: Polish & Deploy** | | |
| PF-040 | SEO, Open Graph & Structured Data | Phase 4 |
| PF-041 | Accessibility Audit & Keyboard Navigation | Phase 4 |
| PF-042 | Performance Optimization & Lighthouse 90+ | Phase 4 |
| PF-043 | Deploy to Vercel with Custom Domain | Phase 4 |
| PF-044 | README, Documentation & Final QA | Phase 4 |

---

# ═══════════════════════════════════════════════════════
# PHASE 0: FOUNDATION PROMPTS
# ═══════════════════════════════════════════════════════

## PF-001 | Initialize Next.js Project & Configure

```
[CONTEXT]
I'm transforming Bhargavi K Pai's portfolio from a basic HTML/CSS/Bootstrap site into a
modern professional portfolio. Bhargavi is an aspiring data analyst with skills in SQL,
Python, Power BI, Excel, and web development (HTML, CSS, JS, Bootstrap).

The existing portfolio is at ./Portfolio/ with: index.html, style.css, script.js, assets/.
We will build the new portfolio from scratch as a Next.js project INSIDE the same repo,
replacing the old files.

Target tech stack:
- Next.js 15 (App Router, TypeScript, static export for hosting flexibility)
- TypeScript strict mode
- Tailwind CSS v4 (utility-first styling)
- Framer Motion (scroll animations, page transitions, micro-interactions)
- Recharts or Chart.js (interactive data visualizations for projects)
- Lucide React (icon library)
- React Hook Form + Zod (contact form validation)
- next-themes (dark/light mode)

[TASK]
Initialize the Next.js project and set up the complete development environment:

1. Create Next.js app with `npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"`
   (run in the Portfolio directory after backing up existing files to ./old/)

2. Install additional dependencies:
   - framer-motion (animations)
   - lucide-react (icons)
   - react-hook-form + @hookform/resolvers + zod (form validation)
   - next-themes (theme switching)
   - recharts (data visualizations)
   - clsx + tailwind-merge (class utilities)
   - @vercel/analytics (optional analytics)
   - sharp (image optimization)

3. Configure tsconfig.json:
   - strict: true
   - Path aliases: @/* → src/*
   - noImplicitAny: true

4. Configure tailwind.config.ts with professional color palette:
   - primary: '#2563EB' (royal blue — professional, trustworthy)
   - primary-light: '#3B82F6'
   - primary-dark: '#1D4ED8'
   - secondary: '#8B5CF6' (violet — creativity)
   - accent: '#F59E0B' (amber — warmth, highlights)
   - surface: '#F8FAFC' (cool white)
   - surface-dark: '#0F172A' (deep slate)
   - foreground: '#0F172A' (dark text)
   - foreground-dark: '#F1F5F9' (light text for dark mode)
   - muted: '#64748B' (slate gray)
   - success: '#10B981' (emerald)
   - error: '#EF4444' (red)
   - card: '#FFFFFF'
   - card-dark: '#1E293B'
   - border: '#E2E8F0'
   - border-dark: '#334155'
   Custom font families: Inter (body), Plus Jakarta Sans (headings), JetBrains Mono (code)

5. Set up folder structure:
   src/app/           — Next.js App Router pages
   src/components/    — Reusable UI components
   src/components/ui/ — Base design system components
   src/components/sections/ — Portfolio section components
   src/lib/           — Utilities (cn helper, constants, theme)
   src/data/          — Portfolio content data (JSON/TS files)
   src/types/         — TypeScript type definitions
   src/hooks/         — Custom React hooks
   public/images/     — Optimized portfolio images
   public/fonts/      — Custom web fonts
   public/files/      — Downloadable files (resume PDF)

6. Create src/lib/cn.ts utility:
   import { clsx, type ClassValue } from 'clsx';
   import { twMerge } from 'tailwind-merge';
   export function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)); }

7. Create .env.example:
   NEXT_PUBLIC_FORMSPREE_ID=your_formspree_id
   NEXT_PUBLIC_SITE_URL=https://bhargavikpai.dev

8. Migrate assets from old ./assets/ to public/images/ (profile photo, skill icons)

9. Update .gitignore for Next.js (.next, node_modules, .env.local, out/)

[CONSTRAINTS]
- Use Next.js 15 App Router (NOT Pages Router)
- TypeScript strict mode — no `any` types anywhere
- ALL styling via Tailwind CSS className — NO inline styles, NO CSS modules for layout
- Use `next/image` for all images (automatic optimization)
- Use `next/font` for font loading (no external font CDN calls)
- Static export compatible (output: 'export' in next.config.js for GitHub Pages/Netlify)
- Mobile-first responsive design

[OUTPUT]
- Complete Next.js project in Portfolio directory
- package.json with all dependencies
- tsconfig.json with strict config
- tailwind.config.ts with professional palette
- next.config.js with static export config
- src/lib/cn.ts utility
- .env.example
- .gitignore
- Empty folder structure with placeholder files
- Old files backed up to ./old/
```

---

## PF-002 | Design System & Professional Theme

```
[CONTEXT]
Building Bhargavi K Pai's professional data analyst portfolio with Next.js 15 + TypeScript
+ Tailwind CSS + Framer Motion. Project is initialized with the professional color palette.

The design must reflect:
- Clean, modern minimalism with generous whitespace
- Professional aesthetic suitable for a data analyst seeking roles at top companies
- Subtle animations that demonstrate technical sophistication without being distracting
- Full dark/light mode support
- Bento grid layout capability for skills and project showcase
- Mobile-first responsive design at all breakpoints

[TASK]
Create the complete design system in src/components/ui/ and src/lib/:

1. src/lib/theme.ts — Theme constants:
   - Color tokens for light + dark mode
   - Typography scale: xs(12px), sm(14px), base(16px), lg(18px), xl(20px),
     2xl(24px), 3xl(30px), 4xl(36px), 5xl(48px), hero(64px)
   - Spacing scale following 4px grid
   - Border radius: sm(6px), md(8px), lg(12px), xl(16px), 2xl(24px), full
   - Shadow definitions: sm, md, lg, xl, glow (for hover states)
   - Breakpoints: sm(640), md(768), lg(1024), xl(1280), 2xl(1536)
   - Animation duration constants: fast(150ms), normal(300ms), slow(500ms), slower(700ms)
   - Gradient presets: primary-gradient, accent-gradient, surface-gradient

2. src/components/ui/Button.tsx:
   - Variants: primary, secondary, outline, ghost, link
   - Sizes: sm, md, lg
   - Loading state with animated spinner
   - Disabled state with reduced opacity
   - Icon support (left/right via children composition)
   - Hover animations: subtle scale + shadow lift (Framer Motion)
   - className prop for extension
   - Full accessibility (aria-label, focus ring, keyboard support)

3. src/components/ui/Card.tsx:
   - Variants: default, elevated, outlined, glass (frosted glass effect)
   - Hover effect: subtle lift + shadow expand (Framer Motion)
   - Optional gradient border on hover
   - Padding options: none, sm, md, lg
   - className prop

4. src/components/ui/Badge.tsx:
   - Variants: default, primary, secondary, success, warning, outline
   - Sizes: sm, md
   - Dot variant (status indicator)
   - Pill shape

5. src/components/ui/SectionHeading.tsx:
   - Animated underline/accent decoration
   - Title + optional subtitle
   - Text alignment options
   - Entrance animation (fade up) via Framer Motion
   - Section anchor ID for navigation

6. src/components/ui/Container.tsx:
   - Max-width container with responsive padding
   - Sizes: sm(640), md(768), lg(1024), xl(1280), 2xl(1400)
   - Centered by default

7. src/components/ui/GradientText.tsx:
   - Animated gradient text effect
   - Configurable gradient direction and colors
   - Used for hero heading and section accents

8. src/components/ui/AnimatedCounter.tsx:
   - Number counter that animates from 0 to target value
   - Triggers on scroll into view (Intersection Observer)
   - Configurable duration, prefix, suffix (e.g., "9.3" CGPA, "85%" accuracy)
   - Easing function support

9. src/components/ui/SkillBar.tsx:
   - Animated progress bar for skill proficiency
   - Label + percentage display
   - Gradient fill with configurable colors
   - Triggers animation on scroll into view
   - Staggered animation when multiple bars

10. src/components/ui/Timeline.tsx:
    - Vertical timeline component for education/experience
    - Animated line that draws on scroll
    - Alternating left/right items on desktop, all-left on mobile
    - Date badges, title, description, icon support

11. src/components/ui/Tooltip.tsx:
    - Hover tooltip for icons and abbreviated text
    - Positions: top, bottom, left, right
    - Arrow indicator
    - Animated entrance

12. src/components/ui/BackToTop.tsx:
    - Floating button that appears after scrolling past hero section
    - Smooth scroll to top
    - Animated entrance/exit (fade + slide)
    - Progress ring showing scroll progress

13. src/components/ui/index.ts — barrel export all components

[CONSTRAINTS]
- ALL styling via Tailwind CSS className — no StyleSheet or inline styles
- Every component must accept className prop for customization
- Use cn() utility for class merging
- Support dark mode via Tailwind dark: prefix and next-themes
- All interactive elements need focus-visible ring for keyboard navigation
- Framer Motion for all animations — no CSS @keyframes
- Export TypeScript interfaces for all component props
- Components must be server-component compatible where possible (mark 'use client' only when needed)
- Follow React 19 patterns (no forwardRef needed)

[OUTPUT]
- src/lib/theme.ts
- src/lib/cn.ts (if not already created)
- src/components/ui/ — all 13 components + index.ts
- All components fully typed with TypeScript interfaces
```

---

## PF-003 | TypeScript Types & Portfolio Data Models

```
[CONTEXT]
Building Bhargavi K Pai's professional data analyst portfolio with Next.js 15 + TypeScript.
The portfolio will showcase projects, skills, education, certifications, experience, and
contact information. All content will be data-driven (stored in TypeScript data files)
so the portfolio is easy to update without touching component code.

[TASK]
Create comprehensive TypeScript types for all portfolio content:

1. src/types/portfolio.ts:
   - PersonalInfo interface: name, title, tagline, bio, email, phone, location (city,
     country), profileImage, resumeUrl, socialLinks (SocialLink[])
   - SocialLink interface: platform ('github'|'linkedin'|'twitter'|'email'|'website'),
     url, label
   - NavItem interface: label, href, icon (optional)

2. src/types/skill.ts:
   - SkillCategory: 'analytics' | 'programming' | 'visualization' | 'web' | 'tools' | 'soft'
   - Skill interface: name, icon (string — lucide icon name or image path),
     proficiency (0-100), category, description (optional), yearsOfExperience (optional)
   - SkillGroup interface: category, title, description, skills (Skill[])

3. src/types/project.ts:
   - ProjectStatus: 'completed' | 'in-progress' | 'planned'
   - Project interface: id (slug), title, description, longDescription,
     techStack (string[]), category ('data-analysis'|'web-development'|'visualization'|'machine-learning'),
     thumbnailUrl, images (string[]), liveUrl (optional), githubUrl, highlights (string[]),
     metrics (ProjectMetric[]), startDate, endDate, status, featured (boolean)
   - ProjectMetric interface: label, value, suffix (optional — '%', 'x', '+')
     Example: { label: "Revenue Boost", value: 12, suffix: "%" }

4. src/types/education.ts:
   - Education interface: id, institution, degree, field, startYear, endYear,
     grade (string — "CGPA: 9.3"), description, achievements (string[]),
     location (optional)
   - Certification interface: id, title, issuer, issueDate, credentialUrl,
     skills (string[]), description (optional)
   - Internship interface: id, company, role, startDate, endDate,
     description, responsibilities (string[]), skills (string[]),
     certificateUrl (optional)

5. src/types/common.ts:
   - SectionId: 'home' | 'about' | 'skills' | 'projects' | 'education' |
     'experience' | 'contact'
   - ThemeMode: 'light' | 'dark' | 'system'
   - AnimationVariant interface: initial, animate, exit (Framer Motion)

6. src/types/index.ts — barrel export all types

[CONSTRAINTS]
- NO `any` type anywhere
- Use `as const` for literal type assertions
- All optional fields explicitly marked with ?
- Export all types from barrel file
- Types should be flexible enough to add new projects/skills without changing types

[OUTPUT]
- src/types/portfolio.ts
- src/types/skill.ts
- src/types/project.ts
- src/types/education.ts
- src/types/common.ts
- src/types/index.ts
```

---

## PF-004 | Portfolio Content Data Files

```
[CONTEXT]
Building Bhargavi K Pai's professional data analyst portfolio. All types are defined in
src/types/. Now we need to populate the actual content data from the existing portfolio:

**Bhargavi's Profile:**
- Name: Bhargavi K Pai
- Title: Aspiring Data Analyst
- Skills: SQL, Python, Power BI, Excel, Regression Analysis, Data Visualization,
  HTML, CSS, JavaScript, Bootstrap, PowerPoint
- Education: BCA from Kuvempu University (2021-2024, CGPA 9.3, Department Topper),
  Class 12 Science from Govt PU College Thirthahalli (2018-2020, 77.33%)
- Projects: E-Commerce Website, Retail Sales Analysis, HR Analytics Dashboard
- Internships: Accenture Data Analytics Simulation (Forage), Web Dev Intern (Internship Studio)
- Certs: MySQL Basics, Data Analysis Excel, SEO Strategies, Search Engine Marketing (all Great Learning)
- Social: GitHub (Bhargavi1100), LinkedIn (bhargavi-k-pai-b44423287)
- Contact: Formspree form ID mnnqnpqp

[TASK]
Create data files with ALL content from the existing portfolio, enhanced with professional
phrasing and additional detail:

1. src/data/personal.ts:
   - Export personalInfo object with all personal details
   - Rewrite bio to be more professional and impactful:
     "Data Analyst with a strong foundation in statistical analysis, data visualization,
     and business intelligence. BCA graduate (CGPA 9.3, Department Topper) from Kuvempu
     University with hands-on experience in Python, SQL, and Power BI. Passionate about
     transforming raw data into actionable insights that drive strategic business decisions."
   - Navigation items for all sections
   - Social links array

2. src/data/skills.ts:
   - Export skillGroups array organized by category
   - Analytics: Data Visualization (90%), Power BI (85%), Excel (90%),
     Regression Analysis (75%), Statistical Analysis (80%)
   - Programming: Python (80%), SQL (85%), JavaScript (70%)
   - Web Development: HTML (85%), CSS (80%), Bootstrap (75%)
   - Tools: PowerPoint (85%), Git/GitHub (70%), Kaggle (75%)
   - Add brief descriptions for each skill

3. src/data/projects.ts:
   - Export projects array with enhanced descriptions
   - For each project, extract and enhance:
     a) E-Commerce Website: HTML/CSS/JS/Bootstrap, responsive design, product catalog,
        shopping cart. Featured: false.
     b) Retail Sales Analysis: Python/Power BI/Excel/Kaggle. K-Means clustering,
        revenue analysis, Power BI dashboard. Metrics: [revenue boost 12%, product segments identified].
        Featured: true.
     c) HR Analytics: Python/Power BI/Excel. Logistic regression, decision tree,
        85% accuracy, attrition prediction. Metrics: [accuracy 85%, turnover reduction 10%].
        Featured: true.
   - Add highlight bullet points for each project

4. src/data/education.ts:
   - Export education, certifications, internships arrays
   - Enhance achievement descriptions
   - Fix broken certificate URLs (remove file:/// paths)

5. src/data/index.ts — barrel export

[CONSTRAINTS]
- ALL content must be accurate to Bhargavi's actual information
- Enhance phrasing to be professional but NOT fabricate achievements
- All URLs must be valid (no file:/// paths)
- Images should reference public/images/ paths
- Data should be easy to update (just edit the data files, components auto-update)
- Use `as const satisfies Type` pattern for type safety with literal inference

[OUTPUT]
- src/data/personal.ts
- src/data/skills.ts
- src/data/projects.ts
- src/data/education.ts
- src/data/index.ts
```

---

# ═══════════════════════════════════════════════════════
# PHASE 1: CORE LAYOUT & NAVIGATION
# ═══════════════════════════════════════════════════════

## PF-010 | Responsive Navbar with Scroll Effects

```
[CONTEXT]
Building Bhargavi K Pai's professional portfolio with Next.js 15 + TypeScript + Tailwind +
Framer Motion. Design system components are in src/components/ui/. Portfolio data is in
src/data/. The current old navbar is a basic Bootstrap navbar with no scroll effects.

[TASK]
Create a professional, animated responsive navbar:

1. src/components/sections/Navbar.tsx:
   - Fixed position at top (sticky)
   - Transparent background on hero, transitions to solid bg on scroll (using scroll listener)
   - Blur backdrop effect when scrolled (backdrop-blur-md)
   - Logo/name on left side: "Bhargavi K Pai" — gradient text on hover
   - Navigation links on right: Home, About, Skills, Projects, Education, Experience, Contact
   - Active section highlighting (detect which section is in viewport using Intersection Observer)
   - Smooth scroll to section on click
   - Mobile hamburger menu:
     - Animated hamburger icon → X transition (Framer Motion)
     - Full-screen overlay menu with staggered link animations
     - Links fade in one by one with slide effect
     - Close on link click or backdrop click
   - Theme toggle button (sun/moon icon) integrated in navbar
   - Subtle bottom border appears when scrolled
   - Download CV button as a CTA (outlined button style)

2. src/hooks/useActiveSection.ts:
   - Custom hook that tracks which section is currently in viewport
   - Uses Intersection Observer API
   - Returns activeSection: SectionId
   - Configurable threshold and rootMargin

3. src/hooks/useScrollPosition.ts:
   - Custom hook that tracks scroll position
   - Returns: scrollY, scrollDirection ('up'|'down'), isScrolled (boolean — past hero)
   - Throttled for performance (requestAnimationFrame)

[CONSTRAINTS]
- 'use client' directive (requires scroll listeners and state)
- Navbar height must be consistent (h-16 on mobile, h-20 on desktop)
- All transitions must use Framer Motion (not CSS transitions)
- Must not cause layout shift when switching transparent → solid background
- Mobile menu must trap focus for accessibility
- Links must use smooth scroll behavior, NOT Next.js router navigation
- Z-index: 50 (above all content)
- Performance: throttle scroll events, use will-change for animated properties

[OUTPUT]
- src/components/sections/Navbar.tsx
- src/hooks/useActiveSection.ts
- src/hooks/useScrollPosition.ts
```

---

## PF-011 | Hero Section with Animated Introduction

```
[CONTEXT]
Building Bhargavi K Pai's professional portfolio. The navbar is complete. The current
old hero is just a Bootstrap carousel with stock images + a centered profile photo with
"Hello! I'm Bhargavi K Pai" text and two buttons.

The new hero needs to make a powerful first impression — this is the most critical section.

[TASK]
Create a stunning animated hero section:

1. src/components/sections/Hero.tsx:
   - Full viewport height (min-h-screen) with responsive padding below navbar
   - Two-column layout on desktop, stacked on mobile:

   LEFT COLUMN (Text Content):
   - Animated greeting: "Hello, I'm" (fade in with typewriter effect)
   - Name: "Bhargavi K Pai" (large, bold, gradient text animation — blue to violet)
   - Animated role text with typewriter/rotating effect cycling through:
     "Data Analyst" → "BI Developer" → "Problem Solver" → "Insight Explorer"
   - Professional tagline paragraph (2-3 lines, fade in with delay)
   - CTA buttons row:
     a) "Download CV" — primary button with download icon, links to resume PDF
     b) "View Projects" — outline button, smooth scrolls to projects section
     c) "Contact Me" — ghost button, smooth scrolls to contact section
   - Social links row: GitHub, LinkedIn icons with hover animations (scale + color)
   - Stats mini-row below buttons: "9.3 CGPA" · "3+ Projects" · "4 Certifications"
     (AnimatedCounter components)

   RIGHT COLUMN (Visual):
   - Professional profile photo in a styled container:
     - Rounded with gradient border ring (animated gradient rotation)
     - Floating animation (subtle up-down movement)
     - Decorative dots/grid pattern behind the image
     - Glow effect in primary color on dark mode
   - Optional: Subtle particle or geometric pattern background using CSS

   BACKGROUND:
   - Gradient mesh or subtle animated gradient
   - Grid pattern overlay (very subtle, 5% opacity)
   - Smooth transition to next section

2. src/components/ui/TypewriterText.tsx:
   - Animated text that types out and deletes, cycling through an array of strings
   - Configurable speed, delay between words, cursor style
   - Cursor blink animation
   - Framer Motion based

3. src/components/ui/FloatingImage.tsx:
   - Image wrapper with floating animation (translateY oscillation)
   - Gradient border ring
   - Optional decorative elements (dots, circles)

[CONSTRAINTS]
- Hero must load fast — no heavy libraries or large animations on initial paint
- Profile image via next/image with priority loading
- Animations should use Framer Motion with staggered delays (orchestrated entrance)
- The typing animation must NOT cause layout shifts (use fixed height container)
- Social links must open in new tab with rel="noopener noreferrer"
- Resume PDF must trigger download, not navigate
- Mobile: single column, smaller image, adjusted font sizes
- Entrance animations should only play once (not on every scroll)
- Background effects must not affect text readability

[OUTPUT]
- src/components/sections/Hero.tsx
- src/components/ui/TypewriterText.tsx
- src/components/ui/FloatingImage.tsx
```

---

## PF-012 | About Me Section with Professional Bio

```
[CONTEXT]
Building Bhargavi K Pai's portfolio. Hero section is complete. The old About section is
just a paragraph of text with no visual design. The new version needs to be engaging
and visually rich while telling Bhargavi's professional story.

[TASK]
Create the About Me section:

1. src/components/sections/About.tsx:
   - Section heading with animated underline decoration (SectionHeading component)
   - Two-column layout:

   LEFT COLUMN:
   - Professional photo (different from hero, or same with different styling)
   - Photo in rounded rectangle with subtle border
   - Decorative accent element (colored bar or pattern)

   RIGHT COLUMN:
   - Professional bio text (3-4 paragraphs):
     Para 1: "I'm a passionate data analyst with expertise in transforming complex
     datasets into clear, actionable insights..."
     Para 2: Technical background highlights (BCA, department topper, tools)
     Para 3: Professional interests and career goals
   - Key highlights as icon badges:
     📊 "Data-Driven Decision Making"
     🎯 "Pattern Recognition & Insights"
     📈 "Interactive Dashboard Design"
     🔍 "Statistical Analysis & ML"
   - "Fun facts" or quick info cards:
     🎓 Department Topper
     📊 3+ Analytics Projects
     🏆 9.3 CGPA
     💡 Always Learning

   - "Download Full Resume" button at bottom

   ANIMATIONS:
   - Entire section fades in and slides up on scroll
   - Left and right columns animate in from opposite sides
   - Highlight badges stagger in with slight delay between each
   - Stats cards count up when in view

[CONSTRAINTS]
- Scroll-triggered animations (only animate when section enters viewport)
- Use Framer Motion `useInView` hook for triggering
- Image must use next/image with proper sizing
- Text must be readable — minimum font size 16px for body
- Content sourced from src/data/personal.ts — NOT hardcoded in component
- Dark mode must have proper contrast ratios (WCAG AA minimum)

[OUTPUT]
- src/components/sections/About.tsx
```

---

# ═══════════════════════════════════════════════════════
# PHASE 2: CONTENT SECTIONS
# ═══════════════════════════════════════════════════════

## PF-020 | Skills Section with Animated Competency Visualization

```
[CONTEXT]
Building Bhargavi K Pai's professional data analyst portfolio. The skills section is
critical — it's the first thing recruiters look at. The old version just shows static
icons in a row. The new version needs to showcase skills dynamically with animations.

Bhargavi's skill categories:
- Analytics: Data Visualization, Power BI, Excel, Regression Analysis, Statistical Analysis
- Programming: Python, SQL, JavaScript
- Web Development: HTML, CSS, Bootstrap
- Tools: PowerPoint, Git/GitHub, Kaggle

[TASK]
Create an impressive, animated skills section:

1. src/components/sections/Skills.tsx:
   - SectionHeading: "Technical Skills" with subtitle "Tools & technologies I work with"
   - Category filter tabs at top:
     "All" | "Analytics" | "Programming" | "Web" | "Tools"
     - Animated active tab indicator (sliding underline via Framer Motion layoutId)
     - Clicking a tab filters displayed skills with exit/enter animations

   - BENTO GRID LAYOUT (primary display):
     - Skills displayed as a responsive bento grid (CSS Grid)
     - Each skill is a Card component with:
       a) Skill icon (from public/images/skills/ or Lucide icon)
       b) Skill name
       c) Animated progress bar showing proficiency %
       d) Brief description on hover (tooltip or card expansion)
     - Featured/primary skills (Power BI, Python, SQL) get larger grid cells
     - Cards have hover effect: slight lift + border glow in primary color
     - Staggered entrance animation (cards fade in one by one)

   - ALTERNATIVE VIEW TOGGLE (list vs grid):
     - Toggle button to switch between bento grid and detailed list view
     - List view shows: Skill name | Progress bar | Percentage | Description
     - Smooth transition between views (AnimatePresence)

   - SKILL PROFICIENCY VISUALIZATION:
     - For each skill category, show a radar/spider chart OR circular progress rings
     - Use Recharts RadarChart for category-level overview
     - Interactive: hover over a point to see the skill name and proficiency

   ANIMATIONS:
   - Progress bars animate from 0 to target % when scrolled into view
   - Cards enter with staggered fade-up animation
   - Tab switching uses AnimatePresence for smooth content transitions
   - Radar chart data points animate in

[CONSTRAINTS]
- Skills data from src/data/skills.ts — NOT hardcoded
- Responsive: 4 columns on xl, 3 on lg, 2 on md, 1 on sm
- All skill icons must have alt text for accessibility
- Tab keyboard navigation support (arrow keys)
- Animations must only trigger once (not replay on every scroll)
- Recharts responsive container for chart responsiveness
- Category filter must use URL-friendly slugs (not display text)

[OUTPUT]
- src/components/sections/Skills.tsx
- src/components/skills/SkillCard.tsx
- src/components/skills/SkillRadarChart.tsx
- src/components/skills/CategoryTabs.tsx
```

---

## PF-021 | Projects Section with Interactive Case Study Cards

```
[CONTEXT]
Building Bhargavi K Pai's data analyst portfolio. This is the MOST IMPORTANT section — it
demonstrates actual work and impact. The old version lists projects as plain text with
bullet points. The new version must showcase projects as visual, interactive case studies.

Projects:
1. Retail Sales Analysis (Python, Power BI, Excel, Kaggle) — K-Means clustering,
   revenue analysis, 12% revenue boost potential. FEATURED.
2. HR Analytics (Python, Power BI, Excel) — Logistic regression, decision tree,
   85% accuracy, 10% turnover reduction. FEATURED.
3. E-Commerce Website (HTML, CSS, JS, Bootstrap) — Responsive shopping experience.

[TASK]
Create a stunning projects showcase section:

1. src/components/sections/Projects.tsx:
   - SectionHeading: "Featured Projects" with subtitle
     "Real-world data analysis and development projects"
   - Category filter: "All" | "Data Analysis" | "Web Development" | "Visualization"
   - Featured projects displayed as large hero cards (2-column on desktop)
   - Non-featured projects as smaller cards below

2. src/components/projects/ProjectCard.tsx:
   - Two variants: "featured" (large) and "default" (standard)

   FEATURED CARD (large):
   - Full-width or half-width card with gradient background
   - Left side: Project thumbnail/screenshot placeholder (colored gradient if no image)
   - Right side:
     a) Project title (large, bold)
     b) Tech stack badges (colored pills)
     c) Brief description (2-3 lines)
     d) Key metrics row with AnimatedCounter:
        "12% Revenue Boost" · "7 Datasets Analyzed" · "85% Model Accuracy"
     e) Highlight bullet points (top 2-3 achievements)
     f) Action buttons: "View Details" (opens modal or expands) · "GitHub" (external link)
   - Hover: entire card lifts, gradient border appears, subtle glow

   DEFAULT CARD:
   - Compact card with tech badges, title, brief description
   - Hover: expand with more details or show overlay
   - GitHub link button

3. src/components/projects/ProjectModal.tsx (optional — for detailed view):
   - Full case study view in a modal overlay
   - Sections: Overview, Challenge, Approach, Key Findings, Impact, Tech Stack
   - Image gallery if available
   - Animated entrance (scale up from card position)

4. src/components/projects/TechBadge.tsx:
   - Colored badge for each technology
   - Predefined color map: Python→blue, SQL→orange, PowerBI→yellow, etc.
   - Hover tooltip with technology category

   ANIMATIONS:
   - Cards stagger in from bottom on scroll
   - Category filter uses AnimatePresence for smooth transitions
   - Metrics counter triggers on card visibility
   - Cards have magnetic hover effect (follow cursor slightly)

[CONSTRAINTS]
- Project data from src/data/projects.ts — NOT hardcoded
- Featured projects MUST be visually distinct from non-featured
- GitHub links open in new tab
- Cards must be keyboard navigable and focusable
- Responsive: featured cards stack on mobile
- No project images? Use gradient placeholders with tech stack icon overlays
- Metrics must be real numbers from the actual projects

[OUTPUT]
- src/components/sections/Projects.tsx
- src/components/projects/ProjectCard.tsx
- src/components/projects/ProjectModal.tsx
- src/components/projects/TechBadge.tsx
```

---

## PF-022 | Education & Certifications Timeline

```
[CONTEXT]
Building Bhargavi K Pai's portfolio. Education is a strong point (Department Topper, 9.3
CGPA). The old version is plain text. The new version should make education and
certifications visually impressive with a timeline format.

Education:
- BCA, Kuvempu University (2021-2024, CGPA 9.3, Department Topper)
- Class 12 Science, Govt PU College Thirthahalli (2018-2020, 77.33%)

Certifications:
- MySQL Basics (Great Learning, July 2024)
- Data Analysis Using Excel (Great Learning, July 2024)
- SEO Strategies (Great Learning, Nov 2024)
- Search Engine Marketing (Great Learning, Nov 2024)

[TASK]
Create education and certification sections:

1. src/components/sections/Education.tsx:
   - SectionHeading: "Education & Certifications"
   - Subtitle: "My academic journey and professional development"

   EDUCATION TIMELINE:
   - Vertical Timeline component (from design system)
   - Each education entry as a timeline node:
     a) Year badge on the timeline line
     b) Institution name (bold)
     c) Degree and field
     d) Grade/CGPA with highlight styling for high scores
     e) Achievement badges: "🏆 Department Topper" displayed prominently
     f) Description text
   - Timeline line animates (draws) on scroll

   CERTIFICATIONS GRID:
   - Below the timeline, show certifications as a responsive card grid
   - Each certification card:
     a) Issuer logo/icon (Great Learning logo placeholder)
     b) Certificate title
     c) Issue date
     d) Skills covered as small badges
     e) "View Certificate" button linking to credential URL
   - Cards have subtle hover lift effect
   - Staggered entrance animation

   ANIMATIONS:
   - Timeline draws its line progressively as user scrolls
   - Timeline nodes fade in alternately from left/right
   - Certification cards stagger in from bottom
   - CGPA displays with AnimatedCounter (0 → 9.3)

[CONSTRAINTS]
- Data from src/data/education.ts — NOT hardcoded
- All certificate URLs must be valid external links (fix the broken file:/// paths)
- Timeline must be responsive (single column on mobile, alternating on desktop)
- Proper semantic HTML: use <time> elements for dates
- Grade highlights should use success color for high grades (>8.0 CGPA, >75%)

[OUTPUT]
- src/components/sections/Education.tsx
- src/components/education/TimelineItem.tsx
- src/components/education/CertificationCard.tsx
```

---

## PF-023 | Experience & Internships Section

```
[CONTEXT]
Building Bhargavi K Pai's portfolio. Experience section covers internships and job
simulations — important for demonstrating practical application of skills.

Internships:
1. Accenture North America - Data Analytics and Visualization Job Simulation (Forage, Aug 2024)
   - Advised hypothetical social media client
   - Cleaned and analyzed 7 datasets
   - Created PowerPoint deck and video presentation
2. Web Development Intern — Internship Studio (Feb 2024)
   - Developed e-commerce platform features
   - Enhanced responsiveness and UX
   - Version control experience

[TASK]
Create the experience section:

1. src/components/sections/Experience.tsx:
   - SectionHeading: "Professional Experience"
   - Subtitle: "Internships and industry simulations that shaped my skills"

   - Experience cards displayed as expandable accordion items OR timeline format:
     Each item shows:
     a) Company logo placeholder / colored circle with initials
     b) Company name and role title
     c) Duration (formatted: "Aug 2024" or "Feb 2024")
     d) Location or type badge: "Remote" / "Virtual Simulation" / "On-site"
     e) Collapsible description with bullet points:
        - Each bullet has a small icon or check mark
        - Responsibilities and achievements listed clearly
     f) Skills used as tech badges at bottom
     g) "View Certificate" button if certificate URL exists

   - Section also includes a "What I Learned" summary card:
     Key takeaways icons: Data Storytelling, Client Communication, Team Collaboration, Technical Analysis

   ANIMATIONS:
   - Cards slide in from left on scroll
   - Expand/collapse with smooth height animation (Framer Motion layout)
   - Skill badges stagger in when card is expanded

[CONSTRAINTS]
- Data from src/data/education.ts (internships array) — NOT hardcoded
- Expandable sections must be keyboard accessible (Enter/Space to toggle)
- Proper ARIA attributes: aria-expanded, aria-controls
- Mobile: full-width cards, no side margins
- Badge colors should match the technology color scheme from TechBadge

[OUTPUT]
- src/components/sections/Experience.tsx
- src/components/experience/ExperienceCard.tsx
```

---

## PF-024 | Achievements & Stats Counter Section

```
[CONTEXT]
Building Bhargavi K Pai's portfolio. A visual "stats bar" section creates impact between
other content sections. It provides quick, scannable proof of competence.

Key stats to highlight:
- 9.3 CGPA
- 3+ Projects Completed
- 4 Certifications
- 85% ML Model Accuracy (from HR Analytics project)
- 7 Datasets Analyzed (from Accenture simulation)
- 12% Revenue Impact (from Retail Sales project)

[TASK]
Create a visually striking stats/achievements section:

1. src/components/sections/Stats.tsx:
   - Full-width section with gradient background (primary → secondary gradient)
   - On dark mode: use darker gradient with glow effects
   - Responsive grid of stat cards (3 columns desktop, 2 tablet, 1 mobile)

   Each stat item:
   - Large animated number (AnimatedCounter component)
   - Label text below the number
   - Subtle icon above the number
   - Optional decorative element (circle ring or dot pattern)

   Stats to show:
   a) 🎓 "9.3" — "CGPA Score" (suffix: "/10")
   b) 📊 "3+" — "Projects Completed"
   c) 📜 "4" — "Certifications Earned"
   d) 🎯 "85%" — "ML Model Accuracy"
   e) 📈 "12%" — "Revenue Impact Delivered"
   f) 🔍 "7" — "Datasets Analyzed"

   ANIMATIONS:
   - Numbers count up from 0 when section scrolls into view
   - Each counter starts with a slight stagger (100ms between each)
   - Background gradient subtly shifts/animates
   - Optional: floating particles or subtle geometric pattern overlay

[CONSTRAINTS]
- Counters must only animate ONCE (use intersection observer with triggerOnce)
- Numbers must be accurate to Bhargavi's actual achievements
- Performance: requestAnimationFrame for counter animations
- Contrast: white text on gradient must pass WCAG AA (test with contrast checker)
- Mobile: 2-column grid, smaller font sizes

[OUTPUT]
- src/components/sections/Stats.tsx
```

---

# ═══════════════════════════════════════════════════════
# PHASE 3: INTERACTIVE FEATURES
# ═══════════════════════════════════════════════════════

## PF-030 | Contact Form with Validation & API Route

```
[CONTEXT]
Building Bhargavi K Pai's portfolio. The old contact form uses Formspree with no validation.
The new form must be professional with proper validation, animated feedback, and
accessible error handling.

[TASK]
Create a professional contact section:

1. src/components/sections/Contact.tsx:
   - SectionHeading: "Get In Touch"
   - Subtitle: "Have a question or want to work together? Let's connect!"

   TWO-COLUMN LAYOUT:
   Left column — Contact info cards:
   a) 📧 Email: (Bhargavi's email or formspree)
   b) 📍 Location: India
   c) 🔗 LinkedIn profile link
   d) 🐙 GitHub profile link
   Each card has hover animation and click-to-copy for email

   Right column — Contact form:
   - Fields: Name (required), Email (required, validated), Subject (optional),
     Message (required, min 10 chars)
   - Use React Hook Form + Zod for validation
   - Real-time validation (show errors on blur, clear on fix)
   - Animated error messages (slide in with Framer Motion)
   - Submit button with loading state (spinner + "Sending...")
   - Success state: Checkmark animation + "Message sent successfully!"
   - Error state: Shake animation + error message
   - Form submits to Formspree (or Next.js API route that emails)

2. src/lib/validations/contact.ts:
   - Zod schema for contact form:
     name: string, min 2, max 100
     email: string, valid email format
     subject: string, optional, max 200
     message: string, min 10, max 2000

3. Optional: src/app/api/contact/route.ts:
   - Next.js API route that proxies to Formspree or sends email
   - Rate limiting consideration (comment for future implementation)

   BOTTOM SECTION:
   - "Or find me on" social links bar with animated icons
   - Map embed or decorative location illustration (optional)

   ANIMATIONS:
   - Section fades in on scroll
   - Contact info cards stagger in from left
   - Form slides in from right
   - Input fields have focus animations (border color + label float)
   - Submit button: pulse on hover, loading spinner on submit

[CONSTRAINTS]
- Form MUST work with static export (Formspree client-side submission as fallback)
- All form fields must have proper labels (not just placeholders)
- Error messages must be announced to screen readers (aria-live="polite")
- Honeypot field for basic spam prevention (hidden field)
- Form must be functional with JavaScript disabled (progressive enhancement)
- Prevent double submission (disable button during submit)
- Rate limit: show "Please wait" if user tries to submit within 30 seconds

[OUTPUT]
- src/components/sections/Contact.tsx
- src/components/contact/ContactForm.tsx
- src/components/contact/ContactInfoCard.tsx
- src/lib/validations/contact.ts
```

---

## PF-031 | Scroll Animations & Micro-interactions (Global)

```
[CONTEXT]
Building Bhargavi K Pai's portfolio. Individual sections have their own animations.
Now we need to add global scroll-triggered animations and micro-interactions that
make the entire portfolio feel polished and cohesive.

[TASK]
Create global animation utilities and wrappers:

1. src/components/animations/ScrollReveal.tsx:
   - Reusable wrapper component that adds scroll-triggered animations to any children
   - Props: direction ('up'|'down'|'left'|'right'|'fade'), delay (number),
     duration (number), threshold (0-1), triggerOnce (boolean)
   - Uses Framer Motion `useInView` + `motion.div`
   - Default: fade up with 0.6s duration, triggerOnce: true

2. src/components/animations/StaggerContainer.tsx:
   - Wrapper that staggers children animations
   - Props: staggerDelay (default 0.1s), direction, containerDelay
   - Each direct child animates in sequence

3. src/components/animations/ParallaxSection.tsx:
   - Subtle parallax effect on scroll for background elements
   - Props: speed (0.1-0.5), direction ('up'|'down')
   - Use Framer Motion useScroll + useTransform

4. src/components/animations/MagneticButton.tsx:
   - Button wrapper that follows cursor slightly on hover (magnetic effect)
   - Props: strength (1-20, default 10), disabled
   - Uses onMouseMove to calculate offset from center

5. src/hooks/useSmoothScroll.ts:
   - Custom hook for smooth scroll-to-section functionality
   - Accounts for fixed navbar height offset
   - Uses native scrollIntoView with smooth behavior

6. src/components/layout/PageTransition.tsx:
   - Animated page wrapper for initial load animation
   - Fade in + slight scale on mount
   - Optional progress bar at top

7. src/components/layout/Footer.tsx:
   - Professional footer with:
     a) Name and tagline
     b) Quick navigation links
     c) Social media links with hover animations
     d) "Made with ❤️ by Bhargavi K Pai" or similar
     e) © 2024 copyright
     f) Back to top button with scroll progress indicator
   - Subtle gradient top border

8. src/app/layout.tsx — Update root layout:
   - Wrap with ThemeProvider (next-themes)
   - Add PageTransition wrapper
   - Global font configuration via next/font
   - Metadata configuration

9. src/app/page.tsx — Assemble all sections:
   - Import and compose all section components in order:
     Navbar → Hero → About → Stats → Skills → Projects → Education →
     Experience → Contact → Footer
   - Each section wrapped in ScrollReveal with appropriate delays
   - Proper section IDs for navigation anchoring

[CONSTRAINTS]
- All animations use Framer Motion — NO CSS @keyframes
- Animations must respect prefers-reduced-motion media query
  (disable animations if user prefers reduced motion)
- Performance: use will-change sparingly, use GPU-accelerated transforms only
- No animation should block user interaction or content visibility
- Page must be usable with all animations disabled
- Footer must not overlap content — proper spacing

[OUTPUT]
- src/components/animations/ScrollReveal.tsx
- src/components/animations/StaggerContainer.tsx
- src/components/animations/ParallaxSection.tsx
- src/components/animations/MagneticButton.tsx
- src/hooks/useSmoothScroll.ts
- src/components/layout/PageTransition.tsx
- src/components/layout/Footer.tsx
- src/app/layout.tsx (updated)
- src/app/page.tsx (complete page assembly)
```

---

## PF-032 | Dark Mode Toggle & Theme Persistence

```
[CONTEXT]
Building Bhargavi K Pai's portfolio with Next.js + Tailwind. The navbar already has a
theme toggle button placeholder. Now we need to implement the full dark/light mode
system with smooth transitions and localStorage persistence.

[TASK]
Implement comprehensive dark mode support:

1. src/components/ui/ThemeToggle.tsx:
   - Animated sun/moon icon toggle button
   - Three states: Light, Dark, System (cycle through on click, or dropdown)
   - Sun icon morphs into moon with Framer Motion (rotation + scale)
   - Tooltip showing current mode
   - Keyboard accessible (Enter/Space to toggle)

2. src/lib/theme-provider.tsx:
   - next-themes ThemeProvider wrapper
   - Attribute: 'class' (for Tailwind dark mode)
   - Default: 'system'
   - Storage: localStorage
   - Prevent flash of wrong theme (suppressHydrationWarning on html)

3. Update ALL section components:
   - Ensure every component uses Tailwind dark: prefix for dark mode colors
   - Key dark mode design decisions:
     a) Background: slate-950 (NOT pure black — too harsh)
     b) Surface/cards: slate-900 with subtle border
     c) Text: slate-100 for primary, slate-400 for muted
     d) Primary color slightly brighter in dark mode for contrast
     e) Gradient adjustments for dark backgrounds
     f) Image brightness slightly reduced in dark mode (filter: brightness(0.9))
     g) Shadows replaced with subtle border + glow effects

4. Dark mode transition: smooth 200ms color transition on toggle
   (add `transition-colors duration-200` to body/html)

[CONSTRAINTS]
- No flash of unstyled content (FOUC) on page load
- Must work with static export (no server-side theme detection)
- Theme preference persists across page reloads
- System preference changes are detected in real-time
- All text must meet WCAG AA contrast ratios in both modes
- Charts/visualizations must be readable in both modes

[OUTPUT]
- src/components/ui/ThemeToggle.tsx
- src/lib/theme-provider.tsx
- Updated section components with dark mode classes
```

---

## PF-033 | Interactive Data Visualization Showcase

```
[CONTEXT]
Building Bhargavi K Pai's DATA ANALYST portfolio. This section is what makes her portfolio
stand out from generic developer portfolios. It demonstrates actual data analysis skills
with interactive visualizations embedded directly in the portfolio.

This is NOT just showing static screenshots — it's live, interactive charts that prove
she can work with data.

[TASK]
Create an interactive data visualization showcase section:

1. src/components/sections/DataShowcase.tsx:
   - SectionHeading: "Data in Action"
   - Subtitle: "Interactive visualizations from my analysis projects"
   - Place this section between Projects and Education

2. src/components/visualizations/SalesChart.tsx:
   - Interactive line/bar chart showing sample retail sales data
   - Data: monthly revenue trend across product categories (sample data inspired by her
     Retail Sales Analysis project)
   - Features:
     a) Recharts BarChart or ComposedChart
     b) Tooltip showing exact values on hover
     c) Legend with toggleable series
     d) Responsive container
     e) Animated bar entrance on scroll
   - Color scheme matches portfolio theme (primary, secondary, accent colors)

3. src/components/visualizations/AttritionPieChart.tsx:
   - Interactive pie/donut chart showing employee attrition breakdown
   - Data: sample HR analytics data (inspired by her HR Analytics project)
   - Features:
     a) Recharts PieChart with animated segments
     b) Active segment expands on hover
     c) Center label showing selected segment info
     d) Custom styled legend

4. src/components/visualizations/SkillsRadar.tsx:
   - Radar chart showing skill proficiencies across categories
   - Data: actual skill proficiency data from src/data/skills.ts
   - Features:
     a) Recharts RadarChart
     b) Animated data points
     c) Hover to highlight category
     d) Responsive

5. src/components/visualizations/MetricsCards.tsx:
   - Row of animated metric cards related to the visualizations:
     "₹12L+ Revenue Tracked" · "1000+ Employee Records" · "85% Prediction Accuracy"
   - Each card has an icon and AnimatedCounter

   OVERALL LAYOUT:
   - 2x2 grid on desktop: SalesChart + AttritionPie on top, SkillsRadar + Metrics on bottom
   - Stacked on mobile
   - Each visualization card has a title, description, and data source note
   - "These are sample datasets inspired by actual project work" disclaimer

[CONSTRAINTS]
- Use Recharts library (already installed)
- All chart data must be sample/illustrative (NOT real client data)
- Charts must be responsive (ResponsiveContainer from Recharts)
- Charts must work in both light and dark mode (adjust colors)
- Chart animations should trigger on scroll into view
- Accessible: charts should have aria-labels and descriptive text alternatives
- Performance: lazy load chart components (React.lazy or dynamic import)
- No real monetary amounts that could be misleading — use relative/percentage metrics

[OUTPUT]
- src/components/sections/DataShowcase.tsx
- src/components/visualizations/SalesChart.tsx
- src/components/visualizations/AttritionPieChart.tsx
- src/components/visualizations/SkillsRadar.tsx
- src/components/visualizations/MetricsCards.tsx
- src/data/sample-charts.ts (sample data for visualizations)
```

---

## PF-034 | Blog / Insights Section (Optional)

```
[CONTEXT]
Building Bhargavi K Pai's portfolio. An optional Blog/Insights section demonstrates
thought leadership and continuous learning — highly valued by recruiters for data
analyst roles. This can start as a placeholder with 2-3 sample cards linking to
Medium articles or GitHub repositories.

[TASK]
Create an optional blog/insights section:

1. src/components/sections/Blog.tsx:
   - SectionHeading: "Insights & Writing"
   - Subtitle: "Sharing what I learn about data and technology"
   - Grid of 3 blog preview cards (placeholder content):
     a) "How K-Means Clustering Reveals Hidden Customer Segments"
        — Tags: Machine Learning, Python — Read time: 5 min
     b) "Building Interactive Dashboards with Power BI: A Beginner's Guide"
        — Tags: Power BI, Data Viz — Read time: 7 min
     c) "SQL Joins Explained: The Complete Visual Guide"
        — Tags: SQL, Database — Read time: 4 min

2. src/components/blog/BlogCard.tsx:
   - Card with gradient top border (category-color coded)
   - Title, excerpt (2 lines), date, read time, tags
   - Hover: card lifts, "Read More →" appears
   - Links to external URL (Medium, GitHub, or #)

   - "View All Posts →" link at bottom of section (links to Medium/blog platform)
   - If no real blog exists yet, cards can link to GitHub project READMEs

[CONSTRAINTS]
- This section is OPTIONAL — include a comment showing how to easily remove it
- Blog data from a data file (src/data/blog.ts)
- Cards must handle missing images gracefully (gradient placeholder)
- External links open in new tab

[OUTPUT]
- src/components/sections/Blog.tsx
- src/components/blog/BlogCard.tsx
- src/data/blog.ts
```

---

# ═══════════════════════════════════════════════════════
# PHASE 4: POLISH & DEPLOY
# ═══════════════════════════════════════════════════════

## PF-040 | SEO, Open Graph & Structured Data

```
[CONTEXT]
Building Bhargavi K Pai's professional portfolio. The portfolio needs to be discoverable
on Google and look professional when shared on LinkedIn/Twitter. The old site had no
SEO whatsoever.

[TASK]
Implement comprehensive SEO:

1. src/app/layout.tsx — Update metadata:
   - title: "Bhargavi K Pai — Data Analyst Portfolio"
   - description: "Data Analyst with expertise in Python, SQL, Power BI, and Excel.
     Explore projects, skills, and insights from a BCA graduate with 9.3 CGPA."
   - keywords: data analyst, portfolio, Python, SQL, Power BI, Bhargavi K Pai
   - Open Graph tags:
     og:title, og:description, og:image (create a 1200x630 OG image), og:url, og:type
   - Twitter card tags: twitter:card (summary_large_image), twitter:title, twitter:description
   - Canonical URL
   - Robots: index, follow
   - Viewport meta (already set by Next.js)
   - Theme-color meta tag (matches primary color)

2. public/robots.txt:
   - Allow all crawlers
   - Sitemap reference

3. public/sitemap.xml:
   - Single page sitemap with lastmod date
   - Priority: 1.0

4. Structured Data (JSON-LD) in layout:
   - Person schema:
     name, jobTitle, description, url, sameAs (GitHub, LinkedIn), alumniOf (Kuvempu University),
     knowsAbout (Python, SQL, Power BI, etc.)
   - WebSite schema
   - BreadcrumbList (for sections)

5. Semantic HTML audit across all sections:
   - Proper heading hierarchy (h1 only in hero, h2 per section, h3 for subsections)
   - <main>, <nav>, <section>, <article>, <footer> elements
   - Proper alt text on all images
   - Lang attribute on html tag

6. Performance SEO:
   - Image optimization config in next.config.js
   - Font display: swap
   - Preload critical assets

[CONSTRAINTS]
- Static export compatible (no server-side metadata generation)
- OG image should be a designed preview (can be a static image in public/)
- All meta descriptions under 160 characters
- No duplicate title tags or descriptions
- Schema.org JSON-LD must be valid (test with Google Rich Results Test)

[OUTPUT]
- src/app/layout.tsx (updated with metadata)
- public/robots.txt
- public/sitemap.xml
- JSON-LD structured data in layout
```

---

## PF-041 | Accessibility Audit & Keyboard Navigation

```
[CONTEXT]
Building Bhargavi K Pai's portfolio. We need to ensure the portfolio is accessible
to all users, including those using screen readers, keyboard navigation, or having
visual impairments. This is also important for lighthouse scores and professional quality.

[TASK]
Conduct accessibility audit and fix issues:

1. Keyboard Navigation:
   - Tab order follows logical reading order through all sections
   - Skip-to-content link at very top of page (visible on focus)
   - All interactive elements (buttons, links, tabs) focusable with visible focus ring
   - Escape closes mobile menu and modals
   - Arrow keys navigate skill tabs and filter options

2. Screen Reader Support:
   - All images have descriptive alt text
   - Decorative images have alt="" and aria-hidden="true"
   - Icon-only buttons have aria-label
   - Form inputs have associated <label> elements
   - Error messages use aria-live="polite" for announcements
   - Section landmarks with aria-labelledby
   - AnimatedCounter has aria-live="polite" to announce final value

3. Visual Accessibility:
   - All text passes WCAG AA contrast ratio (4.5:1 for body, 3:1 for large text)
   - Focus indicators are visible in both light and dark mode
   - No information conveyed by color alone (icons + text for statuses)
   - Minimum touch target size: 44x44px for mobile
   - Text resizable up to 200% without layout breaking

4. Motion Accessibility:
   - Respect prefers-reduced-motion media query
   - Create src/hooks/usePrefersReducedMotion.ts hook
   - Wrap all Framer Motion animations with motion preference check
   - Typewriter effect falls back to static text

5. src/components/ui/SkipToContent.tsx:
   - Visually hidden link that becomes visible on focus
   - "Skip to main content" text
   - Jumps focus to main content area

[CONSTRAINTS]
- WCAG 2.1 AA compliance minimum
- Test with keyboard-only navigation (no mouse)
- Lighthouse accessibility score target: 95+
- Do NOT remove animations entirely — reduce/simplify them for reduced-motion

[OUTPUT]
- src/components/ui/SkipToContent.tsx
- src/hooks/usePrefersReducedMotion.ts
- Updated components with accessibility fixes
- Accessibility checklist in comments
```

---

## PF-042 | Performance Optimization & Lighthouse 90+

```
[CONTEXT]
Building Bhargavi K Pai's portfolio. Final performance optimization pass to achieve
Lighthouse scores of 90+ in all categories (Performance, Accessibility, Best Practices,
SEO).

[TASK]
Optimize performance across the portfolio:

1. Image Optimization:
   - All images converted to WebP format
   - Use next/image with proper width, height, and sizes attributes
   - Hero profile image: priority={true} for LCP optimization
   - Lazy load below-fold images
   - Blur placeholder data URLs for images

2. Code Splitting:
   - Dynamic import for heavy components:
     a) Recharts visualizations (lazy load DataShowcase section)
     b) Framer Motion AnimatePresence (tree-shaking unused features)
   - Route-based code splitting (automatic with App Router)

3. Font Optimization:
   - Use next/font/google for Inter and Plus Jakarta Sans
   - font-display: swap
   - Subset fonts to Latin characters only (reduce payload)
   - Preload critical font weights (400, 600, 700)

4. CSS Optimization:
   - Tailwind purge unused styles (automatic in production)
   - No unused CSS from old Bootstrap (verify it's fully removed)

5. JavaScript Optimization:
   - Tree-shake unused Framer Motion features
   - Reduce bundle size: check with `npx next build && npx @next/bundle-analyzer`
   - No render-blocking scripts

6. Caching:
   - Static assets cache headers in next.config.js
   - Immutable cache for hashed assets

7. Core Web Vitals:
   - LCP < 2.5s (optimize hero section loading)
   - FID < 100ms (minimize main thread work)
   - CLS < 0.1 (no layout shifts — fixed dimensions for images, fonts)

8. Build configuration in next.config.js:
   - output: 'export' (static generation)
   - images: { unoptimized: true } (for static export) OR use loader
   - Compression enabled
   - Production source maps disabled

[CONSTRAINTS]
- Target: Lighthouse 90+ in ALL four categories
- Bundle size target: < 200KB gzipped (first load JS)
- No external script tags (everything via npm packages)
- Static export must work for GitHub Pages / Netlify / Vercel deployment

[OUTPUT]
- next.config.js (optimized)
- Updated components with performance improvements
- Performance audit results
```

---

## PF-043 | Deploy to Vercel with Custom Domain

```
[CONTEXT]
Bhargavi K Pai's portfolio is complete and optimized. Time to deploy it live.
The project is a Next.js static export hosted on GitHub at Bhargavi1100/Portfolio.

[TASK]
Set up deployment:

1. Vercel Deployment:
   - Connect GitHub repo to Vercel
   - Configure build command: `next build`
   - Configure output directory: `out` (for static export)
   - Set environment variables (NEXT_PUBLIC_FORMSPREE_ID, NEXT_PUBLIC_SITE_URL)
   - Enable automatic deployments on push to main branch

2. GitHub Pages Alternative:
   - GitHub Actions workflow: .github/workflows/deploy.yml
   - Trigger on push to main
   - Steps: checkout → setup Node → install → build → deploy to gh-pages branch
   - Use actions/configure-pages and actions/deploy-pages

3. Netlify Alternative:
   - netlify.toml configuration
   - Build command and publish directory
   - Redirect rules for SPA

4. Post-Deployment:
   - Verify all links work (no 404s)
   - Test contact form on live site
   - Check OG image renders correctly on LinkedIn/Twitter sharing
   - Run Lighthouse on live URL
   - Submit sitemap to Google Search Console

[CONSTRAINTS]
- Primary deployment target: Vercel (recommended for Next.js)
- GitHub Actions workflow should be production-ready (caching, proper Node version)
- Environment variables must NOT be committed to git
- Custom domain setup instructions (optional — include as comments)

[OUTPUT]
- .github/workflows/deploy.yml (for GitHub Pages)
- netlify.toml (optional)
- vercel.json (optional, for custom headers/redirects)
- Deployment instructions in README
```

---

## PF-044 | README, Documentation & Final QA

```
[CONTEXT]
Bhargavi K Pai's professional portfolio transformation is complete. Final step is
creating comprehensive documentation and performing quality assurance.

[TASK]
Create documentation and perform final QA:

1. README.md (complete rewrite):
   - Project title with emoji: "🚀 Bhargavi K Pai — Professional Portfolio"
   - Hero screenshot (or link to live site)
   - Badges: Next.js, TypeScript, Tailwind CSS, Vercel deployment status
   - Description: What the portfolio showcases
   - Live Demo link
   - Features list:
     ✅ Modern responsive design (mobile-first)
     ✅ Dark/Light mode with system preference detection
     ✅ Scroll animations with Framer Motion
     ✅ Interactive data visualizations
     ✅ Bento grid skill showcase
     ✅ Contact form with validation
     ✅ SEO optimized with structured data
     ✅ Lighthouse 90+ scores
     ✅ Accessible (WCAG 2.1 AA)
   - Tech Stack section with icons
   - Getting Started (clone, install, dev, build)
   - Project Structure overview
   - Customization guide (how to update content via data files)
   - Deployment instructions
   - License: MIT

2. CUSTOMIZATION.md:
   - How to update personal information (src/data/personal.ts)
   - How to add/remove projects (src/data/projects.ts)
   - How to update skills (src/data/skills.ts)
   - How to change colors (tailwind.config.ts)
   - How to add new sections

3. Final QA Checklist:
   - [ ] All links work (no broken URLs)
   - [ ] Contact form submits successfully
   - [ ] Dark mode toggle works and persists
   - [ ] All animations play smoothly (no jank)
   - [ ] Mobile responsive at all breakpoints (320px to 1920px+)
   - [ ] Images load and display correctly
   - [ ] Resume PDF downloads properly
   - [ ] Skill bars animate on scroll
   - [ ] Stats counters animate on scroll
   - [ ] Charts render and are interactive
   - [ ] Keyboard navigation works throughout
   - [ ] Screen reader announces content properly
   - [ ] No console errors or warnings
   - [ ] Lighthouse scores: 90+ all categories
   - [ ] OG image renders on social sharing
   - [ ] Page load time < 3 seconds

[CONSTRAINTS]
- README must be professional and well-formatted
- No sensitive information in documentation
- Screenshots should be current (take after deployment)
- Include both npm and yarn/pnpm commands

[OUTPUT]
- README.md
- CUSTOMIZATION.md
- QA checklist verification
```

---

# ═══════════════════════════════════════════════════════
# COPILOT INSTRUCTIONS FILE
# ═══════════════════════════════════════════════════════

## Appendix: COPILOT-INSTRUCTIONS.md Content

Copy this to `.github/copilot-instructions.md` in the repository:

```markdown
# Portfolio — Copilot Development Instructions

## Project Overview
Professional portfolio for Bhargavi K Pai (Data Analyst).
- Next.js 15 (App Router, TypeScript, Static Export)
- Tailwind CSS (utility-first, dark mode via class strategy)
- Framer Motion (animations)
- Recharts (data visualizations)

## Critical Rules
1. ALL styling via Tailwind className — NO inline styles
2. TypeScript strict — NO `any` types
3. Content from src/data/ files — NEVER hardcode content in components
4. Dark mode: use Tailwind dark: prefix on every component
5. Animations: Framer Motion only — NO CSS @keyframes
6. Images: next/image ONLY — NO <img> tags
7. Accessibility: ARIA labels on interactive elements, focus-visible rings
8. Mobile-first: design for mobile, enhance for desktop

## File Structure
- src/components/ui/ — Design system
- src/components/sections/ — Portfolio sections
- src/components/animations/ — Animation wrappers
- src/data/ — Content data files
- src/types/ — TypeScript types
- src/hooks/ — Custom hooks
- src/lib/ — Utilities

## After Every Response
Provide 2-4 next-step options as:
> **Next:** `[Option 1]` · `[Option 2]` · `[Option 3]`
```

---

*This prompts document is the complete blueprint for transforming the portfolio.
Execute prompts in order (PF-001 → PF-044). Each prompt builds on the previous.*
