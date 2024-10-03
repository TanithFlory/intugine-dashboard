import { SearchParams } from "@/types";
import Navbar from "./components/Navbar/Navbar";
import Statistics from "./components/Statistics/Statistics";
import TripTable from "./components/TripTable/TripTable";
import { redirect } from "next/navigation";
import { getAccessToken } from "./utility-functions/getAccessToken";

export default async function Home({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const accessToken = getAccessToken();
  const res = await fetch(`${process.env.NEXT_BASE_URL}/api/trips/get-stats`, {
    method: "GET",
    cache: "no-store",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const json = await res.json();
  const { totalCount, inTransitCount, deliveredCount } = json?.data || {};
  return (
    <>
      <Navbar />
      <Statistics
        totalCount={totalCount}
        inTransitCount={inTransitCount}
        deliveredCount={deliveredCount}
      />
      <TripTable searchParams={searchParams} totalCount={totalCount} />
    </>
  );
}
