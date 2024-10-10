"use client";
import federatedLogout from "@/app/utility-functions/federatedLogout";

export default function Navbar() {
  return (
    <nav className="bg-primary w-screen h-[64px] py-[16px] px-[24px] flex justify-end items-center text-fs-12">
      <button
        className="bg-white text-buttonColor mx-2 px-4 py-2 rounded"
        onClick={() => federatedLogout()}
      >
        Logout
      </button>
    </nav>
  );
}
