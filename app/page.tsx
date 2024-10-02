import { SearchParams } from "@/types";
import Navbar from "./components/Navbar/Navbar";
import Statistics from "./components/Statistics/Statistics";
import TripTable from "./components/TripTable/TripTable";
import { AuthProvider } from "./context/AuthProvider";

export default async function Home({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const res = await fetch(`${process.env.NEXT_BASE_URL}/api/trips/get-stats`, {
    method: "GET",
    cache: "no-store",
  });

  const json = await res.json();
  const { totalCount, inTransitCount, deliveredCount } = json?.data || {};

  return (
    <>
      <AuthProvider>
        <Navbar />
        <Statistics
          totalCount={totalCount}
          inTransitCount={inTransitCount}
          deliveredCount={deliveredCount}
        />
        <TripTable searchParams={searchParams} totalCount={totalCount} />
      </AuthProvider>
    </>
  );
}
