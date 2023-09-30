import React, { useState, useRef, useEffect } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

interface StaticDropdownProps {
  txt: string;
  selectedOption: string;
  setSelectedOption: (option: string) => void;
}

const StaticDropdown: React.FC<StaticDropdownProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const options: string[] = [
    "Dummy Data 1",
    "Dummy Data 2",
    "Dummy Data 3",
    "Dummy Data 4",
  ];

  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Update the selected option when the prop changes
    setIsOpen(false); // Close the dropdown when the selected option changes
  }, [props.selectedOption]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option: string) => {
    props.setSelectedOption(option); // Notify the parent of the selected option
    setIsOpen(false);
  };

  const buttonWidth = buttonRef.current?.getBoundingClientRect().width;

  return (
    <div className="relative inline-block text-left w-full">
      <div>
        <button
          onClick={toggleDropdown}
          className={`bg-white border border-gray-400 flex justify-between rounded-sm py-2 px-2 w-full lg:w-[320px] 2xl:w-[333px] text-sm text-gray-400 font-base`}
          ref={buttonRef}
        >
          {props.selectedOption || props.txt}
          <span className="ml-2">
            <ArrowDropDownIcon />
          </span>
        </button>
      </div>
      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-auto rounded-md shadow-lg bg-white ring-1 z-50 ring-black ring-opacity-5"
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

export default StaticDropdown;
