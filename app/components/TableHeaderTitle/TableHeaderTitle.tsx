import { ThHTMLAttributes } from "react";
import { images } from "@/app/constants/constants";
import Image from "next/image";
interface TableHeaderTitleProps extends ThHTMLAttributes<HTMLTableCellElement> {
  width: string;
  label: string;
  index: number;
  order: string;
}

export default function TableHeaderTitle({
  width,
  label,
  index,
  order,
  ...rest
}: TableHeaderTitleProps) {
  return (
    <th
      className={`box-border text-fs-12 ${width} ${
        index === 0 ? "flex items-center justify-center" : ""
      }`}
      {...rest}
    >
      {index === 0 ? (
        <input type="checkbox" className="w-[16px] bg-[#FFFFFF] h-[16px]" />
      ) : (
        <div className="flex items-center gap-1">
          <div className="w-max">{label}</div>
          <Image height={15} width={15} alt="sort" src={images.ascending} />
        </div>
      )}
    </th>
  );
}
