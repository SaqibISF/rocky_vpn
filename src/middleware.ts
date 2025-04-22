import { NextRequest, NextResponse } from "next/server";
import { USER_COOKIE_KEY } from "./lib/constants";
import {
  DASHBOARD_PAGE_PATH,
  HOME_PAGE_PATH,
  LOGIN_PAGE_PATH,
  SIGNUP_PAGE_PATH,
} from "./lib/pathnames";

export function middleware(req: NextRequest) {
  const hasUserCookie = req.cookies.get(USER_COOKIE_KEY);

  if (req.nextUrl.pathname.includes(DASHBOARD_PAGE_PATH)) {
    if (!hasUserCookie) {
      return NextResponse.redirect(new URL(LOGIN_PAGE_PATH, req.url));
    }
  } else if (
    req.nextUrl.pathname === LOGIN_PAGE_PATH ||
    req.nextUrl.pathname === SIGNUP_PAGE_PATH
  ) {
    if (hasUserCookie) {
      return NextResponse.redirect(new URL(HOME_PAGE_PATH, req.url));
    }
  }

  NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/login", "/signup"],
};
