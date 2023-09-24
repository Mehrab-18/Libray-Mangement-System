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
    <div className="w-full relative shadow-sm ">
      <div className="flex items-center  border border-gray-300 rounded-full overflow-hidden">
        <div className="px-3 py-2">
          <FiSearch style={{ color: "#f97316" }} />
        </div>
        <input
          type="text"
          placeholder={placeholder}
          className="w-full px-4 py-2 outline-none focus:outline-none"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
    </div>
  );
};

export default Search;
