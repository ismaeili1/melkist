import { NextResponse } from "next/server";
import { listUserSessions } from "@/lib/auth/session/services/list-user-sessions";

export async function GET() {
  const sessions = await listUserSessions();

  return NextResponse.json(sessions);
}
