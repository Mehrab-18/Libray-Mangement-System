import React from "react";
import img1 from "@/public/images/Laptop_Asset.png";

import Image from "next/image";
import { HomePageSectionProps } from "@/types";

const StartWithUs = ({
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
        className={`flex flex-col  lg:px-6  lg:flex-row ${
          !isOverview
            ? "flex-col-reverse lg:flex-row-reverse"
            : "lg:flex-row flex-col-reverse"
        }`}
      >
        <div className="w-full lg:w-[460px] ">
          <h2 className="text-[25px] lg:text-[30px] text-custom-brown py-6 px-3 lg:px-0 lg:py-0 lg:mt-5  lg:pl-8 lg:pt-16 lg:pb-7 font-bold lg:whitespace-nowrap">
            {heading}
          </h2>
          <p className=" text-[13px] lg:text-[10px] w-full lg:w-[350px] pt-4 px-3 lg:px-0 lg:pt-0 lg:pl-8 text-black pb-10">
            {paragraph}
          </p>
        </div>
        <div className="w-full  lg:w-[470px] pt-7 lg:pt-0  lg:h-[400px] lg:pb-7  lg:py-2 flex justify-center items-center ">
          <Image
            src={imageUrl}
            alt="Your Image"
            className="w-full lg:w-[460px] h-2/3"
          />
        </div>
      </div>
    </div>
  );
};

export default StartWithUs;
