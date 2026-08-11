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

export interface SessionListItem {
  id: string;
  deviceName: string | null;
  deviceType: string;
  browser: string | null;
  os: string | null;
  platform: string | null;
  city: string | null;
  country: string | null;
  lastActivityAt: Date | null;
  createdAt: Date;
  expiresAt: Date;
  isCurrent: boolean;
}
