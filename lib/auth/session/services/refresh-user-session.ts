import {
  rotateRefreshToken,
} from "@/lib/auth/refresh-token/services";

import {
  setAccessCookie,
  setRefreshCookie,
} from "@/lib/auth/cookies";

import {
  signAccessToken,
} from "@/lib/auth/jwt";

export async function refreshUserSession(
  refreshToken: string,
) {
  const result =
    await rotateRefreshToken(
      refreshToken,
    );

  const accessToken =
    signAccessToken({
      sub: result.userId,
      email: result.email,
      role: result.role,
      sessionId: result.sessionId,
    });

  await setAccessCookie(
    accessToken,
  );

  await setRefreshCookie(
    result.refreshToken,
  );

  return {
    accessToken,
    refreshToken:
      result.refreshToken,
    sessionId:
      result.sessionId,
    userId:
      result.userId,
    email:
      result.email,
    role:
      result.role,
  };
}
