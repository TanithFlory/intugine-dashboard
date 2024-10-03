"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface TripContextType {
  selectedTripIds: string[];
  setSelectedTripIds: React.Dispatch<React.SetStateAction<string[]>>;
}

const TripContext = createContext<TripContextType | undefined>(undefined);

export const TripProvider = ({ children }: { children: ReactNode }) => {
  const [selectedTripIds, setSelectedTripIds] = useState<string[]>([]);

  return (
    <TripContext.Provider value={{ selectedTripIds, setSelectedTripIds }}>
      {children}
    </TripContext.Provider>
  );
};

export const useTripContext = () => {
  const context = useContext(TripContext);
  if (!context) {
    throw new Error("useTripContext must be used within a TripProvider");
  }
  return context;
};
