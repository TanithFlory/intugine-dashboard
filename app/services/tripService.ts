// services/tripService.ts

import { PaginationStats, Trip, TripStats } from "@/types";
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
  order: string,
  counter: string
): Promise<Trip[]> {
  try {
    const accessToken = getAccessToken();
    if (!isNaN(Number(page)) && !isNaN(Number(resultsPerPage))) {
      const res = await fetch(
        `${
          process.env.NEXT_BASE_URL
        }/api/trips/get-trips?page=${page}&resultsPerPage=${resultsPerPage}&filter=${filter}&order=${order}&counter=${
          counter || ""
        }`,
        {
          method: "GET",
          cache: "no-cache",
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

export async function getStats(): Promise<TripStats | null> {
  const accessToken = getAccessToken();
  try {
    const res = await fetch(
      `${process.env.NEXT_BASE_URL}/api/trips/get-stats`,
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
      throw new Error(`Failed to fetch trip stats: ${res.statusText}`);
    }

    const json = await res.json();
    const { totalCount, inTransitCount, deliveredCount } = json?.data || {};

    return { totalCount, inTransitCount, deliveredCount };
  } catch (error) {
    console.error("Error fetching trip stats:", error);
    return null;
  }
}
