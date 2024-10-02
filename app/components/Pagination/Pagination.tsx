import PaginationArrows from "@/app/utils/PaginationArrows";
import { PaginationStats } from "@/types";
import Link from "next/link";
import { generatePaginationItems } from "./generatePagination";

export default function Pagination({
  currentPage,
  resultsPerPage,
  totalCount,
}: PaginationStats) {
  console.log(totalCount,resultsPerPage);
  const paginationItems = generatePaginationItems(totalCount, resultsPerPage);
  return (
    <div className="flex items-center text-black">
      <PaginationArrows />
      {paginationItems.map((item, index) => {
        return (
          <Link
            className={`h-[24px] w-[24px] rounded-[4px] flex items-center justify-center ${
              currentPage === index + 1 ? "bg-buttonColor text-white" : ""
            }`}
            key={index}
            href={`/?page=${item}&resultsPerPage=${resultsPerPage}`}
          >
            {item}
          </Link>
        );
      })}
      <PaginationArrows className="rotate-180 mr-4" />
    </div>
  );
}
