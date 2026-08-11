import { ProvinceRepository } from "../repositories/province.repository";

export class ProvinceService {

  constructor(
    private readonly repository: ProvinceRepository
  ) {}

  async getCountryProvinces(countryId: string) {
    return this.repository.findByCountry(countryId);
  }

}