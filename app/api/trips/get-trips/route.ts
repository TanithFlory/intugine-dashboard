import { TripStatus } from "@/types";
import { PrismaClient, Status } from "@prisma/client";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
const prisma = new PrismaClient();

const validFilters = new Map<string, boolean>([
  ["tripId", true],
  ["transporter", true],
  ["tripStartTime", true],
  ["currentStatus", true],
  ["currentStatusCode", true],
  ["phoneNumber", true],
  ["etaDays", true],
  ["distanceRemaining", true],
  ["tripEndTime", true],
  ["source", true],
  ["dest", true],
  ["lastPingTime", true],
  ["createdAt", true],
]);

const validCounters = [
  "Booked",
  "In_Transit",
  "Reached_Destination",
  "Delivered",
  "Delayed",
];

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url as string);
    const page = Number(searchParams.get("page"));
    const resultsPerPage = Number(searchParams.get("resultsPerPage"));
    let filter = searchParams.get("filter");
    const order = searchParams.get("order");
    const counter = searchParams.get("counter");
    if (filter && !validFilters.has(filter)) {
      filter = "currentStatus";
    }

    if (isNaN(page) && isNaN(resultsPerPage))
      return NextResponse.json({ message: "Error" }, { status: 404 });

    if (counter && validCounters.includes(counter)) {
      const counterTrips = await prisma.trip.findMany({
        where: {
          currentStatus: counter as Status,
        },
        take: resultsPerPage,
        skip: (page - 1) * resultsPerPage,
        orderBy: {
          createdAt: "desc",
        },
      });
      const trips = JSONParseBigInt(counterTrips);

      return NextResponse.json({ data: { trips } });
    }

    const trips = await prisma.trip.findMany({
      take: resultsPerPage,
      skip: (page - 1) * resultsPerPage,
      orderBy: { [(filter as string) || "currentStatus"]: order || "asc" },
    });

    return NextResponse.json(
      {
        data: {
          trips: JSONParseBigInt(trips),
        },
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error fetching data:", err);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

function JSONParseBigInt(obj: any) {
  return JSON.parse(
    JSON.stringify(
      obj,
      (_key, value) => (typeof value === "bigint" ? value.toString() : value) // return everything else unchanged
    )
  );
}
