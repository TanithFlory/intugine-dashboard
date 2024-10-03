"use client";
import { Transporter, TripStatus } from "@/types";
import { useState } from "react";

interface DropdownProps {
  options: string[];
  className?: string;
  setTransporter?: (option: Transporter) => void;
  setTripStatus?: (option: TripStatus) => void;
  isTransport?: boolean;
  value: string;
}

function SelectInput({
  options,
  className,
  setTripStatus,
  setTransporter,
  isTransport,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownValue, setDropDownValue] = useState<
    Transporter | TripStatus
  >();

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  function dropDownHandler(option: Transporter | TripStatus) {
    setDropDownValue(option);
    isTransport
      ? setTransporter && setTransporter(option as Transporter)
      : setTripStatus && setTripStatus(option as TripStatus);
    toggleDropdown();
  }

  return (
    <div className={`relative font-sans text-fs-12  ${className}`}>
      <button
        type="button"
        onClick={toggleDropdown}
        className="text-left box-border px-4 py-2 rounded-[4px] placeholder:tracking-[0.4px] h-[35px] outline-none w-[280px] border-borderColor border-[1px] placeholder:text-[#666666] text-[#1A1A1A]"
      >
        {dropdownValue}
      </button>
      {isOpen && (
        <ul className="absolute z-10 w-[280px] bg-white border border-gray-300 rounded-b-lg shadow-md">
          {options.map((option, index) => (
            <li
              key={index}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              onClick={() => dropDownHandler(option as Transporter)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SelectInput;
