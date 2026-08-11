import { CountryRepository } from "../repositories/country.repository";

export class CountryService {

  constructor(
    private readonly repository: CountryRepository
  ) {}

}