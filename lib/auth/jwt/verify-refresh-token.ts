import jwt from "jsonwebtoken";

import { JwtPayload } from "./jwt-payload";

import {
  AUDIENCE,
  ISSUER,
} from "./jwt.constants";

export function verifyRefreshToken(
  token: string,
): JwtPayload {
  return jwt.verify(
    token,
    process.env.JWT_REFRESH_SECRET!,
    {
      issuer: ISSUER,
      audience: AUDIENCE,
    },
  ) as JwtPayload;
}
