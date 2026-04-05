export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startYear: number;
  endYear: number;
  grade: string;
  description: string;
  achievements: string[];
  location?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialUrl: string;
  skills: string[];
  description?: string;
}

export interface Internship {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
  responsibilities: string[];
  skills: string[];
  certificateUrl?: string;
  type?: "remote" | "on-site" | "virtual-simulation";
}
