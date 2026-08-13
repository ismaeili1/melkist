import { redirect } from "next/navigation";

import { UserRole } from "@prisma/client";

import { getAuthContext } from "@/lib/auth/context/auth-context";
export async function requireRole(
  roles: UserRole[],
) {

const user = await getAuthContext();
  if (!user) {
    redirect("/login");
  }

  if (!roles.includes(user.role)) {
    redirect("/");
  }

  return user;
}