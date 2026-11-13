export interface SocialLink {
  label: string;
  url: string;
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface ProjectMedia {
  type: "image" | "video";
  src: string;
  alt: string;
  poster?: string;
  aspectRatio?: "16/9" | "4/3";
}

export interface ProjectCardData {
  title: string;
  description: string;
  highlight: string;
  tags: string[];
  links: ProjectLink[];
  media?: ProjectMedia;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface ExperienceData {
  role: string;
  organization: string;
  period: string;
  summary: string;
}

export interface EducationData {
  text: string;
}

export interface Content {
  meta: {
    title: string;
    description: string;
  };
  header: {
    name: string;
    headline: string;
    tags: string[];
    links: SocialLink[];
  };
  about: {
    title: string;
    paragraphs: string[];
  };
  projects: {
    title: string;
    items: ProjectCardData[];
  };
  skills: {
    title: string;
    categories: SkillCategory[];
  };
  experience: {
    title: string;
    items: ExperienceData[];
  };
  education: {
    title: string;
    items: EducationData[];
  };
  ui: {
    themeToggle: {
      ariaLabel: string;
    };
    languageSwitch: {
      targetLocale: "en" | "pt";
      label: string;
      ariaLabel: string;
    };
  };
}
