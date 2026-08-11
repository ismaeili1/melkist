import jwt from "jsonwebtoken";

import { JwtPayload } from "./jwt-payload";

import {
  ACCESS_TOKEN_EXPIRES,
  AUDIENCE,
  ISSUER,
} from "./jwt.constants";

export function signAccessToken(
  payload: JwtPayload,
): string {

  return jwt.sign(payload, process.env.JWT_ACCESS_SECRET!, {
    expiresIn: ACCESS_TOKEN_EXPIRES,
    issuer: ISSUER,
    audience: AUDIENCE,
  });

}
