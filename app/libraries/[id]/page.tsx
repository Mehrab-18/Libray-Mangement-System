"use client";
import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

import LibraryCard from "@/components/LibraryCard";
import WorkCard from "@/components/WorkCard";
import { getSingleLibrary } from "@/api/libraries";

const page = () => {
  const [libraryData, setLibraryData] = useState<any>(null);

  useEffect(() => {
    getLibraryData();
  }, []);

  const getLibraryData = async () => {
    const res = await getSingleLibrary(7);
    setLibraryData(res?.data);
  };

  const workCardStyles = [
    { originalBtnBgColor: "custom-offwhite", originalBtnColor: "black" },
  ];

  const calculateLibraryWorks = () => {
    if (libraryData) {
      return libraryData.besitzes.length;
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

  return (
    <Layout>
      <div className="h-[79vh]">
        <div className="flex justify-start items-center text-custom-mobile-orange pl-6">
          <div className="w-full lg:w-1/4 ">
            <Link href={`/libraries`} className="flex items-center">
              <IoIosArrowBack /> Back
            </Link>
          </div>
          <div className="hidden lg:flex text-black pl-6 font-semibold w-3/4 items-baseline gap-2">
            Order by:
            <FormControl>
              <NativeSelect
                defaultValue={"type"}
                sx={{
                  boxShadow: "none",
                  "& .css-19ygod6-MuiNativeSelect-select-MuiInputBase-input-MuiInput-input.css-19ygod6-MuiNativeSelect-select-MuiInputBase-input-MuiInput-input.css-19ygod6-MuiNativeSelect-select-MuiInputBase-input-MuiInput-input":
                    { paddingRight: "14px" },
                }}
                disableUnderline
              >
                {" "}
                <option value={"type"}>Type</option>
                <option value={"new"}>Newest</option>
                <option value={"old"}>Oldest</option>
                <option value={"asc"}>A-Z</option>
                <option value={"desc"}>Z-A</option>
              </NativeSelect>
            </FormControl>
          </div>
        </div>
        <div className="flex flex-col h-full lg:flex-row justify-start gap-12">
          <div className="w-full lg:w-1/4 mt-4 h-full flex flex-col justify-between pl-2 lg:pb-12">
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
                  libraryNumber={libraryData?.username}
                  id={libraryData?.id}
                  works={calculateLibraryWorks()}
                  dateofAddition={formatDateToDDYYYYMM(libraryData?.createdAt)}
                  isRecommended={false}
                  isBtn1={true}
                  btn1Text={"Contact"}
                />
              </div>
            </div>
            <div className="hidden lg:flex mb-12 text-custom-mobile-orange">
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
            <div className="w-full flex justify-start flex-wrap">
              {libraryData?.besitzes.map((work: any, index: number) => (
                <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3" key={index}>
                  <Link href={`works/${work.id}`}>
                    <WorkCard
                      imageUrl={work?.stammwerke.Titelbild.url}
                      isType={true}
                      typeText={work?.stammwerke.Art}
                      titleText={work?.stammwerke.Titel}
                      footerText={`Astronomie:${work?.stammwerke.Jahr}`}
                      isfooterText={true}
                      isfooterText2={true}
                      footerText2={`Condition: sehr gut`}
                      hasVolumes={true}
                      noOfVolumes={work?.stammwerke.AnzahlBuecher}
                      cardStyles={workCardStyles}
                    />
                  </Link>
                </div>
              ))}
            </div>

            {/* <div className="my-8 lg:my-36 flex justify-center">
              <Pagination
                size="small"
                total={50}
                disabled={false}
                showSizeChanger
              />
            </div> */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default page;
