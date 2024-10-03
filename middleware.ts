import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest): Promise<NextResponse> {
  const { pathname } = req.nextUrl;
  if (!(pathname === "/api/trips")) {
    return NextResponse.next();
  }

  const authHeader = req.headers.get("Authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    const isLoginPage = req.nextUrl.pathname === "/login";
    if (!isLoginPage) {
      const response = NextResponse.redirect(new URL("/login", req.url), {
        status: 303,
      });
      response.cookies.delete("token");
      return response;
    }
  }
  return NextResponse.next();
}
