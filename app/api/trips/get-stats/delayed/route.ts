import { calculateTATStatus } from "@/app/utility-functions/getTatStatus";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function GET() {
  try {
    const trips = await prisma.trip.findMany();
    let delayedCount = 0;
    for (let { etaDays, tripEndTime, lastPingTime, tripStartTime } of trips) {
      const status = calculateTATStatus(
        etaDays,
        tripEndTime,
        lastPingTime,
        tripStartTime
      );
      if (status === "Delayed") delayedCount++;
    }

    return NextResponse.json(
      {
        data: { delayedCount },
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
