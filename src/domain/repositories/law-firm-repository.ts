import {
  CreateLawFirmData,
  LawFirm,
  UpdateLawFirmData,
} from "../entities/law-firm";

export interface ILawFirmRepository {
  findAll(): Promise<LawFirm[]>;
  findById(id: string): Promise<LawFirm | null>;
  findByName(name: string): Promise<LawFirm | null>;
  create(data: CreateLawFirmData): Promise<LawFirm>;
  update(id: string, data: UpdateLawFirmData): Promise<LawFirm>;
  delete(id: string): Promise<void>;
}
