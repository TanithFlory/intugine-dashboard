import { Trip, TripStats } from "@/types";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

async function getHeaders() {
  const session = await getServerSession(authOptions);
  const accessToken = (session as any)?.accessToken;

  if (!accessToken) redirect("/login");
  
  /* need to include cookies for getToken to work on server-side */
  return {
    "Content-Type": "application/json",
    authorization: `Bearer ${accessToken}`,
    Cookie: cookies().toString(),
  };
}

export async function getDelayedStats(): Promise<number> {
  try {
    const res = await fetch(
      `${process.env.NEXT_BASE_URL}/api/trips/get-stats/delayed`,
      {
        method: "GET",
        cache: "no-store",
        headers: await getHeaders(),
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
    if (isNaN(Number(page)) && isNaN(Number(resultsPerPage))) {
      throw new Error("Page and results per page aren't numbers.");
    }

    const res = await fetch(
      `${
        process.env.NEXT_BASE_URL
      }/api/trips/get-trips?page=${page}&resultsPerPage=${resultsPerPage}&filter=${filter}&order=${order}&counter=${
        counter || ""
      }`,
      {
        method: "GET",
        cache: "no-cache",
        headers: await getHeaders(),
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch trips: ${res.statusText}`);
    }

    const json = await res.json();
    return json.data?.trips || [];
  } catch (error) {
    console.error("Error fetching trips:", error);
    return [];
  }
}

export async function getStats(): Promise<TripStats | null> {
  try {
    const res = await fetch(
      `${process.env.NEXT_BASE_URL}/api/trips/get-stats`,
      {
        method: "GET",
        cache: "no-store",
        headers: await getHeaders(),
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
