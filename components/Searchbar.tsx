"use client";
import { SearchbarProps } from "@/types";
import React, { ChangeEvent, useState } from "react";
import { FiSearch } from "react-icons/fi"; // Import the magnifier icon

const Search = ({ placeholder }: SearchbarProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="w-full relative ">
      <div className="flex items-center h-[60px]  shadow-xl  border border-custom-mobile-orange bg-[#F4F4F4] rounded-full overflow-hidden">
        <div className="px-3 py-2 bg-[#F4F4F4] ">
          <FiSearch style={{ color: "#f97316", fontSize: "34px" }} />
        </div>
        <input
          type="text"
          placeholder={placeholder}
          className="w-full px-4 py-2 outline-none bg-[#F4F4F4] focus:outline-none"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
    </div>
  );
};

export default Search;
