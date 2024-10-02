import SectionWrapper from "@/app/utils/SectionWrapper";
import TableFooter from "../TableFooter/TableFooter";
import Status from "@/app/utils/Status";
import { StatusType, Trip } from "@/types";
import TripControls from "./TripControls";
import { calculateTATStatus } from "@/app/utility-functions/getTatStatus";
import tripColumns from "./tripColumns";

export default async function TripTable() {
  const res = await fetch("http://localhost:3000/api/trips/get-trips", {
    method: "GET",
  });

  const json = await res.json();

  const trips = json.data?.trips || [];

  return (
    <SectionWrapper>
      <div className="overflow-x-auto border-borderColor border-[1px] rounded-[8px]">
        <div className="flex items-center justify-between px-[20px]">
          <h3 className="text-fs-16 font-bold py-[12px]">Trip List</h3>
          <TripControls />
        </div>
        <table className="min-w-full table-auto text-fs-12">
          <thead className="bg-[#F8F8F8] ">
            <tr className="text-left h-[44px] flex items-center gap-4">
              {tripColumns.map((column, index) => (
                <th
                  key={index}
                  className={`box-border ${column.width} ${
                    index === 0 ? "flex items-center justify-center" : ""
                  }`}
                >
                  {index === 0 ? (
                    <input
                      type="checkbox"
                      className="w-[16px] bg-[#FFFFFF] h-[16px]"
                    />
                  ) : (
                    column.label
                  )}
                </th>
              ))}
            </tr>
          </thead>
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
                    />
                  </td>
                  <td className="w-[112px]">{tripId}</td>
                  <td className="w-[100px]">{transporter}</td>
                  <td className="w-[128px]">{source}</td>
                  <td className="w-[128px]">{dest}</td>
                  <td className="w-[80px]">{phoneNumber}</td>
                  <td className="w-[112px]">{etaDays}</td>
                  <td className="w-[120px]">{distanceRemaining}</td>
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
          <TableFooter />
        </table>
      </div>
    </SectionWrapper>
  );
}
