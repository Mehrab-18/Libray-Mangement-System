"use client";
import { SearchBar } from "@/components";
import Layout from "@/components/Layout";
import { ClipLoader } from "react-spinners";
import RadioButtons from "@/components/RadioButtons";
import WorkCard from "@/components/WorkCard";
import React, { useEffect, useState } from "react";
import { getPaginatedWorks } from "@/api/works";
import { Pagination } from "antd";
import Link from "next/link";

const page = () => {
  const [worksCardData, setWorksCardData] = useState<any>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(9);
  const [totalRecords, setTotalRecords] = useState(0);
  const pageSizeOptions = ["9", "18", "60"];

  useEffect(() => {
    getWorks();
  }, [currentPage, pageSize]);

  const getWorks = async () => {
    const res: any = await getPaginatedWorks(currentPage, pageSize);
    setWorksCardData(res?.data.data);
    setTotalRecords(res?.data.meta.pagination.total);
  };

  const handlePaginationChange = (current: any, size: any) => {
    setCurrentPage(current);
    setPageSize(size);
  };

  console.log("works", worksCardData);

  return (
    <Layout>
      <div className="lg:pl-32">
        <div className="w-full lg:w-3/4 flex justify-center ml-0 lg:ml-4 lg:justify-start mt-5 ">
          <RadioButtons />
        </div>
        <div className="hidden lg:block h-[1px] w-[1100px] my-10 bg-gray-200"></div>
        <div className="w-full border-black-100 flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/4">
            <div className="mx-3 my-2">
              <SearchBar placeholder="Search" />
            </div>
          </div>
          {worksCardData === null ? (
            <div className="w-full flex justify-center items-center">
              <ClipLoader color="#c25b3c" size={45} />
            </div>
          ) : (
            <div className=" w-full lg:w-[70%] flex flex-wrap justify-center lg:justify-start gap-3">
              {worksCardData?.map((work: any, index: number) => (
                <Link href={{ pathname: `works/${work.id}`, query: work }}>
                  <div
                    className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4"
                    key={index}
                  >
                    <WorkCard
                      imageUrl={
                        work?.attributes?.Titelbild?.data?.attributes?.url
                      }
                      isHomePageCard={false}
                      isType={true}
                      typeText={work.attributes.Art}
                      titleText={work.attributes.Titel}
                      footerText={work.attributes.Stil}
                      isfooterText={true}
                      hasVolumes={true}
                      noOfVolumes={work.attributes.AnzahlBuecher}
                      cardStyles={[]}
                    />
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
        <div className="my-8 lg:my-36 flex justify-center">
          <Pagination
            size="small"
            total={totalRecords}
            current={currentPage}
            disabled={false}
            showSizeChanger
            pageSizeOptions={pageSizeOptions}
            onChange={handlePaginationChange}
          />
        </div>
      </div>
    </Layout>
  );
};

export default page;
