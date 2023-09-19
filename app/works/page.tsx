"use client";
import { SearchBar } from "@/components";
import Layout from "@/components/Layout";
import RadioButtons from "@/components/RadioButtons";
import WorkCard from "@/components/WorkCard";
import React, { useEffect, useState } from "react";
import { getAllWorks } from "@/api/works";
import { Pagination } from "antd";
import Link from "next/link";
const book8 =
  require("@/public/images/Foto_25_08_22_12_33_53_copy_6abed8bc8b.png").default;
const book9 = require("@/public/images/IMG_2758_copy_ac71ac5550.png").default;
const book10 = require("@/public/images/IMG_4251_copy_bb12520a0a.png").default;
const book11 = require("@/public/images/IMG_6477_copy_34d0993ee2.png").default;

const page = () => {
  const [worksCardData, setWorksCardData] = useState();

  const workCard = [
    {
      id: 1,
      imageUrl: book8,
      isOriginal: true,
      originalText: "Facsimile",
      description: "Das bis",
      isFooterText: true,
      footerText: "Nachschlagewerke",
      hasVolumes: true,
      noOfVolumes: "3",
    },
    {
      id: 2,
      imageUrl: book9,
      isOriginal: true,
      originalText: "Facsimile",
      description: "Unser Jahrhundert ",
      isFooterText: true,
      footerText: "Nachschlagewerke",
      hasVolumes: true,
      noOfVolumes: "3",
    },
    {
      id: 3,
      imageUrl: book10,
      isOriginal: true,
      originalText: "Facsimile",
      description: "Aratea Vaticana",
      isFooterText: true,
      footerText: "Nachschlagewerke",
      hasVolumes: true,
      noOfVolumes: "3",
    },
    {
      id: 4,
      imageUrl: book11,
      isOriginal: true,
      originalText: "Facsimile",
      description: "Alexander Magnus",
      isFooterText: true,
      footerText: "Nachschlagewerke",
      hasVolumes: true,
      noOfVolumes: "3",
    },
    {
      id: 5,
      imageUrl: book8,
      isOriginal: true,
      originalText: "Facsimile",
      description: "DasTon",
      isFooterText: true,
      footerText: "Nachschlagewerke",
      hasVolumes: true,
      noOfVolumes: "3",
    },
  ];

  const workCardStyles = [
    { originalBtnBgColor: "custom-offwhite", originalBtnColor: "black" },
  ];

  useEffect(() => {
    getWorks();
  }, []);

  const getWorks = async () => {
    const res = await getAllWorks();
    setWorksCardData(res?.data);
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
          {workCard.map((work, index) => (
            <Link href={`works/${work.id}`}>
              <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4" key={index}>
                <WorkCard
                  imageUrl={work.imageUrl}
                  isOriginal={work.isOriginal}
                  originalText={work.originalText}
                  description={work.description}
                  footerText={work.footerText}
                  isfooterText={work.isFooterText}
                  hasVolumes={work.hasVolumes}
                  noOfVolumes={work.noOfVolumes}
                  cardStyles={workCardStyles}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="my-8 lg:my-36 flex justify-center">
        <Pagination size="small" total={50} disabled={false} showSizeChanger />
      </div>
    </Layout>
  );
};

export default page;
