import {
  refreshUserSession,
} from "./refresh-user-session";

export async function refreshSession(
  refreshToken: string,
) {
  return refreshUserSession(
    refreshToken,
  );
}
