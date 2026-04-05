export type SkillCategory =
  | "analytics"
  | "programming"
  | "visualization"
  | "web"
  | "tools"
  | "soft";

export interface Skill {
  name: string;
  icon: string;
  proficiency: number;
  category: SkillCategory;
  description?: string;
  yearsOfExperience?: number;
}

export interface SkillGroup {
  category: SkillCategory;
  title: string;
  description: string;
  skills: Skill[];
}
