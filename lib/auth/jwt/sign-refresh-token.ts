import jwt from "jsonwebtoken";

import { JwtPayload } from "./jwt-payload";

import {
  REFRESH_TOKEN_EXPIRES,
  AUDIENCE,
  ISSUER,
} from "./jwt.constants";

export function signRefreshToken(
  payload: JwtPayload,
): string {

  return jwt.sign(payload, process.env.JWT_REFRESH_SECRET!, {
    expiresIn: REFRESH_TOKEN_EXPIRES,
    issuer: ISSUER,
    audience: AUDIENCE,
  });

}
