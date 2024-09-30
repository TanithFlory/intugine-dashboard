"use client";
import { useState } from "react";

interface DropdownProps {
  options: string[];
  className?: string;
}

function Dropdown({ options, className }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`relative font-sans text-fs-12  ${className}`}>
      <button
        type="button"
        onClick={toggleDropdown}
        className="text-left box-border px-4 py-2 rounded-[4px] placeholder:tracking-[0.4px] h-[35px] outline-none w-[280px] border-borderColor border-[1px] placeholder:text-[#666666] text-[#1A1A1A]"
      >
        Select Transporter
      </button>
      {isOpen && (
        <ul className="absolute z-10 w-[280px] bg-white border border-gray-300 rounded-b-lg shadow-md">
          {options.map((option, index) => (
            <li
              key={index}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
