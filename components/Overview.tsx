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
    <div className={` w-4/5 2xl:w-3/5 h-fit lg:h-[430px] shadow-xl mx-auto bg-custom-offwhite`}>
      <div
        className={`flex flex-col h-fit lg:flex-row lg:flex-row flex-col-reverse`}
      >
        <div className="w-full h-full justify-center flex flex-col items-center lg:w-1/2">
          <h2 className="text-[25px] xl:text-[45px] pl-2 sm:pl-0 w-full xl:pl-16 tracking-wide text-custom-brown lg:pt-16 lg:pb-7 font-semibold">
            {heading}
          </h2>
          <p className=" text-[13px] tracking-wider font-light leading-7 xl:text-[16px] px-2 sm:pl-0 w-full xl:w-[450px] pt-3 lg:pt-0 text-black pb-10">
            {paragraph}
          </p>
        </div>
        <div className="w-full  h-full justify-center flex items-center lg:w-1/2 lg:p-10 pt-7 lg:pt-0  lg:pb-7  lg:py-2 flex">
          <Image
            src={imageUrl}
            alt="Your Image"
            width={600}
            height={180}
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default Overview;
