import { NextRequest, NextResponse } from "next/server";

import { authController } from "@/lib/auth";
import { validate, ValidationError, RegisterSchema } from "@/lib/validation";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const input = validate(RegisterSchema, body);

    const user = await authController.register(input);

    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    if (error instanceof ValidationError) {
      return NextResponse.json(
        { message: "Validation failed.", details: error.details },
        { status: 422 },
      );
    }

    return NextResponse.json(
      {
        message:
          error instanceof Error ? error.message : "Registration failed.",
      },
      { status: 400 },
    );
  }
}
