import React from "react";
import img1 from "@/public/images/Laptop_Asset.png";

import Image from "next/image";
import { HomePageSectionProps } from "@/types";

const Showroom = ({
  paragraph,
  heading,
  imageUrl,
  isOverview,
}: HomePageSectionProps) => {
  return (
     // <div
    //   className={`w-[90%] lg:w-3/5 h-[506px] lg:h-[306px]  mx-auto ${
    //     isOverview ? "bg-custom-offwhite" : "bg-white"
    //   }`}
    // >
    //   <div
    //     className={`flex flex-col px-2 lg:px-6  lg:flex-row ${
    //       !isOverview
    //         ? "flex-col-reverse lg:flex-row-reverse"
    //         : "lg:flex-row flex-col-reverse"
    //     }`}
    //   >
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
          <h2 className="text-[25px] lg:text-4xl text-custom-brown py-6 px-3 lg:px-0 lg:py-0 lg:mt-5  lg:pl-8 lg:pt-16 lg:pb-7 font-semibold lg:whitespace-nowrap">
            {heading}
          </h2>
          <p className=" text-[13px] lg:text-[10px] tracking-wide leading-5 w-full lg:w-[350px] font-light pt-4 px-3 lg:px-0 lg:pt-0 lg:pl-8 text-black pb-10">
            {paragraph}
          </p>
        </div>
        {/* <div className="w-full lg:w-[560px] lg:ml-9 lg:mt-14 "> */}
        {/* <div className="w-[30px] h-[20px] bg-black text-white text-xs font-medium ">
            Shop
          </div>
            */}
        {/* <h2 className="text-[25px] lg:text-[27px] text-custom-brown pt-9 pb-5 text-center lg:text-left lg:pl-8 lg:pt-16 lg:pb-5 font-bold">
            {heading}
          </h2>
          <p className=" text-[13px] lg:text-[10px] w-full lg:w-[300px] pt-3 lg:pt-0 lg:pl-8 text-black pb-5 lg:pb-10">
            {paragraph}
          </p>
        </div> */}
        {/* <div className="w-full lg:w-[450px] pt-7 lg:pt-0  lg:h-[450px] lg:pb-7  lg:py-2 flex justify-center items-center ">
          <Image
            src={imageUrl}
            alt="Your Image"
            width={300}
            height={400}
            className="w-3/3 lg:w-[360px] lg:h-[250px] h-2/3"
          />
        </div> */}
        <div className="w-full lg:w-1/2 pt-7 lg:pt-0 lg:pb-7  lg:py-2 flex justify-end ">
          <Image
            src={imageUrl}
            alt="Your Image"
            width={600}
            height={580}
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default Showroom;
