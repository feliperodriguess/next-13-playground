import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const page = request.nextUrl.pathname;

  if (page === "/") {
    return NextResponse.redirect(new URL("/dashboard", request.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|favicon.ico|manifest.json|logo|images|vendor).*)",
  ],
};
