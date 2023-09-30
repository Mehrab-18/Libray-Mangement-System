"use client";
import Layout from "@/components/Layout";
import LibraryCard from "@/components/LibraryCard";
import WorkCard from "@/components/WorkCard";
import { getAllLibraries } from "@/api/libraries";
import React, { useEffect, useState } from "react";
import RadioButtons from "@/components/RadioButtons";
import SearchBar from "@/components/Searchbar";
import { Pagination } from "antd";
import { FormControl, NativeSelect } from "@mui/material";

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

  return (
    <Layout>
      <div className=" lg:ml-32 lg:mr-12 lg:mx-0 mx-5">
        <div className="flex lg:flex-row flex-col gap-5 mx-6 my-9 lg:border-b lg:border-gray-200">
          <div>
            <RadioButtons />
          </div>
          <div>
            <SearchBar placeholder="Search" />
          </div>
        </div>
        <div className="options-section mt-10 px-4 lg:px-0 lg:mt-0 w-full lg:w-[80%] flex items-center justify-end">
          <div className="sort-section">
            <div className="flex text-black pl-6 font-semibold w-full items-baseline gap-2">
              <span>Order by:</span>
              <FormControl>
                <NativeSelect defaultValue={"type"}>
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
        <div className="hidden lg:block h-[1px] w-[1100px] my-10 bg-gray-200"></div>
        {librariesData?.map((library: any, index: any) => (
          <div className="flex flex-col border-b pb-6 border-gray-300 lg:flex-row  m-4">
            <div className="w-full lg:w-[20%] mt-2 lg:mr-24 mb-4 ">
              <LibraryCard
                libraryNumber={library.username}
                condition={"Premium"}
                id={library.id}
                works={calculateLibraryWorks(library)}
                dateofAddition={formatDateToDDYYYYMM(library.createdAt)}
                isRecommended={false}
                isBtn1={true}
                btn1Text={"Go to library"}
              />
            </div>
            <div className="w-full lg:w-[70%] max-w-screen-lg overflow-x-auto">
              <div className="overflow-x-auto custom-scrollbar">
                <div className="flex space-x-2 ">
                  {library.besitzes?.map((work: any, index: any) => (
                    <WorkCard
                      isfooterText={true}
                      imageUrl={work.stammwerke?.Titelbild.url}
                      description={work.stammwerke?.Titel}
                      footerText={work.stammwerke?.Stil}
                      isHomePageCard={false}
                      isType={false}
                      titleText={work.stammwerke?.Titel}
                      hasVolumes={false}
                    />
                  ))}
                </div>
              </div>
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
