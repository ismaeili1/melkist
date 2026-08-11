import { Session, SessionStatus } from "@prisma/client";
import { BaseRepository } from "@/lib/database";

export interface CreateSessionInput {
  id: string;
  userId: string;
  deviceId: string;
  accessTokenHash: string;
  ipAddress?: string | null;
  userAgent?: string | null;
  expiresAt: Date;
}

const CURRENT_USER_SELECT = {
  id: true,
  email: true,
  role: true,
  status: true,
  firstName: true,
  lastName: true,
  phone: true,
  avatar: true,
  emailVerified: true,
  createdAt: true,
} as const;

export class SessionRepository extends BaseRepository {
  async create(data: CreateSessionInput): Promise<Session> {
    return this.prisma.session.create({ data });
  }

  async findById(id: string): Promise<Session | null> {
    return this.prisma.session.findUnique({ where: { id } });
  }

  async findByAccessTokenHash(accessTokenHash: string) {
    return this.prisma.session.findFirst({
      where: { accessTokenHash },
      include: { user: { select: CURRENT_USER_SELECT } },
    });
  }

  async findActiveById(id: string) {
    return this.prisma.session.findFirst({
      where: {
        id,
        status: SessionStatus.ACTIVE,
        revoked: false,
        expiresAt: { gt: new Date() },
      },
      include: { user: { select: CURRENT_USER_SELECT } },
    });
  }

  async findByUser(userId: string): Promise<Session[]> {
    return this.prisma.session.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
    });
  }

  async revoke(accessTokenHash: string): Promise<void> {
    await this.prisma.session.updateMany({
      where: { accessTokenHash, revoked: false },
      data: {
        revoked: true,
        revokedAt: new Date(),
        status: SessionStatus.REVOKED,
      },
    });
  }

  async revokeById(id: string): Promise<void> {
    await this.prisma.session.updateMany({
      where: { id, revoked: false },
      data: {
        revoked: true,
        revokedAt: new Date(),
        status: SessionStatus.REVOKED,
      },
    });
  }

  async revokeAll(userId: string): Promise<void> {
    await this.prisma.session.updateMany({
      where: { userId, revoked: false },
      data: {
        revoked: true,
        revokedAt: new Date(),
        status: SessionStatus.REVOKED,
      },
    });
  }

  async deleteExpired(): Promise<void> {
    await this.prisma.session.deleteMany({
      where: { expiresAt: { lt: new Date() } },
    });
  }
}

export const sessionRepository = new SessionRepository();
