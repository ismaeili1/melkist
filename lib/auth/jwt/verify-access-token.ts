import jwt from "jsonwebtoken";

import { JwtPayload } from "./jwt-payload";

export function verifyAccessToken(
  token: string,
): JwtPayload {

  return jwt.verify(
    token,
    process.env.JWT_ACCESS_SECRET!,
  ) as JwtPayload;

}
