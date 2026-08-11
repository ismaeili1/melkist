import { getCurrentSession } from "../runtime/get-current-session";
import { sessionRepository } from "../repositories";
import type { SessionListItem } from "../types/session.dto";

/**
 * Lists the current user's active sessions (devices they're logged
 * in on), marking which one is the session making this request.
 * Returns an empty array if there is no valid current session.
 */
export async function listUserSessions(): Promise<SessionListItem[]> {
  const currentSession = await getCurrentSession();

  if (!currentSession) {
    return [];
  }

  const sessions = await sessionRepository.findActiveByUser(
    currentSession.userId,
  );

  return sessions.map((session) => ({
    id: session.id,
    deviceName: session.device.deviceName,
    deviceType: session.device.deviceType,
    browser: session.device.browser,
    os: session.device.os,
    platform: session.device.platform,
    city: session.device.city,
    country: session.device.country,
    lastActivityAt: session.lastActivityAt,
    createdAt: session.createdAt,
    expiresAt: session.expiresAt,
    isCurrent: session.id === currentSession.id,
  }));
}
