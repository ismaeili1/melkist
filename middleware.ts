import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const SESSION_COOKIE = "melkist_session";

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

export function middleware(
  request: NextRequest,
) {
  const pathname = request.nextUrl.pathname;

  const session =
    request.cookies.get(
      SESSION_COOKIE,
    );

  const isLoggedIn =
    !!session;

  if (
    PROTECTED.some((route) =>
      pathname.startsWith(route),
    ) &&
    !isLoggedIn
  ) {
    return NextResponse.redirect(
      new URL(
        "/login",
        request.url,
      ),
    );
  }

  if (
    AUTH_ONLY.some((route) =>
      pathname.startsWith(route),
    ) &&
    isLoggedIn
  ) {
    return NextResponse.redirect(
      new URL(
        "/dashboard",
        request.url,
      ),
    );
  }

  return NextResponse.next();
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