"use client";
import React, { useState, useRef, SetStateAction, Dispatch } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

interface Props {
  setSelectedImportWork: Dispatch<SetStateAction<string>>;
  selectedImportWork: string;
}

const Dropdown: React.FC<Props> = ({
  setSelectedImportWork,
  selectedImportWork,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const options: string[] = ["Option 1", "Option 2", "Option 3", "Option 4"];

  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option: string) => {
    setSelectedImportWork(option);
    setIsOpen(false);
  };

  const buttonWidth = buttonRef.current?.getBoundingClientRect().width;

  return (
    <div className="w-full relative inline-block text-left">
      <div className="w-full">
        <button
          onClick={toggleDropdown}
          className={`bg-white w-full lg:w-[80%] border border-gray-400 flex justify-between rounded-sm py-2 px-2 text-sm text-gray-400  font-base`}
          ref={buttonRef}
        >
          {selectedImportWork || "New Work"}
          <span className="ml-2">
            <ArrowDropDownIcon />
          </span>
        </button>
      </div>
      {isOpen && (
        <div
          className="origin-top-right absolute mt-2 w-auto rounded-md shadow-lg bg-white ring-1 z-50 ring-black ring-opacity-5"
          style={{ width: buttonWidth }}
        >
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option, index) => (
              <div
                key={index}
                onClick={() => selectOption(option)}
                className="block px-4 py-2 text-sm text-gray-400 cursor-pointer hover:bg-blue-500 hover:text-white"
                role="menuitem"
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
