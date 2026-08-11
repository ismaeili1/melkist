import { cookies } from "next/headers";

import {
  ACCESS_COOKIE,
  REFRESH_COOKIE,
  clearAuthCookies,
} from "@/lib/auth/cookies";

import {
  hashToken,
} from "@/lib/auth/hashing";

import {
  sessionRepository,
} from "@/lib/auth/session/repositories";

import {
  refreshTokenRepository,
} from "@/lib/auth/refresh-token/repositories";

export async function logoutCurrentSession(): Promise<void> {
  const cookieStore = await cookies();

  const accessToken =
    cookieStore.get(ACCESS_COOKIE)?.value;

  const refreshToken =
    cookieStore.get(REFRESH_COOKIE)?.value;

  /*
   * Revoke the current access-token session.
   */
  if (accessToken) {
    const session =
      await sessionRepository.findByAccessTokenHash(
        hashToken(accessToken),
      );

    if (session) {
      await sessionRepository.revokeById(
        session.id,
      );
    }
  }

  /*
   * Revoke the complete refresh-token family.
   *
   * This guarantees that a refresh token which was
   * issued before logout cannot recreate the session.
   */
  if (refreshToken) {
    const refreshTokenRecord =
      await refreshTokenRepository.findByToken(
        hashToken(refreshToken),
      );

    if (refreshTokenRecord) {
      await refreshTokenRepository.revokeFamily(
        refreshTokenRecord.familyId,
      );
    }
  }

  /*
   * Cookies are cleared last so the browser and
   * server-side session state remain consistent.
   */
  await clearAuthCookies();
}
