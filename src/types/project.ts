export type ProjectStatus = "completed" | "in-progress" | "planned";
export type ProjectCategory =
  | "data-analysis"
  | "web-development"
  | "visualization"
  | "machine-learning";

export interface ProjectMetric {
  label: string;
  value: number;
  suffix?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  category: ProjectCategory;
  thumbnailUrl?: string;
  images?: string[];
  liveUrl?: string;
  githubUrl: string;
  highlights: string[];
  metrics: ProjectMetric[];
  startDate: string;
  endDate?: string;
  status: ProjectStatus;
  featured: boolean;
}
