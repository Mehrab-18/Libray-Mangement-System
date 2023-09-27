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
      className={`w-full flex md:flex-row flex-col items-center h-fit mx-auto bg-white ${
        isOverview ? "bg-custom-offwhite" : "bg-white"
      }`}
    >
      <div
        className={`flex flex-col w-full items-center mx-auto  lg:px-6  lg:flex-row ${
          !isOverview
            ? "flex-col-reverse lg:flex-row-reverse"
            : "lg:flex-row flex-col-reverse"
        }`}
      >
        <div className="w-full lg:w-1/2 lg:pb-24">
          <h2 className="text-[25px] lg:text-4xl tracking-wide text-custom-brown py-6 px-3 lg:px-0 lg:py-0 lg:mt-5  lg:pl-8 lg:pt-16 lg:pb-7 font-semibold lg:whitespace-nowrap">
            {heading}
          </h2>
          <p className=" text-[13px] tracking-wider font-light leading-5 lg:text-[10px] leading-4 tracking-wide w-full lg:w-[350px] pt-4 px-3 lg:px-0 lg:pt-0 lg:pl-8 text-black pb-10">
            {paragraph}
          </p>
        </div>
        <div className="w-full lg:w-1/2 pt-7 lg:pt-0 lg:pb-7  lg:py-2 flex justify-end ">
          <Image
            src={imageUrl}
            alt="Your Image"
            width={600}
            height={680}
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default StartWithUs;
