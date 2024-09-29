"use client";
import PaginationArrows from "@/app/utils/PaginationArrows";
import { useState } from "react";

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <div className="flex items-center text-black">
      <PaginationArrows />
      {[1, 2, 3, 4, 5, "...", 20].map((item, index) => {
        return (
          <div
            className={`h-[24px] w-[24px] rounded-[4px] flex items-center justify-center ${
              currentPage === index ? "bg-buttonColor text-white" : ""
            }`}
            key={index}
          >
            {item}
          </div>
        );
      })}
      <PaginationArrows className="rotate-180 mr-4" />
    </div>
  );
}
