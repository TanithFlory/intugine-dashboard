"use client";
import { useTripContext } from "@/app/context/TripContext";
import { calculateTATStatus } from "@/app/utility-functions/getTatStatus";
import Status from "@/app/utils/Status";
import { StatusType, Trip } from "@/types";

export default function TableBody({ trips }: { trips: Trip[] }) {
  const { setSelectedTripIds } = useTripContext();
  function handleCheckboxChange(tripId: string) {
    setSelectedTripIds((prevIds: string[]) => {
      if (prevIds.includes(tripId)) {
        return prevIds.filter((id) => id !== tripId);
      } else {
        return [...prevIds, tripId];
      }
    });
  }
  return (
    <tbody className="gap-4 font-sans">
      {trips.map((trip: Trip, rowIndex: number) => {
        const {
          tripId,
          transporter,
          source,
          dest,
          phoneNumber,
          etaDays,
          distanceRemaining,
          currentStatus,
          tripEndTime,
          lastPingTime,
          tripStartTime,
        } = trip;
        return (
          <tr
            key={rowIndex}
            className="border-t h-[44px] flex gap-4 items-center"
          >
            <td className="w-[50px] flex items-center justify-center">
              <input
                type="checkbox"
                className="w-[16px] accent-black h-[16px]"
                onChange={() => handleCheckboxChange(tripId)}
              />
            </td>
            <td className="w-[112px]">{tripId}</td>
            <td className="w-[100px]">{transporter}</td>
            <td className="w-[128px]">{source}</td>
            <td className="w-[128px]">{dest}</td>
            <td className="w-[80px]">{phoneNumber}</td>
            <td className="w-[105px]">{etaDays}</td>
            <td className="w-[136px]">{distanceRemaining}</td>
            <td className="w-[118px]">
              <Status status={currentStatus as StatusType} />
            </td>
            <td className="w-[104px]">
              <Status
                status={
                  calculateTATStatus(
                    etaDays,
                    tripEndTime,
                    lastPingTime,
                    tripStartTime
                  ) as StatusType
                }
              />
            </td>
          </tr>
        );
      })}
    </tbody>
  );
}
