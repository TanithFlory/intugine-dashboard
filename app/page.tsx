import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import Statistics from "./components/Statistics/Statistics";
import TripTable from "./components/TripTable/TripTable";
import AddTrip from "./components/AddTrip/AddTrip";

export default function Home() {
  return (
    <>
      <Navbar />
      <Statistics />
      <TripTable />
    </>
  );
}
