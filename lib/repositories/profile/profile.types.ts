import { User } from "@prisma/client";

export interface UpdateProfileInput {

  firstName?: string;

  lastName?: string;

  phone?: string;

  avatar?: string;

  language?: string;

  bio?: string;

}

export interface ProfileWithCounts {

  user: User;

  propertyCount: number;

  favoriteCount: number;

}