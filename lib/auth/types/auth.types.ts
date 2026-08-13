import {
  UserRole,
  AccountStatus,
} from "@prisma/client";

export interface AuthUser {
  id: string;
  email: string;

  role: UserRole;

  status: AccountStatus;

  firstName?: string | null;
  lastName?: string | null;

  phone?: string | null;

  avatar?: string | null;

  emailVerified: boolean;

  createdAt: Date;
}


export interface LoginInput {

  email: string;

  password: string;

}


export interface RegisterInput {

  email: string;

  password: string;

  firstName?: string;

  lastName?: string;

}
