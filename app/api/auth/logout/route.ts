import { NextResponse } from "next/server";

import { authController } from "@/lib/auth";

export async function POST() {
  await authController.logout();

  return NextResponse.json({
    success: true,
  });
}