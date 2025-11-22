export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
}

export interface Education {
  degree: string;
  major: string;
  school: string;
  details?: string;
}

export interface ProfileState {
  imageUrl: string | null;
  loading: boolean;
  error: string | null;
}
