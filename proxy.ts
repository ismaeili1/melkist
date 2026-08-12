import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "@/i18n/routing";
import { ACCESS_COOKIE } from "@/lib/auth/cookies";

const intlMiddleware = createMiddleware(routing);

const PROTECTED = [
  "/dashboard",
  "/favorites",
  "/saved-searches",
  "/profile",
  "/property/create",
];

const AUTH_ONLY = ["/login", "/register"];

const securityHeaders: Record<string, string> = {
  "X-DNS-Prefetch-Control": "on",
  "X-Frame-Options": "DENY",
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
  "Cross-Origin-Opener-Policy": "same-origin",
  "Cross-Origin-Resource-Policy": "same-origin",
};

function getLocaleAndPath(pathname: string) {
  const match = pathname.match(/^\/(fa|en|ar|tr)(\/.*)?$/);

  if (match) {
    return { locale: match[1], path: match[2] || "/" };
  }

  return { locale: routing.defaultLocale, path: pathname };
}

export function proxy(request: NextRequest) {
  const { locale, path } = getLocaleAndPath(request.nextUrl.pathname);

  const accessToken = request.cookies.get(ACCESS_COOKIE);
  const isLoggedIn = !!accessToken;

  if (
    PROTECTED.some(
      (route) => path === route || path.startsWith(`${route}/`),
    ) &&
    !isLoggedIn
  ) {
    return NextResponse.redirect(new URL(`/${locale}/login`, request.url));
  }

  if (
    AUTH_ONLY.some(
      (route) => path === route || path.startsWith(`${route}/`),
    ) &&
    isLoggedIn
  ) {
    return NextResponse.redirect(
      new URL(`/${locale}/dashboard`, request.url),
    );
  }

  const response = intlMiddleware(request);

  for (const [key, value] of Object.entries(securityHeaders)) {
    response.headers.set(key, value);
  }

  return response;
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
