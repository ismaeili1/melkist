import { UserRole } from "@prisma/client";

export interface UserSession {
  userId: string;
  email: string;
  role: UserRole;
  createdAt: Date;
}

export interface PersistedUserSession extends UserSession {
  id: string;
}