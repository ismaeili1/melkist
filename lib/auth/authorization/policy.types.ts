import { UserRole } from "@prisma/client";
import type { Action, Resource } from "./permissions";

export interface AuthorizationContext {
  userId: string;
  role: UserRole;
}

export interface AuthorizationRequest {
  action: Action;
  resource: Resource;
  ownerId?: string;
}
