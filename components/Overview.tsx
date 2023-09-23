import React from "react";
import img1 from "@/public/images/Laptop_Asset.png";

import Image from "next/image";
import { HomePageSectionProps } from "@/types";

const Overview = ({
  paragraph,
  heading,
  imageUrl,
  isOverview,
}: HomePageSectionProps) => {
  return (
    <div
      className={`w-[90%] lg:w-3/5 h-[506px] lg:h-[306px]  mx-auto ${
        isOverview ? "bg-custom-offwhite" : "bg-white"
      }`}
    >
      <div
        className={`flex flex-col px-6  lg:flex-row ${
          !isOverview
            ? "flex-col-reverse lg:flex-row-reverse"
            : "lg:flex-row flex-col-reverse"
        }`}
      >
        <div className="w-full lg:w-[360px] ">
          <h2 className="text-[25px] lg:text-[30px] text-custom-brown  lg:pl-8 lg:pt-16 lg:pb-7 font-bold">
            {heading}
          </h2>
          <p className=" text-[13px] lg:text-[10px] w-full lg:w-[300px] pt-3 lg:pt-0 lg:pl-8 text-black pb-10">
            {paragraph}
          </p>
        </div>
        <div className="w-full  lg:w-[450px] pt-7 lg:pt-0  lg:h-[350px] lg:pb-7  lg:py-2 flex justify-center items-center ">
          <Image
            src={imageUrl}
            alt="Your Image"
            className="w-3/3 lg:w-2/3 h-2/3"
          />
        </div>
      </div>
    </div>
  );
};

export default Overview;
