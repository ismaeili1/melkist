import crypto from "crypto";

import {
  signAccessToken,
  signRefreshToken,
} from "@/lib/auth/jwt";

import {
  hashToken,
} from "@/lib/auth/hashing";

import {
  setAccessCookie,
  setRefreshCookie,
} from "@/lib/auth/cookies";

import {
  createFingerprint,
} from "@/lib/auth/fingerprint";

import {
  sessionRepository,
  deviceRepository,
} from "@/lib/auth/session/repositories";

import {
  refreshTokenRepository,
} from "@/lib/auth/refresh-token/repositories";

import {
  UserRole,
} from "@prisma/client";

type CreateUserSessionInput = {
  id: string;
  email: string;
  role: UserRole;
  ipAddress?: string;
  userAgent?: string;
};

const SESSION_TTL_MS =
  1000 * 60 * 60 * 24 * 30;

export async function createUserSession(
  user: CreateUserSessionInput,
) {

  const ipAddress =
    user.ipAddress ?? "unknown";

  const userAgent =
    user.userAgent ?? "unknown";

  const fingerprint =
    createFingerprint({
      userAgent,
      ipAddress,
    });

  const device =
    await deviceRepository.findOrCreate({
      userId: user.id,
      fingerprint,
      ipAddress,
    });

  const sessionId =
    crypto.randomUUID();

  const accessToken =
    signAccessToken({
      sub: user.id,
      email: user.email,
      role: user.role,
      sessionId,
    });

  const accessTokenHash =
    hashToken(accessToken);

  const expiresAt =
    new Date(
      Date.now() + SESSION_TTL_MS,
    );

  const session =
    await sessionRepository.create({
      id: sessionId,
      userId: user.id,
      deviceId: device.id,
      accessTokenHash,
      ipAddress,
      userAgent,
      expiresAt,
    });

  const refreshToken =
    signRefreshToken({
      sub: user.id,
      email: user.email,
      role: user.role,
      sessionId: session.id,
    });

  const refreshTokenHash =
    hashToken(refreshToken);

  await refreshTokenRepository.create({
    userId: user.id,
    sessionId: session.id,
    deviceId: device.id,
    tokenHash: refreshTokenHash,
    familyId: crypto.randomUUID(),
    fingerprint,
    userAgent,
    ipAddress,
    expiresAt,
  });

  await setAccessCookie(
    accessToken,
  );

  await setRefreshCookie(
    refreshToken,
  );

  return {
    sessionId: session.id,
    deviceId: device.id,
  };

}
