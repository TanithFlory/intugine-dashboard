import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export function getAccessToken() {
  return "abc";
  const cookieStore = cookies();

  const accessToken = cookieStore.get("accessToken")?.value;
  if (!accessToken) {
    redirect("/login");
  }
  return accessToken;
}
