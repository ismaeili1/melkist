import {
  signRefreshToken,
  verifyRefreshToken,
} from "@/lib/auth/jwt";

import {
  hashToken,
} from "@/lib/auth/hashing";

import {
  refreshTokenRepository,
} from "@/lib/auth/refresh-token/repositories";

export async function rotateRefreshToken(
  currentToken: string,
) {
  const payload =
    verifyRefreshToken(currentToken);

  if (
    !payload.sub ||
    !payload.sessionId
  ) {
    throw new Error(
      "Invalid refresh token.",
    );
  }

  const currentTokenHash =
    hashToken(currentToken);

  const existing =
    await refreshTokenRepository.findByToken(
      currentTokenHash,
    );

  if (!existing) {
    throw new Error(
      "Refresh token not found.",
    );
  }

  if (
    existing.userId !== payload.sub ||
    existing.sessionId !== payload.sessionId
  ) {
    throw new Error(
      "Refresh token identity mismatch.",
    );
  }

  if (
    existing.expiresAt <= new Date()
  ) {
    throw new Error(
      "Refresh token expired.",
    );
  }

  if (existing.revoked) {
    await refreshTokenRepository.revokeFamily(
      existing.familyId,
    );

    throw new Error(
      "Refresh token replay detected.",
    );
  }

  const nextToken =
    signRefreshToken({
      sub: existing.userId,
      email: existing.user.email,
      role: existing.user.role,
      sessionId: existing.sessionId,
    });

  const nextTokenHash =
    hashToken(nextToken);

  const nextExpiresAt =
    new Date(
      Math.min(
        existing.session.expiresAt.getTime(),
        Date.now() +
          1000 * 60 * 60 * 24 * 30,
      ),
    );

  await refreshTokenRepository.rotateAtomic({
    currentId: existing.id,
    nextToken: {
      userId: existing.userId,
      sessionId: existing.sessionId,
      deviceId: existing.deviceId,
      tokenHash: nextTokenHash,
      familyId: existing.familyId,
      parentTokenId: existing.id,
      fingerprint: existing.fingerprint,
      userAgent: existing.userAgent,
      ipAddress: existing.ipAddress,
      expiresAt: nextExpiresAt,
    },
  });

  return {
    refreshToken: nextToken,
    sessionId: existing.sessionId,
    userId: existing.userId,
    email: existing.user.email,
    role: existing.user.role,
  };
}
