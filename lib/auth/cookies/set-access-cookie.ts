import { cookies } from "next/headers";

import {
  ACCESS_COOKIE,
} from "./cookie.constants";

import {
  AccessCookieOptions,
} from "./cookie.options";

export async function setAccessCookie(
  token: string,
) {
  const cookieStore = await cookies();

  cookieStore.set(
    ACCESS_COOKIE,
    token,
    AccessCookieOptions,
  );
}
