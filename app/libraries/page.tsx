"use client";
import Layout from "@/components/Layout";
import LibraryCard from "@/components/LibraryCard";
// import WorkCard from "@/components/WorkCard";
import { getAllLibraries } from "@/api/libraries";
import React, { useEffect, useState } from "react";
import RadioButtons from "@/components/RadioButtons";
import SearchBar from "@/components/Searchbar";
import { Pagination } from "antd";
import { FormControl, NativeSelect } from "@mui/material";
import AllLibrariesWordCard from "@/components/AllLibrariesWordCard";
import LibraryCardLibPage from "@/components/LibraryCardLibPage";
import Link from "@/node_modules/next/link";

const page = () => {
  const [librariesData, setLibrariesData] = useState<any>();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(9);
  const [totalRecords, setTotalRecords] = useState(0);
  const pageSizeOptions = ["9", "18", "60"];

  useEffect(() => {
    getLibraries();
  }, [currentPage, pageSize]);

  const getLibraries = async () => {
    const res = await getAllLibraries(currentPage, pageSize);
    setLibrariesData(res?.data.data);
    setTotalRecords(res?.data.meta.total);
  };

  const calculateLibraryWorks = (library: any) => {
    if (library) {
      return library.besitzes.length;
    }
  };

  const handlePaginationChange = (current: any, size: any) => {
    setCurrentPage(current);
    setPageSize(size);
  };

  function formatDateToDDYYYYMM(dateString: string) {
    const createdAtDate = new Date(dateString);

    const year = createdAtDate.getFullYear();
    const month = String(createdAtDate.getMonth() + 1).padStart(2, "0");
    const day = String(createdAtDate.getDate()).padStart(2, "0");

    const formattedDate = `${day}-${year}-${month}`;

    return formattedDate;
  }

  console.log("->>", librariesData?.besitzes);

  return (
    <Layout>
      <div className=" 2xl:ml-32 2xl:mr-12 mx-0 mx-2">
        <div className="flex lg:flex-row flex-col gap-5 mx-6 my-9">
          <div>
            <RadioButtons />
          </div>
          <div className="lg:w-[300px]">
            <SearchBar placeholder="Search" />
          </div>
        </div>
        <div className="hidden lg:block h-[1px] w-[95%] ml-[1.5rem] mr-[2.5rem] 2xl:ml-0 2xl:mr-0 2xl:w-[85%] my-10 bg-gray-200"></div>
        <div className="options-section my-10 px-4 lg:px-0 lg:mt-0 w-full lg:w-full 2xl:w-[80%] flex items-center justify-end">
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
        {librariesData?.map((library: any, index: any) => (
          <div className="flex flex-col">
            <div className="flex flex-col pb-6 lg:flex-row  m-4">
              <div className="w-full lg:w-[30%] 2xl:w-[20%] mt-2 lg:mt-0 lg:mr-[3rem] mb-10 lg:mb-4 ">
                <LibraryCardLibPage
                  libraryNumber={library.username}
                  condition={"Premium"}
                  id={library.id}
                  works={calculateLibraryWorks(library)}
                  dateofAddition={formatDateToDDYYYYMM(library.createdAt)}
                  isRecommended={false}
                  isBtn1={true}
                  btn1Text={"Go to library"}
                  isShowroom={false}
                />
              </div>
              <div className="w-full  2xl:max-w-screen-lg overflow-x-auto">
                <div className="overflow-x-auto custom-scrollbar">
                  <div className="flex space-x-4 pb-10">
                    {library.besitzes?.map((work: any, index: any) => (
                      <Link
                        href={{
                          pathname: `libraries/work/${work.stammwerke?.id}`,
                          query: { ...work.stammwerke, libraryId: library.username },
                        }}
                        className="h-fit"
                      >
                        <AllLibrariesWordCard
                          isfooterText={true}
                          imageUrl={work.stammwerke?.Titelbild.url}
                          description={work.stammwerke?.Titel}
                          footerText={work.stammwerke?.Stil}
                          isHomePageCard={false}
                          isType={false}
                          titleText={work.stammwerke?.Titel}
                          hasVolumes={false}
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full 2xl:w-[85%]">
              <hr />
            </div>
          </div>
        ))}
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
