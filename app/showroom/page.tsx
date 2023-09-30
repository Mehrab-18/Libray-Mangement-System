"use client";
import CardContainer from "@/components/CardContainer";
import Layout from "@/components/Layout";
import LibraryCard from "@/components/LibraryCard";
import React, { useEffect, useState } from "react";
import { getAllShowrooms } from "@/api/showroom";
import RadioButtons from "@/components/RadioButtons";
import { SearchBar } from "@/components";
import WorkCard from "@/components/WorkCard";
import { Pagination } from "antd";
import { FormControl, NativeSelect } from "@mui/material";
const book8 =
  require("@/public/images/Foto_25_08_22_12_33_53_copy_6abed8bc8b.png").default;
const book9 = require("@/public/images/IMG_2758_copy_ac71ac5550.png").default;
const book10 = require("@/public/images/IMG_4251_copy_bb12520a0a.png").default;
const book11 = require("@/public/images/IMG_6477_copy_34d0993ee2.png").default;

const page = () => {
  const [showRoomsData, setShowroomsData] = useState<any>();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalRecords, setTotalRecords] = useState(0);

  useEffect(() => {
    getShowrooms();
  }, []);

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

  const handlePaginationChange = (current: any) => {
    setCurrentPage(current);
  };

  return (
    <Layout>
      <div className=" lg:ml-32 lg:mr-12 lg:mx-0 mx-5">
        <div className="flex lg:flex-row flex-col gap-6 my-9">
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
        <div className="hidden lg:block h-[1px]  w-[1100px] my-10 bg-gray-200"></div>
        {showRoomsData?.map((library: any, index: any) => (
          <div className="flex flex-col lg:flex-row border-b border-gray-300">
            <div className="w-full lg:w-[20%] lg:mr-24 lg:mt-4 mb-4">
              <LibraryCard
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
            <div className="w-full lg:w-[70%]  container mb-8 max-w-screen-lg overflow-x-auto">
              <div className="overflow-x-auto custom-scrollbar">
                <div className="flex space-x-2 ">
                  {library?.besitzes.map((work: any, index: any) => (
                    <WorkCard
                      isfooterText={true}
                      imageUrl={work.stammwerke?.Titelbild.url}
                      isType={false}
                      footerMargin={true}
                      typeText={work.stammwerke?.Art}
                      titleText={work.stammwerke?.Titel}
                      footerText={work.stammwerke?.Stil}
                    />
                  ))}
                </div>
              </div>
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
            onChange={handlePaginationChange}
          />
        </div>
      </div>
    </Layout>
  );
};

export default page;
