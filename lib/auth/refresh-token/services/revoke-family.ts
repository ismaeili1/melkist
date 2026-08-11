import {
  refreshTokenRepository,
} from "@/lib/auth/refresh-token/repositories";

export async function revokeTokenFamily(
  familyId: string,
): Promise<void> {
  await refreshTokenRepository.revokeFamily(
    familyId,
  );
}
