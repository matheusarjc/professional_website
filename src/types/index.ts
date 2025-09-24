export interface SocialLinks {
  linkedin: string;
  github: string;
  twitter: string;
  medium: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  shortBio: string;
  avatar: string;
  location: string;
  email: string;
  phone: string;
  socials: SocialLinks;
  pixKey: string;
  applePayLink: string;
}

export interface Formation {
  course: string;
  org: string;
  period: string;
}

export interface Service {
  title: string;
  desc: string;
  chips: string[];
}

export interface Project {
  name: string;
  summary: string;
  tags: string[];
  href: string;
}

export interface Article {
  title: string;
  platform: string;
  href: string;
}

export interface NavigationItem {
  id: string;
  label: string;
}

export interface CopyFieldProps {
  label: string;
  value: string;
}
