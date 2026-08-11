import jwt from "jsonwebtoken";

import { JwtPayload } from "./jwt-payload";

export function verifyRefreshToken(
  token: string,
): JwtPayload {

  return jwt.verify(
    token,
    process.env.JWT_REFRESH_SECRET!,
  ) as JwtPayload;

}
