import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { ThemeProvider } from "@/lib/theme-provider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bhargavi K Pai — FinTech Data Analyst Portfolio",
  description:
    "FinTech Data Analyst at Northern Trust with expertise in Python, SQL, Power BI, fund administration, and financial data automation. Explore projects, skills, and professional experience.",
  keywords: [
    "fintech data analyst",
    "portfolio",
    "Python",
    "SQL",
    "Power BI",
    "Bhargavi K Pai",
    "fund administration",
    "Northern Trust",
    "financial reporting",
    "data automation",
  ],
  authors: [{ name: "Bhargavi K Pai" }],
  openGraph: {
    title: "Bhargavi K Pai — FinTech Data Analyst Portfolio",
    description:
      "FinTech Data Analyst at Northern Trust — Python, SQL, Power BI, fund administration.",
    url: "https://bhargavikpai.dev",
    siteName: "Bhargavi K Pai Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhargavi K Pai — FinTech Data Analyst Portfolio",
    description:
      "FinTech Data Analyst at Northern Trust — Python, SQL, Power BI, fund administration.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jakarta.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans antialiased transition-colors duration-200">
        <a
          href="#home"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:outline-none"
        >
          Skip to main content
        </a>
        <ThemeProvider>{children}</ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Bhargavi K Pai",
              url: "https://bhargavi-portfolio.vercel.app",
              jobTitle: "FinTech Data Analyst | Analyst at Northern Trust",
              sameAs: [
                "https://github.com/Bhargavi1100",
                "https://www.linkedin.com/in/bhargavi-k-pai-b44423287/",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
