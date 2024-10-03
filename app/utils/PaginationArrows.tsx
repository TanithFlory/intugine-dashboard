import Image from "next/image";
import { images } from "../constants/constants";
import Link from "next/link";

export default function PaginationArrows({
  className,
  currentPage,
  resultsPerPage,
  type,
  paginationItems,
}: {
  className?: string;
  currentPage: number;
  resultsPerPage: number;
  paginationItems?: (string | number)[];
  type: "decrement" | "increment";
}) {
  function getHref(isSingleArrow: string) {
    const incrementValue = isSingleArrow === "arrowSingle" ? 1 : 5; // Determine increment value based on the arrow type

    if (type === "decrement") {
      return `/?page=${
        currentPage - incrementValue >= 0 ? currentPage - incrementValue : 1
      }&resultsPerPage=${resultsPerPage}`;
    }

    if (type === "increment" && paginationItems) {
      const lastPage = paginationItems[paginationItems.length - 1];
      return `/?page=${
        currentPage + incrementValue <= (lastPage as number)
          ? currentPage + incrementValue
          : lastPage
      }&resultsPerPage=${resultsPerPage}`;
    }

    return "";
  }

  return (
    <div className={`${className || ""} flex items-center`}>
      {["arrows", "arrowSingle"].map((item, index) => {
        return (
          <Link
            className="flex items-center h-[24px] w-[24px]"
            key={index}
            href={getHref(item)}
          >
            <Image
              className="h-[12px] w-[12px]"
              src={images[item]}
              width={7}
              height={9}
              alt="Arrow"
            />
          </Link>
        );
      })}
    </div>
  );
}
