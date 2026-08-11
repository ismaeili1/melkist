import {
  signAccessToken,
} from "@/lib/auth/jwt";

import {
  setAccessCookie,
  setRefreshCookie,
} from "@/lib/auth/cookies";

import {
  rotateRefreshToken,
} from "./rotate-refresh-token";

export async function renewAccessToken(
  currentRefreshToken: string,
) {
  const result =
    await rotateRefreshToken(
      currentRefreshToken,
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
    sessionId:
      result.sessionId,
  };
}
