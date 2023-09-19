import React from "react";
import Layout from "@/components/Layout";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

import LibraryCard from "@/components/LibraryCard";
import WorkCard from "@/components/WorkCard";
import { Pagination } from "antd";
import CardContainer from "@/components/CardContainer";
const book8 =
  require("@/public/images/Foto_25_08_22_12_33_53_copy_6abed8bc8b.png").default;
const book9 = require("@/public/images/IMG_2758_copy_ac71ac5550.png").default;
const book10 = require("@/public/images/IMG_4251_copy_bb12520a0a.png").default;
const book11 = require("@/public/images/IMG_6477_copy_34d0993ee2.png").default;

const page = () => {
  const library = {
    id: 1,
    libraryNumber: "2023 9876 5432",
    works: 8,
    dateofAddition: "22.09.2023",
  };

  const workCard = [
    {
      id: 1,
      imageUrl: book8,
      isOriginal: true,
      originalText: "Facismile",
      description: "Das bis",
      isFooterText: true,
      footerText: "Astronomie:2022",
      isFooterText2: true,
      footerText2: "Condition:very good",
      hasVolumes: false,
      noOfVolumes: "3",
    },
    {
      id: 2,
      imageUrl: book9,
      isOriginal: true,
      originalText: "Facismile",
      isFooterText: true,
      description: "Unser Jahrhundert ",
      footerText: "Astronomie:2022",
      isFooterText2: true,
      footerText2: "Condition:very good",
      hasVolumes: false,
      noOfVolumes: "3",
    },
    {
      id: 3,
      imageUrl: book10,
      isOriginal: true,
      originalText: "Facismile",
      isFooterText: true,
      description: "Aratea Vaticana",
      footerText: "Astronomie:2022",
      isFooterText2: true,
      footerText2: "Condition:very good",
      hasVolumes: true,
      noOfVolumes: "3",
    },
    {
      id: 4,
      imageUrl: book11,
      isOriginal: true,
      originalText: "Facismile",
      isFooterText: true,
      description: "Alexander Magnus",
      footerText: "Astronomie:2022",
      isFooterText2: true,
      footerText2: "Condition:very good",
      hasVolumes: false,
      noOfVolumes: "3",
    },
    {
      id: 5,
      imageUrl: book8,
      isOriginal: true,
      description: "DasTon",
      originalText: "Facismile",
      isFooterText: true,
      footerText: "Astronomie:2022",
      isFooterText2: true,
      footerText2: "Condition:very good",
      hasVolumes: false,
      noOfVolumes: "3",
    },
    {
      id: 6,
      imageUrl: book10,
      isOriginal: true,
      description: "Aratea Vaticana",
      originalText: "Facismile",
      isFooterText: true,
      footerText: "Astronomie:2022",
      isFooterText2: true,
      footerText2: "Condition:very good",
      hasVolumes: true,
      noOfVolumes: "3",
    },
    {
      id: 7,
      imageUrl: book11,
      isOriginal: true,
      description: "Alexander Magnus",
      originalText: "Facismile",
      isFooterText: true,
      footerText: "Astronomie:2022",
      isFooterText2: true,
      footerText2: "Condition:very good",
      hasVolumes: false,
      noOfVolumes: "3",
    },
    {
      id: 8,
      imageUrl: book10,
      isOriginal: true,
      description: "Aratea Vaticana",
      originalText: "Facismile",
      isFooterText: true,
      footerText: "Astronomie:2022",
      isFooterText2: true,
      footerText2: "Condition:very good",
      hasVolumes: true,
      noOfVolumes: "3",
    },
    {
      id: 9,
      imageUrl: book11,
      isOriginal: true,
      description: "Alexander Magnus",
      originalText: "Facismile",
      isFooterText: true,
      footerText: "Astronomie:2022",
      isFooterText2: true,
      footerText2: "Condition:very good",
      hasVolumes: false,
      noOfVolumes: "3",
    },
    {
      id: 10,
      imageUrl: book10,
      isOriginal: true,
      description: "Aratea Vaticana",
      originalText: "Facismile",
      isFooterText: true,
      footerText: "Astronomie:2022",
      isFooterText2: true,
      footerText2: "Condition:very good",
      hasVolumes: true,
      noOfVolumes: "3",
    },
    {
      id: 11,
      imageUrl: book11,
      isOriginal: true,
      description: "Alexander Magnus",
      originalText: "Facismile",
      isFooterText: true,
      footerText: "Astronomie:2022",
      isFooterText2: true,
      footerText2: "Condition:very good",
      hasVolumes: false,
      noOfVolumes: "3",
    },
  ];

  const workCardStyles = [
    { originalBtnBgColor: "custom-offwhite", originalBtnColor: "black" },
  ];

  return (
    <Layout>
      <div className="">
        <div className="flex justify-start items-center text-custom-mobile-orange pl-6">
          <div className="w-full lg:w-1/4 ">
            <Link href={`/libraries`} className="flex items-center">
              <IoIosArrowBack /> Back
            </Link>
          </div>
          <div className="hidden lg:flex text-black pl-6 font-semibold w-3/4 items-baseline gap-2">
            Order by:
            <FormControl>
              <NativeSelect defaultValue={"type"}>
                <option value={"type"}>Type</option>
                <option value={"new"}>Newest</option>
                <option value={"old"}>Oldest</option>
                <option value={"asc"}>A-Z</option>
                <option value={"desc"}>Z-A</option>
              </NativeSelect>
            </FormControl>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-start gap-12">
          <div className="w-full lg:w-1/4 mt-4 flex flex-col justify-between pl-2 lg:pb-12">
            <div>
              <div className="flex justify-center items-center h-[200px]">
                <div className="bg-black text-white flex flex-col justify-center gap-3 items-center rounded-lg w-[90%] h-[85%]">
                  <h1 className="font-semibold">Kollektum</h1>
                  <h3 className="font-light">Das Buchregister</h3>
                  <h5 className="font-light">Bibliotheksnummer</h5>
                </div>
              </div>
              <div className="mx-4 lg:mx-0">
                <LibraryCard
                  libraryNumber={library.libraryNumber}
                  id={library.id}
                  works={library.works}
                  dateofAddition={library.dateofAddition}
                  isRecommended={false}
                  isBtn1={true}
                  btn1Text={"Go to library"}
                />
              </div>
            </div>
            <div className="hidden lg:flex text-custom-mobile-orange">
              <Link href={`/libraries`} className="flex items-center">
                {" "}
                <IoIosArrowBack /> Back
              </Link>
            </div>
          </div>
          <div className="flex lg:hidden text-black pl-6 font-semibold w-[90%] mr-4 justify-end items-baseline gap-2">
            Order by:
            <FormControl>
              <NativeSelect defaultValue={"type"}>
                <option value={"type"}>Type</option>
                <option value={"new"}>Newest</option>
                <option value={"old"}>Oldest</option>
                <option value={"asc"}>A-Z</option>
                <option value={"desc"}>Z-A</option>
              </NativeSelect>
            </FormControl>
          </div>
          <div className="w-full lg:w-[55%] lg:mt-4">
            <div className="w-full flex justify-center flex-wrap">
              {workCard.map((work, index) => (
                <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3" key={index}>
                  <Link href={`works/${work.id}`}>
                    <WorkCard
                      imageUrl={work.imageUrl}
                      isOriginal={work.isOriginal}
                      originalText={work.originalText}
                      description={work.description}
                      footerText={work.footerText}
                      isfooterText={work.isFooterText}
                      isfooterText2={true}
                      footerText2={work.footerText2}
                      hasVolumes={work.hasVolumes}
                      noOfVolumes={work.noOfVolumes}
                      cardStyles={workCardStyles}
                    />
                  </Link>
                </div>
              ))}
            </div>
            <div className="my-8 lg:my-36 flex justify-center">
              <Pagination
                size="small"
                total={50}
                disabled={false}
                showSizeChanger
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default page;
