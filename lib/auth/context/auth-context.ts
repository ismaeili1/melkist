import { cache } from "react";

import { getCurrentUser } from "@/lib/auth/session";

export const getAuthContext = cache(async () => {
  return await getCurrentUser();
});
