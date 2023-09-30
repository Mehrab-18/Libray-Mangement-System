import React from "react";
import { LibraryCardProps } from "@/types";
import { FiThumbsUp } from "react-icons/fi";
import Link from "next/link";

const LibraryCard = ({
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
  return (
    <div className="min-w-[300px] min-h-[340px] p-4 border shadow-lg rounded-lg m-2m flex flex-col justify-between">
      <div className="min-h-[180px] flex flex-col justify-between">
        <div className="flex justify-between">
          {condition !== null && (
            <button
              style={{ backgroundColor: conditionColor }}
              className={`w-[30%] rounded-full text-white text-[12px] py-2 px-4`}
            >
              {condition}
            </button>
          )}
          {isRecommended && (
            <button className="w-[50%] flex items-baseline gap-2 bg-custom-mobile-orange text-white text-[12px] py-2 px-4 rounded-lg">
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
        <div className="flex justify-center">
          <Link
            href={`/libraries/${id}`}
            className="bg-white hover:bg-custom-mobile-orange hover:text-white text-black text-center text-[16px] font-semibold border border-[#415479] lg:border-custom-mobile-orange w-3/4 py-2 px-4 rounded-full"
          >
            {btn1Text}
          </Link>
        </div>
      )}
      {isBtn2 && (
        <div className="flex justify-center">
          <Link
            href={`/libraries/${id}`}
            className="bg-white text-black text-center text-[16px] font-semibold border border-[#415479] lg:border-custom-mobile-orange w-3/4 py-2 px-4 rounded-full"
          >
            {btn2Text}
          </Link>
        </div>
      )}
    </div>
  );
};

export default LibraryCard;
