import { cookies } from "next/headers";

import {
  ACCESS_COOKIE,
  REFRESH_COOKIE,
} from "./cookie.constants";

export async function getAuthCookies() {
  const cookieStore = await cookies();

  const access = cookieStore.get(
    ACCESS_COOKIE,
  );

  const refresh = cookieStore.get(
    REFRESH_COOKIE,
  );

  return {
    access,
    refresh,
  };
}
