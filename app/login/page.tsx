"use client";
import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import { redirect } from "next/navigation";

export default function Page() {
  const { status } = useSession();

  useEffect(() => {
    if (status === "loading") return; 
    if (status === "authenticated") {
      redirect("/");
    } else {
      signIn("keycloak");
    }
  }, []);

  return null; 
}
