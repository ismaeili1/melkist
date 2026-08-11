import {
  refreshTokenRepository,
} from "@/lib/auth/refresh-token/repositories";

import {
  hashToken,
} from "@/lib/auth/hashing";

export async function revokeRefreshToken(
  token: string,
): Promise<void> {
  const tokenHash =
    hashToken(token);

  const existing =
    await refreshTokenRepository.findByToken(
      tokenHash,
    );

  if (!existing) {
    return;
  }

  await refreshTokenRepository.revoke(
    existing.id,
  );
}
