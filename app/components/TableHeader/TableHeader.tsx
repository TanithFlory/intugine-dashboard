"use client"
import Link from "next/link";
import TableHeaderTitle from "../TableHeaderTitle/TableHeaderTitle";
import tripColumns from "./tripColumns";
import { Trip } from "@/types";
import { useTripContext } from "@/app/context/TripContext";
import { ChangeEvent } from "react";

type TableHeader = {
  currentPage: number;
  resultsPerPage: number;
  order: string;
  trips: Trip[];
};

export default function TableHeader({
  currentPage,
  resultsPerPage,
  order,
  trips,
}: TableHeader) {
  const { setSelectedTripIds } = useTripContext();

  function selectAllTrips(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.checked) {
      const allTripIds = trips?.map((trip) => trip.tripId);
      setSelectedTripIds(allTripIds);
    } else {
      setSelectedTripIds([]);
    }
  }

  return (
    <div className="bg-[#F8F8F8] ">
      <div className="text-left h-[44px] flex items-center gap-4">
        {tripColumns.map((column, index) => {
          if (column.identifier === "checkbox")
            return (
              <div
                key={index}
                className="w-[50px] flex items-center justify-center"
              >
                <input
                  type="checkbox"
                  className="w-[16px] h-[16px]"
                  onChange={selectAllTrips}
                />
              </div>
            );
          return (
            <Link
              key={index}
              className="flex items-center gap-1"
              href={`/?page=${currentPage}&resultsPerPage=${resultsPerPage}&filter=${
                column.identifier
              }&order=${order === "asc" ? "desc" : "asc"}`}
            >
              <TableHeaderTitle {...column} key={index} order={order} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
