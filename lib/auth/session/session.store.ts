import type { UserSession } from "./session.types";

let currentSession: UserSession | null = null;

export function setSession(
  session: UserSession,
) {
  currentSession = session;
}

export function getStoredSession() {
  return currentSession;
}

export function clearSession() {
  currentSession = null;
}