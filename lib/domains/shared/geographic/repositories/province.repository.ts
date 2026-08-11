import { PrismaClient } from "@prisma/client";

export class ProvinceRepository {

  constructor(
    private readonly prisma: PrismaClient
  ) {}

  async findByCountry(countryId: string) {
    return this.prisma.province.findMany({
      where: {
        countryId,
        isActive: true
      },
      orderBy: {
        sortOrder: "asc"
      }
    });
  }

  async findById(id: string) {
    return this.prisma.province.findUnique({
      where: { id }
    });
  }

}