import { StatusType } from "@/types";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { tripStatus, dateTime, tripIds } = await req.json();

    await Promise.all(
      tripIds.map((tripId: string) =>
        prisma.trip.update({
          where: { tripId: tripId },
          data: {
            currentStatus: tripStatus.replace(" ", "_"),
            lastPingTime: new Date(dateTime),
            currentStatusCode: (currentStatusCodes as any)[tripStatus],
          },
        })
      )
    );

    return NextResponse.json({ message: "Trips updated successfully" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to update trips" },
      { status: 500 }
    );
  }
}

const currentStatusCodes = {
  Booked: "B",
  "In Transit": "IT",
  "Reached Destination": "RD",
  Delivered: "D",
};
