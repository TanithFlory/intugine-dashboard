import { SearchParams } from "@/types";
import Navbar from "./components/Navbar/Navbar";
import Statistics from "./components/Statistics/Statistics";
import TripTable from "./components/TripTable/TripTable";
import { getStats } from "./services/tripService";

export default async function Home({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const {
    totalCount = 0,
    inTransitCount = 0,
    deliveredCount = 0,
  } = (await getStats()) || {};
  return (
    <>
      <Navbar />
      <Statistics
        totalCount={totalCount}
        inTransitCount={inTransitCount}
        deliveredCount={deliveredCount}
        searchParams={searchParams}
      />
      <TripTable searchParams={searchParams} totalCount={totalCount} />
    </>
  );
}
