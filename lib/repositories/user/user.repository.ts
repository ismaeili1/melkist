import { prisma } from "@/lib/prisma";

import type {
  Prisma,
  User,
} from "@prisma/client";

export const UserRepository = {
  async findAll(): Promise<User[]> {
    return prisma.user.findMany();
  },

  async findById(
    id: string,
  ): Promise<User | null> {
    return prisma.user.findUnique({
      where: { id },
    });
  },

  async findByEmail(
    email: string,
  ): Promise<User | null> {
    return prisma.user.findUnique({
      where: {
        email: email.toLowerCase(),
      },
    });
  },

  async findWithProfile(
    id: string,
  ) {
    return prisma.user.findUnique({
      where: { id },
      include: {
        profile: true,
      },
    });
  },

  async exists(
    email: string,
  ): Promise<boolean> {
    const count = await prisma.user.count({
      where: {
        email: email.toLowerCase(),
      },
    });

    return count > 0;
  },

  async create(
    data: Prisma.UserCreateInput,
  ): Promise<User> {
    return prisma.user.create({
      data,
    });
  },

  async update(
    id: string,
    data: Prisma.UserUpdateInput,
  ): Promise<User> {
    return prisma.user.update({
      where: { id },
      data,
    });
  },

  async softDelete(
    id: string,
  ): Promise<User> {
    return prisma.user.update({
      where: { id },
      data: {
        deletedAt: new Date(),
      },
    });
  },

  async delete(
    id: string,
  ): Promise<User> {
    return prisma.user.delete({
      where: { id },
    });
  },

  async updateLastLogin(
    id: string,
  ): Promise<User> {
    return prisma.user.update({
      where: { id },
      data: {
        lastLoginAt: new Date(),
      },
    });
  },

  async verifyEmail(
    id: string,
  ): Promise<User> {
    return prisma.user.update({
      where: { id },
      data: {
        emailVerified: true,
      },
    });
  },
};
