"use client";
import { SearchBar } from "@/components";
import Layout from "@/components/Layout";
import RadioButtons from "@/components/RadioButtons";
import WorkCard from "@/components/WorkCard";
import React, { useEffect, useState } from "react";
import { getAllWorks, getPaginatedWorks } from "@/api/works";
import { Pagination } from "antd";
import Link from "next/link";
const book8 =
  require("@/public/images/Foto_25_08_22_12_33_53_copy_6abed8bc8b.png").default;
const book9 = require("@/public/images/IMG_2758_copy_ac71ac5550.png").default;
const book10 = require("@/public/images/IMG_4251_copy_bb12520a0a.png").default;
const book11 = require("@/public/images/IMG_6477_copy_34d0993ee2.png").default;

const page = () => {
  const [worksCardData, setWorksCardData] = useState<any>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalRecords, setTotalRecords] = useState(null);

  const workCardStyles = [
    { originalBtnBgColor: "custom-offwhite", originalBtnColor: "black" },
  ];

  useEffect(() => {
    getWorks();
  }, [currentPage]);

  const getWorks = async () => {
    const res: any = await getPaginatedWorks(currentPage, pageSize);
    setWorksCardData(res?.data.data);
    setTotalRecords(res?.data.meta.pagination.total);
  };

  const handlePaginationChange = (current: any) => {
    setCurrentPage(current);
  };

  return (
    <Layout>
      <div className="w-full lg:w-3/4 flex justify-center ml-0 lg:ml-4 lg:justify-start">
        <RadioButtons />
      </div>
      <div className="w-full border-black-100 flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/4">
          <div className="mx-3 my-2">
            <SearchBar placeholder="Search" />
          </div>
        </div>
        <div className=" w-full lg:w-[70%] flex flex-wrap justify-center lg:justify-start gap-10">
          {worksCardData?.map((work: any, index: number) => (
            <Link href={`works/${work.id}`}>
              <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4" key={index}>
                <WorkCard
                  imageUrl={work.attributes.Titelbild.data.attributes.url}
                  isOriginal={true}
                  originalText={work.attributes.Art}
                  description={work.attributes.Titel}
                  footerText={work.attributes.Stil}
                  isfooterText={true}
                  hasVolumes={false}
                  noOfVolumes={work.noOfVolumes}
                  cardStyles={[]}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
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
