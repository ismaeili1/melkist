import { getCurrentSession } from "./get-current-session";
import { toAuthUser } from "@/lib/auth/types/auth-user.mapper";
import type { AuthUser } from "@/lib/auth/types";

/**
 * SINGLE SOURCE OF TRUTH for "who is the current user".
 * Reuses getCurrentSession(), which already validates:
 * token signature, session revoked/expired, session.status,
 * and user.status. Every other "current user" helper in the
 * app should delegate to this function instead of re-implementing
 * session/JWT verification.
 */
export async function getCurrentUser(): Promise<AuthUser | null> {
  const session = await getCurrentSession();

  if (!session) {
    return null;
  }

  return toAuthUser(session.user);
}
