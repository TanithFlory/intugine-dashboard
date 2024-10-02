import { HTMLAttributes } from "react";

export interface Wrapper extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export type StatusType = "On Time" | "Delayed" | "Other";

export type CloseModalType = React.MouseEvent<HTMLDivElement>;

export type Trip = {
  _id: string;
  tripId: string;
  transporter: string;
  tripStartTime: string; 
  currentStatusCode: string;
  currentStatus: string; 
  phoneNumber: number;
  etaDays: number;
  distanceRemaining: number;
  tripEndTime: string;
  source: string;
  sourceLatitude: number;
  sourceLongitude: number;
  dest: string;
  destLatitude: number;
  destLongitude: number;
  lastPingTime: string; 
  createdAt: string;
};
