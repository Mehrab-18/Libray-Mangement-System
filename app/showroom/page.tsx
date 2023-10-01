"use client";
import Layout from "@/components/Layout";
import React, { useEffect, useState } from "react";
import { getAllShowrooms } from "@/api/showroom";
import RadioButtons from "@/components/RadioButtons";
import { SearchBar } from "@/components";
import { Pagination } from "antd";
import { FormControl, NativeSelect } from "@mui/material";
import AllLibrariesWordCard from "@/components/AllLibrariesWordCard";
import LibraryCardLibPage from "@/components/LibraryCardLibPage";

const page = () => {
  const [showRoomsData, setShowroomsData] = useState<any>();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(9);
  const [totalRecords, setTotalRecords] = useState(0);
  const pageSizeOptions = ["9", "18", "60"];

  useEffect(() => {
    getShowrooms();
  }, [currentPage, pageSize]);

  const getShowrooms = async () => {
    const res = await getAllShowrooms();
    setShowroomsData(res?.data.data);
    setTotalRecords(res?.data.meta.pagination.total);
  };

  const calculateLibraryWorks = (library: any) => {
    if (library) {
      return library.besitzes.length;
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

  const selectStyles = {
    select: {
      "&:before": {
        display: "none", // Remove the default underline
      },
      "&:after": {
        display: "none", // Remove the default underline
      },
    },
  };

  const handlePaginationChange = (current: any, size: any) => {
    setCurrentPage(current);
    setPageSize(size);
  };

  return (
    <Layout>
      <div className=" 2xl:ml-32 2xl:mr-12 mx-0 mx-2">
        <div className="flex lg:flex-row flex-col gap-6 my-9">
          <div>
            <RadioButtons />
          </div>
          <div className="lg:w-[300px]">
            <SearchBar placeholder="Search" />
          </div>
        </div>
        <div className="hidden lg:block h-[1px] w-[95%] ml-[1.5rem] mr-[2.5rem] 2xl:ml-0 2xl:mr-0 2xl:w-[85%] my-10 bg-gray-200"></div>
        <div className="options-section my-10 px-4 lg:px-0 lg:mt-0 w-full lg:w-full 2xl:w-[80%]  flex items-center justify-end">
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
        {showRoomsData?.map((library: any, index: any) => (
          <div className="flex flex-col">
            <div className="flex flex-col pb-6 lg:flex-row  m-4">
              <div className="w-full lg:w-[30%] 2xl:w-[20%] mt-2 lg:mt-0 lg:mr-[3rem] mb-10 lg:mb-4 ">
                <LibraryCardLibPage
                  id={library.id}
                  libraryNumber={library?.username}
                  works={calculateLibraryWorks(library)}
                  condition={library?.Mitgliedschaft}
                  conditionColor={selectConditionColor(library?.Mitgliedschaft)}
                  dateofAddition={formatDateToDDYYYYMM(library?.createdAt)}
                  isRecommended={true}
                  isBtn1={true}
                  btn1Text={"Go to library"}
                />
              </div>
              <div className="w-full  2xl:max-w-screen-lg overflow-x-auto">
                <div className="overflow-x-auto custom-scrollbar">
                  <div className="flex space-x-4 pb-10">
                    {library?.besitzes.map((work: any, index: any) => (
                      <AllLibrariesWordCard
                        isfooterText={true}
                        imageUrl={work.stammwerke?.Titelbild.url}
                        isType={false}
                        footerMargin={true}
                        typeText={work.stammwerke?.Art}
                        titleText={work.stammwerke?.Titel}
                        footerText={work.stammwerke?.Stil}
                        isHomePageCard={false}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full 2xl:w-[85%]">
              <hr />
            </div>
          </div>
        ))}{" "}
        <div className="my-8 lg:my-36 flex justify-center">
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
    </Layout>
  );
};

export default page;
