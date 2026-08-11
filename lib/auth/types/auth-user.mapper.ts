import type { User } from "@prisma/client";
import type { AuthUser } from "./auth.types";

/**
 * Fields required to build the public AuthUser contract.
 * Accepting a Pick<> (instead of the full User) lets callers pass
 * either a full User row or a narrowed Prisma `select` result -
 * both are structurally compatible.
 */
type AuthUserSource = Pick<
  User,
  | "id"
  | "email"
  | "role"
  | "status"
  | "firstName"
  | "lastName"
  | "phone"
  | "avatar"
  | "emailVerified"
  | "createdAt"
>;

/**
 * Maps the persistence-layer User entity to the public
 * authentication contract.
 * IMPORTANT:
 * Persistence-only fields such as password must never
 * be exposed through AuthUser.
 */
export function toAuthUser(user: AuthUserSource): AuthUser {
  return {
    id: user.id,
    email: user.email,
    role: user.role,
    status: user.status,
    firstName: user.firstName,
    lastName: user.lastName,
    phone: user.phone,
    avatar: user.avatar,
    emailVerified: user.emailVerified,
    createdAt: user.createdAt,
  };
}
