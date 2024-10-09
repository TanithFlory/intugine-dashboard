"use client";

import { AuthProvider } from "./AuthProvider";

import { SessionProvider } from "next-auth/react";

export function SessionProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <AuthProvider>{children}</AuthProvider>
    </SessionProvider>
  );
}
