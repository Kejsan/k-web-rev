export interface PreviousRole {
  title: string;
  period: string;
  note?: string;
}

export interface CareerProgression {
  title: string;
  period: string;
  type: string;
  description: string;
  responsibilities: string[];
  skills: string[];
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  fullDescription: string;
  responsibilities?: string[];
  skills: string[];
  careerProgression?: CareerProgression[];
  previousRole?: PreviousRole;
}
