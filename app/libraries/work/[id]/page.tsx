"use client";
import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";
import LibraryCard from "@/components/LibraryCard";
import { getSingleWork } from "@/api/works";
import { useParams } from "react-router-dom";
import RadioButtons from "@/components/RadioButtons";
import RadioButtonsId from "@/components/RadioButtonsId";
import LibraryCardLibPage from "@/components/LibraryCardLibPage";

const page = () => {
  const [workData, setWorkData] = useState<any>(null);
  const [id, setId] = useState<string | null>();
  const [libraryId, setLibraryId] = useState<string | null>("");

  useEffect(() => {
    const currentURL = window.location.href;
    const url = new URL(currentURL);
    const id = url.searchParams.get("id");
    const libId = url.searchParams.get("libraryId");
    console.log(id);
    setLibraryId(libId);
    setId(id);
  }, []);

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
  ];

  useEffect(() => {
    getWorkData();
  }, [id]);

  useEffect(() => {
    console.log("work res", workData);
  }, [workData]);

  const getWorkData = async () => {
    const res = await getSingleWork(id);
    setWorkData(res?.data.data.attributes);
  };

  console.log(workData);

  function truncateText(text: string | undefined, maxLength: number) {
    if (text && text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  }

  return (
    <Layout>
      <div className="2xl:px-[14rem]">
        {/* <div className="w-full lg:w-3/4 flex justify-center ml-0 lg:ml-4 2xl:ml-1 lg:justify-start mt-5 ">
          <RadioButtonsId Cpath={"/works"} />
        </div>
        <div className="hidden lg:block h-[1px] ml-[1.5rem] mr-[2.5rem] 2xl:ml-0 2xl:mr-0 mb-4 mt-10 bg-gray-200"></div> */}
        <div className="breadcrumbs flex py-[3rem] space-x-3 mt-4 md:mt-0 pl-[2.5rem] lg:pl-[1.5rem] 2xl:pl-0 2xl:ml-1">
          <div className="w-fit mr-5">
            <Link
              href={`/libraries`}
              className="flex text-xs lg:text-sm items-center text-custom-mobile-orange"
            >
              <IoIosArrowBack /> Back
            </Link>{" "}
          </div>
          <div className="w-fit">
            <Link
              href={`/libraries`}
              className="hidden md:flex  text-xs lg:text-sm items-center text-custom-mobile-orange"
            >
              {libraryId}
            </Link>
          </div>
          <div className="hidden md:flex items-center text-xs lg:text-sm text-custom-mobile-orange">
            {" "}
            {" > "}{" "}
          </div>
          <div className="w-fit">
            <div className="hidden md:flex items-center text-xs lg:text-sm text-custom-mobile-orange">
              {workData?.Titel}
            </div>
          </div>
        </div>

        <div className="product-intro w-full 2xl:mb-[8rem] flex flex-col lg:flex-row justify-between ">
          <div className="product-img w-full flex 2xl:w-1/2 justify-center ">
            <Image
              src={workData?.Titelbild.data.attributes.url}
              alt="product-img"
              objectFit="contain"
              height={200}
              width={400}
            />
          </div>

          <div className="product-details w-full mb-10 2xl:w-1/2 flex flex-col justify-center">
            <div className="flex flex-col gap-2">
              <h3 className="hidden lg:block text-custom-mobile-orange">
                Object data
              </h3>
              <h1 className="pl-[3rem] lg:px-0 mb-8 text-custom-brown font-medium text-[35px]">
                {workData?.Titel}
              </h1>
            </div>
            <div className="flex pl-[3rem] lg:px-0 w-full lg:flex-row flex-col gap-6">
              <div className="flex w-fit space-x-1">
                <div className="font-light  text-sm"> Condition: </div>
                <div className="text-sm"> {workData?.Zustand} </div>
              </div>
              <div className="flex w-fit space-x-1">
                <div className="font-light text-sm text-custom-mobile-orange">
                  Library:
                </div>
                <div className="text-sm text-custom-mobile-orange">
                  {libraryId}
                </div>
              </div>
            </div>

            {/* <div className="condition hidden lg:flex w-[75%] justify-start gap-6 my-6">
              <div className="text-custom-gray">
                Condition: <span className="text-custom-brown">api</span>
              </div>
              <div className="text-custom-mobile-orange">Library: api</div>
              <div
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  maxWidth: "100%",
                }}
                className="font-light text-custom-mobile-orange"
              >
                {truncateText(workData?.Information_EN, 175)}
                {workData?.Information_EN &&
                  workData?.Information_EN.length > 175 && (
                    <span>
                      {" "}
                      <a href="#">Read More</a>
                    </span>
                  )}
              </div>
            </div> */}

            <div className="flex w-full lg:w-1/2 justify-center lg:justify-start gap-6 mt-8 items-center">
              <div className="w-3/4 lg:w-1/3">
                <button className="rounded-full hover:bg-[#415479] lg:hover:bg-custom-mobile-orange hover:text-white w-full border border-[#415479] lg:border-custom-mobile-orange text-[#415479] lg:text-black p-1">
                  Inquire work
                </button>
              </div>
              <div className="hidden lg:flex text-custom-mobile-orange text-[16px]">
                Work's data
              </div>
            </div>
          </div>
        </div>

        <div className="product-info my-12 py-[4.5rem] w-full flex flex-col md:flex-row items-center md:flex-wrap justify-center lg:justify-evenly border-t border-b border-custom-offwhite">
          <div className="info-section w-1/2 lg:w-[15%] my-4 lg:my-0 text-center">
            <h3 className="text-custom-mobile-orange text-[16px]">Type</h3>
            <h1 className="text-custom-brown text-[14px] md:text-[20px]">
              {workData?.Art}
            </h1>
          </div>
          <div className="info-section w-1/2 lg:w-[15%] my-4 lg:my-0 text-center">
            <h3 className="text-custom-mobile-orange text-[16px]">Genre</h3>
            <h1 className="text-custom-brown text-[14px] md:text-[20px]">
              {workData?.Genre}
            </h1>
          </div>
          <div className="info-section w-1/2 lg:w-[15%] my-4 lg:my-0 text-center">
            <h3 className="text-custom-mobile-orange text-[16px]">Style</h3>
            <h1 className="text-custom-brown text-[14px] md:text-[20px]">
              {workData?.Stil}
            </h1>
          </div>
          <div className="info-section w-1/2 lg:w-[15%] my-4 lg:my-0 text-center">
            <h3 className="text-custom-mobile-orange text-[16px]">Year</h3>
            <h1 className="text-custom-brown text-[14px] md:text-[20px]">
              {workData?.Jahr}
            </h1>
          </div>
          <div className="info-section w-1/2 lg:w-[15%] my-4 lg:my-0 text-center">
            <h3 className="text-custom-mobile-orange text-[16px]">Author</h3>
            <h1 className="text-custom-brown text-[14px] md:text-[20px]">
              {workData?.Autor}
            </h1>
            {/* <h1 className="text-custom-brown text-[20px]">
              {" "}
              König von Neapel,
            </h1>
            <h1 className="text-custom-brown text-[20px]">
              oder sein Sohn Giovanni (Auftraggeber)
            </h1> */}
          </div>
          <div className="info-section w-1/2 lg:w-[15%] my-4 lg:my-0 text-center">
            <h3 className="text-custom-mobile-orange text-[16px]">Country</h3>
            <h1 className="text-custom-brown text-[14px] md:text-[20px]">
              {workData?.Land}
            </h1>
          </div>
        </div>

        <div className="product-origin gap-6 md:gap-0 my-6 py-12 px-10 lg:px-[16rem] flex flex-col lg:flex-row justify-center lg:justify-between">
          <div className="info-section w-fit flex items-center gap-2">
            <h3 className="text-custom-mobile-orange text-[16px]">Volumes</h3>
            <h1 className="text-custom-brown text-[14px] md:text-[20px]">
              {workData?.AnzahlBuecher}
            </h1>
          </div>
          <div className="info-section w-fit flex items-center gap-2">
            <h3 className="text-custom-mobile-orange text-[16px]">
              Total amount of pages
            </h3>
            <h1 className="text-custom-brown text-[14px] md:text-[20px]">
              {workData?.GesamtzahlSeiten}
            </h1>
          </div>
          <div className="info-section w-fit flex items-center gap-2">
            <h3 className="text-custom-mobile-orange text-[16px]">Language</h3>
            <h1 className="text-custom-brown text-[14px] md:text-[20px]">
              {workData?.Sprache}
            </h1>
          </div>
          <div className="info-section w-fit flex items-center gap-2">
            <h3 className="text-custom-mobile-orange text-[16px]">Century</h3>
            <h1 className="text-custom-brown text-[14px] md:text-[20px]">
              {workData?.Jahrhundert}
            </h1>
          </div>
        </div>

        <div className="product-remarks flex flex-col lg:flex-row justify-center gap-8">
          <div className="info px-[1.5rem] w-full lg:w-[45%]">
            <h1 className="text-[25px] text-custom-brown font-semibold mb-4">
              Info
            </h1>
            <p className="text-start lg:text-justify">
              {workData?.Information_EN}
            </p>
          </div>
          <div className="remarks px-[1.5rem] w-full lg:w-[45%]">
            <h1 className="text-[25px] text-custom-brown font-semibold mb-4">
              Remarks
            </h1>
            <p className="text-start lg:text-justify">
              {workData?.Anmerkung_EN}
            </p>
          </div>
        </div>

        <div className="ml-6 lg:ml-0  pl-0 lg:pl-5 2xl:pl-0 product-gallery lg:mx-0 mx-auto my-14 ">
          <h1 className="my-8 text-custom-brown text-[20px] font-semibold">
            Photo Gallery
          </h1>
          <div className="overflow-x-scroll custom-scrollbar pb-5">
            <div className="flex space-x-2">
              {workData?.Galerie.data.map((gallery: any, index: any) => (
                <div className="max-w-[220px] min-w-[220px]  mx-[10px] bg-lib-background 2xl:w-[330px] 2xl:h-fit 2xl:max-w-[330px] 2xl:min-w-[330px]  m-2 overflow-hidden transition-transform transform hover:scale-125">
                  <Image
                    src={gallery?.attributes.url}
                    width={330}
                    height={250}
                    alt="img"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* <div className="libraries-list pl-0 lg:pl-5 2xl:pl-0 flex flex-col">
          <h1 className="my-8 text-custom-brown w-full px-[10px] md:pl-0 text-[20px] font-semibold self-start">
            Libraries containing this work
          </h1>
          <div className="px-2 md:pl-2 flex flex-wrap gap-6">
            {libraryCards.map((library, index) => (
              <LibraryCardLibPage
                libraryNumber={library.libraryNumber}
                id={library.id}
                works={library.works}
                dateofAddition={library.dateofAddition}
                isRecommended={false}
                isBtn1={true}
                btn1Text={"Go to library"}
                isBtn2={true}
                btn2Text={"Go to object"}
              />
            ))}
          </div>
        </div> */}

        <div className="my-14 page-end">
          <div className="w-full lg:w-1/4">
            <Link
              href={`/works`}
              className="flex items-center text-custom-mobile-orange"
            >
              <IoIosArrowBack /> Back
            </Link>{" "}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default page;
