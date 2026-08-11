import {
  cookies,
} from "next/headers";

import {
  NextResponse,
} from "next/server";

import {
  REFRESH_COOKIE,
} from "@/lib/auth/cookies";

import {
  renewAccessToken,
} from "@/lib/auth/refresh-token/services";

export async function POST() {
  try {
    const cookieStore =
      await cookies();

    const refreshToken =
      cookieStore.get(
        REFRESH_COOKIE,
      )?.value;

    if (!refreshToken) {
      return NextResponse.json(
        {
          message:
            "Refresh token is required.",
        },
        {
          status: 401,
        },
      );
    }

    const result =
      await renewAccessToken(
        refreshToken,
      );

    return NextResponse.json(
      {
        success: true,
        sessionId:
          result.sessionId,
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    return NextResponse.json(
      {
        message:
          error instanceof Error
            ? error.message
            : "Token renewal failed.",
      },
      {
        status: 401,
      },
    );
  }
}
