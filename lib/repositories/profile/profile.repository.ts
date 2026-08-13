import { prisma } from "@/lib/prisma";

import type {
  Prisma,
  Profile,
} from "@prisma/client";

import type {
  UpdateProfileInput,
  ProfileWithCounts,
} from "./profile.types";

export class ProfileRepository {

  async findById(
    userId: string,
  ): Promise<Profile | null> {

    return prisma.profile.findUnique({
      where: {
        userId,
      },
    });
  }

  async findByUserId(
    userId: string,
  ): Promise<Profile | null> {

    return prisma.profile.findUnique({
      where: {
        userId,
      },
    });
  }

  async create(
    data: Prisma.ProfileCreateInput,
  ): Promise<Profile> {

    return prisma.profile.create({
      data,
    });
  }

  async update(
    userId: string,
    data: UpdateProfileInput | Prisma.ProfileUpdateInput,
  ): Promise<Profile> {

    return prisma.profile.update({
      where: {
        userId,
      },
      data: data as Prisma.ProfileUpdateInput,
    });
  }

  async delete(
    userId: string,
  ): Promise<Profile> {

    return prisma.profile.delete({
      where: {
        userId,
      },
    });
  }

  async exists(
    userId: string,
  ): Promise<boolean> {

    const count = await prisma.profile.count({
      where: {
        userId,
      },
    });

    return count > 0;
  }

  async getProfileSummary(
    userId: string,
  ): Promise<ProfileWithCounts | null> {

    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      include: {
        profile: true,
        properties: true,
        favorites: true,
      },
    });

    if (!user) {
      return null;
    }

    return {
      user,
      propertyCount: user.properties.length,
      favoriteCount: user.favorites.length,
    };
  }
}

export const profileRepository =
  new ProfileRepository();
