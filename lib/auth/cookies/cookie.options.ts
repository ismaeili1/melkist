import {
  ACCESS_COOKIE_PATH,
  ACCESS_MAX_AGE,
  REFRESH_COOKIE_PATH,
  REFRESH_MAX_AGE,
} from "./cookie.constants";

const isProduction = process.env.NODE_ENV === "production";

export const AccessCookieOptions = {
  httpOnly: true,
  secure: isProduction,
  sameSite: "lax" as const,
  path: ACCESS_COOKIE_PATH,
  maxAge: ACCESS_MAX_AGE,
};

export const RefreshCookieOptions = {
  httpOnly: true,
  secure: isProduction,
  sameSite: "strict" as const,
  path: REFRESH_COOKIE_PATH,
  maxAge: REFRESH_MAX_AGE,
};
