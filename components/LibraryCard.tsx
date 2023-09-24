import React from "react";
import { LibraryCardProps } from "@/types";
import { FiThumbsUp } from "react-icons/fi";
import Link from "next/link";

const LibraryCard = ({
  id,
  condition,
  conditionColor,
  libraryNumber,
  works,
  dateofAddition,
  isBtn1,
  btn1Text,
  isBtn2,
  btn2Text,
  isRecommended,
}: any) => {
  console.log("color", conditionColor);
  return (
    <div className="min-w-[300px] min-h-[300px] p-4 border shadow-lg rounded-lg m-2m flex flex-col justify-between">
      <div>
        <div className="flex justify-between mb-4">
          <button
            style={{ backgroundColor: conditionColor }}
            className={`rounded-full text-white text-[12px] py-2 px-4`}
          >
            {condition}
          </button>
          {isRecommended && (
            <button className="flex items-baseline gap-2 bg-custom-mobile-orange text-white text-[12px] py-2 px-4 rounded-lg">
              <FiThumbsUp /> Recommended
            </button>
          )}
        </div>
        <div className="mb-4">
          <h2 className="text-[12px] text-[#989390]">Library Number</h2>
          <p className="text-[20px] text-custom-brown">{libraryNumber}</p>
        </div>
        <div className="mb-4 flex justify-start gap-10">
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
            className="bg-white hover:bg-custom-mobile-orange hover:text-white text-black text-center text-[16px] font-semibold border border-custom-mobile-orange w-3/4 py-2 px-4 rounded-full"
          >
            {btn1Text}
          </Link>
        </div>
      )}
      {isBtn2 && (
        <div className="flex justify-center">
          <Link
            href={`/libraries/${id}`}
            className="bg-white text-black text-center text-[16px] font-semibold border border-custom-mobile-orange w-3/4 py-2 px-4 rounded-full"
          >
            {btn2Text}
          </Link>
        </div>
      )}
    </div>
  );
};

export default LibraryCard;
