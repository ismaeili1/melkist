import { prisma } from "@/lib/prisma";

export const UserRepository = {
  async findAll() {
    return prisma.user.findMany();
  },

  async findById(id: string) {
    return prisma.user.findUnique({
      where: { id },
    });
  },

  async create(data: any) {
    return prisma.user.create({
      data,
    });
  },
};