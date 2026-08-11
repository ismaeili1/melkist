import {
  NextRequest,
  NextResponse,
} from "next/server";

import {
  ACCESS_COOKIE,
} from "@/lib/auth/cookies";

const PROTECTED = [
  "/dashboard",
  "/favorites",
  "/saved-searches",
  "/profile",
  "/property/create",
];

const AUTH_ONLY = [
  "/login",
  "/register",
];

const securityHeaders: Record<string, string> = {
  "X-DNS-Prefetch-Control": "on",
  "X-Frame-Options": "DENY",
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
  "Cross-Origin-Opener-Policy": "same-origin",
  "Cross-Origin-Resource-Policy": "same-origin",
};

export function proxy(
  request: NextRequest,
) {
  const pathname =
    request.nextUrl.pathname;

  const accessToken =
    request.cookies.get(
      ACCESS_COOKIE,
    );

  const isLoggedIn =
    !!accessToken;

  if (
    PROTECTED.some(
      (route) =>
        pathname === route ||
        pathname.startsWith(`${route}/`),
    ) &&
    !isLoggedIn
  ) {
    return NextResponse.redirect(
      new URL("/login", request.url),
    );
  }

  if (
    AUTH_ONLY.some(
      (route) =>
        pathname === route ||
        pathname.startsWith(`${route}/`),
    ) &&
    isLoggedIn
  ) {
    return NextResponse.redirect(
      new URL("/dashboard", request.url),
    );
  }

  const response =
    NextResponse.next();

  for (
    const [key, value]
    of Object.entries(securityHeaders)
  ) {
    response.headers.set(
      key,
      value,
    );
  }

  return response;
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/favorites/:path*",
    "/saved-searches/:path*",
    "/profile/:path*",
    "/property/create/:path*",
    "/login",
    "/register",
  ],
};
