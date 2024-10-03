import Link from "next/link";
import TableHeaderTitle from "../TableHeaderTitle/TableHeaderTitle";
import tripColumns from "./tripColumns";

type TableHeader = {
  currentPage: number;
  resultsPerPage: number;
  order: string;
};

export default function TableHeader({
  currentPage,
  resultsPerPage,
  order,
}: TableHeader) {
  return (
    <thead className="bg-[#F8F8F8] ">
      <tr className="text-left h-[44px] flex items-center gap-4">
        {tripColumns.map((column, index) => (
          <Link
            key={index}
            className="flex items-center gap-1"
            href={`/?page=${currentPage}&resultsPerPage=${resultsPerPage}&filter=${
              column.identifier
            }&order=${order === "asc" ? "desc" : "asc"}`}
          >
            <TableHeaderTitle
              {...column}
              index={index}
              key={index}
              order={order}
            />
          </Link>
        ))}
      </tr>
    </thead>
  );
}
