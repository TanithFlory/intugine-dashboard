import { HTMLAttributes } from "react";

export interface Wrapper extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export type StatusType = "On Time" | "Delayed" | "Other";
