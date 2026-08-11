import { NextResponse } from "next/server";

import {
  logoutCurrentSession,
} from "@/lib/auth/session/services/logout-current-session";

export async function POST() {
  await logoutCurrentSession();

  return NextResponse.json({
    success: true,
  });
}

