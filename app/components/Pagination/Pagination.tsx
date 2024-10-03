import PaginationArrows from "@/app/utils/PaginationArrows";
import { PaginationStats } from "@/types";
import Link from "next/link";
import { generatePaginationItems } from "./generatePagination";

export default function Pagination({
  currentPage,
  resultsPerPage,
  totalCount,
}: PaginationStats) {
  const paginationItems = generatePaginationItems(
    currentPage,
    totalCount,
    resultsPerPage
  );
  return (
    <div className="flex items-center text-black font-sans">
      <PaginationArrows
        resultsPerPage={resultsPerPage}
        currentPage={currentPage}
        type="decrement"
      />
      {paginationItems.map((item, index) => {
        const styles =
          "h-[24px] w-[24px] rounded-[4px] flex items-center justify-center ";
        if (item === "...")
          return (
            <div className={`${styles} cursor-default`} key={index}>
              {item}
            </div>
          );

        return (
          <Link
            className={`${styles} ${
              currentPage === Number(item) ? "bg-buttonColor text-white" : ""
            }`}
            key={index}
            href={`/?page=${item}&resultsPerPage=${resultsPerPage}`}
          >
            {item}
          </Link>
        );
      })}
      <PaginationArrows
        className="rotate-180 mr-4"
        resultsPerPage={resultsPerPage}
        currentPage={currentPage}
        type="increment"
        paginationItems={paginationItems}
      />
    </div>
  );
}
