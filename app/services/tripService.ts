// services/tripService.ts

import { Trip } from "@/types";

export async function getDelayedStats(): Promise<number> {
  try {
    const res = await fetch(
      `${process.env.NEXT_BASE_URL}/api/trips/get-stats/delayed`,
      {
        method: "GET",
        cache: "default",
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
  page: number = 1,
  resultsPerPage: number = 10
): Promise<Trip[]> {
  try {
    if (!isNaN(Number(page)) && !isNaN(Number(resultsPerPage))) {
      const res = await fetch(
        `${process.env.NEXT_BASE_URL}/api/trips/get-trips?page=${page}&resultsPerPage=${resultsPerPage}`,
        {
          method: "GET",
          cache: "no-store",
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
