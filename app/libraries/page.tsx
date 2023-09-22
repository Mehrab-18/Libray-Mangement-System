"use client";
import CardContainer from "@/components/CardContainer";
import Layout from "@/components/Layout";
import LibraryCard from "@/components/LibraryCard";
import WorkCard from "@/components/WorkCard";
import { getAllLibraries } from "@/api/libraries";
import React, { useEffect, useState } from "react";
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

  const workCard = [
    {
      imageUrl: book8,
      isOriginal: false,
      description: "Das bis",
      isFooterText: true,
      footerText: "Nachschlagewerke",
      hasVolumes: false,
      noOfVolumes: "3",
    },
    {
      imageUrl: book9,
      isOriginal: false,
      description: "Unser Jahrhundert ",
      isFooterText: true,
      footerText: "Nachschlagewerke",
      hasVolumes: false,
      noOfVolumes: "3",
    },
    {
      imageUrl: book10,
      isOriginal: false,
      description: "Aratea Vaticana",
      isFooterText: true,
      footerText: "Nachschlagewerke",
      hasVolumes: true,
      noOfVolumes: "3",
    },
    {
      imageUrl: book11,
      isOriginal: false,
      description: "Alexander Magnus",
      isFooterText: true,
      footerText: "Nachschlagewerke",
      hasVolumes: false,
      noOfVolumes: "3",
    },
    {
      imageUrl: book8,
      isOriginal: false,
      description: "DasTon",
      isFooterText: true,
      footerText: "Nachschlagewerke",
      hasVolumes: false,
      noOfVolumes: "3",
    },
  ];

  const libraryCards = [
    {
      id: 1,
      libraryNumber: "2023 9876 5432",
      works: 8,
      dateofAddition: "22.09.2023",
    },
    {
      id: 2,
      libraryNumber: "2023 5678 1234",
      works: 3,
      dateofAddition: "10.07.2023",
    },
    {
      id: 3,
      libraryNumber: "2023 1111 2222",
      works: 12,
      dateofAddition: "01.12.2023",
    },
    {
      id: 4,
      libraryNumber: "2023 6543 7890",
      works: 6,
      dateofAddition: "05.06.2023",
    },
    {
      id: 5,
      libraryNumber: "2023 8888 9999",
      works: 10,
      dateofAddition: "18.10.2023",
    },
  ];

  useEffect(() => {
    getLibraries();
  }, []);

  useEffect(() => {
    console.log("libs data", librariesData);
  }, [librariesData]);

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
      {librariesData?.map((library: any, index: any) => (
        <div className="flex flex-col border-b pb-6 border-gray-300 lg:flex-row m-4">
          <div className="w-full lg:w-[20%] mt-2">
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
    </Layout>
  );
};

export default page;
