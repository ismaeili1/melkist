import { cookies } from "next/headers";

import {
  ACCESS_COOKIE,
  ACCESS_COOKIE_PATH,
  REFRESH_COOKIE,
  REFRESH_COOKIE_PATH,
} from "./cookie.constants";

export async function clearAuthCookies() {
  const cookieStore = await cookies();

  cookieStore.set(
    ACCESS_COOKIE,
    "",
    {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: ACCESS_COOKIE_PATH,
      maxAge: 0,
    },
  );

  cookieStore.set(
    REFRESH_COOKIE,
    "",
    {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: REFRESH_COOKIE_PATH,
      maxAge: 0,
    },
  );
}
