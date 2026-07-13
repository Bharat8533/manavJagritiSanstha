import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const token = request.cookies.get("token")?.value;

  const isAdminRoute = pathname.startsWith("/Admin");
  const isLoginPage = pathname === "/Admin/login";

  if (isAdminRoute) {
    if (isLoginPage && token) {
      return NextResponse.redirect(new URL("/Admin/dashboard", request.url));
    }

    if (!isLoginPage && !token) {
      return NextResponse.redirect(new URL("/Admin/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};

// import { NextResponse } from "next/server";

// export function middleware() {
//   return NextResponse.next();
// }
