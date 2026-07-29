import { prisma } from "@/lib/prisma";

export const PropertyRepository = {
  async findAll() {
    return prisma.property.findMany();
  },

  async findById(id: string) {
    return prisma.property.findUnique({
      where: { id },
    });
  },

  async findBySlug(slug: string) {
    return prisma.property.findUnique({
      where: { slug },
    });
  },

  async create(data: any) {
    return prisma.property.create({
      data,
    });
  },

  async update(id: string, data: any) {
    return prisma.property.update({
      where: { id },
      data,
    });
  },

  async delete(id: string) {
    return prisma.property.delete({
      where: { id },
    });
  },
};