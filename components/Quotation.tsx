import React from "react";
import Image from "next/image";
const thomasImg = require("@/public/images/Thomas Carlyle_Asset.png");
const Quotation = () => {
  return (
    <div className="mb-44 lg:mb-80 mt-24 lg:mt-0 flex justify-between items-center px-[19%]">
      <div className="w-full lg:w-[780px]">
        <div className=" text-[32px] lg:text-[38px] lg:mb-14 lg:text-left font-extrabold text-custom-brown">
          <span className="text-custom-mobile-orange text-[64px] lg:text-[50px] leading-tight">
            "
          </span>
          Ich habe mir das <br className="hidden lg:block" /> paradies immer als
          eine <br className="hidden lg:block" /> art bibliothek vorgestellt
          <span className="text-custom-mobile-orange hidden lg:block text-[54px] lg:text-[50px] leading-tight">
            "
          </span>
        </div>
        <div className="text-custom-mobile-orange text-center my-2 lg:my-0 text-[16px]">
          -Thomas Carlyle
        </div>
      </div>
      <div className="hidden lg:block">
        <Image
          src={thomasImg}
          alt="thomas"
          width={200}
          height={200}
          className="lg:mb-14"
        />
      </div>
    </div>
  );
};

export default Quotation;
