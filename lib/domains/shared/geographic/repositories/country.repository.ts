import { PrismaClient } from "@prisma/client";

export class CountryRepository {

  constructor(
    private readonly prisma: PrismaClient
  ) {}

}