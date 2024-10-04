import SectionWrapper from "@/app/utils/SectionWrapper";
import TableFooter from "../TableFooter/TableFooter";
import { SearchParams } from "@/types";
import TripControls from "./TripControls";
import TableHeader from "../TableHeader/TableHeader";
import { getTrips } from "@/app/services/tripService";
import TableBody from "../TableBody/TableBody";
import { TripProvider } from "@/app/context/TripContext";

export default async function TripTable({
  searchParams,
  totalCount,
}: {
  searchParams: SearchParams;
  totalCount: number;
}) {
  const {
    page = 1,
    resultsPerPage = 10,
    filter = "currentStatus",
    order = "asc",
  } = searchParams || {};
  const trips = await getTrips(
    Number(page),
    Number(resultsPerPage),
    filter as string,
    order as string
  );

  return (
    <TripProvider>
      <SectionWrapper className="border-borderColor border-[1px] rounded-[8px]">
        <div className="">
          <div className="flex items-center justify-between px-[20px]">
            <h3 className="text-fs-16 font-bold py-[12px]">Trip List</h3>
            <TripControls />
          </div>
          <TableHeader
            currentPage={Number(page)}
            resultsPerPage={Number(resultsPerPage)}
            order={order as string}
            trips={trips}
          />
          <div className="overflow-y-scroll overflow-x-auto h-[500px]">
            <table className="min-w-full table-auto text-fs-12 ">
              <TableBody trips={trips} />
            </table>
          </div>
        </div>
        <TableFooter
          totalCount={totalCount}
          currentPage={Number(page)}
          resultsPerPage={Number(resultsPerPage)}
        />
      </SectionWrapper>
    </TripProvider>
  );
}
