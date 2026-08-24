export interface ChallengeItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface FrameworkStage {
  step: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  iconName: string;
}

export interface EcosystemNode {
  id: string;
  title: string;
  subtitle: string;
  category: 'left' | 'right';
  iconName: string;
}

export interface MaturityLevel {
  level: number;
  title: string;
  description: string;
  colorClass: string;
  iconName: string;
}

export interface ProcessStage {
  step: string;
  title: string;
  description: string;
  iconName: string;
}

export interface OutcomeItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}
