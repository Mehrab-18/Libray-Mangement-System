"use client";
import CardContainer from "@/components/CardContainer";
import Layout from "@/components/Layout";
import LibraryCard from "@/components/LibraryCard";
import WorkCard from "@/components/WorkCard";
import { getAllLibraries } from "@/api/libraries";
import React, { useEffect, useState } from "react";
import RadioButtons from "@/components/RadioButtons";
import SearchBar from "@/components/Searchbar";
const book8 =
  require("@/public/images/Foto_25_08_22_12_33_53_copy_6abed8bc8b.png").default;
const book9 = require("@/public/images/IMG_2758_copy_ac71ac5550.png").default;
const book10 = require("@/public/images/IMG_4251_copy_bb12520a0a.png").default;
const book11 = require("@/public/images/IMG_6477_copy_34d0993ee2.png").default;
import { Pagination } from "antd";

const page = () => {
  const [librariesData, setLibrariesData] = useState<any>();
  const [libraryWorks, setLibraryWorks] = useState<any>();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalRecords, setTotalRecords] = useState(0);

  useEffect(() => {
    getLibraries();
  }, []);

  const getLibraries = async () => {
    const res = await getAllLibraries(currentPage, pageSize);
    setLibrariesData(res?.data.data);
    setLibraryWorks(res?.data.data.besitzes);
    setTotalRecords(res?.data.meta.total);
  };

  const calculateLibraryWorks = (library: any) => {
    if (library) {
      return library.besitzes.length;
    }
  };

  const handlePaginationChange = (current: any) => {
    setCurrentPage(current);
  };

  return (
    <Layout>
      <div className=" lg:ml-32 lg:mr-12 lg:mx-0 mx-5">
        <div className="flex lg:flex-row flex-col gap-5 mx-6 my-9">
          <div>
            <RadioButtons />
          </div>
          <div>
            <SearchBar placeholder="Search" />
          </div>
        </div>
        <div className="hidden lg:block h-[1px] w-[1100px] my-10 bg-gray-200"></div>
        {librariesData?.map((library: any, index: any) => (
          <div className="flex flex-col border-b pb-6 border-gray-300 lg:flex-row  m-4">
            <div className="w-full lg:w-[20%] mt-2 lg:mr-24 mb-4 ">
              <LibraryCard
                libraryNumber={library.username}
                id={library.id}
                works={calculateLibraryWorks(library)}
                dateofAddition={library.dateofAddition}
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
                      isOriginal={true}
                      originalText={work.stammwerke?.Art}
                      description={work.stammwerke?.Titel}
                      footerText={work.stammwerke?.Stil}
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
            onChange={handlePaginationChange}
          />
        </div>
      </div>
    </Layout>
  );
};

export default page;
