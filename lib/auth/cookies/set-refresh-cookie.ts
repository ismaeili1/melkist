import { cookies } from "next/headers";

import {
  REFRESH_COOKIE,
} from "./cookie.constants";

import {
  RefreshCookieOptions,
} from "./cookie.options";

export async function setRefreshCookie(
  token: string,
) {
  const cookieStore = await cookies();

  cookieStore.set(
    REFRESH_COOKIE,
    token,
    RefreshCookieOptions,
  );
}
