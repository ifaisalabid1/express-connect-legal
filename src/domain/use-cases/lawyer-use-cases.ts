import { CreateLawyerData, Lawyer, UpdateLawyerData } from "../entities/lawyer";
import { ILawFirmRepository } from "../repositories/law-firm-repository";
import { ILawyerRepository } from "../repositories/lawyer-repository";

export class LawyerUseCases {
  constructor(
    private readonly lawyerRepository: ILawyerRepository,
    private readonly lawFirmRepository: ILawFirmRepository
  ) {}

  async getAllLawyers(): Promise<Lawyer[]> {
    return this.lawyerRepository.findAll();
  }

  async getLawyerById(id: string): Promise<Lawyer> {
    const lawyer = await this.lawyerRepository.findById(id);

    if (!lawyer) {
      throw new Error("Law firm not found.");
    }

    return lawyer;
  }

  async getLawyerByName(name: string): Promise<Lawyer> {
    const lawyer = await this.lawyerRepository.findByName(name);

    if (!lawyer) {
      throw new Error("Law firm not found.");
    }

    return lawyer;
  }

  async createLawyer(data: CreateLawyerData): Promise<Lawyer> {
    const existingLawyer = await this.lawyerRepository.findByEmail(data.email);

    if (existingLawyer) {
      throw new Error("Lawyer with this email already exists.");
    }

    return this.lawyerRepository.create(data);
  }

  async updateLawyer(id: string, data: UpdateLawyerData): Promise<Lawyer> {
    await this.getLawyerById(id);

    return this.lawyerRepository.update(id, data);
  }

  async deleteLawyer(id: string): Promise<void> {
    await this.lawyerRepository.findById(id);
    return this.lawyerRepository.delete(id);
  }

  async getLawyersByLawFirm(lawFirmId: string): Promise<Lawyer[] | null> {
    const lawFirm = await this.lawFirmRepository.findById(lawFirmId);
    if (!lawFirm) {
      throw new Error("Law firm not found");
    }
    return this.lawyerRepository.findByLawFirm(lawFirmId);
  }
}
