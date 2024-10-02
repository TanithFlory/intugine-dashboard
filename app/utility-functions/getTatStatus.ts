import { StatusType } from "@/types";

export function calculateTATStatus(
  etaDays: number,
  tripEndTime: string | null,
  lastPingTime: string | null,
  tripStartTime: string
): StatusType {
  if (etaDays <= 0) {
    return "Other";
  }

  let timeTaken: number;

  if (tripEndTime) {
    const endTime = new Date(tripEndTime);
    const startTime = new Date(tripStartTime);
    timeTaken =
      (endTime.getTime() - startTime.getTime()) / (1000 * 60 * 60 * 24);
    return etaDays <= timeTaken ? "On Time" : "Delayed";
  }

  if (lastPingTime) {
    const currentTime = new Date();
    const lastPing = new Date(lastPingTime);
    timeTaken =
      (currentTime.getTime() - lastPing.getTime()) / (1000 * 60 * 60 * 24);
    return etaDays <= timeTaken ? "On Time" : "Delayed";
  }

  return "Delayed";
}
