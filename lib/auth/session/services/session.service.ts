import { sessionRepository } from "@/lib/auth/session/repositories";

export class SessionService {

  async removeExpiredSessions() {

    await sessionRepository.deleteExpired();

  }

  async revokeUserSessions(
    userId: string,
  ) {

    await sessionRepository.revokeAll(
      userId,
    );

  }

}

export const sessionService =
  new SessionService();
