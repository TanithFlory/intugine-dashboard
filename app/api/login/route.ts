import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const keycloakBaseUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8080"
    : "http://keycloak:8080";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { client_id, username, password } = data;
    const response = await fetch(
      `${keycloakBaseUrl}/realms/intugine/protocol/openid-connect/token`,
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
      return NextResponse.json(
        { message: json.error_description },
        { status: 401 }
      );
    }

    cookies().set("accessToken", json.access_token, {
      path: "/",
      httpOnly: true,
    });

    return NextResponse.json({ message: "Successful" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
