import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";

const publicRoutes = [
  "/api/auth",
  "/api/auth/signin",
  "/login",
  "/api/auth/federated-logout",
];

export async function middleware(req: NextRequest) {
  try {
    const { pathname } = req.nextUrl;
    if (publicRoutes.some((route) => pathname.startsWith(route))) {
      return NextResponse.next();
    }

    const token = await getToken({
      req,
    });
    console.log(token)
    if (!token && !publicRoutes.some((route) => pathname.startsWith(route))) {
      if (pathname.startsWith("/api")) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
      }
      const loginUrl = new URL("/login", req.url);
      return NextResponse.redirect(loginUrl);
    }
    return NextResponse.next();
  } catch (error) {
    // console.log(error);
  }
}

export const config = {
  matcher: ["/api/:path*"],
};
