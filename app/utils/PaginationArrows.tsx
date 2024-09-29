import Image from "next/image";
import { images } from "../constants/constants";
export default function PaginationArrows({ className }: { className?: string }) {
  return (
    <div className={`${className || ""} flex items-center`}>
      {["arrows", "arrowSingle"].map((item, index) => {
        return (
          <div className="flex items-center h-[24px] w-[24px]" key={index}>
            <Image className="h-[12px] w-[12px]" src={images[item]} width={7} height={9} alt="Arrow" />
          </div>
        );
      })}
    </div>
  );
}
