import { SearchParams } from "@/types";
import Navbar from "./components/Navbar/Navbar";
import Statistics from "./components/Statistics/Statistics";
import TripTable from "./components/TripTable/TripTable";
import { AuthProvider } from "./context/AuthProvider";

export default function Home({ searchParams }: { searchParams: SearchParams }) {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <Statistics />
        <TripTable searchParams={searchParams} />
      </AuthProvider>
    </>
  );
}
