export interface SessionUser {
  id: string;
  email: string;
  role: string;
}

export interface CurrentSession {
  user: SessionUser;
  sessionId: string;
  expiresAt: Date;
}