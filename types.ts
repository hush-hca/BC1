export interface UserProfile {
  name: string;
  role: string;
  bio: string;
  skills: string[];
  stats: {
    projects: number;
    trust: number;
    activity: number;
  };
}

export interface Bounty {
  id: string;
  title: string;
  reward: string;
  requiredSkills: string[];
  company: string;
}

export enum AppState {
  LANDING = 'LANDING',
  GENERATOR = 'GENERATOR',
}

export interface NavItem {
  label: string;
  href: string;
}