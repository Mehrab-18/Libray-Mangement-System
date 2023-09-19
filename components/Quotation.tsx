import React from "react";
import Image from "next/image";
const thomasImg = require("@/public/images/Thomas Carlyle_Asset.png");
const Quotation = () => {
  return (
    <div className="mb-72 flex justify-between items-center px-[15%]">
      <div className="w-full lg:w-1/2">
        <div className=" text-[32px] lg:text-[64px] text-custom-brown">
          <span className="text-custom-mobile-orange text-[64px] lg:text-[150px] leading-tight">
            "
          </span>
          Ich habe mir das paradies immer als eine art bibliothek vorgestellt
          <span className="text-custom-mobile-orange">"</span>
        </div>
        <div className="text-custom-mobile-orange text-center my-2 lg:my-0 text-[16px]">
          -Thomas Carlyle
        </div>
      </div>
      <div className="hidden lg:block">
        <Image src={thomasImg} alt="thomas" />
      </div>
    </div>
  );
};

export default Quotation;
