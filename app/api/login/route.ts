import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
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

    if (json?.error) {
      return NextResponse.json({ message: "Invalid credentials" });
    }

    cookies().set("accessToken", json.access_token, {
      path: "/",
      httpOnly: true,
    });

    return NextResponse.json({ message: "Successful" });
  } catch (error) {
    console.log(error);
  }
}
