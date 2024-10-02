import Pagination from "../Pagination/Pagination";
import { PaginationStats } from "@/types";
import ResultsPerPageDropdown from "./ResultsPerPageDropdown";

export default function TableFooter({
  totalCount,
  resultsPerPage,
  currentPage,
}: PaginationStats) {
  return (
    <div className="h-[44px] text-fs-12">
      <div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <div className=" px-[20px] py-[12px]">
              <span>Viewing </span>
              <span className="font-bold">1-{resultsPerPage} </span>
              <span>of </span>
              <span className="font-bold">{totalCount} </span>
              <span>records </span>
            </div>
            <ResultsPerPageDropdown
              currentPage={currentPage}
              currentResultsPerPage={resultsPerPage}
            />
          </div>
          <Pagination
            currentPage={currentPage}
            resultsPerPage={resultsPerPage}
            totalCount={totalCount}
          />
        </div>
      </div>
    </div>
  );
}
