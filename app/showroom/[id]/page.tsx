"use client";
import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { useParams } from "react-router";
import LibraryCard from "@/components/LibraryCard";
import WorkCard from "@/components/WorkCard";
import { getSingleLibrary } from "@/api/libraries";
import AllWorkPageCard from "@/components/AllWorkPageCard";
import { getPaginatedWorks } from "@/api/works";
import LibraryCardLibraryInfo from "@/components/LibraryCardLibraryInfo";

const page = () => {
  const [libraryData, setLibraryData] = useState<any>(null);
  const [worksCardData, setWorksCardData] = useState<any>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(9);
  const [totalRecords, setTotalRecords] = useState(0);
  const pageSizeOptions = ["9", "18", "60"];
  const { libraryId } = useParams();

  const [id, setId] = useState<string | null>();

  useEffect(() => {
    const currentURL = window.location.href;
    const url = new URL(currentURL);
    const id = url.searchParams.get("libraryId");
    console.log(id);
    setId(id);
  }, []);

  useEffect(() => {
    getLibraryData();
  }, [id]);

  useEffect(() => {
    getWorks();
  }, [currentPage, pageSize]);

  const getWorks = async () => {
    const res: any = await getPaginatedWorks(currentPage, pageSize);
    setWorksCardData(res?.data.data);
    setTotalRecords(res?.data.meta.pagination.total);
  };

  const getLibraryData = async () => {
    const res = await getSingleLibrary(id);
    console.log("->>", res?.data);
    setLibraryData(res?.data);
  };

  const workCardStyles = [
    { originalBtnBgColor: "custom-offwhite", originalBtnColor: "black" },
  ];

  const calculateLibraryWorks = () => {
    if (libraryData) {
      return libraryData.besitzes.length;
    }
  };

  function formatDateToDDYYYYMM(dateString: string) {
    const createdAtDate = new Date(dateString);

    const year = createdAtDate.getFullYear();
    const month = String(createdAtDate.getMonth() + 1).padStart(2, "0"); // Adding 1 because months are zero-indexed
    const day = String(createdAtDate.getDate()).padStart(2, "0");

    const formattedDate = `${day}-${year}-${month}`;

    return formattedDate;
  }

  const selectConditionColor = (condition: any) => {
    switch (condition) {
      case "premium":
        return "#342923";
      case "silver":
        return "#dcdcdc";
      case "gold":
        return "#D9A343";
      default:
        return "#342923";
    }
  };

  return (
    <Layout>
      <div className="">
        <div className="flex justify-start items-center text-custom-mobile-orange pl-6 2xl:pl-[6rem]">
          <div className="w-full lg:w-1/4 pt-[5rem]">
            <Link href={`/libraries`} className="flex items-center">
              <IoIosArrowBack /> Back
            </Link>
          </div>
        </div>
        {/* <div className="flex justify-start items-center text-custom-mobile-orange pl-6 2xl:pl-[9rem]">

          <div className="hidden lg:flex text-black pl-6 font-semibold w-3/4 items-baseline gap-2">
            Order by:
            <FormControl>
              <NativeSelect
                defaultValue={"type"}
                sx={{
                  boxShadow: "none",
                  "& .css-19ygod6-MuiNativeSelect-select-MuiInputBase-input-MuiInput-input.css-19ygod6-MuiNativeSelect-select-MuiInputBase-input-MuiInput-input.css-19ygod6-MuiNativeSelect-select-MuiInputBase-input-MuiInput-input":
                    { paddingRight: "14px" },
                }}
                disableUnderline
              >
                {" "}
                <option value={"type"}>Type</option>
                <option value={"new"}>Newest</option>
                <option value={"old"}>Oldest</option>
                <option value={"asc"}>A-Z</option>
                <option value={"desc"}>Z-A</option>
              </NativeSelect>
            </FormControl>
          </div>
        </div> */}
        {/* <div className="options-section mt-10 px-4 lg:px-0 lg:mt-0 w-full lg:w-[80%] flex justify-between items-center lg:justify-end">
          <div className="mobile-filters lg:hidden">
            <span className="font-semibold">Filters:</span>
          </div>
        </div> */}
        <div className="hidden options-section my-10 px-4 lg:px-0 lg:mt-0 w-full lg:w-full 2xl:w-[85%]  flex items-center justify-end">
          <div className="sort-section lg:mr-3">
            <div className="flex text-black pl-6 font-semibold w-full items-baseline gap-2">
              <span>Order by:</span>
              <FormControl>
                <NativeSelect
                  defaultValue={"type"}
                  sx={{
                    boxShadow: "none",
                    "& .css-19ygod6-MuiNativeSelect-select-MuiInputBase-input-MuiInput-input.css-19ygod6-MuiNativeSelect-select-MuiInputBase-input-MuiInput-input.css-19ygod6-MuiNativeSelect-select-MuiInputBase-input-MuiInput-input":
                      { paddingRight: "14px" },
                  }}
                  disableUnderline
                >
                  {" "}
                  <option value={"type"}>Type</option>
                  <option value={"new"}>Newest</option>
                  <option value={"old"}>Oldest</option>
                  <option value={"asc"}>A-Z</option>
                  <option value={"desc"}>Z-A</option>
                </NativeSelect>
              </FormControl>
            </div>{" "}
          </div>
        </div>
        <div className="hidden 2xl:pl-[6rem] h-[1px] w-[100%] my-10 bg-gray-200"></div>

        <div className="flex flex-col pt-[1rem] h-full lg:flex-row justify-start gap-12">
          <div className="w-full lg:w-1/4 pt-[3.5rem] h-full flex flex-col justify-between pl-2 2xl:pl-[6rem] lg:pb-12">
            <div>
              <div className="mx-4 lg:mx-0">
                <LibraryCardLibraryInfo
                  libraryNumber={libraryData?.username}
                  id={libraryData?.id}
                  works={calculateLibraryWorks()}
                  dateofAddition={formatDateToDDYYYYMM(libraryData?.createdAt)}
                  isRecommended={true}
                  isBtn1={true}
                  btn1Text={"Contact"}
                  conditionColor={selectConditionColor(libraryData?.Mitgliedschaft)}
                  condition={libraryData?.Mitgliedschaft}
                />
              </div>
            </div>
          </div>
          <div className="w-full space-y-8">
            <div className="flex text-black pl-6 font-semibold w-[90%] mr-4 items-baseline gap-2">
              Order by:
              <FormControl>
                <NativeSelect defaultValue={"type"}>
                  <option value={"type"}>Type</option>
                  <option value={"new"}>Newest</option>
                  <option value={"old"}>Oldest</option>
                  <option value={"asc"}>A-Z</option>
                  <option value={"desc"}>Z-A</option>
                </NativeSelect>
              </FormControl>
            </div>
            <div className="w-full h-[1px] 2xl:w-[72%]">
              <hr />
            </div>

            <div className=" w-full 2xl:w-[75%] flex flex-wrap justify-center lg:justify-start gap-y-10 2xl:gap-y-12 gap-x-1 2xl:gap-x-4">
              {libraryData?.besitzes?.map((work: any, index: number) => (
                <Link
                  href={{ pathname: `works/${work.id}`, query: work }}
                  className="h-fit"
                >
                  <div className="w-full h-fit" key={index}>
                    <AllWorkPageCard
                      cardStyles={[]}
                      imageUrl={work?.stammwerke?.Titelbild.url}
                      isType={true}
                      isHomePageCard={false}
                      typeText={work?.stammwerke?.Art}
                      titleText={work?.stammwerke?.Titel}
                      footerText={`${work?.stammwerke?.Jahr}`}
                      isfooterText={true}
                      isfooterText2={true}
                      isfooterTextHeading2={true}
                      isfooterTextHeading={true}
                      footerTextHeading={"Astronomie:"}
                      footerTextHeading2={"Condition:"}
                      footerText2={` ${
                        work?.stammwerke?.Zustand
                          ? work?.stammwerke?.Zustand
                          : "Not Given"
                      }`}
                      hasVolumes={true}
                      noOfVolumes={work?.stammwerke?.AnzahlBuecher}
                    />
                  </div>
                </Link>
              ))}{" "}
              <div className="w-full lg:mt-[120px] mt-[20px]">
                <hr />
              </div>
            </div>
          </div>
          {/* <div className="hidden lg:flex mb-12 text-custom-mobile-orange">
            <Link href={`/libraries`} className="flex items-center">
              {" "}
              <IoIosArrowBack /> Back
            </Link>
          </div> */}
        </div>

        <div className="flex justify-start items-center text-custom-mobile-orange pl-6 2xl:pl-[9rem]">
          <div className="w-full lg:w-1/4 py-[5rem]">
            <Link href={`/libraries`} className="flex items-center">
              <IoIosArrowBack /> Back
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default page;
