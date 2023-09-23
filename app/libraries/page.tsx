"use client";
import Layout from "@/components/Layout";
import { ClipLoader } from "react-spinners";
import LibraryCard from "@/components/LibraryCard";
import WorkCard from "@/components/WorkCard";
import { getAllLibraries } from "@/api/libraries";
import React, { useEffect, useState } from "react";
import { Pagination } from "antd";
import Link from "next/link";

const page = () => {
  const [librariesData, setLibrariesData] = useState<any>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalRecords, setTotalRecords] = useState(0);

  useEffect(() => {
    getLibraries();
  }, []);

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

  function formatDateToDDYYYYMM(dateString: string) {
    const createdAtDate = new Date(dateString);

    const year = createdAtDate.getFullYear();
    const month = String(createdAtDate.getMonth() + 1).padStart(2, "0"); // Adding 1 because months are zero-indexed
    const day = String(createdAtDate.getDate()).padStart(2, "0");

    const formattedDate = `${day}-${year}-${month}`;

    return formattedDate;
  }

  const handlePaginationChange = (current: any) => {
    setCurrentPage(current);
  };

  return (
    <>
      <Layout>
        {librariesData === null ? (
          <div className="w-full h-full flex justify-center items-center">
            <ClipLoader color="#c25b3c" size={45} />
          </div>
        ) : (
          librariesData.map((library: any, index: number) => (
            <div
              className="flex flex-col border-b border-gray-300 pb-6 lg:px-36  lg:flex-row m-4"
              key={library.id}
            >
              <div className=" w-full lg:w-[20%] mt-2">
                <LibraryCard
                  libraryNumber={library.username}
                  id={library.id}
                  works={calculateLibraryWorks(library)}
                  dateofAddition={formatDateToDDYYYYMM(library.createdAt)}
                  isRecommended={false}
                  isBtn1={true}
                  btn1Text={"Go to library"}
                />
              </div>
              <div className=" w-full lg:w-[70%] max-w-screen-lg overflow-x-auto">
                <div className="overflow-x-auto custom-scrollbar">
                  <div className="flex space-x-2">
                    {library.besitzes?.map((work: any, index: number) => (
                      <Link href={`works/${work.id}`}>
                        <WorkCard
                          isfooterText={true}
                          imageUrl={work.stammwerke?.Titelbild.url}
                          isType={false}
                          titleText={work.stammwerke?.Titel}
                          footerText={work.stammwerke?.Stil}
                          key={work.id}
                          footerMargin={true}
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
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
    </>
  );
};
export default page;
