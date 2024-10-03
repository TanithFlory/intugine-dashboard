import { Prisma, PrismaClient } from "@prisma/client";
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

export async function GET(req: NextRequest, _res: NextResponse) {
  try {
    const { searchParams } = new URL(req.url as string);
    const page = Number(searchParams.get("page"));
    const resultsPerPage = Number(searchParams.get("resultsPerPage"));
    let filter = searchParams.get("filter");
    const order = searchParams.get("order");

    if (filter && !validFilters.has(filter)) {
      filter = "currentStatus";
    }

    if (isNaN(page) && isNaN(resultsPerPage))
      return NextResponse.json({ message: "Error" }, { status: 404 });

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
