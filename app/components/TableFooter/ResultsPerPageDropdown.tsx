"use client";
import Link from "next/link";
import { useState } from "react";

function ResultsPerPageDropdown({
  currentPage,
  currentResultsPerPage,
}: {
  currentPage: number;
  currentResultsPerPage: number;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(currentResultsPerPage);

  const resultsPerPageOptions = [10, 20, 30, 40];

  function toggleDropdown() {
    setIsOpen((prev) => !prev);
  }

  function handleOptionClick(value: number) {
    setSelectedValue(value);
    setIsOpen(false);
  }

  return (
    <div className="relative inline-block text-left">
      <div
        onClick={toggleDropdown}
        className="cursor-pointer w-[56px] rounded-[4px] border-[1px] border-gray-300 pl-[5px] py-[2px] focus:outline-none"
      >
        {selectedValue}
      </div>

      {isOpen && (
        <div className="absolute z-[9999] mt-1 w-[56px] rounded-md bg-white border border-gray-300 shadow-lg">
          {resultsPerPageOptions.map((item) => (
            <Link
              key={item}
              href={`/?page=${currentPage}&resultsPerPage=${item}`}
              onClick={() => handleOptionClick(item)}
            >
              <div className="px-4 py-2 text-sm hover:bg-gray-200 cursor-pointer">
                {item}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default ResultsPerPageDropdown;
