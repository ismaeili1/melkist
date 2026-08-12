import { NextResponse } from "next/server";

import { authController } from "@/lib/auth";

export async function GET() {
  const user =
    await authController.currentUser();

  if (!user) {
    return NextResponse.json(
      {
        message: "Unauthorized",
      },
      {
        status: 401,
      },
    );
  }

  return NextResponse.json(user);
}