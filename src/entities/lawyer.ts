export interface LawFirm {
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

export interface CreateLawFirmData {
  name: string;
  about: string;
  website?: string;
  phone?: string;
  email: string;
  isFeatured: boolean;
  yearOfExperience: number;
  createdAt: Date;
}

export interface UpdateLawFirmData {
  name: string;
  about: string;
  website?: string;
  phone?: string;
  email: string;
  isFeatured: boolean;
  yearOfExperience: number;
  updatedAt: Date;
}
