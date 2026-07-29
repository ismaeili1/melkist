import { cookies } from "next/headers";

import {
  SESSION_COOKIE_NAME,
} from "./session.constants";

export async function destroySession(): Promise<void> {
  const cookieStore = await cookies();

  cookieStore.delete(
    SESSION_COOKIE_NAME,
  );
}