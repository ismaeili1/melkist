import { NextResponse } from "next/server";

import {
  UnauthorizedError,
  ForbiddenError,
} from "@/lib/auth/errors/auth.errors";

export function handleApiError(error: unknown) {
  if (error instanceof UnauthorizedError) {
    return NextResponse.json(
      { message: error.message },
      { status: 401 },
    );
  }

  if (error instanceof ForbiddenError) {
    return NextResponse.json(
      { message: error.message },
      { status: 403 },
    );
  }

  return NextResponse.json(
    { message: "Internal Server Error" },
    { status: 500 },
  );
}