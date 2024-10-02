import Link from "next/link";
import Pagination from "../Pagination/Pagination";
import { PaginationStats } from "@/types";

export default function TableFooter({
  totalCount,
  resultsPerPage,
  currentPage,
}: PaginationStats) {
  return (
    <tfoot className="h-[44px] text-fs-12">
      <tr>
        <td className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <div className=" px-[20px] py-[12px]">
              <span>Viewing </span>
              <span className="font-bold">1-{resultsPerPage} </span>
              <span>of </span>
              <span className="font-bold">{totalCount} </span>
              <span>records </span>
            </div>
            <div className="flex items-center gap-[5px] ">
              <span>Rows per page: </span>
              <select className="w-[56px] rounded-[4px] outline-none h-[24px] pl-[5px] focus:border-[#E0E0E0] border-[1px]">
                {[10, 20, 30, 40].map((item, index) => {
                  return (
                    <option key={index}>
                      <Link
                        href={`/?page=${currentPage}&resultsPerPage=${item}`}
                      >
                        {item}
                      </Link>
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <Pagination
            currentPage={currentPage}
            resultsPerPage={resultsPerPage}
            totalCount={totalCount}
          />
        </td>
      </tr>
    </tfoot>
  );
}
