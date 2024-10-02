import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import trips from "./dummy-trips";
const prisma = new PrismaClient();

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const resposne = await prisma.trip.createMany({
      data: trips,
    });


    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "R" }, { status: 500 });
  }
}
