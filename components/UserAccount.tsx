"use client";
import { NavBar } from "@/components";
import { useEffect, useState } from "react";
import UserCard from "./UserCard";
import AddIcon from "@mui/icons-material/Add";
import { IoIosArrowBack } from "react-icons/io";
import { FaRegFilePdf } from "react-icons/fa6";
import cardIib from "../public/images/card-lib.png";
import Image from "next/image";
import { Pagination } from "antd";
import { BsChevronDown } from "react-icons/bs";
import printImg from "../public/images/print.png";
import { ClipLoader } from "react-spinners";
import BarGraph from "../public/images/BarGraph.svg";
import CircleGraph from "../public/images/CircleGraph.svg";

const logo = require("@/public/images/LOGO 2_2.svg");

import Link from "next/link";
import { useUserObj } from "@/app/UserContext";
import AllWorkPageCard from "./AllWorkPageCard";
import { getAllWorks, getPaginatedWorks } from "@/api/works";
import Footer from "./Footer";
import Layout from "./Layout";

const CircleChartArr = [
  { name: "Weltliche Werke", color: "#C25B3C" }, // Red
  { name: "Astronomie | Astrologie", color: "#E7DCC6" }, // Green
  { name: "Bestiarien", color: "#F5C540" }, // Blue
  { name: "Bibeln | Evangeliare", color: "#4B4B50" }, // Yellow
  { name: "Werke | Bestiarien", color: "#000" }, // Yellow
];

const BarChartArr = [
  { name: "(70%) AbeBooks", color: "#C25B3C" }, // Red
  { name: "(60%) BookScouter", color: "#E7DCC6" }, // Green
  { name: "(40%) Bookdeal", color: "#F5C540" }, // Blue
  { name: "(20%) Valuable Antique", color: "#4B4B50" }, // Yellow
  { name: "(10%) Bibeln", color: "#000" }, // Yellow
];

