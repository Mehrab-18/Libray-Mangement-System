import React from "react";
import { LibraryCardProps } from "@/types";
import { FiThumbsUp } from "react-icons/fi";
import Link from "next/link";
import cardImage from "../public/images/card-lib.png";
import printImg from "../public/images/print.png";

import Image from "next/image";

const LibraryCardLibPage = ({
  id,
  condition,
  conditionColor = "#342923",
  libraryNumber,
  works,
  dateofAddition,
  isBtn1,
  btn1Text,
  isBtn2,
  btn2Text,
  isRecommended,
}: any) => {
  const handlePrintClick = () => {
    window.print(); // This will trigger the browser's print dialog
  };

  return (
    <div className="w-full lg:max-w-[290px] 2xl:max-w-[330px] 2xl:w-[320px] h-fit p-4 border shadow-lg rounded-lg m-2m flex flex-col  bg-lib-background justify-between">
      <div className="flex justify-center items-center h-[200px]">
        {/* <div className="bg-black text-white flex flex-col justify-center gap-3 items-center rounded-lg">
          <h1 className="font-semibold">Kollektum</h1>
          <h3 className="font-light">Das Buchregister</h3>
          <h5 className="font-light">Bibliotheksnummer</h5>
        </div> */}
        <Image src={cardImage} width={190} />
      </div>

      <div className="w-full mb-5 shadow-lg">
        <div className="">
          <hr />
        </div>
      </div>

      <div className="min-h-[180px] flex flex-col justify-between">
        <div className="flex justify-between">
          {condition !== null && (
            <button
              style={{ backgroundColor: conditionColor }}
              className={`rounded-full text-white text-[12px] py-2 px-4`}
            >
              {condition}
            </button>
          )}
          {isRecommended && (
            <button className=" flex items-baseline gap-2 bg-custom-mobile-orange text-white text-[12px] py-2 px-4 rounded-lg">
              <span className="flex items-baseline gap-2">
                <FiThumbsUp /> Recommended
              </span>
            </button>
          )}
        </div>
        <div className="">
          <h2 className="text-[12px] text-[#989390]">Library Number</h2>
          <p className="text-[20px] text-custom-brown">{libraryNumber}</p>
        </div>
        <div className="flex justify-start gap-10">
          <div>
            <h2 className="text-[12px] text-[#989390]">Extent</h2>
            <p className="text-[16px] text-custom-brown">{`${works} Works`}</p>
          </div>
          <div>
            <h2 className="text-[12px] text-[#989390]">Added</h2>
            <p className="text-[16px] text-custom-brown">{dateofAddition}</p>
          </div>
        </div>
      </div>
      {isBtn1 && (
        <div className="flex justify-center pt-[1.5rem]">
          <Link
            href={`/libraries/${id}`}
            className="bg-white hover:bg-custom-mobile-orange hover:text-white text-black text-center text-[16px] font-semibold border border-[#415479] lg:border-custom-mobile-orange w-3/4 py-2 px-4 rounded-full"
          >
            {btn1Text}
          </Link>
        </div>
      )}
      {isBtn2 && (
        <div className="flex justify-center pt-[1.5rem]">
          <Link
            href={`/libraries/${id}`}
            className="bg-white text-black text-center text-[16px] font-semibold border border-[#415479] lg:border-custom-mobile-orange w-3/4 py-2 px-4 rounded-full"
          >
            {btn2Text}
          </Link>
        </div>
      )}
      <div className="w-fit pt-10 cursor-pointer" onClick={handlePrintClick}>
        <Image src={printImg} width={75} />
      </div>
    </div>
  );
};

export default LibraryCardLibPage;
