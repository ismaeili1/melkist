import { PrismaClient } from "@prisma/client";
import {
    UpdateProfileInput,
    ProfileWithCounts,
} from "./profile.types";

const prisma = new PrismaClient();

export class ProfileRepository {

    async findById(userId: string) {

        return prisma.user.findUnique({

            where: {

                id: userId,

            },

        });

    }

    async findByEmail(email: string) {

        return prisma.user.findUnique({

            where: {

                email,

            },

        });

    }

    async update(

        userId: string,

        data: UpdateProfileInput,

    ) {

        return prisma.user.update({

            where: {

                id: userId,

            },

            data,

        });

    }

    async delete(userId: string) {

        return prisma.user.delete({

            where: {

                id: userId,

            },

        });

    }

    async exists(userId: string): Promise<boolean> {

        const count = await prisma.user.count({

            where: {

                id: userId,

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

                properties: true,

                favorites: true,

            },

        });

        if (!user)

            return null;

        return {

            user,

            propertyCount: user.properties.length,

            favoriteCount: user.favorites.length,

        };

    }

}