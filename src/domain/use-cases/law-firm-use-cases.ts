import {
  CreateLawFirmData,
  LawFirm,
  UpdateLawFirmData,
} from "../entities/law-firm";
import { ILawFirmRepository } from "../repositories/law-firm-repository";

export class LawFirmUseCases {
  constructor(private readonly lawFirmRepository: ILawFirmRepository) {}

  async getAllLawFirms(): Promise<LawFirm[]> {
    return this.lawFirmRepository.findAll();
  }

  async getLawFirmById(id: string): Promise<LawFirm> {
    const lawFirm = await this.lawFirmRepository.findById(id);

    if (!lawFirm) {
      throw new Error("Law firm not found.");
    }

    return lawFirm;
  }

  async createLawFirm(data: CreateLawFirmData): Promise<LawFirm> {
    const existingLawFirm = await this.lawFirmRepository.findByName(data.name);

    if (existingLawFirm) {
      throw new Error("Law firm with this name is already exist.");
    }

    return this.lawFirmRepository.create(data);
  }

  async updateLawFirm(id: string, data: UpdateLawFirmData): Promise<LawFirm> {
    await this.getLawFirmById(id);
    return this.lawFirmRepository.update(id, data);
  }

  async deleteLawFirm(id: string): Promise<void> {
    await this.getLawFirmById(id);
    return this.lawFirmRepository.delete(id);
  }
}
