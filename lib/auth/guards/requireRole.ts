import { redirect } from "next/navigation";

import {
  getSession,
} from "../session";

export async function requireRole(
  roles: string[],
) {
  const session =
    await getSession();

  if (!session) {
    redirect("/login");
  }

  if (
    !roles.includes(
      session.role,
    )
  ) {
    redirect("/");
  }

  return session;
}