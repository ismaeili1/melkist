import { cookies } from "next/headers";

import type {
  UserSession,
} from "./session.types";

import {
  SESSION_COOKIE_NAME,
  SESSION_DURATION,
} from "./session.constants";

export async function createSession(
  session: UserSession,
): Promise<void> {
  const cookieStore =
    await cookies();

  cookieStore.set(
    SESSION_COOKIE_NAME,
    JSON.stringify(session),
    {
      httpOnly: true,

      secure:
        process.env.NODE_ENV ===
        "production",

      sameSite: "lax",

      path: "/",

      maxAge: SESSION_DURATION,
    },
  );
}