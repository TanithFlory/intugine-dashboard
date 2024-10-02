import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function GET() {
  try {
    const totalCount = await prisma.trip.count();
    const inTransitCount = await prisma.trip.count({
      where: { currentStatus: "In_Transit" },
    });
    const deliveredCount = await prisma.trip.count({
      where: { currentStatus: "Delivered" },
    });
    return NextResponse.json(
      {
        data: {
          totalCount,
          deliveredCount,
          inTransitCount,
        },
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
