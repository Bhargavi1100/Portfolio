"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import {
  BarChart3,
  PieChart as PieChartIcon,
  Activity,
  TrendingUp,
} from "lucide-react";
import { Container, SectionHeading, Card, AnimatedCounter } from "@/components/ui";

const SalesChart = dynamic(() => import("@/components/visualizations/SalesChart"), {
  ssr: false,
  loading: () => <div className="h-[300px] animate-pulse bg-slate-200 dark:bg-slate-800 rounded-lg" />,
});
const AttritionPieChart = dynamic(() => import("@/components/visualizations/AttritionPieChart"), {
  ssr: false,
  loading: () => <div className="h-[300px] animate-pulse bg-slate-200 dark:bg-slate-800 rounded-lg" />,
});

const metrics = [
  { icon: TrendingUp, value: 12, suffix: "%", label: "Revenue Tracked Growth" },
  { icon: Activity, value: 1000, suffix: "+", label: "Employee Records Analyzed" },
  { icon: BarChart3, value: 85, suffix: "%", label: "Prediction Accuracy" },
];

function DataShowcase() {
  return (
    <section id="data-showcase" className="py-20">
      <Container>
        <SectionHeading
          title="Data in Action"
          subtitle="Interactive visualizations from my analysis projects"
        />

        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card variant="elevated" padding="lg">
              <div className="flex items-center gap-2 mb-1">
                <BarChart3 className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <h3 className="font-semibold text-slate-900 dark:text-white">
                  Monthly Revenue by Category
                </h3>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                Sample data inspired by Retail Sales Analysis project
              </p>
              <SalesChart />
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Card variant="elevated" padding="lg">
              <div className="flex items-center gap-2 mb-1">
                <PieChartIcon className="h-5 w-5 text-violet-600 dark:text-violet-400" />
                <h3 className="font-semibold text-slate-900 dark:text-white">
                  Employee Attrition Drivers
                </h3>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                Sample data inspired by HR Analytics project
              </p>
              <AttritionPieChart />
            </Card>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="text-center">
                <m.icon className="h-6 w-6 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-slate-900 dark:text-white">
                  <AnimatedCounter target={m.value} suffix={m.suffix} />
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400">{m.label}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-xs text-slate-400 dark:text-slate-500 mt-6">
          * These are sample datasets inspired by actual project work for demonstration purposes.
        </p>
      </Container>
    </section>
  );
}

export { DataShowcase };
