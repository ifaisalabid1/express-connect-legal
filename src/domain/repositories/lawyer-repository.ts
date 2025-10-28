import { CreateLawyerData, Lawyer, UpdateLawyerData } from "../entities/lawyer";

export interface ILawyerRepository {
  findAll(): Promise<Lawyer[]>;
  findById(id: string): Promise<Lawyer | null>;
  findByName(name: string): Promise<Lawyer | null>;
  findByEmail(email: string): Promise<Lawyer | null>;
  findByLawFirm(lawFirmId: string): Promise<Lawyer[] | null>;
  create(data: CreateLawyerData): Promise<Lawyer>;
  update(id: string, data: UpdateLawyerData): Promise<Lawyer>;
  delete(id: string): Promise<void>;
}
