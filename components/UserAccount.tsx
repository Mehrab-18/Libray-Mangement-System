"use client";
import { NavBar } from "@/components";
import { useState } from "react";
import UserCard from "./UserCard";
import AddIcon from "@mui/icons-material/Add";
import { IoIosArrowBack } from "react-icons/io";
import { FaRegFilePdf } from "react-icons/fa6";

import Image from "next/image";
import { Pagination } from "antd";
import { BsChevronDown } from "react-icons/bs";

const logo = require("@/public/images/LOGO 2_2.svg");

import Link from "next/link";

function UserAccount() {
  const [showDropdownOpen, setShowDropdownOpen] = useState(false);
  const [selectedShowValue, setSelectedShowValue] = useState(9);

  const toggleShowDropdown = () => {
    setShowDropdownOpen(!showDropdownOpen);
  };

  const handleShowValueSelect = (value: number) => {
    setSelectedShowValue(value);
    setShowDropdownOpen(false);
  };

  return (
    <>
      <NavBar />

      <div className=" mx-4 lg:mx-0 mt-8 lg:mt-12 lg:ml-28 lg:mr-20">
        <Link href={"/libraries"}>
          <div className="text-sm text-red-400 flex flex-row items-center ">
            {" "}
            <IoIosArrowBack /> Back
          </div>
        </Link>
        <div className="text-2xl text-black font-bold mt-10 ">
          Welcome to your library,
        </div>
        <div className="text-sm text-red-400 mt-5">Max Musterman</div>

        <div className="flex flex-wrap gap-6">
          <div className="flex-col w-[390px] lg:w-[295px] h-[270px] shadow-xl mt-5">
            <div className="h-1/2 bg-gray-50 shadow-lg flex items-center justify-center">
              <Image src={logo} alt="image" height={70} width={70} />
            </div>
            <div className="h-1/2">
              <div>
                <button className="ml-5 mt-5 text-xs bg-black px-1   rounded-xl text-white">
                  Premium
                </button>
              </div>

              <div className="flex flex-row gap-8 mt-4 ml-5">
                <div className="flex-col">
                  <div className="text-xs text-gray-400">Library number</div>
                  <div className="text-base font-medium ">
                    <span>2023</span> <span className="ml-1">1234</span>{" "}
                    <span className="ml-1">5566</span>
                  </div>
                </div>
                <div className="flex-col">
                  <div className="text-xs text-gray-400">Added</div>
                  <div className="text-sm ">15.08.2023</div>
                </div>
              </div>
              <div className="mt-3 text-sm text-red-400 ml-5 flex flex-row items-center gap-2">
                <span className="text-red-400">
                  <FaRegFilePdf />
                </span>{" "}
                Print
              </div>
            </div>
          </div>
          <div className="w-[390px] lg:w-[230px] h-[270px] border shadow-xl mt-5">
            <div className="ml-7 mt-6 text-sm font-bold">Collections</div>
            <div className="h-[1px] w-[170px] mx-7 my-4 bg-gray-200 shadow-md"></div>
            <div className="flex-col gap-4 mt-5 ml-7">
              <div className="text-base font-bold">15</div>
              <div className="text-sm text-gray-400 ">Library</div>
            </div>
            <div className="flex-col gap-4 mt-5 ml-7">
              <div className="text-base font-bold">24</div>
              <div className="text-sm text-gray-400 ">Works</div>
            </div>
          </div>
          <div className="w-[390px] lg:w-[230px] h-[270px] border shadow-xl mt-5">
            <div className="ml-7 mt-6 text-sm font-bold">Condition</div>
            <div className="h-[1px] w-[170px] mx-7 my-4 bg-gray-200 shadow-md"></div>
            <div className="text-sm text-gray-400 ml-7">100% Very good</div>
          </div>
          <div className="w-[390px] lg:w-[230px] h-[270px] border shadow-xl mt-5">
            <div className="ml-7 mt-6 text-sm font-bold">Condition</div>
            <div className="h-[1px] w-[170px] mx-7 my-4 bg-gray-200 shadow-md"></div>
            <div className="text-lg text-black font-extrabold ml-7">
              90,000 <span className="ml-1">$</span>
            </div>
            <div className=" mt-32 ml-7 text-sm text-gray-400">
              8,000 <span className="ml-1">$</span>{" "}
              <span className="ml-1">Average</span>
            </div>
          </div>
        </div>

        <div className="mt-8 text-black font-semibold text-2xl ">
          Your Statistics
        </div>
        <div className="flex flex-wrap gap-8 mt-5">
          <div className="border border-gray-400  w-[390px] lg:w-[560px] h-[300px]"></div>
          <div className="border border-gray-400 w-[390px]  lg:w-[560px] h-[300px]"></div>
        </div>

        <div className="mt-10 flex flex-col gap-6 lg:gap-0 lg:flex-row lg:justify-between ">
          <div className="flex items-center justify-between lg:flex-row lg:gap-4">
            <div className="text-base font-semibold ">Your Works</div>
            <div>
              <button className="flex flex-row items-center  gap-1 border text-sm font-semibold border-red-400 px-4 py-2 rounded-3xl">
                Add Work <AddIcon />
              </button>
            </div>
          </div>
          <div className="flex justify-between lg:flex-row lg:gap-10 lg:mr-16 ">
            <div className="text-sm font-semibold block lg:hidden">Filters</div>
            <div className="flex flex-row gap-3">
              <div className="flex flex-row items-center  text-sm font-semibold">
                Order Type{" "}
                <span className="text-orange-400">
                  {" "}
                  <BsChevronDown />
                </span>
              </div>
              <div className="flex flex-row items-center text-sm font-semibold">
                Show:{" "}
                <span
                  className="text-orange-400 cursor-pointer flex flex-row items-center"
                  onClick={toggleShowDropdown}
                >
                  <span className="ml-1 text-black"> {selectedShowValue}</span>{" "}
                  <span className="ml-1">
                    <BsChevronDown />
                  </span>
                </span>
                {showDropdownOpen && (
                  <div className="bg-white absolute mt-2 rounded shadow-lg w-24 py-2 z-10">
                    <div
                      className={`cursor-pointer px-4 py-2 ${
                        selectedShowValue === 9 ? "bg-blue-200" : ""
                      }`}
                      onClick={() => handleShowValueSelect(9)}
                    >
                      9
                    </div>
                    <div
                      className={`cursor-pointer px-4 py-2 ${
                        selectedShowValue === 18 ? "bg-blue-200" : ""
                      }`}
                      onClick={() => handleShowValueSelect(18)}
                    >
                      18
                    </div>
                    <div
                      className={`cursor-pointer px-4 py-2 ${
                        selectedShowValue === 60 ? "bg-blue-200" : ""
                      }`}
                      onClick={() => handleShowValueSelect(60)}
                    >
                      60
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 mt-9 lg:mt-20">
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
        </div>
        <Link href={"/libraries"}>
          <div className="mt-8 text-sm text-red-400 flex flex-row items-center">
            <IoIosArrowBack /> Back
          </div>
        </Link>
        <div className=" w-[340px] lg:w-full  h-[1px] bg-gray-300 my-4"></div>

        <div className="my-8 flex items-center justify-center">
          <Pagination
            size="small"
            total={50}
            disabled={false}
            showSizeChanger
          />
        </div>
      </div>
    </>
  );
}

export default UserAccount;
