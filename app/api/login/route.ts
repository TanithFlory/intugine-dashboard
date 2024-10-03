import { PrismaClient } from "@prisma/client";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const data = await req.json();
    const { client_id, username, password } = data;
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_KEYCLOAK_BASE_URL}protocol/openid-connect/token`,
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          client_id,
          username,
          password,
          grant_type: "password",
        }),
      }
    );
    const json = await response.json();
    cookies().set("accessToken", json.access_token, {
      path: "/",
      httpOnly: true,
    });

    return NextResponse.json({ accessToken: "abc" });
  } catch (error) {
    console.log(error);
  }
}