function UserAccount() {
  const [showDropdownOpen, setShowDropdownOpen] = useState(false);
  const [selectedShowValue, setSelectedShowValue] = useState(9);
  const [worksCardData, setWorksCardData] = useState<any>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(9);
  const [totalRecords, setTotalRecords] = useState(0);
  const pageSizeOptions = ["9", "18", "60"];

  const { user, isLoggedIn } = useUserObj();

  console.log(" user ->>", user);

  useEffect(() => {
    getWorks();
  }, [currentPage, pageSize, user]);

  const getWorks = async () => {
    const res: any = await getPaginatedWorks(currentPage, pageSize);
    setWorksCardData(res?.data.data);
    setTotalRecords(res?.data.meta.pagination.total);
  };

  const toggleShowDropdown = () => {
    setShowDropdownOpen(!showDropdownOpen);
  };

  const handleShowValueSelect = (value: number) => {
    setSelectedShowValue(value);
    setShowDropdownOpen(false);
  };

  const handlePrintClick = () => {
    window.print(); // This will trigger the browser's print dialog
  };

  console.log(worksCardData);

  const handlePaginationChange = (current: any, size: any) => {
    setCurrentPage(current);
    setPageSize(size);
  };
  // text-gray-400

  return (
    <Layout>
      {/* <NavBar /> */}
      <div className="mx-5 2xl:mx-24 2xl:pl-36 mt-8 lg:mt-12">
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
        <div className="flex flex-wrap gap-6 ">
          <div className="flex-col w-full lg:w-[420px] h-[340px] shadow-xl mt-5">
            <div className="h-1/2 bg-gray-50 shadow-lg flex items-center justify-center">
              <Image src={cardIib} alt="image" height={70} width={150} />
            </div>
            <div className="h-1/2 ">
              <div>
                <button className="ml-5 mt-5 text-xs bg-black p-1 px-2 rounded-full text-white">
                  Premium
                </button>
              </div>

              <div className="flex flex-row gap-[4rem] md:gap-[7.5rem] mt-6 ml-5">
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
              <div className="mt-5 text-sm text-red-400 ml-4 flex flex-row items-center">
                <div
                  className="w-fit cursor-pointer"
                  onClick={handlePrintClick}
                >
                  <Image src={printImg} width={75} alt={'print'} />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[300px] h-[340px] border shadow-xl mt-5">
            <div className="ml-7 mt-6 text-sm font-bold">Collections</div>
            <div className="h-[1px] w-[170px] mx-7 my-4 bg-gray-200 shadow-md"></div>
            <div className="flex-col gap-4 mt-5 ml-7">
              <div className="text-base font-bold">15</div>
              <div className="text-sm  ">Library</div>
            </div>
            <div className="flex-col gap-4 mt-5 ml-7">
              <div className="text-base font-bold">24</div>
              <div className="text-sm  ">Works</div>
            </div>
          </div>
          <div className="w-full lg:w-[300px] h-[340px] border shadow-xl mt-5">
            <div className="ml-7 mt-6 text-sm font-bold">Condition</div>
            <div className="h-[1px] w-[170px] mx-7 my-4 bg-gray-200 shadow-md"></div>
            <div className="text-sm  ml-7">100% Very good</div>
          </div>
          <div className="w-full lg:w-[300px] h-[340px] border shadow-xl mt-5">
            <div className="ml-7 mt-6 text-sm font-bold">Condition</div>
            <div className="h-[1px] w-[170px] mx-7 my-4 bg-gray-200 shadow-md"></div>
            <div className="text-lg text-black font-extrabold ml-7">
              90,000 <span className="ml-1">$</span>
            </div>
            <div className=" mt-32 ml-7 text-sm">
              8,000 <span className="ml-1">$</span>{" "}
              <span className="ml-1">Average</span>
            </div>
          </div>
        </div>

        <div className="mt-8 text-black font-semibold text-2xl ">
          Your Statistics
        </div>

        {/* <></> */}

        {/* <div className="flex flex-col lg:flex-row gap-2 w-full mt-5">
          <div className="shadow-xl flex  w-[390px] lg:w-[690px] h-[300px]">
            <div>
              <Image src={BarGraph} />
            </div>
            <div className="overflow-auto max-h-screen p-4">
              <h1 className="text-2xl font-bold mb-4">Colored Squares</h1>
              <div className="flex flex-wrap">
                {colors.map((color, index) => (
                  <div
                    className={`w-16 h-16 bg-${color} m-2 p-2 rounded-lg text-white text-center`}
                  >
                    {color.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="shadow-xl flex w-[390px]  lg:w-[690px] h-[300px]">
            <div>
              <Image src={CircleGraph} />
            </div>
            <div className="overflow-auto max-h-screen p-4">
              <h1 className="text-2xl font-bold mb-4">Colored Squares</h1>
              <div className="flex flex-wrap">
                {colors.map((color, index) => (
                  <div
                    className={`w-16 h-16 bg-${color} m-2 p-2 rounded-lg text-white text-center`}
                  >
                    {color.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div> */}
        <div className="flex flex-col lg:flex-row gap-2 w-full mt-5">
          <div className="shadow-xl flex flex-col lg:flex-row items-center justify-center w-full mb-10 lg:mb-0 lg:w-[690px] h-fit lg:h-[360px] gap-[5rem]">
            <div>
              <Image src={CircleGraph}  alt={'Chart'}/>
            </div>
            <div className="w-[250px]">
              <h1 className="text-lg font-bold mb-4">
                Distribution of your collection by genre
              </h1>
              <div className="overflow-x-scroll max-h-[200px] p-4">
                <div className="flex flex-col">
                  {CircleChartArr.map((color, index) => (
                    <div className="flex items-center">
                      <div
                        style={{ backgroundColor: color.color }}
                        className="w-[18px] h-[18px]"
                      ></div>
                      <div
                        key={index}
                        className={` p-3 rounded-lg text-center`}
                      >
                        {color.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-xl flex flex-col lg:flex-row items-center  justify-center w-full lg:w-[690px] h-fit lg:h-[360px] gap-[2rem]">
            <div>
              <Image src={BarGraph} alt={'Chart'}/>
            </div>
            <div className="w-[250px]">
              <h1 className="text-lg font-bold mb-4 ">
                Distribution of your collection by genre
              </h1>
              <div className="overflow-x-scroll max-h-[200px] p-4">
                <div className="flex flex-col">
                  {BarChartArr.map((color, index) => (
                    <div className="flex items-center">
                      <div
                        style={{ backgroundColor: color.color }}
                        className="w-[18px] h-[18px]"
                      ></div>{" "}
                      <div
                        key={index}
                        className={` p-3 rounded-lg text-center`}
                      >
                        {color.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <></> */}
        <div className="my-10 flex flex-col gap-6 lg:gap-0 lg:flex-row lg:justify-between ">
          <div className="flex items-center justify-between lg:flex-row lg:gap-4">
            <div className="text-base font-semibold ">Your Works</div>
            <div>
              <Link href="/addWork">
                <button className="flex flex-row items-center  gap-1 border text-sm font-semibold border-red-400 px-4 py-2 rounded-3xl">
                  Add Work <AddIcon />
                </button>
              </Link>
            </div>
          </div>
          <div className="flex justify-between lg:flex-row lg:gap-10 lg:mr-36">
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
        <div className="">
          {worksCardData === null ? (
            <div className="w-full flex justify-center items-center">
              <ClipLoader color="#c25b3c" size={45} />
            </div>
          ) : (
            <div className=" w-full 2xl:w-[100%] flex flex-wrap justify-center lg:justify-start gap-y-10 2xl:gap-y-12 gap-x-1 2xl:gap-x-4">
              {worksCardData &&
                worksCardData?.map((work: any, index: number) => (
                  <Link
                    href={{ pathname: `works/${work.id}`, query: work }}
                    className="h-fit"
                  >
                    <div className="w-full h-fit" key={index}>
                      <UserCard
                        imageUrl={
                          work?.attributes?.Titelbild?.data?.attributes?.url
                        }
                        isHomePageCard={false}
                        isType={true}
                        typeText={work.attributes.Art}
                        titleText={work.attributes.Titel}
                        footerText={work.attributes.Stil}
                        isfooterTextHeading2={false}
                        isfooterTextHeading={false}
                        isfooterText={true}
                        hasVolumes={true}
                        noOfVolumes={work.attributes.AnzahlBuecher}
                        cardStyles={[]}
                      />
                    </div>
                  </Link>
                ))}{" "}
              <div className="w-full lg:mt-[120px] mt-[20px]">
                <hr />
              </div>
            </div>
          )}
        </div>
        <Link href={"/libraries"}>
          <div className="mt-8 text-sm text-red-400 flex flex-row items-center">
            <IoIosArrowBack /> Back
          </div>
        </Link>
        {/* <div className="w-[94%] lg:mr-12 h-[1px] bg-gray-300 my-4"></div> */}

        <div className="my-8 lg:my-12 flex justify-center">
          <Pagination
            size="small"
            total={totalRecords}
            current={currentPage}
            disabled={false}
            showSizeChanger
            defaultPageSize={9}
            pageSizeOptions={pageSizeOptions}
            onChange={handlePaginationChange}
          />
        </div>
      </div>
      {/* <Footer /> */}
    </Layout>
  );
}

export default UserAccount;
