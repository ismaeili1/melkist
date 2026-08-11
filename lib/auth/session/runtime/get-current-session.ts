import { cookies } from "next/headers";

import {
  verifyAccessToken,
} from "@/lib/auth/jwt";

import {
  hashToken,
} from "@/lib/auth/hashing";

import {
  ACCESS_COOKIE,
} from "@/lib/auth/cookies";

import {
  sessionRepository,
} from "@/lib/auth/session/repositories";

export async function getCurrentSession() {

  const cookieStore =
    await cookies();

  const token =
    cookieStore.get(
      ACCESS_COOKIE,
    )?.value;

  if (!token) {
    return null;
  }

  let payload;

  try {

    payload =
      verifyAccessToken(token);

  } catch {

    return null;

  }

  if (!payload?.sub) {
    return null;
  }

  if (!payload.sessionId) {
    return null;
  }

  const session =
    await sessionRepository.findByAccessTokenHash(
      hashToken(token),
    );

  if (!session) {
    return null;
  }

  if (session.id !== payload.sessionId) {
    return null;
  }

  if (session.revoked) {
    return null;
  }

  if (session.status !== "ACTIVE") {
    return null;
  }

  if (
    session.expiresAt <= new Date()
  ) {
    return null;
  }

  if (
    session.user.status !== "ACTIVE"
  ) {
    return null;
  }

  return session;

}
