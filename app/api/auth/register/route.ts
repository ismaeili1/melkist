import { NextRequest, NextResponse } from "next/server";

import { authController } from "@/lib/auth";

export async function POST(
  request: NextRequest,
) {
  try {
    const body =
      await request.json();

    const user =
      await authController.register(
        body,
      );

    return NextResponse.json(
      user,
      {
        status: 201,
      },
    );
  } catch (error) {
    return NextResponse.json(
      {
        message:
          error instanceof Error
            ? error.message
            : "Registration failed.",
      },
      {
        status: 400,
      },
    );
  }
}