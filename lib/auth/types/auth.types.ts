import { UserRole, AccountStatus } from "@prisma/client";

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