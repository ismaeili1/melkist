import { cookies } from "next/headers";

import type {
  UserSession,
} from "./session.types";

import {
  SESSION_COOKIE_NAME,
} from "./session.constants";

export async function getSession():
Promise<UserSession | null> {

  const cookieStore =
    await cookies();

  const cookie =
    cookieStore.get(
      SESSION_COOKIE_NAME,
    );

  if (!cookie) {
    return null;
  }

  try {
    return JSON.parse(
      cookie.value,
    ) as UserSession;
  } catch {
    return null;
  }
}