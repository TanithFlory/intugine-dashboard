"use client";
import federatedLogout from "@/app/utility-functions/federatedLogout";
import { signIn } from "next-auth/react";

export default function Navbar() {
  return (
    <nav className="bg-primary w-screen h-[64px] py-[16px] px-[24px]">
      <button onClick={() => signIn("keycloak")}>Login</button>
      <button onClick={() => federatedLogout()}>Logout</button>
    </nav>
  );
}
