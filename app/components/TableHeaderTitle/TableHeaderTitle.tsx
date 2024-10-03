import { ThHTMLAttributes } from "react";
import { images } from "@/app/constants/constants";
import Image from "next/image";
interface TableHeaderTitleProps extends ThHTMLAttributes<HTMLTableCellElement> {
  width: string;
  label: string;
  order: string;
}

export default function TableHeaderTitle({
  width,
  label,
  ...rest
}: TableHeaderTitleProps) {
  return (
    <div className={`box-border text-fs-12 ${width}`} {...rest}>
      <div className="flex items-center gap-1">
        <div className="w-max">{label}</div>
        <Image height={15} width={15} alt="sort" src={images.ascending} />
      </div>
    </div>
  );
}
