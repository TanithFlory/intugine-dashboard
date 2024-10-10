"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { SessionProvider, signIn, useSession } from "next-auth/react"; // Import useSession
import FullScreenLoader from "../utils/FullScreenLoader";

interface AuthContextType {
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: React.ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const { status } = useSession();
  const isAuthenticated = status === "authenticated";
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      signIn("keycloak");
    }
  }, [status, router]);

  return (
    <SessionProvider>
      <AuthContext.Provider value={{ isAuthenticated }}>
        {isAuthenticated ? children : <FullScreenLoader />}
      </AuthContext.Provider>
    </SessionProvider>
  );
}

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
