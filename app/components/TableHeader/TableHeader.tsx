import TableHeaderTitle from "../TableHeaderTitle/TableHeaderTitle";
import tripColumns from "./tripColumns";

export default function TableHeader() {
  return (
    <thead className="bg-[#F8F8F8] ">
      <tr className="text-left h-[44px] flex items-center gap-4">
        {tripColumns.map((column, index) => (
          <TableHeaderTitle {...column} index={index} key={index} />
        ))}
      </tr>
    </thead>
  );
}
