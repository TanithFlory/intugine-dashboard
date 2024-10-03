import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { getRandomizedTripData } from "./getRandomizedData";
const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const { tripId, transporter, phoneNumber, source, dest } = data;

    const existingTrip = await prisma.trip.findFirst({
      where: {
        tripId,
      },
    });

    if (existingTrip) {
      return NextResponse.json(
        { message: "Trip already exists" },
        { status: 409 }
      );
    }

    await prisma.trip.create({
      data: {
        tripId,
        transporter,
        phoneNumber,
        source,
        dest,
        currentStatus: "Booked",
        currentStatusCode: "B",
        ...getRandomizedTripData(),
      },
    });

    return NextResponse.json(
      { message: "Successfully added trip." },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
