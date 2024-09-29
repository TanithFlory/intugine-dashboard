import Pagination from "../Pagination/Pagination";

export default function TableFooter() {
  return (
    <tfoot className="h-[44px] text-fs-12">
      <tr>
        <td className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <div className=" px-[20px] py-[12px]">
              <span>Viewing </span>
              <span className="font-bold">1-20 </span>
              <span>of </span>
              <span className="font-bold">1000 </span>
              <span>records </span>
            </div>
            <div className="flex items-center gap-[5px] ">
              <span>Rows per page: </span>
              <select className="w-[56px] rounded-[4px] outline-none h-[24px] pl-[5px] focus:border-[#E0E0E0] border-[1px]">
                <option>1</option>
                <option>2</option>
              </select>
            </div>
          </div>
          <Pagination />
        </td>
      </tr>
    </tfoot>
  );
}
