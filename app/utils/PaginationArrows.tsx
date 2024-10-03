import Image from "next/image";
import { images } from "../constants/constants";
import Link from "next/link";

export default function PaginationArrows({
  className,
  currentPage,
  resultsPerPage,
  type,
  paginationItems,
  isSingleArrow,
}: {
  className?: string;
  currentPage: number;
  resultsPerPage: number;
  paginationItems?: (string | number)[];
  type: "decrement" | "increment";
  isSingleArrow?: boolean;
}) {
  function getHref() {
    const incrementValue = isSingleArrow ? 1 : 5; // Determine increment value based on the arrow type

    if (type === "decrement") {
      return `/?page=${
        currentPage > 1 ? currentPage - incrementValue : currentPage
      }&resultsPerPage=${resultsPerPage}`;
    }

    if (type === "increment" && paginationItems) {
      const lastPage = paginationItems[paginationItems.length - 1];
      return `/?page=${
        currentPage < (lastPage as number)
          ? currentPage + incrementValue
          : currentPage
      }&resultsPerPage=${resultsPerPage}`;
    }

    return "";
  }

  return (
    <Link className={`${className || ""} flex items-center`} href={getHref()}>
      {["arrows", "arrowSingle"].map((item, index) => {
        return (
          <div className="flex items-center h-[24px] w-[24px]" key={index}>
            <Image
              className="h-[12px] w-[12px]"
              src={images[item]}
              width={7}
              height={9}
              alt="Arrow"
            />
          </div>
        );
      })}
    </Link>
  );
}
