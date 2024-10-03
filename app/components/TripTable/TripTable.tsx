import SectionWrapper from "@/app/utils/SectionWrapper";
import TableFooter from "../TableFooter/TableFooter";
import Status from "@/app/utils/Status";
import { SearchParams, StatusType, Trip } from "@/types";
import TripControls from "./TripControls";
import { calculateTATStatus } from "@/app/utility-functions/getTatStatus";
import TableHeader from "../TableHeader/TableHeader";
import { getTrips } from "@/app/services/tripService";

export default async function TripTable({
  searchParams,
  totalCount,
}: {
  searchParams: SearchParams;
  totalCount: number;
}) {
  const { page = 1, resultsPerPage = 10 } = searchParams || {};
  const trips = await getTrips(Number(page), Number(resultsPerPage));

  return (
    <SectionWrapper className="border-borderColor border-[1px] rounded-[8px]">
      <div className="overflow-y-scroll overflow-x-auto h-[500px]">
        <div className="flex items-center justify-between px-[20px]">
          <h3 className="text-fs-16 font-bold py-[12px]">Trip List</h3>
          <TripControls />
        </div>
        <table className="min-w-full table-auto text-fs-12">
          <TableHeader />
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
        </table>
      </div>
      <TableFooter
        totalCount={totalCount}
        currentPage={Number(page)}
        resultsPerPage={Number(resultsPerPage)}
      />
    </SectionWrapper>
  );
}
