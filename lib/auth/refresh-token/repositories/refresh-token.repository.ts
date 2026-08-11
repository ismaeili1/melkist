import {
  BaseRepository,
} from "@/lib/database";

export interface CreateRefreshTokenInput {
  userId: string;
  sessionId: string;
  deviceId: string;
  tokenHash: string;
  familyId: string;
  parentTokenId?: string | null;
  fingerprint?: string | null;
  userAgent?: string | null;
  ipAddress?: string | null;
  expiresAt: Date;
}

export interface AtomicRotationInput {
  currentId: string;
  nextToken: CreateRefreshTokenInput;
}

export class RefreshTokenRepository
  extends BaseRepository {

  async findByToken(
    tokenHash: string,
  ) {
    return this.prisma.refreshToken.findUnique({
      where: {
        tokenHash,
      },
      include: {
        user: true,
        session: true,
        device: true,
      },
    });
  }
  async findByHash(
    tokenHash: string,
  ) {
    return this.prisma.refreshToken.findUnique({
      where: {
        tokenHash,
      },
      include: {
        user: true,
        session: true,
        device: true,
      },
    });
  }

  async create(
    data: CreateRefreshTokenInput,
  ) {
    return this.prisma.refreshToken.create({
      data,
    });
  }

  async revoke(
    id: string,
  ) {
    return this.prisma.refreshToken.update({
      where: {
        id,
      },
      data: {
        revoked: true,
        revokedAt: new Date(),
      },
    });
  }
  async revokeByTokenHash(
    tokenHash: string,
  ) {
    return this.prisma.refreshToken.update({
      where: {
        tokenHash,
      },
      data: {
        revoked: true,
        revokedAt: new Date(),
      },
    });
  }

  async revokeBySessionId(
    sessionId: string,
  ): Promise<void> {
    await this.prisma.refreshToken.updateMany({
      where: {
        sessionId,
        revoked: false,
      },
      data: {
        revoked: true,
        revokedAt: new Date(),
      },
    });
  }

  async revokeFamily(
    familyId: string,
  ) {
    return this.prisma.refreshToken.updateMany({
      where: {
        familyId,
        revoked: false,
      },
      data: {
        revoked: true,
        revokedAt: new Date(),
      },
    });
  }

  async rotateAtomic(
    input: AtomicRotationInput,
  ) {
    return this.prisma.$transaction(
      async (tx) => {
        const revoked =
          await tx.refreshToken.updateMany({
            where: {
              id: input.currentId,
              revoked: false,
            },
            data: {
              revoked: true,
              revokedAt: new Date(),
              rotatedAt: new Date(),
            },
          });

        if (revoked.count !== 1) {
          throw new Error(
            "Refresh token rotation conflict.",
          );
        }

        return tx.refreshToken.create({
          data: input.nextToken,
        });
      },
    );
  }
}

export const refreshTokenRepository =
  new RefreshTokenRepository();
