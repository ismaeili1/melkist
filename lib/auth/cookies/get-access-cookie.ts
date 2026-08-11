import { cookies } from "next/headers";

import {
  ACCESS_COOKIE,
} from "./cookie.constants";

export async function getAccessCookie() {
  const cookieStore =
    await cookies();

  return cookieStore.get(
    ACCESS_COOKIE,
  );
}
