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
  const [keycloak, setKeycloak] = useState(false);
  const isAuthenticated = status === "authenticated";
  const router = useRouter();

  async function isKeycloakAvailable() {
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_KEYCLOAK_ISSUER!);
      if (response.ok) {
        setKeycloak(true);
      }
    } catch (error) {
      console.error("Keycloak server is not available:", error);
      setKeycloak(false);
    }
  }

  useEffect(() => {
    isKeycloakAvailable();
    
    if (!keycloak) return;

    if (status === "unauthenticated") {
      signIn("keycloak");
    }
  }, [status, router, keycloak]);

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
