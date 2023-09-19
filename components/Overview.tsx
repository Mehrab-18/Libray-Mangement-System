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
      className={`w-[90%] lg:w-3/5 mx-auto ${
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
        <div className="w-full lg:w-3/5 lg:pl-32">
          <h2 className="text-[50px] text-custom-brown py-6 font-bold">
            {heading}
          </h2>
          <p className="text-[16px] text-black pb-10">{paragraph}</p>
        </div>
        <div className="w-full lg:w-1/2 h-2/3 py-2 flex justify-center align-middle">
          <Image src={imageUrl} alt="Your Image" className="w-2/3 h-2/3" />
        </div>
      </div>
    </div>
  );
};

export default Overview;
