import { NextRequest, NextResponse } from "next/server";

import { authController } from "@/lib/auth";
import { validate, ValidationError, LoginSchema } from "@/lib/validation";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const input = validate(LoginSchema, body);

    const result = await authController.login(input);

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    if (error instanceof ValidationError) {
      return NextResponse.json(
        { message: "Validation failed.", details: error.details },
        { status: 422 },
      );
    }

    return NextResponse.json(
      {
        message: error instanceof Error ? error.message : "Login failed.",
      },
      { status: 400 },
    );
  }
}
