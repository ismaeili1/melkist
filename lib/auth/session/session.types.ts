export interface UserSession {
  userId: string;
  email: string;
  role: "USER" | "AGENT" | "ADMIN";
  createdAt: Date;
}