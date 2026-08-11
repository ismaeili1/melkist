import {
  sessionRepository,
} from "@/lib/auth/session/repositories";

import {
  refreshTokenRepository,
} from "@/lib/auth/refresh-token/repositories";

export async function revokeSession(
  sessionId: string,
) {
  await sessionRepository.revokeById(
    sessionId,
  );

  await refreshTokenRepository.revokeBySessionId(
    sessionId,
  );

  return {
    sessionId,
    revoked: true,
  };
}
