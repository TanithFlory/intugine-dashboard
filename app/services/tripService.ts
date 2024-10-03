// services/tripService.ts

import { Trip } from "@/types";
import { cookies } from "next/headers";
import { getAccessToken } from "../utility-functions/getAccessToken";

export async function getDelayedStats(): Promise<number> {
  const accessToken = getAccessToken();
  try {
    const res = await fetch(
      `${process.env.NEXT_BASE_URL}/api/trips/get-stats/delayed`,
      {
        method: "GET",
        cache: "no-store",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    if (!res.ok) {
      throw new Error(`Failed to fetch delayed stats: ${res.statusText}`);
    }
    const json = await res.json();
    return json.data.delayedCount;
  } catch (error) {
    console.error("Error fetching delayed stats:", error);
    return 0;
  }
}

export async function getTrips(
  page: number,
  resultsPerPage: number,
  filter: string,
  order: string
): Promise<Trip[]> {
  try {
    const accessToken = getAccessToken();
    if (!isNaN(Number(page)) && !isNaN(Number(resultsPerPage))) {
      const res = await fetch(
        `${process.env.NEXT_BASE_URL}/api/trips/get-trips?page=${page}&resultsPerPage=${resultsPerPage}&filter=${filter}&order=${order}`,
        {
          method: "GET",
          cache: "no-store",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (!res.ok) {
        throw new Error(`Failed to fetch trips: ${res.statusText}`);
      }
      const json = await res.json();
      return json.data?.trips || [];
    }
    return [];
  } catch (error) {
    console.error("Error fetching trips:", error);
    return [];
  }
}
