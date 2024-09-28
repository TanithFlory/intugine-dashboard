import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import Statistics from "./components/Statistics/Statistics";

export default function Home() {
  return (
    <>
      <Navbar />
      <Statistics />
    </>
  );
}
