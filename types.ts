import { HTMLAttributes } from "react";

export interface Wrapper extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export type SearchParams = { [key: string]: string | string[] | undefined };

export type StatusType = "On Time" | "Delayed" | "Other";

export type TripStatus =
  | "Booked"
  | "In Transit"
  | "Reached Destination"
  | "Delivered"
  | "Update Status";

export type Transporter =
  | "Bluedart"
  | "DHL"
  | "Delivery"
  | "DTDC"
  | "Gati"
  | "Safexpress";

export interface AddTripForm {
  tripId: string;
  transporter: Transporter | "";
  source: string;
  dest: string;
  phoneNumber: number;
}

export type CloseModalType = any;

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

export type PaginationStats = {
  totalCount: number;
  resultsPerPage: number;
  currentPage: number;
};

export type TripStats = {
  totalCount: number;
  inTransitCount: number;
  deliveredCount: number;
};
