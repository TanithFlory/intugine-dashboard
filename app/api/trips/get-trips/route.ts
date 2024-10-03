import { Prisma, PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function GET(req: NextRequest, _res: NextResponse) {
  try {
    const { searchParams } = new URL(req.url as string);
    const page = Number(searchParams.get("page"));
    const resultsPerPage = Number(searchParams.get("resultsPerPage"));

    if (isNaN(page) && isNaN(resultsPerPage))
      return NextResponse.json({ message: "Error" }, { status: 404 });

    const trips = await prisma.trip.findMany({
      take: resultsPerPage,
      skip: (page - 1) * resultsPerPage,
    });
    const sortedTrips = trips.sort((a, b) => {
      if (a.currentStatus === "Delivered" && b.currentStatus !== "Delivered")
        return -1;
      if (a.currentStatus !== "Delivered" && b.currentStatus === "Delivered")
        return 1;
      return 0;
    });
    
    return NextResponse.json(
      {
        data: {
          trips: JSONParseBigInt(sortedTrips),
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
