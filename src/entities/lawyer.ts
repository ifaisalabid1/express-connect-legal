export interface Lawyer {
  id: string;
  name: string;
  about: string;
  website?: string;
  phone?: string;
  email: string;
  isFeatured: boolean;
  yearOfExperience: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateLawyerData {
  name: string;
  about: string;
  website?: string;
  phone?: string;
  email: string;
  isFeatured: boolean;
  yearOfExperience: number;
  createdAt: Date;
}

export interface UpdateLawyerData {
  name: string;
  about: string;
  website?: string;
  phone?: string;
  email: string;
  isFeatured: boolean;
  yearOfExperience: number;
  updatedAt: Date;
}
