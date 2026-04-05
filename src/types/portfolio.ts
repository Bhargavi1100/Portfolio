export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  email: string;
  phone?: string;
  location: {
    city: string;
    country: string;
  };
  profileImage: string;
  resumeUrl: string;
  socialLinks: SocialLink[];
}

export interface SocialLink {
  platform: "github" | "linkedin" | "twitter" | "email" | "website";
  url: string;
  label: string;
}

export interface NavItem {
  label: string;
  href: string;
}
