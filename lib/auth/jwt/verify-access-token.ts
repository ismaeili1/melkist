import jwt from "jsonwebtoken";

import { JwtPayload } from "./jwt-payload";

import {
  ACCESS_TOKEN_EXPIRES,
  AUDIENCE,
  ISSUER,
} from "./jwt.constants";

export function verifyAccessToken(
  token: string,
): JwtPayload {
  return jwt.verify(
    token,
    process.env.JWT_ACCESS_SECRET!,
    {
      issuer: ISSUER,
      audience: AUDIENCE,
    },
  ) as JwtPayload;
}
