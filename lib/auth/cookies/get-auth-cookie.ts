import { cookies } from "next/headers";

import {
  REFRESH_COOKIE,
} from "./cookie.constants";

export async function getRefreshCookie() {
  const cookieStore = await cookies();

  return cookieStore.get(
    REFRESH_COOKIE,
  );
}
