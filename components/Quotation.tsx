import React from "react";
import Image from "next/image";
const thomasImg = require("@/public/images/Thomas Carlyle_Asset.png");
const Quotation = () => {
  return (
    <div className="mb-44 lg:mb-80 mt-24 lg:mt-10 flex justify-around items-center">
      <div className="w-full lg:pl-28 lg:w-8/12 flex flex-col lg:justify-center lg:items-center">
        <div className=" text-[32px] lg:w-auto px-5 w-full lg:text-[48px] lg:mb-1 lg:text-left font-semibold tracking-wider	text-custom-brown">
          <span className="text-custom-mobile-orange text-[64px] lg:text-[50px] leading-tight">
            "
          </span>
          Ich habe mir das <br className="hidden lg:block" /> paradies immer als
          eine <br className="hidden lg:block" />
          <div className="flex">
            <div>
              art bibliothek vorgestellt
              <span className="text-custom-mobile-orange lg:hidden inline text-[54px] lg:text-[50px] leading-tight">
                "
              </span>
            </div>
            <div className="text-custom-mobile-orange hidden lg:block text-[54px] lg:text-[50px] leading-tight">
              "
            </div>
          </div>
        </div>
        <div className="text-custom-mobile-orange text-center my-2 mt-5 lg:my-0 text-[16px]">
          -Thomas Carlyle
        </div>
      </div>
      <div className="hidden lg:flex w-5/12 h-[500px]">
        <Image
          src={thomasImg}
          alt="thomas"
          width={320}
          height={600}
          className="lg:mb-14"
        />
      </div>
    </div>
  );
};

export default Quotation;
